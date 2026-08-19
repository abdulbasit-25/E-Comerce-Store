"use server";

import {
  verifyPassword,
  normalizeEmail,
  createToken,
  isValidEmail,
  type SessionUser,
} from "@/lib/auth";

// Server function for login
export async function loginUser(
  email: string,
  password: string,
): Promise<{
  success: boolean;
  user?: SessionUser;
  token?: string;
  message?: string;
}> {
  try {
    // Validation
    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    if (!isValidEmail(email)) {
      return { success: false, message: "Invalid email format" };
    }

    // Find user in MongoDB
    const { getMongoDb } = await import("@/lib/mongodb");
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

// Server function to get current user
export async function getCurrentUser(token?: string): Promise<SessionUser | null> {
  if (!token) {
    return null;
  }

  try {
    const { verifyToken } = await import("@/lib/auth");
    const user = verifyToken(token);
    return user;
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
}

// Server function for logout
export async function logoutUser(): Promise<{ success: boolean }> {
  // Token invalidation happens on client by clearing storage
  return { success: true };
}
