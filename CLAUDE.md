# Project: personal portfolio (graphic design, video editing, motion graphics)

- Static site, no build step: `index.html`, `css/style.css`, `js/main.js`, `js/data.js`.
- ALL content (text, projects, links) lives in `js/data.js`; `main.js` renders it. Keep content out of HTML.
- Project categories: `graphic`, `video`, `motion` (string or list). Projects use `thumb`, `gallery` (image list), `videos` (YouTube/Vimeo/Behance Adobe embed URLs) and `link` (Behance page).
- Work samples come from behance.net/maheshpatil224; images are stored as optimized WebP in `assets/images/behance/<project>/`.
- Content must stay factual to the owner's CV/Behance — don't invent clients, numbers or projects.
- Dark theme; colors are CSS variables in `:root` of `style.css`.
- Must stay responsive (test at 390px wide, no horizontal scroll) and deployable on GitHub Pages.
- Large videos go on YouTube/Vimeo, not in the repo.
