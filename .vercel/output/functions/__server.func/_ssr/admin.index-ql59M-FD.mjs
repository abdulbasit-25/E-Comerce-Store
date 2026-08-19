import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as currency, o as salesByMonth } from "./mock-data-CacGgQ9l.mjs";
import { a as useCatalog, s as useOrders } from "./store-BPy7gmTA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AdminShell } from "./admin-shell-BNiW8jSL.mjs";
import { a as Area, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-ql59M-FD.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/admin.index.tsx?tsr-split=component";
function AdminOverview() {
	const orders = useOrders((s) => s.orders);
	const products = useCatalog((s) => s.products);
	const revenue = orders.filter((o) => o.status !== "Cancelled").reduce((sum, o) => sum + o.totalAmount, 0);
	const pending = orders.filter((o) => o.status === "Pending").length;
	const lowStock = products.filter((p) => p.stock <= 5);
	const topProducts = Object.values(orders.flatMap((o) => o.items).reduce((acc, item) => {
		const entry = acc[item.productId] ?? {
			name: item.name,
			units: 0
		};
		entry.units += item.qty;
		acc[item.productId] = entry;
		return acc;
	}, {})).sort((a, b) => b.units - a.units).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminShell, {
		title: "Overview",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Total orders",
						value: String(orders.length),
						note: `${pending} awaiting confirmation`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Revenue",
						value: currency(revenue),
						note: "Excludes cancelled orders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Products",
						value: String(products.length),
						note: `${lowStock.length} low on stock`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Delivered",
						value: String(orders.filter((o) => o.status === "Delivered").length),
						note: "Payment collected"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 grid gap-5 lg:grid-cols-[3fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					title: "Revenue, last 6 months",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
						width: "100%",
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AreaChart, {
							data: salesByMonth,
							margin: {
								left: -20,
								right: 8,
								top: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
									stroke: "var(--color-border)",
									vertical: false
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
									dataKey: "month",
									tickLine: false,
									axisLine: false,
									fontSize: 11
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
									tickLine: false,
									axisLine: false,
									fontSize: 11
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 42,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: {
									background: "var(--color-popover)",
									border: "1px solid var(--color-border)",
									fontSize: 12
								} }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Area, {
									type: "monotone",
									dataKey: "revenue",
									stroke: "var(--color-olive)",
									fill: "var(--color-olive)",
									fillOpacity: .15,
									strokeWidth: 2
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					title: "Top-selling products",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
						width: "100%",
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, {
							data: topProducts,
							layout: "vertical",
							margin: {
								left: 40,
								right: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
									stroke: "var(--color-border)",
									horizontal: false
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
									type: "number",
									tickLine: false,
									axisLine: false,
									fontSize: 11
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
									type: "category",
									dataKey: "name",
									width: 110,
									tickLine: false,
									axisLine: false,
									fontSize: 10
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 61,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: {
									background: "var(--color-popover)",
									border: "1px solid var(--color-border)",
									fontSize: 12
								} }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bar, {
									dataKey: "units",
									fill: "var(--color-olive)",
									barSize: 14
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					title: "Recent orders",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "divide-y divide-border text-sm",
						children: orders.slice(0, 6).map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center justify-between py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-medium",
								children: order.id
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									order.customerName,
									" · ",
									order.createdAt
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: currency(order.totalAmount) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: order.status
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 17
							}, this)]
						}, order.id, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 46
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/admin/orders",
						className: "label-caps mt-4 inline-block text-olive",
						children: "All orders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Panel, {
					title: "Low stock alerts",
					children: lowStock.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "Every product is comfortably stocked."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 36
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "divide-y divide-border text-sm",
						children: lowStock.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center justify-between py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: product.name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: product.stock === 0 ? "text-destructive" : "text-olive",
								children: [product.stock, " left"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 19
							}, this)]
						}, product.id, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 40
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 20
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
function Stat({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-muted-foreground",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 font-display text-4xl",
				children: value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: note
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 118,
		columnNumber: 10
	}, this);
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "label-caps mb-4 text-muted-foreground",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminOverview as component };
