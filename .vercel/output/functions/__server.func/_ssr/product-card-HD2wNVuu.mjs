import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-HD2wNVuu.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/product/$slug",
		params: { slug: product.slug },
		className: "group block rise",
		style: { animationDelay: `${Math.min(index, 6) * 60}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "media-zoom relative aspect-[4/5] bg-surface-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					width: 1024,
					height: 1280,
					className: "h-full w-full object-cover"
				}),
				product.stock === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-caps absolute top-3 left-3 bg-background px-2 py-1",
					children: "Sold out"
				}),
				product.stock > 0 && product.stock <= 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label-caps absolute top-3 left-3 bg-olive px-2 py-1 text-accent-foreground",
					children: [product.stock, " left"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg leading-snug",
				children: product.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted-foreground",
				children: currency(product.price)
			})]
		})]
	});
}
function ProductCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[4/5] animate-pulse bg-surface-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-4 w-2/3 animate-pulse bg-surface-2" })] });
}
//#endregion
export { ProductCardSkeleton as n, ProductCard as t };
