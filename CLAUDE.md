# Project: personal portfolio (graphic design, video editing, motion graphics)

## Session continuity rule (always follow)
The owner's sessions can run out of context. Any fresh session must be able to continue with no loss:
1. **At the start of every session:** read `STATUS.md` first and continue from its "Next steps". Don't re-ask decisions already recorded there.
2. **After every meaningful change** (site update, new images, a decision, a brief created or changed): update `STATUS.md` in the same commit — current state, decisions, links, and the exact next step — then push.
3. **Record every decision the owner makes** (positioning, what to add or remove, tools he does or doesn't want used) in `STATUS.md` under "Decisions", with the date.
4. **Never keep important state only in the chat.** If it matters for the next session, it goes in `STATUS.md` (or the briefs in Claude Docs, linked from `STATUS.md`).
5. **To resume in a new window:** start a session with the `maheshpatil-portfolio/my-project` repo (formerly `sharehub6224/my-project`) and the `my-project` environment (add `maheshpatil-portfolio.github.io` to its allowed hosts for live checks), and say: "Read STATUS.md and continue."

- Static site, no build step: `index.html`, `css/style.css`, `js/main.js`, `js/data.js`.
- ALL content (text, projects, links) lives in `js/data.js`; `main.js` renders it. Keep content out of HTML.
- Project categories: `graphic`, `video`, `motion` (string or list). Projects use `thumb`, `gallery` (image list), `videos` (YouTube/Vimeo/Behance Adobe embed URLs) and `link` (Behance page).
- Main work = `CASE_STUDIES` in `js/data.js`, rendered on the home page and on `project.html?p=<slug>` by `js/case.js`. `concept: true` adds a Concept badge + fictional-brand note; `draft: true` hides it unless the URL has `?preview`.
- Concept project assets live in `assets/images/concepts/<slug>/`. Old Behance work was removed at the owner's request (Nov 2026); `PROJECTS` is empty, which hides the grid.
- AI-generated images must be labelled: `ai: "ChatGPT"` on a section image (adds an "AI concept" tag + caption) and `thumbAi: true` when a card cover is AI. Never present AI or Claude-made visuals as the owner's design; Claude-made images use `ai: "Claude", tag: "Made with AI"` (the `tag` field sets the badge text).
- Positioning (Nov 2026): Graphic Designer & Motion Graphics Editor. The owner does NOT do UI/UX — never add UI/UX work, tags or claims. Video editing is optional/learning: only tag a project "video" once a finished edit exists.
- Focus (Nov 2026, job-market based): 3 public case studies in this order — Suryana (corporate presentations + infographics + motion summary video), Kiro One (360° product launch: posters, in-store POSM kit, social, motion video), Kesar Lane (festive social + flyer/poster + motion reels). Chai Theory and Thoda are kept as drafts.
- Content must stay factual to the owner's CV/Behance — don't invent clients, numbers or projects.
- Portfolio research (Nov 2026): recruiters decide in ~5–20 s, so the first screen must show role, years, brands and a CTA; 3–5 deep case studies beat many shallow ones; case studies lead with problem, role, key decisions and outcome; keep media light (hover loops < 2 MB, respect reduced motion).
- Core goal (Nov 2026, owner): hiring managers judge **design quality and problem-solving**. Every case study shows problem → thinking → better solution visually (before/after pairs, sketches/options, final work). When suggesting next work, prioritise what proves these two skills, and give design-quality feedback on everything the owner sends.
- Visual-first (Nov 2026, owner's request): let the work speak. One-line brief, short captions (2–4 words), no long paragraphs; images come right after the title.
- Dark theme; colors are CSS variables in `:root` of `style.css`.
- Must stay responsive (test at 390px wide, no horizontal scroll) and deployable on GitHub Pages.
- Large videos go on YouTube/Vimeo, not in the repo.
