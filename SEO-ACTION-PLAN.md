# dthree.co (D3) Next.js Rebuild — SEO & Keyword Action Plan
*Based on the code audit of afkhan-fardeen/d3 (main branch) and live GCC keyword research. Prepared 2026-09-20.*

---

## 0. The critical realization this plan is built around

The repo's `solutions/[slug]/page.tsx` already defines an `seoKeyword` field on all 11 solution pages — and one of them is literally named `timetech-application` with `seoKeyword: 'TimeTech time attendance HRMS Bahrain GCC'`. **D3 is the Bahrain reseller/distributor of the same TimeTech product line that time-tech.co sells.** This changes two things:

- You are NOT starting a new keyword strategy from scratch for dthree.co — the product-page structure and keyword intent already exist in code. The work is fixing why they don't rank, not inventing new pages.
- **time-tech.co and dthree.co must not target the same head keywords independently.** Right now both properties could end up competing with each other in the same SERP for terms like "time attendance system Bahrain" or "HRMS software Bahrain." Decide a division of labor before either site pushes harder on these terms (see §5).

---

## 1. STOP — before touching keywords, this must be fixed first

Two bugs in the current code mean **every inner page will fail to index correctly** regardless of what keywords you target. Fixing these is a prerequisite for everything else in this plan.

### 1a. Canonical + Open Graph inheritance bug (highest priority)
Only `/` and the locale layout set `alternates.canonical` and `openGraph`. All 14 other page types (including all 11 solution pages and all 4 industry pages — your highest-commercial-value content) inherit the **homepage's** canonical URL and OG data through Next.js metadata merging.

**Fix:** Every page under `app/[locale]/solutions/[slug]/page.tsx` and `app/[locale]/industries/[slug]/page.tsx` (and the other 12 page types) needs its own `alternates: { canonical: ... }` and `openGraph: { url: ..., title: ..., description: ... }` in its `generateMetadata()`. Without this, Google is told every inner page's canonical version is the homepage — the single highest indexing risk in the codebase.

### 1b. Duplicated title suffix
`[locale]/layout.tsx` sets a title template (`'%s | D3 Digital Data Dimensions'`), but every child page's title string already includes the brand suffix, producing titles like:
`About D3 | Digital Data Dimensions | D3 Digital Data Dimensions`

**Fix:** Either add `title: { absolute: '...' }` on every page (bypasses the template entirely), or strip the brand suffix from every per-page title string and let the template add it once. The `absolute` approach is safer since it also gives you full control to weave in the real target keyword (see §3).

### 1c. Sitemap bugs
- Remove phantom `/solutions` and `/industries` entries (routes don't exist — only `/solutions/[slug]` and `/industries/[slug]` do; these will 404)
- Add missing real pages: `/news`, `/careers`, `/privacy-policy`, `/sitemap`
- Add the Arabic locale (`/ar/...`) — `LOCALES = ['en']` currently omits a fully-built, routable locale entirely

### 1d. Broken case-study cross-links
`INDUSTRY_CASE_STUDIES` and `caseStudySlug` fields reference case-study slugs (`ministry-of-interior-attendance`, `bahrain-airport-cctv`, `gulf-air-queue-management`, `jawad-business-erp`, `alba-rfid-assets`) that don't exist in the actual `CASE_STUDIES` data. The `.filter(Boolean)` silently returns empty arrays, so the "Case Studies" proof-point section never renders on industry pages or relevant solution pages. **Fix the slug references so these render** — this is exactly the trust/proof content that should sit right next to your commercial keyword targets.

### 1e. /projects vs /case-studies cannibalization
Both pages target near-identical intent ("view our project work") with different URLs and no disambiguation. Pick one as canonical for that intent; either 301 one into the other, or clearly differentiate their content/keyword targets (e.g., `/projects` = ongoing/upcoming work, `/case-studies` = completed client outcomes).

---

## 2. URL continuity — don't lose the traffic you already have

The old dthree.co blog ranks for real (if tiny) traffic at these URLs:

| Old URL | Keyword | Volume | Position |
|---|---|---|---|
| `/blog/salary-slip-format-bahrain` | salary slip, payslip | 100/60 | 6, 9 |
| `/en/blog/bahrain-labour-law-resignation-notice` | lmra rules for resignation | 10 | 6 |
| `/en/blog/overtime-calculation-bahrain` | bahrain labour law overtime calculation | 10 | 11 |

**None of these exist in the rebuild.** The new blog's 4 slugs are entirely different topics (biometric benefits, queue management, RFID, HRMS choice). If this goes live as-is, you lose all existing organic traffic with nothing to redirect to.

**Required actions before go-live:**
1. Recreate these 3 topics as new blog posts in `lib/data.ts`'s `BLOG_POSTS`, using slugs that either match the old ones exactly (`salary-slip-format-bahrain`, `bahrain-labour-law-resignation-notice`, `overtime-calculation-bahrain`) or get a proper redirect mapped to a close equivalent.
2. Since `next-intl`'s `localePrefix: 'always'` means every old unprefixed URL (`/blog/x`) gets a **307 (temporary)** redirect to `/en/blog/x` via middleware — the wrong signal for URLs you want Google to permanently consolidate. Set up **301 redirects at the DNS/edge level** (Vercel redirects config, not just next-intl middleware) from the old paths straight to their new `/en/...` equivalents.
3. This is also your cue to widen the new posts beyond the narrow original 3 — see §4, since this labor-law content is a much bigger keyword opportunity than the original posts alone captured.

---

## 3. Wire the existing seoKeyword fields into actual metadata

Right now `seoKeyword` is only used as the (Google-ignored) `keywords` meta tag. Here's what each solution page should actually target once its `generateMetadata()` sets real title/H1/description — cross-referenced against real Bahrain/Saudi/Qatar search volume:

| Slug | Current seoKeyword (code) | Recommended primary target | BH+SA+QA volume | Notes |
|---|---|---|---|---|
| `hr-payroll-software` | HR software Bahrain WPS payroll HRMS GCC GOSI | **hr software** (Saudi-led) or **hrms software** | 120–1040 | Saudi is 90% of the volume here; Bahrain alone is small (§5 on avoiding overlap with time-tech.co) |
| `time-attendance-system` | time attendance system Bahrain GCC biometric | **time attendance system** | 110 (mostly Saudi) | Low Bahrain volume — this page's real audience is Saudi, not Bahrain, despite the seoKeyword wording |
| `time-attendance-enterprise` | time attendance enterprise Bahrain GCC multi-site biometric mobile app | Differentiate from `time-attendance-system` — target "enterprise" as the modifier, not a competing head term | — | Currently near-duplicate intent to `time-attendance-system`; needs distinct positioning (enterprise/multi-site vs. standard) to avoid self-cannibalization |
| `timetech-application` | TimeTech time attendance HRMS Bahrain GCC | Brand term — low volume by design, this is for people who already know the product name | — | Fine as-is; don't over-optimize a branded page |
| `visitor-management` | visitor management system Bahrain GCC reception kiosk access card | **visitor management system** | 340 (mostly UAE — check Bahrain/Saudi/Qatar specifically) | |
| `queue-management-system` | queue management system Bahrain GCC kiosk wired wireless | **queue management system** | 620 GCC-wide | Same silo already being built out on time-tech.co — coordinate (§5) |
| `rfid-asset-tracking` | RFID asset tracking Bahrain warehouse management document tracking | **rfid asset tracking** / **rfid inventory tracking system** | 190+ | |
| `access-control-system` | access control system IP CCTV Bahrain biometric cameras surveillance | **access control system** / **door access control system** | 2100+ GCC-wide | Same silo as time-tech.co's new core page — coordinate (§5) |
| `digital-signage` | digital signage LED displays Bahrain GCC vertical signage eBook CMS | **digital signage** | 1020+ GCC-wide | Same silo as time-tech.co's new core page — coordinate (§5) |
| `erp-retail-management` | ERP software Bahrain retail management inventory electronic shelf labels | **erp software** — not yet researched, worth a volume check | — | Not covered in prior research; flag for next keyword pass |
| `consultancy` | IT consultancy Bahrain GCC outsourced engineers ICT planning | **IT consultancy Bahrain** | — | Not yet researched |

**Action per page:** set `title: { absolute: '{Primary Keyword} | D3 — Digital Data Dimensions' }`, a real H1 using the primary keyword, and a unique meta description — replacing the current generic/inherited ones.

---

## 4. Content funnel — labor law articles feeding into solution pages

From the earlier keyword research, this is where the real, near-zero-competition volume lives (not on the commercial terms):

| Article topic | Country | Volume | Difficulty | Links into which solution page |
|---|---|---|---|---|
| Saudi Labor Law hub + article-number series (74, 77, 80, 81, 53) | Saudi | ~5,350/mo combined | ~0 | `hr-payroll-software` (WPS/GOSI compliance angle) |
| Qatar labor law amendments / termination benefits | Qatar | ~1,700/mo combined | 2–6 | `hr-payroll-software`, `time-attendance-system` |
| Bahrain labour law (expanded/rewritten) | Bahrain | ~680/mo combined | 0–1 | `hr-payroll-software`, `timetech-application` |
| Gratuity calculator Bahrain | Bahrain | 50/mo | 1 | Candidate for an **interactive calculator built directly into the Next.js app** rather than a static blog post — this is exactly the kind of tool a modern stack should ship as a real feature, not prose |

**Fix the linking dead-end:** the audit found blog posts link OUT to solution pages, but no solution or industry page links back IN to the blog. Add a "Related articles" or "Learn more" block on each solution page pointing to its matching labor-law content — right now the funnel only runs one direction.

---

## 5. Coordination with time-tech.co — avoid self-competition

Both properties are pushing toward the same commercial keywords (access control, digital signage, queue management, HRMS, time attendance) in the same GCC markets. Before either site pushes harder:

- **Decide which domain owns which keyword**, or accept that some terms will show both domains in search results (not necessarily bad — can crowd out third-party competitors — but should be a deliberate choice, not an accident)
- **time-tech.co skews UAE-heavy** in the research done so far; **dthree.co's existing content and this task both skew Bahrain/Saudi/Qatar** — a natural, low-conflict split might be: time-tech.co leads on UAE-focused commercial pages, dthree.co leads on Bahrain/Saudi/Qatar commercial pages + the labor-law content funnel, with cross-links between the two sites where relevant (dthree.co's Saudi labor law hub could link to time-tech.co's `access-control.html` if that page ranks better in Saudi, for instance)
- Flag this explicitly to whoever owns each site's roadmap — it's a business decision, not just a technical one

---

## 6. Go-live checklist (in order)

1. Fix canonical/OG inheritance (§1a) — do not launch without this
2. Fix title dedup (§1b)
3. Fix sitemap bugs (§1c)
4. Fix broken case-study references (§1d)
5. Resolve /projects vs /case-studies (§1e)
6. Recreate or redirect the 3 currently-ranking blog URLs (§2)
7. Set up 301s at the edge/DNS level, not just next-intl's 307 middleware redirect (§2)
8. Wire seoKeyword data into real title/H1/meta on all 11 solution pages (§3)
9. Attach the `dthree.co` domain on Vercel (currently unbound — only `d3-self.vercel.app` exists)
10. Only after 1–9: begin publishing the labor-law content funnel (§4) and coordinate keyword ownership with time-tech.co (§5)
