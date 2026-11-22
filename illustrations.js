// Vitthal Kolpe Portfolio - High-Fidelity Handcrafted SVG Illustrations & Mockups
// Styled after the reference: Clean crisp black outlines (stroke: #18181b, stroke-width: 2.2), warm cream backdrop, and vibrant orange accents (#FF6422)

const ILLUSTRATIONS = {
  // Hero section line-art illustration: Designer relaxing on orange beanbag with laptop, hanging lamp, bookshelf
  hero: `
  <svg class="hero-illustration-svg" viewBox="0 0 540 460" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hanging Ceiling Lamp -->
    <g class="hanging-lamp-group" id="lampGroup">
      <line x1="330" y1="0" x2="330" y2="75" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M305 75 L355 75 L365 105 L295 105 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Lightbulb with glow -->
      <circle cx="330" cy="115" r="9" fill="#FFB020" class="lamp-bulb" stroke="#18181B" stroke-width="2"/>
      <ellipse cx="330" cy="130" rx="35" ry="12" fill="#FF6422" fill-opacity="0.18" class="lamp-glow-field"/>
      <!-- Radiating light rays -->
      <line x1="300" y1="125" x2="285" y2="140" stroke="#FF6422" stroke-width="2" stroke-linecap="round" class="lamp-ray"/>
      <line x1="360" y1="125" x2="375" y2="140" stroke="#FF6422" stroke-width="2" stroke-linecap="round" class="lamp-ray"/>
      <line x1="330" y1="130" x2="330" y2="148" stroke="#FF6422" stroke-width="2" stroke-linecap="round" class="lamp-ray"/>
    </g>

    <!-- Bookshelf with Plant & Books (Top Right) -->
    <g class="bookshelf-group">
      <line x1="420" y1="92" x2="510" y2="92" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
      <line x1="432" y1="92" x2="432" y2="100" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="498" y1="92" x2="498" y2="100" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
      
      <!-- Books -->
      <rect x="428" y="60" width="8" height="32" rx="1.5" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <rect x="439" y="66" width="8" height="26" rx="1.5" fill="#FF6422" stroke="#18181B" stroke-width="2"/>
      <path d="M451 92 L459 63 L466 65 L458 92 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Plant in Orange Terracotta Pot -->
      <path d="M478 78 L496 78 L493 92 L481 92 Z" fill="#FF6422" stroke="#18181B" stroke-width="2" stroke-linejoin="round"/>
      <path d="M487 78 C485 64 476 60 473 54 C482 56 488 64 487 78 Z" fill="#22C55E" stroke="#18181B" stroke-width="1.8"/>
      <path d="M487 78 C489 65 498 62 501 55 C492 57 487 65 487 78 Z" fill="#16A34A" stroke="#18181B" stroke-width="1.8"/>
      <path d="M487 78 C487 60 487 50 487 46 C489 54 489 68 487 78 Z" fill="#4ADE80" stroke="#18181B" stroke-width="1.8"/>
    </g>

    <!-- Floor Shadow / Line -->
    <path d="M220 380 Q320 384 490 380" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 6"/>

    <!-- Orange Beanbag Chair (Signature shape from reference image) -->
    <g class="beanbag-group">
      <path d="M350 200 C390 190 440 220 460 270 C480 320 465 375 410 382 C340 390 280 375 260 340 C240 305 255 250 290 220 C310 202 330 205 350 200 Z" 
            fill="#FF6422" stroke="#18181B" stroke-width="3" stroke-linejoin="round" class="beanbag-main"/>
      <!-- Beanbag fold details -->
      <path d="M380 250 C410 280 415 320 405 350" stroke="#D94E14" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M430 280 C445 310 445 340 435 365" stroke="#D94E14" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M310 320 C340 350 370 355 400 350" stroke="#D94E14" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Character sitting relaxed on beanbag -->
    <g class="character-group">
      <!-- Back leg (dark/black trouser) -->
      <path d="M330 300 L320 355 L350 358 L360 305 Z" fill="#18181B" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Back shoe (orange sneaker) -->
      <path d="M315 355 L292 360 C290 368 296 372 315 372 L350 372 C355 372 356 364 350 358 Z" fill="#FF6422" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M305 365 L320 365" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

      <!-- Front Leg crossed over / bent forward -->
      <path d="M335 270 C310 285 275 305 265 330 C258 348 268 362 295 362 L325 360 C345 325 350 295 345 270 Z" fill="#18181B" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
      
      <!-- Front Sneaker (Orange with white sole) -->
      <path d="M265 348 L238 355 C233 363 240 372 258 372 L298 372 C305 372 308 362 298 358 Z" fill="#FF6422" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="236" y="369" width="62" height="4" rx="2" fill="#FFFFFF" stroke="#18181B" stroke-width="1.8"/>
      <!-- Sneaker laces -->
      <line x1="260" y1="355" x2="270" y2="352" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <line x1="264" y1="360" x2="274" y2="357" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

      <!-- Torso (White T-shirt) leaning against beanbag -->
      <path d="M335 200 C355 202 385 220 380 265 C375 285 360 295 335 292 C320 285 315 255 318 220 C320 208 328 200 335 200 Z" 
            fill="#FFFFFF" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- T-shirt collar line -->
      <path d="M346 201 C354 205 362 205 368 201" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>
      <!-- Short sleeve -->
      <path d="M365 210 L385 235 L368 248 L352 225 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>

      <!-- Arm resting forward typing on laptop -->
      <path d="M368 245 C360 260 330 265 305 260 L292 248 C310 242 345 240 368 245 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- Hand on laptop keyboard -->
      <path d="M292 248 C285 246 280 252 284 256 C288 260 298 258 305 256 Z" fill="#FFDFC4" stroke="#18181B" stroke-width="2" stroke-linejoin="round"/>

      <!-- Laptop Open on Lap -->
      <g class="laptop-group">
        <!-- Laptop Base -->
        <polygon points="252,260 325,256 318,266 242,270" fill="#E2E8F0" stroke="#18181B" stroke-width="2" stroke-linejoin="round"/>
        <!-- Laptop Screen tilted -->
        <polygon points="252,260 242,198 298,194 308,256" fill="#FFFFFF" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Screen inner display with orange sticker -->
        <polygon points="254,256 246,204 294,200 302,252" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
        <!-- Orange accent sticker/logo on laptop back -->
        <circle cx="272" cy="225" r="5" fill="#FF6422" stroke="#18181B" stroke-width="1.5"/>
      </g>

      <!-- Neck & Head -->
      <path d="M352 195 L352 205 L362 205 L362 195 Z" fill="#FFDFC4" stroke="#18181B" stroke-width="2"/>
      <!-- Head shape -->
      <path d="M345 160 C345 140 375 140 378 160 C380 180 370 195 352 195 C342 190 345 175 345 160 Z" fill="#FFDFC4" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- Wavy / Curly Black Hair (Just like reference) -->
      <path d="M342 165 C338 152 342 135 356 128 C370 120 388 128 388 145 C394 150 395 162 388 168 C388 155 380 148 370 150 C360 140 348 148 348 165 Z" 
            fill="#18181B" stroke="#18181B" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Glasses (Signature UI/UX designer look) -->
      <circle cx="352" cy="162" r="6" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <circle cx="366" cy="162" r="6" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <line x1="358" y1="162" x2="360" y2="162" stroke="#18181B" stroke-width="2"/>
      <line x1="372" y1="162" x2="378" y2="160" stroke="#18181B" stroke-width="2"/>
      <!-- Eye dots inside glasses -->
      <circle cx="353" cy="162" r="1.5" fill="#18181B"/>
      <circle cx="367" cy="162" r="1.5" fill="#18181B"/>
      <!-- Friendly smile -->
      <path d="M356 178 Q362 184 368 178" stroke="#18181B" stroke-width="2" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Floating Interactive Design Tool Badges -->
    <g class="floating-badge badge-figma" transform="translate(60, 110)">
      <rect x="0" y="0" width="105" height="38" rx="19" fill="#FFFFFF" stroke="#18181B" stroke-width="2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))"/>
      <circle cx="19" cy="19" r="9" fill="#FF6422"/>
      <text x="19" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">F</text>
      <text x="36" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#18181B">Figma Kit</text>
    </g>

    <g class="floating-badge badge-ux" transform="translate(40, 240)">
      <rect x="0" y="0" width="135" height="38" rx="19" fill="#FFFFFF" stroke="#18181B" stroke-width="2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))"/>
      <circle cx="19" cy="19" r="9" fill="#18181B"/>
      <text x="19" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#FF6422">★</text>
      <text x="36" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#18181B">6+ Yrs Exp.</text>
    </g>

    <g class="floating-badge badge-ai" transform="translate(90, 345)">
      <rect x="0" y="0" width="125" height="36" rx="18" fill="#FFF2EB" stroke="#FF6422" stroke-width="2"/>
      <text x="18" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#FF6422">⚡</text>
      <text x="36" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FF6422">AI + UX Flow</text>
    </g>
  </svg>
  `,

  // About Me Section illustration: Character smiling holding coffee mug by window with books
  about: `
  <svg class="about-illustration-svg" viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Window with Arched Top & Cloud/Sun (Just like reference) -->
    <path d="M40 180 L40 70 C40 35 75 10 115 10 C155 10 190 35 190 70 L190 180" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <line x1="115" y1="10" x2="115" y2="180" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>
    <line x1="40" y1="95" x2="190" y2="95" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>
    <!-- Sun & Cloud inside window -->
    <circle cx="75" cy="55" r="14" fill="#FF6422" fill-opacity="0.2" stroke="#FF6422" stroke-width="2"/>
    <path d="M125 70 C125 62 135 55 145 60 C150 54 162 56 166 64 C172 65 174 72 170 76 L128 76 C124 76 125 72 125 70 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="1.8"/>

    <!-- Table Desk Surface -->
    <line x1="10" y1="285" x2="370" y2="285" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>

    <!-- Stack of Books on Table (Right) -->
    <g class="books-stack">
      <rect x="250" y="265" width="85" height="18" rx="2" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <rect x="258" y="247" width="72" height="18" rx="2" fill="#FF6422" stroke="#18181B" stroke-width="2"/>
      <rect x="265" y="231" width="60" height="16" rx="2" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <!-- UX Bookmark ribbon -->
      <path d="M305 231 L305 252 L310 247 L315 252 L315 231" fill="#18181B"/>
    </g>

    <!-- Character Leaning on Desk (Centered) -->
    <g class="character-about">
      <!-- Body & Shirt -->
      <path d="M120 285 C115 240 145 220 185 215 C225 220 250 240 255 285 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- T-shirt collar -->
      <path d="M172 216 C180 224 190 224 198 216" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>

      <!-- Arms resting on table holding coffee cup -->
      <path d="M130 260 C150 252 175 252 185 265 L190 285 L125 285 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <path d="M245 260 C225 252 205 252 195 265 L190 285 L250 285 Z" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>

      <!-- Steaming Orange Coffee Mug (Signature from reference) -->
      <rect x="180" y="250" width="30" height="34" rx="4" fill="#FF6422" stroke="#18181B" stroke-width="2.2"/>
      <!-- Mug handle -->
      <path d="M210 256 C220 256 220 274 210 274" stroke="#18181B" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <!-- Hands wrapped around mug -->
      <path d="M174 256 C172 265 174 275 182 276" stroke="#18181B" stroke-width="2.2" fill="#FFDFC4" stroke-linecap="round"/>
      
      <!-- Steaming coffee vapor (Animated via CSS) -->
      <path d="M188 242 C186 235 192 230 190 222" stroke="#FF6422" stroke-width="2" stroke-linecap="round" fill="none" class="coffee-steam steam-1"/>
      <path d="M198 240 C196 233 202 227 200 218" stroke="#FF6422" stroke-width="2" stroke-linecap="round" fill="none" class="coffee-steam steam-2"/>

      <!-- Neck & Head -->
      <path d="M178 198 L178 215 L192 215 L192 198 Z" fill="#FFDFC4" stroke="#18181B" stroke-width="2"/>
      <!-- Head shape looking forward/slightly up with thoughtful expression -->
      <path d="M165 155 C165 130 205 130 205 155 C205 185 198 198 185 198 C172 198 165 185 165 155 Z" fill="#FFDFC4" stroke="#18181B" stroke-width="2.2" stroke-linejoin="round"/>
      <!-- Curly black hair -->
      <path d="M162 152 C158 135 165 120 182 115 C202 110 215 122 215 140 C220 148 218 160 210 162 C210 148 200 138 188 140 C178 135 165 142 162 152 Z" 
            fill="#18181B" stroke="#18181B" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Glasses & Face -->
      <circle cx="177" cy="158" r="7" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <circle cx="195" cy="158" r="7" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/>
      <line x1="184" y1="158" x2="188" y2="158" stroke="#18181B" stroke-width="2"/>
      <circle cx="178" cy="158" r="1.6" fill="#18181B"/>
      <circle cx="196" cy="158" r="1.6" fill="#18181B"/>
      <!-- Thoughtful smile -->
      <path d="M180 180 Q188 186 195 180" stroke="#18181B" stroke-width="2" stroke-linecap="round" fill="none"/>
    </g>
  </svg>
  `,

  // 5 Process Step Icons matching the road/step visualization from the screenshot
  processIcons: {
    discover: `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="21" r="12" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/>
        <line x1="30" y1="30" x2="40" y2="40" stroke="#FF6422" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="21" cy="21" r="5" fill="#FF6422"/>
      </svg>
    `,
    define: `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36 L12 28 L28 12 L36 20 L20 36 Z" fill="#FFF2EB" stroke="#18181B" stroke-width="3" stroke-linejoin="round"/>
        <path d="M28 12 L32 8 C34 6 38 6 40 8 C42 10 42 14 40 16 L36 20 Z" fill="#FF6422" stroke="#18181B" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="15" cy="33" r="2" fill="#18181B"/>
      </svg>
    `,
    design: `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="28" rx="5" fill="#FFF2EB" stroke="#18181B" stroke-width="3"/>
        <line x1="8" y1="18" x2="40" y2="18" stroke="#18181B" stroke-width="2"/>
        <circle cx="14" cy="14" r="2" fill="#FF6422"/>
        <circle cx="20" cy="14" r="2" fill="#18181B"/>
        <rect x="14" y="24" width="10" height="8" rx="2" fill="#FF6422"/>
        <line x1="28" y1="26" x2="34" y2="26" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="28" y1="30" x2="34" y2="30" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `,
    test: `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/>
        <circle cx="24" cy="24" r="9" stroke="#FF6422" stroke-width="2.5" stroke-dasharray="3 3"/>
        <path d="M18 24 L22 28 L30 18" stroke="#FF6422" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    deliver: `
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 38 L40 38" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
        <rect x="12" y="26" width="6" height="12" rx="1.5" fill="#18181B"/>
        <rect x="21" y="20" width="6" height="18" rx="1.5" fill="#18181B"/>
        <rect x="30" y="12" width="6" height="26" rx="1.5" fill="#FF6422"/>
        <path d="M12 20 L22 14 L30 8 L38 6" stroke="#FF6422" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="34,6 38,6 38,10" fill="#FF6422"/>
      </svg>
    `
  },

  // Authentic Tool & Skill Logos / SVGs
  tools: {
    // Official Figma 5-part brand icon
    figma: `<svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/></svg>`,
    
    // Official FigJam purple marker & badge icon
    figjam: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#9747FF"/><path d="M17 14C17 11.8 18.8 10 21 10C23.2 10 25 11.8 25 14V34C25 36.2 23.2 38 21 38C18.8 38 17 36.2 17 34V14Z" fill="#FFFFFF"/><circle cx="31" cy="16" r="6" fill="#FFC700"/><path d="M29 26L35 34H27L29 26Z" fill="#0ACF83"/></svg>`,
    
    // Official Adobe XD Icon with magenta border
    adobexd: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#2E001F" stroke="#FF61F6" stroke-width="2"/><text x="14" y="31" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="18" fill="#FF61F6">X</text><text x="27" y="31" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="18" fill="#FF61F6">d</text></svg>`,
    
    // Official Framer geometric cyan-blue icon
    framer: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#0055FF"/><path d="M14 10H34V22H24L34 34H14V22H24L14 10Z" fill="#FFFFFF"/><path d="M24 22H14V34H24V22Z" fill="#FFFFFF" fill-opacity="0.3"/><path d="M24 34H14L24 44V34Z" fill="#FFFFFF"/></svg>`,
    
    // Official Sketch multi-faceted diamond gem
    sketch: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#FFF8EE" stroke="#FDB300" stroke-width="1.5"/><polygon points="12,18 24,9 36,18 24,39" fill="#EA6C00"/><polygon points="12,18 24,9 24,39" fill="#FDB300"/><polygon points="24,9 36,18 24,39" fill="#FD8500"/><polygon points="12,18 19,18 24,39" fill="#FDB300"/><polygon points="36,18 29,18 24,39" fill="#EA6C00"/><polygon points="19,18 24,9 29,18 24,39" fill="#FFE082"/></svg>`,
    
    // Official InVision pink circle
    invision: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#FF3366"/><text x="17" y="31" font-family="Georgia, serif" font-weight="900" font-style="italic" font-size="22" fill="#FFFFFF">in</text></svg>`,
    
    // Official Zeplin golden-yellow mascot icon
    zeplin: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#FBA026"/><circle cx="24" cy="24" r="12" stroke="#FFFFFF" stroke-width="4" fill="none"/><line x1="24" y1="12" x2="24" y2="36" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/><circle cx="31" cy="18" r="2.5" fill="#FFFFFF"/></svg>`,
    
    // Official Balsamiq red wireframe face
    balsamiq: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#CC0000"/><circle cx="18" cy="20" r="3" fill="#FFFFFF"/><circle cx="30" cy="20" r="3" fill="#FFFFFF"/><path d="M17 28 Q24 35 31 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
    
    // Official Miro yellow ribbon mark
    miro: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#FFD02F"/><path d="M12 13H17L26 35H21L12 13Z" fill="#050038"/><path d="M21 13H26L35 35H30L21 13Z" fill="#050038"/><path d="M30 13H35L42 35H37L30 13Z" fill="#050038"/></svg>`,
    
    // Official Adobe Photoshop Ps
    photoshop: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#001E36" stroke="#31A8FF" stroke-width="2"/><text x="13" y="32" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="20" fill="#31A8FF">P</text><text x="26" y="32" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="20" fill="#31A8FF">s</text></svg>`,
    
    // Official Adobe Illustrator Ai
    illustrator: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#330000" stroke="#FF9A00" stroke-width="2"/><text x="13" y="32" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="20" fill="#FF9A00">A</text><text x="28" y="32" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="20" fill="#FF9A00">i</text></svg>`,
    
    // Official Microsoft 365 official 4-quadrant logo
    office365: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/><rect x="13" y="13" width="10" height="10" fill="#F25022"/><rect x="25" y="13" width="10" height="10" fill="#7FBA00"/><rect x="13" y="25" width="10" height="10" fill="#00A4EF"/><rect x="25" y="25" width="10" height="10" fill="#FFB900"/></svg>`,
    
    material: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#E8F0FE"/><path d="M24 8L10 16V32L24 40L38 32V16L24 8Z" stroke="#1A73E8" stroke-width="3" stroke-linejoin="round"/><path d="M24 8V40M10 16L38 32M38 16L10 32" stroke="#1A73E8" stroke-width="2"/></svg>`,
    htmlcss: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#FFF2EB"/><path d="M14 20L8 24L14 28M34 20L40 24L34 28M26 14L22 34" stroke="#FF6422" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    bootstrap: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="#7952B3"/><text x="24" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" text-anchor="middle">B</text></svg>`,

    // Official AI Tools Brand Logos
    // Lovable Red-Orange Gradient Heart/Spark Logo
    lovable: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="url(#lovableGrad)"/><path d="M24 16C21 12 15 13 14 18C13 23 17 28 24 34C31 28 35 23 34 18C33 13 27 12 24 16Z" fill="#FFFFFF"/><defs><linearGradient id="lovableGrad" x1="0" y1="0" x2="48" y2="48"><stop stop-color="#FF3366"/><stop offset="1" stop-color="#FF6422"/></linearGradient></defs></svg>`,
    
    // Official Uizard Neon Purple & Coral Logo
    uizard: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#0D0914"/><path d="M14 16V27C14 32.5 18.5 37 24 37C29.5 37 34 32.5 34 27V16" stroke="url(#uizardGrad)" stroke-width="4.5" stroke-linecap="round"/><circle cx="24" cy="20" r="3" fill="#FF5E62"/><defs><linearGradient id="uizardGrad" x1="14" y1="16" x2="34" y2="37"><stop stop-color="#A855F7"/><stop offset="1" stop-color="#EC4899"/></linearGradient></defs></svg>`,
    
    // Official Stitch UI logo
    stitch: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#18181B"/><path d="M16 28C16 22 20 16 26 16C32 16 33 24 26 28C19 32 20 40 26 40C32 40 33 34 33 34" stroke="#FF6422" stroke-width="4" stroke-linecap="round"/><circle cx="24" cy="24" r="3" fill="#38BDF8"/></svg>`,
    
    // Official OpenAI / ChatGPT green rosette spiral
    chatgpt: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#10A37F"/><g transform="translate(12,12) scale(0.6)"><path d="M37.5 15.5C36.8 11.2 33.3 7.8 29 7.2V11.2C31.5 11.8 33.5 13.8 34.1 16.3L37.5 15.5ZM20 2C15.2 2 11.1 5.3 10.2 10L13.8 11.2C14.4 8.2 16.9 6 20 6V2ZM7.2 19C7.8 14.7 11.3 11.3 15.6 10.6L14.7 6.8C8.9 7.8 4.4 12.3 3.4 18.1L7.2 19ZM6.5 28.5L3.1 29.3C4.1 35.1 8.6 39.6 14.4 40.6L15.3 36.8C11 36.1 7.5 32.7 6.5 28.5ZM20 38C16.9 38 14.4 35.8 13.8 32.8L10.2 34C11.1 38.7 15.2 42 20 42V38ZM37.8 29.9L34.1 28.7C33.5 31.7 31 33.9 28 33.9V37.9C32.8 37.9 36.9 34.6 37.8 29.9Z" fill="#FFFFFF"/></g></svg>`,
    
    // Official Google Gemini 4-point sparkle with official gradient
    gemini: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#1F1F1F"/><path d="M24 8C24 16.8 31.2 24 40 24C31.2 24 24 31.2 24 40C24 31.2 16.8 24 8 24C16.8 24 24 16.8 24 8Z" fill="url(#geminiOfficialGrad)"/><defs><linearGradient id="geminiOfficialGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#4285F4"/><stop offset="0.35" stop-color="#9B72CB"/><stop offset="0.7" stop-color="#D96570"/><stop offset="1" stop-color="#F29900"/></linearGradient></defs></svg>`,
    
    // Official Anthropic Claude terracotta 14-point star
    claude: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#CC785C"/><path d="M24 12L25.8 20.2L34 18.4L28.8 24L34 29.6L25.8 27.8L24 36L22.2 27.8L14 29.6L19.2 24L14 18.4L22.2 20.2L24 12Z" fill="#FFFFFF"/></svg>`,
    
    // Official Perplexity cyan/teal knot
    perplexity: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#1F2937"/><path d="M16 16L32 32M32 16L16 32M24 12V36" stroke="#22D3EE" stroke-width="3.5" stroke-linecap="round"/><circle cx="24" cy="24" r="5" stroke="#22D3EE" stroke-width="2.5" fill="none"/></svg>`,
    
    // Official Figma AI multi-color sparkle
    figmamake: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#18181B"/><path d="M24 10L27 19L36 22L27 25L24 34L21 25L12 22L21 19L24 10Z" fill="url(#figmaAiGrad)"/><circle cx="34" cy="14" r="2.5" fill="#FF7262"/><circle cx="14" cy="32" r="2" fill="#0ACF83"/><defs><linearGradient id="figmaAiGrad" x1="12" y1="10" x2="36" y2="34"><stop stop-color="#F24E1E"/><stop offset="0.3" stop-color="#FF7262"/><stop offset="0.6" stop-color="#A259FF"/><stop offset="1" stop-color="#1ABCFE"/></linearGradient></defs></svg>`,

    // Skills Icons
    ucd: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="18" r="8" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/><path d="M10 38C10 30 16 28 24 28C32 28 38 30 38 38" stroke="#FF6422" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="18" r="3" fill="#FF6422"/></svg>`,
    uxaudit: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="28" height="32" rx="4" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/><path d="M16 18L21 23L32 14" stroke="#FF6422" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="28" x2="30" y2="28" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/><line x1="16" y1="34" x2="26" y2="34" stroke="#18181B" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    userresearch: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="10" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/><line x1="28" y1="28" x2="38" y2="38" stroke="#FF6422" stroke-width="3.5" stroke-linecap="round"/><circle cx="20" cy="20" r="4" fill="#FF6422"/></svg>`,
    wireframing: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="32" height="28" rx="4" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/><line x1="8" y1="18" x2="40" y2="18" stroke="#18181B" stroke-width="2"/><line x1="20" y1="18" x2="20" y2="38" stroke="#18181B" stroke-width="2"/><circle cx="14" cy="14" r="1.5" fill="#FF6422"/></svg>`,
    usabilitytesting: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="15" stroke="#18181B" stroke-width="3" fill="#FFF2EB"/><circle cx="24" cy="24" r="8" stroke="#FF6422" stroke-width="2.5" stroke-dasharray="3 3"/><circle cx="24" cy="24" r="3" fill="#FF6422"/></svg>`,
    designsystems: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="12" height="12" rx="3" fill="#FF6422" stroke="#18181B" stroke-width="2"/><rect x="26" y="10" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/><rect x="10" y="26" width="12" height="12" rx="3" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/><rect x="26" y="26" width="12" height="12" rx="3" fill="#FFF2EB" stroke="#18181B" stroke-width="2"/></svg>`,
    microinteraction: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C12 18 18 12 24 12C30 12 36 18 36 24C36 30 30 36 24 36" stroke="#18181B" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="24" r="5" fill="#FF6422"/><path d="M30 18L38 12" stroke="#FF6422" stroke-width="3" stroke-linecap="round"/></svg>`,
    responsive: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="22" height="18" rx="3" stroke="#18181B" stroke-width="2.5" fill="#FFF2EB"/><rect x="26" y="18" width="14" height="20" rx="3" stroke="#FF6422" stroke-width="2.5" fill="#FFFFFF"/><circle cx="33" cy="34" r="1.5" fill="#FF6422"/></svg>`,
    ia: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="8" width="12" height="8" rx="2" fill="#FF6422" stroke="#18181B" stroke-width="2"/><rect x="8" y="32" width="10" height="8" rx="2" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/><rect x="20" y="32" width="10" height="8" rx="2" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/><rect x="32" y="32" width="10" height="8" rx="2" fill="#FFFFFF" stroke="#18181B" stroke-width="2"/><path d="M24 16V24M13 24H37M13 24V32M24 24V32M37 24V32" stroke="#18181B" stroke-width="2"/></svg>`,
    communication: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14H34C36 14 38 16 38 18V28C38 30 36 32 34 32H18L10 38V14Z" stroke="#18181B" stroke-width="2.5" fill="#FFF2EB"/><circle cx="20" cy="23" r="2" fill="#FF6422"/><circle cx="26" cy="23" r="2" fill="#18181B"/><circle cx="32" cy="23" r="2" fill="#FF6422"/></svg>`
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ILLUSTRATIONS };
}
