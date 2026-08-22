import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as useTheme, t as applyTheme } from "./store-BPy7gmTA.mjs";
import { a as Sun, b as Moon } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-zqreUFUb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle({ className }) {
	const theme = useTheme((s) => s.theme);
	const toggle = useTheme((s) => s.toggle);
	(0, import_react.useEffect)(() => {
		applyTheme(theme);
	}, [theme]);
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
		className: cn("relative h-7 w-14 rounded-full border border-hairline bg-surface-2 transition-colors duration-500", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("absolute top-0.5 left-0.5 grid h-[22px] w-[22px] place-items-center rounded-full bg-foreground text-background transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", isDark && "translate-x-[28px]"),
			children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-3 w-3" })
		})
	});
}
//#endregion
export { ThemeToggle as t };
