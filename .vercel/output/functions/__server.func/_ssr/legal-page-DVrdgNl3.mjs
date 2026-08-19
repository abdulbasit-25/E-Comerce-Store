import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { z as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CAA2NU0x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-DVrdgNl3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/storefront/legal-page.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "mb-12 max-w-3xl md:mb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "label-caps flex items-center gap-2 text-olive",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-6 bg-olive" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this), label]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-xl mt-5",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-6 text-base leading-7 text-muted-foreground",
					children: intro
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 11
				}, this),
				lastUpdated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "label-caps mt-6 text-muted-foreground/70",
					children: ["Last updated ", lastUpdated]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 13
				}, this) : null
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-10 md:grid-cols-[220px_1fr] md:gap-16 lg:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				"aria-label": "Table of contents",
				className: "hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "sticky top-24 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "label-caps mb-4 text-muted-foreground/60",
						children: "On this page"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
						className: "space-y-1 border-l border-border/60",
						children: items.map((item, index) => {
							const isActive = activeId === item.id;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `#${item.id}`,
								className: ["-ml-px block border-l py-1.5 pl-4 text-sm leading-6 transition-colors", isActive ? "border-olive font-medium text-foreground" : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"].join(" "),
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "tabular-nums text-muted-foreground/60",
										children: String(index + 1).padStart(2, "0")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 105,
										columnNumber: 25
									}, this),
									" ",
									item.heading
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 23
							}, this) }, item.id, false, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 21
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", {
						className: "mb-8 rounded-sm border border-border/60 bg-surface md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", {
							className: "label-caps cursor-pointer select-none px-5 py-4 text-olive",
							children: "Jump to a section"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
							className: "border-t border-border/60 px-5 py-3",
							children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `#${item.id}`,
								className: "block py-2 text-sm text-muted-foreground hover:text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "tabular-nums text-muted-foreground/60",
										children: String(index + 1).padStart(2, "0")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 23
									}, this),
									" ",
									item.heading
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 21
							}, this) }, item.id, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "divide-y divide-border/60",
						children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
							id: item.id,
							className: "scroll-mt-24 py-8 first:pt-0 md:py-10",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-baseline gap-4 sm:gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "label-caps shrink-0 tabular-nums text-olive/70",
									children: String(index + 1).padStart(2, "0")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "text-2xl leading-tight md:text-3xl",
									children: item.heading
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 146,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 space-y-3 pl-0 text-sm leading-7 text-muted-foreground sm:pl-[calc(2ch+1.5rem)]",
								children: item.body.map((paragraph, pIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: paragraph }, pIndex, false, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 23
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 19
							}, this)]
						}, item.id, true, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 13
					}, this),
					cta ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "mt-10 md:mt-14",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col gap-5 rounded-sm border border-olive/25 bg-olive-soft p-6 sm:p-8 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "max-w-md",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "label-caps text-olive",
									children: "Need more?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "mt-2 text-2xl leading-tight md:text-3xl",
									children: cta.description ?? "Keep shopping with confidence."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 162,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: cta.to,
								className: "label-caps group inline-flex shrink-0 items-center justify-center gap-2 bg-primary px-6 py-3.5 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground",
								children: [cta.label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 171,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 15
					}, this) : null,
					footer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10",
						children: footer
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 23
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 71,
		columnNumber: 5
	}, this);
}
//#endregion
export { LegalPage as t };
