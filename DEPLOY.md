# Deployment Guide

## Deploy to Vercel (Recommended)

### 1. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/dtimer-cafe.git
git branch -M main
git push -u origin main
```

### 2. Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import the `dtimer-cafe` GitHub repository
4. Configure:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add Environment Variables:
   - `PUBLIC_WHATSAPP_NUMBER` = `60182035828`
   - `PUBLIC_FORMSPREE_ID` = (your Formspree form ID)
   - `PUBLIC_FOODPANDA_URL` = (FoodPanda restaurant URL)
   - `PUBLIC_GRABFOOD_URL` = (GrabFood restaurant URL)
6. Click "Deploy"

### 3. Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add `dtimercafe.my` (or new domain)
3. Follow Vercel's DNS instructions
4. Enable SSL (automatic on Vercel)

### 4. Post-Deployment Checklist

- [ ] All 3 pages load correctly
- [ ] WhatsApp button opens with pre-filled message
- [ ] Contact form submits to Formspree
- [ ] Google Maps embed loads
- [ ] FoodPanda & GrabFood links work
- [ ] Menu tabs and filters function
- [ ] Mobile menu toggles correctly
- [ ] Images load (replace Unsplash fallbacks with real photos)
- [ ] OG images appear when sharing on social media
- [ ] Favicon displays in browser tab
- [ ] Sitemap is accessible at `/sitemap-index.xml`
- [ ] JSON-LD schema validates in Google's Rich Results Test

### 5. Analytics

1. Enable Vercel Analytics in project dashboard
2. Optionally add Google Analytics 4 tracking ID

### 6. Formspree Setup

1. Create a form at [formspree.io](https://formspree.io)
2. Copy the form endpoint ID (e.g., `xeqwvqbp`)
3. Set `PUBLIC_FORMSPREE_ID` in Vercel environment variables
4. Test the contact form on the live site

## Content Updates After Launch

Replace placeholder images in `public/images/` with real photos:

```
public/images/
  dishes/         # Food photography
  interior/       # Cafe atmosphere shots
  family/         # Heritage/people photos
  tv3/            # Press/media screenshots
  logo/           # OG images (1200x630)
```

See `public/images/README.md` for the full file list and photography guidelines.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check Node version (must be >=22) |
| Images 404 | Place images in `public/images/` and rebuild |
| Styles missing | Ensure `src/styles/global.css` imports Tailwind |
| Form not sending | Verify `PUBLIC_FORMSPREE_ID` env var |
| WhatsApp link broken | Check `PUBLIC_WHATSAPP_NUMBER` format (no +, no dashes) |
