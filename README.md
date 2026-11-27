# Portfolio — Graphic Design · Video Editing · Motion Graphics

A fast, dark, modern portfolio site. Plain HTML/CSS/JavaScript — no build step, free to host on GitHub Pages.

## ✏️ Make it yours — edit only `js/data.js`

| What | Where in `js/data.js` |
|------|------------------------|
| Name, role, tagline, email, location | `SITE` at the top |
| Résumé download button | `SITE.resume` — put your PDF in `assets/` and write its path |
| Showreel | `SITE.showreel` (YouTube/Vimeo link) + optional `showreelLoop` (short muted mp4), `showreelPoster`, `showreelBreakdown` (who-did-what list) |
| Portfolio PDF button | `SITE.portfolioPdf` — put the PDF in `assets/` |
| Brands strip | `SITE.brands` |
| About text, stats, tools, services | `SITE.about`, `SITE.stats`, `SITE.tools`, `SITE.services` |
| Social links (Behance, Instagram…) | `SITE.socials` |
| Case studies (main work, own page each) | the `CASE_STUDIES` list — `draft: true` hides one until it's ready; `outcome` and `decisions` show near the top; `preview` = 2–4 s mp4 that plays on hover |
| Smaller projects grid | the `PROJECTS` list (empty = hidden) |

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

## Previewing drafts
Add `?preview` to the address to see draft case studies, e.g. `https://maheshpatil-portfolio.github.io/?preview`.
Drafts are invisible to everyone else.

## Preview locally
Just open `index.html` in a browser.
