import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as ArrowRight, O as Leaf, c as Sparkles, f as ShieldCheck, j as HeartHandshake, o as Star } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-XN3klzgQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BtpqdbR8.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		icon: ShieldCheck,
		title: "Trust first",
		body: "We keep our product selection clear, our communication direct, and our service grounded in the details that matter to real customers."
	},
	{
		icon: Leaf,
		title: "Thoughtful materials",
		body: "We focus on useful, durable pieces and natural finishes that feel good to live with over time."
	},
	{
		icon: HeartHandshake,
		title: "Service with care",
		body: "Every order is treated as a relationship, not a transaction — from the first click through delivery and follow-up."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-olive/10 blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-olive/5 blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "label-caps flex items-center gap-2 text-olive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-olive" }), "About us"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-xl mt-6 max-w-4xl",
							children: "A calmer way to shop for everyday essentials."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-10 md:grid-cols-12 md:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5 text-base leading-7 text-muted-foreground md:col-span-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sorrel is an independent store focused on everyday goods that are useful, beautiful, and easy to live with. We curate products with intention, balancing quality and simplicity so customers can build a home or wardrobe that feels considered rather than cluttered." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our brand stands for thoughtful design, honest materials, and a slower rhythm of shopping. We believe that good products should make daily life easier, more comfortable, and more joyful without excess or complexity." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-4 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/shop",
											className: "label-caps group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
											children: ["Shop now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shop",
											className: "label-caps link-underline text-muted-foreground",
											children: "Explore our products"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative md:col-span-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute -bottom-5 -right-5 h-full w-full rounded-sm border border-olive/30"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "media-zoom relative overflow-hidden rounded-sm border border-border/60 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.40)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
										alt: "A warm, minimal home environment with natural textures",
										loading: "lazy",
										className: "aspect-[4/5] w-full object-cover"
									})
								})]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: values.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-sm border border-border/60 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-olive/50 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-olive/30 text-olive transition-colors duration-300 group-hover:bg-olive group-hover:text-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-6 text-xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: body
						})
					]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps text-olive",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl leading-tight md:text-5xl",
						children: "Built around usefulness, character, and trust."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-base leading-7 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We began with a simple idea: a better shopping experience should feel personal, informed, and easy to trust. Instead of flooding the market with disposable products, we select pieces that look good in daily life and stand up to repeated use." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That philosophy shapes everything we do — from the brands we carry to the way we communicate with customers. We prefer clarity over noise, quality over excess, and a supportive experience over a rushed one." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Customers return to Sorrel because they know they will find products they can rely on and a store that values their time, questions, and confidence. We are committed to being a dependable place to shop for the pieces that make home and routine feel a little more considered." })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-border/60 bg-surface p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "label-caps flex items-center gap-2 text-olive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Why customers choose us"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm leading-6 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mt-0.5 h-4 w-4 shrink-0 text-olive" }), "Carefully chosen products with a clear point of view."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mt-0.5 h-4 w-4 shrink-0 text-olive" }), "Clear communication and straightforward customer service."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mt-0.5 h-4 w-4 shrink-0 text-olive" }), "A focus on quality and long-term value instead of trends for their own sake."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mt-0.5 h-4 w-4 shrink-0 text-olive" }), "A retail experience built to feel warm, informed, and easy to navigate."]
							})
						]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
