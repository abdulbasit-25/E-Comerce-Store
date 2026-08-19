import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Bkn8mXL0.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/storefront/product-card.tsx";
function ProductCard({ product, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/product/$slug",
		params: { slug: product.slug },
		className: "group block rise",
		style: { animationDelay: `${Math.min(index, 6) * 60}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "media-zoom relative aspect-[4/5] bg-surface-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					width: 1024,
					height: 1280,
					className: "h-full w-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				product.stock === 0 && /* @__PURE__ */ (void 0)("span", {
					className: "label-caps absolute top-3 left-3 bg-background px-2 py-1",
					children: "Sold out"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 11
				}, this),
				product.stock > 0 && product.stock <= 5 && /* @__PURE__ */ (void 0)("span", {
					className: "label-caps absolute top-3 left-3 bg-olive px-2 py-1 text-accent-foreground",
					children: [product.stock, " left"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-3 flex items-baseline justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "text-lg leading-snug",
				children: product.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-sm text-muted-foreground",
				children: currency(product.price)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
function ProductCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-[4/5] animate-pulse bg-surface-2" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-2/3 animate-pulse bg-surface-2" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 5
	}, this);
}
//#endregion
export { ProductCardSkeleton as n, ProductCard as t };
