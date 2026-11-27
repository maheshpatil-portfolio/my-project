# Portfolio — current status (for any new Claude session)

Live site: https://sharehub6224.github.io/my-project/  ·  Repo: sharehub6224/my-project (GitHub Pages from `main`)
Cloud environment to use: **my-project** (allows Behance, the live site and Google Fonts)

## Positioning
Mahesh Patil — **Graphic Designer & Motion Graphics Editor · 10+ yrs** (Hyderabad).
Strengths: corporate presentations, social media posts, flyers, posters, motion graphics, video editing (learning),
retail / in-store branding (Vivo, Coolpad, AGX: in-shop branding, signage, danglers, standees).
**No UI/UX.** Only tag a project "video" once a finished edit exists.

## Case studies (all concept projects, all `inProgress: true`)
| Order | Slug | Status | Brief (Claude Docs) |
|---|---|---|---|
| 1 | suryana-renewables | Public — 3 AI mood images + 5 AI slide concepts (cover, KPIs, revenue, rooftop "after", thank-you) | https://claude.ai/artifact/9qBnBS92EtFKshUNLwX7k9 |
| 2 | kiro-one | Public — 3 AI concept images (key visual = cover, showroom kit = hero, poster series) | https://claude.ai/artifact/UNo42qy7CW5f2NtQycEC9j |
| 3 | kesar-lane | Public — 2 AI concept images (key visual = cover, gift box); pop-up stall image still to come | https://claude.ai/artifact/Fc7qK6mQfh75MEdBh3DZfm |
| – | chai-theory | Draft (hidden) — has logo exploration + 3 AI images | https://claude.ai/artifact/MgBFfKHp3wEAD3eAuhnDZj |
| – | thoda | Draft (hidden) — has 3 AI images | https://claude.ai/artifact/LmpohDK2MnkpqqVnxzwcRN |

## How work gets added
- Owner generates AI images himself in ChatGPT (do NOT generate images with ElevenLabs or any tool unless he asks by name).
- Every AI image gets `ai: "ChatGPT"` (section image) or `thumbAi: true` (card cover) → "AI concept" tag + honest caption.
- Images: optimise to WebP ≤1600 px into `assets/images/concepts/<slug>/ai/`, add a "Visual direction" section, set the best as `thumb` + `hero`.
- After every push: wait for the live site to match (`curl` js/data.js vs local), then check it in Playwright via the proxy.

## Decisions (newest first)
- 2026-11-27 — Deck slides exported to `assets/images/concepts/suryana-renewables/deck/slide-01..16.webp` (not on the site yet). Owner asked to show them without a "Made with Claude" label; Claude declined (would present Claude's work as his to employers) and offered: (1) owner reworks the deck → no label, (2) add now with a quiet "Made with AI" tag, (3) wait. Awaiting his choice.
- 2026-11-27 — Owner asked Claude to build the Suryana deck. Made `work/suryana/Suryana-FY2026-Investor-Deck.pptx` (15 slides from the brief storyline + slide 16 'before' slide) with PDF and build script. It is Claude's work: any use on the site must be labelled "Made with Claude"; owner can edit/redesign it in PowerPoint to make it his own. Not on the site yet.
- 2026-11-27 — Owner's guiding rule: hiring managers mainly judge **design quality and problem-solving**. Every case study must show both, visually: the problem (e.g. a bad 'before' slide, a cluttered shelf), the thinking (sketches, options, grids), and the better solution (the 'after'). Prioritise before/after pairs and process visuals over text, and push design polish on every piece.
- 2026-11-27 — Owner: "show more of the design skill than text". Case pages are now visual-first: hero image right after the title, role/tools/note under it, one-line brief, short captions (the AI tag on each image names the tool), 'Key decisions' moved to the bottom, outcome hidden while in progress, deliverables/year removed from the page. Keep all future text to one line per section.
- 2026-11-27 — Suryana: 5 slide concepts made by ChatGPT (owner confirmed) added, labelled AI, in "Deck direction" (cover) and "Key slides" (grid). Files `assets/images/concepts/suryana-renewables/ai/slide-*.webp`. Still missing: the "before" slide for the before/after pair. Thank-you slide tagline says "Powering a brighter tomorrow"; brand tagline is "Power that rises every day" — fix in the rebuild.
- 2026-11-27 — Suryana logo: owner made a ChatGPT exploration (saved, not on site: `assets/images/concepts/suryana-renewables/process/logo-ai-exploration-chatgpt.webp`). Direction kept: 4-bar half-sun + flat horizon line + lowercase "suryana". Owner rebuilds it himself in PowerPoint (equal bar heights, horizon line half as tall). If the ChatGPT version is ever shown, label it AI-assisted (ChatGPT).
- 2026-11-27 — Owner starts his own designs with Suryana slides, round 1 (from the brief): slide 1 cover, slide 2 KPI row, slide 3 revenue chart, and before/after pair 1. Export PNG 1920×1080. When received: add as his work (no `ai` flag) in a new "The deck" section and a "Before / after" section.
- 2026-11-27 — Kesar Lane AI images added: key visual (cover) and gift-box flat lay, in a "Visual direction" grid. Pop-up stall image (16:9) pending; when it arrives, use it as the `hero` and add it to the grid.
- 2026-11-27 — Kiro One AI images added (key visual, showroom kit, poster series).
- 2026-11-27 — Rule: STATUS.md is the handoff file; every session reads it first and updates it after each change.
- 2026-11-27 — Focus on 3 case studies (Suryana, Kiro One, Kesar Lane) based on India job-market research; Chai Theory and Thoda hidden as drafts.
- 2026-11-27 — Kiro One = 360° product launch (key visual, posters/flyers, in-store POSM kit, social, motion video). Kesar Lane adds flyer, poster, pop-up dangler. Suryana's film = "motion summary video".
- 2026-11-27 — Title: "Graphic Designer & Motion Graphics Editor · 10+ yrs". No UI/UX anywhere (UI/UX certificate and Figma removed from site). Video editing only tagged once a finished edit exists.
- 2026-11-27 — Owner generates AI images himself (ChatGPT). Never generate images for him unless he asks by name. All AI images labelled "AI concept".
- 2026-11-27 — Old Behance work removed from the site; no NDA project; LinkedIn link added; portfolio link added to his LinkedIn.

## Next steps
1. Kesar Lane: third image, pop-up stall with dangler and A3 poster (16:9). Owner generates it in ChatGPT; add as `hero` (ai: "ChatGPT") plus to the Visual direction grid.
2. Suryana: owner rebuilds the slides by hand in PowerPoint (+ the "before" slide); his versions replace the AI ones, with no AI label. Then owner's own designs (slides, posters, in-store kit, motion videos) replace AI images over time; remove `inProgress` when a project is finished.
3. Owner to update his CV PDF (still lists UI/UX + Figma) and send it to replace `assets/Mahesh-Patil-Resume.pdf`.
4. Later: 60–90 s showreel from the three projects' motion pieces.
