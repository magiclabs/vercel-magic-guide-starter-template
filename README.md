# Magic Auth with Next.js

This is the completed code for the Vercel guide "Add Auth to a Next.js Site with Magic.link" <-- link to be added.

## Get Started

1. Install dependencies.

```
npm install
# or
yarn install
```

2. Change `.env.local.example` to `.env.local` and add your Magic API keys.

```
mv .env.local.example .env.local
```

Then

```
# .env.local

NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY="YOUR MAGIC PUBLISHABLE KEY"
MAGIC_SECRET_KEY=sk_live_"YOUR MAGIC SECRET KEY"

```

3. Run the development server.

```
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 with your browser to see the result.
