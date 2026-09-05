import { verifyPassword, createToken } from "./auth";
import { isValidEmail, normalizeEmail, validatePassword } from "./auth-validation";
import type { SessionUser } from "./auth-types";

export async function registerUser(
  name: string,
  email: string,
  password: string,
): Promise<{ success: boolean; message: string }> {
  try {
    const cleanName = name.trim();
    const normalizedEmail = normalizeEmail(email);
    if (!cleanName) return { success: false, message: "Please enter your name." };
    if (!isValidEmail(normalizedEmail)) {
      return { success: false, message: "Please enter a valid email address." };
    }
    const passwordMessage = validatePassword(password);
    if (passwordMessage) return { success: false, message: passwordMessage };
    const { getMongoDb } = await import("./mongodb");
    const users = (await getMongoDb()).collection("users");
    await users.createIndex({ email: 1 }, { unique: true });
    const existing = await users.findOne({ email: normalizedEmail });
    if (existing) return { success: false, message: "An account with this email already exists." };
    const { hashPassword } = await import("./auth");
    await users.insertOne({
      name: cleanName,
      email: normalizedEmail,
      passwordHash: await hashPassword(password),
      role: "customer",
      status: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return {
      success: true,
      message: "Your account has been created successfully. You can now sign in.",
    };
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) {
      return { success: false, message: "An account with this email already exists." };
    }
    console.error("Registration error:", error);
    return { success: false, message: "Unable to create your account right now." };
  }
}

export async function loginUser(
  email: string,
  password: string,
): Promise<{ success: boolean; user?: SessionUser; token?: string; message?: string }> {
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
      role: (user.role as "admin" | "manager" | "customer") || "customer",
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
      role: (user.role as "admin" | "manager" | "customer") || "customer",
    };
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
}
