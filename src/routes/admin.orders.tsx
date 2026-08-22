import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { currency, type Order, type OrderStatus } from "@/lib/mock-data";
import { useOrders } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

const statuses: OrderStatus[] = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];

export function statusTone(status: OrderStatus) {
  return cn(
    "label-caps px-2 py-1",
    status === "Delivered" && "bg-olive-soft text-foreground",
    status === "Cancelled" && "bg-destructive/10 text-destructive",
    (status === "Pending" || status === "Confirmed" || status === "Shipped") && "bg-surface-2",
  );
}

function AdminOrders() {
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const togglePaid = useOrders((s) => s.togglePaid);
  const [selected, setSelected] = useState<Order | null>(null);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "Order" },
      { accessorKey: "customerName", header: "Customer" },
      { accessorKey: "createdAt", header: "Placed" },
      {
        accessorKey: "totalAmount",
        header: "Total",
        cell: ({ getValue }: { getValue: () => unknown }) => currency(Number(getValue())),
      },
      {
        accessorKey: "paid",
        header: "Payment",
        cell: ({ row }: { row: { original: Order } }) => (
          <button
            onClick={() => togglePaid(row.original.id)}
            className={cn(
              "label-caps px-2 py-1",
              row.original.paid ? "bg-olive-soft" : "bg-surface-2",
            )}
          >
            {row.original.paid ? "Collected" : "COD due"}
          </button>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }: { row: { original: Order } }) => (
          <select
            value={row.original.status}
            onChange={(e) => {
              setStatus(row.original.id, e.target.value as OrderStatus);
              toast.success(`${row.original.id} → ${e.target.value}`);
            }}
            className="border border-border bg-background px-2 py-1 text-xs outline-none focus:border-olive"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ),
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }: { row: { original: Order } }) => (
          <button onClick={() => setSelected(row.original)} className="label-caps text-olive">
            View
          </button>
        ),
      },
    ],
    [setStatus, togglePaid],
  );

  return (
    <AdminShell title="Orders">
      <DataTable
        data={orders}
        columns={columns}
        searchPlaceholder="Search orders, customers…"
        emptyTitle="No orders match"
        emptyBody="Try a different search term."
      />

      {selected && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <aside
            className="h-full w-full max-w-md overflow-y-auto bg-background p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="label-caps text-muted-foreground">Order</p>
                <h2 className="font-display text-3xl">{selected.id}</h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="label-caps text-muted-foreground"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-1 text-sm">
              <p>{selected.customerName}</p>
              <p className="text-muted-foreground">{selected.customerEmail}</p>
              <p className="text-muted-foreground">{selected.shippingAddress}</p>
            </div>

            <span className={cn("mt-4 inline-block", statusTone(selected.status))}>
              {selected.status}
            </span>

            <table className="mt-6 w-full text-sm">
              <tbody>
                {selected.items.map((item) => (
                  <tr key={item.productId} className="border-b border-border">
                    <td className="py-2">
                      {item.name} × {item.qty}
                    </td>
                    <td className="py-2 text-right">{currency(item.priceAtPurchase * item.qty)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-2 font-medium">Total ({selected.paymentMethod})</td>
                  <td className="py-2 text-right font-medium">{currency(selected.totalAmount)}</td>
                </tr>
              </tbody>
            </table>

            {selected.notes && (
              <p className="mt-4 border-l-2 border-olive pl-3 text-sm text-muted-foreground">
                {selected.notes}
              </p>
            )}

            <div className="mt-8">
              <p className="label-caps text-muted-foreground">History</p>
              <ol className="mt-3 space-y-2 text-sm">
                {selected.statusHistory.map((entry, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{entry.status}</span>
                    <span className="text-muted-foreground">{entry.at}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      )}
    </AdminShell>
  );
}
