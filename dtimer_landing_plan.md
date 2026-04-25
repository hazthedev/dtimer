# D'Timer Cafe — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for D'Timer Cafe, an authentic Johor cuisine restaurant in Wangsa Maju, KL. Specializes in Laksa Johor, Nasi Ambeng, Kacang Pool, Lontong Darat, and Johor-style coffee. Family-run, operating over a decade (since 2008 per company registration). Featured on TV3's "Jalan-Jalan Cari Makan" (2017). Tech stack: Astro + Tailwind CSS + Framer Motion + Vercel. Mobile-first, fast on 4G.
>
> **Language policy: ALL CONTENT IN ENGLISH BY DEFAULT.** Johor dish names (Laksa Johor, Nasi Ambeng, Kacang Pool, Lontong Darat, Mee Rebus, Mee Bandung, etc.) stay in original spellings — they're proper food terms. Brand name "D'Timer" stays. No Bahasa Malaysia body copy translations.
>
> **⚠️ STRATEGIC NOTE:** D'Timer **already has a website** at dtimercafe.my (Bahasa Malaysia, basic WordPress). The pitch isn't "you need a website" — it's **"your current site doesn't match the quality of your food."** Reposition as a *redesign / upgrade* project.

---

## 1. Brand Audit

**Identity:** D'Timer Cafe · Wangsa Maju · Authentic Johor cuisine + Coffee · Since 2008 (Company No: 200801004765)

**The hook (design center of gravity):**
- **Authentic Johor cuisine in KL** — "rasa macam air tangan mak" (tastes like mother's cooking)
- Specializes in dishes hard to find in KL: Laksa Johor, Lontong Darat with kuah kacang/sambal/kacang pool variants, Nasi Ambeng, Kacang Pool
- **TV3 "Jalan-Jalan Cari Makan" featured (2017)**
- **Operating over a decade** — established trust, family-run
- Coffee menu alongside food (Johor-style iced coffee with condensed milk)

**Signature menu items (verified):**
- **Laksa Johor** — fish-based pekat broth, rempah, served with spaghetti, ulam, sambal belacan (RM18.90)
- **Lontong Darat** — three variations: kuah sambal, kuah kacang, kacang pool (RM19.90-20.90)
- **Nasi Ambeng Ayam Kicap** — rice with ayam kicap, mee goreng, serunding, sayur (RM24.90)
- **Kacang Pool** — Johor specialty, "best Kacang Pool in KL" per reviews
- **Mee Bandung** — RM18.90
- **Mee Rebus** — RM18.90
- **Soto Ayam** — RM16.90
- **Nasi Lemak Sotong / Ayam Goreng** — RM18.90-19.90
- **Nasi Briani Daging / Masak Merah** — RM25.90-26.90
- **Asam Pedas** — RM26.90
- **D'Timer Iced Coffee** — signature, condensed milk, brewed coffee
- **Pandan Gula Melaka cake**, brownies, kek (desserts)
- **Roti Bakar** with kaya & butter

**Audience:**
- Johor-origin Malaysians missing kampung food in KL (huge emotional pull)
- Malay-Muslim families
- Wangsa Maju locals
- Office workers seeking authentic lunch
- Tourists exploring Malaysian regional cuisine
- Older generation looking for traditional flavors

**Vibe:** Casual, family-friendly, "rasa rumah" — not minimalist-aesthetic, more comfortable home-style

**Hours (verified from IG bio):**
- Sun – Thu: 2:30pm – 11pm (Ramadhan hours; verify regular hours)
- Fri – Sat: 2:30pm – 12am
- Note: Older sources show 8am-8pm Tue-Fri / 8am-10pm Sat-Sun / Closed Mondays — *significant discrepancy, must verify with owner*

**Press / social proof:**
- **854+ Google reviews at 4.2⭐**
- **TV3 "Jalan-Jalan Cari Makan" feature (2017)** — major Malaysian food TV credibility
- 14K Instagram followers (@dtimercafe) — strong organic following
- 7K+ Facebook page likes
- Featured on Purple Durian, Trip Moments
- Available on FoodPanda + GrabFood
- **Partner with Club Cari Makan** (local food club)

**Existing website:** dtimercafe.my (basic WordPress, Bahasa Malaysia, mostly static content with stock template feel)

**Possible expansion:** Tripadvisor reviewer mentioned "Damansara branch" — they may have a second location. Verify.

**Emotional positioning:** *"Johor on a plate. Right here in Wangsa Maju. Since 2008."*

---

## 2. Design Direction

This brand needs to feel **rooted, warm, traditional-modern** — Malay heritage with KL café polish. Heart-of-home cooking, not hipster fusion.

### Color Palette

Drawing from Johor's coastal heritage, traditional Malay kitchen colors, and the deep flavors of laksa/sambal.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Warm Sand | `#F5EEDF` |
| Surface | Bone White | `#FCF8EC` |
| Primary text | Warm Black | `#211A14` |
| Secondary text | Tea Brown | `#695544` |
| **Accent (THE color)** | **Sambal Red** | `#B83A28` |
| Deep accent | Banana Leaf Green | `#3D5A3A` |
| Warm highlight | Turmeric Gold | `#D9A441` |
| Soft contrast | Coconut Cream | `#F0E2C7` |
| Deep contrast | Charred Brown | `#2A1F18` |

**Why these:**
- **Sambal red** — the soul of Malay food, deep brown-red, not bright fast-food red
- **Banana leaf green** — traditional serving leaves, kampung kitchen
- **Turmeric gold** — kuah lemak, rempah, nasi briyani
- **Warm sand & bone white** — old enamel plates, batik canvas
- **Coconut cream** — santan, the base of every Malay curry

### Typography

- **Display / Headings:** `Recoleta` (warm rounded serif) OR `Fraunces` with optical size for display — both feel like a vintage cookbook
- **Alternative for warmth:** `Bricolage Grotesque` if a sans is preferred (less traditional but still has character)
- **Body:** `Inter` — clean, mobile-friendly
- **Numerals (prices):** `Inter` bold — keep prices clean and warm
- **Accent / handwritten:** `Caveat` for "since 2008" annotations and chalkboard notes
- **Optional traditional accent:** None needed — rely on colors and photography

### Mood

Rooted · Warm · Traditional-Modern · Family · Authentic · Heritage · Heartfelt · Johor-Proud

Visual references: traditional kampung house warmth + modern Malaysian café restraint, batik patterns as subtle backgrounds, vintage Malay cookbook covers. NOT: hipster industrial, aesthetic minimalism, premium boutique.

---

## 3. Tech Stack

Same reusable foundation.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

The home page is built around **Johor authenticity + decade of trust + "rasa rumah" emotional pull**.

1. **Sticky navbar** — warm sand bg with backdrop blur, "D'Timer" wordmark in Recoleta, links right (Home · Menu · Story · Visit), sambal-red WhatsApp button
2. **Hero — full-viewport, image-led, warm**
   - Background: large hero photo of Laksa Johor steaming bowl OR a generous Nasi Ambeng spread
   - Eyebrow: "WANGSA MAJU · JOHOR CUISINE · SINCE 2008"
   - Headline: **"Johor on a plate."**
   - Subhead: "Authentic Laksa Johor, Lontong Darat, and Nasi Ambeng — recipes brought up from the south. Tastes like mom's cooking. Featured on TV3 since 2017."
   - CTAs: "See the Menu" (sambal red filled) + "Find Us" (outline)
   - Decorative: small Caveat handwritten "since 2008" annotation in tea brown, rotated -3°
3. **The Three Hallmarks section** (3-column visual — what Johor food is known for)
   - **Lontong Darat** — "Three sambals. Pick your favorite — kuah kacang, kuah sambal, or kacang pool."
   - **Laksa Johor** — "Pekat fish broth. Spaghetti. Ulam. The way they do it down south."
   - **Nasi Ambeng** — "Rice, ayam kicap, mee goreng, serunding, sayur — one plate, one tradition."
   - Each card: photo, name, 1-line poetic description
4. **The TV3 moment** (full-bleed, social proof)
   - Centered text: "Featured on TV3's Jalan-Jalan Cari Makan (2017)"
   - Heading: "Recognized by the show that knows Malaysian food best."
   - Subtle TV3 logo or descriptive text + photo of the cafe
5. **More than just Johor** (additional menu strip)
   - Heading: "Stay for the Laksa. Come back for the rest."
   - 4-card grid: Mee Rebus · Mee Bandung · Soto Ayam · Asam Pedas
   - Each card: photo, name, price, 1-line description
6. **The Coffee section** (subtle, warm)
   - Heading: "And don't skip the coffee."
   - 2-col layout: D'Timer Iced Coffee + photo + paragraph about the Johor-style coffee tradition
7. **Reviews block** — 3 selected reviews + "4.2 / 5 from 850+ diners on Google"
8. **The Family section** (heritage)
   - Photo + paragraph: "Family-run since 2008. Recipes passed down. No shortcuts. Why the cafe still feels like home."
9. **Find Us teaser** — map preview, hours summary, Get Directions CTA
10. **Footer** — wordmark, address, hours, socials, FoodPanda, GrabFood links, "Johor on a plate. Wangsa Maju, since 2008."

### Page 2 — Menu (`/menu`)

- **Menu Hero** — warm hero, headline "The Menu" + subhead "Authentic Johor cuisine, all-day coffee, kampung desserts."
- **Categories (sticky tabs, sambal-red underline on active):**
  - Johor Specialties · Nasi · Mee · Soto & Soup · Coffee · Tea · Sodas · Blended Drinks · Desserts & Pastries
- **Filter chips:** Halal ✓ · Vegetarian · Spicy 🌶️ · Signature
- **Menu cards:**
  - Bone-white cards with subtle banana-leaf SVG accent
  - Photo (4:3), name (Recoleta serif), description, price right-aligned
  - **Johor Specialty items** get a sambal-red "Johor Original" badge
  - Hover: gentle lift + sambal-red tinted shadow
  - Stagger fade-up on scroll
- **Catering / Corporate Order callout** — they offer custom corporate orders (mentioned on existing site). Add a section: "Catering for offices and events. WhatsApp us for custom Johor packages."
- **Order CTA block** at bottom — "Hungry?" + WhatsApp + FoodPanda + GrabFood buttons

### Page 3 — Story & Visit (`/story`)

- **Story Hero** — "We brought Johor to Wangsa Maju in 2008." + subhead about the family origin
- **The Beginning** — 2-col text + photo, the 2008 opening, the recipes from home
- **The TV3 Moment** — feature on the 2017 Jalan-Jalan Cari Makan recognition
- **The Recipes** — what makes their Johor dishes authentic
  - Fresh ingredients picked daily
  - Pekat fish broth for Laksa Johor
  - Three sambal variations for Lontong Darat
  - Why the rempah matters
- **The Space** — full-bleed interior carousel
  - Caption: "Family café energy. Bring your parents. Bring your kids."
- **Visit Us** — embedded Google Maps + details
  - Address: 11-G, Blok B, Plaza Wangsa Maju, Jalan Maju Ria 2, Seksyen 10, Taman Sri Rampai, 53300 KL
  - Hours, phone, parking note
- **Catering** — section about corporate orders and packages
- **Contact form** (Formspree) — Name, phone/email, message, optional reservation/event date
- **Social block** — Instagram (@dtimercafe), Facebook, FoodPanda, GrabFood
- SEO meta for story page

---

## 5. Animation Plan

This brand = **gentle, warm, considered** animations — not hipster-kinetic, not minimalist-still. Heart-felt.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Soft fade-up + slight drift | 700ms ease-out |
| Hero photo | Scale 1.02 → 1.0 settle on load | 900ms |
| Three Hallmarks | Sequential fade-up, soft stagger | 200ms between |
| TV3 moment section | Fade-in + scale settle | 600ms |
| Menu cards | Fade-up on scroll | 500ms |
| Card hover | Gentle lift + sambal-red shadow | 300ms |
| Family section | Subtle parallax-like text-photo offset | desktop only |
| Italic quotes | Word-by-word fade-in | poetic |
| Section transitions | Astro view transitions | built-in |
| Navbar scroll | Backdrop blur + bottom hairline | 250ms |
| WhatsApp float | Gentle pulse every 5s | warm presence |

**Rules:**
- Animations 500–700ms — relaxed timing matches the brand
- No bouncy springs — use ease-in-out
- Respect `prefers-reduced-motion`
- No marquees, no aggressive parallax
- The brand is patient — animations should feel patient too

---

## 6. Copywriting

### Voice

- Warm, proud-but-humble, family
- "Tastes like mom's cooking" tone
- Direct sentences, but with feeling
- Not corporate, not edgy
- Embraces heritage without being preachy

### Sample Copy

**Hero**
> WANGSA MAJU · JOHOR CUISINE · SINCE 2008
> # Johor on a plate.
> Authentic Laksa Johor, Lontong Darat, and Nasi Ambeng — recipes brought up from the south. Tastes like mom's cooking. Featured on TV3 since 2017.
>
> [See the Menu] [Find Us]

**Three Hallmarks intro**
> What Johor cooks better.
> Three dishes you'll struggle to find done right outside the south.

**Lontong Darat description**
> Three sambals. Pick your favorite — kuah kacang, kuah sambal, or kacang pool. Each one a different way home.

**Laksa Johor description**
> Pekat fish broth. Spaghetti, not laksa noodles (yes, on purpose). Ulam, sambal belacan. The way they do it down south.

**Nasi Ambeng description**
> Rice, ayam kicap, mee goreng, serunding, sayur — one plate, one tradition. Built to share, easier to finish.

**TV3 moment**
> Featured on TV3's Jalan-Jalan Cari Makan, 2017.
> Recognized by the show that knows Malaysian food best — for serving Johor cuisine the way it should be.

**More than just Johor**
> Stay for the Laksa. Come back for the rest.
> The Mee Rebus, Mee Bandung, Soto Ayam, and Asam Pedas all tell the same story — flavor first, no shortcuts.

**The Coffee section**
> And don't skip the coffee.
> The D'Timer Iced Coffee is brewed strong, mixed with condensed milk, served cold. Old-school Johor café tradition. Pairs with everything.

**The Family section**
> Family-run since 2008.
> Recipes passed down. No shortcuts. The cafe still feels like home because it is.

**Footer tagline**
> Johor on a plate. Wangsa Maju, since 2008.

**WhatsApp CTA**
> WhatsApp us — for table holds, catering orders, or to ask if Lontong Darat is on today.

### SEO Meta

- **Home title:** `D'Timer Cafe Wangsa Maju | Authentic Johor Cuisine Since 2008`
- **Home meta description:** `Laksa Johor, Lontong Darat, Nasi Ambeng — authentic Johor cuisine in Wangsa Maju, KL. Featured on TV3. Halal, family-run since 2008. Now serving on FoodPanda & GrabFood.`
- **Schema:** Restaurant, servesCuisine: ["Malaysian", "Johor", "Halal"], priceRange: "$$"
- **OG image:** Hero shot of Laksa Johor or Nasi Ambeng spread

---

## 7. UI/UX Principles For This Brand

1. **The Johor identity is sacred** — surface "Johor" prominently in nav, hero, menu badges
2. **The TV3 feature is gold** — major social proof, surface on home + story page
3. **The 17+ year heritage matters** — older establishments need "since 2008" everywhere as trust
4. **Photography embraces warmth** — steaming bowls, generous portions, family-style spreads
5. **Three sambal variations of Lontong Darat** is a unique feature — design copy that highlights this choice as a brand quirk
6. **Catering / corporate orders** is a real revenue lever — surface this in menu + visit pages
7. **Mobile-first because Wangsa Maju locals** — most diners are within 5km, mobile pre-visit lookups dominate
8. **Multiple delivery platforms** (FoodPanda + GrabFood) — link both
9. **Halal-confident, no need to over-explain** — Malay-Muslim audience assumes halal, just confirm with badge
10. **Compete with the existing dtimercafe.my** — make the new design dramatically more polished. The reference point is set.

---

## 8. Content Needed From Owner

1. **High-res hero photo of Laksa Johor or Nasi Ambeng** — must be steaming, generous, magazine-quality
2. **Photos of all signature dishes** — Lontong Darat (all 3 sambals), Nasi Ambeng, Mee Bandung, Mee Rebus, Soto Ayam, Asam Pedas, D'Timer Iced Coffee
3. **Photos of desserts** — Pandan Gula Melaka cake, brownies, etc.
4. **Interior photos** — family café atmosphere
5. **Owner / family photo** — humanizes the heritage angle (if comfortable)
6. **TV3 feature footage / screenshots** — if available, helps amplify the social proof
7. **Confirmed full menu with current prices** — verify against the dtimercafe.my list
8. **Confirmed hours** — IG says 2:30pm-11pm/12am Sun-Thu/Fri-Sat (Ramadhan), Purple Durian says 8am-8pm Tue-Fri / 8am-10pm Sat-Sun. **Major discrepancy — must clarify regular hours**
9. **WhatsApp business number** (018-203 5828 publicly listed)
10. **Logo files** (vector preferred)
11. **Family / origin story** — the founder, the recipes, why Wangsa Maju
12. **Catering package details** — what's offered, pricing, ordering process
13. **Confirmation:** Damansara branch — does it exist? (Tripadvisor reviewer mentioned it)
14. **Permission to mention TV3 feature** as press

---

## Phase-by-Phase Development Checklist

> Paste into Claude Code phase by phase. One at a time.

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add React: `npx astro add react`
- [ ] Install: `framer-motion`, `lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/recoleta` (or `@fontsource/fraunces` as fallback), `@fontsource/inter`, `@fontsource/caveat`
- [ ] Folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, menu.astro, story.astro
    styles/global.css
    assets/images/{dishes,interior,family,tv3,logo}
    data/menu.json, reviews.json, site.json
  public/
  ```
- [ ] Init Git, `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`, `PUBLIC_FOODPANDA_URL`, `PUBLIC_GRABFOOD_URL`

### Phase 1 — Design System

- [ ] Extend Tailwind theme with palette (warm-sand, bone-white, warm-black, tea-brown, sambal-red, banana-leaf-green, turmeric-gold, coconut-cream, charred-brown)
- [ ] Configure font families: `font-display` (Recoleta or Fraunces), `font-body` (Inter), `font-accent` (Caveat)
- [ ] Custom Tailwind animations: `fade-up-soft`, `gentle-rise`, `pulse-warm`
- [ ] Create subtle banana-leaf SVG decoration in `public/decorations/` for accent moments
- [ ] Create `BaseLayout.astro` — light theme default, fonts loaded with `font-display: swap`
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: primary (sambal-red filled), outline (sambal-red border), ghost
  - [ ] `Container.astro` — max-w-7xl, responsive padding
  - [ ] `SectionHeading.astro` — eyebrow + serif headline + subhead
  - [ ] `DishCard.astro` — dish card with photo, name, description, price, optional Johor Original badge
  - [ ] `Eyebrow.astro` — small uppercase letter-spaced
- [ ] Create `Navbar.astro` — warm-sand bg with backdrop blur, "D'Timer" wordmark in Recoleta, mobile hamburger drawer
- [ ] Create `Footer.astro` — charred-brown bg, coconut-cream text, 3-col, tagline "Johor on a plate. Wangsa Maju, since 2008."
- [ ] Create `WhatsAppFloat.astro` — fixed bottom-right, sambal-red circle, gentle pulse
- [ ] Test responsiveness at 375px / 768px / 1440px

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` — name "D'Timer Cafe", tagline, address (11-G, Blok B, Plaza Wangsa Maju, Jalan Maju Ria 2, Seksyen 10, Taman Sri Rampai, 53300 KL), phone (018-203 5828), WhatsApp, hours object (verify), social URLs (@dtimercafe IG, FB), FoodPanda + GrabFood URLs, Google Maps embed URL
- [ ] Create `src/data/menu.json` with categories: `Johor Specialties`, `Nasi`, `Mee`, `Soto & Soup`, `Coffee`, `Tea`, `Sodas`, `Blended Drinks`, `Desserts & Pastries`. Each item: name, description, price, image, tags (halal/vegetarian/spicy/signature), optional `johorOriginal: true` flag
- [ ] Mark Laksa Johor, Lontong Darat (3 variants), Nasi Ambeng, Kacang Pool as `johorOriginal: true`
- [ ] Create `src/data/reviews.json` — 3 selected Google reviews highlighting Johor authenticity, with quote, name, rating

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Full viewport, warm background
  - Hero photo: large Laksa Johor or Nasi Ambeng image (with subtle dark overlay for text legibility)
  - Eyebrow: "WANGSA MAJU · JOHOR CUISINE · SINCE 2008" — sambal-red, tracking-widest
  - Headline: "Johor on a plate." — Recoleta, 64px+ desktop / 40px mobile, bone-white
  - Subhead: 18-20px, max-w 540px, coconut-cream
  - CTAs: "See the Menu" (sambal-red filled) + "Find Us" (outline)
  - Caveat handwritten annotation "since 2008" rotated -3°
  - Framer Motion: gentle stagger entrance
- [ ] **Three Hallmarks** (`src/sections/ThreeHallmarks.astro`):
  - Eyebrow: "WHAT JOHOR COOKS BETTER"
  - Heading: "Three dishes you'll struggle to find done right outside the south."
  - 3-card grid (desktop) / stacked (mobile): Lontong Darat / Laksa Johor / Nasi Ambeng
  - Each card: photo, name, 1-line poetic description
  - Sequential fade-up stagger
- [ ] **TV3 Moment** (`src/sections/TV3Moment.astml:`):
  - Full-bleed warm-sand or banana-leaf-green section
  - Centered eyebrow: "AS FEATURED ON"
  - Heading: "TV3's Jalan-Jalan Cari Makan, 2017"
  - Body: brief explanation of the recognition
  - Optional: photo of the feature or cafe
- [ ] **More Than Just Johor** (`src/sections/MoreDishes.astro`):
  - Heading: "Stay for the Laksa. Come back for the rest."
  - 4-card grid: Mee Rebus, Mee Bandung, Soto Ayam, Asam Pedas
- [ ] **The Coffee** (`src/sections/TheCoffee.astro`):
  - 2-col layout: photo of D'Timer Iced Coffee + paragraph
  - Heading: "And don't skip the coffee."
- [ ] **Reviews** (`src/sections/Reviews.astro`):
  - Heading: "4.2 / 5 from 850+ diners on Google"
  - 3 review cards on bone-white bg
- [ ] **The Family** (`src/sections/TheFamily.astro`):
  - 2-col: photo + paragraph about family heritage, 17 years, recipes
- [ ] **Find Us teaser** (`src/sections/FindUsTeaser.astro`):
  - Map preview + hours + Get Directions CTA
- [ ] Wire `pages/index.astro`, add SEO meta + OG tags

### Phase 4 — Menu Page (`/menu`)

- [ ] **Menu Hero** — warm hero, headline "The Menu", subhead "Authentic Johor cuisine, all-day coffee, kampung desserts."
- [ ] **Category Tabs** (`src/components/MenuTabs.tsx`) — React island, sticky, sambal-red underline animated with `layoutId`
- [ ] **Filter chips** — Halal ✓, Vegetarian, Spicy 🌶️, Signature (multi-select)
- [ ] **Menu grid** (`src/components/MenuGrid.tsx`):
  - 1 / 2 / 3 col responsive
  - Bone-white cards with subtle banana-leaf SVG accent
  - Photo (4:3), name (serif), description, price right-aligned
  - Johor Original items get sambal-red "Johor Original" badge
  - Hover: lift, sambal-red tinted shadow
  - Fade-up stagger on scroll
- [ ] **Catering Callout** section (mid-page):
  - Heading: "Catering for offices and events."
  - Body about custom Johor packages
  - WhatsApp CTA
- [ ] **Order CTA block** at bottom — "Hungry?" + WhatsApp + FoodPanda + GrabFood
- [ ] SEO meta for menu page

### Phase 5 — Story Page (`/story`)

- [ ] **Story Hero** — "We brought Johor to Wangsa Maju in 2008." + subhead
- [ ] **The Beginning** — 2-col text + photo, 2008 opening, recipes from home
- [ ] **The TV3 Moment** — feature on 2017 Jalan-Jalan Cari Makan
- [ ] **The Recipes** — what makes Johor dishes authentic, fresh ingredients, pekat fish broth, three sambals
- [ ] **The Space** — full-bleed interior carousel
  - Caption: "Family café energy. Bring your parents. Bring your kids."
- [ ] **Visit Us** — Google Maps embed + address, hours table, phone, parking
- [ ] **Catering section** — corporate orders, custom packages
- [ ] **Contact form** (`src/components/ContactForm.tsx`):
  - Fields: name, phone/email, message, optional reservation/event date
  - Formspree submit
- [ ] **Social block** — IG, FB, FoodPanda, GrabFood
- [ ] SEO meta for story page

### Phase 6 — Animations Polish

- [ ] All scroll reveals: `whileInView` + `viewport={{ once: true, margin: "-50px" }}`
- [ ] Hero gentle stagger
- [ ] Three Hallmarks sequential fade-up
- [ ] Card hover transitions (lift + sambal-red shadow)
- [ ] Family section parallax (desktop only)
- [ ] Navbar scroll backdrop blur + hairline
- [ ] Menu tab `layoutId` for underline
- [ ] CTA hover transitions
- [ ] `useReducedMotion()` to disable variants
- [ ] Slow 3G test

### Phase 7 — Images & Assets

- [ ] Organize: `dishes/`, `interior/`, `family/`, `tv3/`, `logo/`
- [ ] Astro `<Image>` for all photos, WebP, lazy load (except hero)
- [ ] Hero `<Picture>` with art-directed crops
- [ ] Descriptive alt text everywhere
- [ ] OG image (1200x630): Laksa Johor or Nasi Ambeng + wordmark overlay
- [ ] Favicon set
- [ ] Subtle banana-leaf SVG decorations for accent backgrounds
- [ ] **If photos blurry from internet sources:** run through Upscayl 2x first

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (Section 6)
- [ ] OG tags
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD `Restaurant` schema:
  - Name, address, phone
  - openingHoursSpecification (verify)
  - priceRange "$$"
  - servesCuisine ["Malaysian", "Johor", "Halal"]
  - aggregateRating (4.2, 850+)
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse 95+ all categories
- [ ] All images lazy except hero
- [ ] Font-display: swap
- [ ] Color contrast WCAG AA — verify sambal-red on warm-sand backgrounds
- [ ] Keyboard nav works
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states (sambal-red outline)
- [ ] VoiceOver / NVDA test

### Phase 10 — Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel, configure build
- [ ] Set env vars
- [ ] Test on real iPhone Safari + Android Chrome
- [ ] Custom domain wiring
- [ ] Vercel Analytics on
- [ ] UptimeRobot monitor

### Phase 11 — QA Before Handoff

- [ ] All browsers
- [ ] WhatsApp opens with pre-filled message
- [ ] Contact form delivers
- [ ] Google Maps embed loads
- [ ] FoodPanda + GrabFood links work
- [ ] All prices verified
- [ ] Proofread — no typos
- [ ] 404 page exists
- [ ] 3G throttle test

### Phase 12 — Handoff

- [ ] Client README — change requests, retainer scope, domain renewal
- [ ] **Domain transition note:** dtimercafe.my already exists. Either replace or set up subdomain redirect.
- [ ] Send: live URL, page summary, screenshots, invoice
- [ ] Tag v1.0.0 in Git
- [ ] Add to portfolio as case study

---

## Notes for Claude Code

- Read previous phase output before next phase
- Commit after each phase: `feat(phase-3): home page sections`
- Default mood: rooted, warm, traditional-modern, family-run, heritage-proud
- This is NOT a hipster cafe — avoid industrial fonts, dark moody palettes, aesthetic minimalism
- Photography embraces steaming bowls, generous portions, family-style spreads — not styled-pretty
- 3 static pages, no CMS, no auth
- Placeholder images: traditional Malaysian / Johor cuisine photos from Unsplash
- **Language rule (strict):** All readable content in English. Johor dish names (Laksa Johor, Nasi Ambeng, Kacang Pool, Lontong Darat, etc.) stay in original spellings. No body copy translations.
- **Heritage rule:** Surface "since 2008" prominently — it's a major trust signal in a market full of trendy cafes that close in a year.
- **TV3 rule:** The Jalan-Jalan Cari Makan feature is the strongest single piece of social proof. Surface on home and story page.

---

## Pricing Suggestion

| Item | Price (RM) |
|------|-----------|
| 3-page landing site (redesign of existing site) | 3,200 |
| Domain (.com or .com.my, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~3,400** |
| Monthly maintenance retainer | 180/month |

Portfolio discount: RM2,500.

**Strong upsell paths:**
- Bilingual EN/BM site (since their existing site is BM): +RM1,200
- Catering/corporate order form: +RM800
- Photography session for signature dishes: +RM500
- Loyalty/regulars program: +RM1,200
- Monthly content support: +RM400/month

---

## Pitch Angle For D'Timer

Honest pitch (since they already have a site):

> "I noticed dtimercafe.my exists — it does the basics, but it doesn't capture what's special about D'Timer. The TV3 feature, the 17 years of heritage, the three different sambals on Lontong Darat, the way customers say it tastes like home — none of that comes through. I'd love to redesign the site so it tells the story your food already tells."

Works because:
- Acknowledges the existing site without insulting it
- Specific (TV3, 17 years, three sambals, customer quotes)
- Frames as upgrade not replacement
- Speaks to their pride in authenticity
