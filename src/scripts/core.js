// Tavan core: smooth scroll, cursor, magnetics, page transitions, header, menu, reveals, count-ups.
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// Phone URL-bar show/hide must not re-measure every trigger, and 'load' is not an auto-refresh event.
ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'visibilitychange,DOMContentLoaded,resize' });

const html = document.documentElement;
// Content is only hidden for reveal animations once this script is running, so a failed script never blanks the page.
html.classList.add('rv');
const mq = (q) => matchMedia(q).matches;
export const reduced = mq('(prefers-reduced-motion: reduce)');
const fine = mq('(hover: hover) and (pointer: fine)');

// ---- Lenis ------------------------------------------------------------------------------------
export const lenis = reduced ? null : new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
if (import.meta.env.DEV) window.__tavan = { lenis, ScrollTrigger, gsap };

export const scrollToY = (target, opts = {}) => {
  if (lenis) lenis.scrollTo(target, { duration: 1.1, ...opts });
  else {
    const y = typeof target === 'number' ? target : target.getBoundingClientRect().top + scrollY + (opts.offset || 0);
    scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  }
};

// Same-page hash links go through Lenis
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const url = new URL(a.href, location.href);
  if (url.pathname === location.pathname && url.search === location.search && url.hash.length > 1) {
    const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!el) return;
    e.preventDefault();
    closeMenu?.();
    scrollToY(el, { offset: -90 });
    history.replaceState(null, '', url.hash);
  }
});

// ---- Cursor (24px ring + 6px dot, 40px on links; mouse only) ----------------------------------
const cursor = document.getElementById('cursor');
if (fine && !reduced && cursor) {
  html.classList.add('has-cursor');
  const dot = cursor.querySelector('.cursor__dot');
  const ring = cursor.querySelector('.cursor__ring');
  const dx = gsap.quickTo(dot, 'x', { duration: 0.06, ease: 'none' });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.06, ease: 'none' });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });
  cursor.classList.add('is-off');
  let last = null;
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    cursor.classList.remove('is-off');
    dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    const t = e.target;
    if (t === last) return;
    last = t;
    let state = '';
    if (t?.closest?.('a, button, label, summary, [role="button"], [data-cursor="link"]')) state = 'link';
    if (t?.closest?.('input:not([type="checkbox"]), textarea, select')) state = 'hide';
    cursor.dataset.state = state;
  }, { passive: true });
  document.addEventListener('pointerleave', () => cursor.classList.add('is-off'));
  addEventListener('blur', () => cursor.classList.add('is-off'));
}

// ---- Magnetic buttons ---------------------------------------------------------------------------
if (fine && !reduced) {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const xT = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yT = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
    let r = null;
    el.addEventListener('pointerenter', () => { r = el.getBoundingClientRect(); });
    el.addEventListener('pointermove', (e) => {
      if (!r) r = el.getBoundingClientRect();
      xT((e.clientX - (r.left + r.width / 2)) * 0.25);
      yT((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    el.addEventListener('pointerleave', () => {
      r = null;
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)', overwrite: true });
    });
  });
}

// ---- Page transitions (≤0.3s out, ~0.38s in; never waits on fonts, video or WebGL) -------------
const pt = document.getElementById('pt');
const ptMark = pt?.querySelector('svg');
const arriving = html.classList.contains('pt-arrive');
try { sessionStorage.removeItem('tavan:pt'); } catch { /* private mode */ }

const arrive = () => new Promise((res) => {
  if (!pt) return res();
  const done = () => { html.classList.remove('pt-arrive'); gsap.set([pt, ptMark], { clearProps: 'all' }); };
  if (reduced) { gsap.to(pt, { opacity: 0, duration: 0.12, onComplete: () => { done(); res(); } }); return; }
  gsap.timeline({ onComplete: done })
    .call(res, null, 0.14)
    .to(ptMark, { opacity: 0, duration: 0.15 }, 0)
    .fromTo(pt, { yPercent: 0 }, { yPercent: -100, duration: 0.38, ease: 'power3.inOut' }, 0);
});
export const arrived = arriving ? arrive() : Promise.resolve();

const internalUrl = (a, e) => {
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  if ((a.target && a.target !== '_self') || a.hasAttribute('download') || a.dataset.noTransition !== undefined) return null;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || !/^https?:/.test(url.protocol)) return null;
  if (url.pathname === location.pathname && url.search === location.search) return null;
  return url;
};
document.addEventListener('click', (e) => {
  const url = internalUrl(e.target.closest('a[href]'), e);
  if (!url || !pt) return;
  e.preventDefault();
  const go = () => {
    try { sessionStorage.setItem('tavan:pt', '1'); } catch { /* ignore */ }
    location.href = url.href;
  };
  pt.style.visibility = 'visible';
  if (reduced) { gsap.fromTo(pt, { opacity: 0 }, { opacity: 1, duration: 0.12, onComplete: go }); return; }
  gsap.timeline({ onComplete: go })
    .fromTo(pt, { yPercent: 100 }, { yPercent: 0, duration: 0.3, ease: 'power3.inOut' })
    .fromTo(ptMark, { opacity: 0 }, { opacity: 1, duration: 0.12 }, 0.16);
});
addEventListener('pageshow', (e) => {
  if (e.persisted && pt) {
    html.classList.remove('pt-arrive');
    gsap.killTweensOf(pt);
    gsap.set([pt, ptMark], { clearProps: 'all' });
  }
});

// ---- Header: solid after the hero top, hides on scroll-down (desktop), always back on scroll-up -
const hdr = document.getElementById('hdr');
if (hdr) {
  let lastY = scrollY;
  let hidden = false;
  const desktop = () => innerWidth >= 900;
  const holds = [...document.querySelectorAll('[data-hold-header]')];
  const inHold = () => holds.some((el) => {
    const r = el.getBoundingClientRect();
    return r.top < innerHeight * 0.6 && r.bottom > innerHeight * 0.4;
  });
  const onScroll = (y) => {
    hdr.classList.toggle('is-solid', y > 40);
    const menuOpen = !document.getElementById('menu')?.hidden;
    const want = desktop() && !reduced && !menuOpen && y > 500 && y > lastY + 2 && !inHold() && !hdr.contains(document.activeElement);
    const show = y < lastY - 2 || y < 500 || inHold();
    if (want && !hidden) { hidden = true; hdr.classList.add('is-hidden'); }
    else if (show && hidden) { hidden = false; hdr.classList.remove('is-hidden'); }
    lastY = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else addEventListener('scroll', () => onScroll(scrollY), { passive: true });
  hdr.addEventListener('focusin', () => { hidden = false; hdr.classList.remove('is-hidden'); });
  onScroll(scrollY);
}

// ---- Mobile menu --------------------------------------------------------------------------------
const menu = document.getElementById('menu');
const openBtn = document.querySelector('[data-menu-open]');
let closeMenu = null;
if (menu && openBtn) {
  const focusables = () => [...menu.querySelectorAll('a[href], button:not([disabled])')];
  const lines = [...menu.querySelectorAll('.line > span')];
  let tl = null;
  const open = () => {
    menu.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    lenis?.stop();
    document.body.style.overflow = 'hidden';
    if (!reduced) {
      tl?.kill();
      tl = gsap.timeline()
        .fromTo(menu, { yPercent: -100 }, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' })
        .fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: 'expo.out', stagger: 0.04 }, 0.25);
    }
    requestAnimationFrame(() => focusables()[0]?.focus());
  };
  closeMenu = () => {
    if (menu.hidden) return;
    openBtn.setAttribute('aria-expanded', 'false');
    lenis?.start();
    document.body.style.overflow = '';
    const done = () => { menu.hidden = true; gsap.set(menu, { clearProps: 'transform' }); };
    if (reduced) done();
    else { tl?.kill(); gsap.to(menu, { yPercent: -100, duration: 0.4, ease: 'power3.inOut', onComplete: done }); }
    openBtn.focus();
  };
  openBtn.addEventListener('click', open);
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => closeMenu());
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const f = focusables();
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });
  addEventListener('resize', () => { if (innerWidth >= 1100) closeMenu(); });
  addEventListener('pageshow', (e) => {
    if (!e.persisted || menu.hidden) return;
    tl?.kill();
    menu.hidden = true;
    gsap.set(menu, { clearProps: 'transform' });
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    lenis?.start();
  });
}

// ---- Reveals (transform/opacity only; ≤0.8s; a sweep catches anything a fast scroll skipped) ----
const countUp = (el) => {
  const end = parseFloat(el.dataset.count);
  if (!Number.isFinite(end) || reduced) return;
  const obj = { v: 0 };
  const fmt = (v) => Math.round(v).toLocaleString('en-GB');
  gsap.to(obj, { v: end, duration: 1.2, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(obj.v); }, onComplete: () => { el.textContent = fmt(end); } });
};
export const reveal = (el) => {
  if (el.dataset.revealed) return;
  el.dataset.revealed = '1';
  const kind = el.dataset.reveal;
  const delay = +(el.dataset.delay || 0);
  if (kind === 'lines') gsap.to(el.querySelectorAll('.line > span'), { yPercent: 0, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.07, delay });
  else if (kind === 'fade') gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', delay });
  else if (kind === 'photo') setTimeout(() => el.classList.add('is-in'), delay * 1000);
  else el.classList.add('is-in');
  el.querySelectorAll('[data-count]').forEach(countUp);
  if (el.dataset.count) countUp(el);
};
const pending = new Set();
export const initReveals = (root = document) => {
  const els = [...root.querySelectorAll('[data-reveal]')].filter((el) => !el.dataset.revealManual && !el.dataset.revealed);
  if (reduced) { els.forEach((el) => { el.dataset.revealed = '1'; el.classList.add('is-in'); }); return; }
  els.forEach((el) => {
    pending.add(el);
    ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => { pending.delete(el); reveal(el); } });
  });
};
// Sweep: after a jump/fast scroll, reveal anything already above the fold line.
let sweepQueued = false;
const sweep = () => {
  sweepQueued = false;
  for (const el of pending) {
    if (el.getBoundingClientRect().top < innerHeight * 0.92) { pending.delete(el); reveal(el); }
  }
};
const queueSweep = () => { if (!sweepQueued && pending.size) { sweepQueued = true; requestAnimationFrame(sweep); } };
if (lenis) lenis.on('scroll', queueSweep); else addEventListener('scroll', queueSweep, { passive: true });

arrived.then(() => {
  initReveals();
  document.dispatchEvent(new CustomEvent('tavan:ready'));
});

// Refresh ScrollTrigger only if the page height really changed after fonts/load.
let measuredH = 0;
ScrollTrigger.addEventListener('refresh', () => { measuredH = document.documentElement.scrollHeight; });
const refreshIfChanged = () => { if (document.documentElement.scrollHeight !== measuredH) ScrollTrigger.refresh(); };
document.fonts?.ready.then(refreshIfChanged);
if (document.readyState === 'complete') refreshIfChanged();
else addEventListener('load', refreshIfChanged, { once: true });

export { gsap, ScrollTrigger };
