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
export type ProductReview = Pick<
  AdminReview,
  "id" | "customerName" | "rating" | "title" | "body" | "createdAt"
>;
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

function toProductReview(doc: Record<string, unknown>): ProductReview {
  const review = toReview(doc);
  return {
    id: review.id,
    customerName: review.customerName,
    rating: review.rating,
    title: review.title,
    body: review.body,
    createdAt: review.createdAt,
  };
}

async function reviewsDb() {
  const [{ getMongoDb, ensureCollection, ensureIndex }] = await Promise.all([
    import("@/lib/mongodb"),
  ]);
  const db = await getMongoDb();
  await ensureCollection(db, "reviews");
  await ensureIndex(db, "reviews", { productId: 1, status: 1 });
  return db;
}

export const getProductReviews = createServerFn({ method: "GET" })
  .validator((productId: string) => productId)
  .handler(async ({ data: productId }): Promise<ProductReview[]> => {
    const { ObjectId } = await import("mongodb");
    if (!ObjectId.isValid(productId)) return [];
    const db = await reviewsDb();
    return (
      await db
        .collection("reviews")
        .find({ productId, status: "Published" })
        .sort({ createdAt: -1 })
        .limit(100)
        .toArray()
    ).map(toProductReview);
  });

export const createReview = createServerFn({ method: "POST" })
  .validator(
    (data: { token: string; productId: string; rating: number; title: string; body: string }) =>
      data,
  )
  .handler(async ({ data }) => {
    const { ObjectId } = await import("mongodb");
    const { verifyToken } = await import("@/lib/auth");
    const user = data.token ? verifyToken(data.token) : null;
    const title = data.title.trim();
    const body = data.body.trim();
    if (!user || !ObjectId.isValid(user.id)) {
      return { success: false, message: "Please sign in to write a review." };
    }
    if (!ObjectId.isValid(data.productId)) {
      return { success: false, message: "Invalid product." };
    }
    if (!Number.isInteger(data.rating) || data.rating < 1 || data.rating > 5) {
      return { success: false, message: "Choose a rating from 1 to 5." };
    }
    if (title.length < 3 || title.length > 120 || body.length < 10 || body.length > 2000) {
      return {
        success: false,
        message: "Add a title and a review between 10 and 2,000 characters.",
      };
    }

    const db = await reviewsDb();
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(data.productId), isActive: true });
    if (!product) return { success: false, message: "Product not found." };

    const result = await db.collection("reviews").insertOne({
      productId: data.productId,
      productName: String(product["name"] ?? ""),
      userId: user.id,
      customerName: user.name,
      rating: data.rating,
      title,
      body,
      status: "Pending",
      featured: false,
      createdAt: new Date(),
    });
    return { success: true, id: result.insertedId.toString() };
  });

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
