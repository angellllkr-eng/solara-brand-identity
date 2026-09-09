# Terra Lumen Website Handoff — Implementation Checklist v1

Status: READY

## Design
- Import/create Home and PDP desktop/mobile frames in the canonical Terra Lumen Figma file.
- Componentize Header, Footer, Hero, Seasonal Snapshot, Product Card, Compare Bar, Story Card, Retail Locator, Trust Strip, PDP Purchase Module and Support/Doc modules.
- Preserve CMS field names in component/layer metadata.
- Create responsive desktop/tablet/mobile variants.

## CMS
- Create Season, Product, Story, Retail Partner, Event, FAQ/Doc and Global Settings models.
- Seed QA data for four seasons and representative products.
- Validate product fields against the canonical architecture contract.

## Frontend
- Scaffold the canonical routes in `clickable_sitemap.json`.
- Implement seasonal CSS variables and season-driven media/content.
- Implement compare persistence with localStorage.
- Implement Product/Article/LocalBusiness structured data where applicable.
- Implement loading, empty, error and unavailable states.

## Commerce
- Select and explicitly configure one commerce platform before integration.
- Implement cart, checkout, preorder/deposit behavior only after the commerce contract is selected.
- Do not represent Stripe, Shopify, Commerce Layer, Apple Pay or Google Pay as live until independently verified.

## Search / Retail / Analytics
- Select and configure search and map providers before wiring production integrations.
- Define analytics events from `website-architecture.v1.json`.
- Validate purchase, inquiry, locator and newsletter events in a non-production environment first.

## QA release gate
- All canonical routes resolve.
- No broken or placeholder media.
- Responsive behavior verified.
- Keyboard and screen-reader flow verified.
- WCAG AA checks completed.
- Structured data validates.
- Lighthouse targets measured.
- Commerce failure states tested.
- Rollback path documented.

## Evidence rule
Planning documents, mockups and Figma frames are handoff artifacts. They do not constitute a live deployment. Every connected service and production route must be independently verified before being marked live.
