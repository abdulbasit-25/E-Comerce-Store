import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { z as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CqSsDW3p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-DU8BnNkc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function slugify(value) {
	return value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
}
function LegalPage({ label = "Legal / Trust", title, intro, lastUpdated, sections, cta, footer }) {
	const items = (0, import_react.useMemo)(() => sections.map((section, index) => ({
		...section,
		id: `${slugify(section.heading)}-${index + 1}`
	})), [sections]);
	const [activeId, setActiveId] = (0, import_react.useState)(items[0]?.id);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.find((entry) => entry.isIntersecting);
			if (visible) setActiveId(visible.target.id);
		}, {
			rootMargin: "-15% 0px -70% 0px",
			threshold: 0
		});
		items.forEach((item) => {
			const el = document.getElementById(item.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-12 max-w-3xl md:mb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-caps flex items-center gap-2 text-olive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-olive" }), label]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-xl mt-5",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-7 text-muted-foreground",
					children: intro
				}),
				lastUpdated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-caps mt-6 text-muted-foreground/70",
					children: ["Last updated ", lastUpdated]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-[220px_1fr] md:gap-16 lg:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Table of contents",
				className: "hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky top-24 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-caps mb-4 text-muted-foreground/60",
						children: "On this page"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1 border-l border-border/60",
						children: items.map((item, index) => {
							const isActive = activeId === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `#${item.id}`,
								className: ["-ml-px block border-l py-1.5 pl-4 text-sm leading-6 transition-colors", isActive ? "border-olive font-medium text-foreground" : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"].join(" "),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted-foreground/60",
										children: String(index + 1).padStart(2, "0")
									}),
									" ",
									item.heading
								]
							}) }, item.id);
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mb-8 rounded-sm border border-border/60 bg-surface md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "label-caps cursor-pointer select-none px-5 py-4 text-olive",
							children: "Jump to a section"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "border-t border-border/60 px-5 py-3",
							children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `#${item.id}`,
								className: "block py-2 text-sm text-muted-foreground hover:text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted-foreground/60",
										children: String(index + 1).padStart(2, "0")
									}),
									" ",
									item.heading
								]
							}) }, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border/60",
						children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: item.id,
							className: "scroll-mt-24 py-8 first:pt-0 md:py-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-4 sm:gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-caps shrink-0 tabular-nums text-olive/70",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl leading-tight md:text-3xl",
									children: item.heading
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-3 pl-0 text-sm leading-7 text-muted-foreground sm:pl-[calc(2ch+1.5rem)]",
								children: item.body.map((paragraph, pIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, pIndex))
							})]
						}, item.id))
					}),
					cta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-10 md:mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-5 rounded-sm border border-olive/25 bg-olive-soft p-6 sm:p-8 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "label-caps text-olive",
									children: "Need more?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl leading-tight md:text-3xl",
									children: cta.description ?? "Keep shopping with confidence."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: cta.to,
								className: "label-caps group inline-flex shrink-0 items-center justify-center gap-2 bg-primary px-6 py-3.5 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
								children: [cta.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" })]
							})]
						})
					}) : null,
					footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: footer
					}) : null
				]
			})]
		})]
	}) });
}
//#endregion
export { LegalPage as t };
