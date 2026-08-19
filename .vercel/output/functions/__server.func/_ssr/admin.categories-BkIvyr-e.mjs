import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as categories } from "./mock-data-CacGgQ9l.mjs";
import { a as useCatalog } from "./store-BPy7gmTA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminShell } from "./admin-shell-BNiW8jSL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.categories-BkIvyr-e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/admin.categories.tsx?tsr-split=component";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminShell, {
		title: "Categories",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-5 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
						className: "bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "label-caps px-3 py-2 text-left text-muted-foreground",
								children: "Name"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "label-caps px-3 py-2 text-left text-muted-foreground",
								children: "Slug"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "label-caps px-3 py-2 text-left text-muted-foreground",
								children: "Products"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: list.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: category.name }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: category.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-3 py-2.5 text-muted-foreground",
								children: category.slug
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-3 py-2.5",
								children: products.filter((p) => p.categorySlug === category.slug).length
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-3 py-2.5 text-right",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => {
										setList((prev) => prev.filter((c) => c.id !== category.id));
										toast.success(`${category.name} removed`);
									},
									className: "label-caps text-muted-foreground hover:text-destructive",
									children: "Delete"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 19
							}, this)
						]
					}, category.id, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 37
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 11
				}, this), list.length === 0 && /* @__PURE__ */ (void 0)("div", {
					className: "px-6 py-16 text-center",
					children: [/* @__PURE__ */ (void 0)("p", {
						className: "font-display text-2xl",
						children: "No categories"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Add one to organise the catalogue."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 33
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: add,
				className: "h-fit space-y-4 border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "label-caps text-muted-foreground",
						children: "New category"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						value: draft.name,
						onChange: (e) => setDraft((d) => ({
							...d,
							name: e.target.value
						})),
						placeholder: "Name",
						className: "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						value: draft.description,
						onChange: (e) => setDraft((d) => ({
							...d,
							description: e.target.value
						})),
						placeholder: "Short description",
						rows: 3,
						className: "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "submit",
						className: "label-caps w-full bg-primary px-4 py-3 text-primary-foreground",
						children: "Add category"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminCategories as component };
