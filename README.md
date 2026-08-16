# Atlas Commerce Suite

 Build Prompt — MERN Serverless E-Commerce Platform

Copy everything below into  as your initial project prompt.

Project Overview

Build a full-stack e-commerce platform with a customer storefront and an admin dashboard, deployed as a single Vercel project using serverless functions. No third-party payment processor — orders are placed and tracked manually (Cash on Delivery / "Pay on delivery" style, admin marks payment received).

Tech Stack (strict)

Frontend: React (Vite), TanStack Router for routing, TanStack Query for all data fetching/caching, TanStack Table for admin data grids

Backend: Node.js + Express, wrapped as Vercel Serverless Functions (single deployment — do NOT scaffold a separate backend service/repo)

Database: MongoDB Atlas via Mongoose

Auth: JWT-based auth (httpOnly cookies), separate roles for customer and admin

Styling: Tailwind CSS + shadcn/ui as a base, but heavily customized (see Design section — do not ship default shadcn look)

State: TanStack Query for server state, lightweight context/zustand only for UI state (theme, cart drawer, etc.)

Deployment target: Vercel, one project, /api folder as serverless functions, /src as the Vite React app. Single vercel.json config, single build.

Architecture Requirements

/api/* — Express app exported as serverless handler (use a single Express instance mounted via a catch-all api/index.js or per-resource files — pick whichever is cleaner for Vercel's function limits)

/src — React app

Environment variables: MONGODB_URI, JWT_SECRET, JWT_REFRESH_SECRET (or similar) — read from .env, never hardcoded

REST API structure, versioned under /api/v1/...

Proper error handling middleware, request validation (zod or similar) on every endpoint

Rate limiting on auth endpoints

Core Features

Customer-Facing Storefront

Browse products by category, search, filter (price range, category, in-stock)

Product detail page (images, description, variants if applicable, stock status)

Cart (persisted per logged-in user in DB, guest cart in local state that merges on login)

Checkout flow — collect shipping address, order notes, payment method = "Cash on Delivery" (no gateway integration)

Customer signup/login/logout, email + password, JWT session

Customer account area: order history, order status tracking (Pending → Confirmed → Shipped → Delivered → Cancelled), profile/address management

Wishlist (optional nice-to-have)

Product reviews/ratings (optional nice-to-have)

Admin Dashboard (protected, role = admin)

Dashboard home: key metrics (total orders, revenue, low-stock alerts, recent orders) as cards + charts

Product management: full CRUD, image upload/URLs, stock quantity, category management, bulk actions

Order management: view all orders in a TanStack Table (sortable, filterable, paginated), update order status, view order detail with customer + items

Customer management: view registered customers, order history per customer

Category management: CRUD

Basic analytics: orders over time, top-selling products (simple charts, e.g. recharts)

Auth & Access Control

Two roles: customer, admin

Protected routes on both frontend (TanStack Router beforeLoad guards) and backend (middleware checking JWT + role)

Admin accounts are not self-signup — seed one admin user or gate admin creation behind an existing admin

Data Models (guide Mongoose schemas accordingly)

User: name, email, password (hashed), role, addresses[], createdAt

Product: name, slug, description, price, images[], category (ref), stock, sku, isActive, createdAt

Category: name, slug, description

Order: user (ref), items[{product, qty, priceAtPurchase}], shippingAddress, status, totalAmount, paymentMethod (fixed: "COD"), statusHistory[], createdAt

Cart (optional, or embed in User): items[{product, qty}]

Design & Aesthetic Direction — read carefully

This is the most important part. Do not produce a generic, templated, "obviously AI-generated" UI. Avoid: default shadcn purple/violet gradients, centered hero with floating blob shapes, generic Inter font with no hierarchy, boxy equal-padding cards everywhere, stock icon soup, and cookie-cutter dashboard layouts that look like every other AI-built app.

Instead:

Pick a real, opinionated design direction — e.g. an editorial/fashion-forward storefront (think a modern DTC brand — bold typography, generous whitespace, asymmetric grids, large product photography) or a minimal Japanese-inspired grid system. Commit to one point of view, not a generic template.

Typography with actual hierarchy — pair a distinctive display/serif font for headings with a clean sans for body copy. Avoid using Inter for everything.

Dual theme (light/dark) — implement a true design-token-based theme system (CSS variables), not just inverted grays. Each theme should feel intentional: e.g. light theme = warm off-white background with high-contrast ink text; dark theme = deep near-black (not pure #000) with a distinct accent color, not just Tailwind's default dark: gray-900 everywhere. Include a polished theme toggle (animated, not just a plain switch).

Distinct storefront vs. admin visual language — storefront should feel like a retail brand; admin dashboard should feel like a clean, dense, professional tool (data-forward, not decorative).

Micro-interactions — subtle hover states, smooth page transitions, skeleton loaders while TanStack Query fetches, empty states that are actually designed (not just "No data").

Real product imagery treatment — consistent aspect ratios, subtle image zoom on hover for product cards, no placeholder-looking gray boxes.

Custom accent color — choose a specific brand color (not the default indigo/violet everyone uses) and apply it deliberately, not everywhere.

Non-Goals / Explicit Exclusions

No Stripe, PayPal, or any payment gateway integration

No multi-vendor/marketplace complexity

No separate backend deployment — everything ships as one Vercel project

Deliverable

A working, deployable single Vercel project with the storefront, customer auth/account area, and admin dashboard all functioning against MongoDB Atlas, with the design direction above fully applied across both light and dark themes.

This project was built with [](https://.dev).

## Build with 

Continue developing this project in the [ editor](https://.dev/projects/34041ad2-4c4b-4142-9054-38f09d5c0d8e).

- **Ship faster**: describe what you want to build and  handles the code.
- **Stay in sync**: every change made in  is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into , ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
