/* ==========================================================================
   YOUR CONTENT — edit this file to make the portfolio yours.
   You never need to touch the HTML/CSS to update text, projects or links.
   ========================================================================== */

const SITE = {
  name: "Mahesh Patil",
  role: "Graphic Designer · Video Editor · Motion Designer",
  tagline: "I design visuals that move — brand identities, edits and motion graphics that tell stories.",
  location: "Your City, Country",
  email: "hello@example.com",
  availability: "Open to full-time roles",

  // Your résumé/CV: put the PDF in assets/ (e.g. "assets/Mahesh-Patil-Resume.pdf").
  // Leave empty ("") to hide the "Download résumé" button.
  resume: "",

  // Your showreel: a YouTube or Vimeo link, or a file like "assets/videos/showreel.mp4".
  // Leave empty ("") to hide the "Watch showreel" button.
  showreel: "",

  about: [
    "I'm Mahesh Patil, a graphic designer, video editor and motion designer. I help brands, creators and businesses turn ideas into visuals people remember — from logos and social media creatives to YouTube edits, ads and animated explainers.",
    "I care about clean design, strong storytelling and pacing that keeps viewers watching. Whether it's a brand identity or a 15-second reel, I make sure every frame has a purpose.",
    "I'm now looking for a full-time role where I can grow with a creative team and own visual content from concept to final export.",
  ],

  // Optional highlights, e.g. { value: "3+", label: "Years experience" }. Leave empty [] to hide.
  stats: [],

  tools: [
    "Photoshop", "Illustrator", "InDesign", "After Effects",
    "Premiere Pro", "DaVinci Resolve", "Cinema 4D", "Figma", "Blender",
  ],

  services: [
    { icon: "✦", title: "Graphic Design", text: "Logos, brand identity, posters, social media creatives, packaging and print." },
    { icon: "▶", title: "Video Editing", text: "YouTube videos, reels & shorts, ads, music videos, color grading and sound sync." },
    { icon: "◎", title: "Motion Graphics", text: "Logo animations, kinetic typography, explainers, titles and animated social posts." },
  ],

  socials: [
    { label: "Behance", url: "https://www.behance.net/" },
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "YouTube", url: "https://www.youtube.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

/* --------------------------------------------------------------------------
   PROJECTS
   category: "graphic" | "video" | "motion"
   thumb:    image path, e.g. "assets/images/brand-cover.jpg" (leave "" for a colored placeholder)
   media:    what opens when clicked —
               an image path ("assets/images/poster.jpg"),
               a YouTube/Vimeo link,
               or an mp4 file ("assets/videos/promo.mp4")
   colors:   two colors used for the placeholder when there is no thumb
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Nova Coffee — Brand Identity",
    category: "graphic",
    year: 2026,
    client: "Nova Coffee Co.",
    tools: ["Illustrator", "Photoshop"],
    description: "Full visual identity: logo, color palette, packaging and café signage.",
    thumb: "",
    media: "",
    colors: ["#ff7a59", "#ffcf5c"],
  },
  {
    title: "Pulse — Music Festival Poster Series",
    category: "graphic",
    year: 2025,
    client: "Pulse Fest",
    tools: ["Photoshop", "Illustrator"],
    description: "A bold poster series and social media kit for a 3-day music festival.",
    thumb: "",
    media: "",
    colors: ["#7b5cff", "#ff4fd8"],
  },
  {
    title: "Travel Vlog — Iceland Edit",
    category: "video",
    year: 2026,
    client: "YouTube creator",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    description: "Story-driven edit with cinematic color grade, sound design and pacing for retention.",
    thumb: "",
    media: "",
    colors: ["#00c6ff", "#0072ff"],
  },
  {
    title: "Sneaker Drop — 30s Ad",
    category: "video",
    year: 2025,
    client: "Streetwear brand",
    tools: ["Premiere Pro", "After Effects"],
    description: "Fast-cut product ad for Instagram and TikTok with beat-synced transitions.",
    thumb: "",
    media: "",
    colors: ["#11998e", "#38ef7d"],
  },
  {
    title: "Fintech App — Explainer Animation",
    category: "motion",
    year: 2026,
    client: "Startup",
    tools: ["After Effects", "Illustrator"],
    description: "60-second 2D explainer: illustration, character animation and kinetic type.",
    thumb: "",
    media: "",
    colors: ["#f857a6", "#ff5858"],
  },
  {
    title: "Logo Reveal Pack",
    category: "motion",
    year: 2025,
    client: "Various clients",
    tools: ["After Effects", "Cinema 4D"],
    description: "A collection of 3D and 2D logo animations for intros and brand videos.",
    thumb: "",
    media: "",
    colors: ["#fbd72b", "#f9484a"],
  },
];
