import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as useHydrated, r as useAuth } from "./store-BPy7gmTA.mjs";
import { _ as useNavigate, f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DQWCdIfh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	if (!hydrated || !user || user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-16 md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-64 animate-pulse bg-surface-2" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
//#endregion
export { AdminLayout as component };
