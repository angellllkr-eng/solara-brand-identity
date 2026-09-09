# Terra Lumen Website Handoff Package v1

Status: READY — canonical handoff record for design and engineering.

## Source assets

- `clickable_sitemap.json` — canonical route/page relationship contract.
- `home_desktop_annotated_frame.png` — annotated Home desktop frame.
- `pdp_desktop_annotated_frame.png` — annotated PDP desktop frame.
- `website-architecture.v1.json` — CMS/content architecture contract.
- `INTERACTION-SPEC-V1.md` — interaction, responsive, accessibility and analytics behavior.

## Brand tokens

```css
--color-primary: #2C3E2D;
--color-accent: #E8A87C;
--color-bg: #F5E6D3;
--color-highlight: #C9A227;
--color-support: #A8B5A0;
```

## Canonical routes

- `/`
- `/systems`
- `/systems/:slug`
- `/season/:season`
- `/stories`
- `/where-to-buy`
- `/support`
- `/partners`
- `/account`
- `/checkout`

## Design handoff

Create reusable components for Header, Footer, Hero, Seasonal Snapshot, Product Card, Compare Bar, Story Card, Retail Locator, Trust Strip, PDP Purchase Module and Support/Doc modules. Desktop and mobile variants must preserve the same content/data keys.

## CMS handoff

Core models: Season, Product, Story, Retail Partner, Event, FAQ/Doc, Global Settings. Use the existing website architecture as the source of truth for fields and relationships.

## Engineering handoff

Implement seasonal CSS variables, route templates, CMS data loading, product structured data, compare persistence, purchase flow, accessibility states and analytics events. Vendor integrations such as commerce, search, maps, analytics and email remain unconfigured until explicitly selected and connected.

## QA release gates

- All canonical routes resolve.
- No placeholder or broken media on production pages.
- CMS data renders correctly.
- Product/SEO structured data validates.
- Checkout and form failure states are tested.
- WCAG AA checks pass for released flows.
- Responsive QA completed.
- Lighthouse performance/accessibility targets measured before release.
- Rollback path documented.

## Source-of-truth rule

This handoff package, the existing `WEBSITE-ARCHITECTURE-V1.md`, sitemap/data contracts and interaction specification form the Terra Lumen website implementation baseline. Mockups or planning documents do not constitute a live deployment claim.
