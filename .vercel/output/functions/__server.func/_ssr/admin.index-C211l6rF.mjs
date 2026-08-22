import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as currency, o as salesByMonth } from "./mock-data-CacGgQ9l.mjs";
import { a as useCatalog, s as useOrders } from "./store-BPy7gmTA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AdminShell } from "./admin-shell-DDNuiuk7.mjs";
import { a as Area, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-C211l6rF.js
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Overview",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total orders",
						value: String(orders.length),
						note: `${pending} awaiting confirmation`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Revenue",
						value: currency(revenue),
						note: "Excludes cancelled orders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Products",
						value: String(products.length),
						note: `${lowStock.length} low on stock`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Delivered",
						value: String(orders.filter((o) => o.status === "Delivered").length),
						note: "Payment collected"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-5 lg:grid-cols-[3fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Revenue, last 6 months",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: salesByMonth,
							margin: {
								left: -20,
								right: 8,
								top: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--color-border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									tickLine: false,
									axisLine: false,
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tickLine: false,
									axisLine: false,
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--color-popover)",
									border: "1px solid var(--color-border)",
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "revenue",
									stroke: "var(--color-olive)",
									fill: "var(--color-olive)",
									fillOpacity: .15,
									strokeWidth: 2
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Top-selling products",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: topProducts,
							layout: "vertical",
							margin: {
								left: 40,
								right: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--color-border)",
									horizontal: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									type: "number",
									tickLine: false,
									axisLine: false,
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									type: "category",
									dataKey: "name",
									width: 110,
									tickLine: false,
									axisLine: false,
									fontSize: 10
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--color-popover)",
									border: "1px solid var(--color-border)",
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "units",
									fill: "var(--color-olive)",
									barSize: 14
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Recent orders",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border text-sm",
						children: orders.slice(0, 6).map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: order.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									order.customerName,
									" · ",
									order.createdAt
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: currency(order.totalAmount) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: order.status
								})]
							})]
						}, order.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/orders",
						className: "label-caps mt-4 inline-block text-olive",
						children: "All orders"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Low stock alerts",
					children: lowStock.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "Every product is comfortably stocked."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border text-sm",
						children: lowStock.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: product.stock === 0 ? "text-destructive" : "text-olive",
								children: [product.stock, " left"]
							})]
						}, product.id))
					})
				})]
			})
		]
	});
}
function Stat({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-4xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: note
			})
		]
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "label-caps mb-4 text-muted-foreground",
			children: title
		}), children]
	});
}
//#endregion
export { AdminOverview as component };
