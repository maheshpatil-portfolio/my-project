# Project: personal portfolio (graphic design, video editing, motion graphics)

- Static site, no build step: `index.html`, `css/style.css`, `js/main.js`, `js/data.js`.
- ALL content (text, projects, links) lives in `js/data.js`; `main.js` renders it. Keep content out of HTML.
- Project categories: `graphic`, `video`, `motion` (string or list). Projects use `thumb`, `gallery` (image list), `videos` (YouTube/Vimeo/Behance Adobe embed URLs) and `link` (Behance page).
- Main work = `CASE_STUDIES` in `js/data.js`, rendered on the home page and on `project.html?p=<slug>` by `js/case.js`. `concept: true` adds a Concept badge + fictional-brand note; `draft: true` hides it unless the URL has `?preview`.
- Concept project assets live in `assets/images/concepts/<slug>/`. Old Behance work was removed at the owner's request (Nov 2026); `PROJECTS` is empty, which hides the grid.
- AI-generated images must be labelled: `ai: "ChatGPT"` on a section image (adds an "AI concept" tag + caption) and `thumbAi: true` when a card cover is AI. Never present AI or Claude-made visuals as the owner's design.
- Positioning (Nov 2026): Graphic Designer & Motion Graphics Editor. The owner does NOT do UI/UX — never add UI/UX work, tags or claims. Video editing is optional/learning: only tag a project "video" once a finished edit exists.
- Content must stay factual to the owner's CV/Behance — don't invent clients, numbers or projects.
- Portfolio research (Nov 2026): recruiters decide in ~5–20 s, so the first screen must show role, years, brands and a CTA; 3–5 deep case studies beat many shallow ones; case studies lead with problem, role, key decisions and outcome; keep media light (hover loops < 2 MB, respect reduced motion).
- Dark theme; colors are CSS variables in `:root` of `style.css`.
- Must stay responsive (test at 390px wide, no horizontal scroll) and deployable on GitHub Pages.
- Large videos go on YouTube/Vimeo, not in the repo.
