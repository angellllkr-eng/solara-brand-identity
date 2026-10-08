# SOLARA Brand Identity

Dual brand system for **A11-K / Mind-Reply**.

## Directions
1. **Radiant Precision** — void navy + radiant gold, geometric sun
2. **Terra Lumen** — forest + terracotta, organic sun

## Production target

Solara is a **separate website and deployment** from ResellerPro.

- Canonical source: `angellllkr-eng/solara-brand-identity`
- Independent runtime: Cloudflare Workers Static Assets
- Production domain: `https://solara-brand.com/`
- ResellerPro: separate product and runtime; it must not host or verify Solara.

The ResellerPro repository may reference Solara as a separate product boundary, but Solara releases are owned by this repository and its own deployment pipeline.

## Current preview

Existing Vercel/jsDelivr surfaces are retained as previews/reference only; they are not production deployment claims.

## Contents

| File | Description |
|------|-------------|
| `site/index.html` | Complete public brand showcase source |
| `site/solara_*` | SOLARA imagery and motion assets |
| `CLOUDFLARE_DEPLOYMENT.md` | Independent Cloudflare deployment contract |

## Related platform

ResellerPro is maintained separately in `angellllkr-eng/resellerpro-platform`.

## Canonical source

`angellllkr-eng/solara-brand-identity`
