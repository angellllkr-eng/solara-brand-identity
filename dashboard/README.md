# Solara Dashboard Concept

This standalone, responsive UI concept is placed under `/dashboard/`; the existing Solara brand site remains at the repository root. It includes Overview, Operations, Portfolio, Discover, Learn, and Activity views. All personal finance values elsewhere in the concept are fictional sample content. The Operations view uses neutral `Not configured` and `Withheld` states; it contains no source-specific node labels, copied operating figures, or projections.

## Run locally

From this directory, start a static server:

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Boundaries

- This is a local proposal only. No source repository history, preview images, deployment, backend, telemetry, financial service, or account connection is included.
- No sign-in, data feed, transaction, payment, or money movement is connected. Buttons only navigate the preview, open informational dialogs, or display demo notices.
- The repository-root brand site and its root-level CI/hosting files are kept in place. A narrowly scoped Vercel rewrite is proposed so `/dashboard` and `/dashboard/` resolve to this page before the existing catch-all rewrite.
