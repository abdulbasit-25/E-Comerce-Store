import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { MapPin, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { AccountNav, type AccountSection } from "@/components/account/account-nav";
import { OrderList } from "@/components/account/order-list";
import { ProfilePanel } from "@/components/account/profile-panel";
import { StoreShell } from "@/components/storefront/shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMyOrders } from "@/lib/order-server";
import { getEligibleReviewProducts } from "@/lib/review-server";
import { useAuth, useHydrated } from "@/lib/store";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My account — Sorrel" },
      { name: "description", content: "Manage your Sorrel profile, orders and delivery details." },
      { property: "og:title", content: "My account — Sorrel" },
      {
        property: "og:description",
        content: "Manage your Sorrel profile, orders and delivery details.",
      },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const hydrated = useHydrated();
  const user = useAuth((state) => state.user);
  const updateProfile = useAuth((state) => state.updateProfile);
  const signOut = useAuth((state) => state.signOut);
  const {
    data: orders = [],
    isPending: ordersPending,
    isError: ordersError,
  } = useQuery({
    queryKey: ["my-orders"],
    queryFn: () => getMyOrders({ data: localStorage.getItem("auth-token") ?? "" }),
    enabled: hydrated && Boolean(user),
  });
  const { data: reviewProducts = [] } = useQuery({
    queryKey: ["eligible-review-products"],
    queryFn: () => getEligibleReviewProducts(localStorage.getItem("auth-token") ?? ""),
    enabled: hydrated && Boolean(user),
  });
  const navigate = useNavigate();
  const [section, setSection] = useState<AccountSection>("overview");

  useEffect(() => {
    if (hydrated && user?.role === "admin") navigate({ to: "/admin" });
  }, [hydrated, user, navigate]);

  if (!hydrated) return <AccountLoading />;

  if (!user) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
          <p className="label-caps text-olive">My account</p>
          <h1 className="mt-4 text-5xl md:text-7xl">A place for your orders.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Sign in to manage your profile and follow every delivery.
          </p>
          <Button asChild className="mt-8">
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </StoreShell>
    );
  }

  const latestAddress = orders[0]?.shippingAddress;
  const handleSignOut = () => {
    signOut();
    navigate({ to: "/" });
  };

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-10 md:py-16">
        <div className="border-b border-hairline pb-10">
          <p className="label-caps text-olive">Account space</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl">My account</h1>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Welcome back, {user.name.split(" ")[0]}. Keep your details and deliveries close.
              </p>
            </div>
            <p className="label-caps text-muted-foreground">
              {orders.length} {orders.length === 1 ? "order" : "orders"}
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16">
          <AccountNav active={section} onChange={setSection} onSignOut={handleSignOut} />
          <main className="min-w-0">
            {section === "overview" && <ProfilePanel user={user} onSave={updateProfile} />}
            {section === "orders" && (
              <AccountSectionHeader
                eyebrow="Your history"
                title="Orders"
                description="Follow your recent purchases from confirmation to delivery."
              />
            )}
            {section === "orders" && (
              <div className="mt-6">
                {ordersPending ? (
                  <p className="py-12 text-muted-foreground">Loading orders...</p>
                ) : ordersError ? (
                  <p role="alert" className="py-12 text-destructive">
                    Unable to load your orders. Please try again.
                  </p>
                ) : (
                  <OrderList orders={orders} reviewProducts={reviewProducts} />
                )}
              </div>
            )}
            {section === "addresses" && (
              <AddressesSection address={latestAddress} name={user.name} />
            )}
            {section === "security" && <SecuritySection email={user.email} />}
          </main>
        </div>
      </div>
    </StoreShell>
  );
}

function AccountLoading() {
  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <div className="h-10 w-56 animate-pulse bg-surface-2" />
        <div className="mt-10 h-48 animate-pulse bg-surface-2" />
      </div>
    </StoreShell>
  );
}

function AccountSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="label-caps text-olive">{eyebrow}</p>
      <h2 className="mt-3 text-5xl">{title}</h2>
      <p className="mt-3 max-w-lg text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function AddressesSection({ address, name }: { address: string | undefined; name: string }) {
  return (
    <div>
      <AccountSectionHeader
        eyebrow="Delivery details"
        title="Addresses"
        description="Your latest delivery address is kept with the order it belongs to."
      />
      <Card className="mt-6 max-w-xl rounded-none shadow-none">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Most recent delivery</CardTitle>
          <MapPin size={18} className="text-olive" />
        </CardHeader>
        <CardContent>
          {address ? (
            <>
              <p>{name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{address}</p>
              <p className="mt-5 text-xs text-muted-foreground">
                Saved addresses are managed per order at checkout.
              </p>
            </>
          ) : (
            <div className="py-5">
              <p className="text-lg">No delivery address yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your address will appear here after your first order.
              </p>
              <Button asChild className="mt-6">
                <Link to="/shop">Start shopping</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function SecuritySection({ email }: { email: string }) {
  return (
    <div>
      <AccountSectionHeader
        eyebrow="Account protection"
        title="Security"
        description="Your account is protected by the sign-in system already connected to Sorrel."
      />
      <Card className="mt-6 max-w-xl rounded-none shadow-none">
        <CardContent className="flex items-start gap-4 p-6">
          <ShieldCheck size={22} className="mt-1 text-olive" />
          <div>
            <h2 className="text-lg">Password protected</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Signed in as {email}. Password changes are handled through the existing authentication
              flow.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
