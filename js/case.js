/* Renders one case study page: project.html?p=<slug>  (add &preview to see drafts) */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
  const LABELS = { graphic: "Graphic Design", video: "Video Editing", motion: "Motion Graphics" };

  document.querySelectorAll("[data-site]").forEach((el) => { if (SITE[el.dataset.site]) el.textContent = SITE[el.dataset.site]; });
  $("#year").textContent = new Date().getFullYear();
  if (typeof PROJECTS !== "undefined" && !PROJECTS.length) {
    document.querySelectorAll('a[href="index.html#work"]').forEach((a) => {
      if (a.closest(".nav-links")) a.hidden = true; else a.href = "index.html#case-studies";
    });
  }
  const toggle = $(".nav-toggle"), links = $(".nav-links");
  toggle.addEventListener("click", () => toggle.setAttribute("aria-expanded", links.classList.toggle("open")));

  function embedUrl(url) {
    const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0`;
    const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
    if (/^https:\/\/www-ccv\.adobe\.io\/v1\/player\//.test(url)) return url;
    return null;
  }
  function video(url) {
    const e = embedUrl(url);
    if (e) return `<div class="video-wrap"><iframe src="${esc(e)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="Video"></iframe></div>`;
    if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return `<div class="video-wrap"><video src="${esc(url)}" controls playsinline preload="metadata"></video></div>`;
    return "";
  }
  function figure(img, alt) {
    const o = typeof img === "string" ? { src: img } : img;
    return `<figure><img src="${esc(o.src)}" alt="${esc(o.alt || alt)}" loading="lazy">${o.caption ? `<figcaption>${esc(o.caption)}</figcaption>` : ""}</figure>`;
  }
  const paras = (t) => [].concat(t || []).map((p) => `<p>${esc(p)}</p>`).join("");

  const params = new URLSearchParams(location.search);
  const preview = params.has("preview");
  const list = (typeof CASE_STUDIES === "undefined" ? [] : CASE_STUDIES).filter((c) => preview || !c.draft);
  const i = list.findIndex((c) => c.slug === params.get("p"));
  const c = list[i];
  const main = $("#case");

  if (!c) {
    document.title = `Not found — ${SITE.name}`;
    main.innerHTML = `<section class="section cs-missing"><h1>Case study not found</h1>
      <p>It may have moved or isn't published yet.</p><a class="btn" href="index.html">Back to home</a></section>`;
    return;
  }

  document.title = `${c.title} — ${SITE.name}`;
  const q = preview ? "&preview" : "";
  const next = list.length > 1 ? list[(i + 1) % list.length] : null;
  const meta = [
    ["Role", c.role],
    ["Year", c.year],
    ["Tools", (c.tools || []).join(", ")],
    ["Deliverables", (c.deliverables || []).join(", ")],
  ].filter(([, v]) => v);

  main.innerHTML = `
    <article class="cs">
      <header class="section cs-hero">
        <a class="cs-back" href="index.html#case-studies">← All case studies</a>
        <div class="cs-badges">
          ${c.concept ? `<span class="badge concept">Concept project</span>` : ""}
          ${c.draft ? `<span class="badge draft">Draft — hidden from the live site</span>` : ""}
          ${[].concat(c.categories || []).map((k) => `<span class="tag ${esc(k)}">${LABELS[k] || esc(k)}</span>`).join("")}
        </div>
        <h1>${esc(c.title)}</h1>
        <p class="cs-summary">${esc(c.summary)}</p>
        ${meta.length ? `<dl class="cs-meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
        ${c.concept ? `<p class="cs-note">Self-initiated concept project. The brand, products and figures are fictional; all design, motion and editing by ${esc(SITE.name)}.</p>` : ""}
      </header>
      ${c.hero ? `<div class="cs-cover">${figure(c.hero, c.title)}</div>` : ""}
      ${(c.sections || []).map((s) => `
        <section class="section cs-section">
          <div class="cs-text">
            ${s.heading ? `<h2>${esc(s.heading)}</h2>` : ""}
            ${paras(s.text)}
            ${s.list ? `<ul>${s.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          </div>
          ${(s.videos || []).length ? `<div class="cs-media">${s.videos.map(video).join("")}</div>` : ""}
          ${(s.images || []).length ? `<div class="cs-media ${s.layout === "grid" ? "cs-grid2" : ""}">${s.images.map((im) => figure(im, s.heading || c.title)).join("")}</div>` : ""}
        </section>`).join("")}
      <nav class="section cs-next">
        ${next ? `<a href="project.html?p=${encodeURIComponent(next.slug)}${q}"><span>Next case study</span><strong>${esc(next.title)} →</strong></a>`
               : `<a href="index.html#about"><span>Keep exploring</span><strong>About ${esc(SITE.name)} →</strong></a>`}
      </nav>
    </article>`;
})();
