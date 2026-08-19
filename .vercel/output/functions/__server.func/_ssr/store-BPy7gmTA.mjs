import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as products, i as orders } from "./mock-data-CacGgQ9l.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-BPy7gmTA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var useTheme = create()(persist((set, get) => ({
	theme: "light",
	toggle: () => {
		const next = get().theme === "light" ? "dark" : "light";
		applyTheme(next);
		set({ theme: next });
	},
	set: (theme) => {
		applyTheme(theme);
		set({ theme });
	}
}), { name: "sorrel-theme" }));
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
}
var useAuth = create()(persist((set) => ({
	user: null,
	signIn: (email, name) => {
		const isAdmin = email.trim().toLowerCase().startsWith("admin@");
		const user = {
			id: isAdmin ? "admin-1" : "u-me",
			name: name?.trim() || (isAdmin ? "Store Admin" : email.split("@")[0] || "Customer"),
			email: email.trim(),
			role: isAdmin ? "admin" : "customer"
		};
		set({ user });
		return user;
	},
	updateProfile: (profile) => set((state) => state.user ? { user: {
		...state.user,
		...profile
	} } : state),
	signOut: () => set({ user: null })
}), { name: "sorrel-auth" }));
var useCart = create()(persist((set) => ({
	lines: [],
	add: (productId, qty = 1) => set((state) => {
		return { lines: state.lines.find((l) => l.productId === productId) ? state.lines.map((l) => l.productId === productId ? {
			...l,
			qty: l.qty + qty
		} : l) : [...state.lines, {
			productId,
			qty
		}] };
	}),
	setQty: (productId, qty) => set((state) => ({ lines: state.lines.map((l) => l.productId === productId ? {
		...l,
		qty
	} : l).filter((l) => l.qty > 0) })),
	remove: (productId) => set((state) => ({ lines: state.lines.filter((l) => l.productId !== productId) })),
	clear: () => set({ lines: [] })
}), { name: "sorrel-cart" }));
function cartDetail(lines) {
	const items = lines.map((line) => {
		const product = products.find((p) => p.id === line.productId);
		return product ? {
			product,
			qty: line.qty
		} : null;
	}).filter((x) => x !== null);
	const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
	const shipping = items.length === 0 || subtotal > 200 ? 0 : 12;
	return {
		items,
		subtotal,
		shipping,
		total: subtotal + shipping
	};
}
var useOrders = create()(persist((set) => ({
	orders,
	place: (order) => set((state) => ({ orders: [order, ...state.orders] })),
	setStatus: (id, status) => set((state) => ({ orders: state.orders.map((o) => o.id === id ? {
		...o,
		status,
		statusHistory: [...o.statusHistory, {
			status,
			at: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		}]
	} : o) })),
	togglePaid: (id) => set((state) => ({ orders: state.orders.map((o) => o.id === id ? {
		...o,
		paid: !o.paid
	} : o) }))
}), {
	name: "sorrel-orders",
	version: 1
}));
var useCatalog = create()(persist((set) => ({
	products,
	upsert: (product) => set((state) => ({ products: state.products.some((p) => p.id === product.id) ? state.products.map((p) => p.id === product.id ? product : p) : [product, ...state.products] })),
	remove: (id) => set((state) => ({ products: state.products.filter((p) => p.id !== id) }))
}), {
	name: "sorrel-catalog",
	version: 1
}));
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
//#endregion
export { useCatalog as a, useTheme as c, useCart as i, cartDetail as n, useHydrated as o, useAuth as r, useOrders as s, applyTheme as t };
