import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { StoreShell } from "@/components/storefront/shell";
import { currency, type OrderStatus } from "@/lib/mock-data";
import { useAuth, useHydrated, useOrders } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your account — Sorrel" },
      { name: "description", content: "Track your Sorrel orders, delivery status and saved shipping address." },
      { property: "og:title", content: "Your account — Sorrel" },
      { property: "og:description", content: "Order history and delivery tracking for your Sorrel orders." },
    ],
  }),
  component: AccountPage,
});

const steps: OrderStatus[] = ["Pending", "Confirmed", "Shipped", "Delivered"];

function AccountPage() {
  const hydrated = useHydrated();
  const user = useAuth((s) => s.user);
  const signOut = useAuth((s) => s.signOut);
  const allOrders = useOrders((s) => s.orders);
  const navigate = useNavigate();

  // Redirect admin users to admin dashboard
  useEffect(() => {
    if (hydrated && user && user.role === "admin") {
      navigate({ to: "/admin" });
    }
  }, [hydrated, user, navigate]);

  if (!hydrated) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10">
          <div className="h-16 w-64 animate-pulse bg-surface-2" />
        </div>
      </StoreShell>
    );
  }

  if (!user) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
          <h1 className="text-5xl">Sign in to see your orders</h1>
          <Link to="/login" className="label-caps mt-8 inline-block bg-primary px-7 py-4 text-primary-foreground">
            Sign in
          </Link>
        </div>
      </StoreShell>
    );
  }

  const myOrders = allOrders.filter(
    (o) => o.customerId === user.id || o.customerEmail.toLowerCase() === user.email.toLowerCase(),
  );

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-caps text-olive">Account</p>
            <h1 className="mt-4 text-5xl md:text-7xl">{user.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{user.email}</p>
            <p className="mt-2 text-sm text-muted-foreground">Role: {user.role}</p>
          </div>
          <div className="flex gap-4">
            {user.role === "admin" && (
              <Link to="/admin" className="label-caps border border-hairline px-5 py-3">
                Admin dashboard
              </Link>
            )}
            <button
              onClick={() => {
                signOut();
                navigate({ to: "/" });
              }}
              className="label-caps border border-hairline px-5 py-3 hover:text-destructive"
            >
              Sign out
            </button>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl">Order history</h2>
          {myOrders.length === 0 ? (
            <div className="mt-8 border border-dashed border-hairline px-6 py-20 text-center">
              <p className="font-display text-3xl">No orders yet</p>
              <p className="mt-3 text-sm text-muted-foreground">
                When you place an order it will appear here with live delivery status.
              </p>
              <Link to="/shop" className="label-caps mt-8 inline-block bg-primary px-6 py-3 text-primary-foreground">
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-px bg-hairline">
              {myOrders.map((order) => (
                <article key={order.id} className="bg-background p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.createdAt} · {order.items.length} item{order.items.length > 1 ? "s" : ""} ·{" "}
                        {order.paid ? "Paid" : "Pay on delivery"}
                      </p>
                    </div>
                    <span className="text-lg">{currency(order.totalAmount)}</span>
                  </div>

                  <ul className="mt-4 text-sm text-muted-foreground">
                    {order.items.map((item) => (
                      <li key={item.productId}>
                        {item.name} × {item.qty}
                      </li>
                    ))}
                  </ul>

                  {order.status === "Cancelled" ? (
                    <p className="mt-6 text-sm text-destructive">This order was cancelled.</p>
                  ) : (
                    <ol className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
                      {steps.map((step) => {
                        const reached = steps.indexOf(order.status) >= steps.indexOf(step);
                        return (
                          <li key={step} className="flex flex-1 basis-32 flex-col gap-2">
                            <span className={cn("h-0.5 w-full", reached ? "bg-olive" : "bg-hairline")} />
                            <span
                              className={cn(
                                "label-caps",
                                reached ? "text-foreground" : "text-muted-foreground",
                              )}
                            >
                              {step}
                            </span>
                          </li>
                        );
                      })}
                    </ol>
                  )}

                  <p className="mt-6 text-xs text-muted-foreground">Ships to {order.shippingAddress}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="mt-20">
          <h2 className="text-3xl">Shipping address</h2>
          <div className="mt-6 max-w-md border border-hairline p-6 text-sm">
            <p>{user.name}</p>
            <p className="text-muted-foreground">
              {myOrders[0]?.shippingAddress ?? "No address saved yet — add one at checkout."}
            </p>
          </div>
        </section>
      </div>
    </StoreShell>
  );
}
