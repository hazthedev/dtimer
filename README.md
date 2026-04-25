# D'Timer Cafe — Landing Site

3-page landing site for D'Timer Cafe, an authentic Johor cuisine restaurant in Wangsa Maju, KL.

## Tech Stack

- **Framework:** Astro 5 + TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (React islands)
- **Icons:** Lucide React + inline SVGs
- **Fonts:** Fraunces (display), Inter (body), Caveat (accent)
- **Deployment:** Vercel
- **Forms:** Formspree
- **Analytics:** Vercel Analytics

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, hallmarks, TV3 feature, menu preview, reviews, family story, location teaser |
| Menu | `/menu` | Full menu with category tabs, filters, catering CTA, order links |
| Story | `/story` | Origin story, TV3 feature, recipes, interior, visit details, contact form, socials |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
PUBLIC_WHATSAPP_NUMBER=60182035828
PUBLIC_FORMSPREE_ID=your_formspree_id
PUBLIC_FOODPANDA_URL=https://www.foodpanda.my/restaurant/dtimer-cafe
PUBLIC_GRABFOOD_URL=https://food.grab.com/my/en/restaurant/dtimer-cafe-delivery
```

## Project Structure

```
src/
  components/       # Reusable Astro & React components
  sections/         # Page sections (one per section)
  layouts/          # BaseLayout with SEO, fonts, schema
  pages/            # Astro pages (index, menu, story, 404)
  data/             # JSON data (site, menu, reviews)
  styles/           # Global CSS with Tailwind theme
  assets/images/    # Image assets (dishes, interior, family, tv3, logo)
public/
  decorations/      # SVG decorations (banana-leaf)
  favicon.svg
  robots.txt
```

## Brand Notes

- **Language:** All content in English. Johor dish names stay in original spellings.
- **Heritage:** "Since 2008" is a major trust signal — surfaced prominently.
- **TV3 Feature:** Jalan-Jalan Cari Makan (2017) is the strongest social proof.
- **Vibe:** Rooted, warm, traditional-modern. NOT hipster-industrial.

## Content Needed From Owner

1. High-res hero photo of Laksa Johor or Nasi Ambeng
2. Photos of all signature dishes (Lontong Darat 3 variants, Nasi Ambeng, etc.)
3. Interior photos
4. Owner/family photo
5. TV3 feature footage/screenshots
6. Confirmed full menu with current prices
7. Confirmed regular operating hours
8. Vector logo files
9. Catering package details

## License

Proprietary — built for D'Timer Cafe.
