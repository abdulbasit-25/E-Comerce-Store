import { t as cn } from "./utils-C_uf36nf.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useHydrated, r as useAuth } from "./store-BPy7gmTA.mjs";
import { I as Boxes, P as ChartColumn, k as LayoutGrid, n as Users, y as Package } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-zqreUFUb.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-shell-DDNuiuk7.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/admin",
		label: "Overview",
		icon: ChartColumn
	},
	{
		to: "/admin/orders",
		label: "Orders",
		icon: Package
	},
	{
		to: "/admin/products",
		label: "Products",
		icon: Boxes
	},
	{
		to: "/admin/categories",
		label: "Categories",
		icon: LayoutGrid
	},
	{
		to: "/admin/customers",
		label: "Customers",
		icon: Users
	}
];
function AdminShell({ title, children }) {
	const hydrated = useHydrated();
	const user = useAuth((s) => s.user);
	const signOut = useAuth((s) => s.signOut);
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen animate-pulse bg-surface" });
	if (!user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-background px-5 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-olive",
				children: "Restricted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl",
				children: "Admin access only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm text-muted-foreground",
				children: "Sign in with an admin account to manage orders, catalogue and customers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "label-caps mt-8 inline-block bg-primary px-6 py-3 text-primary-foreground",
				children: "Sign in"
			})
		] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-56 shrink-0 flex-col border-r border-border bg-sidebar md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "border-b border-border px-5 py-4 font-display text-xl",
					children: ["Sorrel ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-caps text-muted-foreground",
						children: "Ops"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-1 flex-col gap-0.5 p-2",
					children: links.map((link) => {
						const active = pathname === link.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: link.to,
							className: cn("flex items-center gap-2.5 px-3 py-2 text-sm transition-colors", active ? "bg-olive-soft text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(link.icon, { className: "h-4 w-4" }), link.label]
						}, link.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border p-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground",
							children: user.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: user.email }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								signOut();
								navigate({ to: "/" });
							},
							className: "label-caps mt-3 hover:text-destructive",
							children: "Sign out"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-14 items-center justify-between border-b border-border px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-lg font-medium",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "label-caps text-muted-foreground hover:text-foreground",
							children: "View storefront"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-x-hidden p-5",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex justify-around border-t border-border py-2 md:hidden",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "p-2 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link.icon, { className: "h-4 w-4" })
					}, link.to))
				})
			]
		})]
	});
}
//#endregion
export { AdminShell as t };
