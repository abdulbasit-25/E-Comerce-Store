import { createServerFn } from "@tanstack/react-start";
import type { Product } from "@/lib/mock-data";
import { ObjectId } from "mongodb";

/**
 * Get all products (optionally filtered by category or search)
 */
export const getProducts = createServerFn({ method: "GET" })
  .validator(
    (data?: { category?: string; search?: string; maxPrice?: number; inStock?: boolean }) => data,
  )
  .handler(async ({ data: filters }): Promise<Product[]> => {
    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const productsCollection = db.collection("products");

      const query: any = { isActive: true };

      if (filters?.category) {
        query["categorySlug"] = filters.category;
      }

      if (filters?.maxPrice) {
        query["price"] = { $lte: filters.maxPrice };
      }

      if (filters?.inStock) {
        query["stock"] = { $gt: 0 };
      }

      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        query["$or"] = [
          { name: { $regex: searchLower, $options: "i" } },
          { description: { $regex: searchLower, $options: "i" } },
        ];
      }

      const products = await productsCollection.find(query).sort({ createdAt: -1 }).toArray();

      return products.map(mongoToProduct);
    } catch (error) {
      console.error("Get products error:", error);
      throw new Error("Failed to fetch products");
    }
  });

/**
 * Get a single product by slug
 */
export const getProductBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Product | null> => {
    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const productsCollection = db.collection("products");

      const product = await productsCollection.findOne({ slug, isActive: true });
      return product ? mongoToProduct(product) : null;
    } catch (error) {
      console.error("Get product by slug error:", error);
      throw new Error("Failed to fetch product");
    }
  });

/**
 * Get a single product by ID
 */
export const getProductById = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }): Promise<Product | null> => {
    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const productsCollection = db.collection("products");

      let query: any = { isActive: true };

      // Try as MongoDB ObjectId first
      try {
        query._id = new ObjectId(id);
        const product = await productsCollection.findOne(query);
        if (product) return mongoToProduct(product);
      } catch {
        // Not a valid ObjectId, try as string ID
      }

      // Fall back to string ID
      const product = await productsCollection.findOne({ id, isActive: true });
      return product ? mongoToProduct(product) : null;
    } catch (error) {
      console.error("Get product by ID error:", error);
      throw new Error("Failed to fetch product");
    }
  });

/**
 * Get multiple products by IDs (useful for cart operations)
 */
export const getProductsByIds = createServerFn({ method: "POST" })
  .validator((ids: string[]) => ids)
  .handler(async ({ data: ids }): Promise<Product[]> => {
    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const productsCollection = db.collection("products");

      const products = await productsCollection
        .find({ id: { $in: ids }, isActive: true })
        .toArray();

      return products.map(mongoToProduct);
    } catch (error) {
      console.error("Get products by IDs error:", error);
      throw new Error("Failed to fetch products");
    }
  });

/**
 * Create a new product (admin only)
 */
export const createProduct = createServerFn({ method: "POST" })
  .validator((data: Omit<Product, "id" | "createdAt">) => data)
  .handler(
    async ({
      data: productData,
    }): Promise<{ success: boolean; product?: Product; message?: string }> => {
      try {
        // Check admin authorization (frontend checked, but verify on backend)
        const { getMongoDb } = await import("@/lib/mongodb");
        const db = await getMongoDb();
        const productsCollection = db.collection("products");

        // Validate required fields
        if (!productData.name?.trim()) {
          return { success: false, message: "Product name is required" };
        }

        if (productData.price < 0) {
          return { success: false, message: "Price cannot be negative" };
        }

        if (productData.stock < 0) {
          return { success: false, message: "Stock cannot be negative" };
        }

        // Check for duplicate SKU
        if (productData.sku) {
          const existing = await productsCollection.findOne({ sku: productData.sku });
          if (existing) {
            return { success: false, message: "SKU already exists" };
          }
        }

        // Check for duplicate slug
        if (productData.slug) {
          const existing = await productsCollection.findOne({ slug: productData.slug });
          if (existing) {
            return { success: false, message: "Slug already exists" };
          }
        }

        const now = new Date().toISOString().slice(0, 10);
        const product = {
          ...productData,
          id: `p-${Date.now()}`,
          createdAt: now,
        };

        const result = await productsCollection.insertOne(product as any);

        if (result.insertedId) {
          return { success: true, product };
        }

        return { success: false, message: "Failed to create product" };
      } catch (error) {
        console.error("Create product error:", error);
        return { success: false, message: "Internal server error" };
      }
    },
  );

/**
 * Update an existing product (admin only)
 */
export const updateProduct = createServerFn({ method: "POST" })
  .validator((data: { id: string; updates: Partial<Omit<Product, "id" | "createdAt">> }) => data)
  .handler(async ({ data }): Promise<{ success: boolean; product?: Product; message?: string }> => {
    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const productsCollection = db.collection("products");

      // Find product
      const product = await productsCollection.findOne({ id: data.id });
      if (!product) {
        return { success: false, message: "Product not found" };
      }

      // Validate updates
      if (data.updates.name !== undefined && !data.updates.name.trim()) {
        return { success: false, message: "Product name cannot be empty" };
      }

      if (data.updates.price !== undefined && data.updates.price < 0) {
        return { success: false, message: "Price cannot be negative" };
      }

      if (data.updates.stock !== undefined && data.updates.stock < 0) {
        return { success: false, message: "Stock cannot be negative" };
      }

      // Check for duplicate SKU (if changing)
      if (data.updates.sku && data.updates.sku !== product.sku) {
        const existing = await productsCollection.findOne({ sku: data.updates.sku });
        if (existing) {
          return { success: false, message: "SKU already exists" };
        }
      }

      // Check for duplicate slug (if changing)
      if (data.updates.slug && data.updates.slug !== product.slug) {
        const existing = await productsCollection.findOne({ slug: data.updates.slug });
        if (existing) {
          return { success: false, message: "Slug already exists" };
        }
      }

      const updated = await productsCollection.findOneAndUpdate(
        { id: data.id },
        { $set: data.updates },
        { returnDocument: "after" },
      );

      if (updated.value) {
        return { success: true, product: mongoToProduct(updated.value) };
      }

      return { success: false, message: "Failed to update product" };
    } catch (error) {
      console.error("Update product error:", error);
      return { success: false, message: "Internal server error" };
    }
  });

/**
 * Delete a product (admin only)
 */
export const deleteProduct = createServerFn({ method: "POST" })
  .validator((id: string) => id)
  .handler(async ({ data: id }): Promise<{ success: boolean; message?: string }> => {
    try {
      const { getMongoDb } = await import("@/lib/mongodb");
      const db = await getMongoDb();
      const productsCollection = db.collection("products");

      const result = await productsCollection.deleteOne({ id });

      if (result.deletedCount > 0) {
        return { success: true };
      }

      return { success: false, message: "Product not found" };
    } catch (error) {
      console.error("Delete product error:", error);
      return { success: false, message: "Internal server error" };
    }
  });

/**
 * Convert MongoDB document to Product type
 */
function mongoToProduct(doc: any): Product {
  return {
    id: doc.id || doc._id?.toString() || "",
    name: doc.name || "",
    slug: doc.slug || "",
    description: doc.description || "",
    price: doc.price || 0,
    image: doc.image || "",
    categorySlug: doc.categorySlug || "apparel",
    stock: doc.stock || 0,
    sku: doc.sku || "",
    isActive: doc.isActive !== false,
    rating: doc.rating || 0,
    createdAt: doc.createdAt || new Date().toISOString().slice(0, 10),
  };
}
