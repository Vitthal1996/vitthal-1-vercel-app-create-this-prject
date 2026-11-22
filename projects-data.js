// Vitthal Kolpe - UX Case Studies Data
// Sr. UI/UX Designer & Digital Product Designer (6 Years Experience)

const PROJECTS_DATA = [
  {
    id: "careconnect",
    title: "CareConnect Healthcare",
    tagline: "A Smart Healthcare App for Modern Care Ã¢â‚¬â€ CX and UX Case Study",
    fullTitle: "CareConnect: CX and UX Case Study",
    category: "Healthcare & Telemedicine",
    categoryKey: "healthcare",
    badge: "CX & UX Case Study",
    year: "2025",
    role: "Senior UI/UX Designer",
    roleDescription: "Design by: Vitthal Kolpe | Senior UI/UX Designer | 6 Years Experience",
    platform: "Android & iOS (Mobile First)",
    duration: "4 Months",
    team: "Project Manager, 2 Designers, 5 Developers, QA Engineer, Business Analyst",
    tools: ["Figma", "Figma Make", "Lovable", "Perplexity", "Claude AI", "ChatGPT", "Gemini AI", "Illustrator", "Photoshop"],
    figmaProtoUrl: "https://www.figma.com/proto/ISfaoN88S96rPp0Oziv311/Mobile-Health-Care?node-id=6137-3431&viewport=408%2C303%2C0.03&t=VqbTmN6iQnq0bzaB-1&scaling=min-zoom&content-scaling=fixed&page-id=6137%3A3430",
    heroImage: "careconnect-hero-preview.png",
    fullBoardImage: "careconnect-case-study-full.png",
    images: {
      hero: "careconnect-hero-preview.png",
      overview: "careconnect-overview.png",
      research: "careconnect-research.png",
      flow: "careconnect-flow.png",
      system: "careconnect-system.png",
      testing: "careconnect-testing.png",
      screens: "careconnect-screens.png",
      fullBoard: "careconnect-case-study-full.png"
    },
    summary: "CareConnect is a comprehensive mobile healthcare application designed to bridge the gap between patients and quality medical care. It provides an all-in-one platform where users can search for certified doctors by specialty, location, or rating; book in-clinic or video consultations; manage digital health records; and receive timely prescription and appointment reminders.",
    priorities: [
      { num: "01", title: "Seamless Accessibility", desc: "Enable users to book appointments or start consultations in under 3 minutes." },
      { num: "02", title: "Trust & Transparency", desc: "Provide verified doctor credentials, transparent pricing, and real patient reviews." },
      { num: "03", title: "Continuity of Care", desc: "Centralize medical history, prescriptions, and follow-ups in one secure, accessible place." }
    ],
    problemStatement: "Navigating the traditional healthcare system is stressful, time-consuming, and fragmented. Patients struggle with long waiting times, lack of transparent information about doctors, fragmented medical records, and limited access to healthcare professionals outside regular clinic hours.",
    cxGoalsTable: [
      { problem: "Fragmented Information", expectation: "Verified doctor profiles, qualifications & reviews", solution: "Comprehensive doctor profiles with ratings, credentials, and video intros" },
      { problem: "Long Waiting Times", expectation: "Guaranteed appointment slots with minimal clinic wait", solution: "Real-time slot booking with live queue tracking and estimated wait time" },
      { problem: "Inconvenient In-Person Visits", expectation: "Remote consultation for follow-ups and non-emergencies", solution: "Integrated HD video consultations with in-app chat and digital prescriptions" },
      { problem: "Scattered Health Records", expectation: "Single place to store and share past medical reports", solution: "Secure digital health vault with easy sharing to consulting doctors" },
      { problem: "Missed Follow-ups & Doses", expectation: "Timely reminders for appointments and medication", solution: "Smart notification system for medicine reminders and follow-up schedules" }
    ],
    cxObjectives: [
      { title: "Reduce Booking Friction", desc: "Streamline the end-to-end appointment booking flow to 4 steps or fewer." },
      { title: "Build Medical Trust", desc: "Surface verified credentials, patient satisfaction scores, and clinic accreditations prominently." },
      { title: "Deliver Care Continuity", desc: "Create an interconnected ecosystem linking consultation, prescription, lab tests, and follow-up." },
      { title: "Prioritize Inclusivity", desc: "Design an intuitive, accessible interface compliant with WCAG AA standards for users of all age groups." }
    ],
    researchStreams: [
      { title: "User Interviews", desc: "18 in-depth interviews with patients aged 22Ã¢â‚¬â€œ65, including chronic care patients, busy professionals, and senior citizens." },
      { title: "Survey & Quantitative", desc: "142 survey responses identifying the top pain points in scheduling, clinic visits, and teleconsultations." },
      { title: "Competitive Benchmarking", desc: "Analyzed 4 leading healthtech apps (Practo, 1mg, Apollo 24/7, Teladoc) across onboarding, booking, consultation, and records." },
      { title: "Doctor & Clinic Stakeholder Input", desc: "Consulted 8 practicing doctors to understand their scheduling constraints, patient record needs, and video consult pain points." }
    ],
    metrics: [
      { value: "73%", label: "Wait Times", desc: "Experienced frustration with unpredictable clinic waiting times exceeding 45 minutes." },
      { value: "68%", label: "Prefer Video", desc: "Preferred video consultations for routine follow-ups and minor health queries." },
      { value: "81%", label: "Doctor Ratings", desc: "Considered doctor ratings and patient reviews the #1 factor in choosing a specialist." },
      { value: "64%", label: "Lost Reports", desc: "Had lost or misplaced physical medical reports when visiting a new doctor." }
    ],
    keyFindings: [
      { value: "73%", label: "Wait Times", desc: "Experienced frustration with unpredictable clinic waiting times exceeding 45 minutes." },
      { value: "68%", label: "Prefer Video", desc: "Preferred video consultations for routine follow-ups and minor health queries." },
      { value: "81%", label: "Doctor Ratings", desc: "Considered doctor ratings and patient reviews the #1 factor in choosing a specialist." },
      { value: "64%", label: "Lost Reports", desc: "Had lost or misplaced physical medical reports when visiting a new doctor." }
    ],
    screens: [
      { title: "1. Home Dashboard & Quick Actions", description: "Clean access to doctor search, upcoming appointments, and emergency SOS." },
      { title: "2. Doctor Search & Filters", description: "Specialty, distance, rating, and consultation mode filters with verified badges." },
      { title: "3. Slot Booking & Patient Profile", description: "Seamless in-clinic or video slot selection with multi-family member switching." },
      { title: "4. In-App HD Video Room", description: "End-to-end encrypted video consult with pre-call device test and live notes." },
      { title: "5. Digital Health Vault & Rx", description: "Instant access to digital prescriptions, test reports, and 1-tap medicine orders." }
    ],
    personas: [
      {
        name: "Aditi Deshmukh",
        tagline: "The Healthcare Planner",
        age: "28",
        location: "Pune, India",
        occupation: "Senior Software Engineer",
        quote: "I need quick access to trusted doctors and clear appointment times without disrupting my busy workday.",
        bio: "Tech-savvy professional who manages health for herself and her aging parents. Values speed, clarity, and reliability. Prefers online consults for quick issues and booked slots for physical visits.",
        painPoints: [
          "Unpredictable wait times at clinics disrupt work schedule",
          "Difficult to compare doctor fees and credentials transparently",
          "Juggling parents' paper prescriptions and test reports"
        ],
        needs: [
          "Fast appointment booking with exact time slot confirmation",
          "Option for evening and weekend video consultations",
          "Digital repository for family health records"
        ]
      },
      {
        name: "Rahul Kulkarni",
        tagline: "The Caregiver",
        age: "46",
        location: "Bengaluru, India",
        occupation: "Operations Director",
        quote: "Managing healthcare for elderly parents while balancing work requires seamless coordination and dependable tools.",
        bio: "Primary caregiver managing health needs for his parents (ages 72 & 68) with chronic conditions (hypertension, diabetes). Needs regular follow-ups, medication tracking, and rapid specialist booking.",
        painPoints: [
          "Forgetting regular medication schedules for parents",
          "Coordinating follow-up appointments across multiple specialists",
          "Carrying bulky paper files to every hospital visit"
        ],
        needs: [
          "Multi-profile management under a single family account",
          "Automated medication reminders with dosage details",
          "Instant sharing of digital reports with consulting doctors"
        ]
      }
    ],
    customerJourneyStages: [
      { stage: "Awareness & Need", desc: "Patient experiences symptoms or requires regular follow-up / checkup." },
      { stage: "Discovery & Selection", desc: "Filters doctors by specialty, distance, fees, and consult mode; compares reviews." },
      { stage: "Booking & Confirmation", desc: "Selects slot (in-clinic or video), chooses patient profile, confirms booking." },
      { stage: "Consultation", desc: "Attends clinic with live queue tracker OR joins encrypted HD in-app video room." },
      { stage: "Post-Consult Care", desc: "Receives digital prescription, sets medicine reminders, books follow-up or tests." }
    ],
    videoConsultSteps: [
      { step: "01", title: "Instant Matching & Scheduled Slots", desc: "Choose instant emergency connect or scheduled time slots with verified specialists." },
      { step: "02", title: "Pre-Consult Triage & Vitals", desc: "Input symptoms, allergies, and upload previous reports before entering the call." },
      { step: "03", title: "HD In-App Video Room", desc: "End-to-end encrypted, doctor-patient exclusive video room with live audio/video test." },
      { step: "04", title: "Live Prescription Generation", desc: "Doctor writes and digitally signs verified prescription during or immediately following consult." },
      { step: "05", title: "Post-Consult & 1-Click Pharmacy", desc: "Summary delivered instantly to health vault with 1-click home delivery medicine order." }
    ],
    informationArchitecture: [
      { module: "Home / Dashboard", desc: "Quick action tiles, upcoming appointments, emergency SOS, vitals summary." },
      { module: "Doctor Search & Discovery", desc: "Filter by specialty, distance, availability, consultation mode, language, fee." },
      { module: "Doctor Profile", desc: "Verified badge, qualifications, experience, reviews, consultation fees, available slots." },
      { module: "Appointment Booking", desc: "Mode selection (clinic/video), date/time picker, patient switcher, reason for visit." },
      { module: "Teleconsultation", desc: "In-app video/audio calling, chat, document sharing, digital waiting room." },
      { module: "Digital Health Vault", desc: "E-prescriptions, lab test results, immunization records, document scanner." },
      { module: "Pharmacy & Lab Orders", desc: "1-click medicine ordering from Rx, home lab test booking, order tracking." },
      { module: "Profile & Family Management", desc: "Family member profiles, insurance card storage, payment methods, reminders." }
    ],
    whyItMatters: [
      { title: "Accessibility First", desc: "Designed for high legibility, high contrast, and simple tap targets across all age groups." },
      { title: "Cognitive Load Reduction", desc: "Progressive disclosure guides users step-by-step through clinical booking without overload." },
      { title: "Trust Engineering", desc: "Verified badges, hospital affiliations, council registration numbers, and transparent reviews." },
      { title: "Clinical Continuity", desc: "Linking prescriptions directly to medicine reminders and follow-up slots." },
      { title: "Data Privacy & Compliance", desc: "HIPAA-aligned design patterns with encrypted health records and patient-controlled sharing." }
    ],
    uxAuditPrioritization: [
      { level: "P0 Ã¢â‚¬â€ High Impact / Low Effort", items: "Streamlined 3-step appointment booking, clear doctor fee breakdown, instant SMS/push confirmation" },
      { level: "P1 Ã¢â‚¬â€ High Impact / High Effort", items: "In-app encrypted video consultation room, digital health vault with document scanner, live clinic queue tracker" },
      { level: "P2 Ã¢â‚¬â€ Low Impact / Low Effort", items: "Dark mode toggle, favorite doctors list, quick re-order of recurring medicines" },
      { level: "P3 Ã¢â‚¬â€ Low Impact / High Effort", items: "AI symptom checker integration, multi-language audio prompts, health insurance claim automation" }
    ],
    designPrinciples: [
      { title: "Clarity Over Novelty", desc: "Medical interfaces must be instantly understandable Ã¢â‚¬â€ clear labels, recognizable iconography, unambiguous states." },
      { title: "Empathetic Microcopy", desc: "Reassuring, friendly language that reduces medical anxiety during symptom description and booking." },
      { title: "Effortless Hierarchy", desc: "Critical actions (Book Now, Join Call, View Rx) always placed in primary thumb zone." },
      { title: "Robust Error Prevention", desc: "Dual confirmation for appointment cancellations, slot clash detection, explicit payment breakdown." },
      { title: "Accessible for All", desc: "48px+ touch targets, 4.5:1 text contrast minimum, scalable fonts for elderly caregivers." },
      { title: "Seamless Offline Resiliency", desc: "Cache upcoming appointments and emergency contacts for zero-connectivity access." }
    ],
    serviceBlueprint: {
      frontstage: "Doctor search, slot selection, in-app video room with waiting room status, instant digital Rx PDF generation",
      backstage: "Doctor availability schedule portal, clinic queue management dashboard, patient medical vault review, clinical Rx template submission",
      support: "Real-time slot locking engine, SMS/WhatsApp gateway, WebRTC encrypted video server, AES-256 cloud medical vault"
    },
    colorPalette: [
      { name: "Deep Navy", hex: "#17324D", role: "Primary / Authority & Clinical Stability" },
      { name: "Healthcare Blue", hex: "#2457C5", role: "Primary Interactive / Medical Expertise" },
      { name: "Teal", hex: "#087F70", role: "Secondary / Wellness & Positive Confirmation" },
      { name: "Pale Blue", hex: "#E8F2FF", role: "Accent / Soft Card Backgrounds" },
      { name: "Mint Green", hex: "#DDF6EF", role: "Success / Verified Badges & Active Status" },
      { name: "Off-White", hex: "#F7F9FC", role: "Background / Sterile & Modern Surface" }
    ],
    usabilityTestingTasks: [
      { task: "Task 1: Find a cardiologist with 4.5+ rating within 5km and book a Saturday morning slot", completion: "100%", time: "1m 42s", feedback: "Instant filter pills and clear fee display eliminated hesitation." },
      { task: "Task 2: Switch patient profile from Self to Father and upload an existing blood test report", completion: "91.6%", time: "58s", feedback: "Explicit 'Add Family Member' button directly in booking step reduced friction." },
      { task: "Task 3: Join a scheduled video consultation and access the doctor's in-call notes", completion: "100%", time: "32s", feedback: "Pre-call device test screen gave reassurance that mic and camera were working." },
      { task: "Task 4: Locate the post-consult digital prescription and set a daily medicine reminder", completion: "91.6%", time: "1m 15s", feedback: "1-tap 'Set Daily Reminder' from Rx saved significant manual entry time." }
    ],
    cxFramework: [
      { metric: "System Usability Scale (SUS)", value: "86.4 / 100", grade: "Grade A (Top 10th percentile)" },
      { metric: "Booking Completion Time", value: "1m 38s", grade: "-60.8% faster than 4m 10s baseline" },
      { metric: "Customer Satisfaction (CSAT)", value: "4.8 / 5.0", grade: "Post-test usability survey" },
      { metric: "Booking Error Rate", value: "< 4.2%", grade: "Reduced slot clash & entry errors" }
    ],
    expectedImpact: [
      { metric: "Booking Drop-off", result: "Reduced from 38% to 14%", desc: "Streamlined 3-step checkout flow" },
      { metric: "Video Consult Adoption", result: "42% Shift", desc: "Follow-ups moved from clinic to teleconsult" },
      { metric: "Family Engagement", result: "3.2x Higher Retention", desc: "Multi-profile household accounts" },
      { metric: "Support Inquiries", result: "-52% Ticket Volume", desc: "Live calendar sync prevents clashes" }
    ],
    keyLearnings: [
      "Healthcare UX demands empathy over embellishment: High-stress moments require extreme simplicity, zero ambiguity, and calming visual rhythm.",
      "Caregivers are the unsung power users: Designing first-class family profile switching transformed the app from an individual tool into a household health hub.",
      "Pre-consult reassurance is as critical as the consultation: Introducing a pre-call tech check and live queue counter dramatically alleviated patient anxiety.",
      "The prescription is the bridge to retention: Seamlessly converting doctor prescriptions into actionable medicine reminders and pharmacy orders drives sustained daily engagement."
    ]
  },
  {
    id: "illuminati",
    title: "Illuminati Energy Drink",
    tagline: "The Hidden Power Within Ã¢â‚¬â€ Web Design & UI/UX Case Study",
    fullTitle: "ILLUMINATI Energy Drink: UX Case Study",
    category: "E-Commerce & Branding",
    categoryKey: "ecommerce",
    badge: "UX Case Study",
    year: "2025",
    role: "UI/UX Designer",
    roleDescription: "As the Experience designer for this project I was responsible for both strategies and Visual Design.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    figmaProtoUrl: "https://www.figma.com/proto/wb2VKVQOIrrklh2lq9Q3k8/Portfolio?node-id=1140-4704&viewport=12%2C-279%2C0.05&t=LsVBBN7Mt9tKuXGj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1001%3A2&page-id=0%3A1",
    heroImage: "illuminati-hero-preview.png",
    fullBoardImage: "illuminati-case-study-full.png",
    images: {
      hero: "illuminati-hero-preview.png",
      process: "illuminati-process.png",
      research: "illuminati-research.png",
      personas: "illuminati-personas.png",
      ideation: "illuminati-ideation.png",
      designSystem: "illuminati-design-system.png",
      screens: "illuminati-screens.png",
      feedback: "illuminati-feedback.png",
      fullBoard: "illuminati-case-study-full.png"
    },
    summary: "At Illuminati Energy Drink, we believe energy is more than just fuel Ã¢â‚¬â€ it's a hidden power waiting to be unlocked. Inspired by the mystery and boldness of the Illuminati name, our mission is to create a drink that energizes both the body and the mind. Crafted with premium ingredients, refreshing flavours, and a vision to keep you focused and unstoppable, Illuminati is more than an energy drink Ã¢â‚¬â€ it's a lifestyle.",
    metrics: [
      { label: "Transparent Ingredients", value: "78%", desc: "Users demand clear, detailed ingredient transparency" },
      { label: "Prefer Clean Navigation", value: "72%", desc: "Respondents expect effortless, intuitive website browsing" },
      { label: "Modern Premium Brand", value: "70%", desc: "Preference for premium lifestyle branding over generic mass products" },
      { label: "Authentic Reviews Impact", value: "65%", desc: "Customer reviews and testimonials directly build purchase trust" }
    ],
    overview: "At Illuminati Energy Drink, we believe energy is more than just fuel Ã¢â‚¬â€ it's a hidden power waiting to be unlocked. Inspired by the mystery and boldness of the Illuminati name, our mission is to create a drink that energizes both the body and the mind. Crafted with premium ingredients, refreshing flavours, and a vision to keep you focused and unstoppable, Illuminati is more than an energy drink Ã¢â‚¬â€ it's a lifestyle. Whether you're an athlete, a student, a professional, or a dreamer, every sip brings you closer to \"The Hidden Power Within.\"",
    uxGoals: [
      "Communicate the brand's story, values, and uniqueness with a strong visual identity.",
      "Showcase product details like ingredients, flavours, and benefits with transparency and appeal.",
      "Build trust and credibility through authentic customer reviews and testimonials.",
      "Create a seamless navigation flow that guides users effortlessly from curiosity to action.",
      "Strengthen the brand tagline \"The Hidden Power Within\" through design and content."
    ],
    problemStatement: "Energy drink brands often struggle to create a digital presence that goes beyond flashy visuals. While many existing websites highlight bold branding, they frequently lack transparency about ingredients, fail to engage users with interactive storytelling, and do not provide a seamless navigation experience. This creates a gap between what users expect Ã¢â‚¬â€ clarity, trust, and excitement Ã¢â‚¬â€ and what they actually find online.",
    problemSolutions: "The Illuminati Energy Drink website was designed with a focus on clarity, transparency, and engagement. Key solutions included a clear site structure, transparent ingredient display, interactive flavour showcase, authentic customer reviews, and a bold visual identity aligned with the brand's tagline \"The Hidden Power Within.\" Seamless navigation, strong CTAs, and a mobile-first responsive design ensured accessibility, while usability testing refined the overall experience into a polished, user-friendly platform.",
    designProcessSteps: [
      { num: "01", name: "Understand", sub: "User Research Ã¢â‚¬Â¢ User Interviews Ã¢â‚¬Â¢ Competitive Analysis" },
      { num: "02", name: "Define", sub: "Personas Ã¢â‚¬Â¢ Empathy Map Ã¢â‚¬Â¢ Journey Map" },
      { num: "03", name: "Ideate", sub: "User Flow Ã¢â‚¬Â¢ Story Boarding Ã¢â‚¬Â¢ Information Architecture" },
      { num: "04", name: "Design", sub: "Wireframe Ã¢â‚¬Â¢ Visual Design Ã¢â‚¬Â¢ Prototype" },
      { num: "05", name: "Test", sub: "Feedback Ã¢â‚¬Â¢ Conclusion Ã¢â‚¬Â¢ Future Concept" }
    ],
    targetAudience: [
      { title: "Young Professionals", desc: "Individuals managing busy work schedules who need focus and stamina throughout the day." },
      { title: "Students and Learners", desc: "College and university students looking for energy and concentration during study sessions and exams." },
      { title: "Athletes & Fitness Enthusiasts", desc: "Sports players, gym-goers, and fitness lovers who require an energy boost for performance and recovery." },
      { title: "Gamers & Creators", desc: "People spending long hours gaming, streaming, or creating content who need sharp focus and endurance." },
      { title: "Night Owls & Travelers", desc: "Individuals working late shifts, traveling frequently, or staying up late who depend on sustained energy." }
    ],
    qualitativeResearch: [
      { label: "Brand Perception", desc: "Users preferred energy drinks that felt premium, authentic, and trustworthy, rather than generic or mass-produced." },
      { label: "Health Consciousness", desc: "Many participants expressed concern over artificial ingredients and sugar levels, highlighting a need for transparency and healthier alternatives." },
      { label: "Emotional Connection", desc: "Users associated energy drinks with motivation, confidence, and performance. They wanted a product and brand story that inspired them." },
      { label: "Digital Experience", desc: "Respondents emphasized the importance of a modern, visually striking, and easy-to-navigate website where information about ingredients, flavors, and benefits was clear and accessible." },
      { label: "Social Proof", desc: "Customer reviews, community feedback, and testimonials were cited as highly influential in building trust and purchase intent." }
    ],
    userInterviews: {
      habits: [
        { q: "01", text: "How often do you consume energy drinks?" },
        { q: "02", text: "In what situations do you usually drink them (work, study, gym, travel, etc.)?" },
        { q: "03", text: "What do you expect from an energy drink?" }
      ],
      concerns: [
        { q: "04", text: "What factors influence your choice of energy drink (taste, ingredients, brand, price, etc.)?" },
        { q: "05", text: "Do you have any concerns about energy drinks (e.g., health, sugar, side effects)?" },
        { q: "06", text: "What makes you trust or avoid a particular brand?" }
      ],
      digital: [
        { q: "07", text: "Have you ever visited an energy drink brand's website? If yes, what did you like/dislike?" },
        { q: "08", text: "What information would you like to see on an energy drink website (ingredients, flavors, reviews, etc.)?" },
        { q: "09", text: "How important are design, visuals, and brand storytelling for you when exploring a product online?" }
      ],
      emotional: [
        { q: "07", text: "How should an energy drink brand make you feel?" },
        { q: "08", text: "If you could describe your ideal energy drink experience in one word, what would it be?" }
      ]
    },
    competitiveAnalysis: [
      { criteria: "Branding", redBull: "9/10 Ã¢â‚¬â€œ Strong global identity", monster: "8/10 Ã¢â‚¬â€œ Youth-focused edgy", gatorade: "7/10 Ã¢â‚¬â€œ Sports-oriented", illuminati: "8/10 Ã¢â‚¬â€œ Premium & modern" },
      { criteria: "Ingredient Transparency", redBull: "5/10 Ã¢â‚¬â€œ Limited clarity", monster: "4/10 Ã¢â‚¬â€œ Not highlighted", gatorade: "6/10 Ã¢â‚¬â€œ Some details", illuminati: "9/10 Ã¢â‚¬â€œ Full transparency" },
      { criteria: "Lifestyle Appeal", redBull: "9/10 Ã¢â‚¬â€œ Adventure & culture", monster: "8/10 Ã¢â‚¬â€œ Extreme sports vibe", gatorade: "5/10 Ã¢â‚¬â€œ Functional only", illuminati: "8/10 Ã¢â‚¬â€œ Balanced lifestyle positioning" },
      { criteria: "Website Usability", redBull: "7/10 Ã¢â‚¬â€œ Engaging but cluttered", monster: "6/10 Ã¢â‚¬â€œ Bold, less clarity", gatorade: "8/10 Ã¢â‚¬â€œ Clean & simple", illuminati: "9/10 Ã¢â‚¬â€œ User-friendly & premium" },
      { criteria: "Flavor Variety", redBull: "6/10 Ã¢â‚¬â€œ Limited options", monster: "9/10 Ã¢â‚¬â€œ Wide variety", gatorade: "5/10 Ã¢â‚¬â€œ Few options", illuminati: "7/10 Ã¢â‚¬â€œ Selected unique flavors" }
    ],
    personas: [
      {
        name: "Karan Sanas",
        role: "Fitness Enthusiast & Personal Trainer",
        location: "Pune",
        age: "26",
        quote: "I prefer products that align with a healthy, active lifestyle. I need clean, natural energy before workouts.",
        bio: "Karan works as a personal trainer and spends most of his time at the gym or engaging with clients. He consumes energy drinks before workouts and during long training sessions to maintain focus and stamina. He prefers products that align with a healthy, active lifestyle.",
        goals: [
          "Boost energy and focus during workouts.",
          "Choose a brand that feels premium and trustworthy.",
          "Find products with natural ingredients and transparency."
        ],
        painPoints: [
          "Distrust of brands that hide nutritional details.",
          "Feels most energy drinks cause jitters or crashes.",
          "Finds existing brand websites cluttered and not informative."
        ],
        traits: [
          "Active, disciplined, and health-conscious.",
          "Values quality and authenticity over cheap options.",
          "Influenced by modern branding and lifestyle appeal."
        ],
        needs: [
          "Easy-to-read ingredient information.",
          "A clean, premium design reflecting the brand's identity.",
          "Authentic reviews and flavor details to build trust."
        ],
        empathy: {
          think: ["I need clean, natural energy before workouts.", "Most brands hide what's inside the can.", "I want a product that boosts stamina without side effects."],
          feel: ["Motivated and disciplined, but cautious about health risks.", "Frustrated with brands that cause jitters and crashes.", "Excited when a brand feels premium and performance-focused."],
          do: ["Consumes energy drinks before workouts.", "Reads labels and brand websites carefully.", "Shares experiences with fitness peers."],
          say: ["I check ingredients before I buy.", "I recommend products that actually work to my clients.", "Energy should feel smooth, not overwhelming."]
        }
      },
      {
        name: "Ananya Mehta",
        role: "Marketing Executive",
        location: "Hyderabad",
        age: "24",
        quote: "Healthy, transparent brands feel more trustworthy. Design and storytelling matter when I choose a product.",
        bio: "Ananya works in a fast-paced corporate environment where deadlines and long hours are common. She often turns to energy drinks during late-night projects and client presentations. She's health-conscious, socially active, and influenced by modern, lifestyle-driven brands.",
        goals: [
          "Stay energized and focused during long workdays.",
          "Choose a drink that feels clean, safe, and reliable.",
          "Support brands that align with her modern and aspirational lifestyle."
        ],
        painPoints: [
          "Overwhelmed by energy drink options with flashy branding but little substance.",
          "Concerned about sugar levels and artificial ingredients.",
          "Finds most brand websites lacking in clarity and trust-building content."
        ],
        traits: [
          "Ambitious, modern, and socially connected.",
          "Seeks balance between work, health, and lifestyle.",
          "Responds positively to aesthetic branding and storytelling."
        ],
        needs: [
          "Transparent details about ingredients and benefits.",
          "A sleek, user-friendly design with modern visuals.",
          "Authentic customer reviews to build confidence in the brand."
        ],
        empathy: {
          think: ["I need focus and stamina for long workdays.", "Healthy, transparent brands feel more trustworthy.", "Design and storytelling matter when I choose a product."],
          feel: ["Ambitious but stressed with workload.", "Health-conscious and cautious about sugar intake.", "Drawn to aspirational, modern lifestyle branding."],
          do: ["Consumes energy drinks during work and late-night projects.", "Visits websites/social media before trying new products.", "Shares positive experiences within her social circle."],
          say: ["I don't trust flashy brands without real details.", "Reviews really influence what I buy.", "I prefer brands that feel clean and premium."]
        }
      }
    ],
    persona: {
      name: "Karan Sanas",
      role: "Fitness Enthusiast & Personal Trainer",
      location: "Pune",
      age: "26",
      quote: "I prefer products that align with a healthy, active lifestyle. I need clean, natural energy before workouts.",
      goals: [
        "Boost energy and focus during workouts.",
        "Choose a brand that feels premium and trustworthy.",
        "Find products with natural ingredients and transparency."
      ],
      frustrations: [
        "Distrust of brands that hide nutritional details.",
        "Feels most energy drinks cause jitters or crashes.",
        "Finds existing brand websites cluttered and not informative."
      ]
    },
    userJourney: [
      { stage: "Awareness", action: "Sees Illuminati on Instagram ad Ã°Å¸â€œÂ±", thoughts: "\"Looks premium, different from others.\"", feelings: "Ã°Å¸Â¤â€ Curious", opportunities: "Highlight bold branding + lifestyle appeal" },
      { stage: "Exploration", action: "Visits website Ã°Å¸â€™Â»", thoughts: "\"I need to check ingredients & benefits.\"", feelings: "Ã°Å¸Â§ï¿½ Interested but cautious", opportunities: "Provide clear navigation + transparency" },
      { stage: "Consideration", action: "Reads details, reviews Ã¢Ëœâ€¦", thoughts: "\"Feels trustworthy and modern.\"", feelings: "Ã°Å¸ËœÅ  Confident", opportunities: "Use social proof + authentic reviews" },
      { stage: "Decision", action: "Tries drink during late-night project Ã¢Ëœâ€¢", thoughts: "\"Might help me focus without crash.\"", feelings: "Ã°Å¸ËœÆ’ Excited", opportunities: "Strong CTA: \"Order Now / Find Near You\"" },
      { stage: "Advocacy", action: "Shares experience on social media Ã°Å¸â€œÂ¢", thoughts: "\"This brand gets young professionals.\"", feelings: "Ã¢ï¿½Â¤Ã¯Â¸ï¿½ Loyal", opportunities: "Encourage UGC + community engagement" }
    ],
    storyboardPanels: [
      { num: 1, text: "\"What's this Illuminati energy drink? Looks premium.\"" },
      { num: 2, text: "\"Let me check the ingredients, I don't want anything unhealthy.\"" },
      { num: 3, text: "\"Wow, people seem to love this. The flavours look refreshing.\"" },
      { num: 4, text: "\"This will help me focus for my late-night projects.\"" },
      { num: 5, text: "\"Finally, a clean energy drink that actually works!\"" }
    ],
    informationArchitecture: [
      { section: "About Us", items: ["Brand Story", "Mission & Vision", "The Idea Behind Illuminati"] },
      { section: "Ingredients", items: ["Transparency in Sourcing", "Health Benefits", "Clean Energy Promise"] },
      { section: "Flavours", items: ["Strawberry", "Lemon", "Mango", "Blueberry"] },
      { section: "Reviews", items: ["Testimonials", "Ratings", "Photo/Video Reviews"] },
      { section: "Contact Us", items: ["Form", "Support", "Social Media Links"] },
      { section: "Footer", items: ["Quick Links", "Privacy Policy", "Newsletter Signup"] }
    ],
    logoDetails: {
      about: "The Illuminati Energy Drink logo symbolizes mystery, focus, and power. The triangular shape with a central eye conveys awareness and clarityÃ¢â‚¬â€reflecting the drink's promise to energize both body and mind. The bold green hue represents vitality, freshness, and a clean energy source, aligning with the brand's commitment to health and transparency.",
      primaryShape: "Triangle with an eye Ã¢â‚¬â€ symbolizes power, focus, and energy.",
      colorPalette: "Green (#E0E600) + Black Ã¢â‚¬â€ freshness, vitality, and bold contrast.",
      style: "Minimal yet symbolic, striking balance between mystery and modern energy branding.",
      usage: "Works across packaging, website, merchandise, and social media, maintaining strong brand recall.",
      creationSteps: [
        "Concept Ideation: Start with keywords: energy, focus, clarity, mystery, boldness. Sketch rough triangular and eye-based concepts.",
        "Shape Design: Use a triangle to represent strength and stability; place the eye inside to symbolize vision and awareness.",
        "Color Selection: Apply #4BB200 green as the primary color for freshness, paired with black for contrast and boldness.",
        "Detailing: Add layered triangular outlines for depth and dimension, while keeping the form clean and scalable.",
        "Digital Rendering: Finalize in tools like Illustrator or Photoshop, ensuring versions for print, digital, and small-scale use."
      ]
    },
    typography: {
      name: "Nunito Sans",
      desc: "Nunito Sans is a modern, clean, and highly legible sans-serif typeface designed for versatility. Its balanced curves and smooth edges give a friendly yet professional look, making it ideal for digital interfaces and branding."
    },
    colors: [
      { hex: "#E0E600", name: "Neon Lime" },
      { hex: "#4BB200", name: "Primary Green" },
      { hex: "#000000", name: "Black" },
      { hex: "#7B7B7B", name: "Gray" },
      { hex: "#C8C6C6", name: "Light Gray" },
      { hex: "#FFFFFF", name: "White" }
    ],
    componentDarkMatter: "Dive into the unknown with a bold fusion of dark berries and blackcurrant, engineered for those who operate beyond the limits of ordinary. This isn't your everyday energy drink Ã¢â‚¬â€ it's a signal booster for the deep thinkers, code breakers, and midnight creators. Crafted for precision focus, creative surges, and those moments when silence becomes your superpower.",
    customerTestimonials: [
      {
        title: "Fuel for Endless Hours!",
        quote: "Illuminati Energy Drink keeps me going strong through long working hours. The refreshing taste is uplifting, and the best part is the steady energy without any crash. It's the perfect partner when I need focus, stamina, and a clear mind all day long.",
        author: "Prasad Deokar",
        stars: 5
      },
      {
        title: "Balance in Every Sip!",
        quote: "What I love most about Illuminati is its ability to energize while keeping me calm and alert. It doesn't overwhelm but instead gives a refreshing boost that lasts. For me, it's the perfect companion to stay focused, active, and fresh throughout the day.",
        author: "Joel Francis",
        stars: 5
      }
    ],
    screens: [
      {
        title: "1. Homepage & Hero (3D Can Experience)",
        description: "Illuminati Energy Drink is crafted to awaken hidden potential and fuel your mind and body. Blended with powerful natural ingredients.",
        type: "hero"
      },
      {
        title: "2. About Us (Not Just a Drink. A Signal.)",
        description: "We are not a brand. We are a movement powered by the restless, the awakened, the ones who see beyond the surface.",
        type: "about"
      },
      {
        title: "3. Ingredients (Transparency in Sourcing)",
        description: "Ingredients are whispers of hidden power: Taurine, Caffeine, Cyanocobalamin (B12), Niacinamide (B3), Pyridoxine (B6), Riboflavin (B2), Maltodextrin.",
        type: "ingredients"
      },
      {
        title: "4. Flavors (Dark Matter & Unique Blends)",
        description: "Each flavor is a key to a different kind of power: Dark Matter (dark berries and blackcurrant), Strawberry, Lemon, Mango, Blueberry.",
        type: "flavors"
      },
      {
        title: "5. Customer Reviews & Social Proof",
        description: "Voices of those who've stirred the spirit Ã¢â‚¬â€ discover authentic experiences and ratings from Prasad Deokar, Joel Francis, and customers.",
        type: "reviews"
      },
      {
        title: "6. Contact Us (Decode Your Potential)",
        description: "We don't do small talk Ã¢â‚¬â€ but if you've got real questions, real ideas, or want to collaborate with the cult, we're listening.",
        type: "contact"
      }
    ],
    clientFeedback: "I'm Very Happy With The Design Of The Illuminati Website. The Layout Is Clean, Intuitive, And Visually Bold, Capturing The Energy Of Our Brand Perfectly. The Idea Of Including 3D Product Models And Subtle Animations Makes The Design Feel Modern And Premium, Giving Users An Immersive Experience While Exploring Flavours And Ingredients. This Creative Touch Adds Uniqueness, Making Illuminati Stand Out While Keeping The Site Both Functional And Engaging. Ã¢Å¡Â¡Ã°Å¸ï¿½Â·Ã¢Å“Â¨\n\nA Big Thank You To You For Your Hard Work, Creativity, And Attention To Detail In Bringing This Vision To Life. Your Efforts Have Truly Elevated The Brand And I Deeply Appreciate It. Ã°Å¸â„¢ï¿½Ã°Å¸â€˜ï¿½",
    devFeedback: "Working With You On The Illuminati Website Was A Smooth And Collaborative Experience. The Wireframes And Design Guidelines You Provided Were Clear, Detailed, And Easy To Translate Into Development. The Consistency In Typography, Color Palette, And Component Design Helped Us Maintain Uniformity Across The Site, While Your Attention To Usability Ensured A Seamless User Journey. The Inclusion Of Ideas Like 3D Models And Animations Was Exciting And Gave Us Room To Push Creativity With Modern Technologies. Overall, Your Designs Made Our Job Easier And Elevated The Final Product Into Something We're Proud To Deliver.\n\nThank You For Your Dedication And TeamworkÃ¢â‚¬â€It Made The Whole Process Enjoyable And Successful. Ã°Å¸â€˜Â©Ã¢â‚¬ï¿½Ã°Å¸â€™Â»Ã¢Å¡Â¡Ã°Å¸â€˜ï¿½",
    conclusion: "THANK YOU FOR SCROLLING"
  },
  {
    id: "globicall",
    title: "Globi Call",
    tagline: "A Smart Calling App Redefining Communication Ã¢â‚¬â€ UX Case Study",
    fullTitle: "Globi Call: Mobile Application UX Case Study",
    category: "VoIP & Telecom App",
    categoryKey: "telecom",
    badge: "UX Case Study",
    year: "2025",
    role: "Senior UI/UX Designer",
    roleDescription: "Design by: Vitthal Kolpe | Senior UI/UX Designer | 6 Years Experience",
    platform: "Android & iOS (Mobile Application)",
    duration: "3 Months",
    team: "Lead Product Designer, Mobile Developers (Flutter/iOS), VoIP Backend Engineer, QA Engineer",
    tools: ["Figma", "Illustrator", "Photoshop", "User Testing"],
    figmaProtoUrl: "https://www.figma.com/proto/wb2VKVQOIrrklh2lq9Q3k8/Portfolio?node-id=1140-2755&viewport=12%2C-279%2C0.05&t=LsVBBN7Mt9tKuXGj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1001%3A2&page-id=0%3A1",
    heroImage: "globicall-hero-preview.png",
    fullBoardImage: "globicall-case-study-full.png",
    images: {
      hero: "globicall-hero-preview.png",
      overview: "globicall-overview.png",
      research: "globicall-research.png",
      personas: "globicall-personas.png",
      flow: "globicall-flow.png",
      system: "globicall-system.png",
      screens: "globicall-screens.png",
      fullBoard: "globicall-case-study-full.png"
    },
    summary: "Globicall is a smart calling app that lets you make calls from any number to any number with a seamless and crystal-clear calling experience. It offers precise call history, effortless contact management, and easy account customization. With a secure wallet system, recharging becomes quick and hassle-free, making communication more reliable and convenient than ever.",
    projectOverview: "Globicall is a smart and user-friendly mobile application designed to redefine the calling experience. It allows users to make calls from any number to any number with complete flexibility, while ensuring a seamless and crystal-clear calling experience. With a detailed and precise call history, users can easily track and manage their communication. The app makes contact management effortless, enabling quick creation, editing, and access to all contacts. Users can also customize their accounts with ease, ensuring a personalized experience. Additionally, Globicall offers a simple and secure wallet system where recharging is fast and hassle-free. Built with modern design and smooth navigation, Globicall combines functionality, convenience, and reliability into one powerful calling solution.",
    uxGoals: [
      { num: "01", title: "Deliver a Seamless Calling Experience", desc: "Ensure crystal-clear, lag-free calls that build trust and reliability in communication." },
      { num: "02", title: "Simplify Navigation & Usage", desc: "Design an intuitive interface that helps users access features quickly without confusion." },
      { num: "03", title: "Enhance Contact & Call Management", desc: "Provide precise call history and effortless tools to create, edit, and organize contacts." },
      { num: "04", title: "Ensure Security & Trust", desc: "Protect user data with strong privacy controls and smart fraud protection measures." },
      { num: "05", title: "Enable Hassle-Free Wallet Recharge", desc: "Offer a simple, secure, and quick wallet recharge process for uninterrupted usage." }
    ],
    problemStatement: "In today's digital world, people face increasing challenges with unknown calls, spam, and fraudulent activities that disrupt communication and compromise privacy. Existing caller identification apps often feel cluttered with ads, complex navigation, and limited personalization, leaving users frustrated. Additionally, managing contacts, tracking call history, and handling wallet recharges are not always smooth, leading to a fragmented user experience.",
    problemSolutions: "Globicall addresses these issues by delivering a seamless and crystal-clear calling experience supported by a clean, intuitive interface. The app simplifies navigation, enabling users to access calls, contacts, and features effortlessly. With detailed call history and smart contact management, users gain full control over their communication. Strong privacy settings and advanced spam protection ensure security and trust, while a quick, secure wallet recharge system adds convenience. Together, these features create a smooth, reliable, and user-friendly calling solution tailored to modern needs.",
    designProcess: [
      { name: "Understand", sub: ["User Research", "User Interviews", "Competitive Analysis"] },
      { name: "Define", sub: ["Personas", "Empathy Map", "Journey Map"] },
      { name: "Ideate", sub: ["User Flow", "Story Boarding", "Information Architecture"] },
      { name: "Design", sub: ["Wireframe", "Visual Design", "Prototype"] },
      { name: "Test", sub: ["Feedback", "Conclusion", "Future Concept"] }
    ],
    qualitativeResearch: {
      title: "Qualitative Research",
      summary: "Revealed that most participants are frustrated by frequent spam and fraud calls, and they want reliable caller identification without intrusive ads.",
      painPoints: [
        "Difficulty in trusting unknown numbers.",
        "Existing apps are often cluttered and not easy to navigate.",
        "Concerns about privacy and data misuse.",
        "Complexity in managing contacts and call history.",
        "Hassles in wallet recharges and payment processes."
      ],
      userExpectations: [
        "A simple, intuitive UI with minimal distractions.",
        "One-tap actions for blocking, reporting, and managing calls.",
        "Transparency and control over account and data.",
        "Smooth wallet recharge with secure transactions."
      ]
    },
    quantitativeResearch: {
      title: "Quantitative Research",
      description: "To validate user needs and measure the scale of challenges in communication, we conducted an online survey with 150 participants across different age groups (18Ã¢â‚¬â€œ45 years). The data provided measurable insights into user behavior and preferences:",
      stats: [
        { value: "82%", label: "Spam & Fraud Exposure", desc: "Reported receiving 5Ã¢â‚¬â€œ10 spam or fraud calls per week." },
        { value: "68%", label: "Unknown Caller Distrust", desc: "Said they don't fully trust unknown numbers and often ignore calls." },
        { value: "73%", label: "Ad Clutter Disruption", desc: "Felt that existing caller ID apps are cluttered with ads and affect usability." },
        { value: "59%", label: "Call History Inefficiency", desc: "Mentioned difficulty in managing call history and contacts within current apps." },
        { value: "77%", label: "Integrated Wallet Need", desc: "Expressed the need for a fast and secure wallet recharge system integrated within the app." },
        { value: "85%", label: "Privacy & Data Security", desc: "Prioritized privacy and data security as the most important factor when using a caller ID app." }
      ]
    },
    userInterviews: {
      description: "To uncover real user pain points and expectations, we conducted one-on-one interviews with 6 participants from different backgrounds (working professionals, students, and senior users). Each session lasted 20Ã¢â‚¬â€œ30 minutes and focused on their experience with calling and caller ID apps.",
      insights: [
        { num: "1", title: "Spam & Fraud Calls", desc: "Almost all participants complained about receiving frequent spam calls and expressed frustration at not knowing whether to trust unknown numbers." },
        { num: "2", title: "Cluttered Interfaces", desc: "Users felt that existing apps like Truecaller were often filled with ads and unnecessary features, which made navigation confusing." },
        { num: "3", title: "Privacy Concerns", desc: "Participants were worried about how their contacts and personal data might be used or shared without consent." },
        { num: "4", title: "Call Management Issues", desc: "Some users found it difficult to track detailed call history or manage contacts easily in current solutions." },
        { num: "5", title: "Wallet & Recharge", desc: "Younger participants wanted an integrated wallet feature that allows quick and secure recharges without switching to another app." },
        { num: "6", title: "Expectations", desc: "Users desired a clean, ad-free interface, one-tap blocking/reporting, and strong privacy controls to feel safe and in control." }
      ]
    },
    defineStage: "In the define phase, we synthesized the research insights to clearly outline the core problems and user needs. This step was focused on framing the right problem statements, prioritizing key pain points, and setting clear design objectives. By narrowing down challenges, we created a solid roadmap that ensured the design process stayed user-centered and goal-driven.",
    personas: [
      {
        name: "Anjali Sharma",
        age: "22",
        occupation: "College Student",
        techUsage: "Moderate to High (social apps + online payments)",
        goals: [
          "Wants a simple, clean app to identify calls from unknown numbers.",
          "Needs an easy way to manage contacts and recharge her wallet securely.",
          "Values customization and personalization (themes, preferences)."
        ],
        frustrations: [
          "Confused by complex settings in existing caller ID apps.",
          "Worried about personal data being shared without consent.",
          "Finds it annoying to switch between apps for wallet recharge and calling."
        ]
      },
      {
        name: "Rohan Mehta",
        age: "29",
        occupation: "Sales Executive",
        techUsage: "High (smartphone is primary work tool)",
        goals: [
          "Needs to answer many unknown calls daily for work without worrying about spam.",
          "Wants quick access to detailed call history to track client conversations.",
          "Prefers a professional, ad-free app that saves time."
        ],
        frustrations: [
          "Spam and fraud calls waste time during work hours.",
          "Existing apps feel cluttered with too many ads.",
          "Difficulty in managing and separating personal vs. work contacts."
        ]
      }
    ],
    empathyMap: {
      says: [
        "\"I just want a clean app that shows me who's calling.\"",
        "\"Recharging my wallet should be quick and simple.\"",
        "\"I don't want my data to be misused.\""
      ],
      thinks: [
        "\"Is this call important or just spam?\"",
        "\"Why do caller ID apps feel so complicated?\"",
        "\"I wish everything was in one placeÃ¢â‚¬â€calls, contacts, recharge.\""
      ],
      does: [
        "Ignores or declines most unknown calls.",
        "Uses multiple apps (caller ID, payments, contacts) for simple tasks.",
        "Avoids apps that ask for too many permissions."
      ],
      feels: [
        "Overwhelmed by too many settings and ads in current apps.",
        "Anxious about privacy and data security.",
        "Happy when she can personalize her app to her liking."
      ]
    },
    journeyMap: [
      { stage: "Trigger", action: "Gets a call from an unknown number during work hours.", thoughts: "\"Is this a client or just spam?\"", feelings: "Frustrated, cautious", opportunities: "Real-time caller ID with spam detection." },
      { stage: "Research/Decision", action: "Looks at caller ID pop-up from Globicall.", thoughts: "\"Good, I can see if it's a client or spam instantly.\"", feelings: "Relieved, confident", opportunities: "Provide detailed caller info instantly." },
      { stage: "Action", action: "Answers/blocks the call in one tap.", thoughts: "\"That was easy, no extra steps.\"", feelings: "In control, efficient", opportunities: "One-tap block/report feature." },
      { stage: "Post-Action", action: "Reviews call history later to track client details.", thoughts: "\"I can see all call details clearly.\"", feelings: "Satisfied, professional", opportunities: "Detailed call logs with search/filter." },
      { stage: "Retention", action: "Continues using app daily for work calls.", thoughts: "\"This saves me time and keeps calls organized.\"", feelings: "Loyal, trusting", opportunities: "Personalize experience with work/personal contact lists." }
    ],
    ideateStage: "During the ideation stage, we translated our research findings into actionable design concepts. By brainstorming, sketching, and mapping user journeys, we explored various ways to simplify calling, enhance security, and streamline contact management. This phase was about turning insights into innovative ideas that could shape a seamless and reliable user experience for Globicall.",
    storyboarding: [
      { frame: 1, title: "Notification of Incoming Call", bullets: ["Rohan receives a call from an unknown number.", "The Globicall screen displays \"Possible: Delivery Agent\" with caller ID detection.", "He's curious about who's calling."] },
      { frame: 2, title: "Caller Identification", bullets: ["The app quickly shows caller details Ã¢â‚¬â€ name, city, and tag (\"Verified Business\").", "Rohan feels assured that it's safe to answer."] },
      { frame: 3, title: "Active Call Interface", bullets: ["Rohan answers the call using the clear, modern Globicall UI.", "The audio quality is crisp and lag-free.", "He completes a short conversation."] },
      { frame: 4, title: "End Call & View History", bullets: ["After the call, the app shows the contact in recent call history with a \"Message\" button.", "He taps it to follow up."] },
      { frame: 5, title: "Messaging Interface", bullets: ["Rohan opens the chat screen.", "Sends: \"Hi, please share the document link.\"", "The chat UI looks clean and minimal."] },
      { frame: 6, title: "Message Delivered", bullets: ["The message is delivered instantly (two blue ticks).", "He adds the sender to his contacts for future communication."] },
      { frame: 7, title: "End Frame - Positive Emotion", bullets: ["Rohan feels confident about Globicall's reliability.", "A thought bubble: \"This app really makes communication easier.\""] }
    ],
    informationArchitecture: [
      { module: "Calls", sub: ["Make a Call", "Incoming Calls", "Call Options (Mute, Speaker, Hold, Record)"] },
      { module: "Call History", sub: ["Logs (Missed, Received, Dialed)", "Detailed Call Info", "Quick Actions (Call back, Message, Block)"] },
      { module: "Messaging", sub: ["Send Message", "Receive Message", "Chat History", "Media Sharing (Images, Voice Notes, Docs)"] },
      { module: "Contacts", sub: ["View Contacts", "Add / Edit / Delete Contact", "Sync Contacts with phone/cloud"] },
      { module: "Wallet / Recharge", sub: ["Check Balance", "Recharge Wallet", "Transaction History"] },
      { module: "Spam / Security", sub: ["Blocked Numbers", "Report Spam", "Spam Filters", "Caller ID Privacy"] },
      { module: "Settings / Account", sub: ["Profile Info", "Privacy Settings", "Notifications", "Customization (Theme, Dark Mode, Language)", "App Preferences", "Logout / Delete Account"] }
    ],
    designStage: "In the Design phase, we transformed insights and defined goals into tangible design solutions. This stage focused on creating wireframes, user flows, and interactive prototypes that translated user needs into intuitive experiences. Emphasis was placed on visual hierarchy, accessibility, and usability to ensure seamless navigation and engagement. Through iterative design and feedback, we refined layouts, interactions, and visual elements to craft a product that is both functional and visually appealing, aligning perfectly with user expectations and business objectives.",
    styleGuide: {
      typography: "Montserrat (Aa)",
      colors: [
        { name: "Deep Royal Blue", hex: "#2D65A4" },
        { name: "Sky Blue", hex: "#15BEFF" },
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Charcoal Dark", hex: "#474747" },
        { name: "Neutral Gray", hex: "#808080" }
      ],
      iconCount: "25+ Handcrafted Outline System Icons",
      wireframesCount: "15 Mobile Wireframe Screens"
    },
    visualScreensCount: "16+ High-Definition Production Mobile Screens",
    conclusion: "Thanks For Scrolling"
  },
  {
    id: "rawfitness",
    title: "RAW Fitness Gym",
    tagline: "Ready to Train Your Body Ã¢â‚¬â€ Athletic Gym & Fitness Web UI/UX Case Study",
    fullTitle: "RAW Fitness: High-Performance Gym & Training Web UI/UX Case Study",
    category: "Health & Fitness Web",
    categoryKey: "healthcare",
    badge: "Web UI/UX Case Study",
    year: "2025",
    role: "Senior UI/UX Designer",
    roleDescription: "Design by: Vitthal Kolpe | Senior UI/UX Designer | 6 Years Experience",
    platform: "Web (Desktop & Responsive Landing Page)",
    duration: "2 Months",
    team: "Lead Product Designer, UI Designer, Web Developer",
    tools: ["Figma", "Illustrator", "Photoshop"],
    figmaProtoUrl: "https://www.figma.com/proto/wb2VKVQOIrrklh2lq9Q3k8/Portfolio?node-id=1142-6125&viewport=12%2C-279%2C0.05&t=LsVBBN7Mt9tKuXGj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1001%3A2&page-id=0%3A1",
    heroImage: "rawfitness-hero-preview.png",
    fullBoardImage: "rawfitness-case-study-full.png",
    images: {
      hero: "rawfitness-hero-preview.png",
      whyChooseUs: "rawfitness-why-choose-us.png",
      experience: "rawfitness-experience.png",
      services: "rawfitness-services.png",
      trainers: "rawfitness-trainers.png",
      leadGen: "rawfitness-lead-gen.png",
      fullBoard: "rawfitness-case-study-full.png"
    },
    summary: "RAW Fitness is a high-impact, dark-themed gym and athletic training web platform designed to inspire fitness enthusiasts to level up their strength, endurance, and overall physical performance. Featuring structured training programs, certified trainer profiles, interactive testimonials, and a high-converting 50% discount membership lead funnel.",
    metrics: [
      { value: "20+", label: "Years Experience", desc: "Decades of proven strength & conditioning excellence" },
      { value: "15K+", label: "Members Joined", desc: "Active community of gym athletes and fitness seekers" },
      { value: "14K+", label: "Happy Members", desc: "Transformational fitness results and 5-star trainer ratings" }
    ],
    whyChooseUs: {
      subtitle: "Gym workouts offer a versatile and customisable experience, allowing everyone to set specific fitness goals.",
      pillars: [
        { num: "01", title: "PERSONAL TRAINING", desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals." },
        { num: "02", title: "EQUIPMENT AND FACILITIES", desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals." },
        { num: "03", title: "NUTRITION COUNSELING", desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals." },
        { num: "04", title: "SPECIALITY PROGRAMS", desc: "Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals." }
      ]
    },
    experienceSection: {
      heading: "WE HAVE A LOT OF EXPERIENCE",
      desc: "Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement. We guide each member toward their peak physical condition."
    },
    services: [
      { title: "PERSONAL TRAINING", desc: "1-on-1 coaching with customized strength benchmarks and form mastery." },
      { title: "ZUMBA AEROBICS", desc: "High-energy rhythm workouts for cardio endurance and active calorie burn." },
      { title: "FUNCTIONAL TRAINING", desc: "Athletic agility, core stability, and compound movement power." },
      { title: "YOGA", desc: "Mindful mobility, recovery, and flexibility sessions." }
    ],
    trainers: [
      { name: "BORNEY EXITEID", rating: "Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦", role: "Head Strength Coach" },
      { name: "ELSA WINDIA", rating: "Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦", role: "Functional & Aerobics Specialist" },
      { name: "GEOURGE ARYO", rating: "Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦", role: "Olympic Lifting & Conditioning Coach" }
    ],
    testimonial: {
      quote: "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
      author: "JHONY BREAKER",
      rating: "Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦Ã¢Ëœâ€¦"
    },
    leadFunnel: {
      heading: "LET'S START GYM TRAINING NOW",
      offer: "Get 50% off the first three classes you sign up for this month on any GYM membership",
      fields: ["Enter You Name...", "Numbers Phone...", "Your Email Address..."],
      ctaText: "LET'S JOIN NOW"
    },
    footerNav: ["HOME", "SERVICE", "TRAINERS", "TESTIMONIAL", "CONTACT US"]
  },
  {
    id: "physioyour",
    title: "Physiotherapy Mobile App",
    tagline: "A Digital Rehabilitation & Physical Therapy Ecosystem for Patients & Doctors â€” UX & UI Case Study",
    fullTitle: "Physiotherapy Mobile Application: UX & UI Case Study",
    category: "Healthcare & Telemedicine",
    categoryKey: "healthcare",
    badge: "UX & UI Case Study",
    year: "2025",
    role: "Senior UI/UX Designer",
    roleDescription: "Design by: Vitthal Kolpe | Senior UI/UX Designer | 6 Years Experience",
    platform: "Android & iOS (Mobile First)",
    duration: "9 Weeks",
    team: "Lead UI/UX Designer, UX Researcher, Mobile Development Team",
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    behanceUrl: "https://www.behance.net/gallery/237634535/Physiotherepy-Mobile-Application",
    figmaProtoUrl: "https://www.behance.net/gallery/237634535/Physiotherepy-Mobile-Application",
    heroImage: "physio-hero-preview.png",
    cardThumb: "physio-card-thumb.png",
    fullBoardImage: "physio-case-study-full.png",
    images: {
      hero: "physio-hero-preview.png",
      cardThumb: "physio-card-thumb.png",
      problemSolution: "physio-problem-solution.png",
      timelineStrategy: "physio-timeline-strategy.png",
      processResearch: "physio-process-research.png",
      personas: "physio-personas.png",
      userFlows: "physio-user-flows.png",
      wireframes: "physio-wireframes.png",
      styleguide: "physio-styleguide.png",
      screens: "physio-screens.png",
      fullBoard: "physio-case-study-full.png"
    },
    summary: "PhysioYour is a comprehensive mobile physical therapy platform engineered to bridge the clinical gap between patients and physiotherapists. It features specialized video exercise libraries with watch-point cues, automated adherence tracking (95% benchmark), longitudinal digital prescription records, and practitioner practice management tools.",
    metrics: [
      { value: "95%", label: "Adherence Rate", desc: "Patient rehabilitation tracking benchmark achieved through video guidance" },
      { value: "9 Weeks", label: "End-to-End Design", desc: "Comprehensive UX Research (W1-5) and UI Design & Testing (W6-9)" },
      { value: "2 Portals", label: "Dual Ecosystem", desc: "Dedicated intuitive workflows for Doctors/Therapists and Patients" },
      { value: "22+", label: "Custom Icons", desc: "Bespoke healthcare iconography built for instant clinical clarity" }
    ],
    aboutProject: "Physiotherapy applications are designed to provide physiotherapy-related services and resources through mobile devices such as smartphones and tablets. These apps can offer a range of features, such as exercises, videos, tutorials, and tracking tools to help people manage their physical therapy needs. These apps can be used by patients, physiotherapists, or other healthcare professionals.",
    problemStatement: [
      "Physiotherapists work with the mind and body to promote health and improve quality of life.",
      "They work with a range of conditions without medication, improving body mechanics, reducing pain, improving blood circulation, preventing headaches, and assisting with rehabilitation. Physiotherapy without any supervision may prove to be fatal; Hence, it is essential to consult a Physiotherapist.",
      "Physiotherapists, too, need to keep track of their patients and their respective medical conditions throughout their program. As the healthcare industry is on the cusp of a digital transformation, physiotherapy is also increasingly affected by digital influences; It's essential to make use of electronic documentation via a digital application that can increase work efficiency by standardizing rehabilitation programs and deliver high-quality expert healthcare when and where it is needed."
    ],
    possibleSolution: [
      "We have created a user-friendly application keeping in mind the exercises, stretches, and other treatments we ask patients to perform at home can be hard, frustrating, and sometimes even painful.",
      "This application would provide a video library of exercises for the patients to refer to while exercising, helping them build confidence and boost their compliance.",
      "Digital history of the patient's medical conditions, progress, and prescriptions can be saved for future use eliminating the risk of missing out on details.",
      "Patients' adherence rates are tracked, and this proves beneficial for physiotherapists to keep a track of the patient's progress.",
      "This application would help the doctors, as they can create and send their prescriptions, schedule holidays and working hours, and customize exercise videos for their patients; It would also help the patients keep track of their exercises, schedule or cancel their appointments, make payments or locate the clinic if necessary providing a holistic experience to every user."
    ],
    timeline: {
      uxResearch: [
        { weeks: "1st - 2nd week", task: "User interview, User research, Competitive research" },
        { weeks: "3rd - 4th week", task: "Define user goals, Business goals by creating brand attributes, user personas, UJM and Empathy map" },
        { weeks: "5th week", task: "Create user flow, card sorting & information architecture of possible features & sections to add" }
      ],
      uiDesign: [
        { weeks: "6th - 7th week", task: "Sketches, wireframing, Hi-Fi designs, prototyping" },
        { weeks: "8th - 9th week", task: "Testing prototype, getting feedbacks, executing improvements, final presentation" }
      ]
    },
    designStrategy: {
      businessGoals: "To generate revenue by taking care of the patient.",
      technology: "Availability of internet smartphones, tablets, desktop device, Online Payment",
      generalTask: "To Create application for patient care and can take an appointment with a doctor from this application",
      targetUsers: "Patients. Age: 18 yrs to 60 yrs",
      crossChannels: "Mobile App, Web Application, Interactive voice responce"
    },
    designProcess: [
      { name: "Discover", desc: "User Research, User Interviews, Competitive Anaysis" },
      { name: "Define", desc: "User Personas, User Flow, Information Architecture" },
      { name: "Wireframe & Prototype", desc: "Wireframes, Hi-Fi Designs, Prototype" },
      { name: "Visual Design", desc: "Creating Mockups, Style-guide, Typography, Iconography, UI Assets" },
      { name: "Testing", desc: "Interface Testing With developers, Matching UI with Xd mock-ups" },
      { name: "Deliver", desc: "Hand over to development team with all assets" }
    ],
    userResearch: {
      overview: "The first step I took to understand the problem and the needs of the users was to conduct fundamental research. Afterward, I conducted online interviews and a field study, resulting in interviews among the all-age group. To avoid confirmation bias, I asked open-ended questions to avoid any bias I might have had.",
      participantsIntro: "I interviewed a total of 6 participants between the age of 21 to 38 and their professions varied from doctor, attendee, employee, and student. We need to understand the patient's and the attendee's needs and pain points when they visit the hospital and in an emergency. To know more insights about appointment attending/ book an appointment.",
      demographics: "4 female and 2 male | Age: 18 to 60 years old | Occupations: Security executive, Student, IT Employees, Policeman, Doctor, and attendee.",
      questions: [
        "Do you prefer an in-clinic visit or online consultation?",
        "What fractures you most when you visit the hospital?",
        "Pros and cons of online consultation?",
        "What are the problems faced while you visit the doctor?",
        "What are the features you admire?"
      ]
    },
    personas: [
      {
        name: "Anjana Datt",
        role: "Software Engineer",
        quote: "I BELIEVE IN DOING THE RIGHT THINGS, THAT'S MY CHARACTER AND PERSONALITY",
        age: "25",
        status: "Single",
        location: "Pune",
        bio: "Anjana is a young girl living in Pune. She was very much conscious of maintaining her health but due to her job shift timings, she was unable to maintain her health perfectly. Anjana wants to get feedback about her diet and exercise habits to maintain her health. So needs a diet of protein to maintain her health, due to her work pressure, she doesn't have enough time to go out and buy so she needs an application where she can consult.",
        goals: [
          "To maintain the diet and keep track of feedback about her health",
          "To get a chance to reach the doctor and make an honest consultation",
          "Looking for a trusted online appointment system."
        ],
        painPoints: [
          "Loss of time in finding the right physiotherapist",
          "No trusted online appointment system",
          "No proper feedback system after rehabilitation sessions"
        ]
      },
      {
        name: "Dr. Amit Yadav",
        role: "Resident Doctor / Physiotherapist",
        quote: "We have a goal and that is to save as many lives as possible",
        age: "25",
        status: "Married",
        location: "Pune / Mumbai",
        bio: "Amit is an MBBS final-year student at a well-known university in Mumbai. He is currently doing his practical session in a private hospital. He loves attending to patients not because he has to, but because he loves to see people overcome their illnesses and understand how to prevent them from falling sick, but because of the large number of patients, he has to see each day. He gets overwhelmed and it affects him physically and mentally.",
        goals: [
          "To give patients the best treatment to feel better.",
          "To get the best comments and adherence feedback on his prescribed exercises.",
          "To make his work and daily clinical documentation a bit easier."
        ],
        painPoints: [
          "He feels overwhelmed at the volume of daily hospital visits",
          "Feels that there aren't enough digital tools to monitor patient adherence",
          "Feels sad when patients cant understand the proper usage of home exercises."
        ]
      }
    ],
    styleGuide: {
      primaryColor: { hex: "#005F5B", name: "Deep Teal", hsb: "177, 100, 37", rgb: "0, 95, 91" },
      complementaryColors: [
        { hex: "#FCF6ED", name: "Soft Ivory" },
        { hex: "#D8D8D8", name: "Neutral Grey" },
        { hex: "#9EC031", name: "Fresh Lime" },
        { hex: "#FFFFFF", name: "Pure White" }
      ],
      typography: {
        fontFamily: "Roboto",
        heading: "32 px Medium",
        subtitle1: "24 px Regular",
        subtitle2: "18 px Regular"
      },
      iconography: "22+ Custom Healthcare Vector Icons",
      components: ["Appointment Cards", "Date Picker", "Input Fields", "Dropdown Selector", "OTP Verification Input"]
    }
  },
  {
    id: "quikjob",
    title: "QuikJob Mobile App",
    tagline: "Find Your Match, Drive Your Destiny â€” One-Click Job Search & Application Platform",
    fullTitle: "QuikJob: Mobile Job Search & One-Click Application Ecosystem â€” UX Case Study",
    category: "Job Portal & Mobile App",
    categoryKey: "hrtech",
    badge: "UX Case Study",
    year: "2024",
    role: "Lead UI/UX Designer",
    roleDescription: "Design by: Vitthal Kolpe | Lead UI/UX Designer | 6 Years Experience",
    platform: "Android & iOS (Mobile First)",
    duration: "8 Weeks",
    team: "Lead UI/UX Designer (Vitthal Kolpe), UX Researcher, Mobile Product Squad",
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    behanceUrl: "https://www.behance.net/gallery/209819885/QuikJob-Mobile-Application",
    figmaProtoUrl: "https://www.behance.net/gallery/209819885/QuikJob-Mobile-Application",
    heroImage: "quikjob-hero-preview.png",
    cardThumb: "quikjob-card-thumb.png",
    fullBoardImage: "quikjob-case-study-full.png",
    images: {
      hero: "quikjob-hero-preview.png",
      cardThumb: "quikjob-card-thumb.png",
      overviewSolution: "quikjob-overview-solution.png",
      processTimeline: "quikjob-process-timeline.png",
      audienceResearch: "quikjob-audience-research.png",
      competitiveAnalysis: "quikjob-competitive-analysis.png",
      personas: "quikjob-personas.png",
      empathyMaps: "quikjob-empathy-maps.png",
      architecture: "quikjob-information-architecture.png",
      styleguide: "quikjob-styleguide.png",
      wireframes: "quikjob-wireframes.png",
      walkthrough: "quikjob-walkthrough.png",
      screens: "quikjob-hifi-screens.png",
      fullBoard: "quikjob-case-study-full.png"
    },
    summary: "QuikJob simplifies job hunting by allowing job seekers to save granular preferences (location, role, industry, work mode) and apply to matching openings with a single tap. Engineered across an 8-week cycle, it eliminates tedious repetitive form-filling for candidates while accelerating candidate discovery for recruiters.",
    metrics: [
      { value: "1-Click", label: "Instant Apply", desc: "One-click application flow bypassing repetitive manual resume forms" },
      { value: "8 Weeks", label: "End-to-End Design", desc: "Structured design sprint from contextual inquiry to production Hi-Fi" },
      { value: "4 Leaders", label: "Competitive Matrix", desc: "Deep comparative benchmark against LinkedIn, Indeed, Glassdoor & Naukri" },
      { value: "4-Col Grid", label: "Responsive Layout", desc: "Ergonomic 4-column mobile grid with 16px margins & 8px gutters" }
    ],
    responsibilities: [
      "User Research", "User Flow", "User Persona", "User Interviews",
      "Wireframe", "Prototype", "Visualization", "Usability Testing"
    ],
    productOverview: "QuikJob makes job hunting simple and fast! Employees can easily save their job preferences, such as location, industry, and role, in the app. When a job that matches their preferences becomes available, they can apply with just one click, saving time and effort. It's a quick, efficient way to find the perfect job and apply instantly!",
    problemStatement: [
      "Job seekers often struggle with finding relevant job opportunities and the lengthy application process.",
      "They have to search multiple job listings, filter them manually, and fill out tedious forms for each application, making the job search experience time-consuming and frustrating.",
      "There's an urgent need for a simpler, faster way to apply for jobs that match user preferences with minimal cognitive effort."
    ],
    theSolutions: [
      "QuikJob simplifies the job search by allowing users to save their job preferences (location, role, industry, work mode) directly in the app.",
      "When a job matching those preferences is available, users can apply with just one click.",
      "This makes the whole process quick, easy, and stress-free, helping users find and apply for jobs faster than ever before."
    ],
    designProcess: [
      { stage: "01. Understand", desc: "User Research, User Interview, Competitive Analysis" },
      { stage: "02. Define", desc: "User Personas, Empathy Map, User Journey" },
      { stage: "03. Ideate", desc: "User Flow, Information Architecture" },
      { stage: "04. Design", desc: "Wireframe, Hi-Fi Designs, Prototype" },
      { stage: "05. Test", desc: "Feedback, Conclusion, Future Concept" }
    ],
    timeline: [
      { weeks: "1st - 2nd Week", stage: "Understand", tasks: "User Research, User Interviews, Competitive Analysis" },
      { weeks: "3rd - 4th Week", stage: "Define", tasks: "User Personas, Empathy Map, User Journey" },
      { weeks: "5th Week", stage: "Ideate", tasks: "User Flow, Information Architecture" },
      { weeks: "6th - 7th Week", stage: "Design", tasks: "Wireframes, Hi-Fi Production Designs" },
      { weeks: "8th Week", stage: "Test", tasks: "Usability Feedback, Conclusion & Iterations" }
    ],
    targetAudience: [
      "Freshers looking for their first career opportunity",
      "Young professionals with 1-5 years of industry experience",
      "Active candidates seeking a rapid and painless application experience",
      "Job seekers looking to eliminate repetitive form filling",
      "Candidates interested in flexible formats (Full-time, Part-time, Remote, Hybrid)"
    ],
    qualitativeResearch: {
      overview: "The user research for QuikJob focuses on understanding job seekers' needs and challenges in applying for jobs. Insights from freshers, professionals, and recruiters helped design a seamless, one-click application process.",
      questions: [
        "Tell me about yourself and your overall job search experience?",
        "Have you used job portal mobile applications before, and what features do you find most useful?",
        "How do you usually search for jobs and filter matching openings?",
        "What are your top priorities when looking for a job (salary, remote, culture)?",
        "What frustrations have you experienced with existing job portal forms?"
      ]
    },
    competitiveAnalysis: [
      { feature: "Spot Jobs", linkedin: false, indeed: false, glassdoor: true, naukri: false, quikjob: true },
      { feature: "Easy 1-Click Apply", linkedin: false, indeed: false, glassdoor: true, naukri: true, quikjob: true },
      { feature: "Save Jobs", linkedin: true, indeed: true, glassdoor: true, naukri: true, quikjob: true },
      { feature: "Granular Filters", linkedin: true, indeed: true, glassdoor: true, naukri: false, quikjob: true },
      { feature: "Job Posting", linkedin: true, indeed: true, glassdoor: false, naukri: true, quikjob: true },
      { feature: "Live Status Tracker", linkedin: false, indeed: false, glassdoor: true, naukri: false, quikjob: true }
    ],
    personas: [
      {
        name: "Daniel Bailey",
        role: "React Developer",
        age: "26",
        education: "BE Engineer",
        status: "Single",
        location: "Pune",
        personality: ["Calm", "Thinker", "Creative"],
        bio: "Daniel is a skilled React developer with five years of experience. He holds a degree in engineering and is passionate about creating user-friendly interfaces and staying updated on the latest web development trends.",
        goals: [
          "Find roles to become a better React developer and take on challenging engineering problems.",
          "Secure positions with flexible hours and remote options to balance work and personal life.",
          "Meet and collaborate with talented frontend peers to improve code quality.",
          "Competitive compensation, bonuses, and healthcare coverage to support his career."
        ],
        painPoints: [
          "Struggles to isolate React-specific openings among generic software engineering listings.",
          "Job postings lack critical transparency regarding tech stack and engineering culture.",
          "Balancing current sprint work with active job hunting leaves minimal time for long forms."
        ]
      },
      {
        name: "Sarah Mitchell",
        role: "Senior Recruiter",
        age: "34",
        education: "MBA in HR",
        status: "Single",
        location: "Pune",
        personality: ["Organized", "Analytical", "Creative"],
        bio: "Sarah works at a mid-sized tech company and is responsible for filling various roles, from entry-level positions to mid-level technical jobs. She manages multiple job postings, screens applications, and coordinates with hiring managers.",
        goals: [
          "Quickly find qualified candidates who closely match required skills.",
          "Easily review candidate profiles and structured resumes on mobile.",
          "Streamline the hiring workflow with fewer repetitive manual screening tasks.",
          "Communicate instantly with responsive applicants."
        ],
        painPoints: [
          "Overwhelmed by high volumes of irrelevant, untargeted applications.",
          "Spending excessive hours filtering unqualified resumes manually.",
          "Friction coordinating interview schedules across distributed hiring teams.",
          "Limited mobile tools to evaluate candidate portfolios on the go."
        ]
      }
    ],
    styleGuide: {
      typeface: "Rubik",
      primaryColor: { hex: "#057A55", name: "Emerald Forest Green" },
      darkNeutral: { hex: "#1F2A37", name: "Deep Charcoal" },
      lightSurface: { hex: "#E8F5E9", name: "Mint Light Surface" },
      white: { hex: "#FFFFFF", name: "Pure White" },
      grid: "4 Columns â€¢ 16px Margin â€¢ 8px Gutter Space",
      iconography: "10+ Custom Vector Job Portal Icons"
    }
  },
  {
    id: "fxtm",
    title: "FXTM Telecom Monitoring",
    tagline: "Foreign Exchange and Telecom Monitoring â€” Enterprise International Telecoms Analytics & Traffic Optimization Platform",
    fullTitle: "FXTM: Enterprise Foreign Exchange & Telecom Analytics UX Case Study",
    category: "Telecom & FinTech Analytics",
    categoryKey: "telecom",
    badge: "Enterprise Case Study",
    year: "2024 - 2026",
    company: "International Telecom Solutions",
    role: "UI/UX Designer",
    timeline: "10-Week End-to-End Cycle",
    platform: "Enterprise Web & Analytics Cockpit",
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Miro"],
    figmaProtoUrl: "https://www.figma.com/proto/wb2VKVQOIrrklh2lq9Q3k8/Portfolio?node-id=1140-1059&viewport=12%2C-182%2C0.05&t=gcZerMq1rB5wcMkd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1001%3A2&page-id=0%3A1",
    infographicImg: "fxtm-case-study-full.png",
    infographicDimensions: "640 Ã— 10,475px Ultra HD",
    metrics: [
      { value: "48.2k", label: "Throughput (req/s)", desc: "Real-time international voice & SMS transaction ingestion." },
      { value: "99.98%", label: "SLA Gateway Uptime", desc: "Monitored cross-border network gateway uptime threshold." },
      { value: "10 Wks", label: "Design Sprint", desc: "Structured UX research, design system, and multi-portal cockpit." },
      { value: "7 Modules", label: "Enterprise Scope", desc: "Dashboard, Global Config, Business Rules, Tariff, Events, Reports, Access." }
    ],
    summary: "FXTM is a comprehensive international telecommunications analytics and monitoring platform designed to track and manage exchange rate performance, tariff changes, voice and SMS traffic distribution, and revenue generation across multiple countries and telecom networks. The system is tailored for telecom operators, regulatory bodies, and enterprise clients looking to optimize their international voice and SMS traffic, monitor exchange rate impacts, and evaluate financial performance in real time.",
    problemStatement: [
      "Lack of real-time insights into how currency fluctuations impact cross-border telecom revenues.",
      "Difficulty tracking SMS and voice traffic performance across multiple international destinations and providers.",
      "Fragmented data from disparate legacy sources leading to poor decision-making and delayed billing reconciliation.",
      "No centralized platform to compare current vs. average exchange rates and assess their direct effect on wholesale carrier billing.",
      "Cumbersome, non-intuitive legacy interfaces making complex telecom analytics difficult for operational teams."
    ],
    solutions: [
      "Monitor real-time exchange rates and their direct financial impact on international voice and SMS traffic.",
      "Analyze cross-border traffic volume and revenues by country, network partner, and tariff model.",
      "Identify revenue deviations with delta comparisons (Current Revenue vs. Actual Revenue).",
      "Visualize high-density telecom metrics through intuitive dashboards, sparklines, and visual analytics.",
      "Empower operational teams with automated business rules, anomaly alerting, and one-click data export."
    ],
    qualitativeResearch: [
      "Can you walk me through your current process for monitoring telecom revenue and traffic data?",
      "What tools or platforms do you currently use to track exchange rates and how they affect billing?",
      "What are the biggest challenges you face when working with international voice and SMS traffic data?",
      "Have you ever experienced revenue losses due to delayed or inaccurate currency information?",
      "How frequently do you generate telecom traffic or revenue reports, and how much time does it usually take?",
      "Which metrics do you consider most critical when making operational or financial decisions?",
      "Do you currently have a system that alerts you to major deviations in exchange rates or traffic volume?",
      "What difficulties do you face when comparing tariff performance across different countries?",
      "How would a centralized dashboard that combines traffic, revenue, and exchange data help in daily tasks?",
      "What kinds of visualizations (charts, maps, tables) do you find most helpful when analyzing telecom data?",
      "If you could design your ideal telecom analytics dashboard, what features would it absolutely need?",
      "Do you feel confident making decisions based on your current data tools? Why or why not?"
    ],
    keyInsights: [
      "Users rely on multiple fragmented tools, leading to scattered and inefficient workflows.",
      "No real-time exchange rate tracking exists in legacy portals, causing delayed responses and revenue loss.",
      "Reporting is manual and time-consuming, often taking operational teams several hours per week to compile.",
      "Hard to correlate revenue impact from rapid currency exchange fluctuations across emerging markets.",
      "Existing enterprise dashboards are overly technical, cluttered, and lack clear visual hierarchy."
    ],
    quantitativeResearch: [
      { question: "Which telecom service do you monitor most?", results: "60% International Voice/SMS, 40% Domestic" },
      { question: "Do you monitor exchange rates for telecom billing?", results: "70% Yes, 30% No" },
      { question: "Are you satisfied with traffic performance reporting?", results: "68% Unsatisfied with legacy latency, 32% Satisfied" },
      { question: "Do you analyze SMS revenue trends regularly?", results: "50% Yes Daily, 50% Periodically" }
    ],
    personas: [
      {
        name: "Priya Deshmukh",
        role: "International Traffic Analyst",
        experience: "8+ years in telecom operations",
        initials: "PD",
        goals: [
          "Monitor international voice and SMS traffic in real time across global routes.",
          "Analyze tariff changes across regions and correlate currency impact.",
          "Evaluate the effect of foreign exchange fluctuations on billing reconciliation.",
          "Optimize cost and routing quality of international traffic."
        ],
        frustrations: [
          "Delayed or inaccurate reporting from legacy telecom tools.",
          "Difficulty correlating exchange rate variations with daily traffic volumes.",
          "Manual compilation of cross-operator tariff spreadsheets."
        ],
        behavior: [
          "Logs into the FXTM analytics platform daily to review traffic spikes and tariffs.",
          "Sets up real-time threshold alerts for abnormal carrier activity.",
          "Exports executive reports weekly for internal presentation."
        ]
      },
      {
        name: "Rajesh Kulkarni",
        role: "Compliance & Regulatory Director",
        experience: "12+ years in telecom regulatory oversight",
        location: "New Delhi, India (Age 34)",
        goals: [
          "Ensure transparent audit trails for international routing tariffs.",
          "Prevent regulatory penalties caused by unmonitored tariff spikes.",
          "Access automated carrier compliance reports across Africa, Asia, and Europe."
        ],
        frustrations: [
          "Lack of unified audit history across multiple carrier partners.",
          "Discrepancies between billing invoices and actual tariff agreements."
        ]
      }
    ],
    architectureModules: [
      { name: "Executive Dashboard", desc: "Real-time KPIs, market statistics (1$ = 14.75 GHS), currency value trends, and top volume routes." },
      { name: "Global Configuration", desc: "Exchange rate threshold settings, currency pairings, change frequencies, and default parameters." },
      { name: "Business Rules Engine", desc: "Automated routing policies, fraud detection triggers, message retry parameters, and bar periods." },
      { name: "Tariff Management", desc: "IDD Call Voice & SMS tariff databases, Excel bulk import, country destination search, and billing rates." },
      { name: "FXTM Event Tracker", desc: "Event monitoring logs, deal verification tables, and action items for voice and SMS settings." },
      { name: "Reporting & Analytics", desc: "Exportable revenue vs. traffic reports, country performance matrices, and delta variance charts." },
      { name: "User Management", desc: "Granular role-based access control (RBAC), admin permissions, and profile activity logging." }
    ],
    styleGuide: {
      typeface: "Roboto",
      primaryColor: { hex: "#1E00A3", name: "Electric Indigo" },
      secondaryColor: { hex: "#9747FF", name: "Vibrant Violet" },
      auxiliaryColor: { hex: "#5E5E5E", name: "Cool Neutral Slate" },
      white: { hex: "#FFFFFF", name: "Pure White" },
      grid: "8pt Enterprise Grid System â€¢ 12-Column Responsive Layout",
      iconography: "24+ Custom Telecom & FX Vector Icons (SVG)"
    },
    impact: [
      "Eliminated 100% of manual foreign exchange spreadsheet reconciliation by streaming real-time currency rates.",
      "Reduced anomalous routing detection time from 4.5 hours to under 3 minutes with automated business rules.",
      "Streamlined tariff audit workflow for 8+ international carriers including MTN Ghana, AT&T, and Vodafone.",
      "Empowered non-technical regulatory analysts to generate audit-ready compliance reports in 1 click."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA };
}
