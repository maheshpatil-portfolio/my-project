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
   PROJECTS
   category: "graphic" | "video" | "motion"
   thumb:    cover image, e.g. "assets/images/vivo-retail.jpg" (leave "" for a colored placeholder)
   media:    what opens when clicked —
               an image path ("assets/images/poster.jpg"),
               a YouTube/Vimeo link,
               or an mp4 file ("assets/videos/promo.mp4")
   colors:   two colors used for the placeholder when there is no thumb
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Presentations & Infographics",
    category: "graphic",
    year: "2023 – now",
    client: "Genpact",
    tools: ["PowerPoint", "Illustrator", "Midjourney"],
    description: "Executive presentations, infographics and marketing creatives for global business teams.",
    thumb: "",
    media: "",
    colors: ["#7b5cff", "#00d4ff"],
  },
  {
    title: "Motion Graphics & Marketing Videos",
    category: "motion",
    year: "2021 – 2023",
    client: "NetScore Technologies",
    tools: ["After Effects", "Premiere Pro"],
    description: "Motion graphics and marketing videos created with the Marketing Director (USA).",
    thumb: "",
    media: "",
    colors: ["#f857a6", "#ff5858"],
  },
  {
    title: "Brand & Video Content",
    category: "video",
    year: "2021",
    client: "Avantel & Wiki Kids",
    tools: ["Premiere Pro", "After Effects"],
    description: "Videos, branding and creatives delivered while leading a team of designers and editors.",
    thumb: "",
    media: "",
    colors: ["#00c6ff", "#0072ff"],
  },
  {
    title: "Retail Print & Promotions",
    category: "graphic",
    year: "2018 – 2020",
    client: "AGX Retail",
    tools: ["Photoshop", "Illustrator", "CorelDRAW"],
    description: "Brochures, flyers, social posts and print campaigns for retail clients.",
    thumb: "",
    media: "",
    colors: ["#11998e", "#38ef7d"],
  },
  {
    title: "Brand Campaigns & Motion",
    category: "motion",
    year: "2016 – 2018",
    client: "Coolpad India",
    tools: ["After Effects", "Photoshop", "Illustrator"],
    description: "Campaign creatives, advertisements and motion graphics for smartphone launches.",
    thumb: "",
    media: "",
    colors: ["#fbd72b", "#f9484a"],
  },
  {
    title: "Retail & In-store Branding",
    category: "graphic",
    year: "2014 – 2016",
    client: "Vivo Smartphone India",
    tools: ["Photoshop", "Illustrator", "CorelDRAW"],
    description: "Posters, banners, in-store branding and promotional material for retail rollouts.",
    thumb: "",
    media: "",
    colors: ["#ff7a59", "#ffcf5c"],
  },
];
