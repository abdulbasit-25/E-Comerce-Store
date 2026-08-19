import { verifyPassword, normalizeEmail, createToken, isValidEmail, type SessionUser } from "./auth";

export async function loginUser(email: string, password: string): Promise<{ success: boolean; user?: SessionUser; token?: string; message?: string }> {
  try {
    // Validation
    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    if (!isValidEmail(email)) {
      return { success: false, message: "Invalid email format" };
    }

    // Find user in MongoDB
    const { getMongoDb } = await import("./mongodb");
    const db = await getMongoDb();
    const usersCollection = db.collection("users");
    const normalizedEmail = normalizeEmail(email);

    const user = await usersCollection.findOne({ email: normalizedEmail });

    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.passwordHash as string);
    if (!isPasswordValid) {
      return { success: false, message: "Invalid email or password" };
    }

    // Create session user
    const sessionUser: SessionUser = {
      id: user._id?.toString() || "",
      name: user.name as string,
      email: user.email as string,
      role: (user.role as "admin" | "customer") || "customer",
    };

    // Create token
    const token = createToken(sessionUser);

    return { success: true, user: sessionUser, token };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Internal server error" };
  }
}

export async function getUserById(userId: string): Promise<SessionUser | null> {
  try {
    const { getMongoDb } = await import("./mongodb");
    const db = await getMongoDb();
    const usersCollection = db.collection("users");

    const { ObjectId } = await import("mongodb");
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return null;
    }

    return {
      id: user._id?.toString() || "",
      name: user.name as string,
      email: user.email as string,
      role: (user.role as "admin" | "customer") || "customer",
    };
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
}
