import { createServerFn } from "@tanstack/react-start";

export type ReviewStatus = "Pending" | "Published" | "Flagged" | "Rejected";
export type AdminReview = {
  id: string;
  productId: string;
  productName: string;
  userId: string;
  customerName: string;
  rating: number;
  title: string;
  body: string;
  status: ReviewStatus;
  featured: boolean;
  createdAt: string;
};
const statuses: ReviewStatus[] = ["Pending", "Published", "Flagged", "Rejected"];
const isId = (value: string) => /^[a-f\d]{24}$/i.test(value);

async function adminDb(token: string) {
  const [{ ObjectId }, { getMongoDb, ensureCollection, ensureIndex }, { verifyToken }] =
    await Promise.all([import("mongodb"), import("@/lib/mongodb"), import("@/lib/auth")]);
  const user = token ? verifyToken(token) : null;
  if (!user || !isId(user.id)) throw new Error("UNAUTHORIZED");
  const db = await getMongoDb();
  const account = await db.collection("users").findOne({ _id: new ObjectId(user.id) });
  if (!account || account["role"] !== "admin") throw new Error("FORBIDDEN");
  await ensureCollection(db, "reviews");
  await Promise.all([
    ensureIndex(db, "reviews", { productId: 1, status: 1 }),
    ensureIndex(db, "reviews", { userId: 1, createdAt: -1 }),
  ]);
  return db;
}

function toReview(doc: Record<string, unknown>): AdminReview {
  const date =
    doc["createdAt"] instanceof Date ? doc["createdAt"] : new Date(String(doc["createdAt"]));
  return {
    id: String(doc["_id"] ?? ""),
    productId: String(doc["productId"] ?? ""),
    productName: String(doc["productName"] ?? ""),
    userId: String(doc["userId"] ?? ""),
    customerName: String(doc["customerName"] ?? ""),
    rating: Number(doc["rating"] ?? 0),
    title: String(doc["title"] ?? ""),
    body: String(doc["body"] ?? ""),
    status: String(doc["status"] ?? "Pending") as ReviewStatus,
    featured: doc["featured"] === true,
    createdAt: Number.isNaN(date.getTime()) ? "" : date.toISOString(),
  };
}

export const getReviews = createServerFn({ method: "GET" })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }) => {
    const db = await adminDb(data.token);
    return (
      await db.collection("reviews").find({}).sort({ createdAt: -1 }).limit(500).toArray()
    ).map(toReview);
  });
export const moderateReview = createServerFn({ method: "POST" })
  .validator(
    (data: { token: string; id: string; status: ReviewStatus; featured?: boolean }) => data,
  )
  .handler(async ({ data }) => {
    if (!isId(data.id) || !statuses.includes(data.status))
      return { success: false, message: "Invalid review" };
    const db = await adminDb(data.token);
    const { ObjectId } = await import("mongodb");
    const result = await db
      .collection("reviews")
      .findOneAndUpdate(
        { _id: new ObjectId(data.id) },
        { $set: { status: data.status, featured: data.featured === true, updatedAt: new Date() } },
        { returnDocument: "after" },
      );
    return result
      ? { success: true, review: toReview(result) }
      : { success: false, message: "Review not found" };
  });
