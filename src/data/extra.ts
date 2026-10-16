// Derived lists and helpers (no new copy here — UI microcopy and counts derived from site.ts only).
import images from './images.json';
import { services, phones, email } from './site';

type Meta = { w: number; h: number; sizes: number[] };
const IMG = images as Record<string, Meta>;

export const img = (id: string) => {
  const m = IMG[id];
  if (!m) throw new Error(`Unknown image ${id}`);
  const largest = m.sizes[m.sizes.length - 1];
  return {
    src: `/img/${id}-${m.sizes.includes(1200) ? 1200 : largest}.webp`,
    srcset: [`/img/${id}-360.webp 360w`, ...m.sizes.map((s) => `/img/${id}-${s}.webp ${s}w`)].join(', '),
    width: m.w,
    height: m.h,
    portrait: m.h > m.w,
    largest,
  };
};

export const serviceHref = (slug: string) => `/services/${slug}`;
export const quoteHref = (slug?: string) => (slug ? `/contact?service=${slug}#quote` : '/contact#quote');
export const telHref = (p = phones.free) => `tel:${p.tel}`;
export const mailHref = (subject?: string) => `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

export const nav = [
  { href: '/services', label: 'Domestic Services', children: services.map((s) => ({ href: serviceHref(s.slug), label: s.name })) },
  { href: '/commercial', label: 'Commercial Services' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// Contact form tick-boxes: the 8 domestic services + commercial (all from the old nav).
export const formServices = [...services.map((s) => ({ slug: s.slug, label: s.name })), { slug: 'commercial', label: 'Commercial Services' }];

// Zero-width space after "/" so long names like "Fascias/Soffits/Guttering" can wrap on phones.
export const wrapSlash = (s: string) => s.replace(/\//g, '/​');

export const pad = (n: number) => String(n).padStart(2, '0');
