# D3 Website — Digital Data Dimensions

B2B enterprise lead generation platform built with Next.js 16 + Sanity CMS + next-intl.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: CSS custom properties (no Tailwind utility classes needed — all inline styles + CSS variables)
- **CMS**: Sanity v3
- **i18n**: next-intl (EN + AR)
- **Email**: Nodemailer (Google SMTP)
- **Hosting**: Vercel
- **Font**: Montserrat (Google Fonts)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SMTP_USER` | Gmail address for sending emails |
| `SMTP_PASS` | Gmail App Password (not your login password) |
| `SALES_EMAIL` | Email address to receive lead notifications |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID |

### 3. Set up Sanity

```bash
# Create a new Sanity project
npx sanity init

# Or connect to an existing project
# Add the project ID to .env.local
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en)

Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Project Structure

```
d3-website/
├── app/
│   ├── [locale]/           # EN + AR pages
│   │   ├── page.tsx        # Homepage
│   │   ├── solutions/[slug]/
│   │   ├── industries/[slug]/
│   │   ├── case-studies/[slug]/
│   │   ├── clients/
│   │   ├── contact/
│   │   └── blog/[slug]/
│   ├── api/contact/        # SMTP email handler
│   ├── studio/             # Sanity Studio
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Navbar, Footer, ThemeProvider, FloatingActions, GTMScript
│   ├── home/               # All homepage sections
│   ├── shared/             # Button, SectionEyebrow, RevealOnScroll
│   └── forms/              # LeadForm
├── sanity/
│   ├── schema/             # solution, industry, caseStudy, client, blog
│   └── lib/                # Sanity client, queries
├── lib/
│   └── data.ts             # Static fallback content (used until Sanity is configured)
├── messages/
│   ├── en.json
│   └── ar.json
└── i18n/
    ├── routing.ts
    ├── request.ts
    └── navigation.ts
```

## Pages

| Route | Description |
|---|---|
| `/en` | Homepage |
| `/en/solutions/[slug]` | Solution pages (7 MVPs) |
| `/en/industries/[slug]` | Industry pages (5) |
| `/en/case-studies` | Case studies list |
| `/en/case-studies/[slug]` | Case study detail (6) |
| `/en/clients` | Clients page |
| `/en/contact` | Contact + lead form |
| `/en/blog` | Blog list |
| `/en/blog/[slug]` | Blog post (4) |
| `/studio` | Sanity CMS |

All pages also available at `/ar/...` with RTL layout.

## Design Tokens

### Light Mode
- Page BG: `#FFFFFF`
- Surface: `#F4F6FB`
- Headings: `#002147`
- Body: `#3D3D5C`
- Nav: `#003580`
- CTA: `#FF6B2B`
- Border: `#E2E8F0`

### Dark Mode
- Page BG: `#0F1214`
- Surface: `#1A1A2E`
- Headings: `#FFFFFF`
- Body: `#B0BDD0`
- CTA: `#FF6B2B`
- Border: `#2A3550`

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard or via CLI:
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add SALES_EMAIL
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_GTM_ID
```

## Gmail SMTP Setup

1. Enable 2FA on your Gmail account
2. Go to Google Account → Security → App Passwords
3. Create an app password for "Mail"
4. Use that password as `SMTP_PASS`

## Sanity Content Types

- **solution** — Solution pages with features, SEO, Arabic content
- **industry** — Industry pages with challenges
- **caseStudy** — Client case studies
- **client** — Client logos with category (government/private/gcc)
- **blog** — Blog posts with portable text content
