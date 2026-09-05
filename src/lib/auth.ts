import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
}

function jwtSecret() {
  const secret = process.env["JWT_SECRET"];
  if (!secret && process.env["NODE_ENV"] === "production") {
    throw new Error("JWT_SECRET must be configured in production");
  }
  return secret || "development-only-secret";
}

/**
 * Hash a password using bcryptjs
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcryptjs.compare(password, hash);
}

/**
 * Create a JWT token for a user
 */
export function createToken(user: SessionUser): string {
  return jwt.sign(user, jwtSecret(), { expiresIn: "7d" });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): SessionUser | null {
  try {
    const decoded = jwt.verify(token, jwtSecret()) as SessionUser;
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Normalize email for storage (lowercase)
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): string | null {
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    return "Password must include uppercase, lowercase, and a number.";
  }
  return null;
}
