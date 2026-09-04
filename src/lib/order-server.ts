import { createServerFn } from "@tanstack/react-start";
import { ObjectId, type Document, type UpdateFilter } from "mongodb";
import { z } from "zod";
import type { Order, OrderStatus, PaymentStatus } from "@/lib/catalog-types";

const orderInputSchema = z.object({
  token: z.string().min(1),
  customer: z.object({ name: z.string().trim().min(2), email: z.string().email() }),
  shippingAddress: z.object({ address: z.string().trim().min(6), city: z.string().trim().min(2) }),
  items: z
    .array(
      z.object({
        productId: z.string().refine(ObjectId.isValid),
        quantity: z.number().int().positive(),
      }),
    )
    .min(1),
  notes: z.string().trim().max(1000).optional(),
});

const statuses: OrderStatus[] = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];

async function database() {
  const { ensureIndex, getMongoDb } = await import("@/lib/mongodb");
  const db = await getMongoDb();
  await Promise.all([
    ensureIndex(db, "orders", { orderNumber: 1 }, { unique: true }),
    ensureIndex(db, "orders", { userId: 1, createdAt: -1 }),
    ensureIndex(db, "orders", { status: 1 }),
    ensureIndex(db, "orders", { paymentStatus: 1 }),
    ensureIndex(db, "orders", { createdAt: -1 }),
  ]);
  return db;
}

async function authenticatedUser(token: string | undefined, adminOnly = false) {
  if (!token) throw new Error("UNAUTHORIZED");
  const { verifyToken } = await import("@/lib/auth");
  const tokenUser = verifyToken(token);
  if (!tokenUser || !ObjectId.isValid(tokenUser.id)) throw new Error("UNAUTHORIZED");
  const db = await database();
  const user = await db.collection("users").findOne({ _id: new ObjectId(tokenUser.id) });
  if (!user) throw new Error("UNAUTHORIZED");
  if (adminOnly && user["role"] !== "admin") throw new Error("FORBIDDEN");
  return { db, user };
}

export const createOrder = createServerFn({ method: "POST" })
  .validator((data: unknown) => orderInputSchema.parse(data))
  .handler(async ({ data }) => {
    const { db, user } = await authenticatedUser(data.token);
    const productIds = data.items.map((item) => new ObjectId(item.productId));
    const products = await db
      .collection("products")
      .find({ _id: { $in: productIds }, isActive: true })
      .toArray();
    const byId = new Map(products.map((product) => [product._id.toString(), product]));
    const resolvedItems = data.items.map((item) => {
      const product = byId.get(item.productId);
      if (!product) throw new Error("PRODUCT_NOT_FOUND");
      if (Number(product["stock"]) < item.quantity) throw new Error("INSUFFICIENT_STOCK");
      return {
        productId: product._id,
        name: String(product["name"]),
        slug: String(product["slug"]),
        sku: String(product["sku"]),
        price: Number(product["price"]),
        quantity: item.quantity,
        image: Array.isArray(product["images"])
          ? String((product["images"] as { url?: unknown }[])[0]?.url ?? "")
          : "",
      };
    });
    const subtotal = resolvedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 200 ? 0 : 12;
    const now = new Date();
    const order = {
      orderNumber: await nextOrderNumber(db),
      userId: user["_id"],
      customer: { name: data.customer.name, email: String(user["email"]), phone: user["phone"] },
      shippingAddress: data.shippingAddress,
      items: resolvedItems,
      subtotal,
      shipping,
      total: subtotal + shipping,
      paymentMethod: "COD" as const,
      paymentStatus: "unpaid" as const,
      status: "Pending" as const,
      statusHistory: [{ status: "Pending" as const, timestamp: now }],
      ...(data.notes ? { notes: data.notes } : {}),
      createdAt: now,
      updatedAt: now,
    };
    try {
      const result = await db.collection("orders").insertOne(order);
      const saved = await db.collection("orders").findOne({ _id: result.insertedId });
      return { success: true, order: saved ? mongoToOrder(saved) : undefined };
    } catch (error) {
      console.error("Create order error:", error);
      return { success: false, message: "Unable to place your order" };
    }
  });

export const getMyOrders = createServerFn({ method: "GET" })
  .validator((token: string) => token)
  .handler(async ({ data: token }) => {
    const { db, user } = await authenticatedUser(token);
    const orders = await db
      .collection("orders")
      .find({ userId: user["_id"] })
      .sort({ createdAt: -1 })
      .toArray();
    return orders.map(mongoToOrder);
  });

export const getAdminOrders = createServerFn({ method: "GET" })
  .validator((data: { token: string; status?: OrderStatus }) => data)
  .handler(async ({ data }) => {
    const { db } = await authenticatedUser(data.token, true);
    const query = data.status ? { status: data.status } : {};
    const orders = await db
      .collection("orders")
      .find(query)
      .sort({ createdAt: -1 })
      .limit(500)
      .toArray();
    return orders.map(mongoToOrder);
  });

export const getOrderById = createServerFn({ method: "GET" })
  .validator((data: { token: string; id: string }) => data)
  .handler(async ({ data }) => {
    const { db, user } = await authenticatedUser(data.token);
    const orderFilter = ObjectId.isValid(data.id)
      ? { _id: new ObjectId(data.id) }
      : { orderNumber: data.id };
    const query = user["role"] === "admin" ? orderFilter : { ...orderFilter, userId: user["_id"] };
    const order = await db.collection("orders").findOne(query);
    return order ? mongoToOrder(order) : null;
  });

export const updateOrderStatus = createServerFn({ method: "POST" })
  .validator((data: { token: string; id: string; status: OrderStatus; note?: string }) => data)
  .handler(async ({ data }) => {
    if (!statuses.includes(data.status)) return { success: false, message: "Invalid order status" };
    const { db } = await authenticatedUser(data.token, true);
    const now = new Date();
    const filter = ObjectId.isValid(data.id)
      ? { _id: new ObjectId(data.id) }
      : { orderNumber: data.id };
    const statusUpdate = {
      $set: { status: data.status, updatedAt: now },
      $push: {
        statusHistory: {
          status: data.status,
          timestamp: now,
          ...(data.note ? { note: data.note } : {}),
        },
      },
    } as unknown as UpdateFilter<Document>;
    const update = await db.collection("orders").updateOne(filter, statusUpdate);
    const result = update.modifiedCount ? await db.collection("orders").findOne(filter) : null;
    return result
      ? { success: true, order: mongoToOrder(result) }
      : { success: false, message: "Order not found" };
  });

export const updatePaymentStatus = createServerFn({ method: "POST" })
  .validator((data: { token: string; id: string; paymentStatus: PaymentStatus }) => data)
  .handler(async ({ data }) => {
    if (!["unpaid", "paid"].includes(data.paymentStatus))
      return { success: false, message: "Invalid payment status" };
    const { db } = await authenticatedUser(data.token, true);
    const filter = ObjectId.isValid(data.id)
      ? { _id: new ObjectId(data.id) }
      : { orderNumber: data.id };
    const update = await db.collection("orders").updateOne(filter, {
      $set: { paymentStatus: data.paymentStatus, updatedAt: new Date() },
    });
    const result = update.matchedCount ? await db.collection("orders").findOne(filter) : null;
    return result
      ? { success: true, order: mongoToOrder(result) }
      : { success: false, message: "Order not found" };
  });

async function nextOrderNumber(db: Awaited<ReturnType<typeof database>>): Promise<string> {
  const orderNumber = `SRL-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")}`;
  const existing = await db.collection("orders").findOne({ orderNumber });
  return existing ? nextOrderNumber(db) : orderNumber;
}

function mongoToOrder(doc: Record<string, unknown>): Order {
  const statusHistory = Array.isArray(doc["statusHistory"])
    ? (doc["statusHistory"] as Record<string, unknown>[])
    : [];
  const customer = (doc["customer"] ?? {}) as Record<string, unknown>;
  const shippingAddress = (doc["shippingAddress"] ?? {}) as Record<string, unknown>;
  const items = Array.isArray(doc["items"]) ? (doc["items"] as Record<string, unknown>[]) : [];
  return {
    id: String(doc["orderNumber"] ?? doc["_id"] ?? ""),
    customerId:
      doc["userId"] instanceof ObjectId ? doc["userId"].toString() : String(doc["userId"] ?? ""),
    customerName: String(customer["name"] ?? ""),
    customerEmail: String(customer["email"] ?? ""),
    items: items.map((item) => ({
      productId: String(item["productId"]),
      name: String(item["name"]),
      qty: Number(item["quantity"]),
      priceAtPurchase: Number(item["price"]),
    })),
    shippingAddress: `${String(shippingAddress["address"] ?? "")}, ${String(shippingAddress["city"] ?? "")}`,
    status: String(doc["status"] ?? "Pending") as OrderStatus,
    totalAmount: Number(doc["total"] ?? 0),
    paymentMethod: "COD",
    paid: doc["paymentStatus"] === "paid",
    ...(doc["notes"] ? { notes: String(doc["notes"]) } : {}),
    statusHistory: statusHistory.map((entry) => ({
      status: String(entry["status"]) as OrderStatus,
      at: new Date(String(entry["timestamp"])).toISOString().slice(0, 10),
    })),
    createdAt: new Date(String(doc["createdAt"])).toISOString().slice(0, 10),
  };
}
