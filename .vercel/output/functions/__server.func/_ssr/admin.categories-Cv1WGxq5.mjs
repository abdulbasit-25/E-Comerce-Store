import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as categories } from "./mock-data-CacGgQ9l.mjs";
import { a as useCatalog } from "./store-BPy7gmTA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminShell } from "./admin-shell-DDNuiuk7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.categories-Cv1WGxq5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCategories() {
	const products = useCatalog((s) => s.products);
	const [list, setList] = (0, import_react.useState)(categories);
	const [draft, setDraft] = (0, import_react.useState)({
		name: "",
		description: ""
	});
	const add = (event) => {
		event.preventDefault();
		if (!draft.name.trim()) {
			toast.error("Category needs a name");
			return;
		}
		const category = {
			id: `c-${Date.now()}`,
			name: draft.name.trim(),
			slug: draft.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-"),
			description: draft.description.trim()
		};
		setList((prev) => [...prev, category]);
		setDraft({
			name: "",
			description: ""
		});
		toast.success(`${category.name} added`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Categories",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "label-caps px-3 py-2 text-left text-muted-foreground",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "label-caps px-3 py-2 text-left text-muted-foreground",
								children: "Slug"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "label-caps px-3 py-2 text-left text-muted-foreground",
								children: "Products"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: category.description
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-muted-foreground",
								children: category.slug
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5",
								children: products.filter((p) => p.categorySlug === category.slug).length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2.5 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setList((prev) => prev.filter((c) => c.id !== category.id));
										toast.success(`${category.name} removed`);
									},
									className: "label-caps text-muted-foreground hover:text-destructive",
									children: "Delete"
								})
							})
						]
					}, category.id)) })]
				}), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-16 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "No categories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Add one to organise the catalogue."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: add,
				className: "h-fit space-y-4 border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "label-caps text-muted-foreground",
						children: "New category"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.name,
						onChange: (e) => setDraft((d) => ({
							...d,
							name: e.target.value
						})),
						placeholder: "Name",
						className: "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: draft.description,
						onChange: (e) => setDraft((d) => ({
							...d,
							description: e.target.value
						})),
						placeholder: "Short description",
						rows: 3,
						className: "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "label-caps w-full bg-primary px-4 py-3 text-primary-foreground",
						children: "Add category"
					})
				]
			})]
		})
	});
}
//#endregion
export { AdminCategories as component };
