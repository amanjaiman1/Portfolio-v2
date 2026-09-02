# Project thumbnails

These files are referenced by path from `src/constants/index.js`, so the
filenames must match exactly.

## 2026 projects

- `aevoura.webp`
- `aabha.webp`
- `section.webp`
- `pointofview.webp`
- `warlife.jpg`
- `frankcalculator.jpg`
- `sortandvisualize.jpg`

## Featured

- `3DTshirt.jpg` — referenced from `src/components/FeaturedProject.jsx`

## Adding a new one

Cards render 16:9 via `object-cover`, so a 1600x1000 WebP (quality ~82) is the
house format — it crops cleanly and stays well under 150 KB. The four Aevoura
collection posters above were captured at that size.

Until an image is uploaded, the card shows an on-brand gradient with the
project name as a graceful fallback.
