// Vitthal Kolpe Portfolio - Interactive Client Application Logic
// Powers smooth routing, dynamic case study rendering, SVG animations, and micro-interactions

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  try { initThemeToggle(); } catch (e) { console.error('initThemeToggle error:', e); }
  try { initMovingDesignation(); } catch (e) { console.error('initMovingDesignation error:', e); }
  try { initHeroDoodles(); } catch (e) { console.error('initHeroDoodles error:', e); }
  try { initHeroSparkles(); } catch (e) { console.error('initHeroSparkles error:', e); }
  try { initAboutPortrait(); } catch (e) { console.error('initAboutPortrait error:', e); }
  try { renderSkillsAndTools(); } catch (e) { console.error('renderSkillsAndTools error:', e); }
  try { renderWorkCards('all'); } catch (e) { console.error('renderWorkCards error:', e); }
  try { renderProcessSteps(); } catch (e) { console.error('renderProcessSteps error:', e); }
  try { setupEventListeners(); } catch (e) { console.error('setupEventListeners error:', e); }
  try { handleUrlRouting(); } catch (e) { console.error('handleUrlRouting error:', e); }
  try { initHeaderNavScrollspy(); } catch (e) { console.error('initHeaderNavScrollspy error:', e); }
}

// 0. Permanent Light Theme Enforcer (Dark Theme Removed)
function initThemeToggle() {
  try {
    localStorage.removeItem('vitthal_theme');
    localStorage.setItem('vitthal_theme', 'light');
  } catch (err) {}
  document.documentElement.setAttribute('data-theme', 'light');
}

// 1. Dynamic Rotating Designation (Alternates between Sr. UX UI Designer & Sr. Digital Product designer)
function initMovingDesignation() {
  const roleEl = document.getElementById('movingRoleText');
  if (!roleEl) return;

  const roles = [
    'Sr. UX UI Designer',
    'Sr. Digital Product designer'
  ];

  let roleIdx = 0;
  let charIdx = roles[0].length;
  let isDeleting = false;
  let speed = 90;

  function typeEffect() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      roleEl.textContent = current.substring(0, charIdx);
      speed = 35;
    } else {
      charIdx++;
      roleEl.textContent = current.substring(0, charIdx);
      speed = 75;
    }

    if (!isDeleting && charIdx === current.length) {
      // Pause at full designation for 2.8 seconds so it is comfortably readable
      speed = 2800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 350; // Pause before typing next designation
    }

    setTimeout(typeEffect, speed);
  }

  // Start typewriter loop after brief initial pause
  setTimeout(typeEffect, 1800);
}

// 2. Initialize Light UX/UI Designing Doodles & Animated Cursors (Airy, Non-Crowded & Animated)
function initHeroDoodles() {
  const heroSection = document.querySelector('.hero-centered-section');
  const doodles = document.querySelectorAll('.hero-doodles-container .light-doodle');
  const animCursorVitthal = document.getElementById('animCursorVitthal');
  const animCursorCollab = document.getElementById('animCursorCollab');

  if (!heroSection) return;

  // A. Gentle Interactive Mouse Parallax on Background Doodles
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    doodles.forEach((doodle) => {
      const speed = parseFloat(doodle.getAttribute('data-speed')) || 0.02;
      const moveX = deltaX * speed;
      const moveY = deltaY * speed;
      doodle.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    doodles.forEach((doodle) => {
      doodle.style.transform = 'translate3d(0, 0, 0)';
    });
  });

  // B. Click on Animated Cursor triggers a friendly toast & click burst
  animCursorVitthal?.addEventListener('click', (e) => {
    if (e) e.stopPropagation();
    const rings = animCursorVitthal.querySelectorAll('.cursor-click-ring');
    rings.forEach((ring) => {
      ring.style.animation = 'none';
      void ring.offsetWidth; // force reflow
      ring.style.animation = 'light-click-burst 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1';
      setTimeout(() => { ring.style.animation = ''; }, 950);
    });
    showToast('⚡ Vitthal Kolpe • Digital Product Designer');
  });

  animCursorCollab?.addEventListener('click', (e) => {
    if (e) e.stopPropagation();
    const ring = animCursorCollab.querySelector('.cursor-click-ring');
    if (ring) {
      ring.style.animation = 'none';
      void ring.offsetWidth;
      ring.style.animation = 'collab-click-burst 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1';
      setTimeout(() => { ring.style.animation = ''; }, 950);
    }
    showToast('🎨 UX Designer • User Experience & Research');
  });
}

// 1.5 Interactive Technology Sparkles with Hover & Click Micro-Interactions
function initHeroSparkles() {
  const sparkles = document.querySelectorAll('.tech-sparkle-node');
  const heroSection = document.querySelector('.hero-centered-section');
  if (!sparkles.length) return;

  sparkles.forEach((sparkle) => {
    // Click / Enter interaction
    function triggerSparkle(e) {
      if (e) e.stopPropagation();

      // Trigger burst shockwave
      sparkle.classList.add('sparkle-active');
      setTimeout(() => sparkle.classList.remove('sparkle-active'), 800);

      // Toast feedback
      const toastMsg = sparkle.getAttribute('data-toast') || '✨ Tech capability active';
      showToast(toastMsg);
    }

    sparkle.addEventListener('click', triggerSparkle);
    sparkle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerSparkle();
      }
    });

    // Touch devices: tap to toggle tooltip
    sparkle.addEventListener('touchstart', (e) => {
      // Toggle active class on touch
      const wasActive = sparkle.classList.contains('sparkle-active');
      sparkles.forEach(s => s.classList.remove('sparkle-active'));
      if (!wasActive) {
        sparkle.classList.add('sparkle-active');
      }
    }, { passive: true });
  });

  // Tap outside closes any active sparkle tooltips on touch devices
  document.addEventListener('touchstart', (e) => {
    if (!e.target.closest('.tech-sparkle-node')) {
      sparkles.forEach(s => s.classList.remove('sparkle-active'));
    }
  }, { passive: true });

  // Subtle interactive mouse parallax on sparkles
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      sparkles.forEach((sparkle, idx) => {
        const factor = (idx % 2 === 0 ? 1 : -1) * (6 + idx * 2);
        const transX = deltaX * factor;
        const transY = deltaY * factor;
        const icon = sparkle.querySelector('.sparkle-icon-wrap');
        if (icon) {
          icon.style.transform = `translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`;
        }
      });
    });

    heroSection.addEventListener('mouseleave', () => {
      sparkles.forEach((sparkle) => {
        const icon = sparkle.querySelector('.sparkle-icon-wrap');
        if (icon) {
          icon.style.transform = 'translate3d(0, 0, 0)';
        }
      });
    });
  }
}

// 2. Initialize Profile Summary 3D Interactive Portrait
function initAboutPortrait() {
  const card = document.getElementById('portraitCard3D');
  const glare = document.getElementById('portraitGlare');
  const speech = document.getElementById('portraitSpeechBubble');
  const btnSayHi = document.getElementById('btnSayHi');
  const closeSpeechBtn = document.getElementById('closeSpeechBtn');
  const btnStudio = document.getElementById('btnModeStudio');
  const btnBlueprint = document.getElementById('btnModeBlueprint');
  const cutoutLayer = document.getElementById('portraitCutoutLayer');

  if (!card) return;

  // A. 3D Gyroscopic Mouse Movement & Optical Parallax
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // -10 to +10 deg
    const rotY = ((x - centerX) / centerX) * 10;  // -10 to +10 deg

    card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.02)`;

    if (cutoutLayer) {
      const transX = ((x - centerX) / centerX) * 7;
      cutoutLayer.style.transform = `translateZ(30px) translateX(${transX.toFixed(2)}px)`;
    }

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    if (cutoutLayer) {
      cutoutLayer.style.transform = 'translateZ(25px) translateX(0px)';
    }
  });

  // B. Click on Card or "Say Hi!" Triggers Speech Bubble Greeting
  let speechTimer = null;
  function toggleGreeting() {
    if (!speech) return;
    speech.classList.toggle('active');
    if (speechTimer) clearTimeout(speechTimer);

    if (speech.classList.contains('active')) {
      showToast('👋 "Hey, I\'m Vitthal! Welcome to my portfolio."');
      speechTimer = setTimeout(() => {
        speech.classList.remove('active');
      }, 7000);
    }
  }

  card.addEventListener('click', (e) => {
    // Avoid toggling if clicking the close button or toolbar buttons
    if (e.target.closest('.speech-close-btn') || e.target.closest('.portrait-interactive-toolbar') || e.target.closest('.floating-p-badge')) return;
    toggleGreeting();
  });

  btnSayHi?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleGreeting();
  });

  closeSpeechBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (speechTimer) clearTimeout(speechTimer);
    speech?.classList.remove('active');
  });

  // C. View Modes (Studio vs Figma Blueprint Inspect)
  btnStudio?.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.remove('blueprint-active');
    btnStudio.classList.add('active');
    btnBlueprint?.classList.remove('active');
    showToast('🎨 Studio Portrait Mode');
  });

  btnBlueprint?.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.add('blueprint-active');
    btnBlueprint.classList.add('active');
    btnStudio?.classList.remove('active');
    showToast('📐 Figma Blueprint Inspect Mode Active');
  });
}

// 3. Render Skills, Design Tools & AI Tools (3 Distinct Parts)
const CORE_SKILLS = [
  {
    title: 'User-Centric Design (UCD)',
    desc: 'Empathetic design process grounded in real user needs, mental models, and business objectives.',
    badge: 'Core Philosophy',
    icon: 'ucd'
  },
  {
    title: 'UX Audit & Design Validation',
    desc: 'Heuristic evaluation, WCAG 2.1 AA accessibility checks, and data-backed UX recommendations.',
    badge: 'Heuristics',
    icon: 'uxaudit'
  },
  {
    title: 'User Research & Interviews',
    desc: 'Qualitative user interviews, contextual inquiries, persona mapping, and customer journeys.',
    badge: 'Discovery',
    icon: 'userresearch'
  },
  {
    title: 'Wireframing & Prototyping',
    desc: 'Low-fidelity architectural sketches to clickable high-fidelity prototypes in Figma & Framer.',
    badge: 'Ideation',
    icon: 'wireframing'
  },
  {
    title: 'Usability Testing',
    desc: 'Moderated task-based testing, System Usability Scale (SUS) benchmarking, and rapid iteration.',
    badge: 'Validation',
    icon: 'usabilitytesting'
  },
  {
    title: 'Design Systems & Tokens',
    desc: 'Scalable UI component libraries, Material Design 3 guidelines, and design token architectures.',
    badge: 'Scalability',
    icon: 'designsystems'
  },
  {
    title: 'Micro-Interactions & Motion',
    desc: 'Tactile haptic feedback, stateful button animations, smooth transitions, and user delight.',
    badge: 'Interaction',
    icon: 'microinteraction'
  },
  {
    title: 'Mobile & Web Apps Design',
    desc: 'End-to-end UX/UI for enterprise SaaS dashboards, telecom NOC cockpits, and mobile apps.',
    badge: 'Cross-Platform',
    icon: 'responsive'
  },
  {
    title: 'Responsive Website Design',
    desc: 'Fluid layout geometry, mobile-first breakpoints, and multi-device parity.',
    badge: 'Web & Mobile',
    icon: 'responsive'
  },
  {
    title: 'Information Architecture (IA)',
    desc: 'Card sorting, sitemaps, hierarchical taxonomy, and cognitive overload reduction.',
    badge: 'Structure',
    icon: 'ia'
  },
  {
    title: 'HTML, CSS & Bootstrap',
    desc: 'Solid front-end code understanding ensuring feasible, pixel-perfect developer implementation.',
    badge: 'Front-End',
    icon: 'htmlcss'
  },
  {
    title: 'Agile Collaboration',
    desc: 'Close partnership with PMs, engineering leads, QA analysts, and sprint stakeholders.',
    badge: 'Agile Delivery',
    icon: 'communication'
  }
];

const DESIGN_TOOLS = [
  { name: 'Figma', badge: 'Primary UI / Tokens', icon: 'figma' },
  { name: 'FigJam', badge: 'User Flows & Mapping', icon: 'figjam' },
  { name: 'Adobe XD', badge: 'Rapid Wireframes', icon: 'adobexd' },
  { name: 'Framer', badge: 'Interactive Web Proto', icon: 'framer' },
  { name: 'Sketch', badge: 'Vector UI Design', icon: 'sketch' },
  { name: 'InVision', badge: 'Testing & Walkthroughs', icon: 'invision' },
  { name: 'Zeplin', badge: 'Developer Handoff', icon: 'zeplin' },
  { name: 'Balsamiq', badge: 'Low-Fi Ideation', icon: 'balsamiq' },
  { name: 'Miro', badge: 'Workshops & Affinities', icon: 'miro' },
  { name: 'Photoshop', badge: 'Asset Editing', icon: 'photoshop' },
  { name: 'Illustrator', badge: 'Vector Icons & Art', icon: 'illustrator' },
  { name: 'Microsoft 365', badge: 'Specs & Sprint Docs', icon: 'office365' }
];

const AI_TOOLS = [
  {
    name: 'Claude AI',
    badge: 'IA & Logic Systems',
    superpower: 'Structures complex edge cases, multi-branching user journeys, and information architectures.',
    usage: 'Information Architecture & Edge Cases',
    icon: 'claude'
  },
  {
    name: 'Lovable',
    badge: 'Generative UI',
    superpower: 'Transforms natural language prompts into live, interactive full-stack web prototypes in minutes.',
    usage: 'Rapid Concept Ideation & Sprint POCs',
    icon: 'lovable'
  },
  {
    name: 'Figma Make',
    badge: 'Smart Layouts & AI',
    superpower: 'Accelerates component renaming, auto-layout structuring, and token consistency checks.',
    usage: 'Design System Maintenance',
    icon: 'figmamake'
  },
  {
    name: 'Google Gemini AI',
    badge: 'Deep Domain Analysis',
    superpower: 'Conducts multimodal competitive benchmarks, telecom telemetry analysis, and fintech research.',
    usage: 'Industry Intelligence & Data Synthesis',
    icon: 'gemini'
  },
  {
    name: 'ChatGPT',
    badge: 'UX Research & Copy',
    superpower: 'Generates user interview scripts, microcopy validation variants, and persona empathy maps.',
    usage: 'UX Writing & Heuristic Prompts',
    icon: 'chatgpt'
  },
  {
    name: 'Uizard',
    badge: 'AI Wireframing',
    superpower: 'Automates screen flow generation and converts sketches into editable digital wireframes.',
    usage: 'Lo-Fi to Mid-Fi Sprint Turnarounds',
    icon: 'uizard'
  },
  {
    name: 'Stitch',
    badge: 'Layout Exploration',
    superpower: 'Explores multi-variant UI component layouts and aesthetic variations across themes.',
    usage: 'Component Variants & Explorations',
    icon: 'stitch'
  },
  {
    name: 'Perplexity',
    badge: 'Live UX Benchmarking',
    superpower: 'Retrieves verified design patterns, live industry UX metrics, and accessibility standards.',
    usage: 'Design Trends & WCAG Compliance',
    icon: 'perplexity'
  }
];

function renderSkillsAndTools() {
  renderCoreSkills();
  renderDesignTools();
  renderAiTools();
}

function renderCoreSkills() {
  const container = document.getElementById('coreSkillsGrid');
  if (!container || typeof ILLUSTRATIONS === 'undefined') return;

  container.innerHTML = CORE_SKILLS.map(skill => {
    const iconSvg = ILLUSTRATIONS.tools[skill.icon] || ILLUSTRATIONS.tools.figma;
    return `
      <div class="core-skill-item animate-fade-in">
        <div class="core-skill-icon-wrap">${iconSvg}</div>
        <div class="core-skill-info">
          <div class="core-skill-top">
            <h4 class="core-skill-title">${skill.title}</h4>
            <span class="core-skill-badge">${skill.badge}</span>
          </div>
          <p class="core-skill-desc">${skill.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderDesignTools() {
  const container = document.getElementById('designToolsGrid');
  if (!container || typeof ILLUSTRATIONS === 'undefined') return;

  container.innerHTML = DESIGN_TOOLS.map(tool => {
    const iconSvg = ILLUSTRATIONS.tools[tool.icon] || ILLUSTRATIONS.tools.figma;
    return `
      <div class="tool-card animate-fade-in">
        <div class="tool-card-icon">${iconSvg}</div>
        <span class="tool-card-name">${tool.name}</span>
        <span class="tool-card-badge">${tool.badge}</span>
      </div>
    `;
  }).join('');
}

function renderAiTools() {
  const container = document.getElementById('aiToolsGrid');
  if (!container || typeof ILLUSTRATIONS === 'undefined') return;

  container.innerHTML = AI_TOOLS.map(ai => {
    const iconSvg = ILLUSTRATIONS.tools[ai.icon] || ILLUSTRATIONS.tools.lovable;
    return `
      <div class="ai-tool-card animate-fade-in">
        <div class="ai-card-top">
          <div class="ai-card-icon">${iconSvg}</div>
          <span class="ai-tag-pill">${ai.badge}</span>
        </div>
        <h4 class="ai-card-name">${ai.name}</h4>
        <p class="ai-superpower">${ai.superpower}</p>
        <span class="ai-usage-label">⚡ ${ai.usage}</span>
      </div>
    `;
  }).join('');
}

// 3. Render Selected Work Cards Grid (Clean 3-Column Design)
function renderWorkCards(categoryFilter = 'all') {
  const workGrid = document.getElementById('projectsGrid');
  if (!workGrid || typeof PROJECTS_DATA === 'undefined') return;

  const filteredProjects = categoryFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.categoryKey === categoryFilter);

  workGrid.innerHTML = filteredProjects.map(project => {
    let mockupHtml = '';
    try {
      mockupHtml = (typeof MOCKUP_RENDERER !== 'undefined' && MOCKUP_RENDERER.renderCardMockup)
        ? MOCKUP_RENDERER.renderCardMockup(project.id)
        : `<div class="mockup-placeholder">${project.title}</div>`;
    } catch (err) {
      console.warn('Mockup render fallback for:', project.id, err);
      mockupHtml = `<div class="mockup-placeholder">${project.title}</div>`;
    }

    const metricTagHtml = (project.metrics && project.metrics[0])
      ? `<span class="project-metric-tag">${project.metrics[0].value} ${project.metrics[0].label}</span>`
      : (project.keyFindings && project.keyFindings[0])
        ? `<span class="project-metric-tag">${project.keyFindings[0].value} ${project.keyFindings[0].label}</span>`
        : '';

    const toolsTagsHtml = (project.tools || [])
      .slice(0, 3)
      .map(tool => `<span class="tech-tag">${tool}</span>`)
      .join('');

    return `
      <article class="project-card animate-fade-in" data-project-id="${project.id}" tabindex="0">
        <div class="project-card-mockup-wrap">
          ${mockupHtml}
        </div>
        <div class="project-card-meta">
          <span class="project-category-badge">${project.category || ''}</span>
          ${metricTagHtml}
        </div>
        <h3 class="project-card-title">
          <span>${project.title || ''}</span>
          <span class="title-arrow">↗</span>
        </h3>
        <p class="project-card-desc">${project.tagline || ''}</p>
        <div class="project-tags-row">
          ${toolsTagsHtml}
        </div>
        <button class="btn-card-case-study" data-project-id="${project.id}">
          <span>Explore Case Study</span>
          <span>→</span>
        </button>
      </article>
    `;
  }).join('');

  // Attach card click handlers
  workGrid.querySelectorAll('.project-card, .btn-card-case-study').forEach(el => {
    el.addEventListener('click', (e) => {
      const card = e.target.closest('[data-project-id]');
      if (card) {
        const projectId = card.getAttribute('data-project-id');
        openCaseStudy(projectId);
      }
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const card = e.target.closest('[data-project-id]');
        if (card) openCaseStudy(card.getAttribute('data-project-id'));
      }
    });
  });
}

// 4. Case Study Screen View Transition & Logic
function openCaseStudy(projectId) {
  if (typeof PROJECTS_DATA === 'undefined' || typeof MOCKUP_RENDERER === 'undefined') return;

  const projectIndex = PROJECTS_DATA.findIndex(p => p.id === projectId);
  if (projectIndex === -1) return;

  const project = PROJECTS_DATA[projectIndex];
  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];
  const prevProject = PROJECTS_DATA[(projectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];

  const homeView = document.getElementById('portfolioHomeView');
  const caseStudyContainer = document.getElementById('caseStudyContainer');

  // Inject rendered Case Study HTML
  caseStudyContainer.innerHTML = MOCKUP_RENDERER.renderCaseStudy(project);
  
  // Set next & prev project names
  const prevNameEl = document.getElementById('prevProjectName');
  const nextNameEl = document.getElementById('nextProjectName');
  if (prevNameEl) prevNameEl.textContent = prevProject.title;
  if (nextNameEl) nextNameEl.textContent = nextProject.title;

  // Toggle views
  homeView.classList.add('hidden');
  caseStudyContainer.classList.add('active');

  // Update URL Hash without reload
  history.pushState({ projectId }, `Case Study: ${project.title}`, `#case-study-${project.id}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Bind Case Study interactions
  setupCaseStudyInteractions(project, prevProject.id, nextProject.id);
  showToast(`Loaded ${project.title} Case Study`);
}

function closeCaseStudy() {
  const homeView = document.getElementById('portfolioHomeView');
  const caseStudyContainer = document.getElementById('caseStudyContainer');

  caseStudyContainer.classList.remove('active');
  homeView.classList.remove('hidden');

  history.pushState(null, 'Vitthal Kolpe - Sr. UI/UX Designer', '#work');
  const workSection = document.getElementById('work');
  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
  if (window.syncHeaderNavIndicator) {
    window.syncHeaderNavIndicator();
  }
}

function setupCaseStudyInteractions(currentProject, prevId, nextId) {
  // Back to work button
  const backBtn = document.getElementById('btnBackToWork');
  backBtn?.addEventListener('click', closeCaseStudy);

  // Prev / Next Project buttons
  const prevBtn = document.getElementById('btnPrevProject');
  const nextBtn = document.getElementById('btnNextProject');
  prevBtn?.addEventListener('click', () => openCaseStudy(prevId));
  nextBtn?.addEventListener('click', () => openCaseStudy(nextId));

  // Interactive Before / After tabs
  const baTabs = document.querySelectorAll('.ba-tab');
  const baArea = document.getElementById('baDisplayArea');
  baTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      baTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const viewType = tab.getAttribute('data-view');
      if (baArea) {
        baArea.querySelectorAll('.ba-view').forEach(v => v.classList.remove('active'));
        if (viewType === 'redesign') {
          baArea.querySelector('.redesigned-view')?.classList.add('active');
        } else {
          baArea.querySelector('.legacy-view')?.classList.add('active');
        }
      }
    });
  });

  // Interactive High-Fi Screen Tabs
  const screenTabs = document.querySelectorAll('.screen-tab-btn');
  const screenTitle = document.getElementById('currentScreenTitle');
  const screenDesc = document.getElementById('currentScreenDesc');
  const screenCanvas = document.getElementById('screenCanvas');

  screenTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      screenTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const idx = parseInt(tab.getAttribute('data-screen-index'), 10);
      const screenObj = (currentProject.screens && currentProject.screens[idx]) ? currentProject.screens[idx] : null;
      if (screenObj) {
        if (screenTitle) screenTitle.textContent = screenObj.title;
        if (screenDesc) screenDesc.textContent = screenObj.description;
        if (screenCanvas) {
          screenCanvas.innerHTML = MOCKUP_RENDERER.renderCardMockup(currentProject.id);
        }
      }
    });
  });

  // Table of Contents Scroll Highlight
  const tocLinks = document.querySelectorAll('.toc-link');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const sections = document.querySelectorAll('.cs-section');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });
    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // Lightbox Modal for Case Study Infographics & Full Board
  const lightboxModal = document.getElementById('imageLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDownloadBtn = document.getElementById('lightboxDownloadBtn');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  function openLightbox(imgSrc, titleText) {
    if (!lightboxModal) return;
    if (lightboxImg) lightboxImg.src = imgSrc || 'illuminati-case-study-full.png';
    if (lightboxTitle) lightboxTitle.textContent = titleText || 'Case Study Infographic View';
    if (lightboxDownloadBtn) lightboxDownloadBtn.href = imgSrc || 'illuminati-case-study-full.png';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind all triggers inside the case study container
  const csContainer = document.getElementById('caseStudyContainer');
  csContainer?.querySelectorAll('.btn-open-lightbox-trigger, .cs-expandable-img, .btn-card-zoom').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const el = e.currentTarget;
      const imgSrc = el.getAttribute('data-img') || el.getAttribute('data-src') || el.querySelector('img')?.getAttribute('src');
      const title = el.getAttribute('data-title') || el.querySelector('img')?.getAttribute('alt') || 'Illuminati Energy Drink Infographic';
      openLightbox(imgSrc, title);
    });
  });

  closeLightboxBtn?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
}

// 5. Render 5 UX Process Step Nodes (matching screenshot)
function renderProcessSteps() {
  const processRoadmap = document.getElementById('processRoadmap');
  if (!processRoadmap || typeof ILLUSTRATIONS === 'undefined') return;

  const steps = [
    { num: '01', title: 'Discover', desc: 'User interviews, competitive analysis & pain point discovery.', icon: ILLUSTRATIONS.processIcons.discover },
    { num: '02', title: 'Define', desc: 'Heuristic UX audits, empathy mapping & core problem statements.', icon: ILLUSTRATIONS.processIcons.define },
    { num: '03', title: 'Design & Proto', desc: 'AI ideation (Lovable/Uizard) + Figma design tokens & wireframes.', icon: ILLUSTRATIONS.processIcons.design },
    { num: '04', title: 'Audit & Test', desc: 'Usability testing, WCAG 2.1 AA audits & stakeholder validation.', icon: ILLUSTRATIONS.processIcons.test },
    { num: '05', title: 'Deliver', desc: 'Component documentation, sprint handoff & analytics tracking.', icon: ILLUSTRATIONS.processIcons.deliver }
  ];

  processRoadmap.innerHTML = steps.map(s => `
    <div class="process-step-node">
      <div class="process-step-icon-box">
        ${s.icon}
      </div>
      <span class="process-step-num">${s.num}</span>
      <h4 class="process-step-title">${s.title}</h4>
      <p class="process-step-desc">${s.desc}</p>
    </div>
  `).join('');
}

// 6. Global Event Listeners & Micro-Interactions
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('mobile-open');
  });

  // Smooth scroll and active state on nav link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        navMenu?.classList.remove('mobile-open');

        // If in case study, return home first
        const caseStudyContainer = document.getElementById('caseStudyContainer');
        if (caseStudyContainer?.classList.contains('active')) {
          closeCaseStudy();
        }

        const target = document.querySelector(href);
        if (target) {
          const header = document.querySelector('.site-header');
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight + 2;

          window.scrollTo({
            top: Math.max(0, targetPos),
            behavior: 'smooth'
          });

          // Set active link & move indicator immediately
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          if (window.moveNavIndicatorTo) {
            window.moveNavIndicatorTo(link);
          }
        }
      }
    });
  });

  // Work category filter buttons
  document.querySelectorAll('.work-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.work-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderWorkCards(category);
    });
  });

  // Experience timeline tab buttons
  document.querySelectorAll('.exp-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.exp-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.exp-tab-content').forEach(c => c.style.display = 'none');
      const activeContent = document.getElementById(`tab-${targetTab}`);
      if (activeContent) activeContent.style.display = 'block';
    });
  });

  // Copy email to clipboard
  document.querySelectorAll('.btn-copy-email').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'vitthalkolpe.design@gmail.com';
      navigator.clipboard?.writeText(email).then(() => {
        showToast('Email copied to clipboard! (vitthalkolpe.design@gmail.com)');
      }).catch(() => {
        showToast('vitthalkolpe.design@gmail.com');
      });
    });
  });

  // Contact Modal
  const modal = document.getElementById('contactModal');
  const openModalBtns = document.querySelectorAll('.open-contact-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const contactForm = document.getElementById('contactForm');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal?.classList.add('active');
    });
  });

  closeModalBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    modal?.classList.remove('active');
    showToast('Thank you! Message received. Vitthal will respond shortly. ✉️');
    contactForm.reset();
  });

  // Keyboard navigation: Escape key returns from case study or closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightboxModal = document.getElementById('imageLightboxModal');
      if (lightboxModal?.classList.contains('active')) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
        return;
      }
      if (modal?.classList.contains('active')) {
        modal.classList.remove('active');
      } else {
        const caseStudyContainer = document.getElementById('caseStudyContainer');
        if (caseStudyContainer?.classList.contains('active')) {
          closeCaseStudy();
        }
      }
    }
  });

  // Interactive Sandbox Demo Listeners
  const demoHapticToggle = document.getElementById('demoHapticToggle');
  demoHapticToggle?.addEventListener('change', (e) => {
    showToast(e.target.checked ? 'Micro-interaction enabled: Haptic pulse ON' : 'Micro-interaction disabled');
  });

  // Window scroll navbar shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// 7. Toast Notification Utility
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastMessageText');
  if (toast && toastText) {
    toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

// 8. Handle Deep-linking via Hash URL (Supports both #case-study-id and #case-study/id)
function handleUrlRouting() {
  function checkHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#case-study-')) {
      const projectId = hash.replace('#case-study-', '');
      openCaseStudy(projectId);
    } else if (hash.startsWith('#case-study/')) {
      const projectId = hash.replace('#case-study/', '');
      openCaseStudy(projectId);
    } else {
      const caseStudyContainer = document.getElementById('caseStudyContainer');
      if (caseStudyContainer?.classList.contains('active')) {
        closeCaseStudy();
      }
    }
  }

  window.addEventListener('popstate', checkHash);
  window.addEventListener('hashchange', checkHash);

  // Check initial hash on page load
  checkHash();
}

// 9. Home Page Header Navigation Moving Indicator Line & Scrollspy
function initHeaderNavScrollspy() {
  const navMenu = document.getElementById('navMenu');
  const indicator = document.getElementById('navIndicatorLine');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navMenu || !indicator || navLinks.length === 0) return;

  const sectionIds = ['home', 'about', 'skills', 'work', 'experience', 'process', 'sandbox', 'contact'];
  const sections = sectionIds
    .map(id => ({ id, el: document.getElementById(id) }))
    .filter(s => s.el !== null);

  let currentActiveId = 'home';
  let isHovering = false;

  function moveIndicatorTo(link) {
    if (!link || !indicator || !navMenu) return;
    if (window.innerWidth <= 992) {
      indicator.style.opacity = '0';
      return;
    }

    const menuRect = navMenu.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const left = linkRect.left - menuRect.left;
    const width = linkRect.width;

    if (width > 0) {
      indicator.style.width = `${width}px`;
      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.opacity = '1';
    }
  }

  // Expose to window for clicks & external calls
  window.moveNavIndicatorTo = moveIndicatorTo;
  window.syncHeaderNavIndicator = () => {
    setTimeout(() => {
      const activeLink = navMenu.querySelector('.nav-link.active') || navMenu.querySelector('.nav-link');
      moveIndicatorTo(activeLink);
    }, 60);
  };

  // Hover transitions: smoothly follow cursor across nav items, return to active section on leave
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      isHovering = true;
      moveIndicatorTo(link);
    });
  });

  navMenu.addEventListener('mouseleave', () => {
    isHovering = false;
    const activeLink = navMenu.querySelector('.nav-link.active') || navMenu.querySelector('.nav-link');
    moveIndicatorTo(activeLink);
  });

  // Scrollspy: accurately tracks active section during scroll
  let ticking = false;
  function updateScrollspy() {
    // If case study is active or home view is hidden, do nothing
    const caseStudyContainer = document.getElementById('caseStudyContainer');
    if (caseStudyContainer?.classList.contains('active')) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const header = document.querySelector('.site-header');
    const headerOffset = header ? header.offsetHeight + 60 : 140;

    let targetSectionId = 'home';

    // 1. If at bottom of page, activate Contact
    if (scrollY + windowHeight >= docHeight - 60) {
      targetSectionId = 'contact';
    }
    // 2. If near the top, activate Home
    else if (scrollY < 120) {
      targetSectionId = 'home';
    }
    // 3. Find section currently under the viewport offset
    else {
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const top = sec.el.offsetTop - headerOffset;
        if (scrollY >= top) {
          targetSectionId = sec.id;
          break;
        }
      }
    }

    if (targetSectionId !== currentActiveId) {
      currentActiveId = targetSectionId;
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${targetSectionId}`) {
          link.classList.add('active');
          if (!isHovering) {
            moveIndicatorTo(link);
          }
        } else {
          link.classList.remove('active');
        }
      });
    } else if (!isHovering) {
      // Re-align in case of layout shifts
      const activeLink = navMenu.querySelector('.nav-link.active');
      if (activeLink) moveIndicatorTo(activeLink);
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollspy();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    const activeLink = navMenu.querySelector('.nav-link.active') || navMenu.querySelector('.nav-link');
    moveIndicatorTo(activeLink);
  });

  // Initial trigger
  setTimeout(() => {
    updateScrollspy();
    const activeLink = navMenu.querySelector('.nav-link.active') || navMenu.querySelector('.nav-link');
    moveIndicatorTo(activeLink);
  }, 120);
}
