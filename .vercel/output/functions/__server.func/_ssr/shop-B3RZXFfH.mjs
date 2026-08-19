import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as products, t as categories } from "./mock-data-CacGgQ9l.mjs";
import { m as Search } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CAA2NU0x.mjs";
import { n as ProductCardSkeleton, t as ProductCard } from "./product-card-Bkn8mXL0.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as Route } from "./router-CsxrrO3j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-B3RZXFfH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/shop.tsx?tsr-split=component";
function useFilteredProducts(search) {
	return useQuery({
		queryKey: ["products", search],
		queryFn: async () => {
			await new Promise((r) => setTimeout(r, 250));
			return products.filter((p) => {
				if (search.category && p.categorySlug !== search.category) return false;
				if (search.q && !`${p.name} ${p.description}`.toLowerCase().includes(search.q.toLowerCase())) return false;
				if (search.max && p.price > search.max) return false;
				if (search.inStock && p.stock === 0) return false;
				return true;
			});
		}
	});
}
function Shop() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const { data, isPending } = useFilteredProducts(search);
	const maxPrice = (0, import_react.useMemo)(() => Math.max(...products.map((p) => p.price)), []);
	const setSearch = (patch) => navigate({
		search: (prev) => ({
			...prev,
			...patch
		}),
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-12 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-olive",
				children: search.category ? categories.find((c) => c.slug === search.category)?.name : "Everything"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 text-5xl md:text-7xl",
				children: "Shop"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[220px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								value: search.q ?? "",
								onChange: (e) => setSearch({ q: e.target.value || void 0 }),
								placeholder: "Search",
								className: "w-full border-b border-hairline bg-transparent py-2 pl-6 text-sm outline-none placeholder:text-muted-foreground focus:border-olive"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "label-caps mb-3 text-muted-foreground",
							children: "Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-start gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setSearch({ category: void 0 }),
								className: cn("link-underline", !search.category && "text-olive"),
								children: "All"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 17
							}, this), categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setSearch({ category: c.slug }),
								className: cn("link-underline", search.category === c.slug && "text-olive"),
								children: c.name
							}, c.id, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 38
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "label-caps mb-3 text-muted-foreground",
								children: "Max price"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "range",
								min: 50,
								max: maxPrice,
								step: 5,
								value: search.max ?? maxPrice,
								onChange: (e) => setSearch({ max: Number(e.target.value) }),
								className: "w-full accent-olive"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Up to $", search.max ?? maxPrice]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "flex cursor-pointer items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "checkbox",
								checked: Boolean(search.inStock),
								onChange: (e) => setSearch({ inStock: e.target.checked || void 0 }),
								className: "accent-olive"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 15
							}, this), "In stock only"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => navigate({
								search: {},
								replace: true
							}),
							className: "label-caps text-muted-foreground link-underline",
							children: "Reset"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCardSkeleton, {}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 26
				}, this) : data && data.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3",
					children: data.map((product, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, {
						product,
						index: i
					}, product.id, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 43
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 50
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center justify-center border border-dashed border-hairline px-6 py-24 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-4xl",
							children: "Nothing here yet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 max-w-sm text-sm text-muted-foreground",
							children: "No pieces match this combination of filters. Try widening the price range or clearing the category."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/shop",
							search: {},
							className: "label-caps mt-8 bg-primary px-6 py-3 text-primary-foreground",
							children: "Clear filters"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 24
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 10
	}, this);
}
//#endregion
export { Shop as component };
