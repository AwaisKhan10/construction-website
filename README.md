# Meridian Build Group — Premium Construction Website

A world-class premium construction company website built with Next.js, featuring modern animations, multi-language support, and dark/light themes.

## Features

- **11 Pages**: Home, About, Services, Projects, Project Details, Team, Careers, Testimonials, Safety & Quality, Blog, Contact
- **3 Languages**: English, German, French (via next-intl)
- **Dark & Light Theme** toggle
- **Premium Animations**: GSAP, Framer Motion, Lenis smooth scroll
- **SEO Optimized**: Metadata, sitemap.xml, robots.txt
- **Fully Responsive** mobile-first design

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion + GSAP
- next-intl (i18n)
- next-themes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Language Routes

- English: `/en`
- German: `/de`
- French: `/fr`

## Color Palette

| Color | Hex |
|-------|-----|
| Primary (Deep Navy) | `#0A2540` |
| Secondary (Gold) | `#FFB703` |
| Accent (Orange) | `#FCA311` |
| Dark Background | `#0F172A` |

## Project Structure

```
src/
├── app/[locale]/     # All pages with locale routing
├── components/       # UI, layout, home sections
├── data/             # Mock data (projects, team, etc.)
├── i18n/             # Internationalization config
messages/             # Translation files (en, de, fr)
```

## Build

```bash
npm run build
npm start
```

## Next Steps (Backend)

- Custom admin panel
- MySQL database integration
- Contact form API
- Careers application upload
- CMS for content management
