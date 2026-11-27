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
| 1 | suryana-renewables | Public — 3 AI concept images | https://claude.ai/artifact/9qBnBS92EtFKshUNLwX7k9 |
| 2 | kiro-one | Public — 3 AI concept images (key visual = cover, showroom kit = hero, poster series) | https://claude.ai/artifact/UNo42qy7CW5f2NtQycEC9j |
| 3 | kesar-lane | Public — no images yet (Diwali social, flyer/poster/dangler, motion reels) | https://claude.ai/artifact/Fc7qK6mQfh75MEdBh3DZfm |
| – | chai-theory | Draft (hidden) — has logo exploration + 3 AI images | https://claude.ai/artifact/MgBFfKHp3wEAD3eAuhnDZj |
| – | thoda | Draft (hidden) — has 3 AI images | https://claude.ai/artifact/LmpohDK2MnkpqqVnxzwcRN |

## How work gets added
- Owner generates AI images himself in ChatGPT (do NOT generate images with ElevenLabs or any tool unless he asks by name).
- Every AI image gets `ai: "ChatGPT"` (section image) or `thumbAi: true` (card cover) → "AI concept" tag + honest caption.
- Images: optimise to WebP ≤1600 px into `assets/images/concepts/<slug>/ai/`, add a "Visual direction" section, set the best as `thumb` + `hero`.
- After every push: wait for the live site to match (`curl` js/data.js vs local), then check it in Playwright via the proxy.

## Decisions (newest first)
- 2026-11-27 — Kiro One AI images added (key visual, showroom kit, poster series).
- 2026-11-27 — Rule: STATUS.md is the handoff file; every session reads it first and updates it after each change.
- 2026-11-27 — Focus on 3 case studies (Suryana, Kiro One, Kesar Lane) based on India job-market research; Chai Theory and Thoda hidden as drafts.
- 2026-11-27 — Kiro One = 360° product launch (key visual, posters/flyers, in-store POSM kit, social, motion video). Kesar Lane adds flyer, poster, pop-up dangler. Suryana's film = "motion summary video".
- 2026-11-27 — Title: "Graphic Designer & Motion Graphics Editor · 10+ yrs". No UI/UX anywhere (UI/UX certificate and Figma removed from site). Video editing only tagged once a finished edit exists.
- 2026-11-27 — Owner generates AI images himself (ChatGPT). Never generate images for him unless he asks by name. All AI images labelled "AI concept".
- 2026-11-27 — Old Behance work removed from the site; no NDA project; LinkedIn link added; portfolio link added to his LinkedIn.

## Next steps
1. Kesar Lane images (candle among diyas, gift-box flat lay, hands lighting a diya).
2. Owner's own designs (slides, posters, in-store kit, motion videos) replace AI images over time; remove `inProgress` when a project is finished.
3. Owner to update his CV PDF (still lists UI/UX + Figma) and send it to replace `assets/Mahesh-Patil-Resume.pdf`.
4. Later: 60–90 s showreel from the three projects' motion pieces.
