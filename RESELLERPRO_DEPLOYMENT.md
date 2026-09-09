# SOLARA / Terra Lumen — ResellerPro Deployment Contract

## Purpose

This repository is the canonical source for the SOLARA / Terra Lumen web assets. The production hosting target is **ResellerPro**, not Vercel.

## Current implementation

- Static entrypoint: `index.html`
- Public asset directory: `site/`
- No application build step is required for the current showcase.
- No ResellerPro API, CLI, deployment token, or provider-specific endpoint is present in this repository.

## Deployment contract

Publish the repository's static site with:

- Document root: repository root (`index.html`)
- Static assets: repository root and `site/`
- HTTPS: required
- SPA fallback: not required for the current static showcase
- Build command: none
- Output directory: repository root

## Verification gates

A release is **VERIFIED** only after the ResellerPro deployment itself is reachable over HTTPS and the following are checked:

1. `/` returns HTTP 200.
2. `index.html` renders without a missing-asset error.
3. Logo motion media loads and plays.
4. Radiant Precision boards load.
5. Terra Lumen boards load.
6. Application mockups load.
7. Mobile layout is usable.
8. Canonical URL points to the actual production domain.
9. No production route depends on Vercel.

Until those checks are performed against the actual ResellerPro deployment, production status remains **UNVERIFIED**.

## Provider boundary

Do not add guessed ResellerPro API calls, credentials, DNS changes, or deployment endpoints. When a real ResellerPro project/hosting endpoint is connected, add only the provider-specific configuration that is documented by that service.

## Historical note

Older repository review documents contain Vercel and GitHub Pages deployment experiments. Those records are retained as evidence/history and are not the target production architecture for this release.
