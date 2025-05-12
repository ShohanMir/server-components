## React Server Components – Mini Course Demo

This project demonstrates the use of React Server Components and Client Components using two separate routes in a Next.js 14 app.

### 🛠️ Routes Overview

/products – Uses Server Components
Product list and product detail pages are built with server components. Includes streaming with Suspense for loading simulated reviews.

/clients – Uses Client Components
Same functionality as the /products route, but implemented entirely with client components to contrast the behavior and performance.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
