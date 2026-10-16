// Controller for "The Roof, Assembled": loads Three.js in idle time, plays a ~3s self-running assembly
// when ≥50% of the stage is on screen, pauses off screen, then fades in pins + the numbered list.
// List ⇄ model ⇄ pins highlight each other. Replay at the end. Poster for reduced motion / no WebGL.
import { gsap, reduced } from './core.js';

const webglOK = () => {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
};

const sec = document.querySelector('[data-wow="roof"]');
if (sec) init(sec);

function init(sec) {
  const stage = sec.querySelector('.wow__stage');
  const canvas = sec.querySelector('canvas');
  const pins = [...sec.querySelectorAll('[data-pin]')];
  const items = [...sec.querySelectorAll('[data-item]')];
  const replayBtn = sec.querySelector('[data-replay]');
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const mobile = matchMedia('(max-width: 899px)').matches;

  if (reduced || !webglOK()) { sec.classList.add('is-static', 'is-done'); bindList(); return; }

  let S = null, loading = null, raf = 0, onScreen = false, needs = true, tl = null, played = false, done = false, active = -1;

  const load = () => loading || (loading = import('./wow-roof-scene.js').then(({ createRoofScene }) => {
    S = createRoofScene(canvas, { mobile });
    S.compile(); // compiles shaders with the model fully built
    S.setBuilt(0);
    sec.classList.add('is-ready');
    needs = true;
    return S;
  }).catch((e) => { console.warn('wow fallback', e); sec.classList.add('is-static', 'is-done'); }));
  // Fetch Three.js + compile shaders only when the visitor is ~1.5 screens away (keeps it out of the first load).
  const near = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    near.disconnect();
    (window.requestIdleCallback || ((f) => setTimeout(f, 50)))(() => load(), { timeout: 800 });
  }, { rootMargin: '150% 0px' });
  near.observe(stage);

  const placePins = () => {
    if (!S || !done) return;
    S.project().forEach((p, i) => { pins[i].style.transform = `translate(${p.x}px, ${p.y}px)`; });
  };
  const frame = () => {
    raf = onScreen ? requestAnimationFrame(frame) : 0;
    if (!S) return;
    if (needs || tl?.isActive()) { S.applyState(); S.render(); placePins(); needs = false; }
  };
  const run = () => { if (!raf && onScreen) raf = requestAnimationFrame(frame); };

  const play = () => {
    if (!S) return;
    done = false;
    sec.classList.remove('is-done');
    setActive(-1, true);
    tl?.kill();
    S.setBuilt(0);
    S.back.visible = S.ridge.visible = true;
    const order = [2, 0, 7, 5, 6, 1, 4, 3]; // structure first, then the trades, one assembly
    tl = gsap.timeline({ onComplete: () => { done = true; sec.classList.add('is-done'); needs = true; run(); } });
    tl.fromTo(S.az, { intro: 0.32 }, { intro: 0, duration: 2.9, ease: 'power3.out' }, 0)
      .fromTo(S.walls.scale, { y: 0.001 }, { y: 1, duration: 0.7, ease: 'power3.out' }, 0.05)
      .fromTo(S.back.position, { y: 9 }, { y: 0, duration: 0.8, ease: 'power3.out' }, 0.45)
      .fromTo(S.ridge.position, { y: S.ridgeHome + 9 }, { y: S.ridgeHome, duration: 0.8, ease: 'power3.out' }, 0.45);
    order.forEach((idx, k) => tl.to(S.state[idx], { drop: 0, duration: 0.85, ease: 'power3.out' }, 0.55 + k * 0.1));
    needs = true;
    run();
  };

  function setActive(i, instant = false) {
    if (i === active && !instant) return;
    active = i;
    items.forEach((el, k) => el.classList.toggle('is-on', k === i));
    pins.forEach((el, k) => el.classList.toggle('is-on', k === i));
    sec.classList.toggle('has-active', i >= 0);
    if (!S) return;
    S.state.forEach((s, k) => {
      gsap.to(s, { glow: k === i ? 0.55 : 0, lift: k === i ? 0.3 : 0, duration: instant ? 0 : 0.35, ease: 'power2.out', overwrite: true, onUpdate: () => { needs = true; } });
    });
    needs = true;
    run();
  }
  function bindList() {
    items.forEach((el, i) => {
      el.addEventListener('pointerenter', () => done && setActive(i));
      el.addEventListener('pointerleave', () => done && setActive(-1));
      el.addEventListener('focusin', () => done && setActive(i));
      el.addEventListener('focusout', () => done && setActive(-1));
    });
  }
  bindList();
  pins.forEach((el, i) => {
    el.addEventListener('pointerenter', () => done && setActive(i));
    el.addEventListener('pointerleave', () => done && setActive(-1));
    el.addEventListener('click', () => items[i]?.querySelector('a')?.click());
  });

  // model picking (desktop) + gentle parallax
  let hoverPart = -1;
  canvas.addEventListener('pointermove', (e) => {
    if (!S || !done || e.pointerType !== 'mouse') return;
    const i = S.pick(e.clientX, e.clientY);
    if (i !== hoverPart) { hoverPart = i; setActive(i); canvas.style.cursor = i >= 0 ? 'pointer' : ''; canvas.dataset.cursor = i >= 0 ? 'link' : ''; }
  });
  canvas.addEventListener('pointerleave', () => { if (hoverPart !== -1) { hoverPart = -1; setActive(-1); } });
  canvas.addEventListener('click', (e) => {
    if (!S || !done) return;
    const i = S.pick(e.clientX, e.clientY);
    if (i >= 0) items[i]?.querySelector('a')?.click();
  });
  if (fine) {
    stage.addEventListener('pointermove', (e) => {
      if (!S || !done) return;
      const r = stage.getBoundingClientRect();
      gsap.to(S.az, { v: ((e.clientX - r.left) / r.width - 0.5) * 0.14, duration: 1.2, ease: 'power3.out', overwrite: 'auto', onUpdate: () => { needs = true; } });
      run();
    });
    stage.addEventListener('pointerleave', () => { if (S) gsap.to(S.az, { v: 0, duration: 1.2, ease: 'power3.out', onUpdate: () => { needs = true; } }); });
  }

  replayBtn?.addEventListener('click', () => play());

  // ≥50% on screen → play once; off screen → stop rendering and pause the timeline
  new IntersectionObserver((entries) => {
    for (const e of entries) {
      onScreen = e.isIntersecting;
      if (!onScreen) { tl?.pause(); cancelAnimationFrame(raf); raf = 0; continue; }
      if (tl && !done) tl.resume();
      needs = true;
      run();
      if (!played && e.intersectionRatio >= 0.5) {
        played = true;
        load().then(() => { if (S) { S.resize(); play(); } });
      }
    }
  }, { threshold: [0, 0.5] }).observe(stage);

  new ResizeObserver(() => { if (S) { S.resize(); needs = true; run(); } }).observe(stage);
  addEventListener('pagehide', (e) => { if (!e.persisted && S) { cancelAnimationFrame(raf); S.dispose(); } });
}
