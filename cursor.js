// ==========================================================================
// Vitthal Kolpe Portfolio - Interactive Sparking Circular Cursor
// Smooth trailing circle pointer with spark bursts on click and hover expansion
// ==========================================================================

(function() {
  let isInitialized = false;
  let cursorDot = null;
  let cursorCircle = null;
  let sparksLayer = null;

  let mouseX = -100, mouseY = -100;
  let circleX = -100, circleY = -100;
  let isHovering = false;
  let isClicking = false;
  let isVisible = false;
  let animFrameId = null;

  // Safe initialization that runs whether DOM is loading or already parsed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomCursor);
  } else {
    initCustomCursor();
  }

  // Backup trigger: if mouse moves before or after DOMContentLoaded
  window.addEventListener('mousemove', handleFirstMouseMove, { once: true, passive: true });

  function handleFirstMouseMove(e) {
    if (!isInitialized) {
      initCustomCursor();
    }
  }

  function initCustomCursor() {
    if (isInitialized) return;
    if (!document.body) {
      // In case body is not ready yet, retry on next tick
      setTimeout(initCustomCursor, 10);
      return;
    }
    isInitialized = true;

    // 1. Create cursor DOM elements
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.id = 'cursorDot';

    cursorCircle = document.createElement('div');
    cursorCircle.className = 'custom-cursor-circle';
    cursorCircle.id = 'cursorCircle';

    sparksLayer = document.createElement('div');
    sparksLayer.className = 'cursor-sparks-layer';
    sparksLayer.id = 'cursorSparksLayer';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorCircle);
    document.body.appendChild(sparksLayer);

    // Mark HTML element so CSS can safely hide default cursor ONLY when custom cursor is active
    document.documentElement.classList.add('has-custom-cursor');

    // 2. Track mouse movement
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorDot.style.opacity = '1';
        cursorCircle.style.opacity = '1';
        circleX = mouseX;
        circleY = mouseY;
        document.documentElement.classList.add('has-custom-cursor');
      }

      // Position inner tip dot instantly at exact tip
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    // Touch support: hide custom cursor on touch tap to prevent stuck circles
    window.addEventListener('touchstart', () => {
      isVisible = false;
      if (cursorDot) cursorDot.style.opacity = '0';
      if (cursorCircle) cursorCircle.style.opacity = '0';
    }, { passive: true });

    // Window leave & enter detection
    document.addEventListener('mouseleave', () => {
      isVisible = false;
      if (cursorDot) cursorDot.style.opacity = '0';
      if (cursorCircle) cursorCircle.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      if (cursorDot) cursorDot.style.opacity = '1';
      if (cursorCircle) cursorCircle.style.opacity = '1';
    });

    // 3. Smooth animation loop for trailing outer circle (Lerp damping)
    function animateCircle() {
      // Damping follow (0.2 for silky smooth trailing drag)
      circleX += (mouseX - circleX) * 0.2;
      circleY += (mouseY - circleY) * 0.2;

      const scale = isClicking ? 'scale(0.82)' : (isHovering ? 'scale(1.65)' : 'scale(1)');
      if (cursorCircle) {
        cursorCircle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) ${scale}`;
      }

      animFrameId = requestAnimationFrame(animateCircle);
    }
    animFrameId = requestAnimationFrame(animateCircle);

    // 4. Hover detection on interactive elements
    const interactiveSelectors = 'a, button, input, textarea, select, [role="button"], .theme-toggle-btn, .project-card, .tool-card, .core-skill-item, .ai-tool-card, .doodle-card, .animated-figma-cursor, .mini-toggle, .social-circle-link, .copy-btn, .screen-tab-btn, .ba-tab, .toc-link, .work-filter-btn, .portrait-card-3d, .floating-p-badge, .p-tool-btn, .speech-close-btn, .tech-sparkle-node, .btn-primary-pill, .btn-outline-pill, .moving-role-badge';

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        isHovering = true;
        cursorCircle?.classList.add('cursor-hover');
        cursorDot?.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(interactiveSelectors);
      if (target) {
        isHovering = false;
        cursorCircle?.classList.remove('cursor-hover');
        cursorDot?.classList.remove('cursor-hover');
      }
    });

    // 5. Click spark burst interaction (Circle clickable shockwave & sparks)
    window.addEventListener('mousedown', (e) => {
      isClicking = true;
      cursorCircle?.classList.add('cursor-clicking');
      triggerSparkBurst(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      isClicking = false;
      cursorCircle?.classList.remove('cursor-clicking');
    });

    // Spark burst generator on click
    function triggerSparkBurst(x, y) {
      if (!sparksLayer) return;

      // 1. Shockwave Ripple Ring expanding from click point
      const ripple = document.createElement('div');
      ripple.className = 'cursor-spark-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      sparksLayer.appendChild(ripple);

      // Inner echo ripple for rich layered shockwave
      const innerEcho = document.createElement('div');
      innerEcho.className = 'cursor-spark-ripple echo';
      innerEcho.style.left = `${x}px`;
      innerEcho.style.top = `${y}px`;
      sparksLayer.appendChild(innerEcho);

      setTimeout(() => {
        ripple.remove();
        innerEcho.remove();
      }, 550);

      // 2. 16 Radiant Golden-Orange Spark Particles shooting outward
      const sparkCount = 16;
      const colors = ['#FF6422', '#FF9A00', '#FFB300', '#FF4500', '#FFFFFF'];

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'cursor-spark-particle';

        // Calculate radial direction & distance
        const angle = (i / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const distance = 28 + Math.random() * 45; // 28px to 73px blast radius
        const destX = Math.cos(angle) * distance;
        const destY = Math.sin(angle) * distance;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 3 + Math.random() * 3.5;

        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.backgroundColor = color;
        spark.style.boxShadow = `0 0 8px ${color}`;
        spark.style.setProperty('--dx', `${destX}px`);
        spark.style.setProperty('--dy', `${destY}px`);

        sparksLayer.appendChild(spark);

        setTimeout(() => spark.remove(), 480);
      }
    }
  }
})();
