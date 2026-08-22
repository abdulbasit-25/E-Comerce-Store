import { o as __toESM$1 } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { o as useHydrated, r as useAuth, s as useOrders } from "./store-BPy7gmTA.mjs";
import { D as LogOut, E as Mail, F as Camera, N as ChevronRight, T as MapPin, d as Shield, f as ShieldCheck, i as UserRound, t as X, v as Phone, y as Package } from "../_libs/lucide-react.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-XN3klzgQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as styleSingleton } from "../_libs/react-style-singleton.mjs";
import { _ as useControllableState, a as Portal$1, b as useLayoutEffect2, c as Slot$1, f as composeEventHandlers, g as useComposedRefs, h as useCallbackRef$1, i as DismissableLayer, m as createSlot, o as Presence, p as createContextScope, s as Primitive, v as useDismissableLayerSurface, y as useId } from "./router-BnrWabjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BKdSbcYv.js
var import_react = /* @__PURE__ */ __toESM$1(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __create = Object.create;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp$4(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp$4(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var items = [
	{
		id: "overview",
		label: "Profile",
		icon: UserRound
	},
	{
		id: "orders",
		label: "Orders",
		icon: Package
	},
	{
		id: "addresses",
		label: "Addresses",
		icon: MapPin
	},
	{
		id: "security",
		label: "Security",
		icon: Shield
	}
];
function AccountNav({ active, onChange, onSignOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Account sections",
		className: "flex gap-2 overflow-x-auto border-b border-hairline pb-2 lg:block lg:space-y-1 lg:border-0 lg:pb-0",
		children: [items.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange(id),
			className: cn("label-caps inline-flex shrink-0 items-center gap-3 px-3 py-3 text-left transition-colors lg:flex lg:w-full", active === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				strokeWidth: 1.5
			}), label]
		}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onSignOut,
			className: "label-caps inline-flex shrink-0 items-center gap-3 px-3 py-3 text-left text-muted-foreground transition-colors hover:text-destructive lg:mt-8 lg:flex lg:w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
				size: 16,
				strokeWidth: 1.5
			}), "Sign out"]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot$1 : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, setContainer);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$3(handleFocusIn2, "handleFocusIn");
			__name$3(handleFocusOut2, "handleFocusOut");
			__name$3(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$3(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$3(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$3((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$3(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$3(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$3(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$3(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$3(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$3(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$3(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$3(removeLinks, "removeLinks");
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$2(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$2(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$2(createFocusGuard, "createFocusGuard");
var { __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension } = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	/******************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __esDecorate;
	var __runInitializers;
	var __propKey;
	var __setFunctionName;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __spreadArrays;
	var __spreadArray;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	var __classPrivateFieldGet;
	var __classPrivateFieldSet;
	var __classPrivateFieldIn;
	var __createBinding;
	var __addDisposableResource;
	var __disposeResources;
	var __rewriteRelativeImportExtension;
	(function(factory) {
		var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
		if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(exports$1) {
			factory(createExporter(root, createExporter(exports$1)));
		});
		else if (typeof module === "object" && typeof module.exports === "object") factory(createExporter(root, createExporter(module.exports)));
		else factory(createExporter(root));
		function createExporter(exports$2, previous) {
			if (exports$2 !== root) {
				if (typeof Object.create === "function") Object.defineProperty(exports$2, "__esModule", { value: true });
				else exports$2.__esModule = true;
			}
			return function(id, v) {
				return exports$2[id] = previous ? previous(id, v) : v;
			};
		}
	})(function(exporter) {
		var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		__extends = function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		__rest = function(s, e) {
			var t = {};
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
			if (s != null && typeof Object.getOwnPropertySymbols === "function") {
				for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
			}
			return t;
		};
		__decorate = function(decorators, target, key, desc) {
			var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
			if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
			else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
			return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		__param = function(paramIndex, decorator) {
			return function(target, key) {
				decorator(target, key, paramIndex);
			};
		};
		__esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
			function accept(f) {
				if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
				return f;
			}
			var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
			var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
			var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
			var _, done = false;
			for (var i = decorators.length - 1; i >= 0; i--) {
				var context = {};
				for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
				for (var p in contextIn.access) context.access[p] = contextIn.access[p];
				context.addInitializer = function(f) {
					if (done) throw new TypeError("Cannot add initializers after decoration has completed");
					extraInitializers.push(accept(f || null));
				};
				var result = (0, decorators[i])(kind === "accessor" ? {
					get: descriptor.get,
					set: descriptor.set
				} : descriptor[key], context);
				if (kind === "accessor") {
					if (result === void 0) continue;
					if (result === null || typeof result !== "object") throw new TypeError("Object expected");
					if (_ = accept(result.get)) descriptor.get = _;
					if (_ = accept(result.set)) descriptor.set = _;
					if (_ = accept(result.init)) initializers.unshift(_);
				} else if (_ = accept(result)) {
					if (kind === "field") initializers.unshift(_);
					else descriptor[key] = _;
				}
			}
			if (target) Object.defineProperty(target, contextIn.name, descriptor);
			done = true;
		};
		__runInitializers = function(thisArg, initializers, value) {
			var useValue = arguments.length > 2;
			for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
			return useValue ? value : void 0;
		};
		__propKey = function(x) {
			return typeof x === "symbol" ? x : "".concat(x);
		};
		__setFunctionName = function(f, name, prefix) {
			if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
			return Object.defineProperty(f, "name", {
				configurable: true,
				value: prefix ? "".concat(prefix, " ", name) : name
			});
		};
		__metadata = function(metadataKey, metadataValue) {
			if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
		};
		__awaiter = function(thisArg, _arguments, P, generator) {
			function adopt(value) {
				return value instanceof P ? value : new P(function(resolve) {
					resolve(value);
				});
			}
			return new (P || (P = Promise))(function(resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch (e) {
						reject(e);
					}
				}
				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch (e) {
						reject(e);
					}
				}
				function step(result) {
					result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
				}
				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
		};
		__generator = function(thisArg, body) {
			var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: []
			}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
			return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
				return this;
			}), g;
			function verb(n) {
				return function(v) {
					return step([n, v]);
				};
			}
			function step(op) {
				if (f) throw new TypeError("Generator is already executing.");
				while (g && (g = 0, op[0] && (_ = 0)), _) try {
					if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
					if (y = 0, t) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return {
								value: op[1],
								done: false
							};
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
				if (op[0] & 5) throw op[1];
				return {
					value: op[0] ? op[1] : void 0,
					done: true
				};
			}
		};
		__exportStar = function(m, o) {
			for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
		};
		__createBinding = Object.create ? (function(o, m, k, k2) {
			if (k2 === void 0) k2 = k;
			var desc = Object.getOwnPropertyDescriptor(m, k);
			if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
				enumerable: true,
				get: function() {
					return m[k];
				}
			};
			Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
			if (k2 === void 0) k2 = k;
			o[k2] = m[k];
		});
		__values = function(o) {
			var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
			if (m) return m.call(o);
			if (o && typeof o.length === "number") return { next: function() {
				if (o && i >= o.length) o = void 0;
				return {
					value: o && o[i++],
					done: !o
				};
			} };
			throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
		};
		__read = function(o, n) {
			var m = typeof Symbol === "function" && o[Symbol.iterator];
			if (!m) return o;
			var i = m.call(o), r, ar = [], e;
			try {
				while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
			} catch (error) {
				e = { error };
			} finally {
				try {
					if (r && !r.done && (m = i["return"])) m.call(i);
				} finally {
					if (e) throw e.error;
				}
			}
			return ar;
		};
		/** @deprecated */
		__spread = function() {
			for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
			return ar;
		};
		/** @deprecated */
		__spreadArrays = function() {
			for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
			for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
			return r;
		};
		__spreadArray = function(to, from, pack) {
			if (pack || arguments.length === 2) {
				for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
			return to.concat(ar || Array.prototype.slice.call(from));
		};
		__await = function(v) {
			return this instanceof __await ? (this.v = v, this) : new __await(v);
		};
		__asyncGenerator = function(thisArg, _arguments, generator) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var g = generator.apply(thisArg, _arguments || []), i, q = [];
			return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
				return this;
			}, i;
			function awaitReturn(f) {
				return function(v) {
					return Promise.resolve(v).then(f, reject);
				};
			}
			function verb(n, f) {
				if (g[n]) {
					i[n] = function(v) {
						return new Promise(function(a, b) {
							q.push([
								n,
								v,
								a,
								b
							]) > 1 || resume(n, v);
						});
					};
					if (f) i[n] = f(i[n]);
				}
			}
			function resume(n, v) {
				try {
					step(g[n](v));
				} catch (e) {
					settle(q[0][3], e);
				}
			}
			function step(r) {
				r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
			}
			function fulfill(value) {
				resume("next", value);
			}
			function reject(value) {
				resume("throw", value);
			}
			function settle(f, v) {
				if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
			}
		};
		__asyncDelegator = function(o) {
			var i, p;
			return i = {}, verb("next"), verb("throw", function(e) {
				throw e;
			}), verb("return"), i[Symbol.iterator] = function() {
				return this;
			}, i;
			function verb(n, f) {
				i[n] = o[n] ? function(v) {
					return (p = !p) ? {
						value: __await(o[n](v)),
						done: false
					} : f ? f(v) : v;
				} : f;
			}
		};
		__asyncValues = function(o) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var m = o[Symbol.asyncIterator], i;
			return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
				return this;
			}, i);
			function verb(n) {
				i[n] = o[n] && function(v) {
					return new Promise(function(resolve, reject) {
						v = o[n](v), settle(resolve, reject, v.done, v.value);
					});
				};
			}
			function settle(resolve, reject, d, v) {
				Promise.resolve(v).then(function(v) {
					resolve({
						value: v,
						done: d
					});
				}, reject);
			}
		};
		__makeTemplateObject = function(cooked, raw) {
			if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
			else cooked.raw = raw;
			return cooked;
		};
		var __setModuleDefault = Object.create ? (function(o, v) {
			Object.defineProperty(o, "default", {
				enumerable: true,
				value: v
			});
		}) : function(o, v) {
			o["default"] = v;
		};
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		__importStar = function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
		__importDefault = function(mod) {
			return mod && mod.__esModule ? mod : { "default": mod };
		};
		__classPrivateFieldGet = function(receiver, state, kind, f) {
			if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
			if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
			return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
		};
		__classPrivateFieldSet = function(receiver, state, value, kind, f) {
			if (kind === "m") throw new TypeError("Private method is not writable");
			if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
			if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
			return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
		};
		__classPrivateFieldIn = function(state, receiver) {
			if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
			return typeof state === "function" ? receiver === state : state.has(receiver);
		};
		__addDisposableResource = function(env, value, async) {
			if (value !== null && value !== void 0) {
				if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
				var dispose, inner;
				if (async) {
					if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
					dispose = value[Symbol.asyncDispose];
				}
				if (dispose === void 0) {
					if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
					dispose = value[Symbol.dispose];
					if (async) inner = dispose;
				}
				if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
				if (inner) dispose = function() {
					try {
						inner.call(this);
					} catch (e) {
						return Promise.reject(e);
					}
				};
				env.stack.push({
					value,
					dispose,
					async
				});
			} else if (async) env.stack.push({ async: true });
			return value;
		};
		var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
			var e = new Error(message);
			return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
		};
		__disposeResources = function(env) {
			function fail(e) {
				env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
				env.hasError = true;
			}
			var r, s = 0;
			function next() {
				while (r = env.stack.pop()) try {
					if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
					if (r.dispose) {
						var result = r.dispose.call(r.value);
						if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
							fail(e);
							return next();
						});
					} else s |= 1;
				} catch (e) {
					fail(e);
				}
				if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
				if (env.hasError) throw env.error;
			}
			return next();
		};
		__rewriteRelativeImportExtension = function(path, preserveJsx) {
			if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
				return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
			});
			return path;
		};
		exporter("__extends", __extends);
		exporter("__assign", __assign);
		exporter("__rest", __rest);
		exporter("__decorate", __decorate);
		exporter("__param", __param);
		exporter("__esDecorate", __esDecorate);
		exporter("__runInitializers", __runInitializers);
		exporter("__propKey", __propKey);
		exporter("__setFunctionName", __setFunctionName);
		exporter("__metadata", __metadata);
		exporter("__awaiter", __awaiter);
		exporter("__generator", __generator);
		exporter("__exportStar", __exportStar);
		exporter("__createBinding", __createBinding);
		exporter("__values", __values);
		exporter("__read", __read);
		exporter("__spread", __spread);
		exporter("__spreadArrays", __spreadArrays);
		exporter("__spreadArray", __spreadArray);
		exporter("__await", __await);
		exporter("__asyncGenerator", __asyncGenerator);
		exporter("__asyncDelegator", __asyncDelegator);
		exporter("__asyncValues", __asyncValues);
		exporter("__makeTemplateObject", __makeTemplateObject);
		exporter("__importStar", __importStar);
		exporter("__importDefault", __importDefault);
		exporter("__classPrivateFieldGet", __classPrivateFieldGet);
		exporter("__classPrivateFieldSet", __classPrivateFieldSet);
		exporter("__classPrivateFieldIn", __classPrivateFieldIn);
		exporter("__addDisposableResource", __addDisposableResource);
		exporter("__disposeResources", __disposeResources);
		exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
	});
	0 && (module.exports = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__esDecorate,
		__runInitializers,
		__propKey,
		__setFunctionName,
		__metadata,
		__awaiter,
		__generator,
		__exportStar,
		__createBinding,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources,
		__rewriteRelativeImportExtension
	});
})))())).default;
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
var effectCar = createSidecarMedium();
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name$1((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name$1((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const registerDismissableSurface = useDismissableLayerSurface();
	const composedRefs = useComposedRefs(forwardedRef, registerDismissableSurface);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var TITLE_NAME = "DialogTitle";
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState(open) {
	return open ? "open" : "closed";
}
__name$1(getState, "getState");
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var steps = [
	"Pending",
	"Confirmed",
	"Shipped",
	"Delivered"
];
function OrderList({ orders }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	if (orders.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "rounded-none border-dashed shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col items-center px-6 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
					size: 28,
					strokeWidth: 1.2,
					className: "text-olive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-3xl",
					children: "No orders yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-sm text-sm text-muted-foreground",
					children: "Your order history will appear here after your first purchase."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Start shopping"
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderCard, {
			order,
			onView: () => setSelected(order)
		}, order.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(selected),
			onOpenChange: (open) => !open && setSelected(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-h-[90vh] overflow-y-auto",
				children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderDetails, { order: selected })
			})
		})]
	});
}
function OrderCard({ order, onView }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "rounded-none shadow-none transition-colors hover:bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "p-5 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: order.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						formatDate(order.createdAt),
						" · ",
						order.items.reduce((sum, item) => sum + item.qty, 0),
						" ",
						"items"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: order.status })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-hairline pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: order.items.map((item) => item.name).join(", ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm",
					children: order.paid ? "Paid" : "Cash on delivery"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg",
						children: currency(order.totalAmount)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: onView,
						children: ["View order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 15 })]
					})]
				})]
			})]
		})
	});
}
function OrderDetails({ order }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: "font-display text-3xl",
		children: order.id
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
		"Placed ",
		formatDate(order.createdAt),
		" · ",
		order.paid ? "Paid" : "Cash on delivery"
	] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 text-sm",
		children: [
			order.status !== "Cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex gap-1",
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-1 flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1", steps.indexOf(order.status) >= steps.indexOf(step) ? "bg-olive" : "bg-hairline") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-caps text-muted-foreground",
						children: step
					})]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						item.name,
						" × ",
						item.qty
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currency(item.priceAtPurchase * item.qty) })]
				}, item.productId))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-2 border-t border-hairline pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: currency(order.totalAmount) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: currency(order.totalAmount) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l-2 border-olive bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-caps text-muted-foreground",
					children: "Shipping to"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: order.shippingAddress
				})]
			})
		]
	})] });
}
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("label-caps border px-2 py-1", status === "Delivered" ? "border-olive text-olive" : status === "Cancelled" ? "border-destructive text-destructive" : "border-hairline text-muted-foreground"),
		children: status
	});
}
function formatDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).format(/* @__PURE__ */ new Date(`${date}T00:00:00`));
}
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var STATIC_IMAGE_COUNT_STATE = [0, () => void 0];
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function Avatar2(props, forwardedRef) {
	const { __scopeAvatar, ...avatarProps } = props;
	const [imageLoadingStatus, setImageLoadingStatus] = import_react.useState("idle");
	const [imageCount, setImageCount] = useImageCount();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
		scope: __scopeAvatar,
		imageLoadingStatus,
		setImageLoadingStatus,
		imageCount,
		setImageCount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			...avatarProps,
			ref: forwardedRef
		})
	});
}, "Avatar"));
var IMAGE_NAME = "AvatarImage";
var AvatarImage$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AvatarImage2(props, forwardedRef) {
	const { __scopeAvatar, src, onLoadingStatusChange, ...imageProps } = props;
	const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
	context.setImageCount;
	const imageLoadingStatus = useImageLoadingStatus(src, {
		referrerPolicy: imageProps.referrerPolicy,
		crossOrigin: imageProps.crossOrigin,
		loadingStatus: context.imageLoadingStatus,
		setLoadingStatus: context.setImageLoadingStatus
	});
	const handleLoadingStatusChange = useCallbackRef$1((status) => {
		onLoadingStatusChange?.(status);
	});
	const loadingStatusRef = import_react.useRef(imageLoadingStatus);
	useLayoutEffect2(() => {
		const previousLoadingStatus = loadingStatusRef.current;
		loadingStatusRef.current = imageLoadingStatus;
		if (imageLoadingStatus !== previousLoadingStatus) handleLoadingStatusChange(imageLoadingStatus);
	}, [imageLoadingStatus, handleLoadingStatusChange]);
	return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.img, {
		...imageProps,
		ref: forwardedRef,
		src
	}) : null;
}, "AvatarImage"));
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AvatarFallback2(props, forwardedRef) {
	const { __scopeAvatar, delayMs, ...fallbackProps } = props;
	const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
	const [canRender, setCanRender] = import_react.useState(delayMs === void 0);
	import_react.useEffect(() => {
		if (delayMs !== void 0) {
			const timerId = window.setTimeout(() => setCanRender(true), delayMs);
			return () => window.clearTimeout(timerId);
		}
	}, [delayMs]);
	return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...fallbackProps,
		ref: forwardedRef
	}) : null;
}, "AvatarFallback"));
function useImageLoadingStatus(src, { loadingStatus, setLoadingStatus, referrerPolicy, crossOrigin }) {
	useLayoutEffect2(() => {
		if (!src) {
			setLoadingStatus("error");
			return;
		}
		const image = new window.Image();
		const handleLoad = /* @__PURE__ */ __name((event) => {
			const image2 = event.currentTarget;
			setLoadingStatus(getImageLoadingStatus(image2));
		}, "handleLoad");
		const handleError = /* @__PURE__ */ __name(() => setLoadingStatus("error"), "handleError");
		image.addEventListener("load", handleLoad);
		image.addEventListener("error", handleError);
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		image.crossOrigin = crossOrigin ?? null;
		image.src = src;
		setLoadingStatus(getImageLoadingStatus(image));
		return () => {
			image.removeEventListener("load", handleLoad);
			image.removeEventListener("error", handleError);
			setLoadingStatus("idle");
		};
	}, [
		src,
		crossOrigin,
		referrerPolicy,
		setLoadingStatus
	]);
	return loadingStatus;
}
__name(useImageLoadingStatus, "useImageLoadingStatus");
function getImageLoadingStatus(image) {
	return image.complete ? image.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
__name(getImageLoadingStatus, "getImageLoadingStatus");
function useImageCount() {
	return STATIC_IMAGE_COUNT_STATE;
}
__name(useImageCount, "useImageCount");
function useUpdateImageCount(setImageCount) {}
__name(useUpdateImageCount, "useUpdateImageCount");
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
function initials(name) {
	return name.split(" ").map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function ProfilePanel({ user, onSave }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(user.name);
	const [phone, setPhone] = (0, import_react.useState)(user.phone ?? "");
	const [avatarUrl, setAvatarUrl] = (0, import_react.useState)(user.avatarUrl ?? "");
	const fileInput = (0, import_react.useRef)(null);
	const save = (event) => {
		event.preventDefault();
		if (!name.trim()) {
			toast.error("Name is required");
			return;
		}
		onSave({
			name: name.trim(),
			email: user.email,
			phone: phone.trim(),
			avatarUrl
		});
		setEditing(false);
		toast.success("Profile updated");
	};
	const chooseAvatar = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Choose an image file");
			return;
		}
		const reader = new FileReader();
		reader.addEventListener("load", () => setAvatarUrl(String(reader.result)));
		reader.readAsDataURL(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden rounded-none shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-olive-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "relative px-6 pb-6 pt-0 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
						className: "-mt-12 h-24 w-24 border-4 border-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: user.avatarUrl,
							alt: ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-primary text-xl text-primary-foreground",
							children: initials(user.name)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-caps text-olive",
								children: "Personal profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-4xl",
								children: user.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: user.email
							}),
							user.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: user.phone
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => setEditing((value) => !value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 16 }), editing ? "Close editor" : "Edit profile"]
						})]
					})]
				})]
			}),
			editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-none shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Personal information" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Keep your contact details current for delivery updates." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: save,
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
							label: "Full name",
							value: name,
							onChange: setName,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 15 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
							label: "Email",
							value: user.email,
							onChange: () => void 0,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 15 }),
							readOnly: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
							label: "Phone",
							type: "tel",
							value: phone,
							onChange: setPhone,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 15 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInput,
									type: "file",
									accept: "image/*",
									onChange: chooseAvatar,
									className: "sr-only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => fileInput.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 16 }), "Choose photo"]
								}),
								avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAvatarUrl(""),
									className: "text-xs text-muted-foreground underline underline-offset-4",
									children: "Remove"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Save changes"
							})
						})
					]
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTile, {
						label: "Account type",
						value: user.role === "admin" ? "Administrator" : "Customer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTile, {
						label: "Email status",
						value: "Verified at sign in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTile, {
						label: "Profile photo",
						value: avatarUrl ? "Added" : "Initials avatar"
					})
				]
			})
		]
	});
}
function ProfileField({ label, value, onChange, icon, type = "text", readOnly = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "label-caps text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-2 flex items-center gap-2 border-b border-hairline py-2 focus-within:border-olive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type,
				value,
				readOnly,
				onChange: (event) => onChange(event.target.value),
				className: "min-w-0 flex-1 bg-transparent text-sm outline-none read-only:text-muted-foreground"
			})]
		})]
	});
}
function InfoTile({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-l-2 border-olive bg-surface px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label-caps text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm",
			children: value
		})]
	});
}
function AccountPage() {
	const hydrated = useHydrated();
	const user = useAuth((state) => state.user);
	const updateProfile = useAuth((state) => state.updateProfile);
	const signOut = useAuth((state) => state.signOut);
	const orders = useOrders((state) => state.orders);
	const navigate = useNavigate();
	const [section, setSection] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		if (hydrated && user?.role === "admin") navigate({ to: "/admin" });
	}, [
		hydrated,
		user,
		navigate
	]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountLoading, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-24 md:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-olive",
				children: "My account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-5xl md:text-7xl",
				children: "A place for your orders."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-md text-muted-foreground",
				children: "Sign in to manage your profile and follow every delivery."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					children: "Sign in"
				})
			})
		]
	}) });
	const myOrders = orders.filter((order) => order.customerId === user.id || order.customerEmail.toLowerCase() === user.email.toLowerCase());
	const latestAddress = myOrders[0]?.shippingAddress;
	const handleSignOut = () => {
		signOut();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-12 md:px-10 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-hairline pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-caps text-olive",
				children: "Account space"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl md:text-7xl",
					children: "My account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-lg text-muted-foreground",
					children: [
						"Welcome back, ",
						user.name.split(" ")[0],
						". Keep your details and deliveries close."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label-caps text-muted-foreground",
					children: [
						myOrders.length,
						" ",
						myOrders.length === 1 ? "order" : "orders"
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountNav, {
				active: section,
				onChange: setSection,
				onSignOut: handleSignOut
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0",
				children: [
					section === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePanel, {
						user,
						onSave: updateProfile
					}),
					section === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSectionHeader, {
						eyebrow: "Your history",
						title: "Orders",
						description: "Follow your recent purchases from confirmation to delivery."
					}),
					section === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderList, { orders: myOrders })
					}),
					section === "addresses" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressesSection, {
						address: latestAddress,
						name: user.name
					}),
					section === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecuritySection, { email: user.email })
				]
			})]
		})]
	}) });
}
function AccountLoading() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1500px] px-5 py-16 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-56 animate-pulse bg-surface-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-48 animate-pulse bg-surface-2" })]
	}) });
}
function AccountSectionHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label-caps text-olive",
			children: eyebrow
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 text-5xl",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-lg text-sm text-muted-foreground",
			children: description
		})
	] });
}
function AddressesSection({ address, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSectionHeader, {
		eyebrow: "Delivery details",
		title: "Addresses",
		description: "Your latest delivery address is kept with the order it belongs to."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mt-6 max-w-xl rounded-none shadow-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex-row items-center justify-between space-y-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: "Most recent delivery"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
				size: 18,
				className: "text-olive"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: address ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: address
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-xs text-muted-foreground",
				children: "Saved addresses are managed per order at checkout."
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg",
					children: "No delivery address yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Your address will appear here after your first order."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Start shopping"
					})
				})
			]
		}) })]
	})] });
}
function SecuritySection({ email }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSectionHeader, {
		eyebrow: "Account protection",
		title: "Security",
		description: "Your account is protected by the sign-in system already connected to Sorrel."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "mt-6 max-w-xl rounded-none shadow-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex items-start gap-4 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
				size: 22,
				className: "mt-1 text-olive"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg",
				children: "Password protected"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					"Signed in as ",
					email,
					". Password changes are handled through the existing authentication flow."
				]
			})] })]
		})
	})] });
}
//#endregion
export { AccountPage as component };
