import { categories, orders, products, type Product } from "@/lib/mock-data";

export type ChatbotProductCard = {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
};

export type ChatbotReply = {
  text: string;
  quickReplies: string[];
  productCards?: ChatbotProductCard[];
  awaitOrderNumber?: boolean;
  clearContext?: boolean;
};

export const chatbotConfig = {
  storeName: "Sorrel",
  support: {
    email: "hello@sorrelgoods.com",
    phone: "+92 341 5878569",
    hours: "Monday to Friday, 9:00 AM to 6:00 PM",
    contactPage: "/about",
  },
  shipping: {
    estimatedDays: "3-7 business days",
    cost: "Shipping charges depend on your location and order total.",
  },
  paymentMethods: ["Cash on Delivery"],
  returnPolicyLink: "/terms-conditions",
  shopLink: "/shop",
  cartLink: "/cart",
  accountLink: "/account",
};

export const chatbotFaqs = [
  {
    question: "How long does shipping take?",
    keywords: ["shipping", "delivery", "deliver", "how long", "delivery time", "shipping time", "when will it arrive"],
    answer:
      "Orders are normally delivered within 3-7 business days. Shipping charges depend on your location and order total.",
  },
  {
    question: "What is your return policy?",
    keywords: ["return", "refund", "exchange", "replace item", "wrong product", "damaged product"],
    answer:
      "Our return policy is described in our Terms & Conditions and is applied to eligible items according to the information in that policy.",
  },
  {
    question: "What payment methods do you accept?",
    keywords: ["payment", "pay", "credit card", "debit card", "cash", "cash on delivery", "cod", "paypal"],
    answer: "We currently accept Cash on Delivery and order payments in line with the options available at checkout.",
  },
  {
    question: "How do I track my order?",
    keywords: ["track order", "track my order", "where is my order", "where is my package", "order status", "track my package"],
    answer: "You can track an order by entering your order number in the chat. Please provide the order number and we’ll check it.",
  },
];

export function normalizeInput(raw: string) {
  if (!raw) return "";

  return raw
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function hasAnyKeyword(input: string, keywords: string[]) {
  return keywords.some((keyword) => input.includes(keyword));
}

export function validateOrderNumber(raw: string) {
  const value = raw.trim().toUpperCase();
  if (!value) return null;

  const good = /^[A-Z]{2,5}-?\d{3,8}$/i.test(value) || /^SRL-\d+$/i.test(value) || /^ORD-\d+$/i.test(value);

  return good ? value.replace(/\s+/g, "") : null;
}

export function findOrderByNumber(raw: string) {
  const value = validateOrderNumber(raw);
  if (!value) return null;

  return orders.find((order) => order.id.toUpperCase() === value.toUpperCase()) ?? null;
}

export function findProductMatches(query: string, maxResults = 3) {
  const normalized = normalizeInput(query);
  if (!normalized) return [];

  const tokens = normalized.split(" ").filter((word) => word.length > 2);
  const directMatches: Product[] = [];

  for (const product of products) {
    const haystack = `${product.name} ${product.slug} ${product.categorySlug} ${product.description}`.toLowerCase();
    if (tokens.some((token) => haystack.includes(token))) {
      directMatches.push(product);
    }
  }

  if (directMatches.length > 0) {
    return directMatches.slice(0, maxResults);
  }

  const categoryMap: Record<string, string> = {
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
    objects: "objects",
  };

  const categoryKey = Object.keys(categoryMap).find((key) => normalized.includes(key));
  if (categoryKey) {
    const matchCategory = categoryMap[categoryKey];
    return products.filter((product) => product.categorySlug === matchCategory).slice(0, maxResults);
  }

  const fallbackByName = products.filter((product) => {
    const name = product.name.toLowerCase();
    return ["linen", "stoneware", "throw", "tote", "mug", "sweater", "lamp"].some((term) => name.includes(term));
  });

  return fallbackByName.slice(0, maxResults);
}

export function findPriceMatches(query: string, maxResults = 3) {
  const normalized = normalizeInput(query);
  const maxValueMatch = normalized.match(/under\s*(\d+)|below\s*(\d+)|less than\s*(\d+)|under\s*\$?(\d+)/i);
  const numericMax = maxValueMatch ? Number(maxValueMatch[1] ?? maxValueMatch[2] ?? maxValueMatch[3] ?? maxValueMatch[4]) : null;

  if (numericMax !== null) {
    return products.filter((product) => product.price <= numericMax).slice(0, maxResults);
  }

  const hasPriceKeyword = hasAnyKeyword(normalized, ["price", "how much", "cost", "cheap", "budget", "affordable"]);
  if (!hasPriceKeyword) return [];

  return products.filter((product) => product.price <= 200).slice(0, maxResults);
}

export function getFaqAnswer(input: string) {
  const normalized = normalizeInput(input);
  return chatbotFaqs.find((faq) => hasAnyKeyword(normalized, faq.keywords)) ?? null;
}

export function buildChatbotReply(input: string, awaitingOrderNumber = false): ChatbotReply {
  const normalized = normalizeInput(input);

  if (!normalized) {
    return {
      text: "Please type a question or choose one of the options below.",
      quickReplies: ["Browse Products", "Track Order", "Shipping", "Returns", "Payments", "FAQ", "Contact Support"],
    };
  }

  if (awaitingOrderNumber) {
    const orderNumber = validateOrderNumber(normalized);

    if (!orderNumber) {
      return {
        text: "I couldn't read that order number. Please enter a valid order number, for example SRL-2401 or ORD-12345.",
        quickReplies: ["Track Order", "Back to Main Menu"],
      };
    }

    const order = findOrderByNumber(orderNumber);
    if (!order) {
      return {
        text: "I couldn't find an order with that number. Please check the order number and try again.",
        quickReplies: ["Track Order", "Back to Main Menu"],
      };
    }

    const orderLabel = order.items.map((item) => item.name).join(", ");
    return {
      text: `Order #${order.id}\n\nStatus: ${order.status}\nItems: ${orderLabel}\nCustomer: ${order.customerName}\nShipping address: ${order.shippingAddress}`,
      quickReplies: ["Track Order", "Browse Products", "Shipping", "Back to Main Menu"],
    };
  }

  if (hasAnyKeyword(normalized, ["track order", "track my order", "where is my order", "where is my package", "track my package", "order status", "status of my order"])) {
    return {
      text: "Sure! Please enter your order number.",
      quickReplies: ["Back to Main Menu"],
      awaitOrderNumber: true,
    };
  }

  if (hasAnyKeyword(normalized, ["shipping", "delivery", "deliver", "shipping time", "delivery time", "how long", "when will it arrive", "shipping cost", "delivery cost"])) {
    return {
      text: `Orders are normally delivered within ${chatbotConfig.shipping.estimatedDays}. ${chatbotConfig.shipping.cost}`,
      quickReplies: ["Shipping Time", "Shipping Cost", "Track Order", "Back to Main Menu"],
    };
  }

  if (hasAnyKeyword(normalized, ["return", "refund", "exchange", "replace item", "wrong product", "damaged product", "return product"])) {
    return {
      text: `Our return policy is described in our Terms & Conditions. Eligible products can be returned under the conditions set out in that policy. You can review it here: ${chatbotConfig.returnPolicyLink}.`,
      quickReplies: ["View Return Policy", "Back to Main Menu"],
    };
  }

  if (hasAnyKeyword(normalized, ["payment", "pay", "credit card", "debit card", "cash", "cash on delivery", "cod", "paypal", "payment methods"])) {
    return {
      text: `We currently accept the following payment method(s): ${chatbotConfig.paymentMethods.join(", ")}.`,
      quickReplies: ["Payment Methods", "Checkout", "Back to Main Menu"],
    };
  }

  if (hasAnyKeyword(normalized, ["login", "sign in", "register", "create account", "forgot password", "account", "profile"])) {
    return {
      text: "Would you like to log in, create an account, or recover your password?",
      quickReplies: ["Login", "Create Account", "Forgot Password", "Back to Main Menu"],
    };
  }

  if (hasAnyKeyword(normalized, ["contact", "human", "agent", "support", "talk to someone", "customer service", "help"])) {
    return {
      text: `I'd be happy to help. If you'd like to contact our support team, you can reach us at ${chatbotConfig.support.email}, call ${chatbotConfig.support.phone}, or visit ${chatbotConfig.support.contactPage}. Our usual hours are ${chatbotConfig.support.hours}.`,
      quickReplies: ["Email Support", "Call Support", "Back to Main Menu"],
    };
  }

  if (hasAnyKeyword(normalized, ["shop", "browse products", "products", "what products do you have", "show me", "show products", "catalog"])) {
    const matches = findProductMatches(normalized, 3);
    if (matches.length === 0) {
      return {
        text: "I could not find a matching product in our current catalog. You can browse the full collection on the shop page.",
        quickReplies: ["Browse Products", "Back to Main Menu"],
      };
    }

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
        stock: product.stock,
      })),
    };
  }

  if (hasAnyKeyword(normalized, ["price", "how much", "cost", "cheap", "budget", "affordable", "under", "below"])) {
    const matches = findPriceMatches(normalized, 3);
    if (matches.length === 0) {
      return {
        text: "I couldn't find a product in that price range in the current catalog.",
        quickReplies: ["Browse Products", "Back to Main Menu"],
      };
    }

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
        stock: product.stock,
      })),
    };
  }

  if (hasAnyKeyword(normalized, ["available", "in stock", "out of stock", "do you have", "is it available", "available in"])) {
    const matches = findProductMatches(normalized, 1);
    if (matches.length === 0) {
      return {
        text: "I could not confirm that specific product from the current catalog. Please choose a product from the shop page or ask for a different item.",
        quickReplies: ["Browse Products", "Back to Main Menu"],
      };
    }

    const product = matches[0]!;
    const statusText = product.stock > 0 ? "Yes, this product is currently in stock." : "Sorry, this product is currently out of stock.";
    return {
      text: `${statusText} ${product.name} is available at $${product.price}.`,
      quickReplies: ["Browse Products", "View Product", "Back to Main Menu"],
      productCards: [{
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        rating: product.rating,
        stock: product.stock,
      }],
    };
  }

  const faqAnswer = getFaqAnswer(normalized);
  if (faqAnswer) {
    return {
      text: faqAnswer.answer,
      quickReplies: ["Shipping", "Returns", "Payments", "Track Order", "Back to Main Menu"],
    };
  }

  const matches = findProductMatches(normalized, 3);
  if (matches.length > 0) {
    return {
      text: "I found a few relevant products for your question:",
      quickReplies: ["Browse Products", "Back to Main Menu"],
      productCards: matches.map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        rating: product.rating,
        stock: product.stock,
      })),
    };
  }

  return {
    text: "I'm sorry, I didn't quite understand that. Please choose one of the options below or try asking in a different way.",
    quickReplies: ["Browse Products", "Track Order", "Shipping", "Returns", "Payments", "FAQ", "Contact Support"],
  };
}

export function getMainMenuReplies() {
  return ["Browse Products", "Track My Order", "Shipping Information", "Returns & Refunds", "Payment Information", "Frequently Asked Questions", "My Account", "Contact Support"];
}

export function getCategorySuggestions() {
  return categories.map((category) => category.name);
}
