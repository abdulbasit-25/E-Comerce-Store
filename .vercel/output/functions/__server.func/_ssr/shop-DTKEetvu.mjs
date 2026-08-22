import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { a as products, t as categories } from "./mock-data-CacGgQ9l.mjs";
import { m as Search } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-XN3klzgQ.mjs";
import { n as ProductCardSkeleton, t as ProductCard } from "./product-card-HD2wNVuu.mjs";
import { n as Route } from "./router-BnrWabjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DTKEetvu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-12 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-olive",
				children: search.category ? categories.find((c) => c.slug === search.category)?.name : "Everything"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-5xl md:text-7xl",
				children: "Shop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[220px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: search.q ?? "",
								onChange: (e) => setSearch({ q: e.target.value || void 0 }),
								placeholder: "Search",
								className: "w-full border-b border-hairline bg-transparent py-2 pl-6 text-sm outline-none placeholder:text-muted-foreground focus:border-olive"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-caps mb-3 text-muted-foreground",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-start gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSearch({ category: void 0 }),
								className: cn("link-underline", !search.category && "text-olive"),
								children: "All"
							}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSearch({ category: c.slug }),
								className: cn("link-underline", search.category === c.slug && "text-olive"),
								children: c.name
							}, c.id))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps mb-3 text-muted-foreground",
								children: "Max price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 50,
								max: maxPrice,
								step: 5,
								value: search.max ?? maxPrice,
								onChange: (e) => setSearch({ max: Number(e.target.value) }),
								className: "w-full accent-olive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Up to $", search.max ?? maxPrice]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: Boolean(search.inStock),
								onChange: (e) => setSearch({ inStock: e.target.checked || void 0 }),
								className: "accent-olive"
							}), "In stock only"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navigate({
								search: {},
								replace: true
							}),
							className: "label-caps text-muted-foreground link-underline",
							children: "Reset"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardSkeleton, {}, i))
				}) : data && data.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3",
					children: data.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product,
						index: i
					}, product.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center border border-dashed border-hairline px-6 py-24 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl",
							children: "Nothing here yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm text-muted-foreground",
							children: "No pieces match this combination of filters. Try widening the price range or clearing the category."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: {},
							className: "label-caps mt-8 bg-primary px-6 py-3 text-primary-foreground",
							children: "Clear filters"
						})
					]
				}) })]
			})
		]
	}) });
}
//#endregion
export { Shop as component };
