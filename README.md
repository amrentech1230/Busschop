# Busschop Zwembaden — Homepage Redesign

A premium, animated homepage for **Busschop Zwembaden**, a Belgian swimming pool specialist offering custom pool construction, renovation, and technology services.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Custom scroll animations** (Intersection Observer API)
- **CSS animations** and transitions

## Design Decisions

### Visual Direction
The design draws from premium architectural and luxury real estate aesthetics rather than typical contractor websites. Key influences:
- **Arc Design System** (Refero reference) — clean typography, generous spacing, dark/light contrast
- **Biopool.be** — Belgian premium pool company tone, service structure
- **Pinterest references** — cinematic hero sections, editorial layouts, luxury hospitality feel

### Typography
- **Playfair Display** for headlines — adds editorial elegance and premium feel
- **Inter** for body text — clean, highly readable, modern
- Fluid typography using `clamp()` for responsive scaling without breakpoints

### Color Palette
- **Dark charcoal** (#0a0f14) — used for dramatic sections, conveys depth
- **Warm cream** (#faf7f4) — primary background, softer than pure white
- **Warm accent** (#8b7355) — gold-brown accent that suggests natural materials and craftsmanship
- **Deep water** (#4a7c8c) — subtle teal used sparingly, avoids typical "pool blue" cliché

### Layout & Spacing
- Generous negative space throughout — premium brands breathe
- Asymmetric grids in services section — each service panel alternates layout direction
- Container max-width of 1440px with progressive padding
- Section padding uses `clamp()` for fluid vertical rhythm

### Animation Philosophy
- **Scroll reveals** — elements animate in as they enter viewport using Intersection Observer
- **Image reveals** — clip-path transitions create cinematic unveiling effects
- **Parallax** — subtle depth on hero background
- **Staggered entries** — elements within sections animate sequentially for rhythm
- **No excessive motion** — all animations respect prefers-reduced-motion implicitly through reasonable defaults

### Section Structure
1. **Hero** — Full-viewport cinematic opening with architectural pool imagery, staggered text reveal
2. **Introduction** — Company positioning with stats and image reveal
3. **Services** — Three core services with alternating image/text layout
4. **Craftsmanship** — Value proposition cards with icon details
5. **Process** — Step-by-step timeline showing the client journey
6. **Projects** — Filterable grid gallery with hover interactions
7. **Testimonial** — Full-width parallax quote section
8. **After-Sales** — Sticky sidebar with service card grid
9. **CTA** — Strong closing section with multiple contact options
10. **Footer** — Complete site navigation and contact details

### Responsive Approach
- Mobile-first design philosophy
- Navigation collapses to full-screen overlay on mobile
- Typography scales fluidly via clamp()
- Grid layouts adapt from single-column (mobile) to multi-column (desktop)
- Touch-friendly tap targets (min 44px)
- Animations simplified on mobile where appropriate

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Tailwind base + custom utilities
│   ├── layout.tsx     # Root layout with fonts & metadata
│   └── page.tsx       # Homepage composition
├── components/
│   ├── Header.tsx     # Fixed navigation with scroll behavior
│   ├── Hero.tsx       # Cinematic hero with parallax
│   ├── Introduction.tsx
│   ├── Services.tsx   # Three-pillar services section
│   ├── Craftsmanship.tsx
│   ├── Process.tsx    # Timeline/steps component
│   ├── Projects.tsx   # Filterable gallery grid
│   ├── Testimonial.tsx
│   ├── AfterSales.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── lib/
    ├── useScrollReveal.ts  # Intersection Observer hook
    └── useCounter.ts       # Animated number counter hook
```

## Notes

- English placeholder copy is used for design evaluation purposes
- Production version will be translated to Dutch (NL)
- Images are from Unsplash and used for demonstration; final production will use actual Busschop photography
- Contact details are placeholder and should be updated with real business information
