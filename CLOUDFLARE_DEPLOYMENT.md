# SOLARA / Terra Lumen — Cloudflare Deployment Contract

## Production architecture

GitHub `main` → GitHub Actions → Cloudflare Workers Static Assets → production domain.

Cloudflare Workers Static Assets is used instead of Vercel, ResellerPro, or deprecated Workers Sites. Cloudflare documents Workers as its primary application platform and Static Assets for serving static sites globally.

## Site contract

- Entrypoint: `index.html`
- Asset directory: repository root
- Build command: none
- Output directory: repository root
- HTTPS: required
- SPA fallback: not required for the current static showcase
- Missing routes: real 404 behavior

## GitHub Actions secrets

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Never commit either value to GitHub.

## Deployment

The workflow `.github/workflows/cloudflare-pages.yml` deploys `main` with Wrangler. The workflow intentionally fails when either required secret is absent or invalid; it does not contain fallback credentials or alternate hosting.

## Verification gates

A release is **VERIFIED** only after the Cloudflare deployment is reachable over HTTPS and all of these pass:

1. `/` returns HTTP 200.
2. `index.html` renders without missing assets.
3. Logo motion media loads.
4. Radiant Precision boards load.
5. Terra Lumen boards load.
6. Application mockups load.
7. Mobile layout is usable.
8. Production domain resolves through Cloudflare.
9. No production route depends on Vercel or ResellerPro.
10. GitHub Actions reports a successful deployment.

Until the actual Cloudflare deployment and domain are checked, production status remains **UNVERIFIED**.

## Historical provider records

Older Vercel, GitHub Pages, and ResellerPro references may remain in historical review documents. They are evidence/history only and must not be treated as the current production architecture.
