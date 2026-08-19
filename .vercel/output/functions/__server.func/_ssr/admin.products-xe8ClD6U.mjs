import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as currency, t as categories } from "./mock-data-CacGgQ9l.mjs";
import { a as useCatalog } from "./store-BPy7gmTA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminShell } from "./admin-shell-BNiW8jSL.mjs";
import { t as DataTable } from "./data-table-iJ0UABVE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.products-xe8ClD6U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/admin.products.tsx?tsr-split=component";
var blank = {
	id: "",
	name: "",
	slug: "",
	description: "",
	price: 0,
	image: "",
	categorySlug: "apparel",
	stock: 0,
	sku: "",
	isActive: true,
	rating: 0,
	createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
};
function AdminProducts() {
	const products = useCatalog((s) => s.products);
	const upsert = useCatalog((s) => s.upsert);
	const remove = useCatalog((s) => s.remove);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const columns = (0, import_react.useMemo)(() => [
		{
			accessorKey: "name",
			header: "Product",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3",
				children: [row.original.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: row.original.image,
					alt: "",
					loading: "lazy",
					className: "h-9 w-9 shrink-0 object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 35
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-9 w-9 shrink-0 bg-surface-2" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 134
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: row.original.name }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 11
			}, this)
		},
		{
			accessorKey: "sku",
			header: "SKU"
		},
		{
			accessorKey: "categorySlug",
			header: "Category",
			cell: ({ getValue }) => categories.find((c) => c.slug === getValue())?.name ?? "—"
		},
		{
			accessorKey: "price",
			header: "Price",
			cell: ({ getValue }) => currency(Number(getValue()))
		},
		{
			accessorKey: "stock",
			header: "Stock",
			cell: ({ getValue }) => {
				const stock = Number(getValue());
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: cn(stock === 0 && "text-destructive", stock > 0 && stock <= 5 && "text-olive"),
					children: stock
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 14
				}, this);
			}
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => setEditing(row.original),
					className: "label-caps text-olive",
					children: "Edit"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => {
						remove(row.original.id);
						toast.success(`${row.original.name} removed`);
					},
					className: "label-caps text-muted-foreground hover:text-destructive",
					children: "Delete"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 11
			}, this)
		}
	], [remove]);
	const save = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") ?? "").trim();
		if (!name) {
			toast.error("Product needs a name");
			return;
		}
		const product = {
			...editing ?? blank,
			id: editing?.id || `p-${Date.now()}`,
			name,
			slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
			description: String(form.get("description") ?? ""),
			price: Number(form.get("price") ?? 0),
			stock: Number(form.get("stock") ?? 0),
			sku: String(form.get("sku") ?? ""),
			categorySlug: String(form.get("categorySlug") ?? "apparel"),
			image: String(form.get("image") ?? editing?.image ?? "")
		};
		upsert(product);
		setEditing(null);
		toast.success(`${product.name} saved`);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminShell, {
		title: "Products",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-4 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => setEditing({ ...blank }),
					className: "label-caps bg-primary px-4 py-2 text-primary-foreground",
					children: "New product"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, {
				data: products,
				columns,
				searchPlaceholder: "Search catalogue…",
				emptyTitle: "No products",
				emptyBody: "Add your first product to start selling."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 126,
				columnNumber: 7
			}, this),
			editing && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm",
				onClick: () => setEditing(null),
				children: /* @__PURE__ */ (void 0)("form", {
					onSubmit: save,
					onClick: (e) => e.stopPropagation(),
					className: "h-full w-full max-w-md space-y-4 overflow-y-auto bg-background p-6",
					children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "font-display text-3xl",
							children: editing.id ? "Edit product" : "New product"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 130,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Input, {
							label: "Name",
							name: "name",
							defaultValue: editing.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Input, {
							label: "SKU",
							name: "sku",
							defaultValue: editing.sku
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
							className: "label-caps text-muted-foreground",
							htmlFor: "categorySlug",
							children: "Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("select", {
							id: "categorySlug",
							name: "categorySlug",
							defaultValue: editing.categorySlug,
							className: "mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive",
							children: categories.map((c) => /* @__PURE__ */ (void 0)("option", {
								value: c.slug,
								children: c.name
							}, c.id, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 38
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (void 0)(Input, {
								label: "Price",
								name: "price",
								type: "number",
								defaultValue: String(editing.price)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)(Input, {
								label: "Stock",
								name: "stock",
								type: "number",
								defaultValue: String(editing.stock)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Input, {
							label: "Image URL",
							name: "image",
							defaultValue: editing.image
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
							className: "label-caps text-muted-foreground",
							htmlFor: "description",
							children: "Description"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("textarea", {
							id: "description",
							name: "description",
							rows: 4,
							defaultValue: editing.description,
							className: "mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex gap-3 pt-2",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "submit",
								className: "label-caps bg-primary px-5 py-3 text-primary-foreground",
								children: "Save"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setEditing(null),
								className: "label-caps border border-border px-5 py-3",
								children: "Cancel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 129,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 128,
				columnNumber: 19
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 117,
		columnNumber: 10
	}, this);
}
function Input({ label, name, type = "text", defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "label-caps text-muted-foreground",
		htmlFor: name,
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 178,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		id: name,
		name,
		type,
		defaultValue,
		className: "mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 181,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 177,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminProducts as component };
