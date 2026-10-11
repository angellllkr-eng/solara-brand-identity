# Claim and source audit

**Research snapshot:** 2026-10-11  
**Release status:** Draft; source review still required

## Verified for narrowly stated use

| Claim | Approved wording for draft | Source | Limits |
|---|---|---|---|
| Porsche aero | “554 kg rear-axle downforce at 340 km/h in High Downforce setup” | [Porsche Newsroom — Flachbau RS](https://newsroom.porsche.com/en_US/2026/products/in-the-slipstream-of-moby-dick-an-extraordinary-one-off-flachbau-model.html) | Unique customer one-off based on a 991.2 911 GT2 RS; not a generic Porsche figure and not total-vehicle downforce. |
| Aston Martin wheels | “Optional magnesium wheels save 12 kg of unsprung mass” | [Aston Martin Valhalla](https://www.astonmartin.com/en/models/valhalla) | Component-level unsprung mass; not 12 kg off the whole vehicle. |
| Lamborghini weight | “1,690 kg dry weight (2026 digital brochure)” | [Lamborghini Temerario digital brochure](https://www.lamborghini.com/original/DAM/lamborghini/0_facelift_2025/model_details_new/temerario_2/brochure_2026/Lamborghini%20Temerario_DIGITAL_BROCHURE_2026_EN.pdf) | Dry weight is not curb weight. Brochure market/specification applicability should be checked before publication. |
| U.S. CMBS/ABS yields | “Approx. 4.65% U.S. CMBS IG index and 4.40% U.S. ABS index yields, as of 2026-03-31” | [Capital Group, 2026 multi-sector fixed-income themes](https://www.capitalgroup.com/individual/ca/en/insights/articles/five-themes-multisector-2026.html) | Cites Bloomberg and J.P. Morgan. Historical index observations only; not current quotes, a forecast, guaranteed return or investment advice. |

## Not substantiated; omit

- “Temerario exceeds 2,050 kg curb weight (with occupants)” — not supported by the linked official brochure; the source instead lists 1,690 kg dry weight. These measurements are not interchangeable.
- “Tires overheat/lose grip after a single lap” — no independent test, defined conditions or source supplied. Omit.
- “Aston Martin Valhalla saves up to 110 kg vs Vanquish” and “15.9 kg chassis pack” — not supported by the cited Valhalla page in this review. Omit unless primary evidence is found.
- “31.6 kg cabin weight reduction” — model/configuration and source unclear. Omit.
- “4.7% CMBS / 4.5% ABS benchmark yields” — round only with context; use the source's approximate 4.65% and 4.40% figures and date.
- A universal heavy-freight braking distance formula — no single formula alone accounts for all operational conditions or certifies safety.

## Braking model note

A simplified level-road model may be expressed as:

`d ≈ v t_r + v²/(2 μ g)`

where `d` is idealized stopping distance, `v` is initial speed in m/s, `t_r` is perception/reaction time in seconds, `μ` is an assumed effective tire-road friction coefficient, and `g` is gravitational acceleration. The first term estimates distance travelled during reaction; the second estimates idealized braking distance under constant deceleration `μg`.

This omits grade, brake-system limits, load distribution, tire condition, weather, brake temperature, ABS behavior and other real-world effects. Heavy-vehicle operational planning should use applicable regulations, vehicle-specific data and qualified safety engineering. Reference for general pilot/escort training context: [FHWA Pilot/Escort Vehicle Operators Training Manual — Module 7](https://ops.fhwa.dot.gov/publications/fhwahop16050/m7.htm).

## Source freshness and release
- Recheck every source link immediately before release.
- Include source name and as-of date in the infographic itself, not only in accompanying notes.
- Do not use the term “benchmark” unless the specific index is named.
- This document is research documentation, not financial or vehicle-safety advice.


## Source recheck — 2026-10-11

The source URLs were manually reopened on 2026-10-11. The Porsche newsroom page confirms approximately 1,221 lb of rear-axle downforce at approximately 211 mph in High Downforce setup; the infographic uses rounded metric equivalents (554 kg and 340 km/h). Aston Martin's Valhalla page explicitly states the magnesium-wheel option saves 12 kg of unsprung mass. Capital Group's chart states 4.65% for the Bloomberg U.S. CMBS Investment Grade Index and 4.40% for the Bloomberg U.S. ABS Index, sourced to Bloomberg and J.P. Morgan as of 3/31/26. The official Lamborghini 2026 brochure search result contains the 1,690 kg dry-weight specification; the alternate official /original/DAM/ PDF URL is recorded above because the older /sites/ URL redirected in one browser context.

Source recheck is not live monitoring. This snapshot does not make the financial metrics current market quotes or the stopping model a safety certification. Static CI assertions do not verify external-link uptime or actual browser rendering.
