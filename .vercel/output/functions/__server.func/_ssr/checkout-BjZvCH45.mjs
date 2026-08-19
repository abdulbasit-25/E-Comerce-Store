import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { i as useCart, n as cartDetail, o as useHydrated, r as useAuth, s as useOrders } from "./store-BPy7gmTA.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CqSsDW3p.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BjZvCH45.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	if (hydrated && items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-24 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-5xl",
			children: "Your bag is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "label-caps mt-8 inline-block bg-primary px-7 py-4 text-primary-foreground",
			children: "Browse the collection"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-12 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-olive",
				children: "Cash on delivery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-5xl md:text-7xl",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-12 grid gap-16 md:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							name: "name",
							defaultValue: user?.name ?? "",
							error: errors["name"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							defaultValue: user?.email ?? "",
							error: errors["email"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Street address",
							name: "address",
							error: errors["address"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "City",
							name: "city",
							error: errors["city"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "label-caps text-muted-foreground",
							htmlFor: "notes",
							children: "Order notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "notes",
							name: "notes",
							rows: 3,
							className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive",
							placeholder: "Delivery instructions, gift note…"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-hairline p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps text-olive",
								children: "Payment method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: "Cash on delivery — pay the courier when your parcel arrives."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit bg-surface p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-caps text-muted-foreground",
							children: "Order summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: items.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										product.name,
										" × ",
										qty
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currency(product.price * qty) })]
							}, product.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-2 border-t border-hairline pt-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: currency(subtotal) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: shipping === 0 ? "Free" : currency(shipping) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-t border-hairline pt-2 text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total due on delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: currency(total) })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "label-caps mt-8 w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
							children: "Place order"
						})
					]
				})]
			})
		]
	}) });
}
function Field({ label, name, type = "text", defaultValue, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "label-caps text-muted-foreground",
			htmlFor: name,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			defaultValue,
			className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
//#endregion
export { Checkout as component };
