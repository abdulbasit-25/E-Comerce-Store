import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { s as useOrders } from "./store-BPy7gmTA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminShell } from "./admin-shell-BNiW8jSL.mjs";
import { t as DataTable } from "./data-table-iJ0UABVE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.orders-BtwlufPx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/admin.orders.tsx?tsr-split=component";
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
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => togglePaid(row.original.id),
				className: cn("label-caps px-2 py-1", row.original.paid ? "bg-olive-soft" : "bg-surface-2"),
				children: row.original.paid ? "Collected" : "COD due"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 11
			}, this)
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
				value: row.original.status,
				onChange: (e) => {
					setStatus(row.original.id, e.target.value);
					toast.success(`${row.original.id} → ${e.target.value}`);
				},
				className: "border border-border bg-background px-2 py-1 text-xs outline-none focus:border-olive",
				children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: s,
					children: s
				}, s, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 11
			}, this)
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setSelected(row.original),
				className: "label-caps text-olive",
				children: "View"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 11
			}, this)
		}
	], [setStatus, togglePaid]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminShell, {
		title: "Orders",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
			data: orders,
			columns,
			searchPlaceholder: "Search orders, customers…",
			emptyTitle: "No orders match",
			emptyBody: "Try a different search term."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 7
		}, this), selected && /* @__PURE__ */ (void 0)("div", {
			className: "fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm",
			onClick: () => setSelected(null),
			children: /* @__PURE__ */ (void 0)("aside", {
				className: "h-full w-full max-w-md overflow-y-auto bg-background p-6",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "label-caps text-muted-foreground",
							children: "Order"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("h2", {
							className: "font-display text-3xl",
							children: selected.id
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							onClick: () => setSelected(null),
							className: "label-caps text-muted-foreground",
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-6 space-y-1 text-sm",
						children: [
							/* @__PURE__ */ (void 0)("p", { children: selected.customerName }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-muted-foreground",
								children: selected.customerEmail
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-muted-foreground",
								children: selected.shippingAddress
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("span", {
						className: cn("mt-4 inline-block", statusTone(selected.status)),
						children: selected.status
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("table", {
						className: "mt-6 w-full text-sm",
						children: /* @__PURE__ */ (void 0)("tbody", { children: [selected.items.map((item) => /* @__PURE__ */ (void 0)("tr", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (void 0)("td", {
								className: "py-2",
								children: [
									item.name,
									" × ",
									item.qty
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("td", {
								className: "py-2 text-right",
								children: currency(item.priceAtPurchase * item.qty)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 21
							}, this)]
						}, item.productId, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 45
						}, this)), /* @__PURE__ */ (void 0)("tr", { children: [/* @__PURE__ */ (void 0)("td", {
							className: "py-2 font-medium",
							children: [
								"Total (",
								selected.paymentMethod,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("td", {
							className: "py-2 text-right font-medium",
							children: currency(selected.totalAmount)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 13
					}, this),
					selected.notes && /* @__PURE__ */ (void 0)("p", {
						className: "mt-4 border-l-2 border-olive pl-3 text-sm text-muted-foreground",
						children: selected.notes
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 32
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (void 0)("p", {
							className: "label-caps text-muted-foreground",
							children: "History"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("ol", {
							className: "mt-3 space-y-2 text-sm",
							children: selected.statusHistory.map((entry, i) => /* @__PURE__ */ (void 0)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (void 0)("span", { children: entry.status }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: entry.at
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 21
								}, this)]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 59
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 20
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminOrders as component, statusTone };
