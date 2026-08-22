import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as products, t as categories } from "./mock-data-CacGgQ9l.mjs";
import { C as MessageCircle, E as Mail, h as Scissors, s as Sprout, u as Ship, y as Package, z as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-XN3klzgQ.mjs";
import { t as ProductCard } from "./product-card-HD2wNVuu.mjs";
import { d as TooltipTrigger, l as Tooltip, u as TooltipContent } from "./router-BnrWabjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CGM70OHf.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-BC_as_Yo.jpg";
var process = [
	{
		icon: Sprout,
		step: "01",
		title: "Source",
		body: "Flax and wool bought direct from small growers and a family mill."
	},
	{
		icon: Scissors,
		step: "02",
		title: "Make",
		body: "Cut, thrown or woven by hand, one short run at a time."
	},
	{
		icon: Package,
		step: "03",
		title: "Finish",
		body: "Washed, checked and packed in the same room it was made."
	},
	{
		icon: Ship,
		step: "04",
		title: "Ship COD",
		body: "Out the door to you — you pay the courier on arrival."
	}
];
var tickerItems = [
	"SLOW-MADE",
	"HAND-THROWN",
	"PAY ON DELIVERY",
	"SMALL BATCH",
	"SHIPPED WORLDWIDE"
];
function Home() {
	const featured = products.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes sorrel-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      ` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -left-40 -top-24 h-96 w-96 rounded-full bg-olive/10 blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-olive/5 blur-3xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-[1500px] gap-6 px-5 pt-10 md:px-10 md:pt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden shrink-0 md:flex md:w-10 md:items-start md:justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-caps origin-top-left translate-y-full -rotate-90 whitespace-nowrap text-olive",
							children: "Spring Collection — 2026 — Sorrel Atelier"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid flex-1 gap-8 pb-16 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise md:col-span-5 md:pt-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "label-caps flex items-center gap-2 text-olive md:hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-olive" }), "Spring collection · 2026"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "display-xl mt-4 md:mt-6",
									children: [
										"Made slowly,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "italic",
											children: "worn"
										}),
										" daily."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-sm text-muted-foreground md:mt-8",
									children: "Washed linen, hand-thrown stoneware and quiet objects for the home. Made in small runs, delivered to your door, paid when it arrives."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-4 md:mt-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/shop",
										className: "label-caps group inline-flex items-center gap-2 bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
										children: ["Shop the collection", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "label-caps link-underline text-muted-foreground",
										children: "Inside the atelier"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative md:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-olive/30 md:block"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "media-zoom relative rounded-sm border border-border/60 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.4)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_default,
									alt: "Model wearing an oversized oatmeal linen shirt against a warm plaster wall",
									width: 1920,
									height: 1200,
									className: "aspect-[4/3] w-full rounded-sm object-cover md:aspect-[5/6]"
								})
							})]
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rule-top overflow-hidden border-b border-border/60 bg-olive-soft py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max items-center gap-10 whitespace-nowrap",
				style: { animation: "sorrel-marquee 22s linear infinite" },
				children: [...tickerItems, ...tickerItems].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label-caps flex items-center gap-10 text-olive",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-olive/50" })]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-y-6 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:col-span-4 md:text-4xl",
					children: "The collections"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-sm bg-hairline md:col-span-8",
					children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: category.slug },
						className: "group relative flex flex-col gap-1 overflow-hidden bg-background px-6 py-6 transition-colors duration-300 hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-olive transition-transform duration-300 group-hover:scale-y-100"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl",
								children: category.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm text-muted-foreground",
								children: category.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "label-caps flex items-center gap-1 text-olive opacity-0 transition-all duration-300 group-hover:opacity-100",
								children: ["View", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
							})
						]
					}, category.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rule-top mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-olive",
				children: "How it's made"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: process.map(({ icon: Icon, step, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-sm border border-border/60 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive/50 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] md:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm text-muted-foreground",
								children: step
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-olive/30 text-olive transition-colors duration-300 group-hover:bg-olive group-hover:text-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							})]
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
				}, step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1500px] px-5 pb-8 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl",
					children: "New this season"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "label-caps link-underline group inline-flex items-center gap-1.5",
					children: ["All goods", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4",
				children: featured.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product,
					index: i
				}, product.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto mt-20 max-w-[1500px] px-5 md:mt-24 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-sm bg-olive-soft px-6 py-16 text-center md:px-20 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mb-6 hidden h-20 w-20 items-center justify-center sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 100 100",
							className: "h-full w-full text-olive/70",
							style: { animation: "spin 18s linear infinite" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								id: "stampCircle",
								d: "M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								fontSize: "8.2",
								letterSpacing: "2",
								fill: "currentColor",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
									href: "#stampCircle",
									children: "HAND MADE • SINCE 2026 • HAND MADE • SINCE 2026 •"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-2 w-2 rounded-full bg-olive" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps relative text-olive",
						children: "On payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mx-auto mt-6 max-w-2xl font-display text-2xl leading-tight sm:text-3xl md:text-5xl",
						children: "No card, no checkout friction. You pay the courier when the parcel is in your hands."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto mt-20 max-w-[1500px] px-5 pb-4 md:mt-24 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-sm border border-border/60 bg-surface px-6 py-10 sm:px-8 md:px-14 md:py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps text-olive",
								children: "Want a store like this?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display mt-4 text-2xl leading-tight sm:text-3xl",
								children: "This site is a working demo, built by ARCHER."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: "For a storefront built to your brand, catalog and workflow, reach out directly."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 md:min-w-[280px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:abdulbasit.alpha25@gmail.com",
									className: "group flex items-center justify-between rounded-sm border border-border/60 px-5 py-3.5 text-sm transition-all duration-300 hover:border-olive hover:bg-olive/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-olive" }), "abdulbasit.alpha25@gmail.com"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Get in touch via email" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/923415878569",
									target: "_blank",
									rel: "noreferrer",
									className: "group flex items-center justify-between rounded-sm border border-border/60 px-5 py-3.5 text-sm transition-all duration-300 hover:border-olive hover:bg-olive/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-olive" }), "+92 341 5878569"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Chat on WhatsApp" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs text-muted-foreground",
								children: "Available for remote work worldwide"
							})
						]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
