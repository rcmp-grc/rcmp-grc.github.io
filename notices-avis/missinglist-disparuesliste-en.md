---
layout: default
title: Missing persons
date_modified: 2026-05-09
lang: en
lang_url: missinglist-disparuesliste-fr.html
issued: 2026-05-09
---

<div class="row" id="mp-page">
  <div class="col-md-3 col-sm-4" id="mp-sidebar">
    <aside aria-labelledby="mp-filters-heading" id="mp-filters">
      <h2 class="h3" id="mp-filters-heading">Filter by</h2>
      <details class="mp-filter-group">
        <summary class="mp-filter-group-toggle">
          <i class="fa-solid fa-chevron-down mp-filter-chevron" aria-hidden="true"></i><span class="mp-filter-summary-label">Gender</span>
        </summary>
        <fieldset>
          <legend class="wb-inv">Gender</legend>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="male"><span class="cb-text">male</span><span class="mp-filter-badge">20</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="female"><span class="cb-text">female</span><span class="mp-filter-badge">7</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="other"><span class="cb-text">other</span><span class="mp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="gender" type="checkbox" value="unknown"><span class="cb-text">unknown</span><span class="mp-filter-badge">2</span></label>
          </div>
        </fieldset>
      </details>
    </aside>
  </div>
  <div class="col-md-9 col-sm-8" id="mp-results-col">
    <div aria-label="Active filters" aria-live="polite" id="mp-active-filters" role="status"></div>
    <div id="mp-toolbar">
      <p aria-live="polite" id="mp-count"><strong id="mp-count-num">29</strong>&nbsp;wanted persons found</p>
      <div id="mp-sort">
        <label for="mp-sort-select">Sort by:</label>
        <select aria-label="Sort profiles" id="mp-sort-select">
          <option value="newest">
            Updated (newest)
          </option>
          <option value="oldest">
            Updated (oldest)
          </option>
          <option value="views">
            Most viewed
          </option>
        </select>
      </div>
    </div>
    <div aria-label="Missing persons profiles" id="mp-grid" role="list"></div>
    <p id="mp-no-results">No profiles match your current filters.</p>
    <nav aria-label="Pagination" class="rcmp-pagination rcmp-pagination--block" id="rcmp-pagination">
      <div class="rcmp-pagination__prev" id="mp-prev-wrap">
        <button aria-label="Previous page" class="rcmp-pagination__link" id="mp-prev" type="button"><span class="rcmp-pagination__title-row"><i aria-hidden="true" class="rcmp-pagination__icon fa-solid fa-chevron-left"></i> <span class="rcmp-pagination__link-title">Previous page</span></span> <span class="rcmp-visually-hidden">:</span> <span class="rcmp-pagination__link-label" id="mp-prev-label"></span></button>
      </div>
      <div class="rcmp-pagination__next" id="mp-next-wrap">
        <button aria-label="Next page" class="rcmp-pagination__link" id="mp-next" type="button"><span class="rcmp-pagination__title-row"><i aria-hidden="true" class="rcmp-pagination__icon fa-solid fa-chevron-right"></i> <span class="rcmp-pagination__link-title">Next page</span></span> <span class="rcmp-visually-hidden">:</span> <span class="rcmp-pagination__link-label" id="mp-next-label"></span></button>
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
      genderLabels:   { male: 'male', female: 'female', other: 'other', unknown: 'unknown' },
      removeFilter:   'Remove filter: ',
      profileHref:    'missing-disparues-en.html',
      viewProfile:    'View profile: ',
      photo:          'Photo of missing person ',
      fileNumber:     'File number: ',
      updated:        'Updated: ',
      lastSeen:       'Last seen: ',
      ofPages:        ' of '
    },
    fr: {
      genderLabels:   { male: 'homme', female: 'femme', other: 'autre', unknown: 'inconnu' },
      removeFilter:   'Retirer le filtre\u00A0: ',
      profileHref:    'missing-disparues-fr.html',
      viewProfile:    'Voir le profil\u00A0: ',
      photo:          'Photo de la personne disparue ',
      fileNumber:     'Numéro de dossier\u00A0: ',
      updated:        'Mise à jour\u00A0: ',
      lastSeen:       'Vu(e) pour la dernière fois\u00A0: ',
      ofPages:        ' sur '
    }
  };

  var t  = I18N[lang];
  var $  = document.getElementById.bind(document);
  var ni = lang === 'fr' ? 1 : 0;

  // [nameEN, nameFR, file, gender, location, lastSeen, updated, views]
  var RAW = [
    ['SpongeBob SquarePants',  "Bob l'éponge",        '32473043', 'male',    'saskatoon',     '1999-05-01', '2026-05-08', 1420],
    ['Sandy Cheeks',           'Sandy Écureuil',       '30847192', 'female',  'regina',        '2020-03-15', '2026-05-07', 980 ],
    ['Patrick Star',           'Patrick Étoile',       '19284730', 'male',    'calgary',       '2021-07-04', '2026-05-06', 741 ],
    ['Pearl Krabs',            'Perle Krabs',          '28374019', 'female',  'vancouver',     '2022-01-10', '2026-05-05', 610 ],
    ['Squidward Tentacles',    'Carlo Tentacules',     '39201847', 'male',    'edmonton',      '2023-06-22', '2026-05-04', 533 ],
    ['Mrs. Puff',              'Madame Puff',          '10293847', 'female',  'winnipeg',      '2024-09-30', '2026-05-03', 498 ],
    ['Gary the Snail',         'Gary',                 '48201937', 'male',    'toronto',       '2022-11-18', '2026-05-02', 412 ],
    ['Mr. Krabs',              'Monsieur Krabs',       '57839201', 'male',    'ottawa',        '2023-02-28', '2026-05-01', 387 ],
    ['Karen Plankton',         'Karen',                '67391028', 'female',  'montreal',      '2025-01-05', '2026-04-30', 344 ],
    ['Larry the Lobster',      'Larry le Homard',      '74829103', 'male',    'victoria',      '2024-04-12', '2026-04-28', 302 ],
    ['Sandy Cheeks Jr.',       'Sandy Écureuil Jr.',   '81920374', 'female',  'saskatoon',     '2023-08-09', '2026-04-26', 289 ],
    ['Barnacle Boy',           "Bernard l'Hermite",    '92038471', 'male',    'halifax',       '2022-05-17', '2026-04-24', 265 ],
    ['Mermaid Man',            "L'Homme Sirène",       '10293821', 'male',    'fredericton',   '2021-12-01', '2026-04-22', 241 ],
    ['Plankton',               'Plankton',             '20193847', 'male',    'prince-george', '2025-03-14', '2026-04-20', 218 ],
    ['Squilvia',               'Squilvia',             '30928471', 'female',  'quebec-city',   '2024-07-07', '2026-04-18', 197 ],
    ['Harold SquarePants',     'Harold SquarePants',   '41092837', 'male',    'lethbridge',    '2023-10-23', '2026-04-16', 183 ],
    ['Margaret SquarePants',   'Margaret SquarePants', '51293847', 'female',  'surrey',        '2022-09-11', '2026-04-14', 169 ],
    ['Squilliam Fancyson',     'Squilliam Fancyson',   '61928374', 'male',    'hamilton',      '2024-02-19', '2026-04-12', 155 ],
    ["Patrick's Dad",          'Le père de Patrick',   '72938401', 'male',    'moncton',       '2023-04-30', '2026-04-10', 143 ],
    ['Mindy',                  'Mindy',                '83920174', 'female',  'whitehorse',    '2025-05-01', '2026-04-08', 131 ],
    ['The Flying Dutchman',    'Le Hollandais volant', '91283047', 'unknown', 'yellowknife',   '2021-03-08', '2026-04-06', 120 ],
    ['DoodleBob',              'Gribouille Bob',       '12930184', 'unknown', 'iqaluit',       '2024-11-15', '2026-04-04', 110 ],
    ["Sandy's Mom",            'La mère de Sandy',     '23019384', 'female',  'sherbrooke',    '2023-07-20', '2026-04-02', 100 ],
    ['Old Man Jenkins',        'Vieux Jenkins',        '34128394', 'male',    'brandon',       '2022-06-06', '2026-03-30', 91  ],
    ['Bubble Bass',            'Bubble Bass',          '45219304', 'male',    'london-on',     '2025-02-14', '2026-03-28', 83  ],
    ['Flats the Flounder',     "Flats l'Achigan",      '56320194', 'male',    'gatineau',      '2023-09-03', '2026-03-26', 74  ],
    ['Nurse Bazooka',          'Infirmière Bazooka',   '67430294', 'female',  'charlottetown', '2024-06-18', '2026-03-24', 66  ],
    ['Fred the Fish',          'Fred le Poisson',      '78541304', 'male',    'cape-breton',   '2022-12-25', '2026-03-22', 59  ],
    ['Mystery the Seahorse',   "Mystère l'Hippocampe", '89652414', 'other',   'prince-albert', '2025-04-10', '2026-03-20', 50  ]
  ];

  var PROFILES = RAW.map(function (r, i) {
    return {
      id:       i + 1,
      name:     r[ni],
      file:     r[2],
      img:      'https://dummyimage.com/480x600/000/fff',
      gender:   r[3],
      location: r[4],
      lastSeen: r[5],
      updated:  r[6],
      views:    r[7]
    };
  });

  var PER_PAGE    = 9;
  var currentPage = 1;
  var activeData  = PROFILES.slice();

  var grid         = $('mp-grid');
  var countNum     = $('mp-count-num');
  var noResults    = $('mp-no-results');
  var sortSel      = $('mp-sort-select');
  var prevBtn      = $('mp-prev');
  var nextBtn      = $('mp-next');
  var activeTagsEl = $('mp-active-filters');
  var pagination   = $('mp-pagination');
  var checkboxes   = document.querySelectorAll('#mp-filters input[type="checkbox"]');

  // update all filter badges on load
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
    var active = { gender: [], location: [] };
    checkboxes.forEach(function (cb) {
      if (cb.checked) active[cb.dataset.filter].push(cb.value);
    });
    return active;
  }

  function filterData(filters) {
    return PROFILES.filter(function (p) {
      var genderOk   = !filters.gender.length   || filters.gender.indexOf(p.gender)     > -1;
      var locationOk = !filters.location.length || filters.location.indexOf(p.location) > -1;
      return genderOk && locationOk;
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
          '<img alt="' + t.photo + p.name + '" src="' + p.img + '" loading="lazy">' +
          '<div class="wp-card-body">' +
            '<p class="wp-card-name">'  + p.name + '</p>' +
            '<p class="wp-card-meta">'  + t.fileNumber + p.file + '</p>' +
            '<p class="wp-card-meta">'  + t.lastSeen   + p.lastSeen + '</p>' +
            '<p class="wp-card-meta">'  + t.updated    + p.updated + '</p>' +
          '</div></a>';
      grid.appendChild(li);
    });
  }

  function renderPagination(total, page) {
    var pages     = Math.ceil(total / PER_PAGE);
    var prevLabel = $('mp-prev-label');
    var nextLabel = $('mp-next-label');

    if (prevLabel) prevLabel.textContent = (page - 1) + t.ofPages + pages;
    if (nextLabel) nextLabel.textContent = (page + 1) + t.ofPages + pages;

    prevBtn.disabled                    = page <= 1;
    nextBtn.disabled                    = page >= pages;
    prevBtn.parentElement.style.display = page <= 1    ? 'none' : 'block';
    nextBtn.parentElement.style.display = page >= pages ? 'none' : 'block';
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
