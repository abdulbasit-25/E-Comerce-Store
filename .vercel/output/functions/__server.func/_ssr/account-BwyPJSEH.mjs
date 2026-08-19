import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { o as useHydrated, r as useAuth, s as useOrders } from "./store-BPy7gmTA.mjs";
import { D as LogOut, E as Mail, F as Camera, N as ChevronRight, T as MapPin, d as Shield, f as ShieldCheck, i as UserRound, t as X, v as Phone, y as Package } from "../_libs/lucide-react.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CAA2NU0x.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BwyPJSEH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$7 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/account/account-nav.tsx";
var items = [
	{
		id: "overview",
		label: "Profile",
		icon: UserRound
	},
	{
		id: "orders",
		label: "Orders",
		icon: Package
	},
	{
		id: "addresses",
		label: "Addresses",
		icon: MapPin
	},
	{
		id: "security",
		label: "Security",
		icon: Shield
	}
];
function AccountNav({ active, onChange, onSignOut }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		"aria-label": "Account sections",
		className: "flex gap-2 overflow-x-auto border-b border-hairline pb-2 lg:block lg:space-y-1 lg:border-0 lg:pb-0",
		children: [items.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			onClick: () => onChange(id),
			className: cn("label-caps inline-flex shrink-0 items-center gap-3 px-3 py-3 text-left transition-colors lg:flex lg:w-full", active === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				size: 16,
				strokeWidth: 1.5
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 39,
				columnNumber: 11
			}, this), label]
		}, id, true, {
			fileName: _jsxFileName$7,
			lineNumber: 28,
			columnNumber: 9
		}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			onClick: onSignOut,
			className: "label-caps inline-flex shrink-0 items-center gap-3 px-3 py-3 text-left text-muted-foreground transition-colors hover:text-destructive lg:mt-8 lg:flex lg:w-full",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, {
				size: 16,
				strokeWidth: 1.5
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 48,
				columnNumber: 9
			}, this), "Sign out"]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 43,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 43,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var _jsxFileName$5 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/ui/card.tsx";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 7,
	columnNumber: 5
}, void 0));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 18,
	columnNumber: 5
}, void 0));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 25,
	columnNumber: 5
}, void 0));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 36,
	columnNumber: 5
}, void 0));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 43,
	columnNumber: 5
}, void 0));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 50,
	columnNumber: 5
}, void 0));
CardFooter.displayName = "CardFooter";
var _jsxFileName$4 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 37,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 48,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 49,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 47,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$4,
	lineNumber: 38,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$4,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 57,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 62,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 73,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 85,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName$3 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/account/order-list.tsx";
var steps = [
	"Pending",
	"Confirmed",
	"Shipped",
	"Delivered"
];
function OrderList({ orders }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	if (orders.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
		className: "rounded-none border-dashed shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
			className: "flex flex-col items-center px-6 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, {
					size: 28,
					strokeWidth: 1.2,
					className: "text-olive"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 25,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-5 text-3xl",
					children: "No orders yet"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 26,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 max-w-sm text-sm text-muted-foreground",
					children: "Your order history will appear here after your first purchase."
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 27,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/shop",
						children: "Start shopping"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 31,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 30,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 24,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 23,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderCard, {
			order,
			onView: () => setSelected(order)
		}, order.id, false, {
			fileName: _jsxFileName$3,
			lineNumber: 41,
			columnNumber: 9
		}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
			open: Boolean(selected),
			onOpenChange: (open) => !open && setSelected(null),
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
				className: "max-h-[90vh] overflow-y-auto",
				children: selected && /* @__PURE__ */ (void 0)(OrderDetails, { order: selected }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 45,
					columnNumber: 24
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 44,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 43,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 39,
		columnNumber: 5
	}, this);
}
function OrderCard({ order, onView }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
		className: "rounded-none shadow-none transition-colors hover:bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
			className: "p-5 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-display text-2xl",
					children: order.id
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 58,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						formatDate(order.createdAt),
						" · ",
						order.items.reduce((sum, item) => sum + item.qty, 0),
						" ",
						"items"
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 59,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 57,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBadge, { status: order.status }, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 64,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 56,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-hairline pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: order.items.map((item) => item.name).join(", ")
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 68,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm",
					children: order.paid ? "Paid" : "Cash on delivery"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 71,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 67,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-lg",
						children: currency(order.totalAmount)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 74,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: onView,
						children: ["View order ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { size: 15 }, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 76,
							columnNumber: 26
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 75,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 73,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 66,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
function OrderDetails({ order }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
		className: "font-display text-3xl",
		children: order.id
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 89,
		columnNumber: 9
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: [
		"Placed ",
		formatDate(order.createdAt),
		" · ",
		order.paid ? "Paid" : "Cash on delivery"
	] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 90,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 88,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 text-sm",
		children: [
			order.status !== "Cancelled" && /* @__PURE__ */ (void 0)("ol", {
				className: "flex gap-1",
				children: steps.map((step) => /* @__PURE__ */ (void 0)("li", {
					className: "flex flex-1 flex-col gap-2",
					children: [/* @__PURE__ */ (void 0)("span", { className: cn("h-1", steps.indexOf(order.status) >= steps.indexOf(step) ? "bg-olive" : "bg-hairline") }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 99,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("span", {
						className: "label-caps text-muted-foreground",
						children: step
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 105,
						columnNumber: 17
					}, this)]
				}, step, true, {
					fileName: _jsxFileName$3,
					lineNumber: 98,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 96,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
						item.name,
						" × ",
						item.qty
					] }, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 113,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: currency(item.priceAtPurchase * item.qty) }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 116,
						columnNumber: 15
					}, this)]
				}, item.productId, true, {
					fileName: _jsxFileName$3,
					lineNumber: 112,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 110,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
				className: "space-y-2 border-t border-hairline pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Subtotal" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 122,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: currency(order.totalAmount) }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 123,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 121,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex justify-between font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Total" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 126,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: currency(order.totalAmount) }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 127,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 125,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 120,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-l-2 border-olive bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "label-caps text-muted-foreground",
					children: "Shipping to"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 131,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2",
					children: order.shippingAddress
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 132,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 130,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 94,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 87,
		columnNumber: 5
	}, this);
}
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("label-caps border px-2 py-1", status === "Delivered" ? "border-olive text-olive" : status === "Cancelled" ? "border-destructive text-destructive" : "border-hairline text-muted-foreground"),
		children: status
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 141,
		columnNumber: 5
	}, this);
}
function formatDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).format(/* @__PURE__ */ new Date(`${date}T00:00:00`));
}
var _jsxFileName$2 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/ui/avatar.tsx";
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 12,
	columnNumber: 3
}, void 0));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 24,
	columnNumber: 3
}, void 0));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$2,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var _jsxFileName$1 = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/account/profile-panel.tsx";
function initials(name) {
	return name.split(" ").map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function ProfilePanel({ user, onSave }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(user.name);
	const [phone, setPhone] = (0, import_react.useState)(user.phone ?? "");
	const [avatarUrl, setAvatarUrl] = (0, import_react.useState)(user.avatarUrl ?? "");
	const fileInput = (0, import_react.useRef)(null);
	const save = (event) => {
		event.preventDefault();
		if (!name.trim()) {
			toast.error("Name is required");
			return;
		}
		onSave({
			name: name.trim(),
			email: user.email,
			phone: phone.trim(),
			avatarUrl
		});
		setEditing(false);
		toast.success("Profile updated");
	};
	const chooseAvatar = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Choose an image file");
			return;
		}
		const reader = new FileReader();
		reader.addEventListener("load", () => setAvatarUrl(String(reader.result)));
		reader.readAsDataURL(file);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				className: "overflow-hidden rounded-none shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-28 bg-olive-soft" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 60,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
					className: "relative px-6 pb-6 pt-0 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, {
						className: "-mt-12 h-24 w-24 border-4 border-card",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarImage, {
							src: user.avatarUrl,
							alt: ""
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 63,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarFallback, {
							className: "bg-primary text-xl text-primary-foreground",
							children: initials(user.name)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 64,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 62,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "label-caps text-olive",
								children: "Personal profile"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 70,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-2 text-4xl",
								children: user.name
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 71,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: user.email
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 72,
								columnNumber: 15
							}, this),
							user.phone && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: user.phone
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 73,
								columnNumber: 30
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 69,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							onClick: () => setEditing((value) => !value),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { size: 16 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 76,
								columnNumber: 15
							}, this), editing ? "Close editor" : "Edit profile"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 75,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 68,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 61,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 7
			}, this),
			editing && /* @__PURE__ */ (void 0)(Card, {
				className: "rounded-none shadow-none",
				children: [/* @__PURE__ */ (void 0)(CardHeader, { children: [/* @__PURE__ */ (void 0)(CardTitle, { children: "Personal information" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 86,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)(CardDescription, { children: "Keep your contact details current for delivery updates." }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 87,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 85,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)(CardContent, { children: /* @__PURE__ */ (void 0)("form", {
					onSubmit: save,
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (void 0)(ProfileField, {
							label: "Full name",
							value: name,
							onChange: setName,
							icon: /* @__PURE__ */ (void 0)(UserRound, { size: 15 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 97,
								columnNumber: 23
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 93,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(ProfileField, {
							label: "Email",
							value: user.email,
							onChange: () => void 0,
							icon: /* @__PURE__ */ (void 0)(Mail, { size: 15 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 103,
								columnNumber: 23
							}, this),
							readOnly: true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 99,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(ProfileField, {
							label: "Phone",
							type: "tel",
							value: phone,
							onChange: setPhone,
							icon: /* @__PURE__ */ (void 0)(Phone, { size: 15 }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 111,
								columnNumber: 23
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 106,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-end gap-3",
							children: [
								/* @__PURE__ */ (void 0)("input", {
									ref: fileInput,
									type: "file",
									accept: "image/*",
									onChange: chooseAvatar,
									className: "sr-only"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 114,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => fileInput.current?.click(),
									children: [/* @__PURE__ */ (void 0)(Camera, { size: 16 }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 122,
										columnNumber: 19
									}, this), "Choose photo"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 121,
									columnNumber: 17
								}, this),
								avatarUrl && /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setAvatarUrl(""),
									className: "text-xs text-muted-foreground underline underline-offset-4",
									children: "Remove"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 126,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 113,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex justify-end sm:col-span-2",
							children: /* @__PURE__ */ (void 0)(Button, {
								type: "submit",
								children: "Save changes"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 136,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 135,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 92,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 91,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 84,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTile, {
						label: "Account type",
						value: user.role === "admin" ? "Administrator" : "Customer"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 144,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTile, {
						label: "Email status",
						value: "Verified at sign in"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 148,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoTile, {
						label: "Profile photo",
						value: avatarUrl ? "Added" : "Initials avatar"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 149,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 143,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 58,
		columnNumber: 5
	}, this);
}
function ProfileField({ label, value, onChange, icon, type = "text", readOnly = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "label-caps text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 172,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "mt-2 flex items-center gap-2 border-b border-hairline py-2 focus-within:border-olive",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-muted-foreground",
				children: icon
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 174,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				type,
				value,
				readOnly,
				onChange: (event) => onChange(event.target.value),
				className: "min-w-0 flex-1 bg-transparent text-sm outline-none read-only:text-muted-foreground"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 175,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 173,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 171,
		columnNumber: 5
	}, this);
}
function InfoTile({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "border-l-2 border-olive bg-surface px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "label-caps text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 190,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-sm",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 191,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 189,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/account.tsx?tsr-split=component";
function AccountPage() {
	const hydrated = useHydrated();
	const user = useAuth((state) => state.user);
	const updateProfile = useAuth((state) => state.updateProfile);
	const signOut = useAuth((state) => state.signOut);
	const orders = useOrders((state) => state.orders);
	const navigate = useNavigate();
	const [section, setSection] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		if (hydrated && user?.role === "admin") navigate({ to: "/admin" });
	}, [
		hydrated,
		user,
		navigate
	]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountLoading, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 25
	}, this);
	if (!user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-24 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-olive",
				children: "My account"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 text-5xl md:text-7xl",
				children: "A place for your orders."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-6 max-w-md text-muted-foreground",
				children: "Sign in to manage your profile and follow every delivery."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/login",
					children: "Sign in"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 12
	}, this);
	const myOrders = orders.filter((order) => order.customerId === user.id || order.customerEmail.toLowerCase() === user.email.toLowerCase());
	const latestAddress = myOrders[0]?.shippingAddress;
	const handleSignOut = () => {
		signOut();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-12 md:px-10 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border-b border-hairline pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-olive",
				children: "Account space"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-5xl md:text-7xl",
					children: "My account"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 max-w-lg text-muted-foreground",
					children: [
						"Welcome back, ",
						user.name.split(" ")[0],
						". Keep your details and deliveries close."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "label-caps text-muted-foreground",
					children: [
						myOrders.length,
						" ",
						myOrders.length === 1 ? "order" : "orders"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountNav, {
				active: section,
				onChange: setSection,
				onSignOut: handleSignOut
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "min-w-0",
				children: [
					section === "overview" && /* @__PURE__ */ (void 0)(ProfilePanel, {
						user,
						onSave: updateProfile
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 40
					}, this),
					section === "orders" && /* @__PURE__ */ (void 0)(AccountSectionHeader, {
						eyebrow: "Your history",
						title: "Orders",
						description: "Follow your recent purchases from confirmation to delivery."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 38
					}, this),
					section === "orders" && /* @__PURE__ */ (void 0)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (void 0)(OrderList, { orders: myOrders }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 38
					}, this),
					section === "addresses" && /* @__PURE__ */ (void 0)(AddressesSection, {
						address: latestAddress,
						name: user.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 41
					}, this),
					section === "security" && /* @__PURE__ */ (void 0)(SecuritySection, { email: user.email }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 40
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 10
	}, this);
}
function AccountLoading() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-16 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-56 animate-pulse bg-surface-2" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 h-48 animate-pulse bg-surface-2" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 80,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 79,
		columnNumber: 10
	}, this);
}
function AccountSectionHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "label-caps text-olive",
			children: eyebrow
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "mt-3 text-5xl",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 97,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-3 max-w-lg text-sm text-muted-foreground",
			children: description
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 98,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 10
	}, this);
}
function AddressesSection({ address, name }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountSectionHeader, {
		eyebrow: "Delivery details",
		title: "Addresses",
		description: "Your latest delivery address is kept with the order it belongs to."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 109,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
		className: "mt-6 max-w-xl rounded-none shadow-none",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
			className: "flex-row items-center justify-between space-y-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
				className: "text-base",
				children: "Most recent delivery"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
				size: 18,
				className: "text-olive"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 111,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: address ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: name }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 15
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: address
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 15
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-5 text-xs text-muted-foreground",
				children: "Saved addresses are managed per order at checkout."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 15
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 22
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-lg",
					children: "No delivery address yet"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Your address will appear here after your first order."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 15
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/shop",
						children: "Start shopping"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 127,
					columnNumber: 15
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 122,
			columnNumber: 19
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 110,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 108,
		columnNumber: 10
	}, this);
}
function SecuritySection({ email }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountSectionHeader, {
		eyebrow: "Account protection",
		title: "Security",
		description: "Your account is protected by the sign-in system already connected to Sorrel."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 141,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
		className: "mt-6 max-w-xl rounded-none shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
			className: "flex items-start gap-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, {
				size: 22,
				className: "mt-1 text-olive"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-lg",
				children: "Password protected"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					"Signed in as ",
					email,
					". Password changes are handled through the existing authentication flow."
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 143,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 142,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 140,
		columnNumber: 10
	}, this);
}
//#endregion
export { AccountPage as component };
