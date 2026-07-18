# Sandeep Thapa Magar — Portfolio

A statically generated professional portfolio covering operations leadership, product work, software engineering, experience, and contact information.

## Stack

- Next.js App Router
- React and TypeScript
- Project-specific CSS design tokens
- Lucide icons

Content-heavy routes render as Server Components. Client JavaScript is limited to the header scroll state, theme control, accessible mobile navigation, and route-aware contact launcher.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production build may need network access on a clean machine because `next/font` downloads Inter and Manrope during compilation.

## Routes

- `/` — overview and selected work
- `/about` — profile, principles, capabilities, and education
- `/work` — product case studies
- `/experience` — professional timeline
- `/contact` — contact and social profiles

The site also generates `robots.txt`, `sitemap.xml`, structured data, social metadata, and a custom not-found page.

## Deployment

Run `npm run build` and `npm run start`, or deploy to a Next.js-compatible platform such as Vercel.
