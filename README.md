# SOLARA Brand Identity

Dual brand system for **A11-K / Mind-Reply**.

## Directions
1. **Radiant Precision** — void navy + radiant gold, geometric sun
2. **Terra Lumen** — forest + terracotta, organic sun

## Production target
**ResellerPro** is the production control plane. Its canonical runtime path is **ResellerPro → Cloudflare Workers/OpenNext**. Vercel is preview/legacy only and is not a production authority.

The canonical brand source remains this repository. The production SOLARA surface is mounted at `solara-brand.com` through `angellllkr-eng/resellerpro-platform` and is served by the ResellerPro Worker.

## Current preview
The existing Vercel/jsDelivr surfaces are retained as previews/reference only; they are **not** production deployment claims.

## Contents
| File | Description |
|------|-------------|
| `site/index.html` | Complete public brand showcase source |
| `site/solara_*` | SOLARA imagery and motion assets |
| `RESELLERPRO_DEPLOYMENT.md` | Production deployment contract |
| `CLOUDFLARE_DEPLOYMENT.md` | Historical/technical Cloudflare notes |

## Production repository
https://github.com/angellllkr-eng/resellerpro-platform

## Canonical source
https://github.com/angellllkr-eng/solara-brand-identity
