# Terra Lumen Website Architecture v1

Status: VERIFIED — architecture specification captured in the existing Terra Lumen/SOLARA estate.

## 1. Product goal

Terra Lumen is presented as a seasonal, eco-luxury energy and lighting brand: emotional storytelling first, clear system/product understanding second, and trustworthy purchase/support paths throughout.

Primary journeys:
- Explorer → TL-40/TL-80 → buy or bundle.
- Cabin owner → TL-120/TL-Cell Reserve → research → consult/purchase.
- Gift/lifestyle buyer → Lighting/Soft Goods → low-friction purchase.
- Retail/partner → Where to Buy/Wholesale → inquiry or partnership.

## 2. Information architecture

Primary navigation:
- Home
- Systems
  - Panels: TL-40, TL-80, TL-120
  - Power Cells: Mini, Standard, Reserve
  - Lighting
  - Soft Goods & Accessories
  - Compare Panels
- Seasonal
- Stories
- Where to Buy
- Journal
- Support
- Shop

Utility navigation: Search, Account/Orders, Cart, Language/Region.

Footer: About, Careers, Press, Wholesale, Sustainability, Legal, Privacy, Newsletter, Social, Store Locator.

## 3. Core templates

### Home
Hero seasonal story; seasonal snapshot; three value pillars; featured products; stories; retail/pop-up discovery; sustainability/spec trust strip; newsletter/community.

### Systems listing
Seasonal category hero; filters; product grid; quick view; persistent compare; system-selection education/quiz.

### Product detail
Lifestyle/studio/packaging gallery; name, price, variants, buy/preorder, consult; use cases; warranty/repairability/material trust; narrative; specs/downloads/install; in-the-wild media; comparison; bundles; shipping/returns; reviews/Q&A; related stories; support.

### Seasonal hub
Seasonal film and manifesto; limited bundles; hero/micro stories; events/pop-ups; partners; waitlist/RSVP.

### Stories / Journal
Featured film; article templates for essays/interviews/how-to/field reports; tags for place/product/creator/season; related content and subscription.

### Where to Buy
Retail/pop-up locator; partner profiles; curated sets; wholesale inquiry.

### Support / Docs
Searchable knowledge base; downloads; datasheets/CAD/certifications; warranty registration; contact and repair flow.

### Checkout / Account
Progressive one-page checkout; seasonal accessory/gift-wrap upsell; confirmation with ship expectation and care/referral content. Account contains orders, downloads, warranty, saved setups, comparisons, and subscription management.

## 4. CMS/data model

Core content types:
- Season: name, hero media, manifesto, color tokens, featured products, events, SEO.
- Product: name, slug, variants, specs, media, videos, bundles, SEO, seasonal tags, SKU/availability.
- Story: title, author, place tags, season, media, body, related products, SEO.
- Retail Partner: name, location, type, curated products, contact.
- Event: date, location, RSVP, partner.
- FAQ/Doc: title, body, attachments, product/season references.
- Global Settings: navigation, footer, seasonal tokens, typography, regions.

Relationships:
- Product ↔ Season: many-to-many.
- Story ↔ Product: many-to-many.
- Event ↔ Partner: many-to-many.

## 5. Seasonal theme tokens

```css
--color-primary: #2C3E2D;
--color-accent: #E8A87C;
--color-bg: #F5E6D3;
--color-highlight: #C9A227;
--color-support: #A8B5A0;
```

The active season controls hero media, accent treatment, editorial emphasis and curated product sets. Contrast must remain accessible in every theme.

## 6. Conversion system

- Hero CTA → Systems or seasonal discovery.
- Sticky PDP purchase action.
- Persistent compare bar.
- “Which Terra Lumen system fits my season?” recommendation flow.
- Demo/partner booking.
- Clear warranty, returns and support paths.
- UGC/creator proof on product pages.
- Post-purchase care and referral flow.

## 7. SEO, analytics and performance

SEO requirements:
- Product, Article and LocalBusiness structured data where applicable.
- Canonical product/variant handling.
- Seasonal landing pages plus archives.
- Sitemap, robots and hreflang when regions/languages are actually launched.
- Unique title/meta/OG fields per indexable page.

Analytics events:
- view_item
- compare_add / compare_remove
- quiz_start / quiz_complete
- add_to_cart
- begin_checkout
- purchase
- demo_request
- wholesale_inquiry
- newsletter_signup
- retail_locator_view

Performance/accessibility targets:
- Responsive images with AVIF/WebP where supported.
- Lazy loading for non-critical media.
- SSR/ISR for indexable content.
- WCAG AA baseline.
- Keyboard navigation and visible focus.
- Captions/transcripts for video.
- Alt text for meaningful imagery.
- Lighthouse target: 90+ performance and 90+ accessibility as an engineering goal, not a claim until measured.

## 8. Recommended implementation boundary

Frontend: Next.js/React is the preferred implementation direction for SSR/ISR and content-driven seasonal pages.
CMS: Sanity or Contentful; select one after validating content workflows and ownership.
Commerce: Shopify headless or Commerce Layer; selection requires real catalog/bundle/payment requirements.
Payments: Stripe plus Apple Pay/Google Pay where supported by the chosen commerce/payment architecture.
Search: Algolia or equivalent only if native CMS/site search is insufficient.
Maps: Mapbox or equivalent for retail locator.
Email: Klaviyo or equivalent for lifecycle/seasonal campaigns.
Analytics: GA4 plus a server-side/event-routing layer where justified.

No external vendor is treated as configured or live by this specification alone.

## 9. Launch gates

### Content
- Product data and SKU mapping complete.
- Seasonal content and media supplied.
- Legal, warranty, shipping and returns copy approved.
- Partner/event data verified.

### Engineering
- All core routes resolve.
- Product, seasonal, story and support data render from the selected source of truth.
- Checkout/payment callbacks tested in a non-production environment first.
- Forms have validation, abuse controls and observable failure states.
- Analytics events verified against actual user actions.

### Quality
- Mobile and desktop QA.
- Accessibility audit.
- Structured-data validation.
- Sitemap/robots/canonical validation.
- Performance measurement.
- Broken-link and media checks.
- Production rollback path documented.

### Release rule
READY means architecture, content, integrations and measured QA agree. Strategy or mockups alone never constitute a live-site claim.
