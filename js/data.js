/* ==========================================================================
   YOUR CONTENT — edit this file to make the portfolio yours.
   You never need to touch the HTML/CSS to update text, projects or links.
   ========================================================================== */

const SITE = {
  name: "Mahesh Patil",
  role: "Lead Graphic Designer · Brand, Motion & Video · 10+ years",
  tagline: "I build brand systems, campaigns, presentations and motion that stay consistent from the first sketch to the final frame.",
  location: "Hyderabad, India",
  email: "maheshpatil1@hotmail.com",
  availability: "Open to full-time roles",

  // Your résumé/CV PDF in assets/. Leave empty ("") to hide the "Download résumé" button.
  resume: "assets/Mahesh-Patil-Resume.pdf",

  // A PDF version of your portfolio (many companies in India ask for one). Leave "" to hide the button.
  portfolioPdf: "",

  // Companies you've worked for — shown as a strip under the intro.
  brands: ["Genpact", "NetScore Technologies", "Coolpad", "Vivo", "Avantel", "AGX Retail"],

  // SHOWREEL (60–90 s, strongest shot first). Leave showreel "" to hide the button and section.
  showreel: "",            // YouTube / Vimeo link, or "assets/videos/showreel.mp4"
  showreelLoop: "",        // optional short muted loop (5–10 s mp4, under 3 MB) shown in the section
  showreelPoster: "",      // optional still image for the section
  // What you did in each part of the reel: { time: "0:04", project: "Chai Theory — launch film", role: "Concept, edit, motion" }
  showreelBreakdown: [],

  about: [
    "I'm Mahesh Patil, a Lead Graphic Designer with 10+ years of experience in branding, motion graphics, video editing and visual storytelling. I've built brand, retail and marketing creative for Vivo and Coolpad, led a team of designers and video editors, and today create presentations, infographics and digital assets for global stakeholders at Genpact.",
    "I care about clean design, strong storytelling and brand consistency across digital, print and video. I work closely with marketing, business and IT teams, and use AI tools like ChatGPT, Midjourney and Leonardo AI to explore concepts faster without compromising craft.",
    "I'm looking for my next full-time role as a lead or senior designer, where I can shape a brand's visual voice and help a creative team do its best work.",
  ],

  // Highlights. Leave empty [] to hide.
  stats: [
    { value: "10+", label: "Years experience" },
    { value: "6", label: "Companies" },
    { value: "3", label: "Awards" },
  ],

  tools: [
    "Photoshop", "Illustrator", "InDesign", "Premiere Pro", "After Effects",
    "Figma", "CorelDRAW", "ChatGPT", "Midjourney", "Leonardo AI",
  ],

  services: [
    { icon: "✦", title: "Branding & Visual Identity", text: "Brand materials, campaigns, retail and in-store branding, print and social creatives — always on-guideline." },
    { icon: "◎", title: "Motion Graphics & Video", text: "Motion graphics, product and marketing videos, edits and storyboards built around clear visual storytelling." },
    { icon: "▦", title: "Presentations & Digital Design", text: "Executive PowerPoint decks, infographics, banners and user-friendly digital forms." },
    { icon: "★", title: "Creative Leadership", text: "Leading designers and video editors, managing workflows and partnering with marketing, business and IT teams." },
  ],

  // Work history, newest first.
  experience: [
    {
      role: "Lead Consultant (Graphic Designer)",
      company: "Genpact India Pvt. Ltd.",
      dates: "Jul 2023 – Present",
      location: "Hyderabad",
      points: [
        "Design PowerPoint presentations, infographics, marketing creatives and on-brand digital assets.",
        "Design and improve digital forms for usability and adherence to design standards.",
        "Use ChatGPT, Midjourney and Leonardo AI for concept generation and faster creative workflows.",
      ],
    },
    {
      role: "Sr. Graphic Designer",
      company: "NetScore Technologies",
      dates: "Sep 2021 – Jun 2023",
      location: "Hyderabad",
      points: [
        "Created presentations, marketing creatives and branding for global stakeholders.",
        "Designed motion graphics, videos and digital assets with Adobe Creative Suite.",
        "Partnered with the Marketing Director (USA) on visual content and campaigns.",
      ],
    },
    {
      role: "Graphic Designer & Video Editor (Team Lead)",
      company: "Avantel Limited & Wiki Kids",
      dates: "Jan 2021 – Sep 2021",
      location: "Hyderabad",
      points: [
        "Led a team of designers and video editors to deliver projects on time.",
        "Created branding materials, presentations, videos and marketing creatives.",
      ],
    },
    {
      role: "Client Service Executive",
      company: "AGX Retail Pvt. Ltd. & Nachiketha",
      dates: "Aug 2018 – Oct 2020",
      location: "Bangalore",
      points: [
        "Designed brochures, flyers, social posts and print materials for retail clients.",
        "Coordinated vendors, printers and agencies; managed estimates and artwork.",
      ],
    },
    {
      role: "Branding Manager",
      company: "Coolpad India",
      dates: "Nov 2016 – Jul 2018",
      location: "Bangalore",
      points: [
        "Developed branding, marketing creatives and campaigns for digital and print.",
        "Created motion graphics, videos and visual content.",
      ],
    },
    {
      role: "Branding Executive",
      company: "Vivo Smartphone India",
      dates: "Dec 2014 – Jun 2016",
      location: "Bangalore",
      points: [
        "Created retail and in-store branding, posters, banners and promotional materials.",
        "Managed end-to-end execution of branding campaigns with sales teams and agencies.",
      ],
    },
  ],

  achievements: [
    "2 Bronze Awards at Genpact",
    "HiPo (High Potential) Award at NetScore Technologies",
    "Promoted to Team Lead at Avantel",
    "Promoted to Account Manager at AGX",
  ],

  education: [
    { title: "B.Com", place: "GITAM (Gandhi Institute of Technology and Management)" },
    { title: "Diploma in Animation", place: "Arena Animation" },
  ],

  certifications: ["Adobe Photoshop Certified", "UI/UX Design"],

  languages: ["English", "Hindi", "Kannada", "Telugu"],

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mahesh-patil-14380896" },
    // Add more, e.g. { label: "Instagram", url: "https://www.instagram.com/your-handle" },
  ],
};

/* --------------------------------------------------------------------------
   CASE STUDIES — big projects with their own page (project.html?p=<slug>)
   concept: true   → shows a "Concept project" badge + a note that the brand is fictional
   draft:   true   → hidden on the live site; preview with  index.html?preview
   inProgress: true → public, with an "In progress" badge
   thumbAi: true    → the card cover is AI-generated (adds an "AI concept" tag)
   sections: each has heading, text (string or list of paragraphs), optional
             list (bullets), images (path or { src, caption, ai: "ChatGPT" }), layout: "grid"
             for 2 columns, and videos (YouTube / Vimeo links)
   -------------------------------------------------------------------------- */
const CASE_STUDIES = [
  {
    slug: "chai-theory",
    title: "Chai Theory",
    concept: true,
    draft: false,
    inProgress: true,   // shows an "In progress" badge; remove when the project is finished
    summary: "A 360° launch for a modern Indian chai brand: identity, packaging, campaign, launch film and motion.",
    categories: ["graphic", "motion", "video"],
    thumb: "assets/images/concepts/chai-theory/process/logo-exploration-r1.webp",
    thumbAi: true,
    hero: "",
    preview: "",   // optional 2–4 s muted mp4 loop (under 2 MB) that plays on hover over the card
    role: "Creative direction, brand identity, packaging, campaign, motion & video",
    year: "2026",
    tools: ["Illustrator", "Photoshop", "After Effects", "Premiere Pro", "ChatGPT", "Midjourney"],
    deliverables: ["Brand identity & guidelines", "Packaging range", "Launch deck", "Social campaign", "20s launch film", "Logo animation"],
    // Result, shown near the top. For concept work, describe what was delivered.
    outcome: "In progress — a complete, launch-ready brand system: identity, 5-blend packaging range, launch deck, social campaign, 20-second film and logo animation.",
    // The 2–3 choices that shaped the work, and why.
    decisions: [
      { title: "θ as the symbol", text: "Theta, the symbol for theory, drawn as a cutting-chai glass — clever, ownable and still readable at 16 px." },
      { title: "Numbered \"Theory\" system", text: "Every blend is a numbered theory (No. 1–5), giving packs, posts and ads one repeatable structure." },
      { title: "Debate over claims", text: "No \"best chai\" claim: the campaign asks \"What's your theory?\" and turns India's chai debates into engagement." },
    ],
    sections: [
      {
        heading: "The brief",
        text: [
          "Create a brand for small-batch, whole-spice chai that feels modern and design-led, yet still tastes like home — for urban Indians aged 22–38 who love chai but no longer have time to make it the slow way.",
          "The goal: one brand system that works across packaging, retail, social, presentation, film and motion.",
        ],
      },
      {
        heading: "The insight",
        text: [
          "Everyone thinks their chai is the right chai. Ginger first or milk first, boil once or twice — every family has its own theory.",
          "So instead of claiming to be \"the best\", Chai Theory invites people into the debate: every blend is a numbered theory, and the campaign asks \"What's your theory?\"",
        ],
      },
      {
        heading: "Logo exploration",
        text: [
          "Three routes explored with quick vector studies and AI-assisted ideation: the θ cup (theta, the symbol for theory, as a cutting-chai glass), the kulhad, and steam that asks a question.",
          "Shortlist: the cutting-chai glass inside a serif θ, and the θ bar breaking out of the glass. The final mark is being designed and refined by hand in Illustrator.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/chai-theory/process/logo-exploration-r1.webp", ai: "Claude", caption: "Round 1 — quick vector studies of three routes, generated with AI assistance (Claude) as a starting point" },
          { src: "assets/images/concepts/chai-theory/process/logo-ai-exploration-chatgpt.webp", ai: "ChatGPT", caption: "AI ideation (ChatGPT), used for exploration only" },
        ],
      },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Final logo, lockups and brand guidelines",
          "Packaging range for five blends",
          "Launch deck and social campaign",
          "20-second launch film and logo animation",
        ],
      },
    ],
  },
  {
    slug: "suryana-renewables",
    title: "Suryana Renewables",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "A presentation and infographic system for a solar company's annual results: master template, investor deck, data visuals and a data film.",
    categories: ["graphic", "motion"],
    thumb: "",
    colors: ["#0F1B2D", "#FF8A1F"],
    preview: "",
    role: "Presentation design, data visualisation, layout, motion",
    year: "2026",
    tools: ["PowerPoint", "Illustrator", "InDesign", "After Effects"],
    deliverables: ["16-layout PowerPoint template", "15-slide investor deck", "Before/after makeover", "6 infographics", "Annual report spreads", "40s data film"],
    outcome: "In progress — a 16-layout template any employee can use, and a 15-slide results story that reads from the titles alone.",
    decisions: [
      { title: "Action titles", text: "Every slide title states the takeaway, so leaders who only skim the titles still get the whole story." },
      { title: "One highlight colour", text: "Everything is grey except the one number that matters, marked in Sunrise orange." },
      { title: "Native, editable charts", text: "Charts are built with PowerPoint's own chart tool and styled to the system, so teams can update the data." },
    ],
    sections: [
      { heading: "The brief", text: [
        "Suryana's decks were dense, inconsistent and hard to follow, and every team built its own. The task: one presentation and data-visual system that makes the FY2026 results clear in minutes and that anyone can reuse.",
      ] },
      { heading: "The insight", text: [
        "A slide should say one thing, and the title should say it. Executives read titles, not bullets.",
      ] },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "16-layout PowerPoint master template, chart style sheet and icon set",
          "15-slide FY2026 investor deck",
          "Before/after makeover of three slides",
          "Six infographics, annual report spreads and a 40-second data film",
        ],
      },
    ],
  },
  {
    slug: "thoda",
    title: "Thoda",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "Launch kit for a savings app that rounds up UPI payments: brand, app screens and a 45-second animated explainer.",
    categories: ["motion", "graphic"],
    thumb: "",
    colors: ["#13132B", "#1ED3A4"],
    preview: "",
    role: "Brand, UI design, character design, 2D animation",
    year: "2026",
    tools: ["Illustrator", "Figma", "After Effects", "Premiere Pro"],
    deliverables: ["Logo & app icon", "Character \"Sikka\"", "8 app screens", "45s explainer", "App-store screenshots", "Animated social posts"],
    outcome: "In progress — a complete launch kit: brand, 8 app screens and a 45-second explainer.",
    decisions: [
      { title: "A character for money", text: "Sikka, a friendly coin, makes saving feel playful instead of serious or scary." },
      { title: "One ordinary day", text: "The explainer follows one person's day of small payments, so the product explains itself through a story." },
      { title: "Bouncy but quick", text: "One set of motion rules for the app, the film and social, so everything feels like the same brand." },
    ],
    sections: [
      { heading: "The brief", text: [
        "Young Indian earners pay for everything by UPI and want to save, but never have enough left at month-end. Thoda rounds up each payment and saves the spare change automatically.",
      ] },
      { heading: "The insight", text: [
        "Nobody misses ₹3. Saving fails when it feels like a sacrifice; Thoda makes it invisible — the change from a chai.",
      ] },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Logo, app icon and the Sikka character sheet",
          "Eight key app screens and app-store screenshots",
          "Storyboard, style frames and the 45-second animated explainer",
          "UI micro-interactions and animated social posts",
        ],
      },
    ],
  },
  {
    slug: "kiro-one",
    title: "Kiro One",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "Launch film for an electric scooter: a 30-second hero film, kinetic-type feature film, colour grade and social cutdowns.",
    categories: ["video", "motion"],
    thumb: "",
    colors: ["#0B0F14", "#FF8A00"],
    preview: "",
    role: "Editing, colour grading, motion graphics, title design",
    year: "2026",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Photoshop"],
    deliverables: ["30s launch film", "20s kinetic-type film", "Colour grade (before/after)", "15s & 6s cutdowns", "Teasers", "Thumbnail & end card"],
    outcome: "In progress — a complete launch package: hero film, feature film and 6 social formats from one grade and one type system.",
    decisions: [
      { title: "Chaos to control", text: "Fast, off-beat cuts in the traffic, then smooth on-beat cuts once the rider is on the scooter — the edit tells the story." },
      { title: "Teal city, orange hero", text: "A muted teal grade with only the Mango Orange scooter saturated, so the eye always finds the product." },
      { title: "No voice-over", text: "Text and sound design carry the film, so every cut also works with the sound off." },
    ],
    sections: [
      { heading: "The brief", text: [
        "Launch a light, smart electric scooter for Indian city commuters who are tired of traffic, fuel bills and parking battles.",
      ] },
      { heading: "The insight", text: [
        "In Indian cities, the commute is the part of the day you don't control. Kiro One gives it back: \"Own the city.\"",
      ] },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Style frames, title design and the spec typography system",
          "30-second launch film and 20-second kinetic-type feature film",
          "Colour grade before/after",
          "15-second and 6-second cutdowns, teasers, thumbnail and end card",
        ],
      },
    ],
  },
  {
    slug: "kesar-lane",
    title: "Kesar Lane",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "A Diwali gifting campaign for a home-fragrance brand: Instagram grid, gift-guide carousel, stories, three reels and ad variants.",
    categories: ["graphic", "video"],
    thumb: "",
    colors: ["#2A1430", "#E8A33D"],
    preview: "",
    role: "Campaign concept, social design, short-form video, AI-assisted imagery",
    year: "2026",
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "Midjourney", "Firefly"],
    deliverables: ["Key visual", "9-post grid", "8-slide carousel", "6 stories", "3 reels", "9 ad variants", "WhatsApp & email creatives"],
    outcome: "In progress — a 4-week Diwali campaign: 9-post grid, carousel, 6 stories, 3 reels and 9 ad variants from one key visual.",
    decisions: [
      { title: "Memories, not sales", text: "Each post links a scent to a Diwali memory, instead of shouting discounts." },
      { title: "A calm, dark grid", text: "Deep plum and candlelight stand out in a feed full of bright, crowded Diwali posts." },
      { title: "Sell where India buys", text: "WhatsApp creatives alongside Instagram, because that is how small D2C brands actually sell." },
    ],
    sections: [
      { heading: "The brief", text: [
        "Help a small D2C home-fragrance brand stand out during Diwali gifting season and drive orders before the shipping cut-off.",
      ] },
      { heading: "The insight", text: [
        "Diwali is the one time of year your home is supposed to smell like a memory. The campaign asks: \"What does Diwali smell like to you?\"",
      ] },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Key visual and the 9-post Instagram grid",
          "Eight-slide gift-guide carousel and six stories",
          "Three reels for tease, launch and gift rush",
          "Nine ad variants, WhatsApp creatives and the AI process board",
        ],
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   MORE WORK — smaller projects shown in the grid (opens in a viewer)
   category: "graphic" | "video" | "motion"  — or a list, e.g. ["motion", "video"]
   thumb / thumbPosition, gallery (images), videos (embed links), link, colors
   Leave the list empty [] to hide the section.
   -------------------------------------------------------------------------- */
const PROJECTS = [];
