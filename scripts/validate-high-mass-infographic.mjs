#!/usr/bin/env node
/**
 * Dependency-free consistency checks for the isolated High-Mass infographic.
 * This does not render SVGs, certify vehicle safety, or fetch external sources.
 */
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const root = "projects/high-mass-dynamics-heavy-asset-strategy";
const read = (path) => readFile(path, "utf8");
const [desktop, mobile, audit, brief, readme] = await Promise.all([
  read(`${root}/design/infographic-draft.svg`),
  read(`${root}/design/infographic-mobile.svg`),
  read(`${root}/research/claim-source-audit.md`),
  read(`${root}/design/product-design-brief.md`),
  read(`${root}/README.md`)
]);

function validateSvg(svg, label) {
  assert.match(svg, /^<svg\b/, `${label}: root <svg> element missing`);
  assert.match(svg, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, `${label}: SVG namespace missing`);
  assert.match(svg, /viewBox="0 0 \d+ \d+"/, `${label}: viewBox missing`);
  assert.match(svg, /<title id="title">[^<]+<\/title>/, `${label}: accessible title missing`);
  assert.match(svg, /<desc id="desc">[^<]+<\/desc>/, `${label}: accessible description missing`);
  assert.match(svg, /aria-labelledby="title desc"/, `${label}: accessible title/description reference missing`);
  assert.match(svg, /<\/svg>\s*$/, `${label}: closing root element missing`);
}
validateSvg(desktop, "desktop SVG");
validateSvg(mobile, "mobile SVG");

for (const [label, svg] of [["desktop", desktop], ["mobile", mobile]]) {
  for (const claim of ["554 kg", "1,690 kg", "12 kg", "4.65%", "4.40%"]) {
    assert.ok(svg.includes(claim), `${label}: required claim missing: ${claim}`);
  }
  assert.match(svg, /v\s*\^?2|v²/, `${label}: braking model term missing`);
  assert.match(svg, /not (?:a )?(?:certification|live quotes|forecasts|guaranteed returns)/i,
    `${label}: safety / finance caveat missing`);
}

assert.match(mobile, /width="780" height="3300" viewBox="0 0 780 3300"/,
  "mobile SVG must use the reviewed 780 × 3300 mobile canvas");
const mobileFontSizes = [...mobile.matchAll(/font(?:-size)?:[^;}]*?(\d+(?:\.\d+)?)px/g)]
  .map((match) => Number(match[1]));
assert.ok(mobileFontSizes.length > 0, "mobile SVG must declare font sizes");
assert.ok(Math.min(...mobileFontSizes) >= 21,
  `mobile typography minimum must be >=21 SVG px; found ${Math.min(...mobileFontSizes)}`);

for (const url of [
  "https://newsroom.porsche.com/en_US/2026/products/in-the-slipstream-of-moby-dick-an-extraordinary-one-off-flachbau-model.html",
  "https://www.astonmartin.com/en/models/valhalla",
  "https://www.lamborghini.com/original/DAM/lamborghini/0_facelift_2025/model_details_new/temerario_2/brochure_2026/Lamborghini%20Temerario_DIGITAL_BROCHURE_2026_EN.pdf",
  "https://www.capitalgroup.com/individual/ca/en/insights/articles/five-themes-multisector-2026.html",
  "https://ops.fhwa.dot.gov/publications/fhwahop16050/m7.htm"
]) {
  assert.ok(audit.includes(url), `research audit must record the reviewed source URL: ${url}`);
}
assert.match(audit, /certif(?:y|ication)|vehicle-safety advice/i);
assert.match(audit, /2026-03-31|3\/31\/26/);
assert.match(brief, /mobile/i);
assert.match(readme, /review/i);

console.log("High-Mass infographic consistency checks passed.");
console.log("NOTE: These static assertions are not SVG rendering, external-link uptime, source re-verification, or owner release approval.");
