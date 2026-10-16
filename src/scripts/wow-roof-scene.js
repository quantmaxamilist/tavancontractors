// "The Roof, Assembled" — a cut-away house built procedurally in Three.js. Each of the 8 services is
// one part of the model (same order as services in site.ts):
// 0 slate roof · 1 flat roof · 2 new roof (rafters/membrane/battens) · 3 roof repairs (porch canopy)
// 4 lead work (bay roof) · 5 chimney · 6 fascias/soffits/guttering · 7 Velux roof windows
import * as THREE from 'three';

const C = {
  wall: 0xe8e5e0, trim: 0xf6f5f2, glass: 0x27303a, slate: 0x3c434c, slate2: 0x464e58, clay: 0xc35b2a, clay2: 0xb04f22,
  lead: 0x8793a0, timber: 0xc4955a, batten: 0xdcb47c, membrane: 0x2c7a72, black: 0x151517, brick: 0x8f5440,
  plinth: 0x19191b, flat: 0x34373c, alu: 0xb9bec4, door: 0x2b2d31, ridge: 0x2f353d, orange: 0xcc5500,
};

export function createRoofScene(canvas, { mobile = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.25 : 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.5, 200);

  // ---- light ----
  scene.add(new THREE.HemisphereLight(0xffffff, 0x2a2a2e, 1.25));
  const sun = new THREE.DirectionalLight(0xfff3e6, 2.6);
  sun.position.set(-9, 16, 11);
  sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 50 });
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xffb27a, 0.6);
  rim.position.set(12, 6, -10);
  scene.add(rim);

  // ---- helpers ----
  const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o });
  const M = {
    wall: mat(C.wall), trim: mat(C.trim, { roughness: 0.6 }), glass: mat(C.glass, { roughness: 0.15, metalness: 0.35 }),
    door: mat(C.door, { roughness: 0.5 }), plinth: mat(C.plinth, { roughness: 0.95 }), brick: mat(C.brick),
    ridge: mat(C.ridge, { roughness: 0.6 }), backRoof: mat(0x30363e, { roughness: 0.75 }), orange: mat(C.orange, { roughness: 0.5 }),
  };
  const box = (w, h, d, m, x = 0, y = 0, z = 0) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };
  const cyl = (r, h, m, seg = 16) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), m);
    mesh.castShadow = true;
    return mesh;
  };

  // dimensions
  const W = 8, D = 6, HW = 5.4, RH = 2.9, O = 0.35; // width, depth, wall height, roof rise, eave overhang
  const theta = Math.atan2(RH, D / 2);
  const L = Math.hypot(RH, D / 2) + O / Math.cos(theta); // slope length incl. overhang
  const eaveY = HW - O * Math.tan(theta);
  // A frame on the front slope: origin at the eave edge (centre), local -z runs up-slope, +y is the outward normal.
  const slopeFrame = () => {
    const g = new THREE.Group();
    g.position.set(0, eaveY, D / 2 + O);
    g.rotation.x = theta;
    return g;
  };

  const model = new THREE.Group();
  scene.add(model);

  // ---- base (not a service) ----
  const base = new THREE.Group();
  model.add(base);
  // soft round "stage" that fades out (no hard edges cut by the canvas) + shadow catcher
  const gc = document.createElement('canvas'); gc.width = gc.height = 256;
  const gx = gc.getContext('2d'); const gr = gx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, 'rgba(30,30,33,1)'); gr.addColorStop(0.6, 'rgba(20,20,22,0.8)'); gr.addColorStop(1, 'rgba(11,11,12,0)');
  gx.fillStyle = gr; gx.fillRect(0, 0, 256, 256);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(11, 64), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(gc), transparent: true, depthWrite: false }));
  disc.rotation.x = -Math.PI / 2; disc.position.set(1.6, -0.01, 0.4);
  base.add(disc);
  const shadowCatcher = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), new THREE.ShadowMaterial({ opacity: 0.45 }));
  shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.position.set(1.6, 0, 0.4); shadowCatcher.receiveShadow = true;
  base.add(shadowCatcher);

  const walls = new THREE.Group();
  base.add(walls);
  walls.add(box(W, HW, D, M.wall, 0, HW / 2, 0));
  // gable triangles
  const tri = new THREE.Shape();
  tri.moveTo(-D / 2, 0); tri.lineTo(D / 2, 0); tri.lineTo(0, RH); tri.closePath();
  const gableGeo = new THREE.ExtrudeGeometry(tri, { depth: W, bevelEnabled: false });
  const gable = new THREE.Mesh(gableGeo, M.wall);
  gable.rotation.y = Math.PI / 2;
  gable.position.set(-W / 2, HW, 0);
  gable.castShadow = gable.receiveShadow = true;
  walls.add(gable);
  // windows + door on the front facade
  const fz = D / 2 + 0.02;
  const win = (x, y, w = 1.15, h = 1.25) => {
    const g = new THREE.Group();
    g.add(box(w + 0.16, h + 0.16, 0.06, M.trim, 0, 0, 0));
    g.add(box(w, h, 0.07, M.glass, 0, 0, 0.01));
    g.add(box(0.05, h, 0.08, M.trim, 0, 0, 0.02));
    g.position.set(x, y, fz);
    return g;
  };
  walls.add(win(-2.2, 4.05), win(0.6, 4.05, 0.9), win(2.6, 4.05), win(2.6, 1.45));
  walls.add(box(1.0, 2.1, 0.08, M.door, 0.6, 1.05, fz + 0.01));
  // side extension (flat roof sits on it)
  const EX0 = W / 2, EX1 = W / 2 + 3.6, EZ0 = -2.4, EZ1 = D / 2, EH = 3.0;
  walls.add(box(EX1 - EX0, EH, EZ1 - EZ0, M.wall, (EX0 + EX1) / 2, EH / 2, (EZ0 + EZ1) / 2));
  const ew = win((EX0 + EX1) / 2, 1.45, 1.8, 1.2); ew.position.z = EZ1 + 0.02; walls.add(ew);
  // lead bay box (its lead roof is part 4)
  const BX = -2.2, BW = 2.1, BD = 0.75, BH = 2.15;
  walls.add(box(BW, BH, BD, M.trim, BX, BH / 2, D / 2 + BD / 2));
  walls.add(box(BW - 0.3, BH - 0.7, 0.05, M.glass, BX, BH / 2 + 0.05, D / 2 + BD + 0.01));
  // back slope + ridge (plain)
  const back = new THREE.Group();
  back.rotation.y = Math.PI;
  const backFrame = slopeFrame();
  backFrame.add(box(W + 2 * O, 0.12, L, M.backRoof, 0, 0.06, -L / 2));
  back.add(backFrame);
  base.add(back);
  const ridge = box(W + 2 * O + 0.1, 0.2, 0.36, M.ridge, 0, HW + RH + 0.1, 0);
  ridge.rotation.x = Math.PI / 4;
  base.add(ridge);

  // ---- service parts ----
  const parts = [];
  const part = (i) => { const g = new THREE.Group(); g.userData.part = i; parts[i] = g; model.add(g); return g; };
  const split = 0.75; // x where slate stops and the stripped (new roof) section starts

  // 0 · Slate roof: courses on the left of the front slope
  {
    const g = part(0);
    const f = slopeFrame(); g.add(f);
    const x0 = -W / 2 - O, x1 = split, w = x1 - x0;
    const n = 15, step = L / n;
    for (let k = 0; k < n; k++) {
      const m = mat(k % 2 ? C.slate : C.slate2, { roughness: 0.62 });
      const c = box(w, 0.07, step + 0.08, m, (x0 + x1) / 2, 0.1 + (k % 2) * 0.012, -(k + 0.5) * step);
      c.rotation.x = -0.035;
      f.add(c);
    }
  }
  // 2 · New roof: rafters, membrane, battens on the right of the front slope
  {
    const g = part(2);
    const f = slopeFrame(); g.add(f);
    const x0 = split, x1 = W / 2 + 0.05, w = x1 - x0;
    for (let x = x0 + 0.15; x < x1; x += 0.6) f.add(box(0.1, 0.22, L - 0.1, mat(C.timber), x, -0.05, -L / 2));
    f.add(box(w, 0.025, L - 0.15, mat(C.membrane, { roughness: 0.55 }), (x0 + x1) / 2, 0.08, -L / 2));
    for (let s = 0.25; s < L - 0.1; s += 0.34) f.add(box(w, 0.05, 0.07, mat(C.batten), (x0 + x1) / 2, 0.13, -s));
  }
  // 7 · Velux roof windows in the slate
  {
    const g = part(7);
    const f = slopeFrame(); g.add(f);
    for (const x of [-2.75, -0.85]) {
      const w = new THREE.Group();
      w.add(box(0.95, 0.12, 1.25, mat(0x2a2c30, { roughness: 0.4, metalness: 0.5 })));
      w.add(box(0.75, 0.13, 1.02, mat(0x6f8fa8, { roughness: 0.08, metalness: 0.6 }), 0, 0.012, 0));
      w.position.set(x, 0.2, -1.9);
      f.add(w);
    }
  }
  // 5 · Chimney on the left gable, with lead flashing and pots
  {
    const g = part(5);
    const CX = -W / 2 - 0.42, top = HW + RH + 1.1;
    g.add(box(0.95, top, 0.8, M.brick, CX, top / 2, 0));
    g.add(box(1.1, 0.14, 0.95, mat(0xa7a9ac), CX, top + 0.07, 0));
    g.add(box(1.0, 0.1, 0.86, mat(C.lead, { metalness: 0.5, roughness: 0.4 }), CX, HW + RH - 0.35, 0));
    for (const dz of [-0.2, 0.2]) { const p = cyl(0.13, 0.55, mat(C.clay)); p.position.set(CX, top + 0.4, dz); g.add(p); }
  }
  // 6 · Fascias, soffits, guttering + downpipe
  {
    const g = part(6);
    const f = slopeFrame(); g.add(f);
    f.add(box(W + 2 * O, 0.06, 0.32, M.trim, 0, -0.22, -0.16)); // soffit (underside)
    const blk = mat(C.black, { roughness: 0.45 });
    const fascia = box(W + 2 * O, 0.28, 0.06, blk, 0, eaveY - 0.12, D / 2 + O + 0.03);
    g.add(fascia);
    const gutter = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, W + 2 * O, 16, 1, true, Math.PI, Math.PI), blk);
    gutter.material.side = THREE.DoubleSide;
    gutter.rotation.z = Math.PI / 2;
    gutter.rotation.y = 0;
    gutter.position.set(0, eaveY - 0.2, D / 2 + O + 0.16);
    gutter.castShadow = true;
    g.add(gutter);
    const pipe = cyl(0.06, eaveY - 0.2, blk, 10);
    pipe.position.set(-W / 2 + 0.25, (eaveY - 0.2) / 2, D / 2 + O + 0.16);
    g.add(pipe);
  }
  // 1 · Flat roof on the extension: deck + membrane, aluminium trims, one rooflight
  {
    const g = part(1);
    const cx = (EX0 + EX1) / 2, cz = (EZ0 + EZ1) / 2, w = EX1 - EX0 + 0.2, d = EZ1 - EZ0 + 0.2;
    g.add(box(w, 0.22, d, mat(C.flat, { roughness: 0.7 }), cx, EH + 0.11, cz));
    const alu = mat(C.alu, { roughness: 0.35, metalness: 0.6 });
    g.add(box(w + 0.04, 0.12, 0.06, alu, cx, EH + 0.25, EZ1 + 0.11));
    g.add(box(0.06, 0.12, d, alu, EX1 + 0.11, EH + 0.25, cz));
    g.add(box(w, 0.12, 0.06, alu, cx, EH + 0.25, EZ0 - 0.09));
    const rl = new THREE.Group();
    rl.add(box(1.0, 0.25, 1.0, M.trim));
    rl.add(box(0.8, 0.27, 0.8, mat(0x6f8fa8, { roughness: 0.1, metalness: 0.5 })));
    rl.position.set(cx + 0.2, EH + 0.34, cz + 0.2);
    g.add(rl);
  }
  // 4 · Lead roof on the bay (with rolls)
  {
    const g = part(4);
    const lead = mat(C.lead, { metalness: 0.55, roughness: 0.38 });
    const top = new THREE.Group();
    top.add(box(BW + 0.25, 0.12, BD + 0.3, lead, 0, 0, 0));
    for (let k = -2; k <= 2; k++) {
      const r = cyl(0.045, BD + 0.3, lead, 10);
      r.rotation.x = Math.PI / 2;
      r.position.set(k * 0.45, 0.08, 0);
      top.add(r);
    }
    top.position.set(BX, BH + 0.06, D / 2 + BD / 2 + 0.05);
    top.rotation.x = 0.12;
    g.add(top);
  }
  // 3 · Roof repairs: clay-tiled porch canopy over the door
  {
    const g = part(3);
    const px = 0.6, py = 2.5, pd = 1.0, pw = 1.7, a = 0.62;
    const sl = (pw / 2) / Math.cos(a) + 0.08;
    for (const side of [-1, 1]) {
      const s = new THREE.Group();
      for (let k = 0; k < 4; k++) {
        const t = box(sl, 0.06, pd / 4 + 0.03, mat(k % 2 ? C.clay : C.clay2, { roughness: 0.7 }), 0, 0.01 * (k % 2), -pd / 2 + (k + 0.5) * (pd / 4));
        s.add(t);
      }
      s.position.set(px + side * (sl / 2) * Math.cos(a) - side * 0.02, py + (pw / 2) * Math.tan(a) / 2 - 0.02, D / 2 + pd / 2);
      s.rotation.z = -side * a;
      g.add(s);
    }
    g.add(box(0.12, 0.12, pd + 0.05, mat(C.clay2), px, py + (pw / 2) * Math.tan(a) + 0.02, D / 2 + pd / 2));
    for (const side of [-1, 1]) g.add(box(0.08, 0.5, 0.08, M.trim, px + side * 0.72, py - 0.2, D / 2 + pd - 0.08));
  }

  // pin anchors (world space, final state)
  const slopePoint = (x, s, h = 0.25) => {
    const v = new THREE.Vector3(x, h, -s);
    v.applyEuler(new THREE.Euler(theta, 0, 0));
    v.add(new THREE.Vector3(0, eaveY, D / 2 + O));
    return v;
  };
  const anchors = [
    slopePoint(-2.2, L * 0.72),
    new THREE.Vector3((EX0 + EX1) / 2 - 0.9, EH + 0.45, (EZ0 + EZ1) / 2 - 0.6),
    slopePoint(2.6, L * 0.55, 0.3),
    new THREE.Vector3(0.6, 3.2, D / 2 + 0.55),
    new THREE.Vector3(BX - 0.55, BH + 0.25, D / 2 + BD / 2 + 0.1),
    new THREE.Vector3(-W / 2 - 0.42, HW + RH + 1.45, 0),
    new THREE.Vector3(-3.1, eaveY - 0.18, D / 2 + O + 0.32),
    slopePoint(-0.85, 1.9, 0.32),
  ];

  // per-part material clones so each part can glow on its own
  const meshesOf = (o) => { const a = []; o.traverse((c) => c.isMesh && a.push(c)); return a; };
  const state = parts.map((g, i) => {
    const meshes = meshesOf(g);
    meshes.forEach((m) => { m.material = m.material.clone(); m.material.emissive = new THREE.Color(C.orange); m.material.emissiveIntensity = 0; m.userData.part = i; });
    return { g, meshes, home: g.position.clone(), glow: 0, lift: 0, drop: 0 };
  });
  const pickables = state.flatMap((s) => s.meshes);

  // ---- camera fit ----
  const target = new THREE.Vector3(1.5, 3.9, 0.6);
  const dir = new THREE.Vector3(-0.56, 0.42, 0.71).normalize();
  const radius = 7.1;
  let dist = 30;
  const az = { v: 0, intro: 0 };
  const placeCamera = () => {
    const d = dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), az.v + az.intro);
    camera.position.copy(target).addScaledVector(d, dist * (1 + az.intro * 0.35));
    camera.lookAt(target);
  };
  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const vf = THREE.MathUtils.degToRad(camera.fov);
    const hf = 2 * Math.atan(Math.tan(vf / 2) * camera.aspect);
    dist = radius / Math.sin(Math.min(vf, hf) / 2);
    camera.updateProjectionMatrix();
    placeCamera();
  };

  // ---- assembly state ----
  const walls0 = walls;
  const applyState = () => {
    state.forEach((s) => {
      s.g.position.set(s.home.x, s.home.y + s.drop * 9 + s.lift, s.home.z);
      s.g.rotation.z = s.drop * 0.18;
      s.g.visible = s.drop < 0.999;
      s.meshes.forEach((m) => { m.material.emissiveIntensity = s.glow; });
    });
  };
  const setBuilt = (p) => { // p: 0 = nothing, 1 = fully built (used for poster/reduced)
    walls0.scale.y = Math.max(0.001, p);
    back.visible = ridge.visible = p > 0.99;
    state.forEach((s) => { s.drop = p > 0.99 ? 0 : 1; });
    applyState();
  };

  const render = () => { placeCamera(); renderer.render(scene, camera); };
  const project = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    return anchors.map((a, i) => {
      const v = a.clone();
      v.y += state[i].lift;
      v.project(camera);
      return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h };
    });
  };

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const pick = (cx, cy) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(pickables, false)[0];
    return hit ? hit.object.userData.part : -1;
  };

  const compile = () => { resize(); setBuilt(1); renderer.compile(scene, camera); };

  const dispose = () => {
    scene.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose()); } });
    renderer.dispose();
  };

  return { renderer, scene, camera, state, walls: walls0, back, ridge, ridgeHome: ridge.position.y, az, resize, render, project, pick, applyState, setBuilt, compile, dispose };
}
