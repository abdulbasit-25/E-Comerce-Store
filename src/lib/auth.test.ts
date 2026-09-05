import { describe, expect, it } from "vitest";
import { isValidEmail, normalizeEmail, validatePassword } from "@/lib/auth-validation";
import { orderInputSchema } from "@/lib/order-server";

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

  it("requires full COD customer details before order placement", () => {
    expect(() =>
      orderInputSchema.parse({
        token: "valid-token",
        customer: { name: "Ali Khan", email: "ali@example.com" },
        shippingAddress: { address: "12 Main Street", city: "Lahore" },
        items: [{ productId: "507f1f77bcf86cd799439011", quantity: 1 }],
      }),
    ).toThrow();

    const valid = orderInputSchema.parse({
      token: "valid-token",
      customer: { name: "Ali Khan", email: "ali@example.com", phone: "+92 300 1234567" },
      shippingAddress: {
        address: "12 Main Street",
        address2: "Apartment 4B",
        city: "Lahore",
        province: "Punjab",
        postalCode: "54000",
        country: "Pakistan",
      },
      items: [{ productId: "507f1f77bcf86cd799439011", quantity: 1 }],
    });

    expect(valid.customer.phone).toContain("300");
    expect(valid.shippingAddress.postalCode).toBe("54000");
    expect(valid.shippingAddress.country).toBe("Pakistan");
  });
});
