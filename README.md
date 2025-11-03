# 4VENDA – Local Marketplace Frontend

A modern, responsive e‑commerce frontend for connecting customers with local vendors. Built with React + TypeScript (Vite), Tailwind CSS, shadcn/ui, React Hook Form, Zod and TanStack Query. The app includes customer flows (browse vendors/products, cart, checkout) and a vendor hub (register, login, dashboard UI).

## ✨ Features

- **Vendor Discovery:** Browse vendors with filter by category and sort by name.
- **Product Catalog:** Product detail pages with quantity controls and seller info.
- **Shopping Cart:** Persistent multi‑vendor cart (localStorage) with add/remove/increment/decrement and grouped summary.
- **Checkout:** Delivery information form and order summary; mock order confirmation page.
- **Favorites:** Like/unlike products (localStorage).
- **Vendor Hub:** Vendor registration, vendor login and a dashboard UI (mock data) for analytics.
- **Theming & UI:** Tailwind CSS + shadcn/ui, light/dark mode, modern typography (Inter), accessible focus styles.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Installation

Clone your local project folder and install inside the `app` subfolder:

```bash
cd C:/Users/HP/Desktop/4Venda/app
npm install
```

### Development

Start the Vite dev server (default at `http://localhost:5173`):

```bash
npm run dev
```

### Build & Preview

```bash
npm run build
npm run preview
```

## 📁 Project Structure (key folders)

```
app/
  ├─ public/
  │   └─ logo.png                 # favicon + brand mark
  ├─ src/
  │   ├─ components/
  │   │   ├─ layout.tsx           # site shell (header/footer)
  │   │   └─ ui/                  # shadcn/ui components
  │   ├─ pages/
  │   │   ├─ Home.tsx             # homepage
  │   │   ├─ AllVendors.tsx       # vendors listing (filter/sort)
  │   │   ├─ Vendor.tsx           # vendor storefront (slug-based)
  │   │   ├─ ProductDetail.tsx
  │   │   ├─ Cart.tsx
  │   │   ├─ Checkout.tsx
  │   │   ├─ OrderConfirmation.tsx
  │   │   ├─ VendorRegister.tsx
  │   │   ├─ VendorLogin.tsx
  │   │   └─ VendorDashboard.tsx  # dashboard UI (mock)
  │   ├─ store/
  │   │   ├─ cart.tsx             # CartContext (localStorage)
  │   │   └─ favorites.tsx        # FavoritesContext (localStorage)
  │   ├─ index.css                # Tailwind + theme + typography
  │   ├─ main.tsx                 # providers (router/query/cart/favs)
  │   └─ App.tsx                  # routes
  └─ index.html                   # head (title, fonts, favicon)
```

## 🧭 Usage

- **Customer Flow**

  1. Open `/` to view the homepage.
  2. Browse vendors via "Browse Vendors" or go directly to `/all-vendors`.
  3. Open a vendor at `/vendor/:slug` to view products.
  4. Add items to cart from product cards or detail pages.
  5. Review at `/cart` and continue to `/checkout`.
  6. Place order → redirected to `/order-confirmation` (mock).

- **Vendor Flow**
  1. Register at `/vendor/register`.
  2. Login at `/vendor/login`.
  3. View the dashboard UI at `/vendor/dashboard` (mock analytics & recent orders).

## 🛠️ Technologies

| Technology                    | Description                              |
| :---------------------------- | :--------------------------------------- |
| **React + TypeScript (Vite)** | Fast dev/build and type‑safe UI          |
| **React Router**              | Client‑side routing                      |
| **Tailwind CSS**              | Utility‑first styling                    |
| **shadcn/ui**                 | Accessible, composable UI primitives     |
| **TanStack Query**            | Async data + cache (ready for real APIs) |
| **React Hook Form + Zod**     | Forms + schema validation                |

## 📦 State Persistence

- **CartContext** and **FavoritesContext** persist to `localStorage` so the cart/likes survive page reloads.

## 🤝 Contributing

PRs are welcome. Please open an issue or PR with a clear description of the change.

## 📄 License

This project is currently unlicensed (all rights reserved).
