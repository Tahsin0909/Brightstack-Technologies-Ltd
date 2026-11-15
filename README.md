# Brightstack Technologies website

Company portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Where things live

| Path | Purpose |
| --- | --- |
| `lib/content.ts` | All copy and data: services, process, values, projects, industries, articles, jobs, contact details, legal text |
| `app/` | Routes: home, about, services, services/[slug], work, work/[slug], industries, insights, insights/[slug], careers, contact, and the three legal pages |
| `components/ui.tsx` | Shared layout pieces: container, section heads, bordered link buttons, grid lines, final call to action |
| `components/Header.tsx` | Sticky header, services panel, mobile menu |
| `components/Footer.tsx` | Footer navigation and theme switcher (auto, light, dark) |
| `components/Art.tsx` | Hero and service line illustrations (inline SVG) |
| `components/ContactForm.tsx` | Contact form (client component) |
| `app/globals.css` | Colour tokens for both themes and Tailwind theme mapping |
| `public/logo.png`, `public/mark.png` | Brightstack logo and mark |

## Before going live

1. Replace the three sample projects in `lib/content.ts` with real case studies and add project images.
2. Add verified contact details to the `contact` object in `lib/content.ts`. Empty values stay hidden.
3. Connect `components/ContactForm.tsx` to an API route, server action, or form service. It validates input but does not send anything yet.
4. Add real openings to the `jobs` array when you have them.
5. Have the legal pages reviewed and adapted for your business.
6. Keep only the industries where the company has relevant experience.
