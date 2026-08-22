import shirt from "@/assets/p-linen-shirt.jpg";
import vase from "@/assets/p-vase.jpg";
import throwBlanket from "@/assets/p-throw.jpg";
import tote from "@/assets/p-tote.jpg";
import mugs from "@/assets/p-mugs.jpg";
import sweater from "@/assets/p-sweater.jpg";
import lamp from "@/assets/p-lamp.jpg";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  categorySlug: string;
  stock: number;
  sku: string;
  isActive: boolean;
  rating: number;
  createdAt: string;
};

export type OrderStatus = "Pending" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled";

export type OrderItem = { productId: string; name: string; qty: number; priceAtPurchase: number };

export type Order = {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  shippingAddress: string;
  status: OrderStatus;
  totalAmount: number;
  paymentMethod: "COD";
  paid: boolean;
  notes?: string | undefined;
  statusHistory: { status: OrderStatus; at: string }[];
  createdAt: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  city: string;
  createdAt: string;
};

export const categories: Category[] = [
  { id: "c1", name: "Apparel", slug: "apparel", description: "Slow-made everyday pieces." },
  { id: "c2", name: "Ceramics", slug: "ceramics", description: "Wheel-thrown stoneware." },
  {
    id: "c3",
    name: "Textiles",
    slug: "textiles",
    description: "Natural fibre goods for the home.",
  },
  { id: "c4", name: "Objects", slug: "objects", description: "Lighting, leather and small goods." },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Oversized Linen Shirt",
    slug: "oversized-linen-shirt",
    description:
      "Cut from washed European linen with a relaxed shoulder and a single patch pocket. Softens with every wear.",
    price: 148,
    image: shirt,
    categorySlug: "apparel",
    stock: 24,
    sku: "SRL-AP-001",
    isActive: true,
    rating: 4.8,
    createdAt: "2026-02-11",
  },
  {
    id: "p2",
    name: "Olive Stoneware Vase",
    slug: "olive-stoneware-vase",
    description:
      "Thrown by hand and finished in a matte olive glaze. Each piece varies slightly in tone and height.",
    price: 96,
    image: vase,
    categorySlug: "ceramics",
    stock: 7,
    sku: "SRL-CE-014",
    isActive: true,
    rating: 4.9,
    createdAt: "2026-03-02",
  },
  {
    id: "p3",
    name: "Fringed Wool Throw",
    slug: "fringed-wool-throw",
    description:
      "Waffle-woven lambswool with hand-knotted fringe. Woven in a family mill in Portugal.",
    price: 220,
    image: throwBlanket,
    categorySlug: "textiles",
    stock: 3,
    sku: "SRL-TX-007",
    isActive: true,
    rating: 4.7,
    createdAt: "2026-01-19",
  },
  {
    id: "p4",
    name: "Everyday Leather Tote",
    slug: "everyday-leather-tote",
    description:
      "Vegetable-tanned leather, unlined, with a structured base. Ages into a deep patina.",
    price: 310,
    image: tote,
    categorySlug: "objects",
    stock: 12,
    sku: "SRL-OB-021",
    isActive: true,
    rating: 4.6,
    createdAt: "2026-02-27",
  },
  {
    id: "p5",
    name: "Cream Mug, Pair",
    slug: "cream-mug-pair",
    description: "A pair of softly rounded mugs in a satin cream glaze. Dishwasher safe.",
    price: 64,
    image: mugs,
    categorySlug: "ceramics",
    stock: 41,
    sku: "SRL-CE-002",
    isActive: true,
    rating: 4.5,
    createdAt: "2026-03-14",
  },
  {
    id: "p6",
    name: "Heavyweight Knit Sweater",
    slug: "heavyweight-knit-sweater",
    description: "Chunky organic cotton knit with ribbed cuffs and a dropped shoulder.",
    price: 185,
    image: sweater,
    categorySlug: "apparel",
    stock: 0,
    sku: "SRL-AP-030",
    isActive: true,
    rating: 4.8,
    createdAt: "2026-01-08",
  },
  {
    id: "p7",
    name: "Brass & Walnut Lamp",
    slug: "brass-walnut-lamp",
    description: "A domed brass shade over a turned walnut column. Warm, low, and even light.",
    price: 275,
    image: lamp,
    categorySlug: "objects",
    stock: 9,
    sku: "SRL-OB-005",
    isActive: true,
    rating: 4.9,
    createdAt: "2026-02-05",
  },
];

export const customers: Customer[] = [
  {
    id: "u1",
    name: "Amara Osei",
    email: "amara@example.com",
    city: "Lisbon",
    createdAt: "2026-01-04",
  },
  {
    id: "u2",
    name: "Jonas Neff",
    email: "jonas@example.com",
    city: "Berlin",
    createdAt: "2026-01-22",
  },
  {
    id: "u3",
    name: "Mira Haddad",
    email: "mira@example.com",
    city: "Beirut",
    createdAt: "2026-02-09",
  },
  {
    id: "u4",
    name: "Elena Rossi",
    email: "elena@example.com",
    city: "Milan",
    createdAt: "2026-02-18",
  },
  {
    id: "u5",
    name: "Sam Okafor",
    email: "sam@example.com",
    city: "Lagos",
    createdAt: "2026-03-01",
  },
  {
    id: "u6",
    name: "Rina Sato",
    email: "rina@example.com",
    city: "Kyoto",
    createdAt: "2026-03-20",
  },
];

const statuses: OrderStatus[] = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];

function makeOrder(i: number): Order {
  const customer = customers[i % customers.length]!;
  const product = products[i % products.length]!;
  const second = products[(i + 3) % products.length]!;
  const qty = (i % 3) + 1;
  const items: OrderItem[] = [
    { productId: product.id, name: product.name, qty, priceAtPurchase: product.price },
  ];
  if (i % 2 === 0) {
    items.push({ productId: second.id, name: second.name, qty: 1, priceAtPurchase: second.price });
  }
  const total = items.reduce((sum, item) => sum + item.priceAtPurchase * item.qty, 0);
  const status = statuses[i % statuses.length]!;
  const day = ((i * 3) % 27) + 1;
  const createdAt = `2026-0${(i % 3) + 1}-${String(day).padStart(2, "0")}`;
  return {
    id: `SRL-${2400 + i}`,
    customerId: customer.id,
    customerName: customer.name,
    customerEmail: customer.email,
    items,
    shippingAddress: `${12 + i} Rua das Flores, ${customer.city}`,
    status,
    totalAmount: total,
    paymentMethod: "COD",
    paid: status === "Delivered",
    notes: i % 4 === 0 ? "Please leave with the concierge." : undefined,
    statusHistory: [
      { status: "Pending", at: createdAt },
      ...(status !== "Pending" ? [{ status, at: createdAt }] : []),
    ],
    createdAt,
  };
}

export const orders: Order[] = Array.from({ length: 18 }, (_, i) => makeOrder(i));

export const salesByMonth = [
  { month: "Oct", orders: 42, revenue: 7420 },
  { month: "Nov", orders: 61, revenue: 11380 },
  { month: "Dec", orders: 94, revenue: 19260 },
  { month: "Jan", orders: 73, revenue: 14110 },
  { month: "Feb", orders: 88, revenue: 17640 },
  { month: "Mar", orders: 105, revenue: 22890 },
];

export const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
