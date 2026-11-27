(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const CATEGORY_LABELS = { graphic: "Graphic Design", video: "Video Editing", motion: "Motion Graphics" };

  const escapeHtml = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

  /* ---------- Fill simple text fields ---------- */
  document.querySelectorAll("[data-site]").forEach((el) => {
    const value = SITE[el.dataset.site];
    if (value) el.textContent = value;
  });
  document.title = `${SITE.name} — ${SITE.role}`;
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Media helpers ---------- */
  function videoEmbedUrl(url) {
    const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0`;
    const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
    if (/^https:\/\/www-ccv\.adobe\.io\/v1\/player\//.test(url)) return url; // Behance video embeds
    return null;
  }
  const isVideoFile = (url) => /\.(mp4|webm|mov)(\?|$)/i.test(url);
  const cats = (p) => [].concat(p.category || []);
  const hasVideo = (p) => !!(p.videos && p.videos.length) || cats(p).some((c) => c !== "graphic");

  function videoHtml(url) {
    const embed = videoEmbedUrl(url);
    if (embed) return `<div class="video-wrap"><iframe src="${escapeHtml(embed)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" title="Video player"></iframe></div>`;
    if (isVideoFile(url)) return `<div class="video-wrap"><video src="${escapeHtml(url)}" controls playsinline preload="metadata"></video></div>`;
    return "";
  }

  function mediaHtml({ videos = [], images = [], colors, title }) {
    const parts = [
      ...videos.map(videoHtml),
      ...images.map((src) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(title || "")}" loading="lazy">`),
    ].filter(Boolean);
    if (parts.length) return `<div class="lb-stack">${parts.join("")}</div>`;
    const [a, b] = colors || ["#7b5cff", "#ff4fd8"];
    return `<div class="placeholder" style="background:linear-gradient(135deg,${a},${b})">Add images or a video link in js/data.js</div>`;
  }

  const tagsHtml = (p) => cats(p).map((c) => `<span class="tag ${escapeHtml(c)}">${CATEGORY_LABELS[c] || escapeHtml(c)}</span>`).join(" ");

  /* ---------- Projects ---------- */
  const grid = $("#project-grid");

  // Hide filter buttons that would show nothing.
  document.querySelectorAll(".filter").forEach((btn) => {
    const f = btn.dataset.filter;
    if (f !== "all" && !PROJECTS.some((p) => cats(p).includes(f))) btn.hidden = true;
  });

  function renderProjects(filter = "all") {
    const list = PROJECTS.filter((p) => filter === "all" || cats(p).includes(filter));
    grid.innerHTML = list.map((p, i) => {
      const index = PROJECTS.indexOf(p);
      const [a, b] = p.colors || ["#7b5cff", "#ff4fd8"];
      const initials = p.title.split(/\s+/).filter((w) => /^[A-Za-z0-9]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
      const thumb = p.thumb
        ? `<img src="${escapeHtml(p.thumb)}" alt="${escapeHtml(p.title)}" loading="lazy"${p.thumbPosition ? ` style="object-position:${escapeHtml(p.thumbPosition)}"` : ""}>`
        : `<div class="placeholder" style="background:linear-gradient(135deg,${a},${b})">${escapeHtml(initials)}</div>`;
      const play = hasVideo(p) ? `<span class="play" aria-hidden="true">▶</span>` : "";
      const count = p.gallery && p.gallery.length > 1 ? `<span class="count">${p.gallery.length} images</span>` : "";
      const sub = [p.client, p.year].filter(Boolean).join(" · ");
      return `
        <button class="card" data-index="${index}" style="animation-delay:${i * 60}ms">
          <div class="card-thumb">${thumb}${play}${count}</div>
          <div class="card-body">
            ${tagsHtml(p)}
            <h3>${escapeHtml(p.title)}</h3>
            ${sub ? `<p>${escapeHtml(sub)}</p>` : ""}
          </div>
        </button>`;
    }).join("");
  }

  document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openProject(PROJECTS[card.dataset.index]);
  });

  /* ---------- Lightbox ---------- */
  const lb = $("#lightbox");
  let lastFocus = null;

  function openLightbox({ html, tags, title, desc, meta, link }) {
    lastFocus = document.activeElement;
    $("#lb-media").innerHTML = html;
    const cat = $("#lb-cat");
    cat.innerHTML = tags || "";
    cat.hidden = !tags;
    $("#lb-title").textContent = title || "";
    $("#lb-desc").textContent = desc || "";
    $("#lb-meta").textContent = meta || "";
    const a = $("#lb-link");
    a.hidden = !link;
    if (link) a.href = link;
    lb.hidden = false;
    lb.querySelector(".lb-inner").scrollTop = 0;
    document.body.style.overflow = "hidden";
    $(".lb-close").focus();
  }

  function openProject(p) {
    const meta = [p.client, p.year, p.tools && p.tools.length && `Tools: ${p.tools.join(", ")}`]
      .filter(Boolean).join("  ·  ");
    const images = p.gallery && p.gallery.length ? p.gallery : (p.media && !videoEmbedUrl(p.media) && !isVideoFile(p.media) ? [p.media] : (p.thumb ? [p.thumb] : []));
    const videos = p.videos || (p.media && (videoEmbedUrl(p.media) || isVideoFile(p.media)) ? [p.media] : []);
    openLightbox({
      html: mediaHtml({ videos, images: videos.length ? [] : images, colors: p.colors, title: p.title }),
      tags: tagsHtml(p), title: p.title, desc: p.description, meta, link: p.link,
    });
  }

  function closeLightbox() {
    lb.hidden = true;
    $("#lb-media").innerHTML = ""; // stops video playback
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $(".lb-close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });

  /* ---------- Case studies ---------- */
  const preview = new URLSearchParams(location.search).has("preview");
  const studies = (typeof CASE_STUDIES === "undefined" ? [] : CASE_STUDIES).filter((c) => preview || !c.draft);
  if (studies.length) {
    $("#case-studies").hidden = false;
    $("#nav-cs").hidden = false;
    $("#work-title").textContent = "More work";
    $("#cs-grid").innerHTML = studies.map((c) => `
      <a class="cs-card" href="project.html?p=${encodeURIComponent(c.slug)}${preview ? "&preview" : ""}">
        <div class="cs-card-img">${c.thumb ? `<img src="${escapeHtml(c.thumb)}" alt="${escapeHtml(c.title)}" loading="lazy">` : ""}
          <div class="cs-card-badges">
            ${c.concept ? `<span class="badge concept">Concept project</span>` : ""}
            ${c.draft ? `<span class="badge draft">Draft</span>` : ""}
          </div>
        </div>
        <div class="cs-card-body">
          <div>${[].concat(c.categories || []).map((k) => `<span class="tag ${escapeHtml(k)}">${CATEGORY_LABELS[k] || escapeHtml(k)}</span>`).join(" ")}</div>
          <h3>${escapeHtml(c.title)}</h3>
          <p>${escapeHtml(c.summary)}</p>
          <span class="cs-more">Read case study →</span>
        </div>
      </a>`).join("");
  }

  /* ---------- Showreel ---------- */
  const reelBtn = $("#showreel-btn");
  if (SITE.showreel) {
    reelBtn.hidden = false;
    reelBtn.addEventListener("click", () => openLightbox({ html: mediaHtml({ videos: [SITE.showreel] }), title: "Showreel", desc: SITE.role }));
  }

  /* ---------- Résumé ---------- */
  if (SITE.resume) {
    const resumeBtn = $("#resume-btn");
    resumeBtn.href = SITE.resume;
    resumeBtn.hidden = false;
  }

  /* ---------- Services, about, tools, contact ---------- */
  $("#services-list").innerHTML = SITE.services.map((s) => `
    <article class="service reveal">
      <div class="service-icon" aria-hidden="true">${escapeHtml(s.icon)}</div>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.text)}</p>
    </article>`).join("");

  /* ---------- Experience & recognition ---------- */
  $("#timeline").innerHTML = (SITE.experience || []).map((x) => `
    <li class="job reveal">
      <div class="job-head">
        <div>
          <h3>${escapeHtml(x.role)}</h3>
          <p class="job-company">${escapeHtml(x.company)}</p>
        </div>
        <p class="job-meta">${escapeHtml(x.dates)}<br>${escapeHtml(x.location || "")}</p>
      </div>
      <ul>${(x.points || []).map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}</ul>
    </li>`).join("");
  const list = (id, items, fmt) => { const el = $(id); if (el) el.innerHTML = (items || []).map(fmt).join(""); };
  list("#achievements", SITE.achievements, (t) => `<li>${escapeHtml(t)}</li>`);
  list("#education", SITE.education, (e) => `<li><strong>${escapeHtml(e.title)}</strong><span>${escapeHtml(e.place)}</span></li>`);
  list("#certifications", SITE.certifications, (t) => `<li>${escapeHtml(t)}</li>`);
  list("#languages", SITE.languages, (t) => `<li>${escapeHtml(t)}</li>`);

  $("#about-text").innerHTML = SITE.about.map((t) => `<p>${escapeHtml(t)}</p>`).join("");
  $("#stats").hidden = !(SITE.stats && SITE.stats.length);
  $("#stats").innerHTML = (SITE.stats || []).map((s) => `<div class="stat"><strong>${escapeHtml(s.value)}</strong><span>${escapeHtml(s.label)}</span></div>`).join("");
  $("#tools").innerHTML = SITE.tools.map((t) => `<li>${escapeHtml(t)}</li>`).join("");

  const email = $("#email-link");
  email.textContent = SITE.email;
  email.href = `mailto:${SITE.email}`;
  $("#socials").innerHTML = SITE.socials.map((s) =>
    `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.label)} ↗</a></li>`).join("");

  /* ---------- Nav ---------- */
  const nav = $(".nav");
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) links.classList.remove("open"); });
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

  /* ---------- Scroll reveal ---------- */
  document.querySelectorAll(".section h2, .about > div, .contact > *").forEach((el) => el.classList.add("reveal"));
  const io = "IntersectionObserver" in window && new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io ? io.observe(el) : el.classList.add("visible"));

  if (!PROJECTS.length) {
    $("#work").hidden = true;
    document.querySelectorAll('a[href="#work"]').forEach((a) => {
      if (a.closest(".nav-links")) a.hidden = true;
      else if ($("#case-studies").hidden) a.hidden = true; // no work published yet
      else a.href = "#case-studies";
    });
  }
  renderProjects();
})();
