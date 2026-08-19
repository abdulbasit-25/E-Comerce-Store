import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as currency, r as customers } from "./mock-data-CacGgQ9l.mjs";
import { s as useOrders } from "./store-BPy7gmTA.mjs";
import { t as AdminShell } from "./admin-shell-BNiW8jSL.mjs";
import { t as DataTable } from "./data-table-iJ0UABVE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.customers-DixP6Ghb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/admin.customers.tsx?tsr-split=component";
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
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setSelected(row.original),
				className: "label-caps text-olive",
				children: "History"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 11
			}, this)
		}
	], []);
	const history = selected ? orders.filter((o) => o.customerId === selected.id) : [];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminShell, {
		title: "Customers",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
			data: rows,
			columns,
			searchPlaceholder: "Search customers…",
			emptyTitle: "No customers",
			emptyBody: "Registered customers will appear here."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 7
		}, this), selected && /* @__PURE__ */ (void 0)("div", {
			className: "fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm",
			onClick: () => setSelected(null),
			children: /* @__PURE__ */ (void 0)("aside", {
				className: "h-full w-full max-w-md overflow-y-auto bg-background p-6",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
						className: "font-display text-3xl",
						children: selected.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-muted-foreground",
						children: selected.email
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("button", {
						onClick: () => setSelected(null),
						className: "label-caps text-muted-foreground",
						children: "Close"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 13
				}, this), history.length === 0 ? /* @__PURE__ */ (void 0)("p", {
					className: "mt-10 text-sm text-muted-foreground",
					children: "No orders placed yet."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 37
				}, this) : /* @__PURE__ */ (void 0)("ul", {
					className: "mt-8 divide-y divide-border text-sm",
					children: history.map((order) => /* @__PURE__ */ (void 0)("li", {
						className: "flex justify-between py-3",
						children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", { children: order.id }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 23
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								order.createdAt,
								" · ",
								order.status
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 23
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 21
						}, this), /* @__PURE__ */ (void 0)("span", { children: currency(order.totalAmount) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 21
						}, this)]
					}, order.id, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 39
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 116
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 20
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminCustomers as component };
