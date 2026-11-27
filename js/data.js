/* ==========================================================================
   YOUR CONTENT — edit this file to make the portfolio yours.
   You never need to touch the HTML/CSS to update text, projects or links.
   ========================================================================== */

const SITE = {
  name: "Mahesh Patil",
  role: "Graphic Designer & Motion Graphics Editor · 10+ yrs",
  // Handwritten script line under the name in the intro.
  heroScript: "Designer & Motion Editor",
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
   scriptLabel      → short handwritten word shown next to the title
   sections: each has heading, text (string or list of paragraphs), optional
             list (bullets), images (path or { src, caption, ai: "ChatGPT" }), layout: "grid"
             for 2 columns, and videos (YouTube / Vimeo links)
   -------------------------------------------------------------------------- */
const CASE_STUDIES = [
  {
    slug: "suryana-renewables",
    scriptLabel: "Presentations",   // handwritten word next to the title
    title: "Suryana Renewables",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "A presentation and infographic system for a solar company's annual results.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/suryana-renewables/ai/boardroom-deck.webp",
    thumbAi: true,
    hero: { src: "assets/images/concepts/suryana-renewables/deck/slide-01.webp", ai: "Claude", tag: "Made with AI", alt: "Cover slide: Suryana FY2026 Results, our strongest year yet, over a solar park at sunrise", caption: "Investor deck cover" },
    colors: ["#0F1B2D", "#FF8A1F"],
    preview: "",
    role: "Presentation design, data visualisation, layout, motion",
    year: "2026",
    tools: ["PowerPoint", "Illustrator", "InDesign", "After Effects"],
    deliverables: ["16-layout PowerPoint template", "15-slide investor deck", "Before/after makeover", "6 infographics", "Annual report spreads", "40s motion summary video"],
    outcome: "In progress — a 16-layout template any employee can use, and a 15-slide results story that reads from the titles alone.",
    decisions: [
      { title: "Action titles", text: "Every title states the takeaway." },
      { title: "One highlight", text: "Only the key number is orange." },
      { title: "Editable charts", text: "Native PowerPoint charts teams can update." },
    ],
    sections: [
      {
        heading: "The brief",
        text: ["Make dense results decks clear in minutes, with one reusable system."],
      },
      {
        heading: "Before / after",
        text: ["Nine bullets and a 3D chart become one clear message."],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/suryana-renewables/deck/slide-16.webp", ai: "Claude", tag: "Made with AI", alt: "Before: a cluttered default slide with nine bullet points and a rainbow 3D chart", caption: "Before" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-04.webp", ai: "Claude", tag: "Made with AI", alt: "After: rooftop revenue chart with a +75% callout", caption: "After" },
        ],
      },
      {
        heading: "The deck",
        layout: "grid",
        images: [
          { src: "assets/images/concepts/suryana-renewables/deck/slide-02.webp", ai: "Claude", tag: "Made with AI", alt: "KPI cards: revenue, capacity, EBITDA margin, customers", caption: "At a glance" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-03.webp", ai: "Claude", tag: "Made with AI", alt: "Five-year revenue bar chart with FY26 highlighted", caption: "Revenue" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-05.webp", ai: "Claude", tag: "Made with AI", alt: "EBITDA margin line chart from 21% to 27%", caption: "Margins" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-07.webp", ai: "Claude", tag: "Made with AI", alt: "Horizontal bar chart of capacity by state with the top two highlighted", caption: "Footprint" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-09.webp", ai: "Claude", tag: "Made with AI", alt: "Dark slide with 1.74 million tonnes of CO2 avoided", caption: "Impact" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-11.webp", ai: "Claude", tag: "Made with AI", alt: "Five-step 90-day rooftop project timeline", caption: "Process" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-13.webp", ai: "Claude", tag: "Made with AI", alt: "FY2027 roadmap in four quarterly cards", caption: "Roadmap" },
          { src: "assets/images/concepts/suryana-renewables/deck/slide-15.webp", ai: "Claude", tag: "Made with AI", alt: "Closing slide: Power that rises every day", caption: "Closing" },
        ],
      },
      {
        heading: "Mood & infographics",
        layout: "grid",
        images: [
          { src: "assets/images/concepts/suryana-renewables/ai/solar-park-sunrise.webp", ai: "ChatGPT", alt: "Aerial view of a solar park in Rajasthan at sunrise", caption: "Photography mood" },
          { src: "assets/images/concepts/suryana-renewables/ai/infographic-india.webp", ai: "ChatGPT", alt: "Infographic concept with an India map, bar chart and donut chart", caption: "Infographic style" },
        ],
      },
      {
        heading: "Coming next",
        list: ["Template guide", "Infographics", "Annual report spreads", "40s motion video"],
      },
    ],
  },
  {
    slug: "kiro-one",
    scriptLabel: "Product launch",   // handwritten word next to the title
    title: "Kiro One",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "A 360° electric-scooter launch: posters, in-store kit, social and motion.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/kiro-one/ai/key-visual.webp",
    thumbPosition: "right center",
    thumbAi: true,
    hero: { src: "assets/images/concepts/kiro-one/ai/showroom-kit.webp", ai: "ChatGPT", alt: "Concept of a Kiro One showroom with standee, ceiling danglers, display platform and fascia signage",
            caption: "In-store kit" },
    colors: ["#0B0F14", "#FF8A00"],
    preview: "",
    role: "Launch campaign, retail & in-store branding, print, social, motion graphics",
    year: "2026",
    tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
    deliverables: ["Launch key visual", "Posters & flyers", "In-store kit: standee, dangler, shelf strip, signage", "Social posts & teasers", "30s motion launch video"],
    outcome: "In progress — a 360° launch kit: one key visual carried across posters, in-store branding, social and a motion launch video.",
    decisions: [
      { title: "One key visual", text: "The same image from standee to Instagram." },
      { title: "Shop-floor ready", text: "Readable from 3 metres." },
      { title: "Specs as type", text: "Big numbers drive the layouts." },
    ],
    sections: [
      {
        heading: "The brief",
        text: ["Launch a city e-scooter in showrooms, on the street, on social and on video at once."],
      },
      {
        heading: "Visual direction",
        layout: "grid",
        images: [
          { src: "assets/images/concepts/kiro-one/ai/key-visual.webp", ai: "ChatGPT", alt: "Mango-orange electric scooter on a wet night-city street", caption: "Key visual" },
          { src: "assets/images/concepts/kiro-one/ai/poster-series.webp", ai: "ChatGPT", alt: "Three poster layouts with the scooter and blank headline and spec areas", caption: "Poster series" },
        ],
      },
      {
        heading: "Coming next",
        list: ["Posters", "Standee & dangler", "Social posts", "30s launch video"],
      },
    ],
  },
  {
    slug: "kesar-lane",
    scriptLabel: "Festive campaign",   // handwritten word next to the title
    title: "Kesar Lane",
    concept: true,
    draft: false,
    inProgress: true,
    summary: "A Diwali gifting campaign for a home-fragrance brand: social, print and motion.",
    categories: ["graphic", "motion"],
    thumb: "assets/images/concepts/kesar-lane/campaign/post-memory.webp",
    thumbAi: true,
    colors: ["#2A1430", "#E8A33D"],
    preview: "",
    role: "Logo, social design, layout & type (photos AI-generated)",
    year: "2026",
    tools: ["Illustrator", "Photoshop", "ChatGPT (photos)"],
    deliverables: ["Key visual", "9-post grid", "8-slide carousel", "6 stories", "Festive flyer & poster", "Pop-up stall dangler", "3 motion reels", "9 ad variants", "WhatsApp & email creatives"],
    outcome: "In progress — a 4-week Diwali campaign: 9-post grid, carousel, 6 stories, 3 motion reels and 9 ad variants from one key visual.",
    decisions: [
      { title: "Memories, not sales", text: "Each post links a scent to a memory." },
      { title: "Calm, dark grid", text: "Plum and candlelight stand out in a loud feed." },
      { title: "WhatsApp too", text: "Where small Indian brands actually sell." },
    ],
    sections: [
      {
        heading: "Brand & social",
        text: ["Logo, layout and type by me. Product photos made with AI (ChatGPT)."],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/kesar-lane/campaign/logo.webp", alt: "Kesar Lane logo: a diya flame rising from lotus leaves above a gold serif wordmark on deep plum", caption: "Logo" },
          { src: "assets/images/concepts/kesar-lane/campaign/post-memory.webp", alt: "Instagram post: Scent of a memory, a candle in an amber jar with the Kesar Lane label", caption: "Scent of a memory" },
          { src: "assets/images/concepts/kesar-lane/campaign/post-gifts.webp", alt: "Instagram post: Gifts that glow, three amber candles, a plum gift box and a brass diya", caption: "Gifts that glow" },
          { src: "assets/images/concepts/kesar-lane/campaign/post-calm.webp", alt: "Instagram post: Find your moment of calm, incense sticks in a brass lotus holder", caption: "Moment of calm" },
        ],
      },
      {
        heading: "Mood images",
        layout: "grid",
        images: [
          { src: "assets/images/concepts/kesar-lane/ai/key-visual.webp", ai: "ChatGPT", alt: "Candle in a glass jar with a brass lid, surrounded by lit clay diyas and marigolds on deep plum fabric", caption: "Key visual" },
          { src: "assets/images/concepts/kesar-lane/ai/gift-box.webp", ai: "ChatGPT", alt: "Open plum gift box with a candle, incense sticks, a brass lotus diya and a blank card", caption: "Gift box" },
        ],
      },
      {
        heading: "The brief",
        text: ["Help a small fragrance brand stand out during Diwali gifting season."],
      },
      {
        heading: "Coming next",
        list: ["Story / WhatsApp status", "Packaging & gift tag", "Bag & thank-you card", "Brand guidelines"],
      },
    ],
  },
  {
    slug: "chai-theory",
    scriptLabel: "Brand launch",   // handwritten word next to the title
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
    scriptLabel: "Explainer",   // handwritten word next to the title
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
