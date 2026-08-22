import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as currency, r as customers } from "./mock-data-CacGgQ9l.mjs";
import { s as useOrders } from "./store-BPy7gmTA.mjs";
import { t as AdminShell } from "./admin-shell-DDNuiuk7.mjs";
import { t as DataTable } from "./data-table-CyG1WKmt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.customers-CajGX162.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCustomers() {
	const orders = useOrders((s) => s.orders);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => customers.map((customer) => {
		const theirs = orders.filter((o) => o.customerId === customer.id);
		return {
			...customer,
			orderCount: theirs.length,
			spend: theirs.reduce((sum, o) => sum + o.totalAmount, 0)
		};
	}), [orders]);
	const columns = (0, import_react.useMemo)(() => [
		{
			accessorKey: "name",
			header: "Customer"
		},
		{
			accessorKey: "email",
			header: "Email"
		},
		{
			accessorKey: "city",
			header: "City"
		},
		{
			accessorKey: "createdAt",
			header: "Joined"
		},
		{
			accessorKey: "orderCount",
			header: "Orders"
		},
		{
			accessorKey: "spend",
			header: "Lifetime value",
			cell: ({ getValue }) => currency(Number(getValue()))
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setSelected(row.original),
				className: "label-caps text-olive",
				children: "History"
			})
		}
	], []);
	const history = selected ? orders.filter((o) => o.customerId === selected.id) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Customers",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			data: rows,
			columns,
			searchPlaceholder: "Search customers…",
			emptyTitle: "No customers",
			emptyBody: "Registered customers will appear here."
		}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm",
			onClick: () => setSelected(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-full w-full max-w-md overflow-y-auto bg-background p-6",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: selected.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: selected.email
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelected(null),
						className: "label-caps text-muted-foreground",
						children: "Close"
					})]
				}), history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: "No orders placed yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border text-sm",
					children: history.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: order.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								order.createdAt,
								" · ",
								order.status
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currency(order.totalAmount) })]
					}, order.id))
				})]
			})
		})]
	});
}
//#endregion
export { AdminCustomers as component };
