import { createServerFn } from "@tanstack/react-start";
import type { OrderStatus } from "@/lib/catalog-types";

export type ShipmentStatus =
  "Pending" | "Confirmed" | "Packed" | "Shipped" | "Delivered" | "Failed" | "RTO";
export type Shipment = {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  address: string;
  total: number;
  orderStatus: OrderStatus;
  status: ShipmentStatus;
  courier: string;
  trackingNumber: string;
  expectedDelivery: string;
  deliveryNotes: string;
  updatedAt: string;
};

const statuses: ShipmentStatus[] = [
  "Pending",
  "Confirmed",
  "Packed",
  "Shipped",
  "Delivered",
  "Failed",
  "RTO",
];
const isId = (value: string) => /^[a-f\d]{24}$/i.test(value);

async function adminDb(token: string) {
  const [{ ObjectId }, { getMongoDb, ensureCollection, ensureIndex }, { verifyToken }] =
    await Promise.all([import("mongodb"), import("@/lib/mongodb"), import("@/lib/auth")]);
  const user = token ? verifyToken(token) : null;
  if (!user || !isId(user.id)) throw new Error("UNAUTHORIZED");
  const db = await getMongoDb();
  const account = await db.collection("users").findOne({ _id: new ObjectId(user.id) });
  if (!account || account["role"] !== "admin") throw new Error("FORBIDDEN");
  await ensureCollection(db, "shipments");
  await ensureIndex(db, "shipments", { orderId: 1 }, { unique: true });
  await ensureIndex(db, "shipments", { status: 1, updatedAt: -1 });
  return db;
}

function toShipment(doc: Record<string, unknown>, order?: Record<string, unknown>): Shipment {
  const customer = (order?.["customer"] ?? {}) as Record<string, unknown>;
  const address = (order?.["shippingAddress"] ?? {}) as Record<string, unknown>;
  const updatedAt =
    doc["updatedAt"] instanceof Date
      ? doc["updatedAt"]
      : new Date(String(doc["updatedAt"] ?? order?.["updatedAt"]));
  return {
    id: String(doc["_id"] ?? ""),
    orderId: String(doc["orderId"] ?? order?.["orderNumber"] ?? ""),
    customerName: String(customer["name"] ?? ""),
    customerEmail: String(customer["email"] ?? ""),
    address: `${String(address["address"] ?? "")}, ${String(address["city"] ?? "")}`,
    total: Number(order?.["total"] ?? 0),
    orderStatus: String(order?.["status"] ?? "Pending") as OrderStatus,
    status: String(doc["status"] ?? "Pending") as ShipmentStatus,
    courier: String(doc["courier"] ?? ""),
    trackingNumber: String(doc["trackingNumber"] ?? ""),
    expectedDelivery: String(doc["expectedDelivery"] ?? ""),
    deliveryNotes: String(doc["deliveryNotes"] ?? ""),
    updatedAt: Number.isNaN(updatedAt.getTime()) ? "" : updatedAt.toISOString(),
  };
}

export const getShipments = createServerFn({ method: "GET" })
  .validator((data: { token: string; status?: ShipmentStatus }) => data)
  .handler(async ({ data }) => {
    const db = await adminDb(data.token);
    const orders = await db
      .collection("orders")
      .find({})
      .sort({ createdAt: -1 })
      .limit(500)
      .toArray();
    const orderIds = orders.map((order) => String(order["orderNumber"] ?? ""));
    const docs = await db
      .collection("shipments")
      .find({ orderId: { $in: orderIds }, ...(data.status ? { status: data.status } : {}) })
      .toArray();
    const byOrder = new Map(docs.map((doc) => [String(doc["orderId"]), doc]));
    return orders.map((order) =>
      toShipment(
        byOrder.get(String(order["orderNumber"])) ?? {
          orderId: order["orderNumber"],
          status: "Pending",
          updatedAt: order["updatedAt"],
        },
        order,
      ),
    );
  });

export const updateShipment = createServerFn({ method: "POST" })
  .validator(
    (data: {
      token: string;
      orderId: string;
      status: ShipmentStatus;
      courier?: string;
      trackingNumber?: string;
      expectedDelivery?: string;
      deliveryNotes?: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    if (!statuses.includes(data.status))
      return { success: false, message: "Invalid shipment status" };
    const db = await adminDb(data.token);
    const order = await db.collection("orders").findOne({ orderNumber: data.orderId });
    if (!order) return { success: false, message: "Order not found" };
    const now = new Date();
    const update = await db
      .collection("shipments")
      .findOneAndUpdate(
        { orderId: data.orderId },
        {
          $set: {
            orderId: data.orderId,
            status: data.status,
            courier: data.courier?.trim() ?? "",
            trackingNumber: data.trackingNumber?.trim() ?? "",
            expectedDelivery: data.expectedDelivery ?? "",
            deliveryNotes: data.deliveryNotes?.trim() ?? "",
            updatedAt: now,
          },
          $push: { statusHistory: { status: data.status, at: now } },
        },
        { upsert: true, returnDocument: "after" },
      );
    return { success: true, shipment: update ? toShipment(update, order) : undefined };
  });
