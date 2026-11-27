# Portfolio — current status (for any new Claude session)

Live site: https://maheshpatil-portfolio.github.io/my-project/  ·  Repo: https://github.com/maheshpatil-portfolio/my-project (GitHub Pages from `main`)
(Repo rename to `maheshpatil-portfolio.github.io` did NOT save — GitHub kept `my-project`. If renamed later, the site moves to https://maheshpatil-portfolio.github.io/.)
(Before 2026-11-27 it was https://sharehub6224.github.io/my-project/ — repo sharehub6224/my-project. The old link no longer works.)
Cloud environment to use: **my-project** (allows Behance, the live site and Google Fonts)

## Positioning
Mahesh Patil — **Graphic Designer & Motion Graphics Editor · 10+ yrs** (Hyderabad).
Strengths: corporate presentations, social media posts, flyers, posters, motion graphics, video editing (learning),
retail / in-store branding (Vivo, Coolpad, AGX: in-shop branding, signage, danglers, standees).
**No UI/UX.** Only tag a project "video" once a finished edit exists.

## Case studies (all concept projects, all `inProgress: true`)
| Order | Slug | Status | Brief (Claude Docs) |
|---|---|---|---|
| 1 | suryana-renewables | Public — Claude-built 16-slide deck shown (tagged "Made with AI") incl. before/after + 2 ChatGPT mood images | https://claude.ai/artifact/9qBnBS92EtFKshUNLwX7k9 |
| 2 | kiro-one | Public — 3 AI concept images (key visual = cover, showroom kit = hero, poster series) | https://claude.ai/artifact/UNo42qy7CW5f2NtQycEC9j |
| 3 | kesar-lane | Public — owner's logo + 3 Instagram posts (AI photos, his design), 2 AI mood images | https://claude.ai/artifact/Fc7qK6mQfh75MEdBh3DZfm |
| – | chai-theory | Draft (hidden) — has logo exploration + 3 AI images | https://claude.ai/artifact/MgBFfKHp3wEAD3eAuhnDZj |
| – | thoda | Draft (hidden) — has 3 AI images | https://claude.ai/artifact/LmpohDK2MnkpqqVnxzwcRN |

## Kesar Lane: owner's own campaign (in progress, 2026-11-27)
Owner designs logo + layouts himself over ChatGPT photos (photos get AI caption; logo/layout/type are his, no AI tag).
- [x] Brand logo (diya flame + lotus leaves, serif wordmark, "HOME FRAGRANCES")
- [x] Instagram carousel, 3 slides
- [ ] Instagram Story / WhatsApp status
- [ ] Product packaging + gift tag
- [ ] Shopping bag + thank-you card
- [ ] Suggested: brand guidelines page (logo, clear space, colours, fonts, do's/don'ts), corporate appeal
Added 2026-11-27: `assets/images/concepts/kesar-lane/campaign/{logo,post-memory,post-gifts,post-calm}.webp` → "Brand & social" grid (first section). Logo has no AI tag; posts: badge removed at owner's request; then owner asked to remove AI from the images entirely → per-image credit removed; one line under the "Brand & social" heading discloses it ("Logo, layout and type by me. Product photos made with AI (ChatGPT)."). Keep that line: Claude would not drop the disclosure entirely (owner confirmed he did logo/layout/type; photos are ChatGPT). Card cover = post-memory (thumbAi). Tools corrected to Illustrator, Photoshop, ChatGPT (photos). AI tags moved to top-right so they don't cover designs. Old ChatGPT images now under "Mood images".

### Rebuilding the posts with free stock photos (no AI photos), 2026-11-27
Owner picked Unsplash photos: jar candle with bokeh → "Scent of a memory"; single candle on black → "Moment of calm"; brass-plate diyas → "Gifts that glow"; hands holding a diya → Story/WhatsApp. Owner builds them himself in Photoshop, coached step by step via annotated screenshots (one step per message, he asked for that).
"Scent of a memory" progress: 1080×1080 canvas ✔, photo placed + sides extended with Photoshop Generative Fill ✔ (credit: "Photo: Unsplash, background extended with Photoshop Generative Fill"), ring stain healed ✔, "Top shade" gradient layer (#1A0B1F → transparent, top to just above flame) in progress.
Next: plum Solid Color #2A1430 Soft Light 30–40% → Curves (lift blacks) → flame glow → jar label (cream #F5EBDD, logo, "Saffron & Sandalwood · 200 g", Warp Arc −8, darken ~35%) → text (logo top, italic headline, subline, "Shop the Diwali Collection · link in bio") → petals → export 2160 px. When the stock versions arrive, replace the AI posts and drop the AI disclosure line.

## Reference portfolio (owner shared, 2026-11-27)
Owner shared pages from another designer's Behance portfolio as inspiration only (do not copy). Takeaways agreed:
- Logo rationale page (logo + arrows explaining each decision) → make one for Kesar Lane (flame = Diwali/light, lotus leaves = ritual/care, serif = premium heritage, saffron = "kesar", plum = calm premium).
- Brand board (logo, mockup, font, colours, pattern, packaging, logo versions) → Kesar Lane brand board.
- Full branding mockups → Kesar Lane gift box, tag, bag, card, Instagram profile (no app/website mockups: not UI/UX).
- Social posts in Instagram frames → show Kesar Lane posts this way.
- Print in real-world mockups (standee, billboard, brochure) → Kiro One standee/dangler/billboard; Suryana annual-report spreads.
- Skip: UI/UX, logo walls of 12+, lime-on-black style, long generic paragraphs.

## How work gets added
- Owner generates AI images himself in ChatGPT (do NOT generate images with ElevenLabs or any tool unless he asks by name).
- Every AI image gets `ai: "ChatGPT"` (section image) or `thumbAi: true` (card cover) → "AI concept" tag + honest caption.
- Images: optimise to WebP ≤1600 px into `assets/images/concepts/<slug>/ai/`, add a "Visual direction" section, set the best as `thumb` + `hero`.
- After every push: wait for the live site to match (`curl` js/data.js vs local), then check it in Playwright via the proxy.

## Decisions (newest first)
- 2026-11-27 — Owner liked the bold style and asked for a version closer to the reference. Added: "Portfolio" cover (glowing diya light as the "o", script name), dashed selection frames, Table of Contents, dark "Selected Work" divider page, "Hello! I am Mahesh Patil." about page with hand-drawn "About me" arrow, "Thanks for scrolling!" ending with Ps/Ae badges.
- 2026-11-27 — Owner asked to design the site "as per the reference" (another designer's Behance portfolio). New look: grey grain paper + dark bands, "Hello! I am Mahesh Patil" intro with gradient name + saffron script "Designer & Motion Editor", bold section titles with script words (Selected *Work*, What I *Do*, Experience *10+ years*, About *me*, Let's work *Together*), rounded shadow cards with faint 01/02/03 numbers. Fonts: Poppins + Mrs Saint Delafield. Accent saffron #e8952f (not the reference's lime).
- 2026-11-27 — Owner asked for a **corporate, premium, subtle** look. Same editorial layout, new tokens: bg #f7f6f2, navy ink #0f1b2d, muted brass #8f6f3a, quieter rules, Newsreader + Inter Tight, smaller calmer headlines, intro facts on a white panel, soft shadow on case-study images.
- 2026-11-27 — Owner felt the site looked AI-generated. Redesigned to an **editorial paper** style (owner picked it from 3 options): off-white #f3efe7, ink #161412, saffron #b5501a, Instrument Serif/Sans, numbered case-study list with big images, text links instead of buttons, no gradients/pills/emoji. Hero headline comes from `SITE.headline`. No personal photo (owner's choice). AI labels kept but restyled as small square labels.
- 2026-11-27 — Owner wants a 30 s personal brand video from his ChatGPT storyboard. Advice given: he makes it himself (it proves his motion skill), open with work, use only his own designs, title "Graphic Designer & Motion Graphics Editor", kinetic type instead of cliché VO. Plan: `work/showreel/PLAN.md`.
- 2026-11-27 — New free link: GitHub username changed sharehub6224 → **maheshpatil-portfolio** ("maheshpatil" was taken); repo renamed my-project → **maheshpatil-portfolio.github.io**, so the site is at the root: https://maheshpatil-portfolio.github.io/. No paid domain (owner's budget; maheshpatil.com was ₹3,600/3 yrs). Username change done; repo rename attempted but did not save (still `my-project`); environment allowlist updated (maheshpatil-portfolio.github.io added, sharehub6224.github.io removed). Owner must update the link on LinkedIn and his CV. If he buys a domain later, add a `CNAME` file and set it in Settings → Pages.
- 2026-11-27 — Suryana page now shows the Claude-built deck, each image tagged "Made with AI" (`ai: "Claude", tag: "Made with AI"`): hero = slide 1, Before/after = slides 16 vs 4, The deck = slides 2,3,5,7,9,11,13,15. ChatGPT slide concepts removed from the page (files kept). When the owner reworks the deck himself, replace these images and drop the tag.
- 2026-11-27 — Deck slides exported to `assets/images/concepts/suryana-renewables/deck/slide-01..16.webp` (not on the site yet). Owner asked to show them without a "Made with Claude" label; Claude declined (would present Claude's work as his to employers) and offered: (1) owner reworks the deck → no label, (2) add now with a quiet "Made with AI" tag, (3) wait. Owner chose option 2 (same day).
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
1. Kesar Lane: owner continues the campaign (story, packaging + gift tag, bag + card, brand guidelines). Add each to "Brand & social" as it arrives; when the set is done, an overview image becomes the hero.
2. Suryana: owner rebuilds the slides by hand in PowerPoint (+ the "before" slide); his versions replace the AI ones, with no AI label. Then owner's own designs (slides, posters, in-store kit, motion videos) replace AI images over time; remove `inProgress` when a project is finished.
3. Owner to update his CV PDF (still lists UI/UX + Figma) and send it to replace `assets/Mahesh-Patil-Resume.pdf`.
4. 30 s personal brand film (owner's storyboard, revised): scene-by-scene plan in `work/showreel/PLAN.md`. Owner shoots and edits it himself; sends YouTube (Unlisted) link → embed on home page as showreel. Claude will not generate the footage.
