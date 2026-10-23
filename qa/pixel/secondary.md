# Pixel audit (LIGHT): secondary pages, Phase 1 (measure only)

Run date 2026-10-23. Live https://hex.tech vs clone http://127.0.0.1:5188, own headless Chromium, 1440x900 and 390x900.
Checked per page: document scrollHeight, top-level header/section/footer boxes, heading/media y-positions, console errors,
horizontal overflow (scrollWidth vs clientWidth and elements past the right edge), broken images, screenshot glance.
Scripts and raw JSON: /private/tmp/claude-504/-Users-riyaghosh-V3-hex-tech/42b4cf0a-1637-477c-a75e-83bfd1636211/scratchpad/audit-secondary/

## Clean on every page (both widths)
- Horizontal overflow: 0 on every page (the only element past the edge is the ticker track inside its overflow-hidden band, same as live).
- Broken images: 0 on every page.
- Theme: body bg rgb(20,20,28) and page theme match live on every page (integrations dark, stories/company light).
- Console errors: none from clone code. Only errors are `ERR_UNKNOWN_URL_SCHEME` / `compute-pressure` coming from the
  embedded YouTube/Vimeo iframes (dagster, snowflake). Live shows the same ones. Expected.
- Redirects: /product/integrations/athena/ and /product/integrations/redshift/ both end on /product/integrations/aws/ (same as live).
- Note: on the first pass, clone databricks@390 and mercor@1440 came back blank (scrollHeight 900, no content). On re-run they
  loaded fine (3078 / 6544). The cause was dev-server HMR while the cleanup agent was editing (`[vite] hot updated` showed up in the console). Not a bug.

## Height table (scrollHeight, live -> clone, delta)
| page | 1440 | 390 |
|---|---|---|
| integrations airflow | 2921 -> 2922 (+1) | 3323 -> 3323 (0) |
| bigquery | 2842 -> 2842 (0) | 4013 -> 4014 (+1) |
| clickhouse | 3279 -> 3280 (+1) | 4219 -> 4213 (-6) |
| dagster | 3031 -> 3032 (+1) | 3423 -> 3424 (+1) |
| databricks | 3077 -> 3078 (+1) | 4080 -> 4080 (0) |
| dbt | 2881 -> 2895 (+14) | 4463 -> 4479 (+16) |
| dremio | 2149 -> 2150 | 3196 -> 3196 |
| github | 2181 -> 2182 | 2872 -> 2873 |
| mariadb | 2149 -> 2150 | 3114 -> 3115 |
| ms-sql-server | 2331 -> 2332 | 3410 -> 3410 |
| mysql | 2179 -> 2180 | 3114 -> 3115 |
| **postgres** | 2194 -> 2195 | **3520 -> 3421 (-99)** |
| prefect | 2387 -> 2388 | 3172 -> 3173 |
| **snowflake** | 6253 -> 6235 (-18) | **10494 -> 10434 (-60)** |
| trino | 2253 -> 2254 | 3309 -> 3309 |
| aws (+athena, redshift redirects) | 3837 -> 3832 (-5) | 5710 -> 5705 (-5) |
| customers chime | ~8766-9213 (live varies) -> 9182 | 18481 -> 18100 (-381, body prose; -42 of it is hero meta, F3) |
| figma | 6798 -> 6798 | 13109 -> 12918 (-191, body prose; -21 of it is hero meta, F3) |
| mercor | 6576 -> 6544 (-32, prose) | 14227 -> 13724 (-503, prose; hero matches) |
| neo-financial | 7297 -> 7297 | 13944 -> 13997 (+53, prose; hero matches) |
| notion | 6290 -> 6258 (-32, prose) | 13063 -> 12775 (-288, prose) |
| ramp | 5463 -> 5463 | 10393 -> 10382 |
| stubhub | 3400 -> 3400 | 5147 -> 5179 (+32, prose) |
| about | 4297 -> 4299 | 4688 -> 4684 |
| careers | 6301 -> 6302 | 8463 -> 8478 (+15) |
| newsroom | 5807 -> 5808 | 13324 -> 13325 |
| compare | 1612 -> 1612 | 2657 -> 2657 |
| request-a-demo | 1758 -> 1757 | 2692 -> 2691 |
| contact-us | 1758 -> 1757 | 2711 -> 2710 |

On the customer stories I compared heading and media y-positions. Hero, details cards, "Related stories" grid and footer
all line up within a few px before the story body. All of the large drift starts inside the placeholder story body, so I'm ignoring it.

## Findings (clear, visible breakage)

### F1. postgres @390: "Wire-compatible with Postgres" tiles sit side by side instead of stacked (-99px)
- Live: ThirdPartyList is `flex-direction: column; gap 20px`. Materialize and Cube tiles are each 277x80, at y2094 and y2194. Block height 257.
- Clone: the row stays `flex-direction: row`. Two 129x80 tiles share one line at y2094. Block height 157, so the page is 100px short.
- Live at 1440 is a row (heights match), so this only needs a column switch at the mobile breakpoint.
- File: /Users/riyaghosh/V3/hex tech/src/pages/productV1/IntegrationDetail.jsx:105 (`<div className="flex w-full items-center gap-[20px]">` in ThirdParty()).

### F2. snowflake: each card/feature item is 6px short (-18 @1440, -60 @390)
- Live: the card `<img>` is inline, so the line-box descender adds about 6px. Image top to h4 top is 170 (148 img + 16 mb + 6). For the feature icons it is 72.
- Clone: Tailwind preflight makes the img `display:block`, so the same gaps are 164 and 66. The loss adds up per item (3 cards and 7 features stacked at 390).
- File: /Users/riyaghosh/V3/hex tech/src/pages/productV1/IntegrationCustomBlocks.jsx:124 (Cards() img className).

### F3. customer stories with a header video (chime, figma; neo also uses it) @390: meta list is not a label/value table
- Live: each meta row is flex, gap 8. The label is a fixed 130px column and the value wraps in its own column
  (e.g. "Features /" | "Notebook Agent," / "Threads"). The meta block on chime is 186px tall.
- Clone: the label is auto-width (61px) and the value follows inline with flex-wrap. The meta block on chime is 144px (-42); on figma it's -21.
  Visibly different layout, not prose.
- Files: /Users/riyaghosh/V3/hex tech/src/pages/companyCore/CustomerStoryPage.jsx:57 (MetaRows `cc-story-meta-stack`),
  style hook /Users/riyaghosh/V3/hex tech/src/pages/companyCore/companyCore.css:746. Shared component
  /Users/riyaghosh/V3/hex tech/src/components/shared/MetaRows.jsx should not be changed; other cards use it.

## Minor (not breakage, noted only)
- Integration "How it works" text column (all integration detail pages) @1440: live is a 500px max container with
  40px padding, so 420px of text at x510. Clone is `max-w-[444px]` at x498. Line wraps differ slightly but page heights match (+1px).
  File: /Users/riyaghosh/V3/hex tech/src/pages/productV1/IntegrationDetail.jsx:75. Out of scope for the LIGHT tier.
- dbt +14/+16: small, under the 40px threshold, not investigated.
- The footer fades in on scroll (opacity 0 until in view) and is fully visible after a real wheel scroll. Same as live. Not a bug.
