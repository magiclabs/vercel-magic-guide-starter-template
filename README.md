# Magic Auth with Next.js - Starter Template

This is the starter template for the Vercel guide [How to Implement Magic Auth in a Next.js App](https://magic.link/posts/magic-auth-next). For reference, you can find the completed code [here](https://github.com/magiclabs/vercel-magic-guide).

## Get Started

1. Install dependencies.

```shell
npm install
# or
yarn install
```

2. Rename `.env.local.example` to `.env.local` and add your Magic Auth API keys.

```shell
mv .env.local.example .env.local
```

```javascript
// .env.local

NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY = "YOUR MAGIC AUTH PUBLISHABLE KEY";
MAGIC_SECRET_KEY = "YOUR MAGIC AUTH SECRET KEY";
```

1. Run the development server.

```shell
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 with your browser to see the result.
