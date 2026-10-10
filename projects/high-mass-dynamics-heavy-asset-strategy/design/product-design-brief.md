# Product design brief

## Communication hierarchy
1. Lead: **Mass changes the system. Evidence changes the decision.**
2. Engineering panel: model-specific aerodynamic load and lightweight-component facts.
3. Safety panel: the stopping-distance model, with assumptions shown.
4. Market panel: dated U.S. CMBS/ABS index observations, clearly separated from automotive data.
5. Footer: source key, as-of date and explicit caveat.

## Art direction
- Premium light editorial layout: warm off-white, charcoal, one muted gold accent.
- Technical grid and small source numbers; no fake gauges, fabricated telemetry or decorative “live” indicators.
- Use a single type scale for mobile readability and a strong baseline grid.
- No brand logos are required. Manufacturer names identify the cited specifications, not endorsements.
- Keep finance metrics in their own visually bounded panel so they cannot be read as automotive performance metrics.

## Information integrity
- Label Porsche's 554 kg figure as **rear-axle downforce**, at 340 km/h in High Downforce setup, for the unique 2026 Flachbau RS.
- Label Aston Martin's 12 kg figure as **total unsprung-mass reduction from optional magnesium wheels**, not vehicle mass reduction.
- Label Lamborghini's 1,690 kg as **dry weight per the 2026 digital brochure**. Do not call it curb weight. Do not repeat the “tires overheat after one lap” assertion without independent evidence.
- Show CMBS 4.65% and ABS 4.40% as approximate U.S. index yields reported as of 2026-03-31; no promise or forecast.
- Present braking formula as a simplified idealized model only; explain variables and do not claim it certifies heavy-freight safety.

## Acceptance criteria
- SVG opens in a modern browser and remains editable as vector art.
- All claims map to the audit file and a working source URL.
- Figures retain units and qualifiers when viewed independently.
- At 390 px viewport, no text overlaps and source notes remain legible.
- No changes to root `index.html`, existing brand assets, Cloudflare configuration or deployment workflow.
