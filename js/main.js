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
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;
    const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
    return null;
  }
  const isVideoFile = (url) => /\.(mp4|webm|mov)(\?|$)/i.test(url);
  const isVideo = (url) => !!url && (isVideoFile(url) || !!videoEmbedUrl(url));

  function mediaHtml(url, fallbackColors, label) {
    if (!url) {
      const [a, b] = fallbackColors || ["#7b5cff", "#ff4fd8"];
      return `<div class="placeholder" style="background:linear-gradient(135deg,${a},${b})">
        Add your ${escapeHtml(label)} in js/data.js</div>`;
    }
    const embed = videoEmbedUrl(url);
    if (embed) return `<div class="video-wrap"><iframe src="${embed}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Video player"></iframe></div>`;
    if (isVideoFile(url)) return `<div class="video-wrap"><video src="${escapeHtml(url)}" controls autoplay playsinline></video></div>`;
    return `<img src="${escapeHtml(url)}" alt="">`;
  }

  /* ---------- Projects ---------- */
  const grid = $("#project-grid");

  function renderProjects(filter = "all") {
    const list = PROJECTS.filter((p) => filter === "all" || p.category === filter);
    grid.innerHTML = list.map((p, i) => {
      const index = PROJECTS.indexOf(p);
      const [a, b] = p.colors || ["#7b5cff", "#ff4fd8"];
      const initials = p.title.split(/\s+/).filter((w) => /^[A-Za-z0-9]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
      const thumb = p.thumb
        ? `<img src="${escapeHtml(p.thumb)}" alt="${escapeHtml(p.title)}" loading="lazy">`
        : `<div class="placeholder" style="background:linear-gradient(135deg,${a},${b})">${escapeHtml(initials)}</div>`;
      const play = (p.category !== "graphic" || isVideo(p.media)) ? `<span class="play" aria-hidden="true">▶</span>` : "";
      return `
        <button class="card" data-index="${index}" style="animation-delay:${i * 60}ms">
          <div class="card-thumb">${thumb}${play}</div>
          <div class="card-body">
            <span class="tag ${p.category}">${CATEGORY_LABELS[p.category] || p.category}</span>
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.client || "")}${p.year ? " · " + p.year : ""}</p>
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

  function openLightbox({ media, colors, label, category, title, desc, meta }) {
    lastFocus = document.activeElement;
    $("#lb-media").innerHTML = mediaHtml(media, colors, label);
    const cat = $("#lb-cat");
    cat.textContent = CATEGORY_LABELS[category] || "";
    cat.className = `tag ${category || ""}`;
    cat.hidden = !category;
    $("#lb-title").textContent = title || "";
    $("#lb-desc").textContent = desc || "";
    $("#lb-meta").textContent = meta || "";
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $(".lb-close").focus();
  }

  function openProject(p) {
    const meta = [p.client && `Client: ${p.client}`, p.year, p.tools && p.tools.length && `Tools: ${p.tools.join(", ")}`]
      .filter(Boolean).join("  ·  ");
    const label = p.category === "graphic" && !isVideo(p.media) ? "image" : "video";
    openLightbox({ media: p.media || p.thumb, colors: p.colors, label, category: p.category, title: p.title, desc: p.description, meta });
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

  /* ---------- Showreel ---------- */
  const reelBtn = $("#showreel-btn");
  if (SITE.showreel) {
    reelBtn.hidden = false;
    reelBtn.addEventListener("click", () => openLightbox({ media: SITE.showreel, label: "showreel", title: "Showreel", desc: SITE.role }));
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

  renderProjects();
})();
