import { o as __toESM } from "../_runtime.mjs";
import { t as bcryptjs_default } from "../_libs/bcryptjs.mjs";
import { t as require_jsonwebtoken } from "../_libs/jsonwebtoken+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-B3YkDmyb.js
var import_jsonwebtoken = /* @__PURE__ */ __toESM(require_jsonwebtoken());
var JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
/**
* Verify a password against a hash
*/
async function verifyPassword(password, hash) {
	return bcryptjs_default.compare(password, hash);
}
/**
* Create a JWT token for a user
*/
function createToken(user) {
	return import_jsonwebtoken.default.sign(user, JWT_SECRET, { expiresIn: "7d" });
}
/**
* Verify and decode a JWT token
*/
function verifyToken(token) {
	try {
		return import_jsonwebtoken.default.verify(token, JWT_SECRET);
	} catch (error) {
		return null;
	}
}
/**
* Normalize email for storage (lowercase)
*/
function normalizeEmail(email) {
	return email.trim().toLowerCase();
}
/**
* Validate email format
*/
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
//#endregion
export { createToken, isValidEmail, normalizeEmail, verifyPassword, verifyToken };
