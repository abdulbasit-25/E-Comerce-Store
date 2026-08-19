let cachedDb: any = null;
let cachedClient: any = null;

export async function getMongoDb(): Promise<any> {
  if (typeof window !== "undefined") {
    throw new Error("MongoDB access is only allowed on the server.");
  }

  if (cachedDb) {
    return cachedDb;
  }

  const { MongoClient } = await import("mongodb");
  const mongoUri = process.env.MONGODB_URI;
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
