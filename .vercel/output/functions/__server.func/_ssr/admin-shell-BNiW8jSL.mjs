import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { o as useHydrated, r as useAuth } from "./store-BPy7gmTA.mjs";
import { I as Boxes, P as ChartColumn, k as LayoutGrid, n as Users, y as Package } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-i2JXlGaK.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-shell-BNiW8jSL.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/admin/admin-shell.tsx";
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
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen animate-pulse bg-surface" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 12
	}, this);
	if (!user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid min-h-screen place-items-center bg-background px-5 text-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-olive",
				children: "Restricted"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 text-4xl",
				children: "Admin access only"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 max-w-sm text-sm text-muted-foreground",
				children: "Sign in with an admin account to manage orders, catalogue and customers."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/login",
				className: "label-caps mt-8 inline-block bg-primary px-6 py-3 text-primary-foreground",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "hidden w-56 shrink-0 flex-col border-r border-border bg-sidebar md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "border-b border-border px-5 py-4 font-display text-xl",
					children: ["Sorrel ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "label-caps text-muted-foreground",
						children: "Ops"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 18
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "flex flex-1 flex-col gap-0.5 p-2",
					children: links.map((link) => {
						const active = pathname === link.to;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: link.to,
							className: cn("flex items-center gap-2.5 px-3 py-2 text-sm transition-colors", active ? "bg-olive-soft text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link.icon, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 17
							}, this), link.label]
						}, link.to, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-border p-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-foreground",
							children: user.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: user.email }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => {
								signOut();
								navigate({ to: "/" });
							},
							className: "label-caps mt-3 hover:text-destructive",
							children: "Sign out"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
					className: "flex h-14 items-center justify-between border-b border-border px-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-lg font-medium",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "label-caps text-muted-foreground hover:text-foreground",
							children: "View storefront"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeToggle, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-x-hidden p-5",
					children
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "flex justify-around border-t border-border py-2 md:hidden",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: link.to,
						className: "p-2 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link.icon, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this)
					}, link.to, false, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
//#endregion
export { AdminShell as t };
