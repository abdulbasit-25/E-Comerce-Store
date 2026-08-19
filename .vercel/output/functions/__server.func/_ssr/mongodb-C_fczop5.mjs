import { o as __toESM } from "../_runtime.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mongodb-C_fczop5.js
var cachedDb = null;
async function getMongoDb() {
	if (typeof window !== "undefined") throw new Error("MongoDB access is only allowed on the server.");
	if (cachedDb) return cachedDb;
	const { MongoClient } = await import("../_libs/mongodb.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	const mongoUri = process.env.MONGODB_URI;
	if (!mongoUri) throw new Error("MONGODB_URI environment variable is not set");
	try {
		const client = new MongoClient(mongoUri, {
			retryWrites: true,
			w: "majority"
		});
		await client.connect();
		cachedDb = client.db("sorrel");
		console.log("Connected to MongoDB");
		return cachedDb;
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error);
		throw error;
	}
}
//#endregion
export { getMongoDb };
