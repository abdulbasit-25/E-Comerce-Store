import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { s as useOrders } from "./store-BPy7gmTA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminShell } from "./admin-shell-DDNuiuk7.mjs";
import { t as DataTable } from "./data-table-CyG1WKmt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.orders-CGWewvKg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statuses = [
	"Pending",
	"Confirmed",
	"Shipped",
	"Delivered",
	"Cancelled"
];
function statusTone(status) {
	return cn("label-caps px-2 py-1", status === "Delivered" && "bg-olive-soft text-foreground", status === "Cancelled" && "bg-destructive/10 text-destructive", (status === "Pending" || status === "Confirmed" || status === "Shipped") && "bg-surface-2");
}
function AdminOrders() {
	const orders = useOrders((s) => s.orders);
	const setStatus = useOrders((s) => s.setStatus);
	const togglePaid = useOrders((s) => s.togglePaid);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const columns = (0, import_react.useMemo)(() => [
		{
			accessorKey: "id",
			header: "Order"
		},
		{
			accessorKey: "customerName",
			header: "Customer"
		},
		{
			accessorKey: "createdAt",
			header: "Placed"
		},
		{
			accessorKey: "totalAmount",
			header: "Total",
			cell: ({ getValue }) => currency(Number(getValue()))
		},
		{
			accessorKey: "paid",
			header: "Payment",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => togglePaid(row.original.id),
				className: cn("label-caps px-2 py-1", row.original.paid ? "bg-olive-soft" : "bg-surface-2"),
				children: row.original.paid ? "Collected" : "COD due"
			})
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				value: row.original.status,
				onChange: (e) => {
					setStatus(row.original.id, e.target.value);
					toast.success(`${row.original.id} → ${e.target.value}`);
				},
				className: "border border-border bg-background px-2 py-1 text-xs outline-none focus:border-olive",
				children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: s,
					children: s
				}, s))
			})
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setSelected(row.original),
				className: "label-caps text-olive",
				children: "View"
			})
		}
	], [setStatus, togglePaid]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Orders",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			data: orders,
			columns,
			searchPlaceholder: "Search orders, customers…",
			emptyTitle: "No orders match",
			emptyBody: "Try a different search term."
		}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm",
			onClick: () => setSelected(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-full w-full max-w-md overflow-y-auto bg-background p-6",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-caps text-muted-foreground",
							children: "Order"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: selected.id
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelected(null),
							className: "label-caps text-muted-foreground",
							children: "Close"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selected.customerName }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: selected.customerEmail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: selected.shippingAddress
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mt-4 inline-block", statusTone(selected.status)),
						children: selected.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "mt-6 w-full text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [selected.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-2",
								children: [
									item.name,
									" × ",
									item.qty
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-right",
								children: currency(item.priceAtPurchase * item.qty)
							})]
						}, item.productId)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "py-2 font-medium",
							children: [
								"Total (",
								selected.paymentMethod,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right font-medium",
							children: currency(selected.totalAmount)
						})] })] })
					}),
					selected.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 border-l-2 border-olive pl-3 text-sm text-muted-foreground",
						children: selected.notes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-caps text-muted-foreground",
							children: "History"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 space-y-2 text-sm",
							children: selected.statusHistory.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: entry.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: entry.at
								})]
							}, i))
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { AdminOrders as component, statusTone };
