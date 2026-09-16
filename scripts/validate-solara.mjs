#!/usr/bin/env node
/**
 * FrontierCode-inspired mergeability gate for the static Solara showcase.
 * Validates repository-local correctness and release-contract basics without
 * consulting solution-bearing external sources.
 */

import { readFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const root = process.cwd();
const failures = [];
const warnings = [];

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

function fail(message) { failures.push(message); }
function warn(message) { warnings.push(message); }

const entrypoint = resolve(root, 'index.html');
if (!(await exists(entrypoint))) fail('Missing index.html entrypoint.');

let html = '';
if (await exists(entrypoint)) {
  html = await readFile(entrypoint, 'utf8');
  if (!/<html\b/i.test(html)) fail('index.html has no <html> element.');
  if (!/<head\b/i.test(html) || !/<body\b/i.test(html)) fail('index.html must contain both <head> and <body>.');
  if (!/<meta[^>]+name=["\']viewport["\']/i.test(html)) fail('index.html is missing a viewport meta tag.');
  if (!/<title>[^<]+<\/title>/i.test(html)) fail('index.html is missing a non-empty <title>.');

  const refs = new Set();
  for (const match of html.matchAll(/(?:src|href)=["\']([^"\'#?]+)["\']/gi)) {
    const ref = match[1];
    if (/^(?:https?:|data:|mailto:|javascript:|#|\/)/i.test(ref)) continue;
    refs.add(ref);
  }

  for (const ref of refs) {
    const target = resolve(dirname(entrypoint), ref);
    if (!(await exists(target))) fail(`Missing local asset referenced by index.html: ${ref}`);
  }

  if (/CLOUDFLARE_API_TOKEN\s*[:=]\s*["'][^"']+/i.test(html)) fail('Possible Cloudflare credential embedded in index.html.');
  if (/STRIPE_(?:SECRET|WEBHOOK_SECRET)\s*[:=]\s*["'][^"']+/i.test(html)) fail('Possible Stripe secret embedded in index.html.');
}

const workflow = resolve(root, '.github/workflows/cloudflare-pages.yml');
if (!(await exists(workflow))) fail('Missing Cloudflare deployment workflow.');
else {
  const workflowText = await readFile(workflow, 'utf8');
  if (!/permissions:\s*\n\s*contents:\s*read/i.test(workflowText)) warn('Deployment workflow permissions are not explicitly read-only.');
  if (!/CLOUDFLARE_API_TOKEN/.test(workflowText)) fail('Deployment workflow does not reference CLOUDFLARE_API_TOKEN.');
  if (!/CLOUDFLARE_ACCOUNT_ID/.test(workflowText)) fail('Deployment workflow does not reference CLOUDFLARE_ACCOUNT_ID.');
}

const contract = resolve(root, 'CLOUDFLARE_DEPLOYMENT.md');
if (!(await exists(contract))) fail('Missing deployment contract.');
else {
  const contractText = await readFile(contract, 'utf8');
  for (const required of ['VERIFIED', 'index.html', 'HTTP 200', 'GitHub Actions']) {
    if (!contractText.includes(required)) fail(`Deployment contract is missing required gate text: ${required}`);
  }
}

if (warnings.length) {
  console.log('WARNINGS');
  for (const item of warnings) console.log(`- ${item}`);
}

if (failures.length) {
  console.error('MERGEABILITY GATE: FAILED');
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log('MERGEABILITY GATE: PASSED');
console.log('Static entrypoint, local asset references, deployment contract, and workflow contract are internally consistent.');
