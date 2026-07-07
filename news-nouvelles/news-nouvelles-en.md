---
layout: default
title: News and communications
description: My page description
date_modified: 2026-06-25
lang: en
lang_url: news-nouvelles-fr.html
author:
creator:
subject:
issued: 2026-05-21
---

<style>
	dl.dlist
	{
	padding: 10px;
	flex: 1;
	border-top: 2px solid #70101d;
	background-color: #f9f9f9;	
    }
	.badge-located
	{
	background-color: #861322;
	}
	.badge-updated
	{
	background-color: #916808;
	}
	.filters
	{
	background-color: #f2f2f2;
	border-top: 2px solid #70101d;
	padding: 5px 15px 5px 15px;
	}
</style>
<p>Read the RCMP news and communications.</p>
<div class="row mrgn-bttm-lg">
  <div class="col-md-4">
    <section class="gc-drmt">
      <h2 class="h5" data-emptytext="Executive"><a href="/en/news/comm-en.html">Read the news from our executive</a></h2>
      <p>Read news shared by the leaders of the <abbr>RCMP</abbr> across Canada.</p>
    </section>
  </div>
  <div class="col-md-4">
    <section class="gc-drmt">
      <h2 class="h5" data-emptytext="Subscribe"><a href="/en/news/subscribe-en.html">Subscribe to news</a></h2>
      <p>Receive news and communications by email.</p>
    </section>
  </div>
	<div class="col-md-4">
    <section class="gc-drmt">
      <h2 class="h5" data-emptytext="Subscribe"><a href="#">Access news resources</a></h2>
      <p>Access web feeds, media relations office, Canada.ca news and Public Safety Canada news</p>
    </section>
  </div>
</div>
<div class="row">
	<div class="col-md-3">
    <aside aria-labelledby="news-filters-heading" id="news-filters">
		<div class="col-sm-12 filters" id="wb-srch"> 	 	
		<h2 class="h6" id="news-filters-heading">Search</h2> 	
         <form action="#" id="cse-search-box" method="get" role="search" aria-label="Search RCMP news">	  
          <div class="form-group wb-srch-qry"> 
          <label class="wb-inv" for="news-srch-q">Search RCMP news</label>
          <input class="wb-srch-q form-control" maxlength="100" id="news-srch-q" name="q" placeholder="Search RCMP news" type="search" autocomplete="off" value="">	
		  </div>
          <div class="form-group submit">
            <button class="btn btn-primary" type="submit">
              <span class="glyphicon-search glyphicon" aria-hidden="true"></span>
              <span class="wb-inv">Search</span>
            </button>
		  </div>
		 </form>
		</div>
		<div class="filters">
		<form role="form" method="get" action="#" id="filters" aria-label="Filter RCMP news">
      <div id="filtres"><h2 class="h6" id="news-filters">Filter</h2>
		<p class="small">Select any of the following filters to narrow your search</p></div>
		<div class="btn-group mrgn-bttm-sm mrgn-tp-md">
  <button type="button" class="btn btn-default wb-toggle" data-toggle="{&quot;selector&quot;: &quot;details&quot;, &quot;parent&quot;: &quot;#expand-collapse&quot;, &quot;type&quot;: &quot;on&quot;}">Expand all</button>
  <button type="button" class="btn btn-default wb-toggle" data-toggle="{&quot;selector&quot;: &quot;details&quot;, &quot;parent&quot;: &quot;#expand-collapse&quot;, &quot;type&quot;: &quot;off&quot;}">Collapse all</button>
</div>
<div id="expand-collapse">
		<details>
        <summary>Category
        </summary>
        <fieldset>
          <legend class="wb-inv">Category</legend>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Assault"><span class="cb-text">Assault</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Break and Enter"><span class="cb-text">Break-and-Enter</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Disturbance"><span class="cb-text">Disturbance</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Homicide"><span class="cb-text">Homicide</span></label>
          </div>
			 <div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Illigal border crossing"><span class="cb-text">Illegal border crossing</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Illicit drugs"><span class="cb-text">Illicit drugs</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Missing"><span class="cb-text">Missing person</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Organized crime"><span class="cb-text">Organized crime</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Property damage"><span class="cb-text">Property damage</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Public interest"><span class="cb-text">Public interest</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Theft"><span class="cb-text">Theft</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Traffic"><span class="cb-text">Traffic services</span></label>
				  </div>
			<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Trafficking"><span class="cb-text">Trafficking</span></label>
				  </div>
		<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Wanted"><span class="cb-text">Wanted</span></label>
				  </div>
		<div class="checkbox">
                <label><input data-filter="category" type="checkbox" value="Weapons"><span class="cb-text">Weapons</span></label>
				  </div>		
        </fieldset>
	  </details>
		<details>
        <summary>
       Published by
        </summary>
			<fieldset>
          <legend class="wb-inv">Territory or province</legend>
            <label class="small" mrgn-lft-0 for="territory">Territory or province</label>
            <select id="territory" name="territory" class="form-control">
				<option data-filter="territory" value="All"><span class="cb-text">All territories and provinces</span></option>
				<option data-filter="territory" value="Alberta"><span class="cb-text">Alberta</span></option>
                <option data-filter="territory" value="British Columbia"><span class="cb-text">British Columbia</span></option>
                <option data-filter="territory" value="Manitoba"><span class="cb-text">Manitoba</span></option>
                <option data-filter="territory" value="New Brunswick"><span class="cb-text">New Brunswick</span></option>
                <option data-filter="territory" value="Newfoundland and Labrador"><span class="cb-text">Newfoundland and Labrador</span></option>
                <option data-filter="territory" value="Northwest Territories"><span class="cb-text">Northwest Territories</span></option>
                <option data-filter="territory" value="Nova Scotia"><span class="cb-text">Nova Scotia</span></option>
                <option data-filter="territory" value="Nunavut"><span class="cb-text">Nunavut</span></option>
                <option data-filter="territory" value="Ontario"><span class="cb-text">Ontario</span></option>
                <option data-filter="territory" value="Prince Edward Island"><span class="cb-text">Prince Edward Island</span></option>
                <option data-filter="territory" value="Quebec"><span class="cb-text">Quebec</span></option>
                <option data-filter="territory" value="Saskatchewan"><span class="cb-text">Saskatchewan</span></option>
                <option data-filter="territory" value="Yukon"><span class="cb-text">Yukon</span></option>
			</select>
		    <label class="small mrgn-lft-0 mrgn-tp-md" for="region">National, divisional or regional policing</label>
			<select id="region" name="region" class="form-control">	
			<option data-filter="region" value="All"><span class="cb-text">All national, divisional and regional policing</span></option>	
			<option data-filter="region" value="RCMP National Headquarters"><span class="cb-text">National Headquarters</span></option>	
            <option data-filter="region" value="Alberta RCMP"><span class="cb-text">Alberta RCMP</span></option>
            <option data-filter="region" value="British Columbia RCMP"><span class="cb-text">British Columbia RCMP</span></option>
            <option data-filter="region" value="Manitoba RCMP"><span class="cb-text">Manitoba RCMP</span></option>
            <option data-filter="region" value="New Brunswick RCMP"><span class="cb-text">New Brunswick RCMP</span></option>
            <option data-filter="region" value="Newfoundland and Labrador RCMP"><span class="cb-text">Newfoundland and Labrador RCMP</span></option>
            <option data-filter="region" value="Northwest Territories RCMP"><span class="cb-text">Northwest Territories RCMP</span></option>
            <option data-filter="region" value="Nova Scotia RCMP"><span class="cb-text">Nova Scotia RCMP</span></option>
            <option data-filter="region" value="Nunavut RCMP"><span class="cb-text">Nunavut RCMP</span></option>
            <option data-filter="region" value="Prince Edward Island RCMP"><span class="cb-text">Prince Edward Island RCMP</span></option>
            <option data-filter="region" value="RCMP Depot Division"><span class="cb-text">RCMP Depot</span></option>
            <option data-filter="region" value="Saskatchewan RCMP"><span class="cb-text">Saskatchewan RCMP</span></option>
            <option data-filter="region" value="Yukon RCMP"><span class="cb-text">Yukon RCMP</span></option>
            <option data-filter="region" value="Federal Policing Central Region"><span class="cb-text">Central Region</span></option>
            <option data-filter="region" value="Federal Policing Eastern Region"><span class="cb-text">Eastern Region</span></option>
            <option data-filter="region" value="Federal Policing Northwest Region"><span class="cb-text">Northwest Region</span></option>
            <option data-filter="region" value="Federal Policing Pacific Region"><span class="cb-text">Pacific Region</span></option>
			</select>
        </fieldset>
      </details>	
		<details>
        <summary>
       Publish date
        </summary>
		  <fieldset>
			 <div><legend class="wb-inv">Publish date</legend>
			 <div><p class="small">For example, 2005, 21/11/2014, May 27, 2024</p></div>
             <label class="small" for="dt_mindate">Before</label><input class="form-control" data-column="0" id="dt_mindate" name="dt_mindate" type="text"> <label class="small" for="dt_maxdate">After</label><input class="form-control" data-column="0" id="dt_maxdate" name="dt_maxdate" type="text"></div>
		  </fieldset>
		</details>
</div>
		</form>
		</div>
	</aside>
	</div>
  <div class="col-md-9">
	  <h2 class="wb-inv">List of news</h2>
     <div aria-label="Active filters" aria-live="polite" id="news-active-filters" role="status"></div> 
     <div id="wp-toolbar">
     <p id="news-count" aria-live="polite"><strong id="news-count-num">0</strong>&nbsp;news and communications items found</p>
      <div id="wp-sort">
        <label for="news-sort-select">Sort by:</label>
        <select aria-label="Sort profiles" id="news-sort-select">
          <option value="newest">Updated (newest)</option>
          <option value="oldest">Updated (oldest)</option>
        </select>
	  </div>
	</div>
    <div aria-label="News" id="news-grid" role="list"></div>
    <p id="news-no-results">No news or communications match your current filters.</p>
   <nav aria-label="Pagination" class="rcmp-item-pagination" id="rcmp-content-page">
      <div class="rcmp-item-pagination__prev" id="news-prev-wrap">
        <button aria-label="Previous page" class="rcmp-item-pagination__link" id="news-prev" type="button">
          <i aria-hidden="true" class="rcmp-item-pagination__icon fa-solid fa-chevron-left"></i>
          <span class="rcmp-item-pagination__link-title">Previous<span class="rcmp-visually-hidden"> page</span></span>
        </button>
      </div>
      <ul class="rcmp-item-pagination__list" id="news-page-list"></ul>
      <div class="rcmp-item-pagination__next" id="news-next-wrap">
        <button aria-label="Next page" class="rcmp-item-pagination__link" id="news-next" type="button">
          <span class="rcmp-item-pagination__link-title">Next<span class="rcmp-visually-hidden"> page</span></span>
          <i aria-hidden="true" class="rcmp-item-pagination__icon fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </nav>
  </div>
</div>
<div class="container mrgn-lft-0">
			<section class="gc-features col-md-12 mrgn-bttm-lg">
				<h2 class="h3">Features</h2>
				<div class="row wb-eqht">
        <div class="col-md-4">
          <div class="well well-sm brdr-rds-0 eqht-trgt position-relative">
            <img alt="" src="web-banners-census-pop-web-tile-360x203-final.jpg">
            <h3 class="h5"><a class="stretched-link" href="https://www.census.gc.ca/en/index?utm_source=rcmp-web-tile&amp;utm_medium=pog&amp;utm_campaign=statcan-statcan-2026-genpop-collection-26-27&amp;utm_content=gr-093-en-census-wrapper">The 2026&nbsp;Census is now underway!</a></h3>
            <p>Check your mail and complete your census online today.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="well well-sm brdr-rds-0 eqht-trgt position-relative">
            <img alt="" src="2026-05-05-feature-red-dress-robe-rouge_0.jpg">
            <h3 class="h5"><a class="stretched-link" href="/en/indigenous-policing/missing-and-murdered-indigenous-women-girls-and-2slgbtqi-people">May&#160;5 - Red Dress Day</a></h3>
            <p>Honouring the memories of missing and murdered Indigenous women, girls and <abbr>2SLGBTQI+</abbr> people.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="well well-sm brdr-rds-0 eqht-trgt position-relative">
            <img alt="" src="2026-04-29-feature-musical-ride-schedule-horaire-tournee-carrousel.jpg">
            <h3 class="h5"><a class="stretched-link" href="/en/corporate-information/musical-ride/musical-ride-tour-schedule">Musical Ride tour schedule</a></h3>
            <p>This year’s tour schedule is now live! We’ll be making stops in British Columbia, Ontario and Quebec.</p>
          </div>
        </div>
      </div>
    </section>
</div>
<script>
	(function () {
  'use strict';
	Object.keys(openCats).forEach(function(cat) {
      var cb = document.querySelector('input[data-filter="' + cat + '"]');
      if (cb) {
        var details = cb.closest('details.wp-filter-group');
        if (details) details.open = true;}
    });
  }
  applyQueryString();
  refresh();
}());
</script>
<script>
(function () {
  'use strict';
  var lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  var I18N = {
    en: {
categoryLabels:  {assault: 'Assault', be: 'Break and enter', disturbance: 'Disturbance', homicide: 'Homicide', crossing: 'Illegal border crossing', drugs: 'Illicit drugs', missing: 'Missing person', crime: 'Organized crime', property: 'Interest', property: 'Public interest', theft: 'Theft', traffic: 'Traffic services', trafficking: 'Trafficking', wanted: 'Wanted', weapons: 'Weapons' },
 territoryLabels:  { alberta: 'Alberta', bc: 'British Columbia', manitoba: 'Manitoba', nb: 'New Brunswick', nl: 'Newfoundland and Labrador', nwt: 'Northwest Territories', ns: 'Nova Scotia', nunavut: 'Nunavut', ontario: 'Ontario', pei: 'Prince Edward Island', saskatchewan: 'Saskatchewan RCMP', yukon: 'Yukon RCMP' },
regionLabels:  { alberta: 'Alberta RCMP', bc: 'British Columbia RCMP', central: 'Federal Policing Central Region', eastern: 'Federal Policing Eastern Region', nw: 'Federal Policing Northwest Region', pacific: 'Federal Policing Pacific Region', manitoba: 'Manitoba RCMP', nb: 'New Brunswick RCMP', nl: 'Newfoundland and Labrador RCMP', nwt: 'Northwest Territories RCMP', ns: 'Nova Scotia RCMP', nunavut: 'Nunavut  RCMP', pei: 'Prince Edward Island RCMP', depot: 'RCMP Depot Division', hq: 'RCMP National Headquarters', quebec: 'Quebec', saskatchewan: 'Saskatchewan', yukon: 'Yukon' },		
      removeFilter:   'Remove filter: ',
      profileHref:    'news-nouvelles-en.html',
      viewProfile:    'View profile: ',
	  badge:          'Badge: ',	
      category:       'Category\u00A0: ',
	  territory:      'Territory\u00A0: ',	
      region:         'Region\u00A0: ',
      summary:        'Summary\u00A0: ',
      ofPages:        ' of ',
      showing:        'Showing\u00A0: ',
      orSep:          'or'
    },
    fr: {
categoryLabels:  { assault: 'Assault', be: 'Break and enter', disturbance: 'Disturbance', homicide: 'Homicide', crossing: 'Illegal border crossing', drugs: 'Illicit drugs', missing: 'Missing person', crime: 'Organized crime', property: 'Interest', property: 'Public interest', theft: 'Theft', traffic: 'Traffic services', trafficking: 'Trafficking', wanted: 'Wanted', weapons: 'Weapons' },
territoryLabels:  { alberta: 'Alberta', bc: 'British Columbia', manitoba: 'Manitoba', nb: 'New Brunswick', nl: 'Newfoundland and Labrador', nwt: 'Northwest Territories', ns: 'Nova Scotia', nunavut: 'Nunavut', ontario: 'Ontario', pei: 'Prince Edward Island', quebec: 'Quebec', saskatchewan: 'Saskatchewan', yukon: 'Yukon' },		
regionLabels:  { alberta: 'Alberta RCMP', bc: 'British Columbia RCMP', central: 'Federal Policing Central Region', eastern: 'Federal Policing Eastern Region', nw: 'Federal Policing Northwest Region', pacific: 'Federal Policing Pacific Region', manitoba: 'Manitoba RCMP', nb: 'New Brunswick RCMP', nl: 'Newfoundland and Labrador RCMP', nwt: 'Northwest Territories RCMP', ns: 'Nova Scotia RCMP', nunavut: 'Nunavut  RCMP', pei: 'Prince Edward Island RCMP', depot: 'RCMP Depot Division', hq: 'RCMP National Headquarters', quebec: 'Quebec', saskatchewan: 'Saskatchewan', yukon: 'Yukon' },		
      removeFilter:   'Retirer le filtre\u00A0: ',
      profileHref:    'news-nouvelles-fr.html',
      viewProfile:    'Voir le profil\u00A0: ',
	  badge:          'Badge: ',	
	  category:       'Category\u00A0: ',
	  territory:      'Territory\u00A0: ',	
      region:         'Region\u00A0: ',
	  updated:        'Mise à jour\u00A0: ',
      summary:        'Sommaire\u00A0: ',
      ofPages:        ' sur ',
      showing:        'Affichage\u00A0:',
      orSep:          'ou'
    }
  };
  var t  = I18N[lang];
  var $  = document.getElementById.bind(document);
  var ni = lang === 'fr' ? 1 : 0;
  // [nameEN, nameFR, file, category, location, territory, region, summary, updated, views]
  var RAW = [
    ['RCMP and CBSA dismantle crime group after nearly 250&nbsp;kg of cocaine is detected in shipping container in Halifax', 'RCMP and CBSA dismantle crime group after nearly 250&nbsp;kg of cocaine is detected in shipping container in Halifax', ' ', 'Organized crime and Illicit drugs', 'Halifax', 'Nova Scotia', 'Nova Scotia RCMP', 'RCMP and CBSA dismantle crime group', '2026-05-08', 1420],
    ['Bay St. George RCMP issue warning about counterfeit currency circulating in the area', 'Bay St. George RCMP issue warning about counterfeit currency circulating in the area', ' ', 'Fraud', 'Bay St. George', 'Nunavut', 'Nunavut RCMP', 'Counterfeit currency circulating in the Bay St. George area.', '2026-05-07', 980 ],
    ['Suspects arrested after replica handgun seen inside Morris hospital', 'Suspects arrested after replica handgun seen inside Morris hospital', ' ', 'Weapons', 'Morris', 'Manitoba', 'Manitoba RCMP', 'Suspects arrested in Morris.', '2026-05-06', 741 ],
    ['RCMP seeking public’s help following counterfeit money circulation', 'RCMP seeking public’s help following counterfeit money circulation', ' ', 'Fraud',  'Charlottetown', 'Prince Edward Island', 'Prince Edward Island RCMP', 'Seeking public’s help following counterfeit money circulation', '2026-05-05', 610 ],
    ['Comox Valley RCMP looking to locate suspect vehicle after hit-and-run', 'Comox Valley RCMP looking to locate suspect vehicle after hit-and-run', '<span class="badge badge-updated">Updated</span>', 'Wanted and Traffic services', 'Comox Valley', 'British Columbia', 'British Columbia RCMP', 'Looking to locate suspect vehicle after hit-and-run', '2026-05-04', 533 ],
    ['Joint Forces Operations results in Multiple Drug Related Arrests', 'Joint Forces Operations Results in Multiple Drug Related Arrests', ' ', 'Illicit drugs',  'Quebec City', 'Quebec',  'Federal Policing Central Region', 'Multiple drug-related arrests', '2026-05-03', 498 ],
    ['Missing 49-year-old woman', 'Missing 49-year-old woman', '<span class="badge badge-located">Located</span>', 'Missing', 'Steinbach', 'Manitoba', 'Federal Policing Western Region', 'Missing 49-year-old woman, last seen April 30, 2026', '2026-05-02', 412 ],
    ['Regina RCMP served an IRP on Monday morning', 'Regina RCMP served an IRP on Monday morning', ' ', 'Disturbance', 'Regina', 'Saskatchewan', 'Saskatchewan RCMP', 'Regina RCMP served an IRP', '2026-04-30', 344 ],
    ['Antigonish County District RCMP charges man after he flees from officers', 'Antigonish County District RCMP charges man after he flees from officers', ' ', 'Break and Enter', 'Antigonish', 'Nova Scotia', 'Nova Scotia RCMP', 'RCMP charges man after he flees from officers', '2026-04-28', 302 ],
    ['RCMP opening ceremonies for new detachment in the City of Pitt Meadows', 'RCMP opening ceremonies for new detachment in the City of Pitt Meadows', ' ', 'Public interest', 'Pitt Meadows', 'British Columbia', 'British Columbia RCMP', 'New detachment in the city of Pitt Meadows', '2026-04-26', 289 ],
	['Police Dog Service, conducted a targeted vehicle stop in Summerside', 'Police Dog Service, conducted a targeted vehicle stop in Summerside', ' ', 'Traffic services', 'Summerside', 'British Columbia', 'British Columbia RCMP', 'Targeted vehicle stop in Summerside', '2026-04-26', 289 ],  
    ['Alberta RCMP enforces safe driving during Canada Road Safety Week and Victoria Day long weekend', 'Alberta RCMP enforces safe driving during Canada Road Safety Week and Victoria Day long weekend', ' ', 'Traffic services', 'Edmonton', 'Alberta', 'Alberta RCMP', 'Safe driving during Canada Road Safety Week and Victoria Day long weekend', '2026-04-24', 265 ],
    ['RCMP seek public assistance to identify suspect in bus driver assault', 'RCMP seek public assistance to identify suspect in bus driver assault', ' ', 'Wanted', 'Ottawa', 'Ontario','RCMP National Headquarters', 'Seeking public assistance to identify suspect in bus driver assault', '2026-04-22', 241 ]
  ];
  var PROFILES = RAW.map(function (r, i) {
    return {
      id:        i + 1,
      name:      r[ni],
	  badge:     r[2], 	
      category:  r[3],
	  location:  r[4],	
      territory: r[5],
      region:    r[6],
      summary:   r[7],
      updated:   r[8],
    };
  });
  var PER_PAGE    = 9;
  var currentPage = 1;
  var activeData  = PROFILES.slice();
  var grid         = $('news-grid');
  var countNum     = $('news-count-num');
  var noResults    = $('news-no-results');
  var sortSel      = $('news-sort-select');
  var prevBtn      = $('news-prev');
  var nextBtn      = $('news-next');
  var activeTagsEl = $('news-active-filters');
  var pagination   = $('rcmp-content-page');
  var checkboxes   = document.querySelectorAll('#news-filters input[type="checkbox"]');
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
      return 0;
    });
  }
  function getActiveFilters() {
    var active = { category: [], territory: [], region: [] };
    checkboxes.forEach(function (cb) {
      if (cb.checked) active[cb.dataset.filter].push(cb.value);
    });
    return active;
  }
  function filterData(filters) {
    return PROFILES.filter(function (p) {
    return !filters.category.length || filters.category.indexOf(p.category) > -1;
	return !filters.location.length || filters.location.indexOf(p.location) > -1;	
	return !filters.territory.length || filters.territory.indexOf(p.territory) > -1;
	return !filters.region.length || filters.region.indexOf(p.region) > -1;	
    });
  }
  function renderTags(filters) {
    activeTagsEl.innerHTML = '';
    var allTags = [];
    Object.keys(filters).forEach(function (cat) {
      filters[cat].forEach(function (val) {
        allTags.push({ cat: cat, val: val });
      });
    });
    if (!allTags.length) return;
    var showingLabel = document.createElement('span');
    showingLabel.className = 'wp-filter-showing-label';
    showingLabel.textContent = t.showing;
    activeTagsEl.appendChild(showingLabel);
    allTags.forEach(function (item, index) {
      var label = item.cat === 'category' ? (t.categoryLabels[item.val] || item.val) : item.val.replace(/-/g, ' ');
	  var label = item.cat === 'location' ? (t.locationLabels[item.val] || item.val) : item.val.replace(/-/g, ' ');
	  var label = item.cat === 'territory' ? (t.territoryLabels[item.val] || item.val) : item.val.replace(/-/g, ' ');
	  var label = item.cat === 'region' ? (t.regionLabels[item.val] || item.val) : item.val.replace(/-/g, ' ');
      if (index > 0) {
        var sep = document.createElement('span');
        sep.className = 'wp-filter-tag-sep';
        sep.textContent = t.orSep;
        activeTagsEl.appendChild(sep);
      }
      var tag = document.createElement('span');
      tag.className = 'wp-filter-tag';
      tag.innerHTML =
        label + ' <button type="button" aria-label="' + t.removeFilter + label + '">\u2715</button>';
      tag.querySelector('button').addEventListener('click', function () {
        var cb = document.querySelector('input[data-filter="' + item.cat + '"][value="' + item.val + '"]');
        if (cb) { cb.checked = false; refresh(); }
      });
      activeTagsEl.appendChild(tag);
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
		  '<dl class="dlist">' +
          '<dt>' + '<a href="' + t.profileHref + '" aria-label="' + t.viewProfile + p.name + '">' + '<div class="wb-inv">' + p.name + '</div>' + '<strong>' + p.name  + '</strong>' + '</a>' + '<br>' + p.badge + '</dt>' +
		  '<dd>' + '<div class="wb-inv">' + t.updated + '</div>' + p.updated + '|'+ '<div class="wb-inv">' + t.region + '</div>' + p.region + '|' + '<div class="wb-inv">' + t.category + '</div>' + p.category + '</dd>' +
		  '<dd>' + '<strong>' + '<div class="wb-inv">' + t.location + '</div>' + p.location + ', ' + '<div class="wb-inv">' + t.territory + '</div>' + p.territory + '</strong>' + '</dd>' +
          '<dd>' + '<div class="wb-inv">' + t.summary + '</div>' + p.summary + '</dd>' +
		  '</dl>';
      grid.appendChild(li);
    });
  }
  function renderPagination(total, page) {
    var pages    = Math.ceil(total / PER_PAGE);
    var pageList = $('news-page-list');
    prevBtn.disabled                    = page <= 1;
    nextBtn.disabled                    = page >= pages;
    prevBtn.parentElement.style.visibility = page <= 1     ? 'hidden' : '';
    nextBtn.parentElement.style.visibility = page >= pages ? 'hidden' : '';
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
