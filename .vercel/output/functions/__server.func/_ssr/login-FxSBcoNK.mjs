import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { r as useAuth } from "./store-BPy7gmTA.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CAA2NU0x.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as TSS_SERVER_FUNCTION, i as getServerFnById, o as createServerFn } from "./server-D-vJO4f2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-FxSBcoNK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loginUser = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("66dab1fbf4d0d34f2e91194f8b4ed914776b0e841615aa896487eb6bc704f891"));
createServerFn({ method: "GET" }).validator((token) => token).handler(createSsrRpc("7959222732cf876cf81bc0dcd601a8d8f5797cb798cdec44501f0f6e3ee4ea25"));
createServerFn({ method: "POST" }).handler(createSsrRpc("4a6e4879b0aa3e1be65ec8f9752065dd970b9ffff5081dc8a7d17774a4483ca0"));
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/routes/login.tsx?tsr-split=component";
function LoginPage() {
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const signIn = useAuth((s) => s.signIn);
	const navigate = useNavigate();
	const onSubmit = async (event) => {
		event.preventDefault();
		if (mode === "signup") {
			toast.error("Registration is not available yet");
			return;
		}
		const form = new FormData(event.currentTarget);
		const email = String(form.get("email") ?? "");
		const password = String(form.get("password") ?? "");
		if (!email.includes("@")) {
			toast.error("Enter a valid email address");
			return;
		}
		if (!password) {
			toast.error("Password is required");
			return;
		}
		setLoading(true);
		try {
			const result = await loginUser({ data: {
				email,
				password
			} });
			if (result.success && result.user) {
				if (result.token) localStorage.setItem("auth-token", result.token);
				signIn(result.user.email, result.user.name);
				toast.success(`Welcome, ${result.user.name}`);
				navigate({ to: result.user.role === "admin" ? "/admin" : "/account" });
			} else toast.error(result.message || "Login failed");
		} catch (error) {
			console.error("Login error:", error);
			toast.error("An error occurred during login");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto grid max-w-[1500px] gap-16 px-5 py-16 md:grid-cols-2 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "label-caps text-olive",
				children: "Account"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "display-xl mt-6",
				children: mode === "signin" ? "Welcome back." : "Join the atelier."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-8 max-w-sm text-muted-foreground",
				children: "Your account keeps order history, saved addresses and delivery tracking in one place."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-8 max-w-sm border-l-2 border-olive pl-4 text-sm text-muted-foreground",
				children: [
					"Demo credentials:",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Admin:" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 13
					}, this),
					" admin@sorrel.local / Admin@12345",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Customer:" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this),
					" customer@sorrel.local / Customer@12345"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 62,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "bg-surface p-8 md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-6",
					children: ["signin", "signup"].map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setMode(value),
						className: cn("label-caps pb-2", mode === value ? "border-b-2 border-olive text-foreground" : "text-muted-foreground"),
						children: value === "signin" ? "Sign in" : "Create account"
					}, value, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 59
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit,
					className: "mt-10 space-y-6",
					children: [
						mode === "signup" && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
							htmlFor: "name",
							className: "label-caps text-muted-foreground",
							children: "Full name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("input", {
							id: "name",
							name: "name",
							className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 35
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "email",
							className: "label-caps text-muted-foreground",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "email",
							name: "email",
							type: "email",
							className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							htmlFor: "password",
							className: "label-caps text-muted-foreground",
							children: "Password"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							id: "password",
							name: "password",
							type: "password",
							className: "mt-2 w-full border-b border-hairline bg-transparent py-2 outline-none focus:border-olive"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: loading,
							className: "label-caps w-full bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground disabled:opacity-50",
							children: loading ? "Signing in..." : mode === "signin" ? "Sign in" : "Create account"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/shop",
					className: "label-caps link-underline mt-8 inline-block text-muted-foreground",
					children: "Continue shopping"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 61,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 60,
		columnNumber: 10
	}, this);
}
//#endregion
export { LoginPage as component };
