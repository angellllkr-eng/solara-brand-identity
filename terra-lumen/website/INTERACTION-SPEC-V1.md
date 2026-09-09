# Terra Lumen Website Interaction Spec v1

Status: VERIFIED — interaction contract captured for design and engineering handoff.

## Responsive behavior
- Desktop Home: full-bleed seasonal hero, sticky utility header, three-card seasonal snapshot, featured product grid, stories carousel, retail map, trust/footer.
- Mobile Home: compact header, short hero loop, swipeable seasonal snapshot, one-column products, vertical stories, tappable retail list, sticky primary CTA when relevant.
- Desktop PDP: two-column gallery + purchase module; tabs for structured product documentation; persistent compare bar.
- Mobile PDP: swipe gallery; collapsed sticky product module; accordions for Specs/Downloads/Installation; touch-first UGC.

## Media
- Hero video: autoplay muted, inline controls/fallback poster, captions/transcript, seasonal media key.
- Story video: play overlay, modal/detail view, captions and transcript.
- Images: responsive sources; lazy-load non-critical media; AVIF/WebP where supported.
- 360/3D: progressive enhancement; never block core purchase information.

## Commerce interactions
- Add to cart → mini-cart slide-in → relevant bundle suggestion → checkout.
- Sticky PDP purchase CTA remains available after the primary module leaves the viewport.
- Preorder → email capture + expected ship date + deposit logic when the product contract supports it.
- Apple Pay/Google Pay shown only when actually configured and supported by the payment architecture.

## Discovery
- Compare toggle persists selected products locally; compare bar appears after selection.
- Product quiz: start → questions → recommendation → optional email capture.
- Retail locator: filter by partner/pop-up/flagship; mobile exposes list and Open in Maps.

## Accessibility
- Keyboard-operable navigation, galleries, compare controls, accordions and forms.
- Visible focus states and logical focus order.
- ARIA labels for icon-only controls and gallery controls.
- Minimum touch-target sizing appropriate for mobile.
- Reduced-motion preference disables non-essential parallax and autoplay motion where practical.

## Analytics contract
Emit events only after the corresponding user action occurs:
`view_item`, `compare_add`, `compare_remove`, `quiz_start`, `quiz_complete`, `add_to_cart`, `begin_checkout`, `purchase`, `demo_request`, `wholesale_inquiry`, `newsletter_signup`, `retail_locator_view`.

## Seasonal behavior
Changing the active season updates the approved hero media, campaign line, accent treatment, editorial selection, featured products and retail activation. Seasonal changes must use published CMS data; no client-side hard-coded campaign claims.

## Release rule
Interactions are READY only after implementation is tested on supported desktop/mobile breakpoints, keyboard navigation is verified, analytics events are observed, and media fallbacks are tested.
