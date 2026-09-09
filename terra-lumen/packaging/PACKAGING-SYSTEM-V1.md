# Terra Lumen Packaging System v1

**Status:** VERIFIED — specification captured in GitHub
**Brand:** Terra Lumen
**Parent identity system:** SOLARA / A11-K
**Scope:** Product · retail · logistics · seasonal packaging

## 1. Locked design language

Terra Lumen packaging is **natural, warm, quietly premium, seasonal, and photogenic**. It is eco-luxury lifestyle packaging rather than technology packaging.

Core tactile signals:
- warm uncoated stock
- recycled deep-forest board
- restrained soft-gold foil
- terracotta accents / edge paint
- molded-pulp internal protection
- cotton, hemp, kraft and other tactile natural finishes

## 2. Production color tokens

| Token | Hex | Primary use |
|---|---|---|
| Warm Cream | `#F5E6D3` | cartons, interiors, cards |
| Deep Forest | `#2C3E2D` | lids, boards, typography |
| Terracotta | `#E8A87C` | edge paint, pulls, seasonal accents |
| Soft Gold | `#C9A227` | foil, serials, minimal premium signal |
| Sage Mist | `#A8B5A0` | molded-pulp / inserts / support |

Secondary finishes:
- matte kraft sleeve
- forest-tone hemp twine
- cotton pull tab
- soft-gold metal rivet for premium SKUs

## 3. Packaging architecture

### A. Core Energy Units — TL-40 / TL-80 / TL-120

**Outer:** Warm Cream base · Deep Forest lid · centered Soft Gold sun · full Terracotta perimeter edge.

**Inner:** Sage Mist molded-pulp cradle · Forest instruction envelope · Terracotta pull tab.

**Unboxing sequence:**
1. Lift Forest lid.
2. Reveal Cream interior and Gold sun.
3. Pull Terracotta tab.
4. Fold-out panel reveals Sage cradle.

### B. TL-Cell Power Storage — Mini / Standard / Reserve

**Outer:** Deep Forest base · Soft Gold product line-art · Cream belly band · Terracotta typography.

**Inner:** Cream tray · Sage cable envelope · Gold-stamped care card.

**Unboxing sequence:**
1. Slide off Cream belly band.
2. Lift Forest lid.
3. Reveal Gold line-art card.
4. Lift product from Cream tray.

### C. Lighting — Glow / Path / Seasonal String

**Outer:** Warm Cream base · Terracotta illustration · Soft Gold accents · Forest typography.

**Inner:** Sage Mist wrap · Forest insert · Terracotta cord tie.

**Unboxing sequence:**
1. Open Cream flap.
2. Reveal Terracotta illustration.
3. Unwrap Sage Mist cloth.
4. Lift product with Forest insert.

### D. Soft Goods — Carry / Strap / Case

**Outer:** Kraft sleeve · Deep Forest stamp · Soft Gold foil seal · Terracotta edge paint.

**Inner:** Cream tissue · Sage Mist card · Forest twine tie.

## 4. Typography and labeling

**Primary:** warm-curved serif for product names and hero lines.

**Secondary:** soft geometric sans for specifications, instructions and SKU data.

Label order is fixed:
1. Product Name — Serif / Forest
2. Tagline — Serif / Terracotta
3. Specs — Sans / Forest
4. SKU / Serial — Sans / Soft Gold
5. Care Instructions — Forest text on Cream card

## 5. Iconography

**Primary:** Terra Lumen sun, optimized for restrained Soft Gold foil.

**Secondary:** seasonal markers and organic movement indicators.

Rules:
- minimal
- warm
- organic
- rounded / soft movement
- no sharp industrial language

## 6. Seasonal editions

| Edition | Exterior | Interior / accent |
|---|---|---|
| Spring | Cream | Sage + Gold |
| Summer | Terracotta | Cream + Gold |
| Autumn | Forest | Terracotta + Gold |
| Winter | Cream + Forest | Sage; minimal foil |

Seasonal variants must preserve the same structural dielines, labeling hierarchy, SKU logic and core mark.

## 7. Retail display system

Shelf language:
- Forest boxes against Cream fixtures
- Terracotta as warmth/callout
- Gold as restrained premium signal

Stack logic:
- Panels: vertical
- Power cells: horizontal
- Lighting: staggered
- Soft goods: hanging kraft sleeves

In-store materials:
- Cream placards
- Forest frames
- Terracotta callouts
- Gold-foil logo

## 8. Manufacturing controls

Before production release, every SKU should be checked against:

- approved dieline and structural dimensions
- substrate / board specification
- print profile and color proof
- foil specification and minimum line weight
- edge-paint coverage
- insert fit and drop protection
- barcode / SKU / serial placement
- regulatory and logistics labels where required
- carton count and pallet / master-carton logic
- seasonal edition identifier
- final physical proof approval

## 9. SKU architecture

Use the product family as the first identifier and packaging revision as the second:

`TL-[FAMILY]-[SIZE]-PKG1`

Examples:
- `TL-EU-40-PKG1`
- `TL-CELL-M-PKG1`
- `TL-GLOW-STD-PKG1`
- `TL-CARRY-STD-PKG1`

Serial numbers remain product-specific and are not replaced by packaging IDs.

## 10. Logistics hierarchy

Recommended physical hierarchy:

`Unit package → Inner pack → Master carton → Pallet`

Every level should preserve product family, quantity, lot/batch, handling marks and traceability without disturbing the premium consumer-facing surface.

## 11. Release gate

A packaging variant is **READY** only when the digital specification, artwork, dieline, physical proof, labeling data and logistics mapping agree.

No manufacturing claim should be treated as complete from artwork alone.
