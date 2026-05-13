---
layout: default
title: Personnes recherchées
date_modified: 2026-05-09
lang: fr
lang_url: wantedlist-rechercheesliste-en.html
issued: 2026-05-09
---

<div class="row" id="wp-page">
  <div class="col-md-3 col-sm-4" id="wp-sidebar">
    <aside aria-labelledby="wp-filters-heading" id="wp-filters">
      <h2 class="h4" id="wp-filters-heading">Filtrer par</h2>
      <details class="wp-filter-group">
        <summary class="wp-filter-group-toggle">
          <i class="fa-solid fa-chevron-down wp-filter-chevron" aria-hidden="true"></i><span class="wp-filter-summary-label">Genre</span>
        </summary>
        <fieldset>
          <legend class="wb-inv">Genre</legend>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="male"><span class="cb-text">homme</span> <span class="wp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="female"><span class="cb-text">femme</span><span class="wp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="other"><span class="cb-text">autre</span><span class="wp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="unknown"><span class="cb-text">inconnu</span><span class="wp-filter-badge">0</span></label>
          </div>
        </fieldset>
      </details>
    </aside>
  </div>
  <div class="col-md-9 col-sm-8" id="wp-results-col">
    <div aria-label="Filtres actifs" aria-live="polite" id="wp-active-filters" role="status"></div>
    <div id="wp-toolbar">
      <p aria-live="polite" id="wp-count"><strong id="wp-count-num">0</strong>&nbsp;personnes recherchées trouvées</p>
      <div id="wp-sort">
        <label for="wp-sort-select">Trier par&nbsp;:</label>
        <select aria-label="Trier les profils" id="wp-sort-select">
          <option value="newest">Mise à jour (plus récent)</option>
          <option value="oldest">Mise à jour (plus ancien)</option>
          <option value="views">Les plus consultés</option>
        </select>
      </div>
    </div>
    <div aria-label="Profils des personnes recherchées" id="wp-grid" role="list"></div>
    <p id="wp-no-results">Aucun profil ne correspond aux filtres sélectionnés.</p>
    <nav aria-label="Pagination" class="rcmp-item-pagination" id="rcmp-content-page">
      <div class="rcmp-item-pagination__prev" id="wp-prev-wrap">
        <button aria-label="Page précédente" class="rcmp-item-pagination__link" id="wp-prev" type="button">
          <i aria-hidden="true" class="rcmp-item-pagination__icon fa-solid fa-chevron-left"></i>
          <span class="rcmp-item-pagination__link-title">Précédente<span class="rcmp-visually-hidden"> page</span></span>
        </button>
      </div>
      <ul class="rcmp-item-pagination__list" id="wp-page-list"></ul>
      <div class="rcmp-item-pagination__next" id="wp-next-wrap">
        <button aria-label="Page suivante" class="rcmp-item-pagination__link" id="wp-next" type="button">
          <span class="rcmp-item-pagination__link-title">Suivante<span class="rcmp-visually-hidden"> page</span></span>
          <i aria-hidden="true" class="rcmp-item-pagination__icon fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </nav>
  </div>
</div>

<script>
(function () {
  'use strict';

  var lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';

  var I18N = {
    en: {
      genderLabels: { male: 'male', female: 'female', other: 'other', unknown: 'unknown' },
      removeFilter: 'Remove filter: ',
      profileHref:  'wanted-recherchees-en.html',
      viewProfile:  'View profile: ',
      mugshot:      'Mugshot of ',
      fileNumber:   'File number: ',
      updated:      'Updated: ',
      ofPages:      ' of ',
      pageLabel:    'Page '
    },
    fr: {
      genderLabels: { male: 'homme', female: 'Femme', other: 'autre', unknown: 'inconnu' },
      removeFilter: 'Retirer le filtre\u00A0: ',
      profileHref:  'wanted-recherchees-fr.html',
      viewProfile:  'Voir le profil\u00A0: ',
      mugshot:      'Photo judiciaire de ',
      fileNumber:   'Numéro de dossier\u00A0: ',
      updated:      'Mise à jour\u00A0: ',
      ofPages:      ' sur ',
      pageLabel:    'Page '
    }
  };

  var t  = I18N[lang];
  var $  = document.getElementById.bind(document);
  var ni = lang === 'fr' ? 1 : 0;

  // [nameEN, nameFR, file, gender, updated, views]
  var RAW = [
    ['SpongeBob SquarePants',  "Bob l'éponge",          '21930481', 'male',    '2026-05-08', 1420],
    ['Sandy Cheeks',           'Sandy Écureuil',         '30847192', 'female',  '2026-05-07', 980 ],
    ['Patrick Star',           'Patrick Étoile',         '19284730', 'male',    '2026-05-06', 741 ],
    ['Pearl Krabs',            'Perle Krabs',            '28374019', 'female',  '2026-05-05', 610 ],
    ['Squidward Tentacles',    'Carlo Tentacules',       '39201847', 'male',    '2026-05-04', 533 ],
    ['Mrs. Puff',              'Madame Puff',            '10293847', 'female',  '2026-05-03', 498 ],
    ['Gary the Snail',         'Gary',                   '48201937', 'male',    '2026-05-02', 412 ],
    ['Mr. Krabs',              'Monsieur Krabs',         '57839201', 'male',    '2026-05-01', 387 ],
    ['Karen Plankton',         'Karen',                  '67391028', 'female',  '2026-04-30', 344 ],
    ['Larry the Lobster',      'Larry le Homard',        '74829103', 'male',    '2026-04-28', 302 ],
    ['Sandy Cheeks Jr.',       'Sandy Écureuil Jr.',     '81920374', 'female',  '2026-04-26', 289 ],
    ['Barnacle Boy',           "Bernard l'Hermite",    '92038471', 'male',    '2026-04-24', 265 ],
    ['Mermaid Man',            "L'Homme Sirène",       '10293821', 'male',    '2026-04-22', 241 ],
    ['Plankton',               'Plankton',               '20193847', 'male',    '2026-04-20', 218 ],
    ['Squilvia',               'Squilvia',               '30928471', 'female',  '2026-04-18', 197 ],
    ['Harold SquarePants',     'Harold SquarePants',     '41092837', 'male',    '2026-04-16', 183 ],
    ['Margaret SquarePants',   'Margaret SquarePants',   '51293847', 'female',  '2026-04-14', 169 ],
    ['Squilliam Fancyson',     'Squilliam Fancyson',     '61928374', 'male',    '2026-04-12', 155 ],
    ["Patrick's Dad",          'Le père de Patrick',     '72938401', 'male',    '2026-04-10', 143 ],
    ['Mindy',                  'Mindy',                  '83920174', 'female',  '2026-04-08', 131 ],
    ['The Flying Dutchman',    'Le Hollandais volant',   '91283047', 'male',    '2026-04-06', 120 ],
    ['DoodleBob',              'Gribouille Bob',         '12930184', 'unknown', '2026-04-04', 110 ],
    ["Sandy's Mom",            'La mère de Sandy',       '23019384', 'female',  '2026-04-02', 100 ],
    ['Old Man Jenkins',        'Vieux Jenkins',          '34128394', 'male',    '2026-03-30', 91  ],
    ['Bubble Bass',            'Bubble Bass',            '45219304', 'male',    '2026-03-28', 83  ],
    ['Flats the Flounder',     "Flats l'Achigan",      '56320194', 'male',    '2026-03-26', 74  ],
    ['Nurse Bazooka',          'Infirmière Bazooka',     '67430294', 'female',  '2026-03-24', 66  ],
    ['Fred the Fish',          'Fred le Poisson',        '78541304', 'male',    '2026-03-22', 59  ],
    ['Mystery the Seahorse',   "Mystère l'Hippocampe", '89652414', 'unknown', '2026-03-20', 50  ]
  ];

  var PROFILES = RAW.map(function (r, i) {
    return {
      id:       i + 1,
      name:     r[ni],
      file:     r[2],
      img:      'https://dummyimage.com/480x600/000/fff',
      gender:   r[3],
      updated:  r[4],
      views:    r[5]
    };
  });

  var PER_PAGE    = 9;
  var currentPage = 1;
  var activeData  = PROFILES.slice();

  var grid         = $('wp-grid');
  var countNum     = $('wp-count-num');
  var noResults    = $('wp-no-results');
  var sortSel      = $('wp-sort-select');
  var prevBtn      = $('wp-prev');
  var nextBtn      = $('wp-next');
  var activeTagsEl = $('wp-active-filters');
  var pagination   = $('rcmp-content-page');
  var checkboxes   = document.querySelectorAll('#wp-filters input[type="checkbox"]');

  function updateBadges() {
    checkboxes.forEach(function (cb) {
      var cat = cb.dataset.filter;
      var val = cb.value;
      var count = PROFILES.filter(function (p) {
        return p[cat] === val;
      }).length;
      var badge = cb.closest('label').querySelector('.wp-filter-badge');
      if (badge) badge.textContent = count;
    });
  }

  function sortData(data, mode) {
    return data.slice().sort(function (a, b) {
      if (mode === 'newest') return b.updated.localeCompare(a.updated);
      if (mode === 'oldest') return a.updated.localeCompare(b.updated);
      if (mode === 'views')  return b.views - a.views;
      return 0;
    });
  }

  function getActiveFilters() {
    var active = { gender: [] };
    checkboxes.forEach(function (cb) {
      if (cb.checked) active[cb.dataset.filter].push(cb.value);
    });
    return active;
  }

  function filterData(filters) {
    return PROFILES.filter(function (p) {
      return !filters.gender.length || filters.gender.indexOf(p.gender) > -1;
    });
  }

  function renderTags(filters) {
    activeTagsEl.innerHTML = '';
    Object.keys(filters).forEach(function (cat) {
      filters[cat].forEach(function (val) {
        var label = cat === 'gender' ? (t.genderLabels[val] || val) : val.replace(/-/g, ' ');
        var tag   = document.createElement('span');
        tag.className = 'wp-filter-tag';
        tag.innerHTML =
          label + ' <button type="button" aria-label="' + t.removeFilter + label + '">✕</button>';
        tag.querySelector('button').addEventListener('click', function () {
          var cb = document.querySelector('input[data-filter="' + cat + '"][value="' + val + '"]');
          if (cb) { cb.checked = false; refresh(); }
        });
        activeTagsEl.appendChild(tag);
      });
    });
  }

  function renderGrid(data, page) {
    var slice = data.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    grid.innerHTML = '';

    var show = !!slice.length;
    noResults.style.display  = show ? 'none'  : 'block';
    pagination.style.display = show ? 'block' : 'none';
    if (!show) return;

    slice.forEach(function (p) {
      var li = document.createElement('div');
      li.setAttribute('role', 'listitem');
      li.innerHTML =
        '<a class="wp-card" href="' + t.profileHref + '" aria-label="' + t.viewProfile + p.name + '">' +
          '<img alt="' + t.mugshot + p.name + '" src="' + p.img + '" loading="lazy">' +
          '<div class="wp-card-body">' +
            '<p class="wp-card-name">'  + p.name    + '</p>' +
            '<p class="wp-card-meta">'  + t.fileNumber + p.file    + '</p>' +
            '<p class="wp-card-meta">'  + t.updated   + p.updated + '</p>' +
          '</div></a>';
      grid.appendChild(li);
    });
  }

  function renderPagination(total, page) {
    var pages    = Math.ceil(total / PER_PAGE);
    var pageList = $('wp-page-list');

    prevBtn.disabled                    = page <= 1;
    nextBtn.disabled                    = page >= pages;
    prevBtn.parentElement.style.display = page <= 1    ? 'none' : '';
    nextBtn.parentElement.style.display = page >= pages ? 'none' : '';

    if (!pageList) return;
    pageList.innerHTML = '';

    var slots = buildPageSlots(page, pages);
    slots.forEach(function (slot) {
      var li = document.createElement('li');
      if (slot === '…') {
        li.className = 'rcmp-item-pagination__item rcmp-item-pagination__item--ellipsis';
        li.setAttribute('aria-hidden', 'true');
        li.textContent = '⋯';
      } else {
        li.className = 'rcmp-item-pagination__item' + (slot === page ? ' rcmp-item-pagination__item--current' : '');
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'rcmp-item-pagination__item-link';
        btn.setAttribute('aria-label', t.pageLabel + slot);
        if (slot === page) btn.setAttribute('aria-current', 'page');
        btn.textContent = slot;
        btn.addEventListener('click', function () {
          currentPage = slot;
          draw();
          grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        li.appendChild(btn);
      }
      pageList.appendChild(li);
    });
  }

  function buildPageSlots(page, pages) {
    if (pages <= 7) {
      var all = [];
      for (var i = 1; i <= pages; i++) all.push(i);
      return all;
    }
    var slots = [1];
    if (page > 3) slots.push('…');
    for (var p = Math.max(2, page - 1); p <= Math.min(pages - 1, page + 1); p++) slots.push(p);
    if (page < pages - 2) slots.push('…');
    slots.push(pages);
    return slots;
  }

  function draw() {
    renderGrid(activeData, currentPage);
    renderPagination(activeData.length, currentPage);
  }

  function refresh() {
    var filters  = getActiveFilters();
    activeData  = sortData(filterData(filters), sortSel.value);
    currentPage = 1;
    countNum.textContent = activeData.length;
    renderTags(filters);
    draw();
  }

  checkboxes.forEach(function (cb) { cb.addEventListener('change', refresh); });

  sortSel.addEventListener('change', function () {
    activeData  = sortData(activeData, sortSel.value);
    currentPage = 1;
    draw();
  });

  function paginate(dir, btn) {
    currentPage += dir;
    draw();
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    btn.blur();
  }

  prevBtn.addEventListener('click', function () {
    if (currentPage > 1) paginate(-1, prevBtn);
  });
  nextBtn.addEventListener('click', function () {
    if (currentPage < Math.ceil(activeData.length / PER_PAGE)) paginate(1, nextBtn);
  });

  updateBadges();
  refresh();
}());
</script>
