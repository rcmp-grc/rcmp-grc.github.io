---
layout: default
title: Wanted
date_modified: 2026-05-09
lang: en
lang_url: wanted-recherchees-list-fr.html
issued: 2026-05-09
---

<div class="row" id="wp-page">
  <div class="col-md-3 col-sm-4" id="wp-sidebar">
    <aside aria-labelledby="wp-filters-heading" id="wp-filters">
      <p id="wp-filters-heading">Filter by</p>
      <fieldset class="wp-filter-group">
        <legend>Gender</legend>
        <div class="checkbox">
          <label><input data-filter="gender" type="checkbox" value="male"><span class="cb-text">male</span><span class="wp-filter-badge">20</span></label>
        </div>
        <div class="checkbox">
          <label><input data-filter="gender" type="checkbox" value="female"><span class="cb-text">female</span><span class="wp-filter-badge">7</span></label>
        </div>
        <div class="checkbox">
          <label><input data-filter="gender" type="checkbox" value="unknown"><span class="cb-text">unknown</span><span class="wp-filter-badge">2</span></label>
        </div>
      </fieldset>
    </aside>
  </div>
  <div class="col-md-9 col-sm-8" id="wp-results-col">
    <div aria-label="Active filters" aria-live="polite" id="wp-active-filters" role="status"></div>
    <div id="wp-toolbar">
      <p id="wp-count" aria-live="polite"><strong id="wp-count-num">29</strong>&nbsp;wanted persons found</p>
      <div id="wp-sort">
        <label for="wp-sort-select">Sort by:</label>
        <select aria-label="Sort profiles" id="wp-sort-select">
          <option value="newest">Updated (newest)</option>
          <option value="oldest">Updated (oldest)</option>
          <option value="views">Most viewed</option>
        </select>
      </div>
    </div>
    <div aria-label="Wanted persons profiles" id="wp-grid" role="list"></div>
    <p id="wp-no-results">No profiles match your current filters.</p>
    <nav aria-label="Pagination" class="rcmp-pagination rcmp-pagination--block" id="rcmp-pagination">
      <div class="rcmp-pagination__prev" id="wp-prev-wrap">
        <button type="button" id="wp-prev" class="rcmp-pagination__link" aria-label="Previous page">
          <span class="rcmp-pagination__title-row">
            <i class="rcmp-pagination__icon fa-solid fa-chevron-left" aria-hidden="true"></i>
            <span class="rcmp-pagination__link-title">Previous page</span>
          </span>
          <span class="rcmp-visually-hidden">:</span>
          <span class="rcmp-pagination__link-label" id="wp-prev-label"></span>
        </button>
      </div>
      <div class="rcmp-pagination__next" id="wp-next-wrap">
        <button type="button" id="wp-next" class="rcmp-pagination__link" aria-label="Next page">
          <span class="rcmp-pagination__title-row">
            <i class="rcmp-pagination__icon fa-solid fa-chevron-right" aria-hidden="true"></i>
            <span class="rcmp-pagination__link-title">Next page</span>
          </span>
          <span class="rcmp-visually-hidden">:</span>
          <span class="rcmp-pagination__link-label" id="wp-next-label"></span>
        </button>
      </div>
    </nav>
  </div>
</div>

<script>
(function () {
  'use strict';
var PROFILES = [
  { id:1,  name:'SpongeBob SquarePants',  file:'21930481', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-05-08', views:1420 },
  { id:2,  name:'Sandy Cheeks',           file:'30847192', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-05-07', views:980  },
  { id:3,  name:'Patrick Star',           file:'19284730', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-05-06', views:741  },
  { id:4,  name:'Pearl Krabs',            file:'28374019', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-05-05', views:610  },
  { id:5,  name:'Squidward Tentacles',    file:'39201847', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-05-04', views:533  },
  { id:6,  name:'Mrs. Puff',              file:'10293847', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-05-03', views:498  },
  { id:7,  name:'Gary the Snail',         file:'48201937', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-05-02', views:412  },
  { id:8,  name:'Mr. Krabs',              file:'57839201', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-05-01', views:387  },
  { id:9,  name:'Karen Plankton',         file:'67391028', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-30', views:344  },
  { id:10, name:'Larry the Lobster',      file:'74829103', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-28', views:302  },
  { id:11, name:'Sandy Cheeks Jr.',       file:'81920374', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-26', views:289  },
  { id:12, name:'Barnacle Boy',           file:'92038471', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-24', views:265  },
  { id:13, name:'Mermaid Man',            file:'10293821', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-22', views:241  },
  { id:14, name:'Plankton',               file:'20193847', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-20', views:218  },
  { id:15, name:'Squilvia',               file:'30928471', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-18', views:197  },
  { id:16, name:'Harold SquarePants',     file:'41092837', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-16', views:183  },
  { id:17, name:'Margaret SquarePants',   file:'51293847', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-14', views:169  },
  { id:18, name:'Squilliam Fancyson',     file:'61928374', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-12', views:155  },
  { id:19, name:'Patrick\'s Dad',         file:'72938401', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-10', views:143  },
  { id:20, name:'Mindy',                  file:'83920174', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-08', views:131  },
  { id:21, name:'The Flying Dutchman',    file:'91283047', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-04-06', views:120  },
  { id:22, name:'DoodleBob',             file:'12930184', img:'https://dummyimage.com/480x600/000/fff', gender:'unknown', updated:'2026-04-04', views:110  },
  { id:23, name:'Sandy\'s Mom',           file:'23019384', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-04-02', views:100  },
  { id:24, name:'Old Man Jenkins',        file:'34128394', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-03-30', views:91   },
  { id:25, name:'Bubble Bass',            file:'45219304', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-03-28', views:83   },
  { id:26, name:'Flats the Flounder',     file:'56320194', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-03-26', views:74   },
  { id:27, name:'Nurse Bazooka',          file:'67430294', img:'https://dummyimage.com/480x600/000/fff', gender:'female',  updated:'2026-03-24', views:66   },
  { id:28, name:'Fred the Fish',          file:'78541304', img:'https://dummyimage.com/480x600/000/fff', gender:'male',    updated:'2026-03-22', views:59   },
  { id:29, name:'Mystery the Seahorse',   file:'89652414', img:'https://dummyimage.com/480x600/000/fff', gender:'unknown', updated:'2026-03-20', views:50   }
];

  var PER_PAGE     = 9;
  var currentPage  = 1;
  var activeData   = PROFILES.slice();

  var grid        = document.getElementById('wp-grid');
  var countNum    = document.getElementById('wp-count-num');
  var noResults   = document.getElementById('wp-no-results');
  var sortSel     = document.getElementById('wp-sort-select');
  var prevBtn     = document.getElementById('wp-prev');
  var nextBtn     = document.getElementById('wp-next');
  var activeTagsEl= document.getElementById('wp-active-filters');
  var checkboxes  = document.querySelectorAll('#wp-filters input[type="checkbox"]');

  function sortData(data, mode) {
    return data.slice().sort(function (a, b) {
      if (mode === 'newest') return b.updated.localeCompare(a.updated);
      if (mode === 'oldest') return a.updated.localeCompare(b.updated);
      if (mode === 'views')  return b.views - a.views;
      return 0;
    });
  }

  function getActiveFilters() {
    var active = { gender:[] };
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
    var labels = {
      gender: { male:'Male',female:'Female',unknown:'Unknown' }
    };
    activeTagsEl.innerHTML = '';
    var any = false;
    Object.keys(filters).forEach(function (cat) {
      filters[cat].forEach(function (val) {
        any = true;
        var tag  = document.createElement('span');
        tag.className = 'wp-filter-tag';
        tag.innerHTML = (labels[cat][val] || val) + ' <button type="button" aria-label="Remove filter: ' + (labels[cat][val] || val) + '">✕</button>';
        tag.querySelector('button').addEventListener('click', function () {
          var cb = document.querySelector('input[data-filter="' + cat + '"][value="' + val + '"]');
          if (cb) { cb.checked = false; refresh(); }
        });
        activeTagsEl.appendChild(tag);
      });
    });
  }

  function statusLabel(s) {
    if (s === 'unlawfully-at-large') return 'Unlawfully at large';
    if (s === 'canada-wide-warrant') return 'Canada-wide warrant';
    return 'Wanted';
  }

  function renderGrid(data, page) {
    var start = (page - 1) * PER_PAGE;
    var slice = data.slice(start, start + PER_PAGE);
    grid.innerHTML = '';

    if (!slice.length) {
      noResults.style.display = 'block';
      document.getElementById('rcmp-pagination').style.display = 'none';
      return;
    }
    noResults.style.display = 'none';
    document.getElementById('rcmp-pagination').style.display = 'block';

    slice.forEach(function (p) {
      var li = document.createElement('div');
      li.setAttribute('role', 'listitem');
      li.innerHTML =
        '<a class="wp-card" href="wanted-recherchees-en.html" aria-label="View profile: ' + p.name + '">' +
          '<img alt="Mugshot of ' + p.name + '" src="' + p.img + '" loading="lazy">' +
          '<div class="wp-card-body">' +
            '<p class="wp-card-name">' + p.name + '</p>' +
            '<p class="wp-card-meta">File number: ' + p.file + '</p>' +
            '<p class="wp-card-meta">Updated: ' + p.updated + '</p>' +
          '</div>' +
        '</a>';
      grid.appendChild(li);
    });
  }

  function renderPagination(total, page) {
    var pages = Math.ceil(total / PER_PAGE);
    var prevLabel = document.getElementById('wp-prev-label');
    var nextLabel = document.getElementById('wp-next-label');
    if (prevLabel) prevLabel.textContent = (page - 1) + ' of ' + pages;
    if (nextLabel) nextLabel.textContent = (page + 1) + ' of ' + pages;
    prevBtn.disabled = page <= 1;
    nextBtn.disabled = page >= pages;
    prevBtn.parentElement.style.display = page <= 1 ? 'none' : 'block';
    nextBtn.parentElement.style.display = page >= pages ? 'none' : 'block';
  }

  function refresh() {
    var filters = getActiveFilters();
    var filtered = filterData(filters);
    activeData   = sortData(filtered, sortSel.value);
    currentPage  = 1;
    countNum.textContent = activeData.length;
    renderTags(filters);
    renderGrid(activeData, currentPage);
    renderPagination(activeData.length, currentPage);
  }

  checkboxes.forEach(function (cb) {
    cb.addEventListener('change', refresh);
  });

  sortSel.addEventListener('change', function () {
    activeData  = sortData(activeData, sortSel.value);
    currentPage = 1;
    renderGrid(activeData, currentPage);
    renderPagination(activeData.length, currentPage);
  });

prevBtn.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      renderGrid(activeData, currentPage);
      renderPagination(activeData.length, currentPage);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      prevBtn.blur();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentPage < Math.ceil(activeData.length / PER_PAGE)) {
      currentPage++;
      renderGrid(activeData, currentPage);
      renderPagination(activeData.length, currentPage);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nextBtn.blur();
    }
  });

  refresh();
})();
</script>
