import { createServerFn } from "@tanstack/react-start";

export type ReturnStatus =
  "Requested" | "Approved" | "Rejected" | "Received" | "Refunded" | "Exchanged";
export type ReturnRequest = {
  id: string;
  orderId: string;
  userId: string;
  productId: string;
  customerName: string;
  productName: string;
  quantity: number;
  requestedAmount: number;
  reason: string;
  status: ReturnStatus;
  adminNotes: string;
  createdAt: string;
};
const statuses: ReturnStatus[] = [
  "Requested",
  "Approved",
  "Rejected",
  "Received",
  "Refunded",
  "Exchanged",
];
const isId = (value: string) => /^[a-f\d]{24}$/i.test(value);

async function adminDb(token: string) {
  const { requirePermission } = await import("@/lib/authorization-server");
  const { db, user } = await requirePermission(token, "manageOrders");
  const { ensureCollection, ensureIndex } = await import("@/lib/mongodb");
  await ensureCollection(db, "return_requests");
  await ensureCollection(db, "refunds");
  await Promise.all([
    ensureIndex(db, "return_requests", { orderId: 1, createdAt: -1 }),
    ensureIndex(db, "return_requests", { status: 1, createdAt: -1 }),
    ensureIndex(db, "refunds", { returnId: 1 }, { unique: true }),
  ]);
  return { db, adminId: user.id };
}

function toReturn(doc: Record<string, unknown>): ReturnRequest {
  const date =
    doc["createdAt"] instanceof Date ? doc["createdAt"] : new Date(String(doc["createdAt"]));
  return {
    id: String(doc["_id"] ?? ""),
    orderId: String(doc["orderId"] ?? ""),
    userId: String(doc["userId"] ?? ""),
    productId: String(doc["productId"] ?? ""),
    customerName: String(doc["customerName"] ?? ""),
    productName: String(doc["productName"] ?? ""),
    quantity: Number(doc["quantity"] ?? 0),
    requestedAmount: Number(doc["requestedAmount"] ?? 0),
    reason: String(doc["reason"] ?? ""),
    status: String(doc["status"] ?? "Requested") as ReturnStatus,
    adminNotes: String(doc["adminNotes"] ?? ""),
    createdAt: Number.isNaN(date.getTime()) ? "" : date.toISOString(),
  };
}

export const getReturns = createServerFn({ method: "GET" })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }) => {
    const { db } = await adminDb(data.token);
    return (
      await db.collection("return_requests").find({}).sort({ createdAt: -1 }).limit(500).toArray()
    ).map(toReturn);
  });

export const updateReturn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      token: string;
      id: string;
      status: ReturnStatus;
      adminNotes?: string;
      refundAmount?: number;
    }) => data,
  )
  .handler(async ({ data }) => {
    if (!isId(data.id) || !statuses.includes(data.status))
      return { success: false, message: "Invalid return request" };
    const { db, adminId } = await adminDb(data.token);
    const { ObjectId } = await import("mongodb");
    const request = await db.collection("return_requests").findOne({ _id: new ObjectId(data.id) });
    if (!request) return { success: false, message: "Return not found" };
    const amount = data.refundAmount ?? Number(request["requestedAmount"] ?? 0);
    if (amount < 0 || amount > Number(request["requestedAmount"] ?? 0))
      return { success: false, message: "Refund exceeds the eligible amount" };
    const now = new Date();
    const result = await db.collection("return_requests").findOneAndUpdate(
      { _id: new ObjectId(data.id) },
      {
        $set: { status: data.status, adminNotes: data.adminNotes?.trim() ?? "", updatedAt: now },
        $push: { statusHistory: { status: data.status, at: now, adminId } },
      },
      { returnDocument: "after" },
    );
    if (data.status === "Refunded")
      await db.collection("refunds").updateOne(
        { returnId: data.id },
        {
          $set: {
            returnId: data.id,
            orderId: request["orderId"],
            userId: request["userId"],
            amount,
            method: "COD",
            paymentStatus: "pending",
            processedBy: adminId,
            processedAt: now,
          },
        },
        { upsert: true },
      );
    return { success: true, request: result ? toReturn(result) : undefined };
  });
