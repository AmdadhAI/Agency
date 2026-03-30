# SITE.md — Growth Partner Agency

## 1. Site Vision

Growth Partner is a data-driven hospitality marketing agency. The site must convey machine precision, financial seriousness, and premium quality. Every page should feel like a CFO's dashboard, not a brochure.

**Stack:** Next.js 14 + Tailwind CSS + Framer Motion  
**Design System:** See `DESIGN.md`

---

## 2. Global Design Rules

- Background: `#0F0F13` (Void Black — always)
- Card Surface: `#111116` (Onyx)
- Accent 1: `#00F0FF` (Electric Cyan)
- Accent 2: `#7000FF` (Deep Violet)
- Positive: `#4ADE80` (Signal Green)
- Font: Space Grotesk (headlines), Inter (body)
- Nav: Frosted glass capsule, fixed top center on desktop, bottom pill on mobile

---

## 3. Navigation Protocol

**Desktop Primary Links:** Projects · Services · Pricing · More ▾ · [Book Audit →]  
**More Dropdown:** Home · About Us · Contact · Case Studies  
**Active State:** `bg-white/[0.08] border border-white/10` capsule on active primary link; cyan-tinted item in dropdown  
**Mobile:** Bottom pill bar (Projects, Services, Pricing, floating bolt/audit button, More) + full-screen overlay menu

---

## 4. Sitemap (Completed Pages)

| Route | Status | Description |
|---|---|---|
| `/` | ✅ Done | Home — hero, proven growth, growth blueprint, services teaser, CTA |
| `/about` | ✅ Done | About — manifesto hero, 2-row color gallery, paradigm columns, team grid |
| `/services` | ✅ Done | Services — detailed service breakdown |
| `/pricing` | ✅ Done | Pricing — tiered plans |
| `/case-studies` | ✅ Done | Case Studies — client work index |
| `/audit` | ✅ Done | Audit booking — lead capture / embedded calendar |
| `/projects` | ✅ Done | Projects — $12M+ hero, filter pills, 12-col bento grid, ROI stats |
| `/contact` | ✅ Done | Contact — two-column lead form + direct booking + offices + Amdad card |
| `/careers` | 🟡 Stub | Careers — hiring page (placeholder) |

---

## 5. Roadmap (Next Pages)

- [ ] `/faq` — Frequently Asked Questions (to appear in "More" dropdown)
- [ ] `/blog` or `/insights` — SEO content hub
- [ ] `/case-studies/[slug]` — Individual case study detail pages (dynamic routes)
- [ ] `/projects/[slug]` — Individual project detail pages (dynamic routes)

---

## 6. Stitch Project

> If generating pages via the stitch-loop skill, create or retrieve the Stitch project and persist the ID here.

**Stitch Project ID:** _(not yet initialized — create via `mcp_stitch_create_project` if needed)_

---

## 7. Component Inventory

| Component | File | Notes |
|---|---|---|
| Navigation | `src/components/Navigation.tsx` | Global nav — desktop + mobile |
| GrowthBlueprint | `src/components/GrowthBlueprint.tsx` | SVG branch animation |
| ProvenGrowth | `src/components/ProvenGrowth.tsx` | Sticky scroll section |
| Showreel | `src/components/Showreel.tsx` | Video/image reel |
| WhatWeDo | `src/components/WhatWeDo.tsx` | Services overview |
| WhyChooseUs | `src/components/WhyChooseUs.tsx` | Differentiators |
