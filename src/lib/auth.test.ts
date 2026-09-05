import { describe, expect, it } from "vitest";
import { isValidEmail, normalizeEmail, validatePassword } from "@/lib/auth";

describe("customer registration validation", () => {
  it("accepts a valid password and rejects weak passwords", () => {
    expect(validatePassword("StrongPass1")).toBeNull();
    expect(validatePassword("short")).toContain("8 characters");
    expect(validatePassword("alllowercase1")).toContain("uppercase");
    expect(validatePassword("ALLUPPERCASE1")).toContain("lowercase");
    expect(validatePassword("NoNumberHere")).toContain("number");
  });

  it("normalizes and validates registration email addresses", () => {
    expect(normalizeEmail("  Customer@Example.com ")).toBe("customer@example.com");
    expect(isValidEmail("customer@example.com")).toBe(true);
    expect(isValidEmail("not-an-email")).toBe(false);
  });
});
