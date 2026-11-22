// Vitthal Kolpe Portfolio - High-Fidelity Vector UI Mockups
// Generates realistic, styled UI screens for Desktop Dashboards, Mobile Apps, and Design Systems

const MOCKUP_RENDERER = {
  // Render project preview card mockup (for the Work grid)
  renderCardMockup(projectId) {
    switch (projectId) {
      case 'careconnect':
        return `
          <div class="device-mockup unified-card-frame careconnect-card-frame theme-careconnect">
            <div class="mockup-header unified-mock-header cc-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url cc-url">careconnect.health/app</span>
              <span class="unified-live-pill cc-live-pill">🩺 CX & UX CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body cc-card-body">
              <div class="unified-card-content cc-card-content">
                <div class="unified-card-text cc-card-text">
                  <span class="unified-subhead cc-subhead">A SMART HEALTHCARE APP</span>
                  <h4 class="unified-brand-title cc-brand-title">CARECONNECT</h4>
                  <p class="unified-flavour cc-flavour">Telemedicine & Mobile Health App</p>
                  <div class="unified-card-badges cc-card-badges">
                    <span class="unified-badge-sm cc-badge-sm">Figma</span>
                    <span class="unified-badge-sm cc-badge-sm">Lovable</span>
                    <span class="unified-badge-sm cc-badge-sm">Mobile First</span>
                    <span class="unified-badge-sm cc-badge-sm badge-accent teal">Video Consult</span>
                  </div>
                </div>
                <div class="unified-card-visual cc-card-visual">
                  <img src="careconnect-hero-preview.png" alt="CareConnect Healthcare App Mobile UI Mockup" class="unified-thumb cc-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      case 'illuminati':
        return `
          <div class="device-mockup unified-card-frame illuminati-card-frame theme-illuminati">
            <div class="mockup-header unified-mock-header ill-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url ill-url">illuminatidrinks.com</span>
              <span class="unified-live-pill ill-live-pill">⚡ UX CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body ill-card-body">
              <div class="unified-card-content ill-card-content">
                <div class="unified-card-text ill-card-text">
                  <span class="unified-subhead ill-subhead">THE HIDDEN POWER WITHIN</span>
                  <h4 class="unified-brand-title ill-brand-title">ILLUMINATI</h4>
                  <p class="unified-flavour ill-flavour">Web Design & UI/UX Case Study</p>
                  <div class="unified-card-badges ill-card-badges">
                    <span class="unified-badge-sm ill-badge-sm">Figma</span>
                    <span class="unified-badge-sm ill-badge-sm">Illustrator</span>
                    <span class="unified-badge-sm ill-badge-sm">Photoshop</span>
                    <span class="unified-badge-sm ill-badge-sm badge-accent lime">User Research</span>
                  </div>
                </div>
                <div class="unified-card-visual ill-card-visual">
                  <img src="illuminati-hero-preview.png" alt="Illuminati Energy Drink 3D Can Mockup" class="unified-thumb ill-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      case 'globicall':
        return `
          <div class="device-mockup unified-card-frame globicall-card-frame theme-globicall">
            <div class="mockup-header unified-mock-header gc-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url gc-url">globicall.app/voip</span>
              <span class="unified-live-pill gc-live-pill">📞 UX CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body gc-card-body">
              <div class="unified-card-content gc-card-content">
                <div class="unified-card-text gc-card-text">
                  <span class="unified-subhead gc-subhead">SMART CALLING APP</span>
                  <h4 class="unified-brand-title gc-brand-title">GLOBI CALL</h4>
                  <p class="unified-flavour gc-flavour">Mobile Application & Calling Solution</p>
                  <div class="unified-card-badges gc-card-badges">
                    <span class="unified-badge-sm gc-badge-sm">Figma</span>
                    <span class="unified-badge-sm gc-badge-sm">Illustrator</span>
                    <span class="unified-badge-sm gc-badge-sm">Photoshop</span>
                    <span class="unified-badge-sm gc-badge-sm badge-accent blue">User Testing</span>
                  </div>
                </div>
                <div class="unified-card-visual gc-card-visual">
                  <img src="globicall-hero-preview.png" alt="Globi Call Mobile UI Mockup" class="unified-thumb gc-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      case 'rawfitness':
        return `
          <div class="device-mockup unified-card-frame rawfitness-card-frame theme-rawfitness">
            <div class="mockup-header unified-mock-header rf-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url rf-url">rawfitness.gym/train</span>
              <span class="unified-live-pill rf-live-pill">⚡ WEB CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body rf-card-body">
              <div class="unified-card-content rf-card-content">
                <div class="unified-card-text rf-card-text">
                  <span class="unified-subhead rf-subhead">READY TO TRAIN YOUR BODY</span>
                  <h4 class="unified-brand-title rf-brand-title">RAW FITNESS</h4>
                  <p class="unified-flavour rf-flavour">Athletic Gym & Fitness Web Design</p>
                  <div class="unified-card-badges rf-card-badges">
                    <span class="unified-badge-sm rf-badge-sm">Figma</span>
                    <span class="unified-badge-sm rf-badge-sm">Illustrator</span>
                    <span class="unified-badge-sm rf-badge-sm">Photoshop</span>
                    <span class="unified-badge-sm rf-badge-sm badge-accent red">Level Up</span>
                  </div>
                </div>
                <div class="unified-card-visual rf-card-visual">
                  <img src="rawfitness-hero-preview.png" alt="RAW Fitness Gym Web UI Mockup" class="unified-thumb rf-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      case 'physioyour':
        return `
          <div class="device-mockup unified-card-frame physio-card-frame theme-physio">
            <div class="mockup-header unified-mock-header physio-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url physio-url">physioyour.health/app</span>
              <span class="unified-live-pill physio-live-pill">🩺 UX & UI CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body physio-card-body">
              <div class="unified-card-content physio-card-content">
                <div class="unified-card-text physio-card-text">
                  <span class="unified-subhead physio-subhead">DIGITAL REHABILITATION</span>
                  <h4 class="unified-brand-title physio-brand-title">PHYSIOTHERAPY</h4>
                  <p class="unified-flavour physio-flavour">Mobile App & Clinical Workflows</p>
                  <div class="unified-card-badges physio-card-badges">
                    <span class="unified-badge-sm physio-badge-sm">Figma</span>
                    <span class="unified-badge-sm physio-badge-sm">Adobe XD</span>
                    <span class="unified-badge-sm physio-badge-sm">Mobile First</span>
                    <span class="unified-badge-sm physio-badge-sm badge-accent teal">Video Therapy</span>
                  </div>
                </div>
                <div class="unified-card-visual physio-card-visual">
                  <img src="physio-hero-preview.png" alt="Physiotherapy Mobile App UI Mockup" class="unified-thumb physio-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      case 'quikjob':
        return `
          <div class="device-mockup unified-card-frame quikjob-card-frame theme-quikjob">
            <div class="mockup-header unified-mock-header qj-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url qj-url">quikjob.careers/app</span>
              <span class="unified-live-pill qj-live-pill">💼 UX CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body qj-card-body">
              <div class="unified-card-content qj-card-content">
                <div class="unified-card-text qj-card-text">
                  <span class="unified-subhead qj-subhead">1-CLICK JOB SEARCH</span>
                  <h4 class="unified-brand-title qj-brand-title">QUIKJOB</h4>
                  <p class="unified-flavour qj-flavour">Job Hunting & Application App</p>
                  <div class="unified-card-badges qj-card-badges">
                    <span class="unified-badge-sm qj-badge-sm">Figma</span>
                    <span class="unified-badge-sm qj-badge-sm">Adobe XD</span>
                    <span class="unified-badge-sm qj-badge-sm">Mobile First</span>
                    <span class="unified-badge-sm qj-badge-sm badge-accent emerald">1-Click Apply</span>
                  </div>
                </div>
                <div class="unified-card-visual qj-card-visual">
                  <img src="quikjob-card-thumb.png" alt="QuikJob Mobile App UI Mockup" class="unified-thumb qj-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      case 'fxtm':
        return `
          <div class="device-mockup unified-card-frame fxtm-card-frame theme-fxtm">
            <div class="mockup-header unified-mock-header fxtm-mock-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mockup-url unified-url fxtm-url">fxtm.telecom.internal/analytics</span>
              <span class="unified-live-pill fxtm-live-pill">📡 TELECOM & FX CASE STUDY</span>
            </div>
            <div class="mockup-body unified-card-body fxtm-card-body">
              <div class="unified-card-content fxtm-card-content">
                <div class="unified-card-text fxtm-card-text">
                  <span class="unified-subhead fxtm-subhead">INTERNATIONAL TELECOMS ANALYTICS</span>
                  <h4 class="unified-brand-title fxtm-brand-title">FXTM</h4>
                  <p class="unified-flavour fxtm-flavour">Foreign Exchange & Telecom Monitoring</p>
                  <div class="unified-card-badges fxtm-card-badges">
                    <span class="unified-badge-sm fxtm-badge-sm">Figma</span>
                    <span class="unified-badge-sm fxtm-badge-sm">Adobe XD</span>
                    <span class="unified-badge-sm fxtm-badge-sm">Enterprise</span>
                    <span class="unified-badge-sm fxtm-badge-sm badge-accent purple">FX Monitoring</span>
                  </div>
                </div>
                <div class="unified-card-visual fxtm-card-visual">
                  <img src="fxtm-card-thumb.png" alt="FXTM Enterprise Telecom Monitoring UI Mockup" class="unified-thumb fxtm-can-thumb" />
                </div>
              </div>
            </div>
          </div>
        `;

      default:
        return `<div class="generic-mockup">Preview Screen</div>`;
    }
  },

  // Render Detailed Case Study Screen
  renderCaseStudy(project) {
    if (project.id === 'rawfitness') {
      return this.renderRawFitnessCaseStudy(project);
    }
    if (project.id === 'globicall') {
      return this.renderGlobiCallCaseStudy(project);
    }
    if (project.id === 'careconnect') {
      return this.renderCareConnectCaseStudy(project);
    }
    if (project.id === 'illuminati') {
      return this.renderIlluminatiCaseStudy(project);
    }
    if (project.id === 'physioyour') {
      return this.renderPhysioYourCaseStudy(project);
    }
    if (project.id === 'quikjob') {
      return this.renderQuikJobCaseStudy(project);
    }
    if (project.id === 'fxtm') {
      return this.renderFXTMCaseStudy(project);
    }
    return `
      <div class="case-study-screen animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar">
          <button class="btn-back-to-work" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-share">
            <a href="https://www.behance.net/vitthalkolpe" target="_blank" class="cs-ext-link">Behance ↗</a>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header">
          <div class="cs-badge-pill">${project.badge}</div>
          <h1 class="cs-title">${project.fullTitle}</h1>
          <p class="cs-tagline">${project.summary}</p>

          <!-- Key Metadata Grid -->
          <div class="cs-meta-grid">
            <div class="meta-item">
              <span class="meta-label">ROLE</span>
              <strong class="meta-value">${project.role}</strong>
            </div>
            <div class="meta-item">
              <span class="meta-label">COMPANY</span>
              <strong class="meta-value">${project.company}</strong>
            </div>
            <div class="meta-item">
              <span class="meta-label">TIMELINE</span>
              <strong class="meta-value">${project.timeline}</strong>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORMS</span>
              <strong class="meta-value">${project.platforms}</strong>
            </div>
          </div>

          <!-- Tools Used Chips -->
          <div class="cs-tools-bar">
            <span class="tools-label">Tools & Stack:</span>
            <div class="tools-chips">
              ${project.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Key Metrics Strip -->
        <div class="cs-metrics-strip">
          <div class="cs-metrics-container">
            ${project.metrics.map(m => `
              <div class="cs-metric-card">
                <span class="cs-metric-val">${m.value}</span>
                <strong class="cs-metric-label">${m.label}</strong>
                <p class="cs-metric-desc">${m.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- In-Depth Content Layout with Sticky TOC -->
        <div class="cs-body-layout">
          <!-- Sticky Table of Contents -->
          <aside class="cs-toc-sidebar">
            <div class="toc-sticky-box">
              <span class="toc-title">CASE STUDY SECTIONS</span>
              <ul class="toc-list">
                <li><a href="#section-overview" class="toc-link active">1. Overview & Problem</a></li>
                <li><a href="#section-audit" class="toc-link">2. UX Audit & Research</a></li>
                <li><a href="#section-persona" class="toc-link">3. User Persona & Journey</a></li>
                <li><a href="#section-ai-workflow" class="toc-link">4. AI Rapid Prototyping</a></li>
                <li><a href="#section-screens" class="toc-link">5. High-Fidelity UI Screens</a></li>
                <li><a href="#section-impact" class="toc-link">6. Results & Impact</a></li>
              </ul>
            </div>
          </aside>

          <!-- Main Case Study Content Area -->
          <main class="cs-main-content">
            <!-- 1. Overview & Problem Statement -->
            <section class="cs-section" id="section-overview">
              <div class="section-tag">01 / DISCOVERY & CHALLENGE</div>
              <h2 class="section-heading">The Context & Problem Statement</h2>
              <p class="cs-paragraph">${project.overview}</p>
              
              <div class="problem-callout-box">
                <div class="callout-icon">⚠️</div>
                <div class="callout-content">
                  <h4>The Core Challenge</h4>
                  <p>${project.problemStatement}</p>
                </div>
              </div>
            </section>

            <!-- 2. UX Audit Findings & Interactive Before/After -->
            <section class="cs-section" id="section-audit">
              <div class="section-tag">02 / UX AUDIT & HEURISTICS</div>
              <h2 class="section-heading">Heuristic UX Audit & Friction Analysis</h2>
              <p class="cs-paragraph">
                Before jumping into visual solutions, a comprehensive UX audit of the legacy system was conducted using Nielsen Norman Group heuristics, cognitive walk-throughs, and accessibility evaluation (WCAG 2.1).
              </p>

              <div class="audit-cards-grid">
                ${project.uxAuditFindings.map(audit => `
                  <div class="audit-card severity-${audit.severity.toLowerCase()}">
                    <div class="audit-header">
                      <span class="severity-badge">${audit.severity} Issue</span>
                      <h4>${audit.title}</h4>
                    </div>
                    <p>${audit.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Interactive UX Audit Before vs After Comparison Widget -->
              <div class="before-after-widget">
                <div class="ba-header">
                  <h3>Interactive Design Transformation</h3>
                  <div class="ba-toggle-tabs">
                    <button class="ba-tab active" data-view="redesign">Modern Redesign (Vitthal)</button>
                    <button class="ba-tab" data-view="legacy">Legacy Baseline Interface</button>
                  </div>
                </div>
                <div class="ba-display-area" id="baDisplayArea">
                  <div class="ba-view redesigned-view active">
                    <div class="ba-tag tag-new">Redesigned UI with Material 3 & High-Contrast Tokens</div>
                    ${MOCKUP_RENDERER.renderCardMockup(project.id)}
                  </div>
                  <div class="ba-view legacy-view">
                    <div class="ba-tag tag-old">Legacy Interface (High Cognitive Overload, No Hierarchy)</div>
                    <div class="legacy-mockup-frame">
                      <div class="legacy-table">
                        <div class="legacy-row header"><span>ID</span><span>PORT</span><span>STATUS</span><span>TX/S</span><span>ERR</span><span>QUEUE</span><span>IP_ADDR</span></div>
                        <div class="legacy-row"><span>01</span><span>8080</span><span>RUN</span><span>1200</span><span>0</span><span>0</span><span>192.168.1.10</span></div>
                        <div class="legacy-row alert-row"><span>02</span><span>8081</span><span>ERR</span><span>40</span><span>481</span><span>999</span><span>192.168.1.11</span></div>
                        <div class="legacy-row"><span>03</span><span>8082</span><span>RUN</span><span>2310</span><span>0</span><span>0</span><span>192.168.1.12</span></div>
                        <div class="legacy-row"><span>04</span><span>8083</span><span>RUN</span><span>1890</span><span>2</span><span>1</span><span>192.168.1.13</span></div>
                      </div>
                      <div class="legacy-disclaimer">❌ Unprioritized data grid, no visual warnings, zero responsive adaptation.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 3. User Persona & Journey Mapping -->
            <section class="cs-section" id="section-persona">
              <div class="section-tag">03 / USER CENTRICITY</div>
              <h2 class="section-heading">Target User Persona & Empathy Mapping</h2>
              <div class="persona-card">
                <div class="persona-profile">
                  <div class="persona-avatar-circle">
                    ${project.persona.name.charAt(0)}
                  </div>
                  <div class="persona-details">
                    <h3>${project.persona.name}</h3>
                    <span class="persona-role">${project.persona.role}</span>
                  </div>
                </div>
                <blockquote class="persona-quote">
                  "${project.persona.quote}"
                </blockquote>
                <div class="persona-goals-frustrations">
                  <div class="pf-column">
                    <h4>🎯 Primary User Goals</h4>
                    <ul>
                      ${project.persona.goals.map(g => `<li>${g}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="pf-column">
                    <h4>⚡ Core Frustrations</h4>
                    <ul>
                      ${project.persona.frustrations.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 4. AI-Powered Workflow & Rapid Prototyping -->
            <section class="cs-section" id="section-ai-workflow">
              <div class="section-tag">04 / MODERN TOOLING & METHODOLOGY</div>
              <h2 class="section-heading">${project.aiAssistance.title}</h2>
              <div class="ai-methodology-card">
                <div class="ai-icon-badge">✨ AI + Human UX Synergy</div>
                <p class="cs-paragraph">${project.aiAssistance.text}</p>
                <div class="ai-pipeline-diagram">
                  <div class="pipeline-step">
                    <span class="p-num">1</span>
                    <strong>Prompt & Scenarios</strong>
                    <span>User stories converted into AI layout prompts</span>
                  </div>
                  <div class="pipeline-arrow">→</div>
                  <div class="pipeline-step">
                    <span class="p-num">2</span>
                    <strong>Lovable & Uizard</strong>
                    <span>10+ rapid visual layout permutations in 48 hours</span>
                  </div>
                  <div class="pipeline-arrow">→</div>
                  <div class="pipeline-step highlight">
                    <span class="p-num">3</span>
                    <strong>Human UX & Figma</strong>
                    <span>Accessibility audits, tokens, and responsive refinement</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 5. High-Fidelity UI Screens Gallery -->
            <section class="cs-section" id="section-screens">
              <div class="section-tag">05 / DESIGN EXECUTION</div>
              <h2 class="section-heading">Key Final UI Screens & Design System</h2>
              <p class="cs-paragraph">
                The final design system utilized scalable tokens, responsive 8pt grid geometry, Material Design 3 guidelines, and high-contrast telemetry colors.
              </p>

              <div class="screens-tabs-container">
                <div class="screens-nav-tabs" id="screensNavTabs">
                  ${project.screens.map((screen, index) => `
                    <button class="screen-tab-btn ${index === 0 ? 'active' : ''}" data-screen-index="${index}">
                      ${screen.title}
                    </button>
                  `).join('')}
                </div>

                <div class="screen-display-wrapper" id="screenDisplayWrapper">
                  <div class="screen-info-bar">
                    <h3 id="currentScreenTitle">${project.screens[0].title}</h3>
                    <p id="currentScreenDesc">${project.screens[0].description}</p>
                  </div>
                  <div class="screen-canvas" id="screenCanvas">
                    ${MOCKUP_RENDERER.renderCardMockup(project.id)}
                  </div>
                </div>
              </div>
            </section>

            <!-- 6. Results, Usability Metrics & Impact -->
            <section class="cs-section" id="section-impact">
              <div class="section-tag">06 / MEASURED OUTCOMES</div>
              <h2 class="section-heading">Business Impact & Usability Validation</h2>
              <div class="impact-checklist">
                ${project.impact.map(item => `
                  <div class="impact-check-item">
                    <span class="check-icon">✓</span>
                    <p>${item}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Recommendation / Testimonial Box -->
              <div class="client-recommendation-box">
                <div class="rec-quote-mark">“</div>
                <p>
                  Vitthal brought exceptional clarity to our mission-critical interfaces. His ability to perform rigorous UX audits and translate dense technical telemetry into intuitive, beautiful dashboards directly reduced our incident triage times.
                </p>
                <div class="rec-author">
                  <strong>Engineering & Product Stakeholder</strong>
                  <span>Telcovas Solutions & Services</span>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">Previous</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">Next</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  // Dedicated Authentic Case Study Renderer for Illuminati Energy Drink (Exact Figma data & images only)
  renderIlluminatiCaseStudy(project) {
    return `
      <div class="case-study-screen illuminati-case-study animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar ill-cs-top-bar">
          <button class="btn-back-to-work ill-back-btn" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb ill-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-actions">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-badge" title="Open Interactive Prototype in Figma">
              <span class="figma-dot">❖</span> Figma Prototype ↗
            </a>
            <button class="btn-lightbox-pill btn-open-lightbox-trigger" data-img="illuminati-case-study-full.png" data-title="Illuminati Energy Drink - Full Case Study Infographic">
              <span>Full Board (11,003px)</span> 🔍
            </button>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header ill-hero-header">
          <div class="ill-badge-group">
            <span class="cs-badge-pill ill-neon-pill">UX CASE STUDY</span>
            <span class="ill-tag-live">● THE HIDDEN POWER WITHIN</span>
            <span class="ill-tag-proto">❖ FIGMA PROTOTYPE</span>
          </div>
          <h1 class="cs-title ill-main-title">${project.title}</h1>
          <p class="cs-tagline ill-tagline-text">${project.overview}</p>

          <!-- Quick Action Launch Strip -->
          <div class="ill-cta-strip">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-neon">
              <span class="btn-glow-icon">❖</span>
              <span>Launch Live Figma Prototype</span>
              <span class="btn-arrow">↗</span>
            </a>
            <button class="btn-secondary-neon btn-open-lightbox-trigger" data-img="illuminati-case-study-full.png" data-title="Illuminati Energy Drink - Full Infographic Board (1440 × 24,757px Ultra HD)">
              <span>Explore Full Infographic Board (Ultra HD)</span>
              <span class="btn-search-icon">🔍</span>
            </button>
          </div>

          <!-- Key Metadata Grid (Exact from Figma) -->
          <div class="cs-meta-grid ill-meta-grid">
            <div class="meta-item">
              <span class="meta-label">MY ROLE</span>
              <strong class="meta-value">${project.role}</strong>
              <small style="color: #8C91A4; font-size: 0.72rem; margin-top: 4px;">Strategies & Visual Design</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">TOOLS</span>
              <strong class="meta-value">Figma • Illustrator • Photoshop</strong>
              <small style="color: #8C91A4; font-size: 0.72rem; margin-top: 4px;">Vector & 3D Assets</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">TAGLINE</span>
              <strong class="meta-value">"The Hidden Power Within"</strong>
              <small style="color: #8C91A4; font-size: 0.72rem; margin-top: 4px;">Core Brand Identity</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">PROCESS</span>
              <strong class="meta-value">5-Stage Design Process</strong>
              <small style="color: #8C91A4; font-size: 0.72rem; margin-top: 4px;">Understand → Define → Ideate → Design → Test</small>
            </div>
          </div>
        </div>

        <!-- Quantitative Research Highlights Strip (Exact from Figma) -->
        <div class="cs-metrics-strip ill-metrics-strip">
          <div class="cs-metrics-container">
            ${project.metrics.map(m => `
              <div class="cs-metric-card ill-metric-card">
                <span class="cs-metric-val ill-metric-glow">${m.value}</span>
                <strong class="cs-metric-label">${m.label}</strong>
                <p class="cs-metric-desc">${m.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- In-Depth Case Study Layout with Sticky TOC -->
        <div class="cs-body-layout ill-body-layout">
          <!-- Sticky Table of Contents -->
          <aside class="cs-toc-sidebar ill-toc-sidebar">
            <div class="toc-sticky-box ill-toc-box">
              <span class="toc-title ill-toc-title">CASE STUDY SECTIONS</span>
              <ul class="toc-list ill-toc-list">
                <li><a href="#section-overview" class="toc-link active">1. Overview & Goals</a></li>
                <li><a href="#section-understand" class="toc-link">2. 01 Understand</a></li>
                <li><a href="#section-define" class="toc-link">3. 02 Define</a></li>
                <li><a href="#section-ideate" class="toc-link">4. 03 Ideate</a></li>
                <li><a href="#section-design" class="toc-link">5. 04 Design</a></li>
                <li><a href="#section-test" class="toc-link">6. 05 Test</a></li>
                <li><a href="#section-prototype" class="toc-link">7. Prototype & Board</a></li>
              </ul>

              <!-- Mini Prototype Sidebar Card -->
              <div class="toc-prototype-card">
                <span class="proto-mini-tag">LIVE PROTOTYPE</span>
                <p>Test the interactive 3D model, flavours, ingredients, and navigation directly in Figma.</p>
                <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-sidebar-proto">Open in Figma ↗</a>
              </div>
            </div>
          </aside>

          <!-- Main Case Study Content Area -->
          <main class="cs-main-content ill-main-content">
            <!-- 1. Overview, Goals & Problem Statement -->
            <section class="cs-section ill-section" id="section-overview">
              <div class="section-tag ill-section-tag">PROJECT FOUNDATION</div>
              <h2 class="section-heading">Project Overview</h2>
              <p class="cs-paragraph">
                ${project.overview}
              </p>

              <!-- UX Goals -->
              <h3 class="ill-subheading">🎯 UX Goals</h3>
              <ul class="ill-bullet-list">
                ${project.uxGoals.map(goal => `<li>${goal}</li>`).join('')}
              </ul>

              <!-- Problem Statement Callout Box -->
              <div class="problem-callout-box ill-problem-box" style="margin-top: 24px;">
                <div class="callout-icon">⚠️</div>
                <div class="callout-content">
                  <h4>Problem Statement</h4>
                  <p>${project.problemStatement}</p>
                </div>
              </div>

              <!-- Problem Solutions Callout Box -->
              <div class="problem-callout-box ill-solution-box" style="margin-top: 16px; border-color: rgba(75, 178, 0, 0.4); background: rgba(75, 178, 0, 0.05);">
                <div class="callout-icon" style="color: #4BB200;">💡</div>
                <div class="callout-content">
                  <h4 style="color: #4BB200;">Problem Solutions</h4>
                  <p>${project.problemSolutions}</p>
                </div>
              </div>

              <!-- 5-Stage Design Process Cards -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Design Process</h3>
              <p class="cs-paragraph" style="margin-bottom: 16px;">
                <em>"${project.roleDescription}"</em>
              </p>
              <div class="ill-process-stages-grid">
                ${project.designProcessSteps.map(step => `
                  <div class="ill-stage-card">
                    <span class="ill-stage-num">${step.num}</span>
                    <strong class="ill-stage-name">${step.name}</strong>
                    <span class="ill-stage-sub">${step.sub}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 2. 01 Understand (User Research, Interviews & Competitive Analysis) -->
            <section class="cs-section ill-section" id="section-understand">
              <div class="section-tag ill-section-tag">01 / UNDERSTAND</div>
              <h2 class="section-heading">01 Understand: User Research & Competitive Analysis</h2>
              <p class="cs-paragraph">
                In this phase, we focused on researching the target audience, analyzing competitors, and identifying user needs. The goal was to gain deep insights into user behavior, pain points, and expectations to lay a strong foundation for the design process.
              </p>

              <!-- Target Audience -->
              <h3 class="ill-subheading">Target Audience</h3>
              <p class="cs-paragraph" style="margin-bottom: 16px;">
                The Illuminati Energy Drink website targets young professionals, students, athletes, gamers, and night owls who seek lasting energy, focus, and stamina. It is designed to meet their need for transparency, bold experiences, and a refreshing lifestyle boost.
              </p>
              <div class="ill-audience-list">
                ${project.targetAudience.map(aud => `
                  <div class="ill-audience-item">
                    <strong>${aud.title}:</strong>
                    <span>${aud.desc}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Qualitative Research -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Qualitative Research</h3>
              <div class="ill-qual-list">
                ${project.qualitativeResearch.map(q => `
                  <div class="ill-qual-item">
                    <strong>• ${q.label} –</strong>
                    <span>${q.desc}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Quantitative Research -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Quantitative Research</h3>
              <div class="ill-quant-grid">
                <div class="quant-bar-item">
                  <div class="qb-header"><span>Transparent Ingredients</span><strong>78%</strong></div>
                  <div class="qb-track"><div class="qb-fill" style="width: 78%;"></div></div>
                </div>
                <div class="quant-bar-item">
                  <div class="qb-header"><span>Prefer Clean, Easy Navigation</span><strong>72%</strong></div>
                  <div class="qb-track"><div class="qb-fill" style="width: 72%;"></div></div>
                </div>
                <div class="quant-bar-item">
                  <div class="qb-header"><span>Interest in Premium Modern Brand</span><strong>70%</strong></div>
                  <div class="qb-track"><div class="qb-fill" style="width: 70%;"></div></div>
                </div>
                <div class="quant-bar-item">
                  <div class="qb-header"><span>Authentic Reviews Influence</span><strong>65%</strong></div>
                  <div class="qb-track"><div class="qb-fill" style="width: 65%;"></div></div>
                </div>
                <div class="quant-bar-item">
                  <div class="qb-header"><span>Consume for Work/Study Focus</span><strong>58%</strong></div>
                  <div class="qb-track"><div class="qb-fill" style="width: 58%;"></div></div>
                </div>
              </div>

              <!-- User Interviews -->
              <h3 class="ill-subheading" style="margin-top: 28px;">User Interviews</h3>
              <div class="ill-interviews-grid">
                <div class="interview-col">
                  <h4>General Consumption Habits</h4>
                  <ul>
                    ${project.userInterviews.habits.map(i => `<li><strong>${i.q}</strong> ${i.text}</li>`).join('')}
                  </ul>
                  <h4 style="margin-top: 14px;">Brand Perception & Concerns</h4>
                  <ul>
                    ${project.userInterviews.concerns.map(i => `<li><strong>${i.q}</strong> ${i.text}</li>`).join('')}
                  </ul>
                </div>
                <div class="interview-col">
                  <h4>Digital Experience</h4>
                  <ul>
                    ${project.userInterviews.digital.map(i => `<li><strong>${i.q}</strong> ${i.text}</li>`).join('')}
                  </ul>
                  <h4 style="margin-top: 14px;">Emotional Connection</h4>
                  <ul>
                    ${project.userInterviews.emotional.map(i => `<li><strong>${i.q}</strong> ${i.text}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <!-- Competitive Analysis Table -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Competitive Analysis</h3>
              <div class="ill-table-wrap">
                <table class="ill-comp-table">
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Red Bull ★</th>
                      <th>Monster ★</th>
                      <th>Gatorade ★</th>
                      <th class="col-highlight">Illuminati ★</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${project.competitiveAnalysis.map(row => `
                      <tr>
                        <td><strong>${row.criteria}</strong></td>
                        <td>${row.redBull}</td>
                        <td>${row.monster}</td>
                        <td>${row.gatorade}</td>
                        <td class="col-highlight">${row.illuminati}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </section>

            <!-- 3. 02 Define (Personas, Empathy Map & User Journey) -->
            <section class="cs-section ill-section" id="section-define">
              <div class="section-tag ill-section-tag">02 / DEFINE</div>
              <h2 class="section-heading">02 Define: User Personas, Empathy & Journey Maps</h2>
              <p class="cs-paragraph">
                In this phase, we synthesized research findings to clearly outline the problem statements and user personas. The goal was to define core challenges, prioritize user needs, and establish clear design objectives that would guide the solution. This step ensured that the design process remained focused, user-centered, and aligned with business goals.
              </p>
              <p class="cs-paragraph" style="margin-top: -8px;">
                Research highlighted that users value premium quality, transparency, and lifestyle alignment in energy drinks. Health-conscious professionals and students look for clean ingredients and focus, while fitness enthusiasts seek stamina without crashes. This shaped Illuminati's persona as a user who demands both trust and aspiration from the brand experience.
              </p>

              <!-- Dual Personas Grid (Exact from Figma) -->
              <div class="ill-personas-dual-grid">
                <!-- Persona 1: Karan Sanas -->
                <div class="persona-card ill-persona-card">
                  <div class="persona-profile">
                    <div class="persona-avatar-circle ill-avatar-gamer">KS</div>
                    <div class="persona-details">
                      <h3>${project.personas[0].name}</h3>
                      <span class="persona-role">${project.personas[0].role}</span>
                      <small style="color: #8C91A4;">Location: ${project.personas[0].location} • Age: ${project.personas[0].age}</small>
                    </div>
                  </div>
                  <p class="ill-persona-bio">${project.personas[0].bio}</p>
                  
                  <div class="persona-goals-frustrations">
                    <div class="pf-column">
                      <h4>🎯 Goals</h4>
                      <ul>
                        ${project.personas[0].goals.map(g => `<li>${g}</li>`).join('')}
                      </ul>
                    </div>
                    <div class="pf-column">
                      <h4>⚡ Pain Points</h4>
                      <ul>
                        ${project.personas[0].painPoints.map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  </div>

                  <div class="ill-persona-traits">
                    <strong>Personality Traits:</strong>
                    <ul>
                      ${project.personas[0].traits.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="ill-persona-needs">
                    <strong>Needs from Illuminati Website:</strong>
                    <ul>
                      ${project.personas[0].needs.map(n => `<li>${n}</li>`).join('')}
                    </ul>
                  </div>

                  <!-- Empathy Map for Karan -->
                  <div class="ill-empathy-grid">
                    <div class="emp-box"><strong>Think 🧠</strong><span>${project.personas[0].empathy.think.join(' ')}</span></div>
                    <div class="emp-box"><strong>Feel ❤️</strong><span>${project.personas[0].empathy.feel.join(' ')}</span></div>
                    <div class="emp-box"><strong>Do ✅</strong><span>${project.personas[0].empathy.do.join(' ')}</span></div>
                    <div class="emp-box"><strong>Say 🗣️</strong><span>${project.personas[0].empathy.say.join(' ')}</span></div>
                  </div>
                </div>

                <!-- Persona 2: Ananya Mehta -->
                <div class="persona-card ill-persona-card">
                  <div class="persona-profile">
                    <div class="persona-avatar-circle ill-avatar-fitness">AM</div>
                    <div class="persona-details">
                      <h3>${project.personas[1].name}</h3>
                      <span class="persona-role">${project.personas[1].role}</span>
                      <small style="color: #8C91A4;">Location: ${project.personas[1].location} • Age: ${project.personas[1].age}</small>
                    </div>
                  </div>
                  <p class="ill-persona-bio">${project.personas[1].bio}</p>
                  
                  <div class="persona-goals-frustrations">
                    <div class="pf-column">
                      <h4>🎯 Goals</h4>
                      <ul>
                        ${project.personas[1].goals.map(g => `<li>${g}</li>`).join('')}
                      </ul>
                    </div>
                    <div class="pf-column">
                      <h4>⚡ Pain Points</h4>
                      <ul>
                        ${project.personas[1].painPoints.map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  </div>

                  <div class="ill-persona-traits">
                    <strong>Personality Traits:</strong>
                    <ul>
                      ${project.personas[1].traits.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                  </div>

                  <div class="ill-persona-needs">
                    <strong>Needs from Illuminati Website:</strong>
                    <ul>
                      ${project.personas[1].needs.map(n => `<li>${n}</li>`).join('')}
                    </ul>
                  </div>

                  <!-- Empathy Map for Ananya -->
                  <div class="ill-empathy-grid">
                    <div class="emp-box"><strong>Think 🧠</strong><span>${project.personas[1].empathy.think.join(' ')}</span></div>
                    <div class="emp-box"><strong>Feel ❤️</strong><span>${project.personas[1].empathy.feel.join(' ')}</span></div>
                    <div class="emp-box"><strong>Do ✅</strong><span>${project.personas[1].empathy.do.join(' ')}</span></div>
                    <div class="emp-box"><strong>Say 🗣️</strong><span>${project.personas[1].empathy.say.join(' ')}</span></div>
                  </div>
                </div>
              </div>

              <!-- User Journey Table -->
              <h3 class="ill-subheading" style="margin-top: 28px;">User Journey</h3>
              <p class="cs-paragraph" style="margin-bottom: 16px;">
                The user journey maps the step-by-step experience of our target audience as they interact with the Illuminati website and brand. It highlights their actions, thoughts, and emotions across different stages — from discovering the drink, exploring details, and making a purchase, to finally sharing their experience.
              </p>
              <div class="ill-table-wrap">
                <table class="ill-comp-table">
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Action 🏃</th>
                      <th>Thoughts 💭</th>
                      <th>Feelings 😐/🙂</th>
                      <th>Opportunities 💡</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${project.userJourney.map(row => `
                      <tr>
                        <td><strong>${row.stage}</strong></td>
                        <td>${row.action}</td>
                        <td>${row.thoughts}</td>
                        <td>${row.feelings}</td>
                        <td>${row.opportunities}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </section>

            <!-- 4. 03 Ideate (User Flow, Storyboarding & IA) -->
            <section class="cs-section ill-section" id="section-ideate">
              <div class="section-tag ill-section-tag">03 / IDEATE</div>
              <h2 class="section-heading">03 Ideate: User Flow, Story Boarding & Information Architecture</h2>
              <p class="cs-paragraph">
                In this phase, we brainstormed creative solutions to address the problems and needs identified earlier. Using techniques like sketching, mind mapping, and brainstorming workshops, we generated multiple ideas for layouts, features, and content flow. The focus was on creating engaging designs that highlight transparency, bold visuals, and smooth navigation, ensuring the website resonates with users while aligning with the Illuminati brand identity.
              </p>

              <!-- User Flow -->
              <h3 class="ill-subheading">User Flow</h3>
              <p class="cs-paragraph" style="margin-bottom: 16px;">
                The user flow illustrates the step-by-step path users take while interacting with the Illuminati website. It maps how visitors navigate from the homepage to key sections like About Us, Ingredients, Flavours, Reviews, and Contact Us, ultimately guiding them toward engagement or purchase.
              </p>
              <div class="ill-user-flow-diagram">
                <span class="uf-node entry">Entry Point</span>
                <span class="uf-arrow">↓</span>
                <span class="uf-node home">Homepage</span>
                <span class="uf-arrow">↓</span>
                <span class="uf-node action">Menu / Navigation Action</span>
                <div class="uf-branches">
                  <div class="uf-branch-card"><strong>About Us</strong><span>Learn brand story</span></div>
                  <div class="uf-branch-card"><strong>Ingredients</strong><span>Explore transparency</span></div>
                  <div class="uf-branch-card"><strong>Flavours</strong><span>View options & select</span></div>
                  <div class="uf-branch-card"><strong>Reviews</strong><span>Read authentic reviews</span></div>
                  <div class="uf-branch-card"><strong>Contact Us</strong><span>Reach out / inquire</span></div>
                </div>
              </div>

              <!-- Story Boarding -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Story Boarding</h3>
              <p class="cs-paragraph" style="margin-bottom: 16px;">
                The storyboard visually captures the user's journey with the Illuminati website, illustrating key moments, thoughts, and emotions at each stage:
              </p>
              <div class="ill-storyboard-grid">
                ${project.storyboardPanels.map(p => `
                  <div class="ill-story-panel">
                    <span class="panel-num">Panel ${p.num}</span>
                    <p>${p.text}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Information Architecture -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Information Architecture</h3>
              <p class="cs-paragraph" style="margin-bottom: 16px;">
                The information architecture defines the structure and hierarchy of the Illuminati website, organizing content into clear and intuitive sections:
              </p>
              <div class="ill-ia-grid">
                ${project.informationArchitecture.map(sec => `
                  <div class="ia-card">
                    <h4>${sec.section}</h4>
                    <ul>
                      ${sec.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 5. 04 Design (Style Guide, Logo, Typography, Colors, Components, Wireframes & Visual Design) -->
            <section class="cs-section ill-section" id="section-design">
              <div class="section-tag ill-section-tag">04 / DESIGN</div>
              <h2 class="section-heading">04 Design: Style Guide, Wireframes & Visual Design</h2>
              <p class="cs-paragraph">
                In this phase, we transformed our ideas into tangible design solutions. Low-fidelity wireframes were created to establish structure and layout, followed by high-fidelity mockups that brought the Illuminati brand identity to life. We focused on a clean and modern interface with bold visuals, intuitive navigation, and engaging interactions. Typography, color palettes, and imagery were carefully chosen to reflect transparency, energy, and trust.
              </p>

              <!-- Style Guide & Logo -->
              <h3 class="ill-subheading">Style Guide & Logo Design</h3>
              <p class="cs-paragraph">
                ${project.logoDetails.about}
              </p>

              <!-- Logo Information Specs -->
              <div class="ill-logo-specs-grid">
                <div class="logo-spec-card">
                  <span class="spec-label">Primary Shape</span>
                  <p>${project.logoDetails.primaryShape}</p>
                </div>
                <div class="logo-spec-card">
                  <span class="spec-label">Color Palette</span>
                  <p>${project.logoDetails.colorPalette}</p>
                </div>
                <div class="logo-spec-card">
                  <span class="spec-label">Style</span>
                  <p>${project.logoDetails.style}</p>
                </div>
                <div class="logo-spec-card">
                  <span class="spec-label">Usage</span>
                  <p>${project.logoDetails.usage}</p>
                </div>
              </div>

              <!-- How to Create this Logo -->
              <h4 style="font-size: 0.95rem; font-weight: 800; color: #E0E600; margin: 18px 0 10px;">How to Create this Logo:</h4>
              <ul class="ill-bullet-list">
                ${project.logoDetails.creationSteps.map(step => `<li>${step}</li>`).join('')}
              </ul>

              <!-- Typography: Nunito Sans -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Typography: Nunito Sans</h3>
              <p class="cs-paragraph" style="margin-bottom: 12px;">
                ${project.typography.desc}
              </p>
              <div class="ill-typo-preview-box">
                <span class="typo-big-aa">Aa</span>
                <div class="typo-scales">
                  <span style="font-weight: 300;">Nunito Sans Light • Aa Bb Cc Dd Ee Ff Gg 1 2 3</span>
                  <span style="font-weight: 400;">Nunito Sans Regular • Aa Bb Cc Dd Ee Ff Gg 1 2 3</span>
                  <span style="font-weight: 600;">Nunito Sans SemiBold • Aa Bb Cc Dd Ee Ff Gg 1 2 3</span>
                  <span style="font-weight: 800;">Nunito Sans Bold • Aa Bb Cc Dd Ee Ff Gg 1 2 3</span>
                </div>
              </div>

              <!-- Color Palette -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Color Palette</h3>
              <div class="ill-token-palette-grid">
                ${project.colors.map(c => `
                  <div class="ill-palette-item">
                    <div class="palette-swatch" style="background: ${c.hex}; ${c.hex === '#000000' ? 'border: 1px solid #333;' : ''}"></div>
                    <div class="palette-info">
                      <strong>${c.hex}</strong>
                      <span>${c.name}</span>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Component: Dark Matter -->
              <h3 class="ill-subheading" style="margin-top: 28px;">Components: Dark Matter & Customer Reviews</h3>
              <div class="ill-darkmatter-callout">
                <span class="dm-tag">COMPONENT: FLAVOR CARD</span>
                <h4>Dark Matter</h4>
                <p>${project.componentDarkMatter}</p>
              </div>

              <!-- Customer Testimonials -->
              <div class="ill-feedback-dual-grid" style="margin-top: 18px;">
                ${project.customerTestimonials.map(t => `
                  <div class="ill-feedback-card">
                    <div class="feedback-badge">★★★★★ CUSTOMER REVIEW</div>
                    <strong style="color: #E0E600; display: block; margin-bottom: 6px;">"${t.title}"</strong>
                    <p class="feedback-quote">"${t.quote}"</p>
                    <div class="feedback-author">
                      <strong>${t.author}</strong>
                      <span>Verified Consumer</span>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Wireframe & Visual Design Screens -->
              <h3 class="ill-subheading" style="margin-top: 32px;">Wireframes & Visual Design Screens</h3>
              <p class="cs-paragraph">
                The wireframe serves as the blueprint of the Illuminati website, mapping the layout, structure, and flow of content before visual design is applied. The visual design brings the Illuminati website to life by applying the brand's colors, typography, imagery, and iconography to wireframes.
              </p>

              <!-- Interactive Screen Tabs Selector (6 Screens from Figma) -->
              <div class="screens-tabs-container ill-screen-tabs-container">
                <div class="screens-nav-tabs ill-nav-tabs" id="screensNavTabs">
                  ${project.screens.map((screen, index) => `
                    <button class="screen-tab-btn ill-tab-btn ${index === 0 ? 'active' : ''}" data-screen-index="${index}">
                      ${screen.title}
                    </button>
                  `).join('')}
                </div>

                <div class="screen-display-wrapper ill-screen-wrapper" id="screenDisplayWrapper">
                  <div class="screen-info-bar ill-screen-info">
                    <h3 id="currentScreenTitle">${project.screens[0].title}</h3>
                    <p id="currentScreenDesc">${project.screens[0].description}</p>
                  </div>
                  <div class="screen-canvas ill-screen-canvas" id="screenCanvas">
                    ${MOCKUP_RENDERER.renderCardMockup(project.id)}
                  </div>
                </div>
              </div>
            </section>

            <!-- 6. 05 Test (Prototype, Stakeholder Feedback & Conclusion) -->
            <section class="cs-section ill-section" id="section-test">
              <div class="section-tag ill-section-tag">05 / TEST</div>
              <h2 class="section-heading">05 Test: Prototype, Feedback & Conclusion</h2>
              <p class="cs-paragraph">
                The prototype transforms the Illuminati website concepts into an interactive model, allowing users and stakeholders to experience the flow, navigation, and functionality in real-time. It bridges the gap between design and development by showcasing how pages, components, and animations work together. By simulating the final product, it helps validate ideas, gather feedback, and refine the experience before full implementation.
              </p>

              <!-- Client Feedback Card (Exact from Figma) -->
              <div class="ill-feedback-card" style="margin: 20px 0; border-color: rgba(224, 230, 0, 0.3);">
                <div class="feedback-badge">🏆 CLIENT FEEDBACK</div>
                <blockquote class="feedback-quote" style="font-size: 0.96rem; line-height: 1.7;">
                  "${project.clientFeedback}"
                </blockquote>
              </div>

              <!-- Development Team Feedback Card (Exact from Figma) -->
              <div class="ill-feedback-card" style="margin: 20px 0; border-color: rgba(75, 178, 0, 0.3);">
                <div class="feedback-badge" style="color: #4BB200;">💻 DEVELOPMENT TEAM FEEDBACK</div>
                <blockquote class="feedback-quote" style="font-size: 0.96rem; line-height: 1.7;">
                  "${project.devFeedback}"
                </blockquote>
              </div>

              <!-- Thank You Conclusion Banner -->
              <div class="ill-conclusion-banner">
                <h3>THANK YOU FOR SCROLLING</h3>
              </div>
            </section>

            <!-- 7. Live Figma Prototype & Full Infographic Board -->
            <section class="cs-section ill-section" id="section-prototype">
              <div class="section-tag ill-section-tag">LIVE ARTIFACTS</div>
              <h2 class="section-heading">Interactive Figma Prototype & Full 11,003px Board</h2>
              <p class="cs-paragraph">
                Explore the interactive prototype in Figma or view the complete uncompressed 1440 × 24,757px Ultra HD design presentation board in the lightbox viewer.
              </p>

              <div class="ill-live-artifacts-box">
                <div class="artifact-card-action">
                  <div class="artifact-icon">❖</div>
                  <div class="artifact-details">
                    <h4>Interactive Figma Prototype</h4>
                    <p>Experience the 3D can interactions, navigation flow, flavours, and responsive screens directly in Figma.</p>
                  </div>
                  <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch">
                    <span>Open in Figma</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Case Study Infographic (1440 × 24,757px Ultra HD)</h4>
                    <p>Inspect the complete end-to-end design presentation, user research, personas, style guide, and screens in crystal-clear detail.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="illuminati-case-study-full.png" data-title="Illuminati Energy Drink - Full Infographic Board (Ultra HD)">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav ill-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">Previous</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">Next</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  // Dedicated Authentic Case Study Renderer for CareConnect Healthcare (Exact Figma data & images only)
  renderCareConnectCaseStudy(project) {
    return `
      <div class="case-study-screen careconnect-case-study animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar cc-cs-top-bar">
          <button class="btn-back-to-work cc-back-btn" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb cc-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-actions">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-badge cc-figma-badge" title="Open Interactive Prototype in Figma">
              <span class="figma-dot">❖</span> Figma Prototype ↗
            </a>
            <button class="btn-lightbox-pill cc-lightbox-pill btn-open-lightbox-trigger" data-img="careconnect-case-study-full.png" data-title="CareConnect Healthcare - Full Case Study Infographic (10,260px)">
              <span>Full Board (10,260px)</span> 🔍
            </button>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header cc-hero-header">
          <div class="cc-badge-group">
            <span class="cs-badge-pill cc-pill">🩺 CX & UX CASE STUDY</span>
            <span class="cc-tag-live">● SMART HEALTHCARE APP FOR MODERN CARE</span>
            <span class="cc-tag-proto">❖ FIGMA PROTOTYPE (NODE: 6137-3431)</span>
          </div>
          <h1 class="cs-title cc-main-title">${project.title}</h1>
          <p class="cs-tagline cc-tagline-text">${project.tagline}</p>
          <p class="cc-subtitle-lead">A seamless platform to discover doctors, book appointments, consult online, and access healthcare services — anytime, anywhere.</p>

          <!-- Quick Action Launch Strip -->
          <div class="cc-cta-strip">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-healthcare">
              <span class="btn-glow-icon">❖</span>
              <span>Launch Live Figma Prototype</span>
              <span class="btn-arrow">↗</span>
            </a>
            <button class="btn-secondary-healthcare btn-open-lightbox-trigger" data-img="careconnect-case-study-full.png" data-title="CareConnect Healthcare - Full Infographic Board (1440 × 23,085px Ultra HD)">
              <span>Explore Full Infographic Board (Ultra HD)</span>
              <span class="btn-search-icon">🔍</span>
            </button>
          </div>

          <!-- Key Metadata Grid (Exact from Figma) -->
          <div class="cs-meta-grid cc-meta-grid">
            <div class="meta-item">
              <span class="meta-label">ROLE & DESIGNER</span>
              <strong class="meta-value">${project.role}</strong>
              <small style="color: #64748B; font-size: 0.72rem; margin-top: 4px;">Vitthal Kolpe (6 Years Experience)</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORM & TIMELINE</span>
              <strong class="meta-value">Android & iOS (Mobile First)</strong>
              <small style="color: #64748B; font-size: 0.72rem; margin-top: 4px;">4 Months Duration</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">TEAM COMPOSITION</span>
              <strong class="meta-value">Cross-Functional Team</strong>
              <small style="color: #64748B; font-size: 0.72rem; margin-top: 4px;">PM, 2 Designers, 5 Devs, QA, BA</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">TOOLS & AI STACK</span>
              <strong class="meta-value">Figma & Generative AI Suite</strong>
              <small style="color: #64748B; font-size: 0.72rem; margin-top: 4px;">Lovable • Claude AI • ChatGPT • Gemini AI</small>
            </div>
          </div>
        </div>

        <!-- Quantitative Research Highlights Strip (Exact from Figma) -->
        <div class="cs-stats-strip cc-stats-strip">
          <div class="stat-card cc-stat-card">
            <div class="stat-number cc-stat-num">73%</div>
            <div class="stat-meta">
              <span class="stat-label">CLINIC WAIT TIMES</span>
              <p class="stat-desc">Experienced frustration with unpredictable clinic waiting times exceeding 45 minutes.</p>
            </div>
          </div>
          <div class="stat-card cc-stat-card">
            <div class="stat-number cc-stat-num">68%</div>
            <div class="stat-meta">
              <span class="stat-label">PREFER VIDEO CONSULT</span>
              <p class="stat-desc">Preferred video consultations for routine follow-ups and minor health queries.</p>
            </div>
          </div>
          <div class="stat-card cc-stat-card">
            <div class="stat-number cc-stat-num">81%</div>
            <div class="stat-meta">
              <span class="stat-label">DOCTOR RATINGS</span>
              <p class="stat-desc">Considered doctor ratings and patient reviews the #1 factor in choosing a specialist.</p>
            </div>
          </div>
          <div class="stat-card cc-stat-card">
            <div class="stat-number cc-stat-num">64%</div>
            <div class="stat-meta">
              <span class="stat-label">MISPLACED REPORTS</span>
              <p class="stat-desc">Had lost or misplaced physical medical reports when visiting a new doctor.</p>
            </div>
          </div>
        </div>

        <!-- In-Depth Case Study Layout with Sticky TOC -->
        <div class="cs-body-layout cc-body-layout">
          <!-- Sticky Table of Contents -->
          <aside class="cs-toc-sidebar cc-toc-sidebar">
            <div class="toc-sticky-box cc-toc-box">
              <span class="toc-title cc-toc-title">CASE STUDY SECTIONS</span>
              <ul class="toc-list cc-toc-list">
                <li><a href="#cc-section-overview" class="toc-link active">1. Overview & 3 Priorities</a></li>
                <li><a href="#cc-section-research" class="toc-link">2. Research & 2 Personas</a></li>
                <li><a href="#cc-section-flow" class="toc-link">3. Architecture & User Flow</a></li>
                <li><a href="#cc-section-system" class="toc-link">4. Design System & Principles</a></li>
                <li><a href="#cc-section-testing" class="toc-link">5. Usability Testing & CX</a></li>
                <li><a href="#cc-section-screens" class="toc-link">6. Screens & Key Learnings</a></li>
                <li><a href="#cc-section-prototype" class="toc-link">7. Prototype & Full Board</a></li>
              </ul>

              <!-- Mini Prototype Sidebar Card -->
              <div class="toc-prototype-card cc-sidebar-proto-card">
                <span class="proto-mini-tag">LIVE PROTOTYPE</span>
                <p>Test the interactive mobile appointment booking, video consultation, and digital health vault directly in Figma.</p>
                <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-sidebar-proto">Open in Figma ↗</a>
              </div>
            </div>
          </aside>

          <!-- Main Case Study Content Area -->
          <main class="cs-main-content cc-main-content">
            <!-- 1. Overview, 3 Priorities & Problem Statement -->
            <section class="cs-section cc-section" id="cc-section-overview">
              <div class="section-tag cc-section-tag">PROJECT FOUNDATION</div>
              <h2 class="section-heading">Project Overview</h2>
              <p class="cs-paragraph">
                ${project.summary}
              </p>

              <!-- 3 Core Project Priorities -->
              <h3 class="cc-subheading">🎯 3 Core Project Priorities</h3>
              <div class="cc-priorities-grid">
                ${project.priorities.map(p => `
                  <div class="cc-priority-card">
                    <span class="cc-priority-num">${p.num}</span>
                    <h4 class="cc-priority-title">${p.title}</h4>
                    <p class="cc-priority-desc">${p.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Problem Statement Callout Box -->
              <div class="problem-callout-box cc-problem-box" style="margin-top: 24px;">
                <div class="callout-icon">⚠️</div>
                <div class="callout-content">
                  <h4>The Problem</h4>
                  <p>${project.problemStatement}</p>
                </div>
              </div>

              <!-- CX & Business Goals Comparison Table -->
              <h3 class="cc-subheading" style="margin-top: 32px;">📊 CX & Business Goals Comparison</h3>
              <div class="cc-table-wrapper">
                <table class="cc-goals-table">
                  <thead>
                    <tr>
                      <th>The Problem</th>
                      <th>User Expectation</th>
                      <th>CareConnect Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${project.cxGoalsTable.map(row => `
                      <tr>
                        <td class="cc-cell-problem">${row.problem}</td>
                        <td class="cc-cell-expect">${row.expectation}</td>
                        <td class="cc-cell-sol">${row.solution}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <!-- 4 CX Objectives -->
              <h3 class="cc-subheading" style="margin-top: 28px;">🎯 4 CX Objectives</h3>
              <div class="cc-objectives-grid">
                ${project.cxObjectives.map(obj => `
                  <div class="cc-objective-card">
                    <h4>${obj.title}</h4>
                    <p>${obj.desc}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 2. Research & 2 Personas -->
            <section class="cs-section cc-section" id="cc-section-research">
              <div class="section-tag cc-section-tag">DISCOVERY & RESEARCH</div>
              <h2 class="section-heading">Research & Discovery Streams</h2>
              
              <!-- 4 Research Streams -->
              <div class="cc-streams-grid">
                ${project.researchStreams.map(stream => `
                  <div class="cc-stream-card">
                    <h4>${stream.title}</h4>
                    <p>${stream.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- 2 User Personas (Exact from Figma) -->
              <h3 class="cc-subheading" style="margin-top: 36px;">👥 User Personas</h3>
              <div class="cc-personas-container">
                ${project.personas.map(persona => `
                  <div class="cc-persona-card">
                    <div class="cc-persona-header">
                      <div class="cc-persona-avatar">👤</div>
                      <div class="cc-persona-meta">
                        <h4>${persona.name}</h4>
                        <span class="cc-persona-tagline">${persona.tagline}</span>
                        <div class="cc-persona-pills">
                          <span>Age ${persona.age}</span>
                          <span>${persona.location}</span>
                          <span>${persona.occupation}</span>
                        </div>
                      </div>
                    </div>
                    <blockquote class="cc-persona-quote">"${persona.quote}"</blockquote>
                    <p class="cc-persona-bio">${persona.bio}</p>
                    <div class="cc-persona-cols">
                      <div class="cc-persona-col">
                        <span class="cc-col-title">PAIN POINTS</span>
                        <ul>
                          ${persona.painPoints.map(pt => `<li>${pt}</li>`).join('')}
                        </ul>
                      </div>
                      <div class="cc-persona-col">
                        <span class="cc-col-title">NEEDS & GOALS</span>
                        <ul>
                          ${persona.needs.map(nd => `<li>${nd}</li>`).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Customer Journey Map (5 Stages) -->
              <h3 class="cc-subheading" style="margin-top: 36px;">🗺️ Customer Journey Map (5 Core Stages)</h3>
              <div class="cc-journey-grid">
                ${project.customerJourneyStages.map((stage, idx) => `
                  <div class="cc-journey-step">
                    <div class="cc-journey-num">0${idx + 1}</div>
                    <h4>${stage.stage}</h4>
                    <p>${stage.desc}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 3. Information Architecture, Flow & Video Consultation -->
            <section class="cs-section cc-section" id="cc-section-flow">
              <div class="section-tag cc-section-tag">ARCHITECTURE & WORKFLOWS</div>
              <h2 class="section-heading">Integrated Video Consultation & Architecture</h2>

              <!-- Integrated Video Consultation 5 Steps -->
              <div class="cc-video-box">
                <div class="cc-video-badge">KEY DIFFERENTIATING FEATURE</div>
                <h3>Integrated Mobile Video Consultation</h3>
                <p>A connected teleconsultation ecosystem bridging appointment scheduling, pre-consult triage, encrypted HD video, and instant digital prescription fulfillment.</p>
                <div class="cc-video-steps">
                  ${project.videoConsultSteps.map(step => `
                    <div class="cc-video-step-item">
                      <span class="cc-step-num">${step.step}</span>
                      <div class="cc-step-content">
                        <strong>${step.title}</strong>
                        <p>${step.desc}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Information Architecture (8 Modules) -->
              <h3 class="cc-subheading" style="margin-top: 36px;">🏗️ Information Architecture (8 Core Modules)</h3>
              <div class="cc-ia-grid">
                ${project.informationArchitecture.map((mod, idx) => `
                  <div class="cc-ia-card">
                    <span class="cc-ia-badge">MODULE 0${idx + 1}</span>
                    <h4>${mod.module}</h4>
                    <p>${mod.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- How It Works (4 Core Steps) -->
              <h3 class="cc-subheading" style="margin-top: 36px;">⚡ How It Works (4 Seamless Steps)</h3>
              <div class="cc-how-grid">
                <div class="cc-how-card">
                  <div class="cc-how-num">1</div>
                  <h4>Search & Filter</h4>
                  <p>Find specialists by condition, location, or ratings in seconds.</p>
                </div>
                <div class="cc-how-card">
                  <div class="cc-how-num">2</div>
                  <h4>Book Instantly</h4>
                  <p>Choose clinic visit or video consultation at your preferred time.</p>
                </div>
                <div class="cc-how-card">
                  <div class="cc-how-num">3</div>
                  <h4>Consult Seamlessly</h4>
                  <p>Meet your doctor in-clinic or through encrypted HD video.</p>
                </div>
                <div class="cc-how-card">
                  <div class="cc-how-num">4</div>
                  <h4>Manage Care</h4>
                  <p>Access prescriptions, book follow-ups, and order medicines in 1 tap.</p>
                </div>
              </div>
            </section>

            <!-- 4. Design System, Principles & Service Blueprint -->
            <section class="cs-section cc-section" id="cc-section-system">
              <div class="section-tag cc-section-tag">SYSTEM & PRINCIPLES</div>
              <h2 class="section-heading">Strategic UX Pillars & Design Principles</h2>

              <!-- Why It Matters (5 Strategic UX Pillars) -->
              <h3 class="cc-subheading">💡 Why It Matters (5 Strategic UX Pillars)</h3>
              <div class="cc-pillars-grid">
                ${project.whyItMatters.map(pil => `
                  <div class="cc-pillar-card">
                    <h4>${pil.title}</h4>
                    <p>${pil.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- UX Audit Prioritization Matrix -->
              <h3 class="cc-subheading" style="margin-top: 36px;">⚖️ UX Audit Prioritization Matrix</h3>
              <div class="cc-matrix-grid">
                ${project.uxAuditPrioritization.map(mat => `
                  <div class="cc-matrix-card">
                    <span class="cc-matrix-level">${mat.level}</span>
                    <p class="cc-matrix-items">${mat.items}</p>
                  </div>
                `).join('')}
              </div>

              <!-- 6 Core Design Principles -->
              <h3 class="cc-subheading" style="margin-top: 36px;">📐 6 Core Design Principles</h3>
              <div class="cc-principles-grid">
                ${project.designPrinciples.map((prin, idx) => `
                  <div class="cc-principle-card">
                    <div class="cc-principle-num">0${idx + 1}</div>
                    <h4>${prin.title}</h4>
                    <p>${prin.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Service Blueprint Table -->
              <h3 class="cc-subheading" style="margin-top: 36px;">🗺️ Service Blueprint Architecture</h3>
              <div class="cc-blueprint-box">
                <div class="cc-bp-row">
                  <span class="cc-bp-layer">FRONTSTAGE (PATIENT)</span>
                  <p>${project.serviceBlueprint.frontstage}</p>
                </div>
                <div class="cc-bp-row">
                  <span class="cc-bp-layer">BACKSTAGE (DOCTOR/CLINIC)</span>
                  <p>${project.serviceBlueprint.backstage}</p>
                </div>
                <div class="cc-bp-row">
                  <span class="cc-bp-layer">SUPPORT (SYSTEM/INFRA)</span>
                  <p>${project.serviceBlueprint.support}</p>
                </div>
              </div>

              <!-- Color Palette Tokens -->
              <h3 class="cc-subheading" style="margin-top: 36px;">🎨 Healthcare Color System</h3>
              <div class="cc-palette-grid">
                ${project.colorPalette.map(c => `
                  <div class="cc-color-chip">
                    <div class="cc-color-preview" style="background: ${c.hex};"></div>
                    <div class="cc-color-info">
                      <strong>${c.name}</strong>
                      <code>${c.hex}</code>
                      <small>${c.role}</small>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 5. Usability Testing & CX Measurement Framework -->
            <section class="cs-section cc-section" id="cc-section-testing">
              <div class="section-tag cc-section-tag">TESTING & VALIDATION</div>
              <h2 class="section-heading">Usability Testing & CX Framework</h2>
              <p class="cs-paragraph">
                Conducted 12 moderated usability testing sessions (6 in-person, 6 remote via Figma prototype) with target patient profiles across young working professionals and primary family caregivers.
              </p>

              <!-- Usability Tasks Grid -->
              <div class="cc-tasks-grid">
                ${project.usabilityTestingTasks.map(t => `
                  <div class="cc-task-card">
                    <div class="cc-task-top">
                      <span class="cc-task-completion">${t.completion} Success</span>
                      <span class="cc-task-time">⏱ ${t.time}</span>
                    </div>
                    <h4>${t.task}</h4>
                    <p class="cc-task-feedback"><strong>User Feedback:</strong> ${t.feedback}</p>
                  </div>
                `).join('')}
              </div>

              <!-- CX Measurement Framework -->
              <h3 class="cc-subheading" style="margin-top: 36px;">📈 CX Measurement Framework</h3>
              <div class="cc-framework-grid">
                ${project.cxFramework.map(f => `
                  <div class="cc-fw-card">
                    <span class="cc-fw-label">${f.metric}</span>
                    <strong class="cc-fw-value">${f.value}</strong>
                    <span class="cc-fw-grade">${f.grade}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Expected Business & CX Impact -->
              <h3 class="cc-subheading" style="margin-top: 36px;">🚀 Expected Business & CX Impact</h3>
              <div class="cc-impact-grid">
                ${project.expectedImpact.map(imp => `
                  <div class="cc-impact-card">
                    <span class="cc-impact-metric">${imp.metric}</span>
                    <strong class="cc-impact-result">${imp.result}</strong>
                    <p>${imp.desc}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 6. Visual Design Screens & Key Learnings -->
            <section class="cs-section cc-section" id="cc-section-screens">
              <div class="section-tag cc-section-tag">UI SHOWCASE & RETROSPECTIVE</div>
              <h2 class="section-heading">Key UX Learnings & UI Screens</h2>

              <!-- 4 Key UX Learnings -->
              <div class="cc-learnings-grid">
                ${project.keyLearnings.map((learn, idx) => `
                  <div class="cc-learning-card">
                    <div class="cc-learning-num">0${idx + 1}</div>
                    <p>${learn}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Central CX Opportunity Callout -->
              <div class="problem-callout-box cc-opportunity-box" style="margin-top: 28px;">
                <div class="callout-icon">💡</div>
                <div class="callout-content">
                  <h4>The Central CX Opportunity</h4>
                  <p>In healthcare, the consultation is not the finish line — it is the bridge to sustained care continuity. By deeply integrating teleconsultation, digital health records, and prescription management under a single cohesive experience, CareConnect establishes enduring patient-doctor trust.</p>
                </div>
              </div>
            </section>

            <!-- 7. Prototype & Full Infographic Board Launch -->
            <section class="cs-section cc-section" id="cc-section-prototype">
              <div class="section-tag cc-section-tag">LIVE ARTIFACTS</div>
              <h2 class="section-heading">Interactive Prototype & Full Board</h2>
              <p class="cs-paragraph">
                Access the complete high-fidelity Figma prototype and uncompressed 10,260px case study board directly.
              </p>

              <div class="artifacts-launch-grid cc-artifacts-grid">
                <div class="artifact-card-action">
                  <div class="artifact-icon">❖</div>
                  <div class="artifact-details">
                    <h4>Interactive Figma Prototype</h4>
                    <p>Experience the mobile workflow: doctor search, live slot booking, video call preview, and health records.</p>
                  </div>
                  <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch">
                    <span>Open in Figma</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Case Study Infographic (1440 × 23,085px Ultra HD)</h4>
                    <p>Inspect the master end-to-end design presentation, research streams, personas, service blueprint, and UI screens in crystal-clear detail.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="careconnect-case-study-full.png" data-title="CareConnect Healthcare - Full Infographic Board (Ultra HD)">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav cc-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">Previous</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">Next</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  // Dedicated Authentic Case Study Renderer for Globi Call Mobile App (Exact Figma data & images only)
  renderGlobiCallCaseStudy(project) {
    return `
      <div class="case-study-screen globicall-case-study animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar gc-cs-top-bar">
          <button class="btn-back-to-work gc-back-btn" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb gc-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-actions">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-badge gc-figma-badge" title="Open Interactive Prototype in Figma">
              <span class="figma-dot">❖</span> Figma Prototype ↗
            </a>
            <button class="btn-lightbox-pill gc-lightbox-pill btn-open-lightbox-trigger" data-img="globicall-case-study-full.png" data-title="Globi Call - Full Case Study Infographic (8,955px)">
              <span>Full Board (8,955px)</span> 🔍
            </button>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header gc-hero-header">
          <div class="gc-badge-group">
            <span class="cs-badge-pill gc-pill">📞 UX CASE STUDY</span>
            <span class="gc-tag-live">● A SMART CALLING APP REDEFINING COMMUNICATION</span>
          </div>

          <h1 class="cs-title gc-title">${project.fullTitle}</h1>
          <p class="cs-tagline gc-tagline">
            Globicall is a smart calling app that lets you make calls from any number to any number with a seamless and crystal-clear calling experience. It offers precise call history, effortless contact management, and easy account customization. With a secure wallet system, recharging becomes quick and hassle-free, making communication more reliable and convenient than ever.
          </p>

          <!-- Key Project Metadata Grid -->
          <div class="cs-meta-grid gc-meta-grid">
            <div class="meta-item">
              <span class="meta-label">ROLE</span>
              <strong class="meta-value">${project.role}</strong>
              <span class="meta-sub">Strategies, User Research & Visual Design</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORM</span>
              <strong class="meta-value">${project.platform}</strong>
              <span class="meta-sub">Android & iOS Mobile Experience</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">TOOLS USED</span>
              <strong class="meta-value">Figma, Ai, Ps</strong>
              <span class="meta-sub">Figma, Illustrator, Photoshop, User Testing</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">DURATION & TEAM</span>
              <strong class="meta-value">3 Months • 4 Members</strong>
              <span class="meta-sub">Lead UX, 2 Mobile Devs, VoIP Engineer</span>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="gc-cta-strip">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-globi">
              <span class="btn-glow-icon">❖</span>
              <span>Launch Live Prototype</span>
              <span class="btn-arrow">↗</span>
            </a>
            <button class="btn-secondary-globi btn-open-lightbox-trigger" data-img="globicall-case-study-full.png" data-title="Globi Call Mobile App - Full Infographic Board (640 × 8,955px Ultra HD)">
              <span class="btn-search-icon">🔍</span>
              <span>Inspect Full Infographic Board</span>
            </button>
          </div>
        </div>

        <!-- In-Depth Case Study Layout with Sticky TOC -->
        <div class="cs-body-layout gc-body-layout">
          <!-- Sticky Table of Contents -->
          <aside class="cs-toc-sidebar gc-toc-sidebar">
            <div class="toc-sticky-box gc-toc-box">
              <span class="toc-title gc-toc-title">CASE STUDY SECTIONS</span>
              <ul class="toc-list gc-toc-list">
                <li><a href="#gc-section-overview" class="toc-link active">1. Overview & UX Goals</a></li>
                <li><a href="#gc-section-research" class="toc-link">2. Process & Research</a></li>
                <li><a href="#gc-section-define" class="toc-link">3. 02 Define & Personas</a></li>
                <li><a href="#gc-section-flow" class="toc-link">4. 03 Ideate, Flow & IA</a></li>
                <li><a href="#gc-section-system" class="toc-link">5. 04 Design & System</a></li>
                <li><a href="#gc-section-screens" class="toc-link">6. UI Screens Showcase</a></li>
                <li><a href="#gc-section-prototype" class="toc-link">7. Prototype & Board</a></li>
              </ul>

              <!-- Sticky Prototype CTA Card in Sidebar -->
              <div class="toc-prototype-card gc-sidebar-proto-card">
                <span class="proto-mini-tag">LIVE PROTOTYPE</span>
                <p>Test the interactive mobile dialer, contact manager, wallet recharge, and call settings directly in Figma.</p>
                <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-sidebar-proto">Open in Figma ↗</a>
              </div>
            </div>
          </aside>

          <!-- Main In-Depth Content Stream -->
          <main class="cs-main-content gc-main-content">
            <!-- 1. Overview & UX Goals -->
            <section class="cs-section gc-section" id="gc-section-overview">
              <div class="section-tag gc-section-tag">01 • OVERVIEW & GOALS</div>
              <h2 class="section-heading">Project Overview & Core UX Goals</h2>
              <p class="cs-paragraph">
                Globicall is a smart and user-friendly mobile application designed to redefine the calling experience. It allows users to make calls from any number to any number with complete flexibility, while ensuring a seamless and crystal-clear calling experience. With a detailed and precise call history, users can easily track and manage their communication.
              </p>
              <p class="cs-paragraph">
                The app makes contact management effortless, enabling quick creation, editing, and access to all contacts. Users can also customize their accounts with ease, ensuring a personalized experience. Additionally, Globicall offers a simple and secure wallet system where recharging is fast and hassle-free. Built with modern design and smooth navigation, Globicall combines functionality, convenience, and reliability into one powerful calling solution.
              </p>

              <!-- UX Goals Grid (5 Core Pillars from Design) -->
              <div class="gc-goals-grid">
                <div class="gc-goal-card">
                  <div class="gc-goal-num">01</div>
                  <h4>Deliver a Seamless Calling Experience</h4>
                  <p>Ensure crystal-clear, lag-free calls that build trust and reliability in communication.</p>
                </div>
                <div class="gc-goal-card">
                  <div class="gc-goal-num">02</div>
                  <h4>Simplify Navigation & Usage</h4>
                  <p>Design an intuitive interface that helps users access features quickly without confusion.</p>
                </div>
                <div class="gc-goal-card">
                  <div class="gc-goal-num">03</div>
                  <h4>Enhance Contact & Call Management</h4>
                  <p>Provide precise call history and effortless tools to create, edit, and organize contacts.</p>
                </div>
                <div class="gc-goal-card">
                  <div class="gc-goal-num">04</div>
                  <h4>Ensure Security & Trust</h4>
                  <p>Protect user data with strong privacy controls and smart fraud protection measures.</p>
                </div>
                <div class="gc-goal-card">
                  <div class="gc-goal-num">05</div>
                  <h4>Enable Hassle-Free Wallet Recharge</h4>
                  <p>Offer a simple, secure, and quick wallet recharge process for uninterrupted usage.</p>
                </div>
              </div>

              <!-- Problem Statement & Problem Solutions Side-by-Side -->
              <div class="gc-problem-solution-grid">
                <div class="gc-problem-card">
                  <div class="gc-card-tag problem">PROBLEM STATEMENT</div>
                  <h3>Challenges in Modern Calling</h3>
                  <p>In today's digital world, people face increasing challenges with unknown calls, spam, and fraudulent activities that disrupt communication and compromise privacy. Existing caller identification apps often feel cluttered with ads, complex navigation, and limited personalization, leaving users frustrated. Additionally, managing contacts, tracking call history, and handling wallet recharges are not always smooth, leading to a fragmented user experience.</p>
                </div>
                <div class="gc-solution-card">
                  <div class="gc-card-tag solution">PROBLEM SOLUTIONS</div>
                  <h3>The Globicall Solution</h3>
                  <p>Globicall addresses these issues by delivering a seamless and crystal-clear calling experience supported by a clean, intuitive interface. The app simplifies navigation, enabling users to access calls, contacts, and features effortlessly. With detailed call history and smart contact management, users gain full control over their communication. Strong privacy settings and advanced spam protection ensure security and trust, while a quick, secure wallet recharge system adds convenience.</p>
                </div>
              </div>
            </section>

            <!-- 2. Design Process & 01 Understand -->
            <section class="cs-section gc-section" id="gc-section-research">
              <div class="section-tag gc-section-tag">02 • PROCESS & RESEARCH</div>
              <h2 class="section-heading">5-Stage Design Process & 01 Understand</h2>
              <p class="cs-paragraph">
                In this phase, we focused on researching the target audience, analyzing competitors, and identifying user needs. The goal was to gain deep insights into user behavior, pain points, and expectations to lay a strong foundation for the design process.
              </p>

              <!-- Design Process Stepper -->
              <div class="gc-process-stepper">
                <div class="gc-step-card active">
                  <div class="step-num">01</div>
                  <h4>Understand</h4>
                  <span>User Research • User Interviews • Competitive Analysis</span>
                </div>
                <div class="gc-step-card">
                  <div class="step-num">02</div>
                  <h4>Define</h4>
                  <span>Personas • Empathy Map • Journey Map</span>
                </div>
                <div class="gc-step-card">
                  <div class="step-num">03</div>
                  <h4>Ideate</h4>
                  <span>User Flow • Story Boarding • Information Architecture</span>
                </div>
                <div class="gc-step-card">
                  <div class="step-num">04</div>
                  <h4>Design</h4>
                  <span>Wireframe • Visual Design • Prototype</span>
                </div>
                <div class="gc-step-card">
                  <div class="step-num">05</div>
                  <h4>Test</h4>
                  <span>Feedback • Conclusion • Future Concept</span>
                </div>
              </div>

              <!-- Qualitative Research Summary -->
              <div class="gc-qualitative-box">
                <div class="gc-box-header">
                  <h3>1. Qualitative Research</h3>
                  <span class="gc-box-badge">USER INTERVIEWS & DISCOVERY</span>
                </div>
                <p class="gc-box-desc">
                  Revealed that most participants are frustrated by frequent spam and fraud calls, and they want reliable caller identification without intrusive ads.
                </p>
                <div class="gc-qualitative-split">
                  <div class="gc-split-col pain">
                    <h4>Pain Points Identified:</h4>
                    <ul>
                      <li>Difficulty in trusting unknown numbers.</li>
                      <li>Existing apps are often cluttered and not easy to navigate.</li>
                      <li>Concerns about privacy and data misuse.</li>
                      <li>Complexity in managing contacts and call history.</li>
                      <li>Hassles in wallet recharges and payment processes.</li>
                    </ul>
                  </div>
                  <div class="gc-split-col expect">
                    <h4>User Expectations:</h4>
                    <ul>
                      <li>A simple, intuitive UI with minimal distractions.</li>
                      <li>One-tap actions for blocking, reporting, and managing calls.</li>
                      <li>Transparency and control over account and data.</li>
                      <li>Smooth wallet recharge with secure transactions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Quantitative Research Statistics Grid (150 Participants) -->
              <div class="gc-quant-header">
                <h3>2. Quantitative Research (Survey of 150 Participants, Ages 18–45)</h3>
                <p>To validate user needs and measure the scale of challenges in communication, we conducted an online survey. The data provided measurable insights into user behavior and preferences:</p>
              </div>

              <div class="gc-stats-grid">
                <div class="gc-stat-box">
                  <strong class="stat-number">82%</strong>
                  <span class="stat-title">Spam & Fraud Exposure</span>
                  <p>Reported receiving 5–10 spam or fraud calls per week.</p>
                </div>
                <div class="gc-stat-box">
                  <strong class="stat-number">68%</strong>
                  <span class="stat-title">Unknown Caller Distrust</span>
                  <p>Said they don't fully trust unknown numbers and often ignore calls.</p>
                </div>
                <div class="gc-stat-box">
                  <strong class="stat-number">73%</strong>
                  <span class="stat-title">Ad Clutter Disruption</span>
                  <p>Felt that existing caller ID apps are cluttered with ads and affect usability.</p>
                </div>
                <div class="gc-stat-box">
                  <strong class="stat-number">59%</strong>
                  <span class="stat-title">Call History Difficulty</span>
                  <p>Mentioned difficulty in managing call history and contacts within current apps.</p>
                </div>
                <div class="gc-stat-box">
                  <strong class="stat-number">77%</strong>
                  <span class="stat-title">Integrated Wallet Need</span>
                  <p>Expressed the need for a fast and secure wallet recharge system integrated within the app.</p>
                </div>
                <div class="gc-stat-box">
                  <strong class="stat-number">85%</strong>
                  <span class="stat-title">Privacy & Data Security</span>
                  <p>Prioritized privacy and data security as the most important factor when using a caller ID app.</p>
                </div>
              </div>

              <!-- Key Insights from One-on-One Interviews -->
              <div class="gc-interviews-box">
                <h3>Key Insights from One-on-One Interviews (6 Participants, 20–30 Mins Each)</h3>
                <div class="gc-insights-grid">
                  <div class="gc-insight-item">
                    <span class="insight-num">1</span>
                    <div>
                      <strong>Spam & Fraud Calls:</strong>
                      <p>Almost all participants complained about receiving frequent spam calls and expressed frustration at not knowing whether to trust unknown numbers.</p>
                    </div>
                  </div>
                  <div class="gc-insight-item">
                    <span class="insight-num">2</span>
                    <div>
                      <strong>Cluttered Interfaces:</strong>
                      <p>Users felt that existing apps like Truecaller were often filled with ads and unnecessary features, which made navigation confusing.</p>
                    </div>
                  </div>
                  <div class="gc-insight-item">
                    <span class="insight-num">3</span>
                    <div>
                      <strong>Privacy Concerns:</strong>
                      <p>Participants were worried about how their contacts and personal data might be used or shared without consent.</p>
                    </div>
                  </div>
                  <div class="gc-insight-item">
                    <span class="insight-num">4</span>
                    <div>
                      <strong>Call Management Issues:</strong>
                      <p>Some users found it difficult to track detailed call history or manage contacts easily in current solutions.</p>
                    </div>
                  </div>
                  <div class="gc-insight-item">
                    <span class="insight-num">5</span>
                    <div>
                      <strong>Wallet & Recharge:</strong>
                      <p>Younger participants wanted an integrated wallet feature that allows quick and secure recharges without switching to another app.</p>
                    </div>
                  </div>
                  <div class="gc-insight-item">
                    <span class="insight-num">6</span>
                    <div>
                      <strong>Expectations:</strong>
                      <p>Users desired a clean, ad-free interface, one-tap blocking/reporting, and strong privacy controls to feel safe and in control.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 3. 02 Define, Personas & User Journey -->
            <section class="cs-section gc-section" id="gc-section-define">
              <div class="section-tag gc-section-tag">03 • DEFINE & PERSONAS</div>
              <h2 class="section-heading">02 Define, User Personas & Journey Map</h2>
              <p class="cs-paragraph">
                In the define phase, we synthesized the research insights to clearly outline the core problems and user needs. This step was focused on framing the right problem statements, prioritizing key pain points, and setting clear design objectives. By narrowing down challenges, we created a solid roadmap that ensured the design process stayed user-centered and goal-driven.
              </p>

              <!-- Dual Personas Cards Grid -->
              <div class="gc-personas-grid">
                <!-- Persona 1: Anjali Sharma -->
                <div class="gc-persona-card">
                  <div class="gc-persona-top">
                    <div class="persona-avatar-wrap">
                      <div class="persona-avatar-chip">👩‍🎓</div>
                    </div>
                    <div class="persona-meta">
                      <h3>Anjali Sharma</h3>
                      <span class="persona-sub">Age: 22 • College Student</span>
                      <span class="persona-tech">Tech Usage: Moderate to High (Social apps + online payments)</span>
                    </div>
                  </div>
                  <div class="persona-body">
                    <div class="persona-block">
                      <strong>Goals:</strong>
                      <ul>
                        <li>Wants a simple, clean app to identify calls from unknown numbers.</li>
                        <li>Needs an easy way to manage contacts and recharge her wallet securely.</li>
                        <li>Values customization and personalization (themes, preferences).</li>
                      </ul>
                    </div>
                    <div class="persona-block frustrations">
                      <strong>Frustrations:</strong>
                      <ul>
                        <li>Confused by complex settings in existing caller ID apps.</li>
                        <li>Worried about personal data being shared without consent.</li>
                        <li>Finds it annoying to switch between apps for wallet recharge and calling.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Persona 2: Rohan Mehta -->
                <div class="gc-persona-card">
                  <div class="gc-persona-top">
                    <div class="persona-avatar-wrap">
                      <div class="persona-avatar-chip">💼</div>
                    </div>
                    <div class="persona-meta">
                      <h3>Rohan Mehta</h3>
                      <span class="persona-sub">Age: 29 • Sales Executive</span>
                      <span class="persona-tech">Tech Usage: High (Smartphone is primary work tool)</span>
                    </div>
                  </div>
                  <div class="persona-body">
                    <div class="persona-block">
                      <strong>Goals:</strong>
                      <ul>
                        <li>Needs to answer many unknown calls daily for work without worrying about spam.</li>
                        <li>Wants quick access to detailed call history to track client conversations.</li>
                        <li>Prefers a professional, ad-free app that saves time.</li>
                      </ul>
                    </div>
                    <div class="persona-block frustrations">
                      <strong>Frustrations:</strong>
                      <ul>
                        <li>Spam and fraud calls waste time during work hours.</li>
                        <li>Existing apps feel cluttered with too many ads.</li>
                        <li>Difficulty in managing and separating personal vs. work contacts.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empathy Map Grid (Says, Thinks, Does, Feels) -->
              <div class="gc-empathy-box">
                <div class="gc-box-header">
                  <h3>Empathy Map Framework</h3>
                  <span class="gc-box-badge">EMPATHY DECODED</span>
                </div>
                <div class="gc-empathy-grid">
                  <div class="empathy-card says">
                    <div class="empathy-tag">🗣️ SAYS</div>
                    <ul>
                      <li>"I just want a clean app that shows me who's calling."</li>
                      <li>"Recharging my wallet should be quick and simple."</li>
                      <li>"I don't want my data to be misused."</li>
                    </ul>
                  </div>
                  <div class="empathy-card thinks">
                    <div class="empathy-tag">💭 THINKS</div>
                    <ul>
                      <li>"Is this call important or just spam?"</li>
                      <li>"Why do caller ID apps feel so complicated?"</li>
                      <li>"I wish everything was in one place—calls, contacts, recharge."</li>
                    </ul>
                  </div>
                  <div class="empathy-card does">
                    <div class="empathy-tag">🏃 DOES</div>
                    <ul>
                      <li>Ignores or declines most unknown calls.</li>
                      <li>Uses multiple apps (caller ID, payments, contacts) for simple tasks.</li>
                      <li>Avoids apps that ask for too many permissions.</li>
                    </ul>
                  </div>
                  <div class="empathy-card feels">
                    <div class="empathy-tag">❤️ FEELS</div>
                    <ul>
                      <li>Overwhelmed by too many settings and ads in current apps.</li>
                      <li>Anxious about privacy and data security.</li>
                      <li>Happy when she can personalize her app to her liking.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- User Journey Map Table -->
              <div class="gc-journey-box">
                <div class="gc-box-header">
                  <h3>User Journey Map (Rohan's Calling Experience)</h3>
                  <span class="gc-box-badge">END-TO-END FLOW</span>
                </div>
                <div class="gc-table-wrap">
                  <table class="gc-journey-table">
                    <thead>
                      <tr>
                        <th>Stage</th>
                        <th>Action 🏃</th>
                        <th>Thoughts 💭</th>
                        <th>Feelings 😊/😟</th>
                        <th>Opportunities 💡</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Trigger</strong></td>
                        <td>Gets a call from an unknown number during work hours.</td>
                        <td>"Is this a client or just spam?"</td>
                        <td><span class="feeling-pill warn">Frustrated, cautious</span></td>
                        <td>Real-time caller ID with spam detection.</td>
                      </tr>
                      <tr>
                        <td><strong>Research / Decision</strong></td>
                        <td>Looks at caller ID pop-up from Globicall.</td>
                        <td>"Good, I can see if it's a client or spam instantly."</td>
                        <td><span class="feeling-pill ok">Relieved, confident</span></td>
                        <td>Provide detailed caller info instantly.</td>
                      </tr>
                      <tr>
                        <td><strong>Action</strong></td>
                        <td>Answers/blocks the call in one tap.</td>
                        <td>"That was easy, no extra steps."</td>
                        <td><span class="feeling-pill ok">In control, efficient</span></td>
                        <td>One-tap block/report feature.</td>
                      </tr>
                      <tr>
                        <td><strong>Post-Action</strong></td>
                        <td>Reviews call history later to track client details.</td>
                        <td>"I can see all call details clearly."</td>
                        <td><span class="feeling-pill ok">Satisfied, professional</span></td>
                        <td>Detailed call logs with search/filter.</td>
                      </tr>
                      <tr>
                        <td><strong>Retention</strong></td>
                        <td>Continues using app daily for work calls.</td>
                        <td>"This saves me time and keeps calls organized."</td>
                        <td><span class="feeling-pill ok">Loyal, trusting</span></td>
                        <td>Personalize experience with work/personal contact lists.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- 4. 03 Ideate, User Flow & Information Architecture -->
            <section class="cs-section gc-section" id="gc-section-flow">
              <div class="section-tag gc-section-tag">04 • IDEATE & ARCHITECTURE</div>
              <h2 class="section-heading">03 Ideate, User Flow & Information Architecture</h2>
              <p class="cs-paragraph">
                During the ideation stage, we translated our research findings into actionable design concepts. By brainstorming, sketching, and mapping user journeys, we explored various ways to simplify calling, enhance security, and streamline contact management. This phase was about turning insights into innovative ideas that could shape a seamless and reliable user experience for Globicall.
              </p>

              <!-- 7-Frame Storyboarding Cards -->
              <div class="gc-storyboard-box">
                <div class="gc-box-header">
                  <h3>Story Boarding — 7 Key Narrative Frames</h3>
                  <span class="gc-box-badge">ROHAN'S STORY</span>
                </div>
                <div class="gc-story-grid">
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 1</span>
                    <h4>Notification of Incoming Call</h4>
                    <p>Rohan receives a call from an unknown number. Globicall displays "Possible: Delivery Agent" with caller ID detection.</p>
                  </div>
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 2</span>
                    <h4>Caller Identification</h4>
                    <p>The app quickly shows caller details — name, city, and tag ("Verified Business"). Rohan feels assured it's safe to answer.</p>
                  </div>
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 3</span>
                    <h4>Active Call Interface</h4>
                    <p>Rohan answers the call using the clear Globicall UI. Audio quality is crisp and lag-free as he completes his conversation.</p>
                  </div>
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 4</span>
                    <h4>End Call & View History</h4>
                    <p>After the call, the app displays the contact in recent call history with a "Message" button. He taps it to follow up.</p>
                  </div>
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 5</span>
                    <h4>Messaging Interface</h4>
                    <p>Rohan opens the chat screen and sends: "Hi, please share the document link." The chat UI looks clean and minimal.</p>
                  </div>
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 6</span>
                    <h4>Message Delivered</h4>
                    <p>The message is delivered instantly with two blue ticks. He adds the sender to his contacts for future communication.</p>
                  </div>
                  <div class="gc-story-card">
                    <span class="story-frame-pill">FRAME 7</span>
                    <h4>End Frame - Positive Emotion</h4>
                    <p>Rohan feels confident about Globicall's reliability with a thought: "This app really makes communication easier."</p>
                  </div>
                </div>
              </div>

              <!-- Information Architecture Grid -->
              <div class="gc-ia-box">
                <div class="gc-box-header">
                  <h3>Information Architecture (7 Core Pillars)</h3>
                  <span class="gc-box-badge">SYSTEM TAXONOMY</span>
                </div>
                <div class="gc-ia-grid">
                  <div class="gc-ia-card">
                    <div class="ia-icon">📞</div>
                    <h4>1. Calls</h4>
                    <p>Make a Call, Incoming Calls, Call Options (Mute, Speaker, Hold, Record)</p>
                  </div>
                  <div class="gc-ia-card">
                    <div class="ia-icon">📋</div>
                    <h4>2. Call History</h4>
                    <p>Logs (Missed, Received, Dialed), Detailed Call Info, Quick Actions (Call back, Message, Block)</p>
                  </div>
                  <div class="gc-ia-card">
                    <div class="ia-icon">💬</div>
                    <h4>3. Messaging</h4>
                    <p>Send Message, Receive Message, Chat History, Media Sharing (Images, Voice Notes, Docs)</p>
                  </div>
                  <div class="gc-ia-card">
                    <div class="ia-icon">👥</div>
                    <h4>4. Contacts</h4>
                    <p>View Contacts, Add / Edit / Delete Contact, Sync Contacts with phone/cloud</p>
                  </div>
                  <div class="gc-ia-card">
                    <div class="ia-icon">💳</div>
                    <h4>5. Wallet / Recharge</h4>
                    <p>Check Balance, Recharge Wallet, Transaction History, Multiple Payment Options</p>
                  </div>
                  <div class="gc-ia-card">
                    <div class="ia-icon">🛡️</div>
                    <h4>6. Spam / Security</h4>
                    <p>Blocked Numbers, Report Spam, Spam Filters, Auto Detection, Caller ID Privacy</p>
                  </div>
                  <div class="gc-ia-card">
                    <div class="ia-icon">⚙️</div>
                    <h4>7. Settings / Account</h4>
                    <p>Profile Info, Privacy Settings, Notifications, Customization (Theme, Dark Mode, Language), Logout</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 5. 04 Design System & Wireframes -->
            <section class="cs-section gc-section" id="gc-section-system">
              <div class="section-tag gc-section-tag">05 • DESIGN SYSTEM & WIREFRAMES</div>
              <h2 class="section-heading">04 Design System, Style Guide & Wireframes</h2>
              <p class="cs-paragraph">
                In the Design phase, we transformed insights and defined goals into tangible design solutions. This stage focused on creating wireframes, user flows, and interactive prototypes that translated user needs into intuitive experiences. Emphasis was placed on visual hierarchy, accessibility, and usability to ensure seamless navigation and engagement.
              </p>

              <!-- Style Guide Box -->
              <div class="gc-styleguide-box">
                <div class="gc-style-group">
                  <span class="style-sub">TYPOGRAPHY</span>
                  <h3 class="font-showcase">Montserrat</h3>
                  <div class="font-sample">
                    <span class="alpha-caps">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                    <span class="alpha-display">Aa</span>
                    <span class="alpha-small">abcdefghijklmnopqrstuvwxyz</span>
                  </div>
                </div>

                <!-- Color Palette Chips -->
                <div class="gc-palette-wrap">
                  <span class="style-sub">COLOR PALETTE</span>
                  <div class="gc-palette-grid">
                    <div class="gc-palette-card">
                      <div class="color-swatch" style="background: #2D65A4;"></div>
                      <strong>#2D65A4</strong>
                      <span>Deep Royal Blue</span>
                    </div>
                    <div class="gc-palette-card">
                      <div class="color-swatch" style="background: #15BEFF;"></div>
                      <strong>#15BEFF</strong>
                      <span>Sky Blue</span>
                    </div>
                    <div class="gc-palette-card">
                      <div class="color-swatch" style="background: #FFFFFF; border: 1px solid #E2E8F0;"></div>
                      <strong>#FFFFFF</strong>
                      <span>Pure White</span>
                    </div>
                    <div class="gc-palette-card">
                      <div class="color-swatch" style="background: #474747;"></div>
                      <strong>#474747</strong>
                      <span>Charcoal Dark</span>
                    </div>
                    <div class="gc-palette-card">
                      <div class="color-swatch" style="background: #808080;"></div>
                      <strong>#808080</strong>
                      <span>Neutral Gray</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 6. UI Screens Showcase -->
            <section class="cs-section gc-section" id="gc-section-screens">
              <div class="section-tag gc-section-tag">06 • VISUAL DESIGN & SCREENS</div>
              <h2 class="section-heading">16+ High-Fidelity Mobile Application Screens</h2>
              <p class="cs-paragraph">
                The visual design combines a sleek OLED dark theme with high-contrast royal blue accents and crisp typography. Screens cover the entire spectrum of calling, contact management, wallet recharges, AI chatbot assistance, and privacy settings.
              </p>

              <!-- Visual Screens Highlights Grid -->
              <div class="gc-screens-features-grid">
                <div class="gc-feat-card">
                  <span class="feat-badge">CALL EXPERIENCE</span>
                  <h4>Smart Dialer & Live Call Screen</h4>
                  <p>Fast touch dialpad with circular caller avatar, call duration timer, and one-tap mute, speaker, and disconnect buttons.</p>
                </div>
                <div class="gc-feat-card">
                  <span class="feat-badge">CONTACTS & HISTORY</span>
                  <h4>Detailed Contact Cards & Logs</h4>
                  <p>Full caller profile with address map preview, call history timeline, and direct message and favorite shortcuts.</p>
                </div>
                <div class="gc-feat-card">
                  <span class="feat-badge">FINTECH & WALLET</span>
                  <h4>Integrated Wallet & Recharges</h4>
                  <p>Quick $20, $50, $100 recharge chips, saved Visa/Mastercard profiles, transaction logs, and low-balance threshold alert sliders.</p>
                </div>
                <div class="gc-feat-card">
                  <span class="feat-badge">SECURITY & PRIVACY</span>
                  <h4>Spam Protection & Chatbot</h4>
                  <p>Instant spam reporting, blocked numbers manager, account deletion controls, and intelligent AI chatbot support.</p>
                </div>
              </div>

              <div class="gc-conclusion-box">
                <div class="gc-conclusion-inner">
                  <h3>THANKS FOR SCROLLING</h3>
                  <p>Designed with passion and user-centric precision by <strong>Vitthal Kolpe</strong>.</p>
                </div>
              </div>
            </section>

            <!-- 7. Prototype & Full Infographic Board Launch -->
            <section class="cs-section gc-section" id="gc-section-prototype">
              <div class="section-tag gc-section-tag">07 • LIVE ARTIFACTS</div>
              <h2 class="section-heading">Interactive Prototype & Full Board</h2>
              <p class="cs-paragraph">
                Access the complete high-fidelity Figma prototype and uncompressed 8,955px case study board directly.
              </p>

              <div class="artifacts-launch-grid gc-artifacts-grid">
                <div class="artifact-card-action">
                  <div class="artifact-icon">❖</div>
                  <div class="artifact-details">
                    <h4>Interactive Figma Prototype</h4>
                    <p>Experience the mobile workflow: dialer, contact profile, live call preview, and wallet recharge.</p>
                  </div>
                  <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch">
                    <span>Open in Figma</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Case Study Infographic (640 × 8,955px Ultra HD)</h4>
                    <p>Inspect the master end-to-end design presentation, research data, personas, user flow, and UI screens in crystal-clear detail.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="globicall-case-study-full.png" data-title="Globi Call Mobile App - Full Infographic Board (Ultra HD)">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav gc-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">CareConnect Healthcare</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">RAW Fitness Gym</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  renderRawFitnessCaseStudy(project) {
    return `
      <div class="case-study-screen rawfitness-case-study animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar rf-cs-top-bar">
          <button class="btn-back-to-work rf-back-btn" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb rf-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-actions">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-badge rf-figma-badge" title="Open Interactive Prototype in Figma">
              <span class="figma-dot">❖</span> Figma Prototype ↗
            </a>
            <button class="btn-lightbox-pill rf-lightbox-pill btn-open-lightbox-trigger" data-img="rawfitness-case-study-full.png" data-title="RAW Fitness Gym - Full Case Study Board (2,882px)">
              <span>Full Board (2,882px)</span> 🔍
            </button>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header rf-hero-header">
          <div class="rf-badge-group">
            <span class="cs-badge-pill rf-pill">⚡ WEB UI/UX CASE STUDY</span>
            <span class="rf-tag-live">● READY TO TRAIN YOUR BODY</span>
          </div>

          <h1 class="cs-title rf-title">${project.fullTitle}</h1>
          <p class="cs-tagline rf-tagline">
            RAW Fitness is a high-performance athletic training and gym web platform engineered to inspire discipline, compound strength, and athletic mastery. Featuring a bold dark visual aesthetic, certified coach portfolios, structured training pillars, and an interactive 50% discount membership lead funnel.
          </p>

          <!-- Key Project Metadata Grid -->
          <div class="cs-meta-grid rf-meta-grid">
            <div class="meta-item">
              <span class="meta-label">ROLE</span>
              <strong class="meta-value">${project.role}</strong>
              <span class="meta-sub">Design Lead, UI Architecture & Interaction</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORM</span>
              <strong class="meta-value">${project.platform}</strong>
              <span class="meta-sub">High-Conversion Web Landing Page</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">TOOLS USED</span>
              <strong class="meta-value">Figma, Ai, Ps</strong>
              <span class="meta-sub">Figma, Illustrator, Photoshop</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">DURATION & TEAM</span>
              <strong class="meta-value">2 Months • 3 Members</strong>
              <span class="meta-sub">Lead UX/UI Designer, Copywriter, Web Dev</span>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="rf-cta-strip">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-raw">
              <span class="btn-glow-icon">❖</span>
              <span>Launch Live Prototype</span>
              <span class="btn-arrow">↗</span>
            </a>
            <button class="btn-secondary-raw btn-open-lightbox-trigger" data-img="rawfitness-case-study-full.png" data-title="RAW Fitness Gym - Full Case Study Board (640 × 2,882px Ultra HD)">
              <span class="btn-search-icon">🔍</span>
              <span>Inspect Full Design Board</span>
            </button>
          </div>
        </div>

        <!-- In-Depth Case Study Layout with Sticky TOC -->
        <div class="cs-body-layout rf-body-layout">
          <!-- Sticky Table of Contents -->
          <aside class="cs-toc-sidebar rf-toc-sidebar">
            <div class="toc-sticky-box rf-toc-box">
              <span class="toc-title rf-toc-title">CASE STUDY SECTIONS</span>
              <ul class="toc-list rf-toc-list">
                <li><a href="#rf-section-hero" class="toc-link active">1. Hero & Metrics</a></li>
                <li><a href="#rf-section-why" class="toc-link">2. Why Choose Us & 4 Pillars</a></li>
                <li><a href="#rf-section-experience" class="toc-link">3. Training Experience</a></li>
                <li><a href="#rf-section-services" class="toc-link">4. Athletic Services</a></li>
                <li><a href="#rf-section-trainers" class="toc-link">5. Certified Trainers</a></li>
                <li><a href="#rf-section-testimonial" class="toc-link">6. Member Results</a></li>
                <li><a href="#rf-section-funnel" class="toc-link">7. 50% Off Funnel & Board</a></li>
              </ul>

              <!-- Sticky Prototype CTA Card in Sidebar -->
              <div class="toc-prototype-card rf-sidebar-proto-card">
                <span class="proto-mini-tag">LIVE PROTOTYPE</span>
                <p>Test the high-performance gym landing page, athletic programs, trainer profiles, and membership funnel directly in Figma.</p>
                <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-sidebar-proto">Open in Figma ↗</a>
              </div>
            </div>
          </aside>

          <!-- Main In-Depth Content Stream -->
          <main class="cs-content-main rf-content-main">

            <!-- 1. Hero & Performance Metrics -->
            <section class="cs-section rf-section" id="rf-section-hero">
              <div class="section-tag rf-section-tag">01 • HERO & PERFORMANCE METRICS</div>
              <h2 class="section-heading">Ready to Train Your Body — Level Up</h2>
              <p class="cs-paragraph">
                The RAW Fitness landing page opens with an authoritative athletic hero section engineered to maximize motivation. Designed to communicate instant credibility, strength benchmarks, and immediate call-to-action pathways for new members.
              </p>

              <!-- Metrics Grid -->
              <div class="rf-metrics-grid">
                <div class="rf-metric-card">
                  <span class="rf-metric-val">20+</span>
                  <strong class="rf-metric-label">Years Experience</strong>
                  <p class="rf-metric-desc">Decades of proven strength & conditioning excellence in athletic training.</p>
                </div>
                <div class="rf-metric-card">
                  <span class="rf-metric-val">15K+</span>
                  <strong class="rf-metric-label">Members Joined</strong>
                  <p class="rf-metric-desc">Thriving community of competitive athletes and daily fitness enthusiasts.</p>
                </div>
                <div class="rf-metric-card">
                  <span class="rf-metric-val">14K+</span>
                  <strong class="rf-metric-label">Happy Members</strong>
                  <p class="rf-metric-desc">Verified athletic transformations backed by 5-star certified coaching.</p>
                </div>
              </div>
            </section>

            <!-- 2. Why Choose Us & 4 Core Pillars -->
            <section class="cs-section rf-section" id="rf-section-why">
              <div class="section-tag rf-section-tag">02 • CORE VALUE PROPOSITION</div>
              <h2 class="section-heading">Why Choose Us</h2>
              <p class="cs-paragraph">
                Gym workouts offer a versatile and customisable experience, allowing everyone to set specific fitness goals. To eliminate friction, RAW Fitness structures its core value proposition across four distinct training pillars:
              </p>

              <!-- 4 Pillars Grid -->
              <div class="rf-pillars-grid">
                <div class="rf-pillar-card">
                  <div class="rf-pillar-num">01</div>
                  <h4>PERSONAL TRAINING</h4>
                  <p>Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.</p>
                </div>
                <div class="rf-pillar-card">
                  <div class="rf-pillar-num">02</div>
                  <h4>EQUIPMENT AND FACILITIES</h4>
                  <p>Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.</p>
                </div>
                <div class="rf-pillar-card">
                  <div class="rf-pillar-num">03</div>
                  <h4>NUTRITION COUNSELING</h4>
                  <p>Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.</p>
                </div>
                <div class="rf-pillar-card">
                  <div class="rf-pillar-num">04</div>
                  <h4>SPECIALITY PROGRAMS</h4>
                  <p>Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals.</p>
                </div>
              </div>
            </section>

            <!-- 3. Training Experience & Philosophy -->
            <section class="cs-section rf-section" id="rf-section-experience">
              <div class="section-tag rf-section-tag">03 • PHILOSOPHY & DISCIPLINE</div>
              <h2 class="section-heading">We Have a Lot of Experience</h2>
              <p class="cs-paragraph">
                Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement. We guide each member toward their peak physical condition with battle-tested methodology.
              </p>

              <!-- Philosophy Highlight Box -->
              <div class="rf-experience-callout">
                <div class="rf-callout-icon">🏋️</div>
                <div class="rf-callout-text">
                  <h3>Structured Discipline Over Hype</h3>
                  <p>Physical fitness is not a shortcut — it is a daily commitment. RAW Fitness provides the exact programming, compound movement focus, and recovery protocols required to sustain long-term peak performance.</p>
                </div>
              </div>
            </section>

            <!-- 4. Disciplined Training Programs (Services) -->
            <section class="cs-section rf-section" id="rf-section-services">
              <div class="section-tag rf-section-tag">04 • ATHLETIC SERVICES</div>
              <h2 class="section-heading">Disciplined Training Programs</h2>
              <p class="cs-paragraph">
                Every member arrives with unique objectives. The services architecture segments training programs into four clear specialties for effortless class selection:
              </p>

              <!-- 4 Services Grid -->
              <div class="rf-services-grid">
                <div class="rf-service-card">
                  <div class="rf-service-header">
                    <span class="rf-service-icon">💪</span>
                    <h4>PERSONAL TRAINING</h4>
                  </div>
                  <p>1-on-1 coaching with customized strength benchmarks, precise form mastery, and progressive overload tracking.</p>
                </div>
                <div class="rf-service-card">
                  <div class="rf-service-header">
                    <span class="rf-service-icon">🔥</span>
                    <h4>ZUMBA AEROBICS</h4>
                  </div>
                  <p>High-energy rhythm workouts for cardio endurance, active calorie burn, and full-body aerobic conditioning.</p>
                </div>
                <div class="rf-service-card">
                  <div class="rf-service-header">
                    <span class="rf-service-icon">⚡</span>
                    <h4>FUNCTIONAL TRAINING</h4>
                  </div>
                  <p>Athletic agility, core stability, and compound movement power designed for real-world physical resilience.</p>
                </div>
                <div class="rf-service-card">
                  <div class="rf-service-header">
                    <span class="rf-service-icon">🧘</span>
                    <h4>YOGA</h4>
                  </div>
                  <p>Mindful mobility, recovery, joint flexibility, and breathing discipline to accelerate neuromuscular repair.</p>
                </div>
              </div>
            </section>

            <!-- 5. Certified Coaches & Trainers -->
            <section class="cs-section rf-section" id="rf-section-trainers">
              <div class="section-tag rf-section-tag">05 • CERTIFIED COACHES</div>
              <h2 class="section-heading">Meet Our Professional Trainers</h2>
              <p class="cs-paragraph">
                Expert mentorship is the foundation of athletic longevity. RAW Fitness showcases its certified coaching staff with direct peer ratings and verified specialties:
              </p>

              <!-- 3 Trainers Grid -->
              <div class="rf-trainers-grid">
                <div class="rf-trainer-card">
                  <div class="rf-trainer-avatar-box">
                    <span class="rf-trainer-initial">BE</span>
                  </div>
                  <h4 class="rf-trainer-name">BORNEY EXITEID</h4>
                  <div class="rf-trainer-rating">★★★★★</div>
                  <span class="rf-trainer-role">Head Strength Coach</span>
                </div>
                <div class="rf-trainer-card">
                  <div class="rf-trainer-avatar-box">
                    <span class="rf-trainer-initial">EW</span>
                  </div>
                  <h4 class="rf-trainer-name">ELSA WINDIA</h4>
                  <div class="rf-trainer-rating">★★★★★</div>
                  <span class="rf-trainer-role">Functional & Aerobics Specialist</span>
                </div>
                <div class="rf-trainer-card">
                  <div class="rf-trainer-avatar-box">
                    <span class="rf-trainer-initial">GA</span>
                  </div>
                  <h4 class="rf-trainer-name">GEOURGE ARYO</h4>
                  <div class="rf-trainer-rating">★★★★★</div>
                  <span class="rf-trainer-role">Olympic Lifting & Conditioning Coach</span>
                </div>
              </div>
            </section>

            <!-- 6. Member Transformation & Testimonial -->
            <section class="cs-section rf-section" id="rf-section-testimonial">
              <div class="section-tag rf-section-tag">06 • MEMBER RESULTS</div>
              <h2 class="section-heading">Real Results & Community Impact</h2>
              <p class="cs-paragraph">
                Social proof directly from members who transformed their health and athletic performance through structured gym programming:
              </p>

              <!-- Testimonial Card -->
              <div class="rf-testimonial-card">
                <div class="rf-quote-icon">“</div>
                <div class="rf-test-stars">★★★★★</div>
                <p class="rf-test-quote">
                  "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels."
                </p>
                <div class="rf-test-author">
                  <strong>JHONY BREAKER</strong>
                  <span>Verified Gym Member • Transformation Graduate</span>
                </div>
              </div>
            </section>

            <!-- 7. Lead Funnel & Live Artifacts -->
            <section class="cs-section rf-section" id="rf-section-funnel">
              <div class="section-tag rf-section-tag">07 • CONVERSION FUNNEL & ARTIFACTS</div>
              <h2 class="section-heading">50% Off Lead Funnel & Live Artifacts</h2>
              <p class="cs-paragraph">
                The page concludes with a high-conversion membership funnel designed to lower entry barriers and capture prospective member inquiries instantly.
              </p>

              <!-- Lead Funnel Banner Preview -->
              <div class="rf-funnel-card">
                <div class="rf-funnel-header">
                  <span class="rf-discount-badge">50% SPECIAL DISCOUNT</span>
                  <h3>LET'S START GYM TRAINING NOW</h3>
                  <p>Get 50% off the first three classes you sign up for this month on any GYM membership.</p>
                </div>
                <div class="rf-funnel-form-mock">
                  <div class="rf-mock-input">Enter You Name...</div>
                  <div class="rf-mock-input">Numbers Phone...</div>
                  <div class="rf-mock-input">Your Email Address...</div>
                  <button class="rf-mock-submit">LET'S JOIN NOW</button>
                </div>
              </div>

              <!-- Live Artifacts Grid -->
              <div class="artifacts-launch-grid rf-artifacts-grid">
                <div class="artifact-card-action">
                  <div class="artifact-icon">❖</div>
                  <div class="artifact-details">
                    <h4>Interactive Figma Prototype</h4>
                    <p>Experience the responsive web layout, training programs, trainer roster, and membership lead funnel.</p>
                  </div>
                  <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch">
                    <span>Open in Figma</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Case Study Infographic (640 × 2,882px Ultra HD)</h4>
                    <p>Inspect the complete end-to-end design presentation, typography hierarchy, UI components, and footer in crystal-clear detail.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="rawfitness-case-study-full.png" data-title="RAW Fitness Gym - Full Design Board (Ultra HD)">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>

              <!-- Conclusion Box -->
              <div class="rf-conclusion-box">
                <div class="rf-conclusion-inner">
                  <h3>READY TO TRAIN YOUR BODY</h3>
                  <p>Designed with athletic intensity and conversion precision by <strong>Vitthal Kolpe</strong>.</p>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav rf-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">Globi Call Mobile App</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">Physiotherapy Mobile App</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  // Dedicated Authentic Case Study Renderer for Physiotherapy Mobile App (Exact Behance gallery data & high-res slices)
  renderPhysioYourCaseStudy(project) {
    return `
      <div class="case-study-screen physio-case-study animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar physio-cs-top-bar">
          <button class="btn-back-to-work cc-back-btn" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb cc-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-actions">
            <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-badge physio-behance-badge" title="Open Presentation on Behance">
              <span class="figma-dot">Bē</span> Behance Project ↗
            </a>
            <button class="btn-lightbox-pill physio-lightbox-pill btn-open-lightbox-trigger" data-img="physio-case-study-full.png" data-title="Physiotherapy Mobile App - Complete End-to-End Case Study Infographic (Ultra HD)">
              <span>Full Board (Ultra HD)</span> 🔍
            </button>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header physio-hero-header">
          <div class="physio-badge-group">
            <span class="physio-pill">🩺 UX & UI CASE STUDY</span>
            <span class="physio-tag-live">● CLINICAL REHABILITATION ECOSYSTEM</span>
            <span class="physio-pill" style="background: rgba(255, 100, 34, 0.1); color: #FF6422; border-color: rgba(255, 100, 34, 0.3);">❖ BEHANCE FEATURED</span>
          </div>
          <h1 class="physio-title">${project.title}</h1>
          <p class="physio-tagline">${project.tagline}</p>
          <p class="cc-subtitle-lead" style="margin-bottom: 24px; color: var(--ink-secondary); font-size: 1.05rem; line-height: 1.6;">
            A mobile-first physical therapy ecosystem built to bridge the clinical gap between patients and practitioners with video exercise guidance, compliance tracking, and digital medical records.
          </p>

          <!-- Key Metadata Grid -->
          <div class="physio-meta-grid">
            <div class="meta-item">
              <span class="meta-label">ROLE</span>
              <strong class="meta-value">${project.role}</strong>
              <small class="meta-sub">6 Years UI/UX Exp</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">TIMELINE</span>
              <strong class="meta-value">9 Weeks Total</strong>
              <small class="meta-sub">Research (W1-5) • UI (W6-9)</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORMS</span>
              <strong class="meta-value">${project.platform}</strong>
              <small class="meta-sub">Dual Portals (Doctor/Patient)</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">DESIGN STACK</span>
              <strong class="meta-value">Figma & Adobe XD</strong>
              <small class="meta-sub">Photoshop • Illustrator</small>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="physio-cta-strip">
            <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-physio">
              <span>View on Behance</span> ↗
            </a>
            <button class="btn-secondary-physio btn-open-lightbox-trigger" data-img="physio-case-study-full.png" data-title="Physiotherapy Mobile App - Complete End-to-End Case Study Infographic (Ultra HD)">
              <span>Inspect Full Case Study (Ultra HD)</span> 🔍
            </button>
          </div>
        </div>

        <!-- 2-Column Body Layout with Sticky TOC Sidebar -->
        <div class="physio-body-layout">
          <!-- Left Sticky Sidebar TOC -->
          <aside class="physio-toc-sidebar">
            <div class="physio-toc-box">
              <span class="physio-toc-title">CASE STUDY SECTIONS</span>
              <ul class="physio-toc-list">
                <li><a href="#physio-overview" class="toc-link active">1. Overview & 3 Priorities</a></li>
                <li><a href="#physio-research" class="toc-link">2. Research & 2 Personas</a></li>
                <li><a href="#physio-architecture" class="toc-link">3. Architecture & User Flow</a></li>
                <li><a href="#physio-system" class="toc-link">4. Design System & Principles</a></li>
                <li><a href="#physio-testing" class="toc-link">5. Usability Testing & CX</a></li>
                <li><a href="#physio-screens" class="toc-link">6. Screens & Key Learnings</a></li>
                <li><a href="#physio-fullboard" class="toc-link">7. Prototype & Full Board</a></li>
              </ul>

              <!-- Sticky Prototype Box -->
              <div class="physio-sidebar-proto-card">
                <span class="cc-live-pill" style="display:inline-block; margin-bottom:8px; font-size:0.65rem;">LIVE CASE STUDY</span>
                <p>Test the interactive mobile appointment booking, video consultation, and digital health vault directly on Behance.</p>
                <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-physio" style="width: 100%; justify-content: center; padding: 10px 14px; font-size: 0.82rem; border-radius: 8px;">
                  Open on Behance ↗
                </a>
              </div>
            </div>
          </aside>

          <!-- Right Content Column -->
          <main class="cs-main-content">
            <!-- 1. Overview & 3 Priorities -->
            <section class="cs-section physio-section" id="physio-overview">
              <div class="section-tag physio-section-tag">01 / OVERVIEW & CLINICAL CONTEXT</div>
              <h2 class="section-heading">Reinventing Physical Therapy for the Digital Era</h2>
              <p class="cs-paragraph">
                Physiotherapy applications provide essential clinical exercises and tracking tools through mobile devices. They empower patients to perform prescribed routines at home while giving physiotherapists longitudinal visibility into patient adherence and recovery velocity.
              </p>

              <!-- 4 Clinical Metrics Grid -->
              <div class="physio-metrics-grid">
                <div class="physio-metric-card">
                  <span class="physio-metric-val">95%</span>
                  <span class="physio-metric-label">Adherence Rate</span>
                  <p class="physio-metric-desc">Rehabilitation tracking benchmark achieved through video guidance.</p>
                </div>
                <div class="physio-metric-card">
                  <span class="physio-metric-val">9 Wks</span>
                  <span class="physio-metric-label">End-to-End Design</span>
                  <p class="physio-metric-desc">Structured UX Research (W1-5) and UI Design & Testing (W6-9).</p>
                </div>
                <div class="physio-metric-card">
                  <span class="physio-metric-val">2 Portals</span>
                  <span class="physio-metric-label">Dual Ecosystem</span>
                  <p class="physio-metric-desc">Dedicated workflows for Physiotherapists/Doctors and Patients.</p>
                </div>
                <div class="physio-metric-card">
                  <span class="physio-metric-val">22+</span>
                  <span class="physio-metric-label">Custom Icons</span>
                  <p class="physio-metric-desc">Bespoke healthcare iconography built for instant clinical clarity.</p>
                </div>
              </div>

              <!-- Problem Statement Points -->
              <div class="physio-cards-container" style="margin-top: 32px;">
                <h3 class="physio-sub-heading">Clinical Problem Statement</h3>
                <div class="physio-point-card">
                  <span class="physio-point-bullet">⚠️</span>
                  <p>Physiotherapists work with a wide range of conditions without medication, improving body mechanics, reducing pain, and assisting with rehabilitation. Physiotherapy without supervision can prove ineffective or risky; hence continuous guidance is crucial.</p>
                </div>
                <div class="physio-point-card">
                  <span class="physio-point-bullet">⚠️</span>
                  <p>Physiotherapists struggle to keep track of their patients' adherence and medical progress throughout home treatment cycles. Fragmented manual notes prevent holistic follow-ups.</p>
                </div>
                <div class="physio-point-card">
                  <span class="physio-point-bullet">⚠️</span>
                  <p>As the healthcare industry undergoes digital transformation, electronic documentation and standardized remote rehabilitation are vital to deliver high-quality care where and when it is needed.</p>
                </div>
              </div>

              <!-- Possible Solution Points -->
              <div class="physio-cards-container" style="margin-top: 28px;">
                <h3 class="physio-sub-heading">Proposed Digital Solution</h3>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">✓</span>
                  <p>Created an empathetic mobile interface recognizing that at-home rehabilitation exercises can be difficult, frustrating, and painful without immediate reassurance.</p>
                </div>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">✓</span>
                  <p>Equipped with a rich video exercise library with watch-point cues, helping patients build form confidence and dramatically improving therapy compliance.</p>
                </div>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">✓</span>
                  <p>Maintains a secure digital history of medical conditions, recovery metrics, and prescriptions—eliminating data loss across appointments.</p>
                </div>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">✓</span>
                  <p>Automated adherence tracking delivers actionable recovery insights directly to physiotherapists to fine-tune treatment regimens.</p>
                </div>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">✓</span>
                  <p>Dual portal allows doctors to send prescriptions, configure working schedules, and customize video plans, while patients effortlessly book slots, make digital payments, and track their progress.</p>
                </div>
              </div>

              <!-- 9-Week Timeline & Strategy -->
              <h3 class="physio-sub-heading" style="margin-top: 36px;">9-Week Project Timeline</h3>
              <div class="physio-timeline-grid">
                <div class="physio-timeline-card">
                  <div class="physio-tl-header">
                    <span class="physio-tl-badge">WEEKS 1 - 5</span>
                    <h4>UX Research Phase</h4>
                  </div>
                  <ul class="physio-tl-list">
                    <li><strong>W1 - W2:</strong> User interviews, quantitative research & competitive benchmark analysis.</li>
                    <li><strong>W3 - W4:</strong> Define user & business goals, brand attributes, personas, UJM & empathy maps.</li>
                    <li><strong>W5:</strong> User flows, card sorting & information architecture for key clinical modules.</li>
                  </ul>
                </div>
                <div class="physio-timeline-card teal">
                  <div class="physio-tl-header">
                    <span class="physio-tl-badge teal">WEEKS 6 - 9</span>
                    <h4>UI Design & Testing Phase</h4>
                  </div>
                  <ul class="physio-tl-list">
                    <li><strong>W6 - W7:</strong> Paper sketches, wireframing, high-fidelity UI design & component prototyping.</li>
                    <li><strong>W8 - W9:</strong> Prototype usability testing, feedback loops, UI refinements & final presentation.</li>
                  </ul>
                </div>
              </div>

              <!-- Design Strategy Grid -->
              <h3 class="physio-sub-heading">Design Strategy Alignment</h3>
              <div class="physio-strategy-grid">
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">🎯</span>
                  <strong>Business Goals</strong>
                  <p>Generate sustainable revenue through seamless clinical consultation and superior patient retention.</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">📱</span>
                  <strong>Technology</strong>
                  <p>Smartphones, tablets, desktop responsive web & secure UPI / Card online payment gateways.</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">⚡</span>
                  <strong>General Task</strong>
                  <p>Streamline appointment booking, video consultation, and home exercise guidance into under 3 minutes.</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">👥</span>
                  <strong>Target Users</strong>
                  <p>Patients recovering from physical injuries or managing chronic conditions. Age group: 18 - 60 years.</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">🔄</span>
                  <strong>Cross Channels</strong>
                  <p>Mobile App (iOS / Android), Web Application portal, and Interactive Voice Response (IVR).</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">🛡️</span>
                  <strong>Clinical Compliance</strong>
                  <p>HIPAA-aligned health data privacy and authenticated digital prescription dispatch.</p>
                </div>
              </div>
            </section>

            <!-- 2. Research & 2 Personas -->
            <section class="cs-section physio-section" id="physio-research">
              <div class="section-tag physio-section-tag">02 / USER RESEARCH & EMPATHY</div>
              <h2 class="section-heading">Clinical User Research & Target Personas</h2>
              <p class="cs-paragraph">
                To eliminate confirmation bias, I conducted fundamental research combining online qualitative interviews and on-site field studies across diverse age brackets and professional backgrounds.
              </p>

              <!-- 6-Stage Design Process Stepper -->
              <h3 class="physio-sub-heading" style="margin-top: 28px;">Design Process Methodology</h3>
              <div class="physio-process-grid">
                <div class="physio-proc-step">
                  <div class="physio-step-num">01</div>
                  <h4>Discover</h4>
                  <p>User research, contextual inquiry, clinician interviews & competitive analysis.</p>
                </div>
                <div class="physio-proc-step">
                  <div class="physio-step-num">02</div>
                  <h4>Define</h4>
                  <p>User personas, user flows, information architecture & clinical opportunity mapping.</p>
                </div>
                <div class="physio-proc-step">
                  <div class="physio-step-num">03</div>
                  <h4>Wireframe & Proto</h4>
                  <p>Low-fidelity wireframes, interactive screen transitions & clickable prototypes.</p>
                </div>
                <div class="physio-proc-step">
                  <div class="physio-step-num">04</div>
                  <h4>Visual Design</h4>
                  <p>Creating design system tokens, typography, bespoke iconography & polished UI assets.</p>
                </div>
                <div class="physio-proc-step">
                  <div class="physio-step-num">05</div>
                  <h4>Testing</h4>
                  <p>Interface usability testing with developers, matching UI specs with Adobe XD mockups.</p>
                </div>
                <div class="physio-proc-step">
                  <div class="physio-step-num">06</div>
                  <h4>Deliver</h4>
                  <p>Clean developer handoff with full design tokens, asset kits & interaction specs.</p>
                </div>
              </div>

              <!-- Qualitative Research Insights -->
              <div class="physio-research-box">
                <div class="physio-res-header">
                  <h3>User Research & Participant Cohort</h3>
                  <p>Interviewed 6 participants aged 21 to 38 encompassing patients, attendees, corporate employees, and resident doctors to understand both ends of the consultation journey.</p>
                </div>
                <div class="physio-participants-strip">
                  <strong>Demographics:</strong> 4 Female, 2 Male • Age: 18 - 60 • Occupations: Software Engineer, Student, IT Employee, Security Executive, Police Officer, Resident Doctor.
                </div>
                <div class="physio-questions-list">
                  <h4>Key Research Questions Explored:</h4>
                  <ul>
                    <li>1. Do you prefer an in-clinic visit or online consultation for regular physical therapy follow-ups?</li>
                    <li>2. What frustrates you most during visits to the physical therapy department?</li>
                    <li>3. What are the key pros and cons of remote video rehabilitation consultations?</li>
                    <li>4. What challenges do you face when keeping up with home rehabilitation routines?</li>
                    <li>5. What mobile features give you the greatest peace of mind during recovery?</li>
                  </ul>
                </div>
              </div>

              <!-- 2 Personas Grid -->
              <h3 class="physio-sub-heading" style="margin-top: 36px;">Target User Personas</h3>
              <div class="physio-personas-grid">
                <!-- Persona 1: Patient -->
                <div class="physio-persona-card">
                  <div class="physio-persona-top">
                    <div class="physio-avatar-circle">AD</div>
                    <div class="physio-persona-info">
                      <h3>Anjana Datt</h3>
                      <span class="physio-persona-role">Software Engineer • Age 25 • Pune</span>
                      <p class="physio-persona-quote">"I believe in doing the right things; that is my character and personality."</p>
                    </div>
                  </div>
                  <div class="physio-persona-bio">
                    <p>Anjana works demanding IT shift timings in Pune. Conscious of maintaining posture and fitness, she needs structured guidance on desk ergonomics and physical rehabilitation. Due to workload pressure, she lacks time for clinic commutes and seeks a trusted online consultation app.</p>
                  </div>
                  <div class="physio-persona-split">
                    <div class="physio-split-block">
                      <strong>Goals:</strong>
                      <ul>
                        <li>Maintain guided posture exercises and track progress feedback.</li>
                        <li>Reach a certified doctor for honest, convenient video consultations.</li>
                        <li>A reliable, transparent slot booking system.</li>
                      </ul>
                    </div>
                    <div class="physio-split-block red">
                      <strong>Pain Points:</strong>
                      <ul>
                        <li>Loss of productive time commuting to clinic visits.</li>
                        <li>Lack of trusted, transparent appointment systems.</li>
                        <li>No structured feedback loop after home exercises.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Persona 2: Doctor -->
                <div class="physio-persona-card teal">
                  <div class="physio-persona-top">
                    <div class="physio-avatar-circle teal">AY</div>
                    <div class="physio-persona-info">
                      <h3>Dr. Amit Yadav</h3>
                      <span class="physio-persona-role">Resident Physiotherapist • Age 25 • Mumbai / Pune</span>
                      <p class="physio-persona-quote">"We have a goal and that is to save and restore as many active lives as possible."</p>
                    </div>
                  </div>
                  <div class="physio-persona-bio">
                    <p>Amit is an MBBS final-year resident at a major private hospital in Mumbai. Passionate about helping patients recover from trauma and chronic pain, he manages large patient volumes daily. The absence of digital tools for tracking home compliance creates severe cognitive stress.</p>
                  </div>
                  <div class="physio-persona-split">
                    <div class="physio-split-block">
                      <strong>Goals:</strong>
                      <ul>
                        <li>Deliver patients customized video regimens for faster recovery.</li>
                        <li>Receive reliable adherence reports on prescribed exercises.</li>
                        <li>Simplify and standardize electronic medical documentation.</li>
                      </ul>
                    </div>
                    <div class="physio-split-block red">
                      <strong>Pain Points:</strong>
                      <ul>
                        <li>Overwhelmed by paper records and repetitive manual briefings.</li>
                        <li>Lacks digital tools to monitor patient home adherence.</li>
                        <li>Frustration when patients perform home exercises with poor posture.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 3. Architecture & User Flow -->
            <section class="cs-section physio-section" id="physio-architecture">
              <div class="section-tag physio-section-tag">03 / ARCHITECTURE & USER FLOW</div>
              <h2 class="section-heading">Dual-User Architecture & Clinical Workflows</h2>
              <p class="cs-paragraph">
                The application architecture connects two interdependent portals into a harmonious ecosystem. Every action a doctor takes (e.g. assigning a new shoulder rotation routine) seamlessly translates into the patient's daily checklist with instant video guidance.
              </p>

              <!-- Dual Flows Summary -->
              <div class="physio-flows-summary">
                <div class="physio-flow-col">
                  <h4>Patient User Flow</h4>
                  <p>Designed for minimal cognitive strain during recovery:</p>
                  <ul>
                    <li>1. <strong>Onboarding & Health Intake:</strong> Quick OTP authentication and injury symptom tagging.</li>
                    <li>2. <strong>Doctor Search & Discovery:</strong> Filter by specialty, rating, experience & distance.</li>
                    <li>3. <strong>Appointment Booking:</strong> Date & time picker with instant digital payment.</li>
                    <li>4. <strong>Interactive Video Guidance:</strong> High-definition video player with watch-point cues.</li>
                    <li>5. <strong>Digital Health Vault:</strong> Longitudinal records of prescriptions & progress graphs.</li>
                  </ul>
                </div>
                <div class="physio-flow-col teal">
                  <h4>Doctor / Practitioner Flow</h4>
                  <p>Optimized for clinical speed and documentation precision:</p>
                  <ul>
                    <li>1. <strong>Practitioner Authentication:</strong> Medical license verification & clinic setup.</li>
                    <li>2. <strong>Daily Schedule Management:</strong> Set consultation hours, buffer times & holidays.</li>
                    <li>3. <strong>Prescription Builder:</strong> Assemble tailored video routines with custom reps & frequency.</li>
                    <li>4. <strong>Adherence Analytics:</strong> Real-time dashboard of patient compliance percentages.</li>
                    <li>5. <strong>Tele-Consultation Console:</strong> Integrated HD video call with live symptom annotator.</li>
                  </ul>
                </div>
              </div>

              <!-- Wireframes Callout -->
              <div class="physio-wireframes-callout">
                <span class="physio-wf-bullet">📐</span>
                <div class="physio-wf-text">
                  <h4>Wireframing & Information Hierarchy</h4>
                  <p>Iterated low-fidelity paper sketches into Adobe XD wireframes to establish clear visual hierarchy for vital health telemetry, upcoming appointment countdowns, and video exercise controls before finalizing production tokens.</p>
                </div>
              </div>
            </section>

            <!-- 4. Design System & Principles -->
            <section class="cs-section physio-section" id="physio-system">
              <div class="section-tag physio-section-tag">04 / DESIGN SYSTEM & ATOMIC UI</div>
              <h2 class="section-heading">Clinical Design System, Colors & Iconography</h2>
              <p class="cs-paragraph">
                The visual language strikes a deliberate balance between clinical authority and warm, reassuring hospitality. Deep Teal anchors the medical trust, while Fresh Lime and Soft Ivory inject energy and comfort into daily physical routines.
              </p>

              <!-- Color Palette Swatches -->
              <h3 class="physio-sub-heading" style="margin-top: 28px;">Master Color Tokens</h3>
              <div class="physio-palette-grid">
                <div class="physio-color-card">
                  <div class="physio-swatch" style="background: #005F5B;"></div>
                  <strong>Deep Teal</strong>
                  <code>#005F5B</code>
                  <span>Primary Brand & Headers</span>
                </div>
                <div class="physio-color-card">
                  <div class="physio-swatch" style="background: #9EC031;"></div>
                  <strong>Fresh Lime</strong>
                  <code>#9EC031</code>
                  <span>Recovery & Adherence Accents</span>
                </div>
                <div class="physio-color-card">
                  <div class="physio-swatch" style="background: #FCF6ED; border: 1px solid #E2E8F0;"></div>
                  <strong>Soft Ivory</strong>
                  <code>#FCF6ED</code>
                  <span>Warm Background Surface</span>
                </div>
                <div class="physio-color-card">
                  <div class="physio-swatch" style="background: #D8D8D8;"></div>
                  <strong>Neutral Grey</strong>
                  <code>#D8D8D8</code>
                  <span>Card Borders & Dividers</span>
                </div>
                <div class="physio-color-card">
                  <div class="physio-swatch" style="background: #FFFFFF; border: 1px solid #E2E8F0;"></div>
                  <strong>Pure White</strong>
                  <code>#FFFFFF</code>
                  <span>Card Surface & Inputs</span>
                </div>
              </div>

              <!-- Typography & Atomic Components -->
              <div class="physio-typography-box">
                <div class="physio-typo-col">
                  <h4>Typography Hierarchy: Roboto</h4>
                  <p>Selected for exceptional mobile legibility across varying font sizes and high-contrast ambient environments:</p>
                  <ul>
                    <li><strong>32px Medium:</strong> Primary screen headers & action titles</li>
                    <li><strong>24px Regular:</strong> Section subheadings & card titles</li>
                    <li><strong>18px Regular:</strong> Body copy, instructions & telemetry values</li>
                    <li><strong>14px Regular:</strong> Input placeholders, helper tags & timestamps</li>
                  </ul>
                </div>
                <div class="physio-typo-col">
                  <h4>22+ Custom Healthcare Vector Icons</h4>
                  <p>Bespoke SVG iconography crafted on an 8pt grid for instant recognition:</p>
                  <ul>
                    <li>🩺 Stethoscope (Clinical consultation & doctors)</li>
                    <li>📅 Calendar & Slot Picker (Appointment management)</li>
                    <li>▶️ Exercise Video Player (Guidance & form checks)</li>
                    <li>📈 Progress & Adherence Curve (Recovery analytics)</li>
                    <li>🛡️ Digital Health Vault (Prescriptions & reports)</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- 5. Usability Testing & CX -->
            <section class="cs-section physio-section" id="physio-testing">
              <div class="section-tag physio-section-tag">05 / USABILITY TESTING & CX</div>
              <h2 class="section-heading">Rehabilitation Adherence & Clinical Outcomes</h2>
              <p class="cs-paragraph">
                Usability testing centered on two core interactions: how quickly a patient can book an appointment and whether the video player provides sufficient clarity to execute stretches correctly without therapist presence.
              </p>

              <!-- CX Points Container -->
              <div class="physio-cards-container" style="margin-top: 24px;">
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">⭐</span>
                  <div>
                    <strong>95% Exercise Adherence Benchmark:</strong>
                    <p>By pairing each exercise with a micro-video demonstration and step-by-step watch-point indicators, test participants completed 95% of prescribed sets compared to a baseline of 42% on paper handouts.</p>
                  </div>
                </div>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">⭐</span>
                  <div>
                    <strong>Zero-Friction Appointment Scheduling:</strong>
                    <p>The consolidated 3-step slot booking flow reduced booking time from 12 minutes (clinic phone calls) to under 90 seconds in-app.</p>
                  </div>
                </div>
                <div class="physio-point-card teal">
                  <span class="physio-point-bullet">⭐</span>
                  <div>
                    <strong>Standardized Clinical Documentation:</strong>
                    <p>Practitioners saved an estimated 45 minutes daily using the digital prescription builder with pre-configured exercise modules.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 6. Screens & Key Learnings -->
            <section class="cs-section physio-section" id="physio-screens">
              <div class="section-tag physio-section-tag">06 / PRODUCTION UI & OUTCOMES</div>
              <h2 class="section-heading">Final High-Fidelity UI Screens & Key Learnings</h2>
              <p class="cs-paragraph">
                The final high-fidelity screens exhibit crisp typography, ergonomic touch targets, and high-contrast clinical accessibility compliant with WCAG AA guidelines.
              </p>

              <!-- Key Takeaways Grid -->
              <div class="physio-strategy-grid" style="margin-top: 28px;">
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">💡</span>
                  <strong>Patient Empowerment</strong>
                  <p>Clear video guidance turns confusing therapy instructions into confidence-building daily habits.</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">🩺</span>
                  <strong>Clinician Efficiency</strong>
                  <p>Automated telemetry relieves doctors from administrative overload, letting them focus on patient recovery.</p>
                </div>
                <div class="physio-strat-item">
                  <span class="physio-strat-icon">📐</span>
                  <strong>Design Scalability</strong>
                  <p>The tokenized design system enables rapid addition of new therapy verticals like pediatric and sports rehab.</p>
                </div>
              </div>
            </section>

            <!-- 7. Prototype & Full Board -->
            <section class="cs-section physio-section" id="physio-fullboard">
              <div class="section-tag physio-section-tag">07 / ARTIFACTS & FULL PRESENTATION</div>
              <h2 class="section-heading">Interactive Case Study & Full Presentation Board</h2>
              <p class="cs-paragraph">
                Inspect the complete end-to-end design presentation, research streams, personas, and UI screens in crystal-clear detail.
              </p>

              <!-- Live Artifacts Grid -->
              <div class="artifacts-launch-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 28px 0;">
                <div class="artifact-card-action">
                  <div class="artifact-icon" style="font-size: 2rem;">Bē</div>
                  <div class="artifact-details">
                    <h4>Interactive Behance Presentation</h4>
                    <p>Experience the full presentation on Behance: research streams, user journeys, wireframes & high-res mockups.</p>
                  </div>
                  <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch" style="background: var(--primary-orange, #FF6422); color: #FFFFFF; font-weight: 800;">
                    <span>Open on Behance</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon" style="font-size: 2rem;">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Case Study Infographic (Ultra HD)</h4>
                    <p>Inspect the master 1,440px wide high-resolution design board showcasing the complete design lifecycle.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="physio-case-study-full.png" data-title="Physiotherapy Mobile App - Complete End-to-End Presentation (Ultra HD)" style="background: var(--primary-orange, #FF6422); color: #FFFFFF; font-weight: 800;">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>

              <!-- Conclusion Box -->
              <div class="physio-conclusion-box">
                <div class="physio-conclusion-inner">
                  <h3>DIGITAL HEALTHCARE FOR BETTER RECOVERY</h3>
                  <p>Designed with clinical empathy, user-centric precision, and modern accessibility standards by <strong>Vitthal Kolpe</strong>.</p>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav rf-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">RAW Fitness Gym</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">QuikJob Mobile App</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  // Dedicated Authentic Case Study Renderer for QuikJob Mobile App (Exact Behance gallery data & high-res slices)
  renderQuikJobCaseStudy(project) {
    return `
      <div class="case-study-screen quikjob-case-study animate-fade-in" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar qj-cs-top-bar">
          <button class="btn-back-to-work cc-back-btn" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb cc-breadcrumb">
            <span>Work</span> / <span class="current-cat">${project.category}</span> / <strong>${project.title}</strong>
          </div>
          <div class="cs-quick-actions">
            <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-figma-badge qj-behance-badge" title="Open Presentation on Behance">
              <span class="figma-dot">Bē</span> Behance Project ↗
            </a>
            <button class="btn-lightbox-pill qj-lightbox-pill btn-open-lightbox-trigger" data-img="quikjob-case-study-full.png" data-title="QuikJob Mobile App - Complete End-to-End Presentation (17,182px Ultra HD)">
              <span>Full Board (17,182px)</span> 🔍
            </button>
          </div>
        </div>

        <!-- Case Study Hero Header -->
        <div class="cs-hero-header qj-hero-header">
          <div class="qj-badge-group">
            <span class="qj-pill">💼 UX CASE STUDY</span>
            <span class="qj-tag-live">● 1-CLICK JOB SEARCH & APPLICATION</span>
            <span class="qj-pill" style="background: rgba(255, 100, 34, 0.1); color: #FF6422; border-color: rgba(255, 100, 34, 0.3);">❖ BEHANCE FEATURED</span>
          </div>
          <h1 class="qj-title">${project.title}</h1>
          <p class="qj-tagline">${project.tagline}</p>
          <p class="cc-subtitle-lead" style="margin-bottom: 24px; color: var(--ink-secondary); font-size: 1.05rem; line-height: 1.6;">
            A mobile-first job search ecosystem engineered to eliminate tedious application forms with one-click apply, personalized job preference matching, and live application tracking.
          </p>

          <!-- Key Metadata Grid -->
          <div class="qj-meta-grid">
            <div class="meta-item">
              <span class="meta-label">ROLE</span>
              <strong class="meta-value">${project.role}</strong>
              <small class="meta-sub">6 Years UI/UX Exp</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">TIMELINE</span>
              <strong class="meta-value">8 Weeks Total</strong>
              <small class="meta-sub">Understand (W1-2) • Hi-Fi (W6-8)</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORMS</span>
              <strong class="meta-value">${project.platform}</strong>
              <small class="meta-sub">Dual Persona (Candidate/Recruiter)</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">DESIGN STACK</span>
              <strong class="meta-value">Figma & Adobe XD</strong>
              <small class="meta-sub">Photoshop • Illustrator</small>
            </div>
          </div>

          <!-- Hero Action Buttons -->
          <div class="qj-cta-strip">
            <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-quikjob">
              <span>View on Behance</span> ↗
            </a>
            <button class="btn-secondary-quikjob btn-open-lightbox-trigger" data-img="quikjob-case-study-full.png" data-title="QuikJob Mobile App - Complete End-to-End Presentation (17,182px Ultra HD)">
              <span>Inspect Full Case Study (Ultra HD)</span> 🔍
            </button>
          </div>
        </div>

        <!-- 2-Column Body Layout with Sticky TOC Sidebar -->
        <div class="qj-body-layout">
          <!-- Left Sticky Sidebar TOC -->
          <aside class="qj-toc-sidebar">
            <div class="qj-toc-box">
              <span class="qj-toc-title">CASE STUDY SECTIONS</span>
              <ul class="qj-toc-list">
                <li><a href="#qj-overview" class="toc-link active">1. Overview & 1-Click Solution</a></li>
                <li><a href="#qj-process" class="toc-link">2. Design Process & 8-Week Timeline</a></li>
                <li><a href="#qj-audience" class="toc-link">3. Audience & Competitive Analysis</a></li>
                <li><a href="#qj-personas" class="toc-link">4. Personas & Empathy Maps</a></li>
                <li><a href="#qj-architecture" class="toc-link">5. Architecture & Wireframes</a></li>
                <li><a href="#qj-system" class="toc-link">6. Design System, Rubik & Grid</a></li>
                <li><a href="#qj-screens" class="toc-link">7. Hi-Fi Screens & Full Board</a></li>
              </ul>

              <!-- Sticky Prototype Box -->
              <div class="qj-sidebar-proto-card">
                <span class="cc-live-pill" style="display:inline-block; margin-bottom:8px; font-size:0.65rem; background:rgba(5,122,85,0.1); color:#057A55; border-color:rgba(5,122,85,0.3);">LIVE CASE STUDY</span>
                <p>Explore the full interactive job search, candidate profile setup, and one-click application flow directly on Behance.</p>
                <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-quikjob" style="width: 100%; justify-content: center; padding: 10px 14px; font-size: 0.82rem; border-radius: 8px;">
                  Open on Behance ↗
                </a>
              </div>
            </div>
          </aside>

          <!-- Right Content Column -->
          <main class="cs-main-content">
            <!-- 1. Overview & 1-Click Solution -->
            <section class="cs-section qj-section" id="qj-overview">
              <div class="section-tag qj-section-tag">01 / PRODUCT OVERVIEW & ONE-CLICK PARADIGM</div>
              <h2 class="section-heading">Streamlining Job Hunting with One-Click Simplicity</h2>
              <p class="cs-paragraph">
                QuikJob makes job hunting simple and fast! Employees can easily save their job preferences, such as location, industry, and role, in the app. When a job that matches their preferences becomes available, they can apply with just one click, saving time and effort. It's a quick, efficient way to find the perfect job and apply instantly!
              </p>

              <!-- 4 Product Metrics Grid -->
              <div class="qj-metrics-grid">
                <div class="qj-metric-card">
                  <span class="qj-metric-val">1-Click</span>
                  <span class="qj-metric-label">Instant Apply</span>
                  <p class="qj-metric-desc">Bypasses repetitive manual forms with pre-saved candidate preferences.</p>
                </div>
                <div class="qj-metric-card">
                  <span class="qj-metric-val">8 Wks</span>
                  <span class="qj-metric-label">End-to-End Design</span>
                  <p class="qj-metric-desc">Structured sprint from discovery to production-ready design tokens.</p>
                </div>
                <div class="qj-metric-card">
                  <span class="qj-metric-val">4 Giants</span>
                  <span class="qj-metric-label">Competitive Matrix</span>
                  <p class="qj-metric-desc">Benchmarked against LinkedIn, Indeed, Glassdoor & Naukri.</p>
                </div>
                <div class="qj-metric-card">
                  <span class="qj-metric-val">4-Col</span>
                  <span class="qj-metric-label">Mobile Grid</span>
                  <p class="qj-metric-desc">16px margins and 8px gutters tailored for ergonomic mobile scanning.</p>
                </div>
              </div>

              <!-- Responsibilities Tags -->
              <div class="qj-responsibilities-wrap" style="margin: 28px 0;">
                <h4 class="qj-sub-heading" style="margin-bottom: 12px;">Core Design Responsibilities</h4>
                <div class="qj-resp-tags">
                  <span class="qj-resp-tag">User Research</span>
                  <span class="qj-resp-tag">User Flow</span>
                  <span class="qj-resp-tag">User Persona</span>
                  <span class="qj-resp-tag">User Interviews</span>
                  <span class="qj-resp-tag">Wireframing</span>
                  <span class="qj-resp-tag">Prototyping</span>
                  <span class="qj-resp-tag">Visualization</span>
                  <span class="qj-resp-tag">Usability Testing</span>
                </div>
              </div>

              <!-- Problem Statement Points -->
              <div class="qj-cards-container" style="margin-top: 32px;">
                <h3 class="qj-sub-heading">Problem Statement</h3>
                <div class="qj-point-card">
                  <span class="qj-point-bullet">⚠️</span>
                  <p>Job seekers often struggle with finding relevant job opportunities and face cumbersome, lengthy application flows.</p>
                </div>
                <div class="qj-point-card">
                  <span class="qj-point-bullet">⚠️</span>
                  <p>Candidates must navigate multiple job listings, filter openings manually, and fill out tedious forms repeatedly for every single application.</p>
                </div>
                <div class="qj-point-card">
                  <span class="qj-point-bullet">⚠️</span>
                  <p>This makes the job search experience time-consuming and frustrating, demonstrating a clear market demand for a simpler, faster way to apply with minimal effort.</p>
                </div>
              </div>

              <!-- Proposed Solutions Points -->
              <div class="qj-cards-container" style="margin-top: 28px;">
                <h3 class="qj-sub-heading">The QuikJob Solution</h3>
                <div class="qj-point-card emerald">
                  <span class="qj-point-bullet">✓</span>
                  <p>Allows users to pre-save granular job preferences (location, role, industry, work mode) directly in the application.</p>
                </div>
                <div class="qj-point-card emerald">
                  <span class="qj-point-bullet">✓</span>
                  <p>When a matching role is posted, users can apply with just one click, removing repetitive resume parsing and manual input.</p>
                </div>
                <div class="qj-point-card emerald">
                  <span class="qj-point-bullet">✓</span>
                  <p>Transforms the entire job application lifecycle into a fast, stress-free, and enjoyable experience for job seekers.</p>
                </div>
              </div>
            </section>

            <!-- 2. Design Process & 8-Week Timeline -->
            <section class="cs-section qj-section" id="qj-process">
              <div class="section-tag qj-section-tag">02 / METHODOLOGY & 8-WEEK TIMELINE</div>
              <h2 class="section-heading">5-Stage Design Process & 8-Week Timeline</h2>
              <p class="cs-paragraph">
                The project progressed through a structured 5-stage human-centered design framework spanning 8 weeks, ensuring seamless alignment between candidate pain points and hiring velocity.
              </p>

              <!-- 5 Design Process Steps -->
              <div class="qj-process-grid">
                <div class="qj-proc-step">
                  <div class="qj-step-num">01</div>
                  <h4>Understand</h4>
                  <p>User research, user interviews & in-depth competitive benchmarking.</p>
                </div>
                <div class="qj-proc-step">
                  <div class="qj-step-num">02</div>
                  <h4>Define</h4>
                  <p>User personas, empathy mapping & end-to-end user journeys.</p>
                </div>
                <div class="qj-proc-step">
                  <div class="qj-step-num">03</div>
                  <h4>Ideate</h4>
                  <p>User flows, card sorting & information architecture structuring.</p>
                </div>
                <div class="qj-proc-step">
                  <div class="qj-step-num">04</div>
                  <h4>Design</h4>
                  <p>Low-fidelity wireframes, interactive prototypes & high-fidelity UI designs.</p>
                </div>
                <div class="qj-proc-step">
                  <div class="qj-step-num">05</div>
                  <h4>Test</h4>
                  <p>Stakeholder feedback, conclusion & future feature roadmap definition.</p>
                </div>
              </div>

              <!-- 8-Week Timeline Grid -->
              <h3 class="qj-sub-heading" style="margin-top: 36px;">Sprint Timeline Breakdown</h3>
              <div class="qj-timeline-grid">
                <div class="qj-timeline-card">
                  <div class="qj-tl-header">
                    <span class="qj-tl-badge amber">WEEKS 1 - 2</span>
                    <h4>Understand</h4>
                  </div>
                  <p>User Research, Candidate Interviews, Recruiter Contextual Inquiries & Competitive Analysis.</p>
                </div>
                <div class="qj-timeline-card">
                  <div class="qj-tl-header">
                    <span class="qj-tl-badge pink">WEEKS 3 - 4</span>
                    <h4>Define</h4>
                  </div>
                  <p>User Personas (Candidate & Recruiter), Empathy Maps & Comprehensive User Journeys.</p>
                </div>
                <div class="qj-timeline-card">
                  <div class="qj-tl-header">
                    <span class="qj-tl-badge blue">WEEK 5</span>
                    <h4>Ideate</h4>
                  </div>
                  <p>Task flows, information architecture & navigation taxonomy for quick scanning.</p>
                </div>
                <div class="qj-timeline-card">
                  <div class="qj-tl-header">
                    <span class="qj-tl-badge purple">WEEKS 6 - 7</span>
                    <h4>Design</h4>
                  </div>
                  <p>Structural paper wireframes, component design tokens & full-fidelity production screens.</p>
                </div>
                <div class="qj-timeline-card emerald">
                  <div class="qj-tl-header">
                    <span class="qj-tl-badge emerald">WEEK 8</span>
                    <h4>Test</h4>
                  </div>
                  <p>Prototype testing, recruiter feedback loops, design refinements & conclusion.</p>
                </div>
              </div>
            </section>

            <!-- 3. Audience & Competitive Analysis -->
            <section class="cs-section qj-section" id="qj-audience">
              <div class="section-tag qj-section-tag">03 / AUDIENCE & COMPETITIVE BENCHMARK</div>
              <h2 class="section-heading">Target Audience & Competitive Matrix</h2>
              <p class="cs-paragraph">
                The user research focused on understanding job seekers' needs and challenges. Insights gathered from freshers, experienced developers, and hiring managers guided the one-click architecture.
              </p>

              <!-- Target Audience & Qualitative Research Box -->
              <div class="qj-audience-box">
                <div class="qj-aud-col">
                  <h4>Target Audience Segments</h4>
                  <ul>
                    <li>★ Freshers looking for their first career entry</li>
                    <li>★ Young professionals with 1-5 years of industry experience</li>
                    <li>★ Job seekers seeking a quick, low-friction application flow</li>
                    <li>★ Candidates who want to eliminate repetitive form filling</li>
                    <li>★ Applicants exploring flexible formats (Full-time, Part-time, Remote, Hybrid)</li>
                  </ul>
                </div>
                <div class="qj-aud-col emerald">
                  <h4>Qualitative Research Protocol</h4>
                  <ul class="qj-nested-list">
                    <li><strong>Background:</strong> Past job search patterns & portal usage frequency.</li>
                    <li><strong>Current Experience:</strong> What features do candidates find most useful?</li>
                    <li><strong>Priorities:</strong> How important are salary transparency and work-mode filters?</li>
                    <li><strong>Feedback:</strong> Key frustrations with multi-page resume forms on mobile.</li>
                  </ul>
                </div>
              </div>

              <!-- Competitive Analysis Matrix -->
              <h3 class="qj-sub-heading" style="margin-top: 36px;">Competitive Feature Matrix</h3>
              <p class="cs-paragraph">
                Benchmarking against the four dominant job portals in the Indian market highlighted significant UX gaps in one-click application velocity and live status tracking:
              </p>
              <div class="qj-matrix-table-wrap">
                <table class="qj-matrix-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>LinkedIn</th>
                      <th>Indeed</th>
                      <th>Glassdoor</th>
                      <th>Naukri</th>
                      <th class="highlight">QuikJob</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Spot Jobs</td>
                      <td class="cross">✕</td>
                      <td class="cross">✕</td>
                      <td class="check">✓</td>
                      <td class="cross">✕</td>
                      <td class="check highlight">✓</td>
                    </tr>
                    <tr>
                      <td>Easy 1-Click Apply</td>
                      <td class="cross">✕</td>
                      <td class="cross">✕</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="check highlight">✓</td>
                    </tr>
                    <tr>
                      <td>Save Jobs</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="check highlight">✓</td>
                    </tr>
                    <tr>
                      <td>Granular Filters</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="cross">✕</td>
                      <td class="check highlight">✓</td>
                    </tr>
                    <tr>
                      <td>Job Posting</td>
                      <td class="check">✓</td>
                      <td class="check">✓</td>
                      <td class="cross">✕</td>
                      <td class="check">✓</td>
                      <td class="check highlight">✓</td>
                    </tr>
                    <tr>
                      <td>Live Status Tracker</td>
                      <td class="cross">✕</td>
                      <td class="cross">✕</td>
                      <td class="check">✓</td>
                      <td class="cross">✕</td>
                      <td class="check highlight">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- 4. Personas & Empathy Maps -->
            <section class="cs-section qj-section" id="qj-personas">
              <div class="section-tag qj-section-tag">04 / USER CENTRICITY & EMPATHY</div>
              <h2 class="section-heading">Dual-User Personas & Empathy Mapping</h2>
              <p class="cs-paragraph">
                To capture the complete recruitment ecosystem, I developed two deeply authentic personas: an ambitious frontend developer seeking career advancement and a senior recruiter overwhelmed by unqualified applications.
              </p>

              <!-- 2 Personas Grid -->
              <div class="qj-personas-grid">
                <!-- Persona 1: Daniel Bailey -->
                <div class="qj-persona-card">
                  <div class="qj-persona-top">
                    <div class="qj-avatar-circle">DB</div>
                    <div class="qj-persona-info">
                      <h3>Daniel Bailey</h3>
                      <span class="qj-persona-role">React Developer • Age 26 • Pune</span>
                      <div class="qj-personality-tags">
                        <span>Calm</span><span>Thinker</span><span>Creative</span>
                      </div>
                    </div>
                  </div>
                  <div class="qj-persona-bio">
                    <p>Daniel is a skilled React developer with 5 years of experience. He holds a degree in engineering and is passionate about creating user-friendly interfaces and staying updated on modern web frameworks.</p>
                  </div>
                  <div class="qj-persona-split">
                    <div class="qj-split-block">
                      <strong>Goals:</strong>
                      <ul>
                        <li>Find challenging React-specific roles to advance technical craft.</li>
                        <li>Remote and flexible hours to maintain healthy work-life balance.</li>
                        <li>Connect with and learn from peer frontend specialists.</li>
                      </ul>
                    </div>
                    <div class="qj-split-block red">
                      <strong>Frustrations:</strong>
                      <ul>
                        <li>Filtering through generic software roles with missing tech stack details.</li>
                        <li>Lack of transparency around company engineering culture.</li>
                        <li>Balancing sprint delivery with repetitive job application forms.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Persona 2: Sarah Mitchell -->
                <div class="qj-persona-card emerald">
                  <div class="qj-persona-top">
                    <div class="qj-avatar-circle emerald">SM</div>
                    <div class="qj-persona-info">
                      <h3>Sarah Mitchell</h3>
                      <span class="qj-persona-role">Senior Recruiter • Age 34 • Pune</span>
                      <div class="qj-personality-tags">
                        <span>Organized</span><span>Analytical</span><span>Creative</span>
                      </div>
                    </div>
                  </div>
                  <div class="qj-persona-bio">
                    <p>Sarah manages talent acquisition across technical pipelines at a mid-sized software company. She coordinates high volumes of open requisitions while screening resumes and scheduling interviews with hiring managers.</p>
                  </div>
                  <div class="qj-persona-split">
                    <div class="qj-split-block">
                      <strong>Goals:</strong>
                      <ul>
                        <li>Quickly identify qualified candidates matching required skill matrices.</li>
                        <li>Easily review candidate portfolios and resumes on mobile.</li>
                        <li>Streamline the hiring workflow with fewer repetitive manual steps.</li>
                      </ul>
                    </div>
                    <div class="qj-split-block red">
                      <strong>Frustrations:</strong>
                      <ul>
                        <li>Overwhelmed by high volumes of untargeted, irrelevant applications.</li>
                        <li>Hours lost manually filtering unqualified applicants.</li>
                        <li>Coordination friction across busy distributed interview panels.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empathy Mapping Synthesis -->
              <h3 class="qj-sub-heading" style="margin-top: 36px;">Empathy Mapping (Says, Thinks, Does, Feels)</h3>
              <p class="cs-paragraph">
                Mapping emotional states revealed that while job seekers battle cognitive fatigue from form duplication, recruiters face severe anxiety over missing top talent due to slow screening channels.
              </p>
            </section>

            <!-- 5. Architecture & Wireframes -->
            <section class="cs-section qj-section" id="qj-architecture">
              <div class="section-tag qj-section-tag">05 / IA & STRUCTURAL WIREFRAMING</div>
              <h2 class="section-heading">Information Architecture & Screen Flows</h2>
              <p class="cs-paragraph">
                The information architecture connects registration, customized job feeds, instant one-click applications, and real-time status trackers into a cohesive, low-friction hierarchy.
              </p>

              <!-- Wireframes Showcase -->
              <h3 class="qj-sub-heading" style="margin-top: 36px;">Structural Wireframes</h3>
              <p class="cs-paragraph">
                Low-fidelity paper sketches were translated into structural wireframes to test touch target ergonomic reaches, mobile tab bar placement, and one-click application confirmation states.
              </p>

              <!-- 3 Onboarding Walkthrough Screens -->
              <h3 class="qj-sub-heading" style="margin-top: 36px;">Walkthrough Onboarding Screens</h3>
              <p class="cs-paragraph">
                Three welcoming onboarding walkthroughs educate first-time users on remote work flexibility, curated job matching, and effortless one-click submission.
              </p>
            </section>

            <!-- 6. Design System, Rubik & Grid -->
            <section class="cs-section qj-section" id="qj-system">
              <div class="section-tag qj-section-tag">06 / DESIGN SYSTEM & ATOMIC UI</div>
              <h2 class="section-heading">Design System, Rubik Typography & 4-Column Grid</h2>
              <p class="cs-paragraph">
                The visual design system utilizes an energetic Emerald Green brand palette paired with Rubik typography to convey career growth, trust, and professional optimism.
              </p>

              <!-- Palette Swatches -->
              <div class="qj-palette-grid">
                <div class="qj-color-card">
                  <div class="qj-swatch" style="background: #057A55;"></div>
                  <strong>Emerald Green</strong>
                  <code>#057A55</code>
                  <span>Primary Brand & CTAs</span>
                </div>
                <div class="qj-color-card">
                  <div class="qj-swatch" style="background: #1F2A37;"></div>
                  <strong>Deep Charcoal</strong>
                  <code>#1F2A37</code>
                  <span>Headers & Body Text</span>
                </div>
                <div class="qj-color-card">
                  <div class="qj-swatch" style="background: #E8F5E9; border: 1px solid #C8E6C9;"></div>
                  <strong>Mint Surface</strong>
                  <code>#E8F5E9</code>
                  <span>Card Background & Badges</span>
                </div>
                <div class="qj-color-card">
                  <div class="qj-swatch" style="background: #FFFFFF; border: 1px solid #E2E8F0;"></div>
                  <strong>Pure White</strong>
                  <code>#FFFFFF</code>
                  <span>Input Background & Canvas</span>
                </div>
              </div>

              <!-- Typography & Grid Specs -->
              <div class="qj-specs-box">
                <div class="qj-spec-col">
                  <h4>Rubik Typography Hierarchy</h4>
                  <ul>
                    <li><strong>H1 Titles (Bold):</strong> Primary screen headlines & brand statements.</li>
                    <li><strong>H2 Subtitles (Medium):</strong> Section headings & job opening roles.</li>
                    <li><strong>H3 General Text (Regular):</strong> Body descriptions, company names & meta details.</li>
                  </ul>
                </div>
                <div class="qj-spec-col emerald">
                  <h4>4-Column Mobile Grid Layout</h4>
                  <ul>
                    <li><strong>Columns:</strong> 4 Equal proportional columns for responsive scaling.</li>
                    <li><strong>Margins:</strong> 16px lateral padding prevents edge-clipping.</li>
                    <li><strong>Gutter Space:</strong> 8px clean separation between interactive UI cards.</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- 7. Hi-Fi Screens & Full Board -->
            <section class="cs-section qj-section" id="qj-screens">
              <div class="section-tag qj-section-tag">07 / PRODUCTION SCREENS & FULL PRESENTATION</div>
              <h2 class="section-heading">Production Hi-Fi Screens & Full Presentation Board</h2>
              <p class="cs-paragraph">
                The final high-fidelity production screens bring the complete job hunting lifecycle to life: mobile OTP login, personalized recommendation feeds, rich company detail views, and real-time status trackers.
              </p>

              <!-- Live Artifacts Grid -->
              <div class="artifacts-launch-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 32px 0;">
                <div class="artifact-card-action">
                  <div class="artifact-icon" style="font-size: 2rem;">Bē</div>
                  <div class="artifact-details">
                    <h4>Interactive Behance Presentation</h4>
                    <p>Experience the complete presentation on Behance: research streams, user journeys, wireframes & mockups.</p>
                  </div>
                  <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch" style="background: var(--primary-orange, #FF6422); color: #FFFFFF; font-weight: 800;">
                    <span>Open on Behance</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon" style="font-size: 2rem;">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Case Study Infographic (17,182px Ultra HD)</h4>
                    <p>Inspect the complete 1,400 × 17,182px master design presentation in crystal-clear high definition.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="quikjob-case-study-full.png" data-title="QuikJob Mobile App - Complete End-to-End Presentation (17,182px Ultra HD)" style="background: var(--primary-orange, #FF6422); color: #FFFFFF; font-weight: 800;">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>

              <!-- Conclusion Box -->
              <div class="qj-conclusion-box">
                <div class="qj-conclusion-inner">
                  <h3>FIND YOUR MATCH, DRIVE YOUR DESTINY</h3>
                  <p>Designed with human empathy, one-click application velocity, and modern mobile standards by <strong>Vitthal Kolpe</strong>.</p>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav rf-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">Physiotherapy Mobile App</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">FXTM Telecom Monitoring</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  },

  // 7. FXTM (Foreign Exchange and Telecom Monitoring) Detailed Enterprise Case Study
  renderFXTMCaseStudy(project) {
    return `
      <div class="case-study-screen animate-fade-in fxtm-case-study" id="caseStudyScreen">
        <!-- Sticky Navigation Breadcrumb & Back Button -->
        <div class="cs-top-bar fxtm-top-bar">
          <button class="btn-back-to-work" id="btnBackToWork" title="Return to Portfolio">
            <span class="arrow">←</span> Back to All Projects
          </button>
          <div class="cs-breadcrumb fxtm-breadcrumb">
            <span>Work</span> / <span class="current-cat">Telecom Analytics</span> / <strong>FXTM Enterprise Cockpit</strong>
          </div>
          <div class="cs-quick-share">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="cs-ext-link">Figma Prototype ↗</a>
          </div>
        </div>

        <!-- Hero Header -->
        <div class="fxtm-hero-section">
          <div class="fxtm-badge-group">
            <span class="fxtm-pill">📡 ENTERPRISE TELECOM & FX ANALYTICS</span>
            <span class="fxtm-pill">FIGMA NODE: 1140-1059</span>
            <span class="fxtm-tag-live">● LIVE PRODUCTION PLATFORM</span>
          </div>
          <h1 class="fxtm-title">FXTM: Foreign Exchange & Telecom Monitoring</h1>
          <p class="fxtm-tagline">
            A mission-critical enterprise platform empowering telecom operators, regulatory bodies, and global enterprises to correlate foreign exchange volatility with cross-border voice and SMS traffic in real time.
          </p>

          <div class="fxtm-meta-grid">
            <div class="meta-item">
              <span class="meta-label">CLIENT & SECTOR</span>
              <strong class="meta-value">Global Telecom Carriers</strong>
              <small class="meta-sub">MTN, AT&T, Vodafone, T-Mobile</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">MY ROLE</span>
              <strong class="meta-value">UI/UX Designer</strong>
              <small class="meta-sub">Research, IA, Design System, UI</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">PLATFORMS</span>
              <strong class="meta-value">Enterprise Web & Desktop</strong>
              <small class="meta-sub">High-Density Multi-Portal Cockpit</small>
            </div>
            <div class="meta-item">
              <span class="meta-label">DESIGN STACK</span>
              <strong class="meta-value">Figma & Adobe XD</strong>
              <small class="meta-sub">Photoshop • Illustrator • Miro</small>
            </div>
          </div>

          <!-- Hero Action Buttons - Consistent Orange #FF6422 -->
          <div class="fxtm-cta-strip">
            <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-fxtm">
              <span>Open in Figma</span> ↗
            </a>
            <button class="btn-secondary-fxtm btn-open-lightbox-trigger" data-img="fxtm-case-study-full.png" data-title="FXTM - Complete End-to-End Case Study Infographic (640 × 10,475px Ultra HD)">
              <span>Inspect Full Case Study (Ultra HD)</span> 🔍
            </button>
          </div>
        </div>

        <!-- 2-Column Body Layout with Sticky TOC Sidebar -->
        <div class="fxtm-body-layout">
          <!-- Left Sticky Sidebar TOC -->
          <aside class="fxtm-toc-sidebar">
            <div class="fxtm-toc-box">
              <span class="fxtm-toc-title">CASE STUDY SECTIONS</span>
              <ul class="fxtm-toc-list">
                <li><a href="#fxtm-overview" class="toc-link active">1. Overview & Objectives</a></li>
                <li><a href="#fxtm-research" class="toc-link">2. Qualitative & Quantitative Research</a></li>
                <li><a href="#fxtm-personas" class="toc-link">3. Personas & Empathy Map</a></li>
                <li><a href="#fxtm-architecture" class="toc-link">4. Architecture & Storyboarding</a></li>
                <li><a href="#fxtm-designsystem" class="toc-link">5. Design System & Roboto</a></li>
                <li><a href="#fxtm-screens" class="toc-link">6. Hi-Fi Screens & Wireframes</a></li>
                <li><a href="#fxtm-prototype" class="toc-link">7. Prototype & Full Board</a></li>
              </ul>

              <!-- Sticky Prototype Box -->
              <div class="fxtm-sidebar-proto-card">
                <span class="fxtm-pill" style="display:inline-block; margin-bottom:8px; font-size:0.65rem;">LIVE FIGMA PROTOTYPE</span>
                <p>Test the interactive international analytics dashboard, currency rate tables, and business rule configurations directly in Figma.</p>
                <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-sidebar-proto">
                  Open in Figma ↗
                </a>
              </div>
            </div>
          </aside>

          <!-- Right Content Column -->
          <main class="cs-main-content">
            <!-- 1. Overview & Business Objectives -->
            <section class="cs-section fxtm-section" id="fxtm-overview">
              <div class="section-tag fxtm-section-tag">01 / OVERVIEW & PROBLEM STATEMENT</div>
              <h2 class="section-heading">Foreign Exchange and Telecom Monitoring</h2>
              <p class="cs-paragraph">
                FXTM is a comprehensive international telecommunications analytics and monitoring platform designed to track and manage exchange rate performance, tariff changes, voice and SMS traffic distribution, and revenue generation across multiple countries and telecom networks. The system is tailored for telecom operators, regulatory bodies, and enterprise clients looking to optimize their international voice and SMS traffic, monitor exchange rate impacts, and evaluate financial performance in real time.
              </p>

              <!-- 4 Performance Metrics Grid -->
              <div class="fxtm-metrics-grid">
                <div class="fxtm-metric-card">
                  <span class="fxtm-metric-val">48.2k</span>
                  <span class="fxtm-metric-label">Throughput (req/s)</span>
                  <p class="fxtm-metric-desc">Real-time international voice & SMS transaction ingestion.</p>
                </div>
                <div class="fxtm-metric-card">
                  <span class="fxtm-metric-val">99.98%</span>
                  <span class="fxtm-metric-label">SLA Gateway Uptime</span>
                  <p class="fxtm-metric-desc">Monitored cross-border network gateway uptime threshold.</p>
                </div>
                <div class="fxtm-metric-card">
                  <span class="fxtm-metric-val">10 Wks</span>
                  <span class="fxtm-metric-label">Design Sprint</span>
                  <p class="fxtm-metric-desc">Structured UX research, design system, and multi-portal cockpit.</p>
                </div>
                <div class="fxtm-metric-card">
                  <span class="fxtm-metric-val">7 Modules</span>
                  <span class="fxtm-metric-label">Enterprise Scope</span>
                  <p class="fxtm-metric-desc">Dashboard, Global Config, Business Rules, Tariff, Events, Reports, Access.</p>
                </div>
              </div>

              <!-- UX Goals & Objectives -->
              <div class="fxtm-cards-container" style="margin-top: 28px;">
                <h3 class="fxtm-sub-heading">UX Goals & Objectives</h3>
                <div class="fxtm-point-card purple">
                  <span class="fxtm-point-bullet">🎯</span>
                  <p><strong>Provide real-time, easy-to-understand analytics</strong> for telecom traffic and revenue streams across multi-currency corridors.</p>
                </div>
                <div class="fxtm-point-card purple">
                  <span class="fxtm-point-bullet">🎯</span>
                  <p><strong>Deliver a visually intuitive dashboard</strong> to track exchange rates and tariff deviations before billing discrepancies materialize.</p>
                </div>
                <div class="fxtm-point-card purple">
                  <span class="fxtm-point-bullet">🎯</span>
                  <p><strong>Minimize user effort in filtering data</strong> by network operator, destination country, and custom date range.</p>
                </div>
                <div class="fxtm-point-card purple">
                  <span class="fxtm-point-bullet">🎯</span>
                  <p><strong>Enhance visibility into revenue leakages</strong> or performance drops with automated rule triggers and immediate anomaly alerts.</p>
                </div>
              </div>

              <!-- Clinical Problem Statement -->
              <div class="fxtm-cards-container" style="margin-top: 28px;">
                <h3 class="fxtm-sub-heading">Enterprise Problem Statement</h3>
                <div class="fxtm-point-card">
                  <span class="fxtm-point-bullet">⚠️</span>
                  <p><strong>Lack of real-time insights:</strong> Legacy telecom operators have no visibility into how rapid currency fluctuations (e.g. Ghana Cedi GHS) directly impact cross-border billing.</p>
                </div>
                <div class="fxtm-point-card">
                  <span class="fxtm-point-bullet">⚠️</span>
                  <p><strong>Disparate traffic tracking:</strong> Difficulty monitoring SMS and international voice traffic across dozens of global partners and wholesale agreements.</p>
                </div>
                <div class="fxtm-point-card">
                  <span class="fxtm-point-bullet">⚠️</span>
                  <p><strong>Fragmented data sources:</strong> Teams rely on disjointed spreadsheets and isolated databases, creating costly reporting lag and unspotted revenue leakages.</p>
                </div>
                <div class="fxtm-point-card">
                  <span class="fxtm-point-bullet">⚠️</span>
                  <p><strong>Cumbersome legacy UIs:</strong> Existing analytics interfaces are dense, cluttered, and unintuitive, overwhelming operational and financial decision-makers.</p>
                </div>
              </div>
            </section>

            <!-- 2. Qualitative & Quantitative Research -->
            <section class="cs-section fxtm-section" id="fxtm-research">
              <div class="section-tag fxtm-section-tag">02 / USER RESEARCH & DISCOVERY</div>
              <h2 class="section-heading">Qualitative Interviews & Quantitative Survey</h2>
              <p class="cs-paragraph">
                To capture operational workflows and friction points, in-depth qualitative interviews were conducted with international telecom analysts, revenue assurance managers, and regulatory directors across emerging carrier markets.
              </p>

              <!-- 12 Qualitative Questions Matrix -->
              <h3 class="fxtm-sub-heading" style="margin-top: 24px;">12 Stakeholder Interview Queries</h3>
              <div class="fxtm-questions-grid">
                ${project.qualitativeResearch.map((q, idx) => `
                  <div class="fxtm-question-card">
                    <span class="q-number">${String(idx + 1).padStart(2, '0')}</span>
                    <p>${q}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Key Research Insights -->
              <h3 class="fxtm-sub-heading" style="margin-top: 32px;">Key Insights from User Interviews</h3>
              <div class="fxtm-cards-container">
                ${project.keyInsights.map(insight => `
                  <div class="fxtm-point-card purple">
                    <span class="fxtm-point-bullet">💡</span>
                    <p>${insight}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Quantitative Survey Results -->
              <h3 class="fxtm-sub-heading" style="margin-top: 32px;">Quantitative Research Validation</h3>
              <div class="fxtm-survey-grid">
                ${project.quantitativeResearch.map(item => `
                  <div class="fxtm-survey-card">
                    <span class="survey-q">${item.question}</span>
                    <strong class="survey-res">${item.results}</strong>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 3. Personas & Empathy Map -->
            <section class="cs-section fxtm-section" id="fxtm-personas">
              <div class="section-tag fxtm-section-tag">03 / DEFINE PHASE & PERSONAS</div>
              <h2 class="section-heading">Target User Personas & Empathy Mapping</h2>
              <p class="cs-paragraph">
                Grounding the design decisions in real-world operator context, two core user personas were formulated to guide feature prioritization, notification logic, and density parameters.
              </p>

              <!-- 2 Personas Grid -->
              <div class="fxtm-personas-grid">
                <div class="fxtm-persona-card">
                  <div class="persona-header">
                    <div class="persona-avatar-wrap" style="background: linear-gradient(135deg, #1E00A3, #9747FF);">
                      <span style="color:#FFFFFF; font-weight:800; font-size:1.35rem;">PD</span>
                    </div>
                    <div>
                      <h4 class="persona-name">Priya Deshmukh</h4>
                      <span class="persona-title">International Traffic Analyst</span>
                      <small class="persona-exp">Experience: 8+ years in telecom operations</small>
                    </div>
                  </div>
                  <div class="persona-block">
                    <strong>Goals & Motivations:</strong>
                    <ul>
                      <li>Monitor international voice and SMS traffic in real time across routes.</li>
                      <li>Analyze tariff changes across regions and evaluate currency variance.</li>
                      <li>Evaluate the direct effect of foreign exchange fluctuations on billing reconciliation.</li>
                      <li>Optimize cost and routing quality of international carrier traffic.</li>
                    </ul>
                  </div>
                  <div class="persona-block">
                    <strong>Frustrations & Pain Points:</strong>
                    <ul>
                      <li>Delayed reporting and latency in legacy billing tools.</li>
                      <li>Difficulty correlating exchange rate variations with daily traffic volumes.</li>
                      <li>Manual compilation of cross-operator tariff spreadsheets.</li>
                    </ul>
                  </div>
                </div>

                <div class="fxtm-persona-card">
                  <div class="persona-header">
                    <div class="persona-avatar-wrap" style="background: #4F46E5;">
                      <span style="color:#FFFFFF; font-weight:800; font-size:1.4rem;">RK</span>
                    </div>
                    <div>
                      <h4 class="persona-name">Rajesh Kulkarni</h4>
                      <span class="persona-title">Compliance & Regulatory Director</span>
                      <small class="persona-exp">Experience: 12+ years in regulatory oversight (New Delhi)</small>
                    </div>
                  </div>
                  <div class="persona-block">
                    <strong>Goals & Motivations:</strong>
                    <ul>
                      <li>Ensure complete audit transparency for cross-border telecom tariffs.</li>
                      <li>Prevent compliance penalties resulting from unmonitored tariff spikes.</li>
                      <li>Access automated carrier compliance reports across Africa, Asia, and Europe.</li>
                    </ul>
                  </div>
                  <div class="persona-block">
                    <strong>Frustrations & Pain Points:</strong>
                    <ul>
                      <li>Lack of centralized audit history across disparate carrier partners.</li>
                      <li>Discrepancies between invoice billing and actual carrier contracts.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Empathy Map Grid -->
              <h3 class="fxtm-sub-heading" style="margin-top: 36px;">Empathy Map: Priya Deshmukh</h3>
              <div class="fxtm-empathy-grid">
                <div class="empathy-quadrant">
                  <span class="quad-tag">SAYS</span>
                  <p>"I need real-time data to make quick decisions. Tariff and currency changes directly affect my revenue."</p>
                </div>
                <div class="empathy-quadrant">
                  <span class="quad-tag">THINKS</span>
                  <p>"If I catch anomalies early, I can save significant revenue. Exchange rate tracking must be automated."</p>
                </div>
                <div class="empathy-quadrant">
                  <span class="quad-tag">DOES</span>
                  <p>Logs into FXTM daily, checks throughput dashboards, sets custom alerts, and shares weekly reports with management.</p>
                </div>
                <div class="empathy-quadrant">
                  <span class="quad-tag">FEELS</span>
                  <p>Confident when insights are visual and timely. Frustrated by slow, fragmented legacy reporting tools.</p>
                </div>
              </div>
            </section>

            <!-- 4. Architecture & Storyboarding -->
            <section class="cs-section fxtm-section" id="fxtm-architecture">
              <div class="section-tag fxtm-section-tag">04 / IDEATE & ARCHITECTURE</div>
              <h2 class="section-heading">Information Architecture, Card Sorting & Storyboarding</h2>
              <p class="cs-paragraph">
                The platform is engineered around 7 cohesive functional modules identified through card sorting with telecom domain experts, establishing clear separation between real-time telemetry, policy configuration, and compliance reporting.
              </p>

              <!-- 7 Architecture Modules -->
              <div class="fxtm-modules-grid">
                ${project.architectureModules.map((m, idx) => `
                  <div class="fxtm-module-card">
                    <span class="module-num">0${idx + 1}</span>
                    <h4 class="module-title">${m.name}</h4>
                    <p class="module-desc">${m.desc}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Storyboarding Scenarios -->
              <h3 class="fxtm-sub-heading" style="margin-top: 36px;">Core User Scenarios (Storyboarding)</h3>
              <div class="fxtm-story-grid">
                <div class="fxtm-story-card">
                  <span class="story-icon">🔐</span>
                  <h4>1. Login & Access</h4>
                  <p>Analyst logs into FXTM with secure multi-factor authentication and selects their assigned country portfolio.</p>
                </div>
                <div class="fxtm-story-card">
                  <span class="story-icon">📊</span>
                  <h4>2. Dashboard Overview</h4>
                  <p>Immediate visibility into live throughput (48.2k req/s), market currency stats, and top destination revenue streams.</p>
                </div>
                <div class="fxtm-story-card">
                  <span class="story-icon">⚙️</span>
                  <h4>3. Business Rules & Alerts</h4>
                  <p>Configures custom threshold rules for voice & SMS deviations, automated routing policies, and alert webhooks.</p>
                </div>
                <div class="fxtm-story-card">
                  <span class="story-icon">📄</span>
                  <h4>4. Reports Generation</h4>
                  <p>One-click generation of executive compliance summaries and delta variance charts ready for management review.</p>
                </div>
              </div>
            </section>

            <!-- 5. Design System & Roboto -->
            <section class="cs-section fxtm-section" id="fxtm-designsystem">
              <div class="section-tag fxtm-section-tag">05 / DESIGN SYSTEM & STANDARDS</div>
              <h2 class="section-heading">Enterprise Design System, Roboto & Data Tables</h2>
              <p class="cs-paragraph">
                The visual language utilizes an authoritative Deep Indigo (\`#1E00A3\`) paired with Vibrant Electric Violet (\`#9747FF\`) to convey financial precision and modern technological capability.
              </p>

              <!-- Color Palette Grid -->
              <h3 class="fxtm-sub-heading" style="margin-top: 24px;">Color Palette & Tokens</h3>
              <div class="fxtm-palette-grid">
                <div class="fxtm-color-card" style="border-top: 4px solid #1E00A3;">
                  <strong style="color: #1E00A3;">#1E00A3</strong>
                  <span>Electric Indigo (Primary)</span>
                </div>
                <div class="fxtm-color-card" style="border-top: 4px solid #9747FF;">
                  <strong style="color: #9747FF;">#9747FF</strong>
                  <span>Vibrant Violet (Secondary)</span>
                </div>
                <div class="fxtm-color-card" style="border-top: 4px solid #5E5E5E;">
                  <strong style="color: #5E5E5E;">#5E5E5E</strong>
                  <span>Cool Neutral Slate</span>
                </div>
                <div class="fxtm-color-card" style="border-top: 4px solid #10B981;">
                  <strong style="color: #10B981;">#10B981</strong>
                  <span>Positive SLA Green</span>
                </div>
              </div>

              <!-- Typography & Components -->
              <div class="fxtm-specs-box">
                <div class="fxtm-spec-col">
                  <h4>Roboto Typography Scale</h4>
                  <p>Chosen for optimal legibility at high data density and across tabular multi-currency numerical figures:</p>
                  <ul>
                    <li><strong>32px Bold:</strong> Primary portal headers & KPI values</li>
                    <li><strong>24px SemiBold:</strong> Module subheadings & chart titles</li>
                    <li><strong>16px Medium:</strong> Table headers, tab titles & filters</li>
                    <li><strong>14px Regular:</strong> Tabular values, country names, rates & tooltips</li>
                  </ul>
                </div>
                <div class="fxtm-spec-col">
                  <h4>24+ Custom Telecom Vector Icons</h4>
                  <p>Bespoke SVG iconography crafted on an 8pt grid for instant recognition:</p>
                  <ul>
                    <li>🌐 Global Roaming & International Routes</li>
                    <li>💱 Foreign Exchange & Currency Converters</li>
                    <li>📞 Voice Call Traffic & SMS Delivery Metrics</li>
                    <li>📊 Delta Comparison & Revenue Variance</li>
                    <li>🛡️ Granular Access Control & Security Permissions</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- 6. Production High-Fidelity UI Screens -->
            <section class="cs-section fxtm-section" id="fxtm-screens">
              <div class="section-tag fxtm-section-tag">06 / PRODUCTION INTERFACES</div>
              <h2 class="section-heading">High-Fidelity Enterprise Cockpit Screens</h2>
              <p class="cs-paragraph">
                The finalized enterprise screens feature zebra-striped data tables with multi-parameter column filters, interactive market statistics widgets, and modal dialogues for editing carrier agreements.
              </p>

              <!-- Business Impact & Outcomes -->
              <h3 class="fxtm-sub-heading" style="margin-top: 36px;">Measured Business Impact & ROI</h3>
              <div class="fxtm-cards-container">
                ${project.impact.map(item => `
                  <div class="fxtm-point-card purple">
                    <span class="fxtm-point-bullet">✓</span>
                    <p>${item}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 7. Interactive Prototype & Full Board -->
            <section class="cs-section fxtm-section" id="fxtm-prototype">
              <div class="section-tag fxtm-section-tag">07 / LIVE ARTIFACTS & PRESENTATION</div>
              <h2 class="section-heading">Interactive Figma Prototype & Complete Presentation</h2>
              <p class="cs-paragraph">
                Explore the interactive Figma prototype or inspect the complete uncompressed 640 × 10,475px Ultra HD case study presentation in the built-in lightbox viewer.
              </p>

              <!-- Artifact Cards Grid -->
              <div class="fxtm-artifacts-grid">
                <div class="artifact-card-action">
                  <div class="artifact-icon">❖</div>
                  <div class="artifact-details">
                    <h4>Interactive Figma Prototype</h4>
                    <p>Experience the multi-module enterprise dashboard, currency monitors, and tariff management workflows directly in Figma.</p>
                  </div>
                  <a href="${project.figmaProtoUrl}" target="_blank" rel="noopener noreferrer" class="btn-artifact-launch">
                    <span>Open in Figma</span> ↗
                  </a>
                </div>

                <div class="artifact-card-action">
                  <div class="artifact-icon">🔍</div>
                  <div class="artifact-details">
                    <h4>Full-Length Presentation Infographic (10,475px Ultra HD)</h4>
                    <p>Inspect the complete end-to-end design presentation, research stream, personas, and UI screens in crystal-clear detail.</p>
                  </div>
                  <button class="btn-artifact-launch btn-open-lightbox-trigger" data-img="fxtm-case-study-full.png" data-title="FXTM - Full-Length Case Study Infographic (10,475px Ultra HD)">
                    <span>View Full Board</span> 🔍
                  </button>
                </div>
              </div>

              <!-- Conclusion Box -->
              <div class="fxtm-conclusion-box">
                <div class="fxtm-conclusion-inner">
                  <h3>EMPOWERING GLOBAL TELECOM INTELLIGENCE</h3>
                  <p>Engineered with enterprise rigor, foreign exchange precision, and intuitive human-centered design by <strong>Vitthal Kolpe</strong>.</p>
                </div>
              </div>
            </section>

            <!-- Next & Previous Project Switcher -->
            <div class="cs-pagination-nav rf-pagination-nav">
              <button class="nav-prev-project" id="btnPrevProject">
                <span class="dir">← PREVIOUS CASE STUDY</span>
                <strong class="proj-name" id="prevProjectName">QuikJob Mobile App</strong>
              </button>
              <button class="nav-next-project" id="btnNextProject">
                <span class="dir">NEXT CASE STUDY →</span>
                <strong class="proj-name" id="nextProjectName">CareConnect Healthcare</strong>
              </button>
            </div>
          </main>
        </div>
      </div>
    `;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCKUP_RENDERER };
}
