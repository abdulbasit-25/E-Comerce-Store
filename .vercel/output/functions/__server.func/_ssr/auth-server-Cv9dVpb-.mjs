import { a as TSS_SERVER_FUNCTION, o as createServerFn } from "./server-Yxlb3deo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-server-Cv9dVpb-.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loginUser_createServerFn_handler = createServerRpc({
	id: "66dab1fbf4d0d34f2e91194f8b4ed914776b0e841615aa896487eb6bc704f891",
	name: "loginUser",
	filename: "src/lib/auth-server.ts"
}, (opts) => loginUser.__executeServer(opts));
var loginUser = createServerFn({ method: "POST" }).validator((data) => data).handler(loginUser_createServerFn_handler, async ({ data }) => {
	try {
		const { verifyPassword, normalizeEmail, createToken, isValidEmail } = await import("./auth-B3YkDmyb.mjs");
		const { email, password } = data;
		if (!email || !password) return {
			success: false,
			message: "Email and password are required"
		};
		if (!isValidEmail(email)) return {
			success: false,
			message: "Invalid email format"
		};
		const { getMongoDb } = await import("./mongodb-C_fczop5.mjs");
		const usersCollection = (await getMongoDb()).collection("users");
		const normalizedEmail = normalizeEmail(email);
		const user = await usersCollection.findOne({ email: normalizedEmail });
		if (!user) return {
			success: false,
			message: "Invalid email or password"
		};
		if (!await verifyPassword(password, user.passwordHash)) return {
			success: false,
			message: "Invalid email or password"
		};
		const sessionUser = {
			id: user._id?.toString() || "",
			name: user.name,
			email: user.email,
			role: user.role || "customer"
		};
		return {
			success: true,
			user: sessionUser,
			token: createToken(sessionUser)
		};
	} catch (error) {
		console.error("Login error:", error);
		return {
			success: false,
			message: "Internal server error"
		};
	}
});
var getCurrentUser_createServerFn_handler = createServerRpc({
	id: "7959222732cf876cf81bc0dcd601a8d8f5797cb798cdec44501f0f6e3ee4ea25",
	name: "getCurrentUser",
	filename: "src/lib/auth-server.ts"
}, (opts) => getCurrentUser.__executeServer(opts));
var getCurrentUser = createServerFn({ method: "GET" }).validator((token) => token).handler(getCurrentUser_createServerFn_handler, async ({ data: token }) => {
	if (!token) return null;
	try {
		const { verifyToken } = await import("./auth-B3YkDmyb.mjs");
		return verifyToken(token);
	} catch (error) {
		console.error("Get user error:", error);
		return null;
	}
});
var logoutUser_createServerFn_handler = createServerRpc({
	id: "4a6e4879b0aa3e1be65ec8f9752065dd970b9ffff5081dc8a7d17774a4483ca0",
	name: "logoutUser",
	filename: "src/lib/auth-server.ts"
}, (opts) => logoutUser.__executeServer(opts));
var logoutUser = createServerFn({ method: "POST" }).handler(logoutUser_createServerFn_handler, async () => {
	return { success: true };
});
//#endregion
export { getCurrentUser_createServerFn_handler, loginUser_createServerFn_handler, logoutUser_createServerFn_handler };
