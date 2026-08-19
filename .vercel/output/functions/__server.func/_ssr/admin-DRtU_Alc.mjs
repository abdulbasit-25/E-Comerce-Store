import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { o as useHydrated, r as useAuth } from "./store-BPy7gmTA.mjs";
import { _ as useNavigate, f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DRtU_Alc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/admin.tsx?tsr-split=component";
function AdminLayout() {
	const user = useAuth((s) => s.user);
	const hydrated = useHydrated();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (hydrated) {
			if (!user) navigate({ to: "/login" });
			else if (user.role !== "admin") navigate({ to: "/account" });
		}
	}, [
		hydrated,
		user,
		navigate
	]);
	if (!hydrated || !user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-16 md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-16 w-64 animate-pulse bg-surface-2" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminLayout as component };
