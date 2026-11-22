// Vitthal Kolpe Portfolio - Cinematic Sparkles Intro Preloader
// Orchestrates converging particle vortex, name reveal, flight trajectory to header, and VK logo touchdown.

(function() {
  'use strict';

  let animationFrameId = null;
  let isRunning = false;
  let particles = [];
  let burstParticles = [];
  let cometParticles = [];
  let currentState = 'idle'; // idle | converge | radiate | comet | touchdown | done
  let flightStartTime = 0;
  const FLIGHT_DURATION = 1300; // ms for the flight from center to header
  let startX = 0, startY = 0, targetX = 0, targetY = 0;
  let flightCurrentX = 0, flightCurrentY = 0;

  // Particle color palette: Warm amber, Tangerine (#FF6422), Brilliant Gold (#FFAA00), Star White (#FFFFFF)
  const COLORS = [
    '#FF6422',
    '#FF7D3B',
    '#FFAA00',
    '#FFD24D',
    '#FFFFFF',
    '#FFF4E0',
    '#FF5000'
  ];

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Draw 4-point concave sparkle star
  function drawSparkleStar(ctx, x, y, size, color, alpha, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.fillStyle = color;

    ctx.beginPath();
    const rOuter = size;
    const rInner = size * 0.22;
    for (let i = 0; i < 8; i++) {
      const r = (i % 2 === 0) ? rOuter : rInner;
      const angle = (i * Math.PI) / 4;
      const px = Math.cos(angle) * r;
      const py = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();

    // Central white stardust core
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(1, rInner * 0.8), 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.restore();
  }

  // Draw soft glowing orb
  function drawGlowingOrb(ctx, x, y, radius, color, alpha) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, '#FFFFFF');
    grad.addColorStop(0.35, color);
    grad.addColorStop(1, 'rgba(255, 100, 34, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Initialize converging particles from viewport perimeter
  function createConvergingParticles(width, height) {
    const list = [];
    const count = Math.min(180, Math.floor((width * height) / 6000));
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < count; i++) {
      // Spawn on elliptical boundary outside center
      const angle = Math.random() * Math.PI * 2;
      const dist = randomRange(Math.min(width, height) * 0.45, Math.max(width, height) * 0.75);
      const px = centerX + Math.cos(angle) * dist;
      const py = centerY + Math.sin(angle) * dist;

      // Target with slight random spread around the title center
      const targetSpreadX = randomRange(-180, 180);
      const targetSpreadY = randomRange(-50, 50);

      list.push({
        x: px,
        y: py,
        targetX: centerX + targetSpreadX,
        targetY: centerY + targetSpreadY,
        color: randomChoice(COLORS),
        size: randomRange(2.5, 6.5),
        alpha: 0,
        targetAlpha: randomRange(0.65, 1),
        speed: randomRange(0.035, 0.065),
        spin: randomRange(-0.05, 0.05),
        rotation: Math.random() * Math.PI * 2,
        type: Math.random() > 0.4 ? 'star' : 'orb',
        orbitAngle: angle,
        orbitRadius: dist,
        trail: []
      });
    }
    return list;
  }

  // Spawn touchdown starburst particles at destination
  function triggerTouchdownBurst(x, y) {
    burstParticles = [];
    const count = 38;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = randomRange(2.5, 8.5);
      burstParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: randomRange(2, 5.5),
        color: randomChoice(COLORS),
        alpha: 1,
        decay: randomRange(0.02, 0.045),
        rotation: Math.random() * Math.PI * 2,
        spin: randomRange(-0.1, 0.1),
        type: Math.random() > 0.5 ? 'star' : 'orb'
      });
    }
  }

  // Spawn comet trailing particles during flight
  function spawnCometParticles(x, y) {
    for (let i = 0; i < 4; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = randomRange(0.8, 3.2);
      cometParticles.push({
        x: x + randomRange(-8, 8),
        y: y + randomRange(-4, 4),
        vx: Math.cos(angle) * speed + randomRange(0.5, 2.0), // bias slightly backwards
        vy: Math.sin(angle) * speed + randomRange(-0.5, 1.5),
        size: randomRange(1.8, 4.5),
        color: randomChoice(COLORS),
        alpha: 0.95,
        decay: randomRange(0.03, 0.06),
        rotation: Math.random() * Math.PI * 2,
        spin: randomRange(-0.08, 0.08),
        type: Math.random() > 0.4 ? 'star' : 'orb'
      });
    }
  }

  // Quartic easing for ultra-smooth cinematic motion
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function startCinematicPreloader() {
    const preloaderEl = document.getElementById('cinematicPreloader');
    const canvas = document.getElementById('preloaderSparklesCanvas');
    const titleCard = document.getElementById('preloaderTitleCard');
    const flyingLabel = document.getElementById('preloaderFlyingLabel');
    const brandWelcomeTiny = document.getElementById('brandWelcomeTiny');

    if (!preloaderEl || !canvas || !titleCard || !brandWelcomeTiny) {
      console.warn('Preloader elements missing from DOM');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    isRunning = true;
    currentState = 'converge';

    // Ensure preloader is visible & scroll locked
    document.documentElement.classList.add('preloader-active');
    preloaderEl.classList.remove('hidden-preloader', 'fading-out');
    titleCard.classList.remove('revealed', 'dispersing');
    brandWelcomeTiny.classList.remove('landed');
    if (flyingLabel) flyingLabel.style.display = 'none';

    // Resize canvas to match retina display
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    particles = createConvergingParticles(window.innerWidth, window.innerHeight);
    burstParticles = [];
    cometParticles = [];

    const startTime = performance.now();

    // Main particle & animation render loop
    function loop(now) {
      if (!isRunning) return;

      const elapsed = now - startTime;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Clear canvas with deep transparent dark overlay for motion blur trails
      ctx.clearRect(0, 0, width, height);

      // State transitions: 5s Total Choreography
      // 0.0s - 1.6s: Swirling particle convergence
      if (currentState === 'converge' && elapsed > 1600) {
        currentState = 'radiate';
        titleCard.classList.add('revealed');
        const stars = preloaderEl.querySelectorAll('.cinematic-sparkle-star');
        stars.forEach(s => s.classList.add('active'));
      }

      // 1.6s - 3.5s: Text display & radiant stardust
      // 3.5s - 4.8s: Flight to header VK logo (1300ms)
      if (currentState === 'radiate' && elapsed > 3500) {
        currentState = 'comet';
        flightStartTime = now;

        // Calculate flight coordinates from titleCard to brandWelcomeTiny
        const startRect = titleCard.getBoundingClientRect();
        const targetRect = brandWelcomeTiny.getBoundingClientRect();

        startX = startRect.left + startRect.width / 2;
        startY = startRect.top + startRect.height / 2;
        targetX = targetRect.left + targetRect.width / 2;
        targetY = targetRect.top + targetRect.height / 2;

        flightCurrentX = startX;
        flightCurrentY = startY;

        // Disperse center title
        titleCard.classList.add('dispersing');

        // Reveal flying label
        if (flyingLabel) {
          flyingLabel.style.display = 'inline-flex';
          flyingLabel.style.opacity = '1';
          flyingLabel.style.left = startX + 'px';
          flyingLabel.style.top = startY + 'px';
          flyingLabel.style.transform = 'translate(-50%, -50%) scale(2.2)';
        }

        // Begin smooth fadeout of preloader background curtain
        setTimeout(() => {
          preloaderEl.classList.add('fading-out');
        }, 150);
      }

      // 1. Render & Update Converging / Ambient Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (currentState === 'converge') {
          // Accelerate towards target with swirling vortex curve
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.x += dx * p.speed - dy * 0.025;
          p.y += dy * p.speed + dx * 0.025;
          p.alpha = Math.min(p.targetAlpha, p.alpha + 0.035);
        } else if (currentState === 'radiate') {
          // Gentle ambient float around text
          p.y -= 0.35;
          p.x += Math.sin(p.rotation) * 0.5;
          p.alpha = Math.max(0, p.alpha - 0.008);
        } else {
          // Fade remaining initial particles
          p.alpha = Math.max(0, p.alpha - 0.025);
        }

        p.rotation += p.spin;

        if (p.alpha > 0.02) {
          if (p.type === 'star') {
            drawSparkleStar(ctx, p.x, p.y, p.size, p.color, p.alpha, p.rotation);
          } else {
            drawGlowingOrb(ctx, p.x, p.y, p.size, p.color, p.alpha);
          }
        }
      }

      // 2. Flight Motion & Comet Tail
      if (currentState === 'comet') {
        const flightElapsed = now - flightStartTime;
        const progress = Math.min(1, flightElapsed / FLIGHT_DURATION);
        const eased = easeOutQuart(progress);

        // Curving cinematic arc (lifts subtly before homing in)
        const arc = Math.sin(progress * Math.PI) * -42;
        flightCurrentX = startX + (targetX - startX) * eased;
        flightCurrentY = startY + (targetY - startY) * eased + arc;

        // Scale morph: smoothly shrinks from 2.2 down to 1.0 (exact match of header tiny font)
        const currentScale = 2.2 - (2.2 - 1.0) * eased;

        if (flyingLabel) {
          flyingLabel.style.left = flightCurrentX + 'px';
          flyingLabel.style.top = flightCurrentY + 'px';
          flyingLabel.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
        }

        // Spawn comet sparkles from flight tip
        spawnCometParticles(flightCurrentX, flightCurrentY);

        if (progress >= 1) {
          // Arrival touchdown!
          currentState = 'touchdown';
          if (flyingLabel) flyingLabel.style.display = 'none';

          // Lock tiny title in place in header
          brandWelcomeTiny.classList.add('landed');

          // Trigger celebratory stardust burst at the VK logo!
          triggerTouchdownBurst(targetX, targetY);

          // Complete preloader teardown at 5.0s mark
          setTimeout(() => {
            finishPreloader();
          }, 200);
        }
      }

      // 3. Render Comet Tail Particles
      for (let i = cometParticles.length - 1; i >= 0; i--) {
        const cp = cometParticles[i];
        cp.x += cp.vx;
        cp.y += cp.vy;
        cp.alpha -= cp.decay;
        cp.rotation += cp.spin;

        if (cp.alpha <= 0) {
          cometParticles.splice(i, 1);
        } else {
          if (cp.type === 'star') {
            drawSparkleStar(ctx, cp.x, cp.y, cp.size, cp.color, cp.alpha, cp.rotation);
          } else {
            drawGlowingOrb(ctx, cp.x, cp.y, cp.size, cp.color, cp.alpha);
          }
        }
      }

      // 4. Render Touchdown Burst Particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vx *= 0.94;
        bp.vy *= 0.94;
        bp.alpha -= bp.decay;
        bp.rotation += bp.spin;

        if (bp.alpha <= 0) {
          burstParticles.splice(i, 1);
        } else {
          if (bp.type === 'star') {
            drawSparkleStar(ctx, bp.x, bp.y, bp.size, bp.color, bp.alpha, bp.rotation);
          } else {
            drawGlowingOrb(ctx, bp.x, bp.y, bp.size, bp.color, bp.alpha);
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);

    // Skip functionality: Click anywhere on preloader or press Escape
    function skipIntro() {
      if (!isRunning) return;
      finishPreloader();
    }

    preloaderEl.addEventListener('click', skipIntro);

    function onKeyDown(e) {
      if (e.key === 'Escape' || e.key === ' ') {
        skipIntro();
      }
    }
    window.addEventListener('keydown', onKeyDown);

    function finishPreloader() {
      isRunning = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      preloaderEl.removeEventListener('click', skipIntro);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', resizeCanvas);

      if (flyingLabel) flyingLabel.style.display = 'none';
      brandWelcomeTiny.classList.add('landed');
      preloaderEl.classList.add('fading-out');

      setTimeout(() => {
        preloaderEl.classList.add('hidden-preloader');
        document.documentElement.classList.remove('preloader-active');
        sessionStorage.setItem('vk_cinematic_intro_viewed', 'true');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 400);
    }
  }

  // Public entry point
  window.replayCinematicIntro = function() {
    sessionStorage.removeItem('vk_cinematic_intro_viewed');
    startCinematicPreloader();
  };

  // Auto-run on first visit or query flag
  document.addEventListener('DOMContentLoaded', () => {
    const brandWelcomeTiny = document.getElementById('brandWelcomeTiny');
    const preloaderEl = document.getElementById('cinematicPreloader');

    // Click on tiny title in header allows replaying the cinematic intro
    brandWelcomeTiny?.addEventListener('click', (e) => {
      e.preventDefault();
      window.replayCinematicIntro();
    });

    const urlParams = new URLSearchParams(window.location.search);
    const forceReplay = urlParams.has('intro') || urlParams.has('replay');
    const alreadySeen = sessionStorage.getItem('vk_cinematic_intro_viewed');

    if (!alreadySeen || forceReplay) {
      // First visit: Launch cinematic preloader!
      startCinematicPreloader();
    } else {
      // Returning visit: Settle header tiny name immediately, keep preloader hidden
      if (preloaderEl) preloaderEl.classList.add('hidden-preloader');
      document.documentElement.classList.remove('preloader-active');
      if (brandWelcomeTiny) brandWelcomeTiny.classList.add('landed');
    }
  });

})();
