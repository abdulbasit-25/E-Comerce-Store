import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { i as useCart, n as cartDetail, o as useHydrated, r as useAuth, s as useOrders } from "./store-BPy7gmTA.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CAA2NU0x.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BjwWRqon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/checkout.tsx?tsr-split=component";
var schema = objectType({
	name: stringType().min(2, "Please enter your full name"),
	email: stringType().email("Enter a valid email"),
	address: stringType().min(6, "Enter a street address"),
	city: stringType().min(2, "Enter a city"),
	notes: stringType().optional()
});
function Checkout() {
	const hydrated = useHydrated();
	const navigate = useNavigate();
	const lines = useCart((s) => s.lines);
	const clear = useCart((s) => s.clear);
	const user = useAuth((s) => s.user);
	const place = useOrders((s) => s.place);
	const { items, subtotal, shipping, total } = cartDetail(hydrated ? lines : []);
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const parsed = schema.safeParse(Object.fromEntries(form));
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
			setErrors(next);
			return;
		}
		const values = parsed.data;
		const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		const order = {
			id: `SRL-${Math.floor(3e3 + Math.random() * 6999)}`,
			customerId: user?.id ?? "guest",
			customerName: values.name,
			customerEmail: values.email,
			items: items.map((i) => ({
				productId: i.product.id,
				name: i.product.name,
				qty: i.qty,
				priceAtPurchase: i.product.price
			})),
			shippingAddress: `${values.address}, ${values.city}`,
			status: "Pending",
			totalAmount: total,
			paymentMethod: "COD",
			paid: false,
			...values.notes ? { notes: values.notes } : {},
			statusHistory: [{
				status: "Pending",
				at: today
			}],
			createdAt: today
		};
		place(order);
		clear();
		toast.success(`Order ${order.id} placed — pay the courier on delivery.`);
		navigate({ to: "/account" });
	};
	if (hydrated && items.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-24 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "text-5xl",
			children: "Your bag is empty"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 76,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/shop",
			className: "label-caps mt-8 inline-block bg-primary px-7 py-4 text-primary-foreground",
			children: "Browse the collection"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 11
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 75,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 74,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-12 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-olive",
				children: "Cash on delivery"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 text-5xl md:text-7xl",
				children: "Checkout"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit,
				className: "mt-12 grid gap-16 md:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-xl space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Full name",
							name: "name",
							defaultValue: user?.name ?? "",
							error: errors["name"]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							defaultValue: user?.email ?? "",
							error: errors["email"]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Street address",
							name: "address",
							error: errors["address"]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "City",
							name: "city",
							error: errors["city"]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "label-caps text-muted-foreground",
							htmlFor: "notes",
							children: "Order notes"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							id: "notes",
							name: "notes",
							rows: 3,
							className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive",
							placeholder: "Delivery instructions, gift note…"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "border border-hairline p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "label-caps text-olive",
								children: "Payment method"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm",
								children: "Cash on delivery — pay the courier when your parcel arrives."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
					className: "h-fit bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "label-caps text-muted-foreground",
							children: "Order summary"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: items.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-muted-foreground",
									children: [
										product.name,
										" × ",
										qty
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: currency(product.price * qty) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 19
								}, this)]
							}, product.id, true, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
							className: "mt-6 space-y-2 border-t border-hairline pt-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Subtotal" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: currency(subtotal) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Shipping" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 126,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: shipping === 0 ? "Free" : currency(shipping) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between border-t border-hairline pt-2 text-base",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Total due on delivery" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: currency(total) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							className: "label-caps mt-8 w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
							children: "Place order"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 84,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 83,
		columnNumber: 10
	}, this);
}
function Field({ label, name, type = "text", defaultValue, error }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			className: "label-caps text-muted-foreground",
			htmlFor: name,
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			id: name,
			name,
			type,
			defaultValue,
			className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 159,
			columnNumber: 7
		}, this),
		error && /* @__PURE__ */ (void 0)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 160,
			columnNumber: 17
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 155,
		columnNumber: 10
	}, this);
}
//#endregion
export { Checkout as component };
