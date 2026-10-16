# Tavan rebuild — evidence audit (15 Oct 2026)

Checked against sources outside the build. Old = live Wix site, new = production build (`dist/`) served locally.

## 1. Facts vs public records
| Claim on the site | Source | Result |
|---|---|---|
| Tavan Contractors Ltd, company number 12387224 | Companies House | ✅ TAVAN CONTRACTORS LTD, active, incorporated 6 Jan 2020 |
| 28 Mills Chase, Bracknell, RG12 9RE | Companies House registered office | ✅ matches |
| Roofing business | Companies House SIC | ✅ 43910 Roofing activities |
| Dean Rainton (blog author, "contact Dean") | Companies House officers | ✅ active director since 6 Jan 2020 |
| 3 Rated People reviews + "Proud member" badge | ratedpeople.com | ⚠️ **Not verified.** No profile found by URL or search. Shown as on the old site; client must confirm membership or send the profile link. |
| Privacy policy names "Tavan Contractor Ltd", tavancontractor.co.uk, DPA 1998 | Companies House / domain | ⚠️ Wrong name (missing "s"), wrong domain, outdated law. Kept verbatim; client must update. |
| Phones, email | Not on any register | ⚠️ Unverifiable externally. sales@ is used site-wide; old links pointed to dean@ and a Gmail address, and a fourth number 07818 531799. |

## 2. Lighthouse (mobile, real devtools throttling)
Scores: performance / accessibility / best practices / SEO.

| Page | Old | New (final) |
|---|---|---|
| Home | 95–99 / 86 / 75 / 100 · LCP 1.1–1.3 s · CLS 0.058 · 3.1 MB | **99 / 100 / 100 / 100** · LCP 1.5 s · CLS 0.000 · 0.76 MB |
| Slate roof | 94 / 93 / 75 / 100 · LCP 2.6 s · 3.0 MB | 99 / 100 / 100 / 100 · LCP 1.8 s · 0.55 MB |
| Contact | 99 / 92 / 75 / 100 · LCP 0.9 s · 2.4 MB | **100 / 100 / 100 / 100** · LCP 0.9 s · 0.30 MB |

The old homepage still paints its largest element faster (a line of text; ours is a full-screen photo).

Lighthouse's default *simulated* throttling scored the new home at 80–84. A Chrome PerformanceObserver trace showed the real largest paint at about 0.35 s, so the table uses real throttling for both sites.

Fixes made in this pass:
- inlined CSS (no render-blocking stylesheet);
- WebP logo badge;
- 360 px and 800 px image sizes;
- hero preload;
- Three.js loads only near the 3D section (blocking time 110 → 20–40 ms; ~600 KB out of first load);
- contact image not lazy-loaded, and hidden on phones;
- header stays visible during the intro.

## 3. Accessibility (axe-core 4, WCAG 2.0/2.1/2.2 A+AA + best practice)
All 19 pages at 390 px and 1440 px: **0 violations**. Fixed along the way:
- small orange text on light backgrounds (now #A84600, 5.2:1);
- header label contrast (3.8 → 7.6:1);
- star ratings given `role="img"`.

## 4. Local search
- **Titles:** all 18 old page titles carried over exactly (0 mismatches).
- **Descriptions:** every page has its old meta description; typos fixed as listed in `TYPO_FIXES`.
- **Canonicals:** one per page. Bug fixed: the homepage pointed at `/index`.
- **Sitemap:** 18 URLs.
- **Redirects:** 25 old URLs → 301 → 200. Link crawl: 105 URLs, 0 broken.
- **Schema:** RoofingContractor schema with name, legal name, address, freephone, email, areas and socials matches Companies House. Blog posts carry BlogPosting.
- **Name, address and phone:** consistent site-wide; every `tel:` link uses one of the three displayed numbers.

## 5. Phone task test (390×844, cold load)
On the 7 key pages, at 0/25/50/75/100% scroll, a call link and a quote link are always on screen. Calling or reaching the quote form is **one tap from anywhere**.

- **Header targets:** the header call and quote buttons are 41–44 px.
- **Smaller links:** inline text links (office/mobile numbers) are 26 px. That passes WCAG 2.5.8 (24 px) but is below 44 px.
- **Old site:** its call targets were 19 px.

## Not verified
- Safari or a real phone.
- Rated People membership.
- Search Console, rankings and call volume: needs the client's Google access after launch.
