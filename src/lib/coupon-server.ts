import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type Coupon = {
  id: string;
  code: string;
  discountType: "percentage" | "fixed" | "free_shipping";
  value: number;
  minimumOrderAmount: number;
  usageLimit: number | null;
  usageCount: number;
  startsAt: string;
  expiresAt: string;
  active: boolean;
};

const schema = z.object({
  code: z
    .string()
    .trim()
    .min(3)
    .max(32)
    .transform((value) => value.toUpperCase()),
  discountType: z.enum(["percentage", "fixed", "free_shipping"]),
  value: z.number().finite().positive(),
  minimumOrderAmount: z.number().finite().nonnegative(),
  usageLimit: z.number().int().positive().nullable(),
  startsAt: z.string().datetime(),
  expiresAt: z.string().datetime(),
  active: z.boolean(),
});

const isId = (value: string) => /^[a-f\d]{24}$/i.test(value);

async function adminDb(token: string) {
  const { requirePermission } = await import("@/lib/authorization-server");
  const { db } = await requirePermission(token, "manageCoupons");
  const { ensureCollection, ensureIndex } = await import("@/lib/mongodb");
  await ensureCollection(db, "coupons");
  await Promise.all([
    ensureIndex(db, "coupons", { code: 1 }, { unique: true }),
    ensureIndex(db, "coupons", { active: 1, expiresAt: 1 }),
  ]);
  return db;
}

function toCoupon(doc: Record<string, unknown>): Coupon {
  const date = (value: unknown) =>
    value instanceof Date ? value.toISOString() : String(value ?? "");
  return {
    id: String(doc["_id"] ?? ""),
    code: String(doc["code"] ?? ""),
    discountType: doc["discountType"] as Coupon["discountType"],
    value: Number(doc["value"] ?? 0),
    minimumOrderAmount: Number(doc["minimumOrderAmount"] ?? 0),
    usageLimit: doc["usageLimit"] == null ? null : Number(doc["usageLimit"]),
    usageCount: Number(doc["usageCount"] ?? 0),
    startsAt: date(doc["startsAt"]),
    expiresAt: date(doc["expiresAt"]),
    active: doc["active"] !== false,
  };
}

export const getCoupons = createServerFn({ method: "GET" })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }) => {
    const db = await adminDb(data.token);
    return (await db.collection("coupons").find({}).sort({ createdAt: -1 }).toArray()).map(
      toCoupon,
    );
  });

export const saveCoupon = createServerFn({ method: "POST" })
  .validator((data: { token: string; id?: string; coupon: z.input<typeof schema> }) => data)
  .handler(async ({ data }) => {
    const parsed = schema.safeParse(data.coupon);
    if (!parsed.success)
      return { success: false, message: parsed.error.issues[0]?.message ?? "Invalid coupon" };
    if (parsed.data.discountType === "percentage" && parsed.data.value > 100)
      return { success: false, message: "Percentage cannot exceed 100" };
    if (new Date(parsed.data.expiresAt) <= new Date(parsed.data.startsAt))
      return { success: false, message: "Expiry must be after start" };
    const db = await adminDb(data.token);
    const document = {
      ...parsed.data,
      usageCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const result =
        data.id && isId(data.id)
          ? await db
              .collection("coupons")
              .findOneAndUpdate(
                { _id: (await import("mongodb")).ObjectId.createFromHexString(data.id) },
                { $set: { ...parsed.data, updatedAt: new Date() } },
                { returnDocument: "after" },
              )
          : await db.collection("coupons").insertOne(document);
      const coupon = data.id
        ? result
        : await db.collection("coupons").findOne({ _id: result.insertedId });
      return {
        success: true,
        coupon: coupon ? toCoupon(coupon as Record<string, unknown>) : undefined,
      };
    } catch (error) {
      return {
        success: false,
        message:
          typeof error === "object" && error !== null && "code" in error && error.code === 11000
            ? "Coupon code already exists"
            : "Unable to save coupon",
      };
    }
  });

export const deleteCoupon = createServerFn({ method: "POST" })
  .validator((data: { token: string; id: string }) => data)
  .handler(async ({ data }) => {
    if (!isId(data.id)) return { success: false, message: "Coupon not found" };
    const { requirePermission } = await import("@/lib/authorization-server");
    const db = (await requirePermission(data.token, "deleteData")).db;
    const { ObjectId } = await import("mongodb");
    const result = await db.collection("coupons").deleteOne({ _id: new ObjectId(data.id) });
    return result.deletedCount
      ? { success: true }
      : { success: false, message: "Coupon not found" };
  });
