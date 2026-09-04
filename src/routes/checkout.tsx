import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { StoreShell } from "@/components/storefront/shell";
import { createOrder } from "@/lib/order-server";
import { getProductsByIds } from "@/lib/product-server";
import { cartDetail, useAuth, useCart, useHydrated } from "@/lib/store";
import { currency } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Sorrel" },
      {
        name: "description",
        content: "Confirm your shipping details and place a cash-on-delivery order.",
      },
      { property: "og:title", content: "Checkout — Sorrel" },
      { property: "og:description", content: "Place your order and pay the courier on delivery." },
    ],
  }),
  component: Checkout,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(6, "Enter a street address"),
  city: z.string().min(2, "Enter a city"),
  notes: z.string().optional(),
});

function Checkout() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const user = useAuth((s) => s.user);
  const activeLines = hydrated ? lines : [];
  const {
    data: products = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["checkout-products", activeLines.map((line) => line.productId)],
    queryFn: () => getProductsByIds({ data: activeLines.map((line) => line.productId) }),
    enabled: hydrated,
  });
  const { items, subtotal, shipping, total } = cartDetail(activeLines, products);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (!user) {
      toast.error("Please sign in before placing an order");
      navigate({ to: "/login" });
      return;
    }
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    const values = parsed.data;
    setIsSubmitting(true);
    try {
      const result = await createOrder({
        data: {
          token: localStorage.getItem("auth-token") ?? "",
          customer: { name: values.name, email: values.email },
          shippingAddress: { address: values.address, city: values.city },
          items: items.map((item) => ({ productId: item.product.id, quantity: item.qty })),
          ...(values.notes ? { notes: values.notes } : {}),
        },
      });
      if (!result.success || !result.order) throw new Error(result.message);
      clear();
      toast.success(`Order ${result.order.id} placed — pay the courier on delivery.`);
      await navigate({ to: "/account" });
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error instanceof Error ? error.message : "Unable to place your order");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hydrated || isPending) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
          <p className="text-muted-foreground">Loading your bag...</p>
        </div>
      </StoreShell>
    );
  }

  if (isError) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
          <p role="alert" className="text-destructive">
            Unable to load your bag. Please try again.
          </p>
        </div>
      </StoreShell>
    );
  }

  if (items.length === 0) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
          <h1 className="text-5xl">Your bag is empty</h1>
          <Link
            to="/shop"
            className="label-caps mt-8 inline-block bg-primary px-7 py-4 text-primary-foreground"
          >
            Browse the collection
          </Link>
        </div>
      </StoreShell>
    );
  }

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-10">
        <p className="label-caps text-olive">Cash on delivery</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Checkout</h1>

        <form onSubmit={onSubmit} className="mt-12 grid gap-16 md:grid-cols-[1fr_360px]">
          <div className="max-w-xl space-y-6">
            <Field
              label="Full name"
              name="name"
              defaultValue={user?.name ?? ""}
              error={errors["name"]}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              defaultValue={user?.email ?? ""}
              error={errors["email"]}
            />
            <Field label="Street address" name="address" error={errors["address"]} />
            <Field label="City" name="city" error={errors["city"]} />
            <div>
              <label className="label-caps text-muted-foreground" htmlFor="notes">
                Order notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
                placeholder="Delivery instructions, gift note…"
              />
            </div>

            <div className="border border-hairline p-5">
              <p className="label-caps text-olive">Payment method</p>
              <p className="mt-2 text-sm">
                Cash on delivery — pay the courier when your parcel arrives.
              </p>
            </div>
          </div>

          <aside className="h-fit bg-surface p-8">
            <p className="label-caps text-muted-foreground">Order summary</p>
            <ul className="mt-6 space-y-3 text-sm">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">
                    {product.name} × {qty}
                  </span>
                  <span>{currency(product.price * qty)}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-2 border-t border-hairline pt-4 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>{currency(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd>{shipping === 0 ? "Free" : currency(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-hairline pt-2 text-base">
                <dt>Total due on delivery</dt>
                <dd>{currency(total)}</dd>
              </div>
            </dl>
            <button
              type="submit"
              disabled={isSubmitting}
              className="label-caps mt-8 w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground"
            >
              {isSubmitting ? "Placing order..." : "Place order"}
            </button>
          </aside>
        </form>
      </div>
    </StoreShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  error?: string | undefined;
}) {
  return (
    <div>
      <label className="label-caps text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
