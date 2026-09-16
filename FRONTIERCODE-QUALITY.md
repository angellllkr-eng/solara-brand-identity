# Solara — FrontierCode-Inspired Quality Standard

This repository adopts a lightweight production-code quality gate inspired by the principles behind FrontierCode 1.1: correctness alone is not enough; a change should be internally consistent, scoped, testable, maintainable, and safe to merge.

## What the gate checks

1. **Correctness** — the static entrypoint exists and has required HTML structure.
2. **Asset integrity** — local `src`/`href` references in `index.html` resolve to tracked repository files.
3. **Release-contract integrity** — the Cloudflare deployment contract remains present and contains the required verification gates.
4. **Deployment wiring** — the Cloudflare workflow references repository secrets by name and keeps workflow permissions read-only.
5. **Credential hygiene** — obvious secret material is rejected from tracked source.
6. **Scope discipline** — this gate is repository-local; it does not copy upstream solutions or depend on solution-bearing external sources.
7. **Mergeability** — the quality gate must pass before a PR is considered ready for merge.

## Internet-use rule for engineering agents

Internet access is allowed for documentation, API contracts, standards, error messages, and background research. It must not be used to retrieve a task's solution from an upstream PR, patch, hidden reference implementation, or solution-bearing mirror.

When working on a bug or change, derive the implementation from the current Solara repository first. External material should clarify interfaces and constraints, not substitute for engineering judgment.

## Release status

Passing this workflow proves repository-local quality gates only. It does **not** prove that the Cloudflare production deployment or production domain is live. Production remains **UNVERIFIED** until the deployment contract's external verification gates are independently checked.

## Why this exists

The objective is not to optimize for a benchmark score. The objective is to make every Solara change easier to review, safer to merge, and closer to the standard of a production-quality open-source codebase.
