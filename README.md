# D3 Website — Digital Data Dimensions

B2B enterprise lead generation platform built with Next.js 16 + next-intl. Content is **static** (`lib/data.ts`); edit that file (and page-specific constants) to update copy, blog posts, case studies, and solution details.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: CSS custom properties (no Tailwind utility classes needed — all inline styles + CSS variables)
- **Content**: Static TypeScript / JSON in `lib/data.ts` and co-located page data
- **i18n**: next-intl (English only; locale segment `/en` for routing)
- **Email**: Nodemailer (Google SMTP)
- **Hosting**: Vercel
- **Font**: Montserrat (Google Fonts)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create `.env.local` in the project root with at least:

| Variable | Description |
|---|---|
| `SMTP_USER` | Gmail address for sending emails |
| `SMTP_PASS` | Gmail App Password (not your login password) |
| `SALES_EMAIL` | Email address to receive lead notifications |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (optional) |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en).

## Project Structure

```
d3-website/
├── app/
│   ├── [locale]/           # Localized routes (currently `en` only)
│   │   ├── page.tsx        # Homepage
│   │   ├── solutions/[slug]/
│   │   ├── industries/[slug]/
│   │   ├── case-studies/[slug]/
│   │   ├── clients/
│   │   ├── contact/
│   │   └── blog/[slug]/
│   ├── api/contact/        # SMTP email handler
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Navbar, Footer, ThemeProvider, FloatingActions, GTMScript
│   ├── home/               # All homepage sections
│   ├── shared/             # Button, SectionEyebrow, RevealOnScroll
│   └── forms/              # LeadForm
├── lib/
│   └── data.ts             # Solutions, industries, case studies, clients, blog posts
├── messages/
│   └── en.json
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
vercel env add NEXT_PUBLIC_GTM_ID
```

## Gmail SMTP Setup

1. Enable 2FA on your Gmail account
2. Go to Google Account → Security → App Passwords
3. Create an app password for "Mail"
4. Use that password as `SMTP_PASS`
