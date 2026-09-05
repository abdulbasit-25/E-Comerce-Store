import { ChevronRight, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Order, OrderStatus } from "@/lib/catalog-types";
import type { EligibleReviewProduct } from "@/lib/review-server";
import { cn, currency } from "@/lib/utils";

const steps: OrderStatus[] = ["Pending", "Confirmed", "Shipped", "Delivered"];

export function OrderList({
  orders,
  reviewProducts = [],
}: {
  orders: Order[];
  reviewProducts?: EligibleReviewProduct[];
}) {
  const [selected, setSelected] = useState<Order | null>(null);

  if (orders.length === 0) {
    return (
      <Card className="rounded-none border-dashed shadow-none">
        <CardContent className="flex flex-col items-center px-6 py-16 text-center">
          <Package size={28} strokeWidth={1.2} className="text-olive" />
          <h2 className="mt-5 text-3xl">No orders yet</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Your order history will appear here after your first purchase.
          </p>
          <Button asChild className="mt-7">
            <Link to="/shop">Start shopping</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          reviewProducts={reviewProducts}
          onView={() => setSelected(order)}
        />
      ))}
      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          {selected && <OrderDetails order={selected} reviewProducts={reviewProducts} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function OrderCard({
  order,
  reviewProducts,
  onView,
}: {
  order: Order;
  reviewProducts: EligibleReviewProduct[];
  onView: () => void;
}) {
  return (
    <Card className="rounded-none shadow-none transition-colors hover:bg-surface">
      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-display text-2xl">{order.id}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {formatDate(order.createdAt)} · {order.items.reduce((sum, item) => sum + item.qty, 0)}{" "}
              items
            </p>
          </div>
          <StatusBadge status={order.status} />
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-hairline pt-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {order.items.map((item) => item.name).join(", ")}
            </p>
            <p className="mt-1 text-sm">{order.paid ? "Paid" : "Cash on delivery"}</p>
            {order.status === "Delivered" ? (
              <ReviewStatusList order={order} reviewProducts={reviewProducts} />
            ) : null}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg">{currency(order.totalAmount)}</span>
            <Button variant="ghost" size="sm" onClick={onView}>
              View order <ChevronRight size={15} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function OrderDetails({
  order,
  reviewProducts,
}: {
  order: Order;
  reviewProducts: EligibleReviewProduct[];
}) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-display text-3xl">{order.id}</DialogTitle>
        <DialogDescription>
          Placed {formatDate(order.createdAt)} · {order.paid ? "Paid" : "Cash on delivery"}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 text-sm">
        {order.status !== "Cancelled" && (
          <ol className="flex gap-1">
            {steps.map((step) => (
              <li key={step} className="flex flex-1 flex-col gap-2">
                <span
                  className={cn(
                    "h-1",
                    steps.indexOf(order.status) >= steps.indexOf(step) ? "bg-olive" : "bg-hairline",
                  )}
                />
                <span className="label-caps text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        )}
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.productId} className="flex justify-between gap-4">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>{currency(item.priceAtPurchase * item.qty)}</span>
            </div>
          ))}
        </div>
        {order.status === "Delivered" ? (
          <ReviewStatusList order={order} reviewProducts={reviewProducts} detailed />
        ) : null}
        <dl className="space-y-2 border-t border-hairline pt-4">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>{currency(order.totalAmount)}</dd>
          </div>
          <div className="flex justify-between font-medium">
            <dt>Total</dt>
            <dd>{currency(order.totalAmount)}</dd>
          </div>
        </dl>
        <div className="border-l-2 border-olive bg-surface px-4 py-3">
          <p className="label-caps text-muted-foreground">Shipping to</p>
          <p className="mt-2">{order.shippingAddress}</p>
        </div>
      </div>
    </>
  );
}

function ReviewStatusList({
  order,
  reviewProducts,
  detailed = false,
}: {
  order: Order;
  reviewProducts: EligibleReviewProduct[];
  detailed?: boolean;
}) {
  const items = reviewProducts.filter((review) => review.orderNumber === order.id);
  if (items.length === 0) return null;
  return (
    <div className={cn("mt-4 space-y-2", detailed ? "border-t border-hairline pt-4" : "")}>
      <p className="label-caps text-olive">Your experience</p>
      {items.map((item) => (
        <div
          key={`${item.orderId}-${item.productId}`}
          className="flex flex-wrap items-center justify-between gap-2 text-sm"
        >
          <span>{item.productName}</span>
          {item.reviewStatus ? (
            <span className="text-muted-foreground">
              {item.reviewStatus === "pending"
                ? "Review Pending"
                : item.reviewStatus === "approved"
                  ? "Review Approved"
                  : "Review Rejected"}
            </span>
          ) : (
            <Link
              to="/product/$slug"
              params={{ slug: item.productSlug }}
              className="link-underline text-olive"
            >
              Write a Review
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={cn(
        "label-caps border px-2 py-1",
        status === "Delivered"
          ? "border-olive text-olive"
          : status === "Cancelled"
            ? "border-destructive text-destructive"
            : "border-hairline text-muted-foreground",
      )}
    >
      {status}
    </span>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
