/* ==========================================================================
   YOUR CONTENT — edit this file to make the portfolio yours.
   You never need to touch the HTML/CSS to update text, projects or links.
   ========================================================================== */

const SITE = {
  name: "Mahesh Patil",
  role: "Graphic Designer & Motion Graphics Editor · 10+ yrs",
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
  // What you did in each part of the reel: { time: "0:04", project: "Chai Theory — launch animation", role: "Concept, motion design" }
  showreelBreakdown: [],

  about: [
    "I'm Mahesh Patil, a Lead Graphic Designer with 10+ years of experience in branding, graphic design, motion graphics and visual storytelling. I've built brand, retail and marketing creative for Vivo and Coolpad, led a team of designers and video editors, and today create presentations, infographics and digital assets for global stakeholders at Genpact.",
    "I care about clean design, strong storytelling and brand consistency across digital, print and motion. I work closely with marketing, business and IT teams, and use AI tools like ChatGPT, Midjourney and Leonardo AI to explore concepts faster without compromising craft.",
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
    "CorelDRAW", "ChatGPT", "Midjourney", "Leonardo AI",
  ],

  services: [
    { icon: "✦", title: "Branding & Visual Identity", text: "Brand materials, campaigns, retail and in-store branding, print and social creatives — always on-guideline." },
    { icon: "◎", title: "Motion Graphics", text: "Logo animations, kinetic typography, animated explainers and social motion posts, built around clear visual storytelling." },
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

  certifications: ["Adobe Photoshop Certified"],

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
    slug: "suryana-renewables",
    title: "Suryana Renewables",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "A presentation and infographic system for a solar company's annual results: master template, investor deck, infographics and a motion summary video.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/suryana-renewables/ai/boardroom-deck.webp",
    thumbAi: true,
    hero: { src: "assets/images/concepts/suryana-renewables/ai/boardroom-deck.webp", ai: "ChatGPT", alt: "Concept of the Suryana results deck on a boardroom screen and laptop",
            caption: "Presentation direction — AI-generated concept (ChatGPT). Final template and deck in progress by Mahesh Patil." },
    colors: ["#0F1B2D", "#FF8A1F"],
    preview: "",
    role: "Presentation design, data visualisation, layout, motion",
    year: "2026",
    tools: ["PowerPoint", "Illustrator", "InDesign", "After Effects"],
    deliverables: ["16-layout PowerPoint template", "15-slide investor deck", "Before/after makeover", "6 infographics", "Annual report spreads", "40s motion summary video"],
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
        heading: "Visual direction",
        text: [
          "AI-generated mood images set the tone before the real slides are built: sunrise-warm imagery of the solar parks, and a clean navy, orange and green data style for charts and infographics.",
          "Next, these are rebuilt by hand as a working PowerPoint template, with native editable charts and the real (fictional) figures from the data sheet.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/suryana-renewables/ai/solar-park-sunrise.webp", ai: "ChatGPT", alt: "Aerial view of a solar park in Rajasthan at sunrise",
            caption: "Photography mood for covers and section dividers — AI-generated (ChatGPT)." },
          { src: "assets/images/concepts/suryana-renewables/ai/infographic-india.webp", ai: "ChatGPT", alt: "Infographic concept with an India map, bar chart and donut chart",
            caption: "Infographic style direction — AI-generated (ChatGPT). Map is illustrative only." },
        ],
      },
      {
        heading: "Deck direction",
        text: [
          "AI-generated slide concepts (ChatGPT) test the system on real content from the FY2026 data sheet: action titles that state the takeaway, Paper backgrounds, Deep Night type, and a single Sunrise orange highlight on the one number that matters.",
          "Next, each slide is rebuilt by hand as a working PowerPoint template with native, editable charts.",
        ],
        images: [
          { src: "assets/images/concepts/suryana-renewables/ai/slide-01-cover.webp", ai: "ChatGPT", alt: "Cover slide: Suryana Renewables FY2026 Results over a solar park at sunrise",
            caption: "Slide 1, cover — AI-generated concept (ChatGPT)." },
        ],
      },
      {
        heading: "Key slides",
        text: ["Each title states the takeaway, so a reader skimming only the titles still gets the story."],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/suryana-renewables/ai/slide-02-kpis.webp", ai: "ChatGPT", alt: "KPI slide: revenue 1,240 crore, capacity 1,640 MW, EBITDA margin 27%, 1,150 customers",
            caption: "Slide 2, KPI row: only the revenue figure is highlighted — AI-generated concept (ChatGPT)." },
          { src: "assets/images/concepts/suryana-renewables/ai/slide-03-revenue.webp", ai: "ChatGPT", alt: "Bar chart of revenue FY22 to FY26 with the FY26 bar in orange",
            caption: "Slide 3, five-year revenue: grey bars, one orange highlight — AI-generated concept (ChatGPT)." },
          { src: "assets/images/concepts/suryana-renewables/ai/slide-04-after-rooftop.webp", ai: "ChatGPT", alt: "Clustered bar chart of FY25 vs FY26 revenue by business line with rooftop FY26 in orange",
            caption: "Revenue by business line, the redesigned \"after\" slide — AI-generated concept (ChatGPT)." },
          { src: "assets/images/concepts/suryana-renewables/ai/slide-15-thank-you.webp", ai: "ChatGPT", alt: "Closing thank-you slide with the Suryana logo",
            caption: "Closing slide — AI-generated concept (ChatGPT)." },
        ],
      },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "16-layout PowerPoint master template, chart style sheet and icon set",
          "15-slide FY2026 investor deck, rebuilt by hand in PowerPoint from these concepts",
          "Before/after makeover of three slides",
          "Six infographics, annual report spreads and a 40-second motion summary video",
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
    summary: "A 360° launch for an electric scooter: key visual, posters and flyers, an in-store branding kit, social posts and a motion launch video.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/kiro-one/ai/key-visual.webp",
    thumbPosition: "right center",
    thumbAi: true,
    hero: { src: "assets/images/concepts/kiro-one/ai/showroom-kit.webp", ai: "ChatGPT", alt: "Concept of a Kiro One showroom with standee, ceiling danglers, display platform and fascia signage",
            caption: "In-store kit direction: standee, danglers, display platform and fascia — AI-generated concept (ChatGPT). Final artwork in progress by Mahesh Patil." },
    colors: ["#0B0F14", "#FF8A00"],
    preview: "",
    role: "Launch campaign, retail & in-store branding, print, social, motion graphics",
    year: "2026",
    tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
    deliverables: ["Launch key visual", "Posters & flyers", "In-store kit: standee, dangler, shelf strip, signage", "Social posts & teasers", "30s motion launch video"],
    outcome: "In progress — a 360° launch kit: one key visual carried across posters, in-store branding, social and a motion launch video.",
    decisions: [
      { title: "One key visual, everywhere", text: "The orange scooter against a night city works from a 6-ft standee to an Instagram square, so every touchpoint feels like one launch." },
      { title: "Built for the shop floor", text: "In-store pieces follow retail rules: readable from 3 metres, price plus three specs at most, and danglers designed on both sides." },
      { title: "Specs as the story", text: "Big numbers (140 KM, 3.1 S) become the typography system across posters, social and the motion video." },
    ],
    sections: [
      { heading: "The brief", text: [
        "Launch a light, smart electric scooter for Indian city commuters who are tired of traffic, fuel bills and parking battles — in showrooms, on the street, on social and on video, all at once.",
      ] },
      { heading: "The insight", text: [
        "In Indian cities, the commute is the part of the day you don't control. Kiro One gives it back: \"Own the city.\"",
      ] },
      {
        heading: "Visual direction",
        text: [
          "AI-generated concepts lock the launch look before the real artwork: one Mango Orange scooter, always facing forward, glowing against a dark, rain-wet night city — the same image on posters, in the showroom and on social.",
          "Next, every piece is built by hand to print specs: A2 posters with real headlines and specs, a double-sided dangler, a 2×6 ft standee and shop signage.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/kiro-one/ai/key-visual.webp", ai: "ChatGPT", alt: "Mango-orange electric scooter on a wet night-city street",
            caption: "Launch key visual direction — AI-generated (ChatGPT)." },
          { src: "assets/images/concepts/kiro-one/ai/poster-series.webp", ai: "ChatGPT", alt: "Three poster layouts with the scooter and blank headline and spec areas",
            caption: "Poster series layout direction: Range, Look, Speed — AI-generated (ChatGPT)." },
        ],
      },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Launch key visual and poster series",
          "In-store kit: standee, double-sided dangler, shelf strip and shop signage",
          "Social posts and teasers",
          "30-second motion launch video",
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
    summary: "A Diwali gifting campaign for a home-fragrance brand: Instagram grid, gift-guide carousel, festive flyer and poster, pop-up dangler, motion reels and ad variants.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/kesar-lane/ai/key-visual.webp",
    thumbAi: true,
    colors: ["#2A1430", "#E8A33D"],
    preview: "",
    role: "Campaign concept, social design, motion posts, AI-assisted imagery",
    year: "2026",
    tools: ["Photoshop", "Illustrator", "After Effects", "Midjourney", "Firefly"],
    deliverables: ["Key visual", "9-post grid", "8-slide carousel", "6 stories", "Festive flyer & poster", "Pop-up stall dangler", "3 motion reels", "9 ad variants", "WhatsApp & email creatives"],
    outcome: "In progress — a 4-week Diwali campaign: 9-post grid, carousel, 6 stories, 3 motion reels and 9 ad variants from one key visual.",
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
        heading: "Visual direction",
        text: [
          "AI-generated concepts set the campaign mood before the real artwork: deep plum, warm candlelight, brass and marigold — calm and premium, so the posts stand out in a loud Diwali feed.",
          "Next, the key visual, gift box, grid posts, flyer, poster and dangler are designed by hand, with real type, product names and layouts.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/kesar-lane/ai/key-visual.webp", ai: "ChatGPT", alt: "Candle in a glass jar with a brass lid, surrounded by lit clay diyas and marigolds on deep plum fabric",
            caption: "Key visual direction — AI-generated (ChatGPT)." },
          { src: "assets/images/concepts/kesar-lane/ai/gift-box.webp", ai: "ChatGPT", alt: "Open plum gift box with a candle, incense sticks, a brass lotus diya and a blank card",
            caption: "Diwali gift box flat lay direction — AI-generated (ChatGPT)." },
        ],
      },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Key visual and the 9-post Instagram grid",
          "Eight-slide gift-guide carousel and six stories",
          "Festive flyer, A3 poster and a dangler for mall pop-up stalls",
          "Three motion-graphics reels for tease, launch and gift rush",
          "Nine ad variants, WhatsApp creatives and the AI process board",
        ],
      },
    ],
  },
  {
    slug: "chai-theory",
    title: "Chai Theory",
    concept: true,
    draft: true,   // set aside Nov 2026 to focus on 3 case studies
    inProgress: true,   // shows an "In progress" badge; remove when the project is finished
    summary: "A 360° launch for a modern Indian chai brand: identity, packaging, campaign and motion.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/chai-theory/ai/packaging-range.webp",
    thumbAi: true,
    hero: { src: "assets/images/concepts/chai-theory/ai/packaging-range.webp", ai: "ChatGPT", alt: "Five Chai Theory tea boxes in turmeric, red, green, saffron and clay with line-art spices",
            caption: "Packaging direction — AI-generated concept (ChatGPT). Final packaging design in progress by Mahesh Patil." },
    preview: "",   // optional 2–4 s muted mp4 loop (under 2 MB) that plays on hover over the card
    role: "Creative direction, brand identity, packaging, campaign, motion graphics",
    year: "2026",
    tools: ["Illustrator", "Photoshop", "After Effects", "ChatGPT", "Midjourney"],
    deliverables: ["Brand identity & guidelines", "Packaging range", "Launch deck", "Social campaign", "20s animated launch ad", "Logo animation"],
    // Result, shown near the top. For concept work, describe what was delivered.
    outcome: "In progress — a complete, launch-ready brand system: identity, 5-blend packaging range, launch deck, social campaign, 20-second animated launch ad and logo animation.",
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
        heading: "Visual direction",
        text: [
          "AI-generated mood images set the direction before the final design: a five-colour packaging range with single-line spice illustrations, warm product photography, and how the brand could live in a real space.",
          "Next, these are rebuilt by hand: real die-lines, the final logo and type on every pack, and original illustrations.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/chai-theory/ai/chai-pour.webp", ai: "ChatGPT", alt: "Masala chai poured into a cutting-chai glass with whole spices on terracotta",
            caption: "Product photography mood — AI-generated (ChatGPT)." },
          { src: "assets/images/concepts/chai-theory/ai/office-kiosk.webp", ai: "ChatGPT", alt: "Concept of a Chai Theory kiosk in an office lobby",
            caption: "Retail kiosk mood — AI-generated (ChatGPT). People shown are AI-generated, not real customers." },
        ],
      },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Final logo, lockups and brand guidelines",
          "Packaging range for five blends",
          "Launch deck and social campaign",
          "20-second animated launch ad and logo animation",
        ],
      },
    ],
  },
  {
    slug: "thoda",
    title: "Thoda",
    concept: true,
    draft: true,   // set aside Nov 2026 to focus on 3 case studies
    inProgress: true,
    summary: "Launch kit for a savings app that rounds up UPI payments: brand identity, a coin character and a 45-second animated explainer.",
    categories: ["motion", "graphic"],
    thumb: "assets/images/concepts/thoda/ai/app-screens.webp",
    thumbAi: true,
    hero: { src: "assets/images/concepts/thoda/ai/app-screens.webp", ai: "ChatGPT", alt: "Three Thoda app screens: home with savings total, goals with progress rings, and a success screen",
            caption: "App mockup direction — AI-generated concept (ChatGPT). Simple app mockups for the explainer are being designed by Mahesh Patil." },
    colors: ["#13132B", "#1ED3A4"],
    preview: "",
    role: "Brand identity, character design, 2D motion graphics",
    year: "2026",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    deliverables: ["Logo & app icon", "Character \"Sikka\"", "45s animated explainer", "Storyboard & style frames", "App mockups for the film", "Animated social posts"],
    outcome: "In progress — a complete launch kit: brand, the Sikka character and a 45-second animated explainer.",
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
        heading: "Visual direction",
        text: [
          "AI-generated concepts explore the two things that make Thoda feel friendly: Sikka, the coin character who saves your change, and a bright, flat illustration style for the explainer's everyday Indian moments.",
          "Next, Sikka is redrawn by hand as a simple, rig-ready character for After Effects, and the explainer frames are illustrated in the final style.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/thoda/ai/sikka-character-sheet.webp", ai: "ChatGPT", alt: "Sikka the coin mascot in five poses: neutral, waving, cheering, sleeping and surprised",
            caption: "Character exploration: Sikka in five poses — AI-generated (ChatGPT)." },
          { src: "assets/images/concepts/thoda/ai/chai-stall-moment.webp", ai: "ChatGPT", alt: "Illustration of a young woman paying at a chai stall while a coin flies into a savings jar",
            caption: "Explainer style frame: the round-up moment — AI-generated (ChatGPT)." },
        ],
      },
      {
        heading: "Coming next",
        text: ["This case study is being built in public. Next up:"],
        list: [
          "Logo, app icon and the Sikka character sheet",
          "Simple app mockups used inside the explainer",
          "Storyboard, style frames and the 45-second animated explainer",
          "Animated social posts and short motion loops",
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
