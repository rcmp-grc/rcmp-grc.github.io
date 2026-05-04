(() => {
  "use strict";

  let currentLang = "en";
  const langToggle = document.getElementById("langToggle");

  const translatables = Array.from(document.querySelectorAll("[data-en]")).map((el) => ({
    el,
    en: el.dataset.en,
    fr: el.dataset.fr || el.dataset.en,
  }));

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    translatables.forEach(({ el, en, fr }) => {
      el.textContent = lang === "fr" ? fr : en;
    });

    langToggle.textContent = lang === "en" ? "Fran\u00e7ais" : "English";
    langToggle.setAttribute("aria-label", lang === "en" ? "Switch to French / Passer en fran\u00e7ais" : "Switch to English / Passer en anglais");
    langToggle.setAttribute("aria-pressed", String(lang === "fr"));

    document.title = lang === "fr" ? "Communications Web \u00b7 GRC" : "Web Communications \u00b7 RCMP";

    const rcmpLink = document.getElementById("rcmpLink");
    if (rcmpLink) rcmpLink.href = lang === "fr" ? "https://grc.ca/fr" : "https://rcmp.ca/en";
  }

  langToggle.addEventListener("click", () => {
    applyLang(currentLang === "en" ? "fr" : "en");
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const noResults = document.getElementById("noResults");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      let visible = 0;
      projectItems.forEach((item) => {
        const match = filter === "all" || item.dataset.status === filter;
        item.style.display = match ? "" : "none";
        if (match) visible++;
      });

      noResults.style.display = visible === 0 ? "block" : "none";
    });
  });

  function timeAgo(date) {
    const s = Math.floor((Date.now() - date) / 1000);
    const slots = [
      { label: "year", n: 31536000 },
      { label: "month", n: 2592000 },
      { label: "week", n: 604800 },
      { label: "day", n: 86400 },
      { label: "hour", n: 3600 },
      { label: "minute", n: 60 },
    ];
    for (const { label, n } of slots) {
      const v = Math.floor(s / n);
      if (v >= 1) return v === 1 ? `1 ${label} ago` : `${v} ${label}s ago`;
    }
    return "just now";
  }

  function timeAgoFr(date) {
    const s = Math.floor((Date.now() - date) / 1000);
    const slots = [
      { labels: ["an", "ans"], n: 31536000 },
      { labels: ["mois", "mois"], n: 2592000 },
      { labels: ["semaine", "semaines"], n: 604800 },
      { labels: ["jour", "jours"], n: 86400 },
      { labels: ["heure", "heures"], n: 3600 },
      { labels: ["minute", "minutes"], n: 60 },
    ];
    for (const { labels, n } of slots) {
      const v = Math.floor(s / n);
      if (v >= 1) return `il y a ${v}\u00a0${labels[v === 1 ? 0 : 1]}`;
    }
    return "à l\u2019instant";
  }

  document.querySelectorAll(".update-time").forEach(async (el) => {
    const path = el.dataset.path;
    const url = `https://api.github.com/repos/rcmp-grc/rcmp-grc.github.io/commits?path=${path}&page=1&per_page=1`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const commits = await res.json();

      const d = commits && commits.length > 0 ? new Date(commits[0].commit.author.date) : null;
      const enText = d ? `Last updated: ${timeAgo(d)}` : "Last updated: unknown";
      const frText = d ? `Derni\u00e8re mise \u00e0 jour\u00a0: ${timeAgoFr(d)}` : "Derni\u00e8re mise \u00e0 jour\u00a0: inconnue";

      translatables.push({ el, en: enText, fr: frText });
      el.textContent = currentLang === "fr" ? frText : enText;
    } catch (err) {
      console.warn("GitHub fetch error:", err);
      const errEn = "Last updated: unavailable";
      const errFr = "Dernière mise à jour\u00a0: non disponible";
      translatables.push({ el, en: errEn, fr: errFr });
      el.textContent = currentLang === "fr" ? errFr : errEn;
      el.title =
        currentLang === "fr" ? "Impossible de récupérer la date de mise à jour depuis GitHub." : "Could not retrieve update date from GitHub.";
    }
  });

  document.querySelectorAll("#mobileNav a").forEach((a) => {
    a.addEventListener("click", () => {
      const col = bootstrap.Collapse.getInstance(document.getElementById("mobileNav"));
      if (col) col.hide();
    });
  });
})();
