# Portfolio — Graphic Design · Video Editing · Motion Graphics

A fast, dark, modern portfolio site. Plain HTML/CSS/JavaScript — no build step, free to host on GitHub Pages.

## ✏️ Make it yours — edit only `js/data.js`

| What | Where in `js/data.js` |
|------|------------------------|
| Name, role, tagline, email, location | `SITE` at the top |
| Résumé download button | `SITE.resume` — put your PDF in `assets/` and write its path |
| Showreel video | `SITE.showreel` — a YouTube/Vimeo link or `assets/videos/showreel.mp4` |
| About text, stats, tools, services | `SITE.about`, `SITE.stats`, `SITE.tools`, `SITE.services` |
| Social links (Behance, Instagram…) | `SITE.socials` |
| Your projects | the `PROJECTS` list |

### Adding a project
```js
{
  title: "My Project",
  category: "graphic",              // "graphic", "video", "motion" — or a list: ["motion", "video"]
  client: "Client name",
  tools: ["Illustrator"],
  description: "One or two lines about the project.",
  thumb: "assets/images/my-project/cover.webp",   // card image
  gallery: [                                     // images shown when the card is opened
    "assets/images/my-project/01.webp",
  ],
  videos: ["https://youtu.be/XXXXXXXXXXX"],      // optional: YouTube / Vimeo / Behance video embeds
  link: "https://www.behance.net/gallery/...",   // optional "View on Behance" button
},
```

### Images & videos
- Put images in `assets/images/` (JPG/WebP, ~1600px wide, under 500 KB each).
- **Videos:** upload to YouTube or Vimeo and paste the link — GitHub blocks files over 100 MB and big videos make the site slow. Small clips (< 20 MB) can go in `assets/videos/`.

## 🌐 Publish free with GitHub Pages
1. Merge this into the `main` branch.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**.
3. After a minute your site is live at `https://<your-username>.github.io/my-project/`.

## Preview locally
Just open `index.html` in a browser.
