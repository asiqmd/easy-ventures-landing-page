# Easy Ventures — Corporate Website PRD

## Original Problem
Premium, award-worthy corporate marketing site for Easy Ventures (diversified parent group: Easy Truck / logistics, Easy Brick / construction, Netro Systems / technology). Mood: "Tesla meets Stripe meets Apple". Single-page, 12 sections, heavy motion.

## User Choices
- Contact form + newsletter -> SMTP email (optional; graceful degrade)
- Professional placeholder content + stock imagery
- Animated imagery + parallax hero (no video)
- Single-page smooth-scroll anchors

## Architecture
- Frontend: React 19 + CRritten craco, Tailwind, framer-motion, lenis (smooth scroll), react-fast-marquee, react-countup, lucide-react. Fonts: Outfit (display) + Manrope (body).
- Backend: FastAPI + Motor(MongoDB), aiosmtplib for SMTP. Routes under /api.
- Collections: contact_submissions, newsletter_subscribers, status_checks.

## Implemented (2026-07-30)
- 12 sections: Hero (masked line reveal, parallax, particles, animated metrics), Editorial marquee, Brands (glass cards expand-on-click), Transportation (sticky timeline + feature cards + counters), Mission/Vision (animated mesh), Leadership (grayscale->color), Culture (bento gallery + lightbox), Easy Truck (CSS fleet dashboard mock), Easy Brick (CSS project-tracker mock), Why Choose Us (counters), Testimonials (marquee), Contact (form + map), Footer (newsletter + 4 cols).
- Custom cursor, scroll progress bar, grain/grid textures, glassmorphism.
- Backend: POST /api/contact, POST /api/newsletter (dedupe), SMTP graceful skip when unconfigured.
- Tested: 100% backend + frontend (iteration_1).

## Backlog / Next
- P1: Provide SMTP credentials to activate live email delivery.
- P2: Admin view for submissions; blog/news; individual brand pages; multilingual.
