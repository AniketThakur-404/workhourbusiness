This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Deploy the corporate project from the repository root with the Next.js preset and
leave `NEXT_PUBLIC_COMPANY_SLUG` unset. The corporate portfolio links directly to
the production domains below.

Each company uses its own Vercel project with the same repository root and
Next.js preset. Set `NEXT_PUBLIC_COMPANY_SLUG` for Production and Preview to the
matching value before deployment.

| Company | `NEXT_PUBLIC_COMPANY_SLUG` | Production domain |
| --- | --- | --- |
| Inceptura | `inceptura` | `workhourbusiness-inceptura.vercel.app` |
| Leaders Pinnacle | `leaders-pinnacle` | `workhourbusiness-leaders-pinnacle.vercel.app` |
| Employaa | `employaa` | `workhourbusiness-employaa.vercel.app` |
| Elevatrain | `elevatrain` | `workhourbusiness-elevatrain.vercel.app` |
| Go Travel Global | `go-travel-global` | `workhourbusiness-go-travel-global.vercel.app` |
| Remunerax | `remunerax` | `workhourbusiness-remunerax.vercel.app` |
| ThinkRunSpace | `thinkrunspace` | `workhourbusiness-thinkrunspace.vercel.app` |

The company site's home page is served at `/`. Set `NEXT_PUBLIC_WORKHOUR_URL`
if the company sites should link back to a different corporate domain.

To start an individual company locally in PowerShell, set its slug before
starting Next.js.

```powershell
$env:NEXT_PUBLIC_COMPANY_SLUG = "employaa"
npm run dev
```
