# SOLARA Brand Identity

Dual brand system for **A11-K / Mind-Reply**.

## Directions
1. **Radiant Precision** — void navy + radiant gold, geometric sun
2. **Terra Lumen** — forest + terracotta, organic sun

## Production target
**Cloudflare Workers Static Assets** is the production hosting layer for the static showcase. Vercel and ResellerPro are not the target deployment providers.

The repository contains the complete static entrypoint and assets plus the Cloudflare deployment configuration. Deployment requires the repository's `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` GitHub Actions secrets; credentials are intentionally not stored in the repository.

See `CLOUDFLARE_DEPLOYMENT.md` for the deployment contract and verification gates.

## Current preview
The existing jsDelivr URL is retained as a preview/reference only; it is **not** the production deployment claim.

## Contents
| File | Description |
|------|-------------|
| `index.html` | Complete public brand showcase |
| `wrangler.toml` | Cloudflare Workers Static Assets configuration |
| `.github/workflows/cloudflare-pages.yml` | GitHub Actions deployment to Cloudflare |
| `solara_dir1_*` | Radiant Precision core boards |
| `solara_dir2_*` | Terra Lumen core boards |
| `solara_mockup_*` | Application mockups |
| `solara_logo_system_motion.mp4` | Full logo-system motion (6s) |
| `solara_logo_icon_motion.mp4` | Icon motion loop |
| `solara_logo_animation.mp4` | Earlier mark animation |
| `CLOUDFLARE_DEPLOYMENT.md` | Production deployment contract and verification gates |

## Repo
https://github.com/angellllkr-eng/solara-brand-identity
