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
    // Add more, e.g. { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
  ],
};

/* --------------------------------------------------------------------------
   CASE STUDIES — big projects with their own page (project.html?p=<slug>)
   concept: true   → shows a "Concept project" badge + a note that the brand is fictional
   draft:   true   → hidden on the live site; preview with  index.html?preview
   sections: each has heading, text (string or list of paragraphs), optional
             list (bullets), images (path or { src, caption }), layout: "grid"
             for 2 columns, and videos (YouTube / Vimeo links)
   -------------------------------------------------------------------------- */
const CASE_STUDIES = [
  {
    slug: "chai-theory",
    title: "Chai Theory",
    concept: true,
    draft: true,
    summary: "A 360° launch for a modern Indian chai brand: identity, packaging, campaign, launch film and motion.",
    categories: ["graphic", "motion", "video"],
    thumb: "assets/images/concepts/chai-theory/process/logo-exploration-r1.webp",
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
          "Shortlist: the cutting-chai glass inside a serif θ, and the θ bar breaking out of the glass. Final mark in progress.",
        ],
        layout: "grid",
        images: [
          { src: "assets/images/concepts/chai-theory/process/logo-exploration-r1.webp", caption: "Round 1 — vector studies for three routes" },
          { src: "assets/images/concepts/chai-theory/process/logo-ai-exploration-chatgpt.webp", caption: "AI-assisted ideation (ChatGPT), used for exploration only" },
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
