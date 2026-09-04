import type { Db, IndexDescription, IndexOptions, MongoClient } from "mongodb";

let cachedDb: Db | null = null;
let cachedClient: MongoClient | null = null;

export async function getMongoDb(): Promise<Db> {
  if (typeof window !== "undefined") {
    throw new Error("MongoDB access is only allowed on the server.");
  }

  if (cachedDb) {
    return cachedDb;
  }

  const { MongoClient } = await import("mongodb");
  const mongoUri = process.env["MONGODB_URI"];
  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  try {
    const client = new MongoClient(mongoUri, {
      retryWrites: true,
      w: "majority",
    });

    await client.connect();
    cachedClient = client;
    cachedDb = client.db("sorrel");

    console.log("Connected to MongoDB");
    return cachedDb;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export async function closeMongoDb(): Promise<void> {
  if (cachedClient) {
    await cachedClient.close();
    cachedDb = null;
    cachedClient = null;
    console.log("Disconnected from MongoDB");
  }
}

export async function ensureIndex(
  db: Db,
  collectionName: string,
  key: IndexDescription["key"],
  options: IndexOptions = {},
): Promise<void> {
  const collection = db.collection(collectionName);
  const indexes = await collection.listIndexes().toArray();
  const requestedKey = JSON.stringify(key);
  const existing = indexes.find((index) => JSON.stringify(index.key) === requestedKey);

  if (existing) {
    const sameOptions =
      Boolean(existing.unique) === Boolean(options.unique) &&
      Boolean(existing.sparse) === Boolean(options.sparse);
    if (sameOptions) return;
    if (existing.name) await collection.dropIndex(existing.name);
  }

  await collection.createIndex(key, options);
}
