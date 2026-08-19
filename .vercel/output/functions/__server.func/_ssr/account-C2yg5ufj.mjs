import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime, i as Slot } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as currency } from "./mock-data-CacGgQ9l.mjs";
import { o as useHydrated, r as useAuth, s as useOrders } from "./store-BPy7gmTA.mjs";
import { D as LogOut, E as Mail, F as Camera, N as ChevronRight, T as MapPin, d as Shield, f as ShieldCheck, i as UserRound, t as X, v as Phone, y as Package } from "../_libs/lucide-react.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as StoreShell } from "./shell-CqSsDW3p.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-C2yg5ufj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
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
