/* ==========================================================================
   YOUR CONTENT — edit this file to make the portfolio yours.
   You never need to touch the HTML/CSS to update text, projects or links.
   ========================================================================== */

const SITE = {
  name: "Mahesh Patil",
  role: "Lead Graphic Designer · Creative Lead",
  tagline: "10+ years of branding, motion graphics and video for teams at Genpact, Vivo, Coolpad and more.",
  location: "Hyderabad, India",
  email: "maheshpatil1@hotmail.com",
  availability: "Open to full-time roles",

  // Your résumé/CV PDF in assets/. Leave empty ("") to hide the "Download résumé" button.
  resume: "assets/Mahesh-Patil-Resume.pdf",

  // Your showreel: a YouTube or Vimeo link, or a file like "assets/videos/showreel.mp4".
  // Leave empty ("") to hide the "Watch showreel" button.
  showreel: "",

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
    { label: "Behance", url: "https://www.behance.net/maheshpatil224" },
    // Add more, e.g. { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
  ],
};

/* --------------------------------------------------------------------------
   PROJECTS  (from behance.net/maheshpatil224)
   category: "graphic" | "video" | "motion"  — or a list, e.g. ["motion", "video"]
   thumb:    cover image shown on the card (thumbPosition: optional crop, e.g. "left center")
   gallery:  images shown when the card is opened (top to bottom)
   videos:   YouTube / Vimeo / Behance (Adobe) embed links shown when opened
   link:     "View on Behance" link in the viewer
   colors:   placeholder colors, only used if there is no thumb
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Coolpad & ACT Fibernet Campaigns",
    category: "graphic",
    client: "Coolpad India · ACT Fibernet",
    tools: ["Photoshop", "Illustrator"],
    description: "Smartphone launch creatives, Amazon-exclusive sale posts, festival greetings, contest announcements and broadband ads — consistent brand campaigns for digital and social.",
    thumb: "assets/images/behance/graphic-design-works/cover.webp",
    gallery: [
      "assets/images/behance/graphic-design-works/01.webp",
      "assets/images/behance/graphic-design-works/02.webp",
      "assets/images/behance/graphic-design-works/03.webp",
      "assets/images/behance/graphic-design-works/04.webp",
      "assets/images/behance/graphic-design-works/05.webp",
      "assets/images/behance/graphic-design-works/06.webp",
      "assets/images/behance/graphic-design-works/07.webp",
      "assets/images/behance/graphic-design-works/08.webp",
      "assets/images/behance/graphic-design-works/09.webp",
      "assets/images/behance/graphic-design-works/10.webp",
      "assets/images/behance/graphic-design-works/11.webp",
      "assets/images/behance/graphic-design-works/12.webp",
      "assets/images/behance/graphic-design-works/13.webp",
      "assets/images/behance/graphic-design-works/14.webp",
      "assets/images/behance/graphic-design-works/15.webp",
    ],
    link: "https://www.behance.net/gallery/110489837/Graphic-Design-Works",
    colors: ["#ff7a59", "#ffcf5c"],
  },
  {
    title: "Motion Graphics & Video Editing",
    category: ["motion", "video"],
    tools: ["After Effects", "Premiere Pro"],
    description: "A selection of motion graphics and edited videos created in After Effects and Premiere Pro.",
    thumb: "assets/images/behance/motion-graphics-video-editing/cover.webp",
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/GgVs8Y6Yef9/embed?api_key=behance1&bgcolor=%23191919",
      "https://www-ccv.adobe.io/v1/player/ccv/JQJKZz7V-L4/embed?api_key=behance1&bgcolor=%23191919",
      "https://www-ccv.adobe.io/v1/player/ccv/2PY9HDHHbba/embed?api_key=behance1&bgcolor=%23191919",
    ],
    link: "https://www.behance.net/gallery/110992271/Motion-Graphics-Video-Editing",
    colors: ["#f857a6", "#ff5858"],
  },
  {
    title: "Future Electric — Brand Identity",
    category: "graphic",
    tools: ["Illustrator"],
    description: "Logo and visual identity for an electric-mobility brand, with an EV infographic and a 'Future of Mobility' key visual.",
    thumb: "assets/images/behance/future-electric/03.webp",
    gallery: [
      "assets/images/behance/future-electric/01.webp",
      "assets/images/behance/future-electric/02.webp",
      "assets/images/behance/future-electric/03.webp",
    ],
    link: "https://www.behance.net/gallery/160395643/Future-Electric",
    colors: ["#7b5cff", "#00d4ff"],
  },
  {
    title: "Social Media & Ad Creatives",
    category: "graphic",
    tools: ["Photoshop", "Illustrator"],
    description: "Instagram carousels, product ads and sale posts — scroll-stopping layouts with bold typography.",
    thumb: "assets/images/behance/graphic-designer-portfolio/cover.webp",
    gallery: [
      "assets/images/behance/graphic-designer-portfolio/01.webp",
    ],
    link: "https://www.behance.net/gallery/169130177/Graphic-Designer-Portfolio",
    colors: ["#11998e", "#38ef7d"],
  },
  {
    title: "Logo Design",
    category: "graphic",
    tools: ["Illustrator"],
    description: "Logo marks and brand symbols, from a bold monogram to a mascot-style crest.",
    thumb: "assets/images/behance/logo-design/cover.webp",
    gallery: [
      "assets/images/behance/logo-design/01.webp",
      "assets/images/behance/logo-design/02.webp",
      "assets/images/behance/logo-design/03.webp",
    ],
    link: "https://www.behance.net/gallery/110581479/Logo-Design",
    colors: ["#fbd72b", "#f9484a"],
  },
  {
    title: "Never Mind — Typography",
    category: "graphic",
    tools: ["Illustrator"],
    description: "Expressive typographic wordmarks that play with letterforms to show meaning — Mind, On/Off and Space.",
    thumb: "assets/images/behance/never-mind/cover.webp",
    gallery: [
      "assets/images/behance/never-mind/01.webp",
    ],
    link: "https://www.behance.net/gallery/166029135/Never-Mind",
    colors: ["#222", "#e53935"],
  },
  {
    title: "Case Study Layout",
    category: "graphic",
    tools: ["InDesign", "Illustrator"],
    description: "A two-page corporate case study template: challenge, problem, solution process, plan and results.",
    thumb: "assets/images/behance/case-study-design/cover.webp",
    gallery: [
      "assets/images/behance/case-study-design/01.webp",
      "assets/images/behance/case-study-design/02.webp",
    ],
    link: "https://www.behance.net/gallery/162083297/Case-Study-Design",
    colors: ["#e53935", "#ff8a80"],
  },
  {
    title: "Banner Design",
    category: "graphic",
    tools: ["Photoshop"],
    description: "A web banner for a modern furniture and interior design brand.",
    thumb: "assets/images/behance/banner-designs/01.webp",
    thumbPosition: "left center",
    gallery: [
      "assets/images/behance/banner-designs/01.webp",
    ],
    link: "https://www.behance.net/gallery/162545625/Banner-Designs",
    colors: ["#1e2a3a", "#b6e33b"],
  },
];
