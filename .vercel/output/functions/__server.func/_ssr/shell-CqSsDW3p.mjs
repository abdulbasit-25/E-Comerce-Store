import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as products, i as orders } from "./mock-data-CacGgQ9l.mjs";
import { i as useCart, o as useHydrated, r as useAuth } from "./store-BPy7gmTA.mjs";
import { A as Instagram, C as MessageCircle, E as Mail, L as Bot, S as MessageSquareText, c as Sparkles, g as RotateCcw, l as ShoppingBag, p as Send, r as User, t as X, w as Menu, z as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as ThemeToggle } from "./theme-toggle-zqreUFUb.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TooltipContent, i as Tooltip, o as TooltipTrigger } from "./router-B-ea4xG-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CqSsDW3p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chatbotConfig = {
	storeName: "Sorrel",
	support: {
		email: "hello@sorrelgoods.com",
		phone: "+92 341 5878569",
		hours: "Monday to Friday, 9:00 AM to 6:00 PM",
		contactPage: "/about"
	},
	shipping: {
		estimatedDays: "3-7 business days",
		cost: "Shipping charges depend on your location and order total."
	},
	paymentMethods: ["Cash on Delivery"],
	returnPolicyLink: "/terms-conditions",
	shopLink: "/shop",
	cartLink: "/cart",
	accountLink: "/account"
};
var chatbotFaqs = [
	{
		question: "How long does shipping take?",
		keywords: [
			"shipping",
			"delivery",
			"deliver",
			"how long",
			"delivery time",
			"shipping time",
			"when will it arrive"
		],
		answer: "Orders are normally delivered within 3-7 business days. Shipping charges depend on your location and order total."
	},
	{
		question: "What is your return policy?",
		keywords: [
			"return",
			"refund",
			"exchange",
			"replace item",
			"wrong product",
			"damaged product"
		],
		answer: "Our return policy is described in our Terms & Conditions and is applied to eligible items according to the information in that policy."
	},
	{
		question: "What payment methods do you accept?",
		keywords: [
			"payment",
			"pay",
			"credit card",
			"debit card",
			"cash",
			"cash on delivery",
			"cod",
			"paypal"
		],
		answer: "We currently accept Cash on Delivery and order payments in line with the options available at checkout."
	},
	{
		question: "How do I track my order?",
		keywords: [
			"track order",
			"track my order",
			"where is my order",
			"where is my package",
			"order status",
			"track my package"
		],
		answer: "You can track an order by entering your order number in the chat. Please provide the order number and we’ll check it."
	}
];
function normalizeInput(raw) {
	if (!raw) return "";
	return raw.toLowerCase().replace(/['’]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
function hasAnyKeyword(input, keywords) {
	return keywords.some((keyword) => input.includes(keyword));
}
function validateOrderNumber(raw) {
	const value = raw.trim().toUpperCase();
	if (!value) return null;
	return /^[A-Z]{2,5}-?\d{3,8}$/i.test(value) || /^SRL-\d+$/i.test(value) || /^ORD-\d+$/i.test(value) ? value.replace(/\s+/g, "") : null;
}
function findOrderByNumber(raw) {
	const value = validateOrderNumber(raw);
	if (!value) return null;
	return orders.find((order) => order.id.toUpperCase() === value.toUpperCase()) ?? null;
}
function findProductMatches(query, maxResults = 3) {
	const normalized = normalizeInput(query);
	if (!normalized) return [];
	const tokens = normalized.split(" ").filter((word) => word.length > 2);
	const directMatches = [];
	for (const product of products) {
		const haystack = `${product.name} ${product.slug} ${product.categorySlug} ${product.description}`.toLowerCase();
		if (tokens.some((token) => haystack.includes(token))) directMatches.push(product);
	}
	if (directMatches.length > 0) return directMatches.slice(0, maxResults);
	const categoryMap = {
		apparel: "apparel",
		shirt: "apparel",
		shirts: "apparel",
		sweater: "apparel",
		sweaters: "apparel",
		mug: "ceramics",
		mugs: "ceramics",
		vase: "ceramics",
		lamp: "objects",
		lighting: "objects",
		tote: "objects",
		bag: "objects",
		throw: "textiles",
		blanket: "textiles",
		textile: "textiles",
		textiles: "textiles",
		ceramics: "ceramics",
		objects: "objects"
	};
	const categoryKey = Object.keys(categoryMap).find((key) => normalized.includes(key));
	if (categoryKey) {
		const matchCategory = categoryMap[categoryKey];
		return products.filter((product) => product.categorySlug === matchCategory).slice(0, maxResults);
	}
	return products.filter((product) => {
		const name = product.name.toLowerCase();
		return [
			"linen",
			"stoneware",
			"throw",
			"tote",
			"mug",
			"sweater",
			"lamp"
		].some((term) => name.includes(term));
	}).slice(0, maxResults);
}
function findPriceMatches(query, maxResults = 3) {
	const normalized = normalizeInput(query);
	const maxValueMatch = normalized.match(/under\s*(\d+)|below\s*(\d+)|less than\s*(\d+)|under\s*\$?(\d+)/i);
	const numericMax = maxValueMatch ? Number(maxValueMatch[1] ?? maxValueMatch[2] ?? maxValueMatch[3] ?? maxValueMatch[4]) : null;
	if (numericMax !== null) return products.filter((product) => product.price <= numericMax).slice(0, maxResults);
	if (!hasAnyKeyword(normalized, [
		"price",
		"how much",
		"cost",
		"cheap",
		"budget",
		"affordable"
	])) return [];
	return products.filter((product) => product.price <= 200).slice(0, maxResults);
}
function getFaqAnswer(input) {
	const normalized = normalizeInput(input);
	return chatbotFaqs.find((faq) => hasAnyKeyword(normalized, faq.keywords)) ?? null;
}
function buildChatbotReply(input, awaitingOrderNumber = false) {
	const normalized = normalizeInput(input);
	if (!normalized) return {
		text: "Please type a question or choose one of the options below.",
		quickReplies: getMainMenuReplies()
	};
	if (awaitingOrderNumber) {
		const orderNumber = validateOrderNumber(normalized);
		if (!orderNumber) return {
			text: "I couldn't read that order number. Please enter a valid order number, for example SRL-2401 or ORD-12345.",
			quickReplies: ["Track Order", "Back to Main Menu"]
		};
		const order = findOrderByNumber(orderNumber);
		if (!order) return {
			text: "I couldn't find an order with that number. Please check the order number and try again.",
			quickReplies: ["Track Order", "Back to Main Menu"]
		};
		const orderLabel = order.items.map((item) => item.name).join(", ");
		return {
			text: `Order #${order.id}\n\nStatus: ${order.status}\nItems: ${orderLabel}\nCustomer: ${order.customerName}\nShipping address: ${order.shippingAddress}`,
			quickReplies: [
				"Track Order",
				"Browse Products",
				"Back to Main Menu"
			]
		};
	}
	if (hasAnyKeyword(normalized, [
		"track order",
		"track my order",
		"where is my order",
		"where is my package",
		"track my package",
		"order status",
		"status of my order"
	])) return {
		text: "Sure! Please enter your order number.",
		quickReplies: ["Back to Main Menu"],
		awaitOrderNumber: true
	};
	if (hasAnyKeyword(normalized, [
		"shipping",
		"delivery",
		"deliver",
		"shipping time",
		"delivery time",
		"how long",
		"when will it arrive",
		"shipping cost",
		"delivery cost"
	])) return {
		text: `Orders are normally delivered within ${chatbotConfig.shipping.estimatedDays}. ${chatbotConfig.shipping.cost}`,
		quickReplies: ["Track Order", "Back to Main Menu"]
	};
	if (hasAnyKeyword(normalized, [
		"return",
		"refund",
		"exchange",
		"replace item",
		"wrong product",
		"damaged product",
		"return product"
	])) return {
		text: `Our return policy is described in our Terms & Conditions. Eligible products can be returned under the conditions set out in that policy. You can review it here: ${chatbotConfig.returnPolicyLink}.`,
		quickReplies: ["View Return Policy", "Back to Main Menu"]
	};
	if (hasAnyKeyword(normalized, [
		"payment",
		"pay",
		"credit card",
		"debit card",
		"cash",
		"cash on delivery",
		"cod",
		"paypal",
		"payment methods"
	])) return {
		text: `We currently accept the following payment method(s): ${chatbotConfig.paymentMethods.join(", ")}.`,
		quickReplies: ["Checkout", "Back to Main Menu"]
	};
	if (hasAnyKeyword(normalized, [
		"login",
		"sign in",
		"register",
		"create account",
		"forgot password",
		"account",
		"profile"
	])) return {
		text: "Would you like to log in, create an account, or recover your password?",
		quickReplies: [
			"Login",
			"Create Account",
			"Forgot Password",
			"Back to Main Menu"
		]
	};
	if (hasAnyKeyword(normalized, [
		"contact",
		"human",
		"agent",
		"support",
		"talk to someone",
		"customer service",
		"help"
	])) return {
		text: `I'd be happy to help. If you'd like to contact our support team, you can reach us at ${chatbotConfig.support.email}, call ${chatbotConfig.support.phone}, or visit ${chatbotConfig.support.contactPage}. Our usual hours are ${chatbotConfig.support.hours}.`,
		quickReplies: [
			"Email Support",
			"Call Support",
			"Back to Main Menu"
		]
	};
	if (hasAnyKeyword(normalized, [
		"shop",
		"browse products",
		"products",
		"what products do you have",
		"show me",
		"show products",
		"catalog"
	])) {
		const matches = findProductMatches(normalized, 3);
		if (matches.length === 0) return {
			text: "I could not find a matching product in our current catalog. You can browse the full collection on the shop page.",
			quickReplies: ["Browse Products", "Back to Main Menu"]
		};
		return {
			text: "Here are some products that match your request:",
			quickReplies: ["Browse Products", "Back to Main Menu"],
			productCards: matches.map((product) => ({
				id: product.id,
				name: product.name,
				slug: product.slug,
				image: product.image,
				price: product.price,
				rating: product.rating,
				stock: product.stock
			}))
		};
	}
	if (hasAnyKeyword(normalized, [
		"price",
		"how much",
		"cost",
		"cheap",
		"budget",
		"affordable",
		"under",
		"below"
	])) {
		const matches = findPriceMatches(normalized, 3);
		if (matches.length === 0) return {
			text: "I couldn't find a product in that price range in the current catalog.",
			quickReplies: ["Browse Products", "Back to Main Menu"]
		};
		return {
			text: "Here are some products in the range you asked for:",
			quickReplies: ["Browse Products", "Back to Main Menu"],
			productCards: matches.map((product) => ({
				id: product.id,
				name: product.name,
				slug: product.slug,
				image: product.image,
				price: product.price,
				rating: product.rating,
				stock: product.stock
			}))
		};
	}
	if (hasAnyKeyword(normalized, [
		"available",
		"in stock",
		"out of stock",
		"do you have",
		"is it available",
		"available in"
	])) {
		const matches = findProductMatches(normalized, 1);
		if (matches.length === 0) return {
			text: "I could not confirm that specific product from the current catalog. Please choose a product from the shop page or ask for a different item.",
			quickReplies: ["Browse Products", "Back to Main Menu"]
		};
		const product = matches[0];
		return {
			text: `${product.stock > 0 ? "Yes, this product is currently in stock." : "Sorry, this product is currently out of stock."} ${product.name} is available at $${product.price}.`,
			quickReplies: ["Browse Products", "Back to Main Menu"],
			productCards: [{
				id: product.id,
				name: product.name,
				slug: product.slug,
				image: product.image,
				price: product.price,
				rating: product.rating,
				stock: product.stock
			}]
		};
	}
	const faqAnswer = getFaqAnswer(normalized);
	if (faqAnswer) return {
		text: faqAnswer.answer,
		quickReplies: [
			"Shipping",
			"Returns",
			"Payments",
			"Back to Main Menu"
		]
	};
	const matches = findProductMatches(normalized, 3);
	if (matches.length > 0) return {
		text: "I found a few relevant products for your question:",
		quickReplies: ["Browse Products", "Back to Main Menu"],
		productCards: matches.map((product) => ({
			id: product.id,
			name: product.name,
			slug: product.slug,
			image: product.image,
			price: product.price,
			rating: product.rating,
			stock: product.stock
		}))
	};
	return {
		text: "I'm sorry, I didn't quite understand that. Please choose one of the options below or try asking in a different way.",
		quickReplies: getMainMenuReplies()
	};
}
function getMainMenuReplies() {
	return [
		"Browse Products",
		"Track Order",
		"Shipping",
		"Returns",
		"Payments",
		"Contact Support"
	];
}
var STORAGE_KEY = "sorrel-chatbot-history";
var MIN_TYPING_MS = 450;
var MAX_TYPING_MS = 1100;
function createBotMessage(text, quickReplies = [], productCards) {
	return {
		id: crypto.randomUUID(),
		role: "bot",
		text,
		quickReplies,
		productCards
	};
}
function createUserMessage(text) {
	return {
		id: crypto.randomUUID(),
		role: "user",
		text
	};
}
function typingDelayFor(text) {
	return Math.min(MIN_TYPING_MS + text.length * 4, MAX_TYPING_MS);
}
function ChatbotWidget() {
	const navigate = useNavigate();
	const addToCart = useCart((state) => state.add);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isMinimized, setIsMinimized] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [awaitingOrderNumber, setAwaitingOrderNumber] = (0, import_react.useState)(false);
	const [hasUnread, setHasUnread] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return [];
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed) && parsed.length > 0) return parsed;
			}
		} catch {}
		return [createBotMessage(`Hi! 👋 Welcome to ${chatbotConfig.storeName}. How can I help you today?`, getMainMenuReplies())];
	});
	const bodyRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const previousMessageCount = (0, import_react.useRef)(messages.length);
	const typingTimeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (!bodyRef.current) return;
		bodyRef.current.scrollTo({
			top: bodyRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [
		messages,
		isOpen,
		isMinimized,
		isTyping
	]);
	(0, import_react.useEffect)(() => {
		const grew = messages.length > previousMessageCount.current;
		const lastMessage = messages[messages.length - 1];
		if (grew && lastMessage?.role === "bot" && (!isOpen || isMinimized)) setHasUnread(true);
		previousMessageCount.current = messages.length;
	}, [
		messages,
		isOpen,
		isMinimized
	]);
	(0, import_react.useEffect)(() => {
		if (isOpen && !isMinimized) {
			setHasUnread(false);
			inputRef.current?.focus();
		}
	}, [isOpen, isMinimized]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
		};
	}, []);
	const quickReplies = (0, import_react.useMemo)(() => {
		return [...messages].reverse().find((message) => message.quickReplies && message.quickReplies.length > 0)?.quickReplies ?? getMainMenuReplies();
	}, [messages]);
	const respondWithReply = (reply) => {
		setAwaitingOrderNumber(Boolean(reply.awaitOrderNumber));
		setIsTyping(true);
		if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
		typingTimeoutRef.current = setTimeout(() => {
			setMessages((prev) => [...prev, createBotMessage(reply.text, reply.quickReplies, reply.productCards)]);
			setIsTyping(false);
		}, typingDelayFor(reply.text));
	};
	const sendText = (rawText) => {
		const text = rawText.trim();
		if (!text) {
			respondWithReply({
				text: "Please type a question or choose one of the quick replies.",
				quickReplies
			});
			return;
		}
		setMessages((prev) => [...prev, createUserMessage(text)]);
		respondWithReply(buildChatbotReply(text, awaitingOrderNumber));
		setInput("");
	};
	const handleQuickReply = (label) => {
		const normalized = normalizeInput(label);
		if (!normalized) return;
		if (normalized.includes("browse products") || normalized.includes("shop")) {
			navigate({ to: "/shop" });
			return;
		}
		if (normalized.includes("view return policy")) {
			navigate({ to: chatbotConfig.returnPolicyLink });
			return;
		}
		if (normalized === "checkout") {
			navigate({ to: chatbotConfig.cartLink });
			return;
		}
		if (normalized.includes("login") || normalized.includes("create account") || normalized.includes("forgot password") || normalized.includes("sign in")) {
			navigate({ to: chatbotConfig.accountLink });
			return;
		}
		if (normalized.includes("email support")) {
			window.location.href = `mailto:${chatbotConfig.support.email}`;
			return;
		}
		if (normalized.includes("call support")) {
			window.location.href = `tel:${chatbotConfig.support.phone}`;
			return;
		}
		if (normalized.includes("track order") || normalized.includes("track my order")) {
			setMessages((prev) => [...prev, createUserMessage(label)]);
			respondWithReply({
				text: "Sure! Please enter your order number.",
				quickReplies: ["Back to Main Menu"],
				awaitOrderNumber: true
			});
			return;
		}
		if (normalized.includes("shipping")) {
			setMessages((prev) => [...prev, createUserMessage(label)]);
			respondWithReply(buildChatbotReply("shipping"));
			return;
		}
		if (normalized.includes("return")) {
			setMessages((prev) => [...prev, createUserMessage(label)]);
			respondWithReply(buildChatbotReply("return product"));
			return;
		}
		if (normalized.includes("payment")) {
			setMessages((prev) => [...prev, createUserMessage(label)]);
			respondWithReply(buildChatbotReply("payment methods"));
			return;
		}
		if (normalized.includes("contact")) {
			setMessages((prev) => [...prev, createUserMessage(label)]);
			respondWithReply(buildChatbotReply("contact support"));
			return;
		}
		if (normalized.includes("back to main menu") || normalized === "back") {
			setMessages((prev) => [...prev, createUserMessage(label)]);
			respondWithReply({
				text: `Hi! 👋 Welcome to ${chatbotConfig.storeName}. How can I help you today?`,
				quickReplies: getMainMenuReplies()
			});
			return;
		}
		sendText(label);
	};
	const handleSubmit = (event) => {
		event?.preventDefault();
		sendText(input);
	};
	const clearChat = () => {
		setAwaitingOrderNumber(false);
		setIsTyping(false);
		if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
		setMessages([createBotMessage(`Hi! 👋 Welcome to ${chatbotConfig.storeName}. How can I help you today?`, getMainMenuReplies())]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5",
		children: [!isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-label": "Open customer support chat",
			onClick: () => setIsOpen(true),
			className: "group relative flex items-center gap-2.5 rounded-sm bg-primary px-5 py-3.5 text-primary-foreground shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "h-4 w-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-caps",
					children: "Store Assistant"
				}),
				hasUnread ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-olive ring-2 ring-background",
					"aria-hidden": "true"
				}) : null
			]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-[calc(100vw-1.5rem)] max-w-[400px] origin-bottom-right animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-sm border border-border/70 bg-background shadow-[0_25px_80px_rgba(0,0,0,0.18)] duration-200 sm:w-[380px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border/70 bg-surface px-4 py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-sm bg-olive-soft text-olive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground",
						children: "Store Assistant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 w-1.5 rounded-full bg-olive",
							"aria-hidden": "true"
						}), "Online now"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Clear chat",
						title: "Clear chat",
						onClick: clearChat,
						className: "rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close chat",
						title: "Close chat",
						onClick: () => setIsOpen(false),
						className: "rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid transition-[grid-template-rows] duration-300 ease-in-out ${isMinimized ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: bodyRef,
							className: "flex max-h-[420px] min-h-[280px] flex-col gap-4 overflow-y-auto scroll-smooth bg-background p-3 sm:max-h-[480px]",
							children: [messages.map((message) => {
								const isUser = message.role === "user";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: isUser ? "flex animate-in fade-in slide-in-from-bottom-1 items-end justify-end gap-2 duration-300" : "flex animate-in fade-in slide-in-from-bottom-1 items-end gap-2 duration-300",
									children: [
										!isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-olive-soft text-olive",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5" })
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: isUser ? "max-w-[78%] rounded-sm bg-primary px-3.5 py-2.5 text-sm leading-6 text-primary-foreground" : "max-w-[78%] rounded-sm border border-border/70 bg-surface px-3.5 py-2.5 text-sm leading-6 text-foreground",
											children: [message.text.split("\n").map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "whitespace-pre-line",
												children: line
											}, `${message.id}-${index}`)), message.productCards && message.productCards.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 space-y-3",
												children: message.productCards.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "overflow-hidden rounded-sm border border-border/70 bg-background",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: product.image,
														alt: product.name,
														className: "h-32 w-full object-cover"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-2 p-2.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-start justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-medium text-foreground",
																	children: product.name
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-xs text-muted-foreground",
																	children: ["★ ", product.rating]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs text-muted-foreground",
																children: ["$", product.price]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	to: `/product/${product.slug}`,
																	className: "inline-flex flex-1 items-center justify-center rounded-sm bg-primary px-2.5 py-2 text-[11px] font-medium text-primary-foreground transition-colors hover:bg-olive",
																	children: "View product"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => addToCart(product.id, 1),
																	className: "inline-flex flex-1 items-center justify-center rounded-sm border border-border px-2.5 py-2 text-[11px] font-medium text-foreground transition-colors hover:border-olive hover:text-olive",
																	children: "Add to cart"
																})]
															})
														]
													})]
												}, product.id))
											})]
										}),
										isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-muted text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" })
										}) : null
									]
								}, message.id);
							}), isTyping ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex animate-in fade-in items-end gap-2 duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-olive-soft text-olive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 rounded-sm border border-border/70 bg-surface px-3.5 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/50" })
									]
								})]
							}) : null]
						}),
						quickReplies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border/70 bg-surface p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: quickReplies.map((reply) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: isTyping,
									onClick: () => handleQuickReply(reply),
									className: "rounded-sm border border-border/70 bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:border-olive hover:text-olive disabled:cursor-not-allowed disabled:opacity-40",
									children: reply
								}, reply))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							onSubmit: handleSubmit,
							className: "border-t border-border/70 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputRef,
									"aria-label": "Type your message",
									value: input,
									onChange: (event) => setInput(event.target.value),
									placeholder: "Type your message…",
									disabled: isTyping,
									className: "h-11 flex-1 rounded-sm border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-olive disabled:opacity-60"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									"aria-label": "Send message",
									disabled: !input.trim() || isTyping,
									className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors hover:bg-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								})]
							})
						})
					]
				})
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "rule-top relative mt-24 overflow-hidden bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-olive/5 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-olive/5 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1.3fr] md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl leading-none",
							children: "Sorrel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted-foreground",
							children: "Slow-made apparel, ceramics and objects. Shipped from the atelier, paid on delivery."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:hello@sorrelgoods.com",
									"aria-label": "Email",
									className: "group flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Email us" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									className: "group flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Follow us on Instagram" })] })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps mb-2 text-muted-foreground",
								children: "Shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "link-underline w-fit",
								children: "All goods"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "textiles" },
								className: "link-underline w-fit",
								children: "Textiles"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "objects" },
								className: "link-underline w-fit",
								children: "Objects"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps mb-2 text-muted-foreground",
								children: "Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/account",
								className: "link-underline w-fit",
								children: "Orders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "link-underline w-fit",
								children: "Sign in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "link-underline w-fit",
								children: "About us"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps mb-2 text-muted-foreground",
								children: "Legal / Trust"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "link-underline w-fit",
								children: "About us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: "link-underline w-fit",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms-conditions",
								className: "link-underline w-fit",
								children: "Terms & Conditions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/refund-policy",
								className: "link-underline w-fit",
								children: "Refund Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cookie-policy",
								className: "link-underline w-fit",
								children: "Cookie Policy"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-sm border border-border/60 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "label-caps mb-3 flex items-center gap-1.5 text-olive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Designed & built by ARCHER" })] }), "Built by ARCHER"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:abdulbasit.alpha25@gmail.com",
										className: "group flex items-center justify-between gap-2 rounded-sm border border-border/60 px-3 py-2.5 text-xs transition-all duration-300 hover:border-olive hover:bg-olive/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-olive shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: "abdulbasit.alpha25@gmail.com"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Get in touch" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://wa.me/923415878569",
										target: "_blank",
										rel: "noreferrer",
										className: "group flex items-center justify-between gap-2 rounded-sm border border-border/60 px-3 py-2.5 text-xs transition-all duration-300 hover:border-olive hover:bg-olive/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-olive shrink-0" }), "+92 341 5878569"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Chat on WhatsApp" })] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[11px] text-muted-foreground",
								children: "Available for remote work worldwide"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rule-top relative mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Sorrel Goods" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cash on delivery · Free shipping over $200" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://abdulbasit-archer.vercel.app/",
						target: "_blank",
						rel: "noreferrer",
						className: "group flex items-center gap-1.5 text-muted-foreground transition-colors duration-300 hover:text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Built with ARCHER" })] }),
							"Powered by ARCHER",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" })
						]
					})
				]
			})
		]
	});
}
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/shop",
		label: "Apparel",
		search: { category: "apparel" }
	},
	{
		to: "/shop",
		label: "Ceramics",
		search: { category: "ceramics" }
	},
	{
		to: "/about",
		label: "Atelier"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const hydrated = useHydrated();
	const lines = useCart((s) => s.lines);
	const user = useAuth((s) => s.user);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const count = hydrated ? lines.reduce((sum, l) => sum + l.qty, 0) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1500px] items-center gap-6 px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle navigation",
					type: "button",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-2xl tracking-tight",
					children: "Sorrel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-6 hidden items-center gap-7 md:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						search: "search" in item ? item.search : {},
						className: cn("label-caps link-underline text-muted-foreground hover:text-foreground", pathname === item.to && "text-foreground"),
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						user?.role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "label-caps hidden text-olive sm:inline",
							children: "Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: user ? "/account" : "/login",
							"aria-label": "Account",
							className: "hover:text-olive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-[18px] w-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "relative hover:text-olive",
							"aria-label": "Cart",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-[18px] w-[18px]" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-2 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-olive px-1 text-[10px] font-medium text-accent-foreground",
								children: count
							})]
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-col gap-3 border-t border-hairline px-5 py-4 md:hidden",
			children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				search: "search" in item ? item.search : {},
				onClick: () => setOpen(false),
				className: "label-caps text-muted-foreground",
				children: item.label
			}, item.label))
		})]
	});
}
function StoreShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatbotWidget, {})
		]
	});
}
//#endregion
export { StoreShell as t };
