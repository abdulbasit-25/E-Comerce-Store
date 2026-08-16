import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { currency, customers, type Customer } from "@/lib/mock-data";
import { useOrders } from "@/lib/store";

export const Route = createFileRoute("/admin/customers")({
  component: AdminCustomers,
});

function AdminCustomers() {
  const orders = useOrders((s) => s.orders);
  const [selected, setSelected] = useState<Customer | null>(null);

  const rows = useMemo(
    () =>
      customers.map((customer) => {
        const theirs = orders.filter((o) => o.customerId === customer.id);
        return {
          ...customer,
          orderCount: theirs.length,
          spend: theirs.reduce((sum, o) => sum + o.totalAmount, 0),
        };
      }),
    [orders],
  );

  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Customer" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "city", header: "City" },
      { accessorKey: "createdAt", header: "Joined" },
      { accessorKey: "orderCount", header: "Orders" },
      {
        accessorKey: "spend",
        header: "Lifetime value",
        cell: ({ getValue }: { getValue: () => unknown }) => currency(Number(getValue())),
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }: { row: { original: Customer } }) => (
          <button onClick={() => setSelected(row.original)} className="label-caps text-olive">
            History
          </button>
        ),
      },
    ],
    [],
  );

  const history = selected ? orders.filter((o) => o.customerId === selected.id) : [];

  return (
    <AdminShell title="Customers">
      <DataTable
        data={rows}
        columns={columns}
        searchPlaceholder="Search customers…"
        emptyTitle="No customers"
        emptyBody="Registered customers will appear here."
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
                <h2 className="font-display text-3xl">{selected.name}</h2>
                <p className="text-sm text-muted-foreground">{selected.email}</p>
              </div>
              <button onClick={() => setSelected(null)} className="label-caps text-muted-foreground">
                Close
              </button>
            </div>

            {history.length === 0 ? (
              <p className="mt-10 text-sm text-muted-foreground">No orders placed yet.</p>
            ) : (
              <ul className="mt-8 divide-y divide-border text-sm">
                {history.map((order) => (
                  <li key={order.id} className="flex justify-between py-3">
                    <div>
                      <p>{order.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {order.createdAt} · {order.status}
                      </p>
                    </div>
                    <span>{currency(order.totalAmount)}</span>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      )}
    </AdminShell>
  );
}
