import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as currency, t as categories } from "./mock-data-CacGgQ9l.mjs";
import { a as useCatalog } from "./store-BPy7gmTA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminShell } from "./admin-shell-DDNuiuk7.mjs";
import { t as DataTable } from "./data-table-CyG1WKmt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.products-C7HM08rW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [row.original.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: row.original.image,
					alt: "",
					loading: "lazy",
					className: "h-9 w-9 shrink-0 object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-9 w-9 shrink-0 bg-surface-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.original.name })]
			})
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
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn(stock === 0 && "text-destructive", stock > 0 && stock <= 5 && "text-olive"),
					children: stock
				});
			}
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setEditing(row.original),
					className: "label-caps text-olive",
					children: "Edit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						remove(row.original.id);
						toast.success(`${row.original.name} removed`);
					},
					className: "label-caps text-muted-foreground hover:text-destructive",
					children: "Delete"
				})]
			})
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Products",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setEditing({ ...blank }),
					className: "label-caps bg-primary px-4 py-2 text-primary-foreground",
					children: "New product"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: products,
				columns,
				searchPlaceholder: "Search catalogue…",
				emptyTitle: "No products",
				emptyBody: "Add your first product to start selling."
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm",
				onClick: () => setEditing(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: save,
					onClick: (e) => e.stopPropagation(),
					className: "h-full w-full max-w-md space-y-4 overflow-y-auto bg-background p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: editing.id ? "Edit product" : "New product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Name",
							name: "name",
							defaultValue: editing.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "SKU",
							name: "sku",
							defaultValue: editing.sku
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "label-caps text-muted-foreground",
							htmlFor: "categorySlug",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "categorySlug",
							name: "categorySlug",
							defaultValue: editing.categorySlug,
							className: "mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.slug,
								children: c.name
							}, c.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Price",
								name: "price",
								type: "number",
								defaultValue: String(editing.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Stock",
								name: "stock",
								type: "number",
								defaultValue: String(editing.stock)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Image URL",
							name: "image",
							defaultValue: editing.image
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "label-caps text-muted-foreground",
							htmlFor: "description",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "description",
							name: "description",
							rows: 4,
							defaultValue: editing.description,
							className: "mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "label-caps bg-primary px-5 py-3 text-primary-foreground",
								children: "Save"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEditing(null),
								className: "label-caps border border-border px-5 py-3",
								children: "Cancel"
							})]
						})
					]
				})
			})
		]
	});
}
function Input({ label, name, type = "text", defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "label-caps text-muted-foreground",
		htmlFor: name,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		defaultValue,
		className: "mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
	})] });
}
//#endregion
export { AdminProducts as component };
