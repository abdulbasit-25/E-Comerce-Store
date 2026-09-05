# Sorrel E-Commerce Store

A full-stack e-commerce platform for a boutique retail brand, combining a customer storefront with a role-based admin dashboard. The app is built with React, TanStack Start, Tailwind CSS, and MongoDB, with Cash on Delivery checkout and demo authentication built in.

## Overview

This project includes:

- Customer storefront with product browsing, filtering, cart, and checkout
- Login and registration flows with JWT-based session handling
- Account area for order tracking and profile access
- Admin dashboard for orders, catalog management, customer analytics, and inventory actions
- Light/dark UI themes and responsive storefront layouts
- MongoDB-backed user authentication with a demo fallback for local development

## Live demo

- Production demo: https://abdulbasit-archer.vercel.app/
- Repository: https://github.com/abdulbasit-25/E-Comerce-Store

## Tech stack

- React 19
- TanStack Start / React Router
- TypeScript
- Tailwind CSS
- Zustand for client state
- MongoDB + mongodb driver
- JWT + bcryptjs for auth
- Vitest for unit tests
- Vite for local development/build

## Key features

### Storefront

- Product browsing by category and search
- Product detail pages with stock and pricing information
- Cart persistence and quantity updates
- Checkout form with shipping details and order notes
- Cash on Delivery payment flow
- Customer account pages and order history

### Admin

- Dashboard summary cards and sales insights
- Product CRUD operations
- Inventory monitoring and stock updates
- Order management and status changes
- Customer analytics and order history
- Category management

### Authentication

- Email validation and password hashing
- JWT token creation and verification
- MongoDB user lookups with demo fallback credentials
- Role-based access for admin/customer flows

## Demo accounts

The app includes built-in demo credentials for quick testing:

- Admin: admin@sorrel.local / Admin@12345
- Customer: customer@sorrel.local / Customer@12345

## Getting started

### Prerequisites

- Node.js 18+
- npm or bun
- MongoDB connection URI for DB-backed auth and persistence

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment variables

If you want MongoDB-backed auth and persisted user data, create an environment variable such as:

```bash
MONGODB_URI=mongodb://localhost:27017/sorrel
```

The app also includes a demo fallback path so the login flow continues to work even when MongoDB is unavailable during local development.

## Available scripts

```bash
npm run dev
npm run build
npm run build:dev
npm run preview
npm run lint
npm run format
npm run seed:users
npm run seed:products
npm run test
npm run test:watch
```

## Project structure

```text
src/
  components/
  lib/
  routes/
  assets/
  styles/
scripts/
  seed-users.ts
  seed-products.ts
Docs/
```

## Notes

- The app is currently designed around a boutique brand identity and uses tailored storefront/admin experiences.
- The checkout flow is intentionally cash-based rather than a third-party payment integration.
- For database seeding, run the user and product seed scripts after setting your MongoDB URI.

## Status

This project is actively under development and is being expanded with additional storefront, admin, and data-persistence capabilities.
