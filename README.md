# Magic Auth with Next.js - Vercel Guide

This is the starter code for the Vercel guide "Add Auth to a Next.js Site with Magic.link" <-- link to be added.

## Get Started

1. Install dependencies.

```shell
npm install
# or
yarn install
```

2. Rename `.env.local.example` to `.env.local` and add your Magic API keys.

```shell
mv .env.local.example .env.local
```

```javascript
// .env.local

NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY = "YOUR MAGIC PUBLISHABLE KEY";
MAGIC_SECRET_KEY = "YOUR MAGIC SECRET KEY";
```

1. Run the development server.

```shell
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 with your browser to see the result.
