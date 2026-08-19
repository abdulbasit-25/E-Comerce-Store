import { o as __toESM, r as __exportAll } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as Root3, i as Provider, n as Content2, o as Trigger, r as Portal, t as Arrow2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { a as products } from "./mock-data-CacGgQ9l.mjs";
import { P as notFound, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tooltip-CYa7EoMv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/ui/tooltip.tsx";
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md border border-border/40 bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg shadow-black/10 backdrop-blur-sm", "animate-in fade-in-0 zoom-in-95 duration-150 ease-out", "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-100", "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-(--radix-tooltip-content-transform-origin)", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow2, {
		className: "fill-primary",
		width: 10,
		height: 5
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 33,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 19,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 18,
	columnNumber: 3
}, void 0));
TooltipContent.displayName = Content2.displayName;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BsJOgOWN.js
var $$splitComponentImporter$17 = () => import("./product._slug-CqAIYxjw.mjs");
var Route$18 = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = products.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Piece not found — Sorrel" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		return { meta: [
			{ title: `${product.name} — Sorrel` },
			{
				name: "description",
				content: product.description
			},
			{
				property: "og:title",
				content: `${product.name} — Sorrel`
			},
			{
				property: "og:description",
				content: product.description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CW0qDvgV.js
var $$splitComponentImporter$16 = () => import("./shop-B3RZXFfH.mjs");
var Route$17 = createFileRoute("/shop")({
	validateSearch: (search) => ({
		category: typeof search["category"] === "string" ? search["category"] : void 0,
		q: typeof search["q"] === "string" ? search["q"] : void 0,
		max: search["max"] !== void 0 ? Number(search["max"]) || void 0 : void 0,
		inStock: search["inStock"] === true || search["inStock"] === "true" ? true : void 0
	}),
	head: () => ({ meta: [
		{ title: "Shop all — Sorrel" },
		{
			name: "description",
			content: "Browse linen apparel, hand-thrown ceramics, woven textiles and objects. Filter by category, price and availability."
		},
		{
			property: "og:title",
			content: "Shop all — Sorrel"
		},
		{
			property: "og:description",
			content: "Linen apparel, ceramics, textiles and objects, made in small runs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CsxrrO3j.js
var router_CsxrrO3j_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var styles_default = "/assets/styles-Bd3RjYCm.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName$1 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-7xl",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl",
					children: "This page has been retired"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "label-caps inline-flex items-center justify-center bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
						children: "Back to the shop"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "label-caps bg-primary px-5 py-3 text-primary-foreground",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "label-caps border border-hairline px-5 py-3",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
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
			lineNumber: 48,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var themeScript = `(function(){try{var s=localStorage.getItem('sorrel-theme');var t=s?JSON.parse(s).state.theme:'light';if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sorrel — Slow-made goods, paid on delivery" },
			{
				name: "description",
				content: "Sorrel is an independent atelier making linen apparel, stoneware ceramics and considered objects. Cash on delivery."
			},
			{
				property: "og:title",
				content: "Sorrel — Slow-made goods"
			},
			{
				property: "og:description",
				content: "Linen apparel, stoneware and objects from an independent atelier."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 111,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { dangerouslySetInnerHTML: { __html: themeScript } }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 112,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 109,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 129,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, { position: "bottom-right" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 130,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 127,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 126,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$15 = () => import("./routes-6Ka9RgrM.mjs");
var Route$15 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sorrel — Linen, stoneware and objects" },
		{
			name: "description",
			content: "An independent atelier of linen apparel, hand-thrown ceramics and considered objects. Pay on delivery, ships worldwide."
		},
		{
			property: "og:title",
			content: "Sorrel — Linen, stoneware and objects"
		},
		{
			property: "og:description",
			content: "Slow-made goods from an independent atelier. Pay on delivery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./about-CYvmoUBF.mjs");
var Route$14 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Sorrel" },
		{
			name: "description",
			content: "Learn about Sorrel, our mission, our values, and why customers choose us for considered home goods and everyday essentials."
		},
		{
			property: "og:title",
			content: "About Us — Sorrel"
		},
		{
			property: "og:description",
			content: "A more thoughtful way to shop, with quality materials, personal service, and a clear sense of purpose."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./account-BwyPJSEH.mjs");
var Route$13 = createFileRoute("/account")({
	head: () => ({ meta: [
		{ title: "My account — Sorrel" },
		{
			name: "description",
			content: "Manage your Sorrel profile, orders and delivery details."
		},
		{
			property: "og:title",
			content: "My account — Sorrel"
		},
		{
			property: "og:description",
			content: "Manage your Sorrel profile, orders and delivery details."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./admin-DRtU_Alc.mjs");
var Route$12 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Sorrel Ops — Admin" },
		{
			name: "description",
			content: "Internal Sorrel operations dashboard."
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: "Sorrel Ops"
		},
		{
			property: "og:description",
			content: "Internal operations dashboard."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./cart-CkEBk_yo.mjs");
var Route$11 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Your bag — Sorrel" },
		{
			name: "description",
			content: "Review the pieces in your bag before placing a pay-on-delivery order."
		},
		{
			property: "og:title",
			content: "Your bag — Sorrel"
		},
		{
			property: "og:description",
			content: "Review your bag and check out with cash on delivery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./checkout-BjwWRqon.mjs");
var Route$10 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — Sorrel" },
		{
			name: "description",
			content: "Confirm your shipping details and place a cash-on-delivery order."
		},
		{
			property: "og:title",
			content: "Checkout — Sorrel"
		},
		{
			property: "og:description",
			content: "Place your order and pay the courier on delivery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./cookie-policy-BiOuQY2A.mjs");
var Route$9 = createFileRoute("/cookie-policy")({
	head: () => ({ meta: [{ title: "Cookie Policy — Sorrel" }, {
		name: "description",
		content: "Learn what cookies we use on Sorrel, why we use them, and how you can manage your cookie preferences."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./login-FxSBcoNK.mjs");
var Route$8 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Sign in — Sorrel" },
		{
			name: "description",
			content: "Sign in to track your Sorrel orders, addresses and order history."
		},
		{
			property: "og:title",
			content: "Sign in — Sorrel"
		},
		{
			property: "og:description",
			content: "Access your Sorrel account and order history."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./privacy-policy-CfdfPfqj.mjs");
var Route$7 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Sorrel" }, {
		name: "description",
		content: "Learn how Sorrel handles customer information, cookies, payments, account details, and customer rights."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./refund-policy-Bhw5J_Pz.mjs");
var Route$6 = createFileRoute("/refund-policy")({
	head: () => ({ meta: [{ title: "Refund Policy — Sorrel" }, {
		name: "description",
		content: "Sorrel's comprehensive refund and return policy. Learn about refund eligibility, processing times, return procedures, and customer support."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./terms-conditions-CnCf32Il.mjs");
var Route$5 = createFileRoute("/terms-conditions")({
	head: () => ({ meta: [{ title: "Terms & Conditions — Sorrel" }, {
		name: "description",
		content: "Review Sorrel's terms covering eligibility, ordering, payments, shipping, returns, and customer responsibilities."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./admin.index-ql59M-FD.mjs");
var Route$4 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.categories-BkIvyr-e.mjs");
var Route$3 = createFileRoute("/admin/categories")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.customers-DixP6Ghb.mjs");
var Route$2 = createFileRoute("/admin/customers")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.orders-BtwlufPx.mjs");
var Route$1 = createFileRoute("/admin/orders")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.products-xe8ClD6U.mjs");
var Route = createFileRoute("/admin/products")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$16
});
var AccountRoute = Route$13.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$16
});
var AdminRoute = Route$12.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$16
});
var CartRoute = Route$11.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$16
});
var CheckoutRoute = Route$10.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$16
});
var CookiePolicyRoute = Route$9.update({
	id: "/cookie-policy",
	path: "/cookie-policy",
	getParentRoute: () => Route$16
});
var LoginRoute = Route$8.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$16
});
var PrivacyPolicyRoute = Route$7.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$16
});
var RefundPolicyRoute = Route$6.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$16
});
var ShopRoute = Route$17.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$16
});
var TermsConditionsRoute = Route$5.update({
	id: "/terms-conditions",
	path: "/terms-conditions",
	getParentRoute: () => Route$16
});
var AdminIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminCategoriesRoute = Route$3.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$2.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminOrdersRoute = Route$1.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AdminRoute
});
var AdminProductsRoute = Route.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AdminRoute
});
var ProductSlugRoute = Route$18.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$16
});
var AdminRouteChildren = {
	AdminCategoriesRoute,
	AdminCustomersRoute,
	AdminOrdersRoute,
	AdminProductsRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	CartRoute,
	CheckoutRoute,
	CookiePolicyRoute,
	LoginRoute,
	PrivacyPolicyRoute,
	RefundPolicyRoute,
	ShopRoute,
	TermsConditionsRoute,
	ProductSlugRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { TooltipContent as a, getRouter, Tooltip as i, Route$17 as n, TooltipTrigger as o, Route$18 as r, router_CsxrrO3j_exports as t };
