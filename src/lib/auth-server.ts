import { createServerFn } from "@tanstack/react-start";
import type { SessionUser } from "@/lib/auth";

// Server function for login
export const loginUser = createServerFn({ method: "POST" })
  .validator((data: { email: string; password: string }) => data)
  .handler(
    async ({
      data,
    }): Promise<{
      success: boolean;
      user?: SessionUser;
      token?: string;
      message?: string;
    }> => {
      try {
        const { verifyPassword, normalizeEmail, createToken, isValidEmail } =
          await import("@/lib/auth");
        const { email, password } = data;

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
    },
  );

export const registerUser = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; password: string }) => data)
  .handler(async ({ data }): Promise<{ success: boolean; message: string }> => {
    try {
      const { hashPassword, isValidEmail, normalizeEmail, validatePassword } =
        await import("@/lib/auth");
      const name = data.name.trim();
      const email = normalizeEmail(data.email);
      if (!name) return { success: false, message: "Please enter your name." };
      if (name.length > 120) return { success: false, message: "Name is too long." };
      if (!isValidEmail(email))
        return { success: false, message: "Please enter a valid email address." };
      const passwordMessage = validatePassword(data.password);
      if (passwordMessage) return { success: false, message: passwordMessage };

      const { getMongoDb } = await import("@/lib/mongodb");
      const users = (await getMongoDb()).collection("users");
      await users.createIndex({ email: 1 }, { unique: true });
      const existing = await users.findOne({ email });
      if (existing)
        return { success: false, message: "An account with this email already exists." };

      await users.insertOne({
        name,
        email,
        passwordHash: await hashPassword(data.password),
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return {
        success: true,
        message: "Your account has been created successfully. You can now sign in.",
      };
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === 11000) {
        return { success: false, message: "An account with this email already exists." };
      }
      console.error("Registration error:", error);
      return { success: false, message: "Unable to create your account right now." };
    }
  });

// Server function to get current user
export const getCurrentUser = createServerFn({ method: "GET" })
  .validator((token?: string) => token)
  .handler(async ({ data: token }): Promise<SessionUser | null> => {
    if (!token) {
      return null;
    }

    try {
      const { verifyToken } = await import("@/lib/auth");
      return verifyToken(token);
    } catch (error) {
      console.error("Get user error:", error);
      return null;
    }
  });

// Server function for logout
export const logoutUser = createServerFn({ method: "POST" }).handler(
  async (): Promise<{ success: boolean }> => {
    // Token invalidation happens on client by clearing storage
    return { success: true };
  },
);
