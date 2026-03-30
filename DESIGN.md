# Design System: Growth Partner
**Project:** Growth Partner Agency — Next.js

---

## 1. Visual Theme & Atmosphere

**Vibe:** Aggressive, cinematic, data-driven luxury. The aesthetic is a high-end SaaS dashboard crossed with a moody editorial magazine. Dense information is presented with clarity and contrast. The UI conveys machine precision and financial seriousness — this is not a friendly brochure site; it is a performance report.

**Density:** High contrast, intentionally overwhelming in places (to convey scale of data), but always readable.

**Motion Philosophy:** Purposeful, not decorative. Framer Motion is used for entrance animations (opacity + y-translate), parallax on scroll, and micro-interactions on hover (scale, opacity, glow pulses). Never bouncy — always smooth and mechanical.

---

## 2. Color Palette & Roles — v2

### Backgrounds & Surfaces *(unchanged)*
| Descriptive Name | Hex       | Role                                              |
| ---------------- | --------- | ------------------------------------------------- |
| Void Black       | `#0F0F13` | Global page background                            |
| Onyx Surface     | `#111116` | Card backgrounds, elevated panels, input surfaces |
| Charcoal Mist    | `#0A0A0C` | Darker section backgrounds, footer                |

### Brand Accent Colors *(unchanged)*
| Descriptive Name | Hex                      | Role                                                    |
| ---------------- | ------------------------ | ------------------------------------------------------- |
| Electric Cyan    | `#00F0FF`                | Primary accent — CTAs, highlights, active states, glows |
| Deep Violet      | `#7000FF`                | Secondary accent — growth metrics, alternate highlights |
| Signal Green     | `#4ADE80`                | Success states, positive metrics, tertiary accent       |
| Neon Pink        | `#FF00FF`                | Network / energy accents                                |
| Muted Crimson    | `#ef4444` at 50% opacity | Negative / "old way" indicators                         |

### Text Hierarchy *(4 tiers — v2 addition)*
| Level                  | Hex       | Used For                                      |
| ---------------------- | --------- | --------------------------------------------- |
| Text Primary           | `#FFFFFF` | Headings, hero text, primary CTAs             |
| Text Secondary *(new)* | `#E2E8F0` | Subheadings, important body text, card titles |
| Text Body              | `#9CA3AF` | Standard body copy, secondary labels          |
| Text Muted             | `#6B7280` | Helper text, metadata, timestamps             |

### Utility / State Colors
| Descriptive Name      | Hex                           | Role                                                                |
| --------------------- | ----------------------------- | ------------------------------------------------------------------- |
| Warning Amber *(new)* | `#F59E0B`                     | Warning states, urgency indicators, alert banners                   |
| Frost Border          | `rgba(255,255,255,0.06–0.12)` | Card borders, nav borders, dividers *(strengthened from 0.05–0.10)* |

---

## 3. Typography Rules

| Role                | Font                | Weight                   | Characteristics                                                                             |
| ------------------- | ------------------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| Hero Headlines      | Grift               | 900 (Black)              | Extremely tight tracking (`tracking-tighter`), large clamp sizing (`clamp(3rem,10vw,7rem)`) |
| Section Headings    | Grift               | 700–800 (Bold/ExtraBold) | Tighter tracking, `clamp(2.5rem,5vw,4rem)`                                                  |
| UI Labels           | Grift               | 600 (SemiBold)           | Small caps, wide tracking (`tracking-[0.2em]`), uppercase                                   |
| Body / Descriptions | Grift               | 400–500 (Regular/Medium) | Comfortable line-height, `text-[#9CA3AF]`                                                   |
| Metric / Mono Data  | `font-mono` + Grift | 700–900                  | Used for numbers, stats, badges                                                             |
| Navigation          | Grift               | 500–600                  | `text-sm`, clean, minimal                                                                   |

**Key Rule:** Headlines should feel like they're carved from stone — heavy, uppercase, tight. Body text should feel light and precise.

---

## 4. Component Stylings

### Buttons
- **Primary CTA (White):** `bg-white text-black font-black rounded-full px-8 py-3 hover:scale-105 hover:bg-gray-100` with `shadow-[0_0_40px_rgba(255,255,255,0.2)]`
- **Glowing Cyan CTA:** `bg-[#00F0FF] text-black font-black rounded-full` with cyan glow shadow
- **Glowing Purple CTA:** `bg-[#7000FF] text-white font-black rounded-full` with violet glow shadow
- **Ghost/Outline:** `bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10`
- **Pill Filters:** `bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-400 hover:text-white hover:border-white/30`

### Cards / Containers
- **Base Card:** `bg-[#111116] border border-white/10 rounded-3xl` — generously rounded (24px+)
- **Metric Badge:** Absolute-positioned, neon green pill: `bg-[#4ADE80]/20 text-[#4ADE80] text-xs font-mono font-bold px-3 py-1 rounded-full border border-[#4ADE80]/30`
- **Bento Card (Large):** `col-span-8 row-span-2` — dominates visual hierarchy
- **Bento Card (Small):** `col-span-4` — supporting detail card

### Inputs / Forms
- **Glassmorphic Input:** `bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#00F0FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/20 backdrop-blur-sm`
- **Textarea:** Same as above, `resize-none min-h-[120px]`
- **Radio Group:** Custom styled — active state uses `border-[#7000FF] bg-[#7000FF]/10`
- **Form Label:** `text-xs uppercase tracking-widest text-gray-500 font-bold`

### Navigation
- **Capsule Nav:** `rounded-full bg-[rgba(15,15,19,0.7)] backdrop-blur-[32px] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]`
- **Active Link:** `bg-white/[0.08] text-white border border-white/10`
- **Dropdown:** `bg-[#111116] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl`

---

## 5. Layout Principles

- **Container Max Width:** `max-w-7xl mx-auto` for most sections; `max-w-4xl` for text-heavy sections
- **Section Padding:** `py-24 md:py-32 px-6`
- **Grid System:** 12-column CSS grid with `gap-6`. Bento layouts mix `col-span-8` + `col-span-4`, `col-span-6` + `col-span-6`, and `col-span-12` for full-width moments
- **Depth / Z-layers:** Cards float on the Void Black background with subtle border glow. Key elements use `box-shadow` with colored glow (e.g., `shadow-[0_0_40px_rgba(0,240,255,0.1)]`)
- **Section Separators:** `border-t border-white/5` — barely visible, deliberate
- **Responsive:** Mobile-first on all layouts. Desktop gets asymmetric grids; mobile falls back to `grid-cols-1`

---

## 6. Design System Notes for Stitch Generation

> Copy this block into Stitch prompts for consistent generation.

```
DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first with mobile responsive
- Theme: Dark, cinematic, data-heavy luxury agency
- Background: Void Black (#0F0F13)
- Card Surface: Onyx (#111116) with border rgba(255,255,255,0.12)
- Primary Accent: Electric Cyan (#00F0FF) — CTAs, highlights, glows
- Secondary Accent: Deep Violet (#7000FF) — metrics, alternate highlights
- Positive Metric: Signal Green (#4ADE80) — badges, success states
- Warning/Urgency: Warm Amber (#F59E0B) — alerts, time-sensitive callouts
- Text L1: White (#FFFFFF) — headings
- Text L2: Off-White (#E2E8F0) — subheadings, important body
- Text L3: Charcoal (#9CA3AF) — body copy
- Text L4: Fog (#6B7280) — metadata, muted labels
- Cards: Generously rounded corners (rounded-3xl = 24px+), no solid shadows
- Buttons: Pill-shaped (rounded-full), black text on white, or colored with glow
- Inputs: Glassmorphic (bg-white/5 border-white/10), cyan focus ring
- Font: Grift Geometric (via next/font/local), all weights
- Headlines: Grift Black (900), tight tracking, clamp sizing
- Body: Grift Regular/Medium (400-500), gray-400
```
