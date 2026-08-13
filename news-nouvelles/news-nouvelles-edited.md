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
custom_css: /assets/css/careers.css
---

<style>
	dl.dlist
	{
	padding: 10px;
	flex: 1;
	border-top: 3px solid var(--rcmp-red);
	border-right: 1px solid var(--c-grey-light);	
	border-left: 1px solid var(--c-grey-light);
	border-bottom: 1px solid var(--c-grey-light);
    }
	.badge-located
	{
	background-color: #861322;
	}
	.badge-updated
	{
	background-color: #916808;
	}
	#news-filters {
	border: 1px solid var(--c-grey-border);	
	padding: 0;
	overflow: hidden;
	width: 100%;
}
	.news-filters-heading {	
	background: var(--c-black);
	color: var(--c-white);
	font-weight: 700;
	padding: 10px 15px;
	margin: 0;
}
	#re-filters {
	border: 0px;	
	padding: 0;
	overflow: hidden;
	width: 100%;
}
    #re-filters details {
    border-top: 1px solid var(--c-grey-border);
}	
	.re-select:focus {
	outline: 2px solid var(--rcmp-red);
	outline-offset: 0;	
}
    .re-input-text:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;	
}
    .checkbox input[type="checkbox"]:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;
}
    #news-sort-select:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;	
}	
	.form-controls:focus {
	outline: 2px solid var(--rcmp-red);
	outline-offset: 0;	
}
   .form-controls {
   width: 100%;
   padding: 6px 8px;
   border: 2px solid var(--c-black);
   border-radius: 0;
   background: var(--c-white);
   font-size: inherit;
   font-family: inherit;
   cursor: pointer;
   -webkit-appearance: none;
   appearance: none;
   background-repeat: no-repeat;
   background-position: right 10px center; 
   box-sizing: border-box;
}
   .input-group	{
   margin: 18px 12px;	   
}
   #news-count {
   display: flex;
   align-items: center;
   margin-bottom: 0;
}
   .btn-danger {
   padding: 12px 15px;      
}
</style>
<p>Read the RCMP news and communications.</p>
<div class="row mrgn-bttm-lg">
  <div class="col-md-4">
    <section class="gc-drmt">
      <h2 class="h5" data-emptytext="Executive"><a href="/en/news/comm-en.html">Read the news from our executive</a></h2>
      <p>Read news shared by the leaders of the <abbr>RCMP</abbr> across Canada</p>
    </section>
  </div>
	<div class="col-md-4">
    <section class="gc-drmt">
      <h2 class="h5" data-emptytext="Subscribe"><a href="#">Access news resources</a></h2>
      <p>Access web feeds, media relations office, Canada.ca news and Public Safety Canada news</p>
    </section>
  </div>
</div>
<div class="row mrgn-tp-lg" id="re-page">
	<div class="col-md-3" id="re-sidebar">
	<h2 class="h6 news-filters-heading">Search</h2>	
    <aside aria-labelledby="news-filters-heading" id="news-filters"> 	 
    <form action="#" id="cse-search-box" method="get" role="search" aria-label="Search RCMP news">	  
    <label for="btngrp-search2" class="wb-inv">Search</label>
   <div class="input-group" id="btngrp-search2">
    <input type="text" class="form-controls" placeholder="Search news" />
	 <span class="input-group-btn">
    <button class="btn btn-danger" type="button">
	 <span class="glyphicon-search glyphicon" aria-hidden="true"></span>
     <span class="wb-inv">Search</span>
    </button> 
   </span></div>
</form>
		<div id="re-filters">
		<h2 class="h6 news-filters-heading">Filter</h2>
		<p class="small mrgn-lft-md mrgn-tp-md">Select any of the following filters to narrow your search</p>	
	    <details class="wp-filter-group">
        <summary class="wp-filter-group-toggle"><i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span aria-level="3" class="wp-filter-summary-label" role="heading">Topic</span></summary>
		<fieldset>	
          <legend class="wb-inv">Topic</legend>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Assault"><span class="cb-text">Assault</span></label>
          </div>
		  <div class="checkbox">
          <label><input data-filter="category" type="checkbox" value="Border security"><span class="cb-text">Border security</span></label>
		  </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Break and Enter"><span class="cb-text">Break and enter</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Disturbance"><span class="cb-text">Disturbance</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="Homicide"><span class="cb-text">Homicide</span></label>
          </div>
		  <div class="checkbox">
          <label><input data-filter="category" type="checkbox" value="Human trafficking"><span class="cb-text">Human trafficking</span></label>
		  </div>
		  <div class="checkbox">
          <label><input data-filter="category" type="checkbox" value="Illicit drugs"><span class="cb-text">Illicit drugs</span></label>
		  </div>
		  <div class="checkbox">
          <label><input data-filter="category" type="checkbox" value="Missing persons"><span class="cb-text">Missing persons</span></label>
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
          <label><input data-filter="category" type="checkbox" value="Traffic enforcement"><span class="cb-text">Traffic enforcement</span></label>
		  </div>
		   <div class="checkbox">
           <label><input data-filter="category" type="checkbox" value="Wanted persons"><span class="cb-text">Wanted persons</span></label>
		 </div>
		<div class="checkbox">
        <label><input data-filter="category" type="checkbox" value="Weapons"><span class="cb-text">Weapons</span></label>
		</div>	
		</fieldset>
	  </details>
		<details class="wp-filter-group">
        <summary class="wp-filter-group-toggle">
           <i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span class="wp-filter-summary-label">Published by</span>
        </summary>
			<fieldset>
          <legend class="wb-inv">Territory or province</legend>
            <label class="re-select-label" for="territory">Territory or province</label>
            <select class="re-select" id="territory" name="territory">
				<option data-filter="territory" value="All territories and provinces"><span class="cb-text">All</span></option>
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
		    <label class="re-select-label mrgn-tp-md" for="region">National, divisional or regional policing</label>
			<select class="re-select" id="region" name="region">	
			<option data-filter="region" value="All national, divisional and regional policing"><span class="cb-text">All</span></option>	
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
		<details class="wp-filter-group">
        <summary class="wp-filter-group-toggle"><i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span class="wp-filter-summary-label">Publish date</span>
        </summary>
			<fieldset>
			 <legend class="wb-inv">Publish date</legend>
			 <div><p class="small">For example, 2005, 21/11/2014, May 27, 2024</p></div>
             <label class="re-input-text-label" for="dt_mindate">Before</label><input class="re-input-text" data-column="0" id="dt_mindate" name="dt_mindate" type="text"> <label class="re-input-text-label mrgn-tp-md" for="dt_maxdate">After</label><input class="re-input-text" data-column="0" id="dt_maxdate" name="dt_maxdate" type="text">
			</fieldset>
		</details>
		</div>
	</aside>
	</div>
  <div class="col-md-9" id="wp-results-col">
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
<section class="gc-features mrgn-bttm-lg">
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
  var PROFILES = [{ {
	name: 'RCMP and CBSA dismantle crime group after nearly 250&nbsp;kg of cocaine is detected in shipping container in Halifax',
	badge: ' ',
    category: 'Organized crime',
    location: 'Halifax',
    territory: 'Nova Scotia',
    region: 'Nova Scotia RCMP',
    summary: 'RCMP and CBSA dismantle crime group',
    updated: '2026-05-08'
  }, {
    name: 'Bay St. George RCMP issue warning about counterfeit currency circulating in the area',
	badge: ' ',
    category: 'Organized crime',
    location: 'Bay St. George',
    territory: 'Nunavut',
    region: 'Nunavut RCMP',
    summary: 'Counterfeit currency circulating in the Bay St. George area',
    updated: '2026-05-07'
}, {  
    name: 'Suspects arrested after replica handgun seen inside Morris hospital',
	badge: ' ',
    category: 'Weapons',
    location: 'Morris',
    territory: 'Manitoba',
    region: 'Manitoba RCMP',
    summary: 'Suspects arrested in Morris',
    updated: '2026-05-06'
}, { 
    name: 'RCMP seeking public’s help following counterfeit money circulation',
	badge: ' ',
    category: 'Organized crime',
    location: 'Charlottetown',
    territory: 'Prince Edward Island',
    region: 'Prince Edward Island RCMP',
    summary: 'Seeking public’s help following counterfeit money circulation',
    updated: '2026-05-05'
}, { 
    name: 'Comox Valley RCMP looking to locate suspect vehicle after hit-and-run',
	badge: '<span class="label label-default">Updated</span>',
    category: 'Wanted persons',
    location: 'Comox Valley',
    territory: 'British Columbia',
    region: 'British Columbia RCMP',
    summary: 'Looking to locate suspect vehicle after hit-and-run',
    updated: '2026-05-04'
}, { 
    name: 'Joint Forces Operations results in Multiple Drug Related Arrests',
	badge: ' ',
    category: 'Illicit drugs',
    location: 'Quebec City',
    territory: 'Quebec',
    region: 'Federal Policing Central Region',
    summary: 'Multiple drug-related arrests',
    updated: '2026-05-03'
}, { 
    name: 'Missing 49-year-old woman',
	badge: '<span class="label label-danger">Located</span>',
    category: 'Missing persons',
    location: 'Steinbach',
    territory: 'Manitoba',
    region: 'Federal Policing Western Region',
    summary: 'Missing 49-year-old woman, last seen April 30, 2026',
    updated: '2026-05-03'
}, {
    name: 'Regina RCMP served an IRP on Monday morning',
	badge: ' ',
    category: 'Disturbance',
    location: 'Regina',
    territory: 'Saskatchewan',
    region: 'Saskatchewan RCMP',
    summary: 'Regina RCMP served an IRP',
    updated: '2026-04-30'
}, {
    name: 'Antigonish County District RCMP charges man after he flees from officers',
	badge: ' ',
    category: 'Break and enter',
    location: 'Antigonish',
    territory: 'Nova Scotia',
    region: 'Nova Scotia RCMP',
    summary: 'RCMP charges man after he flees from officers',
    updated: '2026-04-28'
}, {
    name: 'RCMP opening ceremonies for new detachment in the City of Pitt Meadows',
	badge: ' ',
    category: 'Public interest',
    location: 'Pitt Meadows',
    territory: 'British Columbia',
    region: 'British Columbia RCMP',
    summary: 'New detachment in the city of Pitt Meadows',
    updated: '2026-04-26'
}, {
    name: 'Police Dog Service, conducted a targeted vehicle stop in Summerside',
	badge: ' ',
    category: 'Traffic',
    location: 'Summerside',
    territory: 'British Columbia',
    region: 'British Columbia RCMP',
    summary: 'Targeted vehicle stop in Summerside',
    updated: '2026-04-26'
}, {
    name: 'Alberta RCMP enforces safe driving during Canada Road Safety Week and Victoria Day long weekend',
	badge: ' ',
    category: 'Traffic',
    location: 'Edmonton',
    territory: 'Alberta',
    region: 'Alberta RCMP',
    summary: 'Safe driving during Canada Road Safety Week and Victoria Day long weekend',
    updated: '2026-04-24'
}, {
    name: 'RCMP seek public assistance to identify suspect in bus driver assault',
	badge: ' ',
    category: 'Wanted persons',
    location: 'Ottawa',
    territory: 'Ontario',
    region: 'RCMP National Headquarters',
    summary: 'Seeking public assistance to identify suspect in bus driver assault',
    updated: '2026-04-22'
}];  
	var LANG = document.documentElement.lang && document.documentElement.lang.slice(0, 2) === 'fr' ? 'fr' : 'en';
	var category_ID = {
    en: {
      1: 'Assault',
      2: 'Break and enter',
      3: 'Disturbance',
      4: 'Homicide',
      5: 'Illegal border crossing',
      6: 'Illicit drugs',
      7: 'Missing person',
      8: 'Organized crime',
      9: 'Public interest',
      10: 'Theft',
      11: 'Traffic',
      12: 'Trafficking',
      13: 'Wanted persons'
	  14: 'Weapons'
    },
	var territory_ID = {
    en: {
      1: 'Alberta',
      2: 'British Columbia',
      3: 'Manitoba',
      4: 'New Brunswick',
      5: 'Newfoundland and Labrador',
      6: 'Northwest Territories',
      7: 'Nova Scotia',
      8: 'Nunavut',
      9: 'Ontario',
      10: 'Prince Edward Island',
      11: 'Quebec',
      12: 'Saskatchewan',
      13: 'Yukon'
    },
 var region_ID = {
    en: {
      1: 'Alberta RCMP',
      2: 'British Columbia RCMP',
      3: 'Federal Policing Central Region',
      4: 'Federal Policing Northwest Region',
      5: 'Federal Policing Pacific Region',
      6: 'Manitoba RCMP',
      7: 'New Brunswick RCMP',
      8: 'Newfoundland and Labrador RCMP',
      9: 'Northwest Territories RCMP',
      10: 'Nova Scotia RCMP',
      11: 'Prince Edward Island RCMP',
      12: 'RCMP Depot Division',
      13: 'RCMP National Headquarters'
	  14: 'Saskatchewan RCMP'
	  15: 'Yukon RCMP'
       }
  };
  var QUERY_CATEGORY = 'c';
  var QUERY_TERRITORY = 't';
  var QUERY_REGION = 'r';
  var UI = {
    en: {
      catLabel: {
        category: 'Topic',
        territory: 'Territory or province',
        region: 'National, divisional or regional policing',
      },
      newsFound: 'News found',
      noResults: 'No news match your current filters.',
    }  });
  var PER_PAGE    = 10;
  var currentPage = 1;
  var activeData  = PROFILES.slice();
  var checkboxes  = document.querySelectorAll('#re-filters input[type="checkbox"]');
  var selects     = document.querySelectorAll('#re-filters select.re-select');
  var countNumEl  = document.getElementById('news-count');
  var activeTagEl = document.getElementById('news-active-filters');
  var grid        = document.getElementById('news-grid');
  var noResults   = document.getElementById('news-no-results');
  var pagination  = document.getElementById('rcmp-content-page');
  var prevBtn     = document.getElementById('news-prev');
  var nextBtn     = document.getElementById('news-next');	
  function getActiveFilters() {
    var active = { category: [], territory: [], region: [] };
   Array.prototype.forEach.call(checkboxes, function (cb) {
      if (cb.checked) active[cb.dataset.filter].push(cb.value);
    });
    Array.prototype.forEach.call(selects, function (sel) {
      if (sel.value) active[sel.dataset.filter].push(sel.value);
    });
    return active;
  }
  function filterData(filters) {
    return PROFILES.filter(function (p) {
    var okc = !filters.category.length || filters.category.indexOf(p.category) > -1;
	var okl = !filters.location.length || filters.location.indexOf(p.location) > -1;	
	var okt !filters.territory.length || filters.territory.indexOf(p.territory) > -1;
	var okr !filters.region.length || filters.region.indexOf(p.region) > -1;
    return okc && okl && okt && okr;
    });
  }
  function renderTags(filters) {
    activeTagsEl.innerHTML = '';
    var hasAny = Object.keys(filters).some(function(cat) {
      return filters[cat].length > 0;
    });
	  activeTagEl.style.display = hasAny ? '' : 'none';
    if (!hasAny) return;
    Object.keys(filters).forEach(function(cat) {
      if (!filters[cat].length) return;
      var row = document.createElement('div');
      row.className = 'news-filter-row';
      var label = document.createElement('span');
      label.className = 'news-filter-row-label';
      label.textContent = UI[LANG].catLabel[cat] + ':';
      row.appendChild(label);
      var tagsWrap = document.createElement('span');
      tagsWrap.className = 'news-filter-row-tags';
      filters[cat].forEach(function(val, idx) {
        if (idx > 0) {
          var sep = document.createElement('span');
          sep.className = 'wp-filter-tag-sep';
          sep.textContent = LANG === 'fr' ? 'ou' : 'or';
          tagsWrap.appendChild(sep);
        }
        var tag = document.createElement('span');
        tag.className = 'wp-filter-tag';
        tag.innerHTML = val + ' <button type="button" aria-label="' + (LANG === 'fr' ? 'Supprimer le filtre : ' : 'Remove filter: ') + val + '">\u2715</button>';
        tag.querySelector('button').addEventListener('click', function() {
          var cb = document.querySelector('input[data-filter="' + cat + '"][value="' + val + '"]');
          if (cb) {
            cb.checked = false;
          } else {
            var sel = document.querySelector('select[data-filter="' + cat + '"]');
            if (sel) sel.value = '';
          }
          refresh();
        });
        tagsWrap.appendChild(tag);
      });
      row.appendChild(tagsWrap);
      activeTagEl.appendChild(row);
    });
  } 
  function renderGrid(data, page) {
    var slice = data.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    grid.innerHTML = '';
    var show = !!slice.length;
    noResults.style.display  = show ? 'none'  : 'block';
    pagination.style.display = show ? 'block' : 'none';
    if (!show) return;
    slice.forEach(function(p) {
      var li = document.createElement('div');
      li.setAttribute('role', 'listitem');
      li.innerHTML =
		  '<dl class="dlist">' +
          '<dt>' + '<a href="' + t.profileHref + '" aria-label="' + t.viewProfile + p.name + '">' + '<div class="wb-inv">' + p.name + '</div>' + '<strong>' + p.name  + '</strong>' + '</a>' + '<br>' + p.badge + '</dt>' +
		  '<dd>' + '<div class="wb-inv">' + t.updated + '</div>' + '<ol class="list-inline"><li>' + p.updated + '&nbsp;&nbsp;' + '|' + '</li>' +  
		  '<li>' +  '<div class="wb-inv">' + t.region + '</div>' + p.region  + '&nbsp;&nbsp;|' +  '</li>' +
		  '<li>' + '<div class="wb-inv">' + t.category + '</div>' + p.category + '</li></ol></dd>' +
		  '<dd>' + '<div class="wb-inv">' + t.location + '</div>' + '<strong>' + p.location  + ',' + '&nbsp;<div class="wb-inv">' + t.territory + '</div>' + p.territory + '</strong></dd>' +
          '<dd>' + '<div class="wb-inv">' + t.summary + '</div>' + p.summary + '</dd>' +
		  '</dl>';
      grid.appendChild(li);
    });
  }
    function buildSlots(page, pages) {
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
 function renderPagination(total, page) {
    var pages = Math.ceil(total / PER_PAGE);
    var pageList = document.getElementById('re-page-list');
    prevBtn.disabled = page <= 1;
    nextBtn.disabled = page >= pages;
    prevBtn.parentElement.style.visibility = page <= 1 ? 'hidden' : '';
    nextBtn.parentElement.style.visibility = page >= pages ? 'hidden' : '';
    prevBtn.setAttribute('aria-disabled', page <= 1 ? 'true' : 'false');
    nextBtn.setAttribute('aria-disabled', page >= pages ? 'true' : 'false');
    pageList.innerHTML = '';
    buildSlots(page, pages).forEach(function(slot) {
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
        btn.setAttribute('aria-label', 'Page ' + slot);
        if (slot === page) btn.setAttribute('aria-current', 'page');
        btn.textContent = slot;
        btn.addEventListener('click', function() {
          currentPage = slot;
          draw();
          scrollToGrid();
        });
        li.appendChild(btn);
      }
      pageList.appendChild(li);
    });
  }
  function scrollToGrid() {
    var top = grid.getBoundingClientRect().top + window.pageYOffset;
    var nav = document.querySelector('.careers-nav');
    var offset = nav ? nav.offsetHeight + 16 : 80;
    window.scrollTo({
      top: top - offset,
      behavior: 'smooth'
    });
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
    if (!Object.keys(filters).some(function(cat) {
        return filters[cat].length > 0;
      })) {
      activeTagEl.style.display = 'none';
    }
    draw();
  }
 Array.prototype.forEach.call(checkboxes, function(cb) {
    cb.addEventListener('change', refresh);
  });
  Array.prototype.forEach.call(selects, function(sel) {
    sel.addEventListener('change', refresh);
  });
  clearBtn.addEventListener('click', function () {
    Array.prototype.forEach.call(checkboxes, function (cb) { cb.checked = false; });
    Array.prototype.forEach.call(selects, function (sel) { sel.value = ''; });
    refresh();
  });
  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      draw();
      scrollToGrid();
    }
  });
  nextBtn.addEventListener('click', function() {
    if (currentPage < Math.ceil(activeData.length / PER_PAGE)) {
      currentPage++;
      draw();
      scrollToGrid();
    }
  });
 function refresh() {
    var filters = getActiveFilters();
    activeData = filterData(filters);
    currentPage = 1;
    countNumEl.textContent = activeData.length;
    document.getElementById('re-count-text').textContent = activeData.length === 1
      ? UI[LANG].newsFound
      : UI[LANG].newsFound;
    renderTags(filters);
    if (!Object.keys(filters).some(function(cat) {
        return filters[cat].length > 0;
      })) {
      activeTagEl.style.display = 'none';
    }
    draw();
  }
  Array.prototype.forEach.call(checkboxes, function(cb) {
    cb.addEventListener('change', refresh);
  });
  Array.prototype.forEach.call(selects, function(sel) {
    sel.addEventListener('change', refresh);
  });
  clearBtn.addEventListener('click', function () {
    Array.prototype.forEach.call(checkboxes, function (cb) { cb.checked = false; });
    Array.prototype.forEach.call(selects, function (sel) { sel.value = ''; });
    refresh();
  });
  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      draw();
      scrollToGrid();
    }
  });
  nextBtn.addEventListener('click', function() {
    if (currentPage < Math.ceil(activeData.length / PER_PAGE)) {
      currentPage++;
      draw();
      scrollToGrid();
    }
  });
  function applyQueryString() {
    var params = new URLSearchParams(window.location.search);
    var openCats = {};
    var pVals = params.getAll(QUERY_CATEGORY);
    pVals.forEach(function(id) {
      var name = category[LANG][parseInt(id, 3)];
      if (!name) return;
      var cb = document.querySelector('input[data-filter="category"][value="' + name + '"]');
      if (cb) {
        cb.checked = true;
        openCats['category'] = true;
      }
    });
	var jVals = params.getAll(QUERY_TERRITORY);
    jVals.forEach(function(id) {
      var name = territory[LANG][parseInt(id, 4)];
      if (!name) return;
      var sel = document.querySelector('select[data-filter="territory"]');
      if (sel) sel.value = name;
    });   
    var jVals = params.getAll(QUERY_REGION);
    jVals.forEach(function(id) {
      var name = region[LANG][parseInt(id, 5)];
      if (!name) return;
      var sel = document.querySelector('select[data-filter="region"]');
      if (sel) sel.value = name;
    });
    Object.keys(openCats).forEach(function(cat) {
      var cb = document.querySelector('input[data-filter="' + cat + '"]');
      if (cb) {
        var details = cb.closest('details.wp-filter-group');
        if (details) details.open = true;
      }
    });
  }
  applyQueryString();
  refresh();
}());
</script>
