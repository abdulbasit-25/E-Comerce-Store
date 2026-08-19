import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as products, n as currency, t as categories } from "./mock-data-CacGgQ9l.mjs";
import { i as useCart } from "./store-BPy7gmTA.mjs";
import { _ as Plus, o as Star, x as Minus } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CqSsDW3p.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ProductCard } from "./product-card-HD2wNVuu.mjs";
import { r as Route } from "./router-B-ea4xG-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BSPoSb_k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const add = useCart((s) => s.add);
	const [qty, setQty] = (0, import_react.useState)(1);
	const category = categories.find((c) => c.slug === product.categorySlug);
	const related = products.filter((p) => p.id !== product.id).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-8 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "label-caps text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "link-underline",
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: { category: product.categorySlug },
						className: "link-underline",
						children: category?.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						width: 1024,
						height: 1280,
						className: "w-full bg-surface-2 object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5 md:pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-5xl leading-none md:text-6xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: currency(product.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-olive text-olive" }), product.rating]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 space-y-2 border-t border-hairline pt-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "SKU"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.sku })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Availability"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: product.stock === 0 ? "text-destructive" : "text-olive",
										children: product.stock === 0 ? "Sold out" : `${product.stock} in stock`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Payment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Cash on delivery" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-stretch gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border border-hairline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										className: "px-4 py-4 hover:text-olive",
										"aria-label": "Decrease quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty((q) => q + 1),
										className: "px-4 py-4 hover:text-olive",
										"aria-label": "Increase quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: product.stock === 0,
								onClick: () => {
									add(product.id, qty);
									toast.success(`${product.name} added to your bag`);
								},
								className: "label-caps flex-1 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-40",
								children: product.stock === 0 ? "Sold out" : "Add to bag"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-8 text-3xl",
					children: "Pairs well with"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3",
					children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						index: i
					}, p.id))
				})]
			})
		]
	}) });
}
//#endregion
export { ProductDetail as component };
