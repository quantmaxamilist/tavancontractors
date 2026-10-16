// Every old Wix URL → its new route. Source of truth for astro.config redirects (meta-refresh stubs
// on any static host), vercel.json + public/_redirects (real 301s) and REDIRECTS.md.
// Old URL list = Wix sitemap + Wayback CDX index (14 Oct 2026). /privacy-policy and /cookie-policy keep their URLs.
const tags = [
  'chimney-repairs', 'fascias-gutter-cleaning-and-repair', 'flat-roof', 'lead-work', 'new-roof-installation',
  'roof-repairs', 'single-ply-flat-roofs', 'slate-roof', 'velux-skylight-installation-and-repair',
];
export const oldUrls = {
  '/domestic-roofing-services': '/services',
  '/commercial-roofing-services-berks': '/commercial',
  '/slate-roof-specialist-berkshire': '/services/slate-roof',
  '/flat-roof-specialist-berkshire': '/services/flat-roof',
  '/new-roof-specialist-berkshire': '/services/new-roof',
  '/roof-repair-specialist-berkshire': '/services/roof-repairs',
  '/lead-work-roof-specialist-berkshire': '/services/lead-work',
  '/chimney-tavanroofingcontractors': '/services/chimney-repairs',
  '/fascias-soffits-guttering-berkshire': '/services/fascias-soffits-guttering',
  '/velux-skylights-berkshire-surrey': '/services/velux-skylights',
  '/tavan-contractors-clients-gallery': '/our-work',
  '/tavan-contractors-contact-berkshire': '/contact',
  '/blog-roofing-specialist-berkshire': '/blog',
  ...Object.fromEntries(tags.map((t) => [`/blog-roofing-specialist-berkshire/tags/${t}`, '/blog'])),
  '/post/how-to-choose-a-skylight': '/blog/how-to-choose-a-skylight',
  '/post/how-to-choose-the-right-roof-for-your-house-or-extension': '/blog/how-to-choose-the-right-roof-for-your-house-or-extension',
  '/profile/tavancontractorsltd/profile': '/',
};
