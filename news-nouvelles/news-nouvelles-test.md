---
layout: default
title: News and communications
description: My page description
date_modified: 2026-05-21
lang: en
lang_url: news-nouvelles-fr.html
author:
creator:
subject:
issued: 2026-05-21
---

<style>
	.details
	 { border-top: 2px solid var(--rcmp-gold);
	   margin-bottom: 10px;
	   margin-left: 0px;
	 }
	.explore
	{ border-top: 2px solid var(--rcmp-gold);
	 }
	.update
	{ border-left: 5px solid var(--rcmp-gold);
	  border-right: 5px solid var(--rcmp-gold);
	  border-bottom: 5px solid var(--rcmp-gold);
	  border-top: 5px solid var(--rcmp-gold);
	  margin-left: 0px;
	  padding-left: 0px;
	  margin-bottom: 15px;
	}
	.update-tag
	{ font-weight: bold;
	  font-color: #0b0c0c;
	  padding-left: 0px;
	  width: 130px;
	  background-color: #bea468;
	}
	.left 
	{ justify-content: left;
	  align-items: left;
	  margin-left: 0px;
    }
	.wb-lbx lbx-gal
	{ padding-left: 15px;
	}
	.event
	{ border-left: 3px solid #f2f2f2;
	  border-right: 3px solid #f2f2f2;
	  border-bottom: 3px solid #f2f2f2;
	  border-top: 3px solid #f2f2f2;
	  padding-left: 0px;
	  padding-right: 10px;
	}
	.event-tag
	{ font-weight: bold;
	  font-color: #0b0c0c;
	  padding-left: 0px; 
	  width: 175px;
	  background-color: #f2f2f2;
	}
	.event-details
	{ font-weight: normal;
	  font-color: #0b0c0c;
	  padding-left: 10px; 
	  background-color: #ffffff;
	}
	.form-details
	{ background-color: #f3f2f1;
	}
	#applied-filters 
	{ display: flex; 
	 gap: 10px; 
	 margin-bottom: 10px; } 
	.filter-pill 
	{ background-color: #e0e0e0; 
	 padding: 8px 8px; 
	 border-radius: 15px; 
	 display: flex; 
	 align-items: center; 
	 gap: 8px; 
	 transition: opacity 0.3s ease, transform 0.3s ease; } 
	.filter-pill button 
	{ background: none; 
	 border: none; 
	 font-size: 10px; 
	 cursor: pointer; } 
	.filter-pill.fade-out 
	{ opacity: 0; 
	 transform: scale(0.8); }
</style>
<p>Read the RCMP news and communications.</p>
<div class="row mrgn-bttm-lg">
  <div class="col-md-4">
    <section class="gc-drmt">
      <h3 class="h5" data-emptytext="Executive"><a href="/en/news/comm-en.html">Read the latest communications from our executive</a></h3>
      <p>Read all news from the leaders of the <abbr>RCMP</abbr> across Canada.</p>
    </section>
  </div>
  <div class="col-md-4">
    <section class="gc-drmt">
      <h3 class="h5" data-emptytext="Subscribe"><a href="/en/news/subscribe-en.html">Subscribe to news</a></h3>
      <p>Receive news and communications by email.</p>
    </section>
  </div>
</div>
<div class="row">
	<div class="col-md-3">
    <aside aria-labelledby="news-filters-heading" id="news-filters">
      <h2 class="h4" id="news-filters-heading">Filter by</h2>
      <details class="wp-filter-group">
        <summary class="wp-filter-group-toggle">
          <i class="fa-solid fa-chevron-down wp-filter-chevron" aria-hidden="true"></i>
          <span class="wp-filter-summary-label">Category</span>
        </summary>
        <fieldset>
          <legend class="wb-inv">Category</legend>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="male"><span class="cb-text">Male</span><span class="wp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="female"><span class="cb-text">Female</span><span class="wp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="other"><span class="cb-text">Other</span><span class="wp-filter-badge">0</span></label>
          </div>
          <div class="checkbox">
            <label><input data-filter="category" type="checkbox" value="unknown"><span class="cb-text">Unknown</span><span class="wp-filter-badge">0</span></label>
          </div>
			 <div class="checkbox">
                <label for="assault"><input name="category" data-filter="category" type="checkbox" value="assault"><span class="cb-text">Assault</span><span class="wp-filter-badge">0</span></label>
				  </div>
			<div class="checkbox">
                <label for="brake-and-enter"><input name="category" data-filter="category" type="checkbox" value="brake-and-enter"><span class="cb-text">Break and enter</span><span class="wp-filter-badge">0</span></label>
				  </div>
        </fieldset>
      </details>
    </aside>
       	<!--<section id="filters">
        <form id="filterForm">
				<div class="form-group wb-srch-qry">		
<label class="wb-inv" for="titleFilter">Search RCMP news</label><input type="text" maxlength="20" id="titleFilter"><!--<button class="btn btn-primary btn-small" type="submit" title="Search"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></button>
          </div><button class="srchbox button" type="submit" title="Search"><i class="fa-solid fa-magnifying-glass"></i></button>-->
	<div><p class="small">Apply the following filtres to narrow your search</p></div>
	<div class="form-details">
			<details>
 <summary><strong>Filtre by</strong></summary>
<form id="filterForm" method="get">
			<fieldset>
                <legend class="small"><strong>Category</strong></legend>
				  <div class="checkbox">
                <label for="assault"><input name="category" data-filter="category" type="checkbox" value="Assault" id="Assault">
                  Assault</label>
				  </div>
				  <div class="checkbox">
                <label for="brake-and-enter"><input name="category" data-filter="category" type="checkbox" value="break-and-enter" id="break-and-enter">
                  Break and enter</label>
				  </div>
				  <div class="checkbox">
                <label for="disturbance"><input name="category" data-filter="category" type="checkbox" value="disturbance" id="disturbance">
                  Disturbance</label>
				  </div>
				  <div class="checkbox">
                 <label for="homicide"><input name="category" data-filter="category" type="checkbox" value="homicide" id="homicide">
                  Homicide</label>
				  </div>
				  <div class="checkbox">
                 <label for="illegal-border-crossing"><input name="category" data-filter="category" type="checkbox" value="illegal-border-crossing" id="illegal-border-crossing">
                  Illegal border crossing
				 </label>
				  </div>
				  <div class="checkbox">
                 <label for="illicit-drugs"><input name="category" data-filter="category" type="checkbox" value="illicit-drugs" id="illicit-drugs">
                  Illicit drugs
				 </label>
				  </div>
				  <div class="checkbox">
                <label for="missing-person"><input name="category" data-filter="category" type="checkbox" value="missing-person" id="missing-person">
                  Missing person
				</label>
				  </div>
				  <div class="checkbox">
                <label for="organized-crime"><input name="category" data-filter="category" type="checkbox" value='organized-crime' id="organized-crime">
                  Organized crime 
				</label>
				  </div>
				  <div class="checkbox">
                <label for="property-damage"><input name="category" data-filter="category" type="checkbox" value="property-damage" id="property-damage">
                  Property damage  
				</label>
				  </div>
				 <div class="checkbox"> 
                <label for="public-interest"><input name="category" data-filter="category" type="checkbox" value="public-interest" id="public-interest">
                  Public interest  
				</label>
				 </div>
				  <div class="checkbox">
                <label for="theft"><input name="category" data-filter="category" type="checkbox" value="theft" id="theft">
                  Theft  
				</label>
				  </div>
				  <div class="checkbox">
                <label for="traffic-services"><input name="category" data-filter="category" type="checkbox" value="traffic-services" id="traffic-services">
                  Traffic services  
				</label>
				  </div>
				  <div class="checkbox">
                <label for="trafficking"><input name="category" data-filter="category" type="checkbox" value="trafficking" id="trafficking">
                  Trafficking  
				</label>
				  </div>
				  <div class="checkbox">
                <label for="wanted"><input name="category" data-filter="category" type="checkbox" value="wanted" id="wanted">
                  Wanted  
				</label>
				  </div>
				  <div class="checkbox">
                <label for="weapons"><input name="category" data-filter="category" type="checkbox" value="weapons" id="weapons">
                  Weapons  
				</label>
				  </div>
          </fieldset>
				<fieldset>	 
			 <legend class="small"><strong>Province or Territory</strong></legend>
				<label for="dt-province-territory"></label>
				<select class="form-control" data-column="2" id="dt-province-territory" name="dt-province-territory">
                <option value="All provinces and territories">
                  All provinces and territories
                </option>
                <option value="Alberta">
                  Alberta
                </option>
                <option value="British_Columbia">
                  British Columbia
                </option>
                <option value="Manitoba">
                  Manitoba
                </option>
                <option value="New Brunswick">
                  New Brunswick
                </option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Northwest Territories">
                  Northwest Territories
                </option>
                <option value="Nova Scotia">
                  Nova Scotia
                </option>
                <option value="Nunavut">
                  Nunavut
                </option>
                <option value="Ontario">
                  Ontario
                </option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">
                  Quebec
                </option>
                <option value="Saskatchewan">
                  Saskatchewan
                </option>
                <option value="Yukon">
                  Yukon
                </option>
              </select>
				</fieldset>
				  <fieldset>
				<legend class="small"><strong>Published by</strong></legend>
                <label for="dt-division-or-federal-policing-region"></label><select class="form-control" data-column="2" id="dt-division-or-federal-policing-region" name="dt-division-or-federal-policing-region">
                <option value="All policing regions">
                  All divisions or Federal Policing regions
                </option>
                <option value="Alberta RCMP">
                  Alberta RCMP
                </option>
                <option value="British Columbia RCMP">
                  British Columbia RCMP
                </option>
                <option value="Federal Policing Central Region">
                  Federal Policing Central Region
                </option>
                <option value="Federal Policing Eastern Region">
                  Federal Policing Eastern Region
                </option>
                <option value="Federal Policing Northwest Region">
                  Federal Policing Northwest Region
                </option>
                <option value="Federal Policing Pacific Region">
                  Federal Policing Pacific Region
                </option>
                <option value="Manitoba RCMP">
                  Manitoba RCMP
                </option>
                <option value="New Brunswick RCMP">
                  New Brunswick RCMP
                </option>
                <option value="Newfoundland and Labrador RCMP">
                  Newfoundland and Labrador RCMP
                </option>
                <option value="Northwest Territories RCMP">
                  Northwest Territories RCMP
                </option>
                <option value="Nova Scotia RCMP">
                  Nova Scotia RCMP
                </option>
                <option value="Nunavut RCMP">
                  Nunavut RCMP
                </option>
                <option value="Prince Edward Island RCMP">
                  Prince Edward Island RCMP
                </option>
                <option value="RCMP Depot Division">
                  RCMP Depot Division
                </option>
                <option value="RCMP National Headquarters">
                  RCMP National Headquarters
                </option>
                <option value="Saskatchewan RCMP">
                  Saskatchewan RCMP
                </option>
                <option value="Yukon RCMP">
                  Yukon RCMP
                </option>
              </select>
				  </fieldset>
				  <fieldset>
					  <legend class="small"><strong>Published</strong></legend>
             <label class="small" for="dt_mindate">Before</label> <input class="form-control" data-column="0" id="dt_mindate" name="dt_mindate" type="text"> <label class="small" for="dt_maxdate">After</label><input class="form-control" data-column="0" id="dt_maxdate" name="dt_maxdate" type="text">
				</fieldset>
</form>
			</details>
	</div>
		</section>-->
						</div>
  <div class="col-md-9">
     <div aria-label="Active filters" aria-live="polite" id="news-active-filters" role="status"></div>
    <div id="wp-toolbar">
      <p id="wp-count" aria-live="polite"><strong id="news-count-num">0</strong>&nbsp;missing persons found</p>
      <div id="wp-sort">
        <label for="news-sort-select">Sort by:</label>
        <select aria-label="Sort profiles" id="news-sort-select">
          <option value="newest">Updated (newest)</option>
          <option value="oldest">Updated (oldest)</option>
          <option value="views">Most viewed</option>
        </select>
      </div>
    </div>
    <div aria-label="Missing persons profiles" id="news-grid" role="list"></div>
    <p id="news-no-results">No profiles match your current filters.</p>
    <nav aria-label="Pagination" class="rcmp-content-page rcmp-content-page--block" id="rcmp-content-page">
      <div class="rcmp-content-page__prev" id="news-prev-wrap">
        <button type="button" id="news-prev" class="rcmp-content-page__link" aria-label="Previous page">
          <span class="rcmp-content-page__title-row">
            <i class="rcmp-content-page__icon fa-solid fa-chevron-left" aria-hidden="true"></i>
            <span class="rcmp-content-page__link-title">Previous page</span>
          </span>
          <span class="rcmp-visually-hidden">:</span>
          <span class="rcmp-content-page__link-label" id="news-prev-label"></span>
        </button>
      </div>
      <div class="rcmp-content-page__next" id="news-next-wrap">
        <button type="button" id="news-next" class="rcmp-content-page__link" aria-label="Next page">
          <span class="rcmp-content-page__title-row">
            <i class="rcmp-content-page__icon fa-solid fa-chevron-right" aria-hidden="true"></i>
            <span class="rcmp-content-page__link-title">Next page</span>
          </span>
          <span class="rcmp-visually-hidden">:</span>
          <span class="rcmp-content-page__link-label" id="news-next-label"></span>
        </button>
      </div>
    </nav>
  </div>
   <!-- <section id="body">
      <h2 class="wb-inv">List of news</h2>
<div class="panel panel-body panel-warning mrgn-tp-0 mrgn-bttm-sm">
	<div class="row">
   <div><p><i class="fa-solid fa-filter"></i> <span class="wb-inv">Filtres selected:</span> </p></div>
<div id="applied-filters"> 
<div class="filter-pill" data-filter="category-electronics"><button onclick="removeFilter(this)">×</button> Electronics </div> 
<div class="filter-pill" data-filter="status-active"><button onclick="removeFilter(this)">×</button> Active </div> 
</div>
</div>
</div>
		 <table id="dataTable" class="wb-tables table nws-tbl table-striped">
			 <thead>
    <tr><th class="hidden" tabindex="-1">Title</th><th class="hidden" tabindex="-1">Date</th>  <th class="hidden" tabindex="-1">Location</th><th class="hidden" tabindex="-1">Description</th></tr>
  </thead>
  <tbody id="tableBody"></tbody>
		 </table> 
    </section>
    <!--<nav aria-label="Pagination" class="rcmp-pagination rcmp-pagination--block" id="rcmp-pagination">
      <div class="rcmp-pagination__prev" id="mp-prev-wrap">
        <button type="button" id="mp-prev" class="rcmp-pagination__link" aria-label="Previous page">
          <span class="rcmp-pagination__title-row">
            <i class="rcmp-pagination__icon fa-solid fa-chevron-left" aria-hidden="true"></i>
            <span class="rcmp-pagination__link-title">Previous page</span>
          </span>
          <span class="rcmp-visually-hidden">:</span>
          <span class="rcmp-pagination__link-label" id="mp-prev-label"></span>
        </button>
      </div>
      <div class="rcmp-pagination__next" id="mp-next-wrap">
        <button type="button" id="mp-next" class="rcmp-pagination__link" aria-label="Next page">
          <span class="rcmp-pagination__title-row">
            <i class="rcmp-pagination__icon fa-solid fa-chevron-right" aria-hidden="true"></i>
            <span class="rcmp-pagination__link-title">Next page</span>
          </span>
          <span class="rcmp-visually-hidden">:</span>
          <span class="rcmp-pagination__link-label" id="mp-next-label"></span>
        </button>
      </div>
    </nav>-->
  </div>-->
</div>
<div class="container">
  <div class="row">
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
</div>
<script>
(function () {
  'use strict';

  var lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';

  var I18N = {
    en: {
      categoryLabels:   { male: 'Male', female: 'Female', other: 'Other', unknown: 'Unknown', assault: 'Assault', break-and-enter: 'Break and enter' },
      removeFilter:   'Remove filter: ',
      profileHref:    'news-nouvelles-test.html',
      viewProfile:    'View profile: ',
      photo:          'Photo of missing person ',
      fileNumber:     'File number: ',
      updated:        'Updated: ',
      lastSeen:       'Last seen: ',
      ofPages:        ' of ',
      showing:        'Showing:',
      orSep:          'or'
    },
    fr: {
      categoryLabels:   { male: 'homme', female: 'femme', other: 'autre', unknown: 'inconnu', assault: 'Assault', break-and-enter: 'Break and enter' },
      removeFilter:   'Retirer le filtre\u00A0: ',
      profileHref:    'news-nouvelles-fr.html',
      viewProfile:    'Voir le profil\u00A0: ',
      photo:          'Photo de la personne disparue ',
      fileNumber:     'Numéro de dossier\u00A0: ',
      updated:        'Mise à jour\u00A0: ',
      lastSeen:       'Vu(e) pour la dernière fois\u00A0: ',
      ofPages:        ' sur ',
      showing:        'Affichage\u00A0:',
      orSep:          'ou'
    }
  };

  var t  = I18N[lang];
  var $  = document.getElementById.bind(document);
  var ni = lang === 'fr' ? 1 : 0;

  // [nameEN, nameFR, file, category, lastSeen, updated, views]
  var RAW = [
    ['SpongeBob SquarePants',  "Bob l'éponge",        '32473043', 'male',     '1999-05-01', '2026-05-08', 1420],
    ['Sandy Cheeks',           'Sandy Écureuil',       '30847192', 'female',  '2020-03-15', '2026-05-07', 980 ],
    ['Patrick Star',           'Patrick Étoile',       '19284730', 'male',    '2021-07-04', '2026-05-06', 741 ],
    ['Pearl Krabs',            'Perle Krabs',          '28374019', 'female',  '2022-01-10', '2026-05-05', 610 ],
    ['Squidward Tentacles',    'Carlo Tentacules',     '39201847', 'male',    '2023-06-22', '2026-05-04', 533 ],
    ['Mrs. Puff',              'Madame Puff',          '10293847', 'female',  '2024-09-30', '2026-05-03', 498 ],
    ['Gary the Snail',         'Gary',                 '48201937', 'male',    '2022-11-18', '2026-05-02', 412 ],
    ['Mr. Krabs',              'Monsieur Krabs',       '57839201', 'male',    '2023-02-28', '2026-05-01', 387 ],
    ['Karen Plankton',         'Karen',                '67391028', 'female',  '2025-01-05', '2026-04-30', 344 ],
    ['Larry the Lobster',      'Larry le Homard',      '74829103', 'male',    '2024-04-12', '2026-04-28', 302 ],
    ['Sandy Cheeks Jr.',       'Sandy Écureuil Jr.',   '81920374', 'female',  '2023-08-09', '2026-04-26', 289 ],
    ['Barnacle Boy',           "Bernard l'Hermite",    '92038471', 'male',    '2022-05-17', '2026-04-24', 265 ],
    ['Mermaid Man',            "L'Homme Sirène",       '10293821', 'male',    '2021-12-01', '2026-04-22', 241 ],
    ['Plankton',               'Plankton',             '20193847', 'male',    '2025-03-14', '2026-04-20', 218 ],
    ['Squilvia',               'Squilvia',             '30928471', 'female',  '2024-07-07', '2026-04-18', 197 ],
    ['Harold SquarePants',     'Harold SquarePants',   '41092837', 'male',    '2023-10-23', '2026-04-16', 183 ],
    ['Margaret SquarePants',   'Margaret SquarePants', '51293847', 'female',  '2022-09-11', '2026-04-14', 169 ],
    ['Squilliam Fancyson',     'Squilliam Fancyson',   '61928374', 'male',    '2024-02-19', '2026-04-12', 155 ],
    ["Patrick's Dad",          'Le père de Patrick',   '72938401', 'male',    '2023-04-30', '2026-04-10', 143 ],
    ['Mindy',                  'Mindy',                '83920174', 'female',  '2025-05-01', '2026-04-08', 131 ],
    ['The Flying Dutchman',    'Le Hollandais volant', '91283047', 'unknown', '2021-03-08', '2026-04-06', 120 ],
    ['DoodleBob',              'Gribouille Bob',       '12930184', 'unknown', '2024-11-15', '2026-04-04', 110 ],
    ["Sandy's Mom",            'La mère de Sandy',     '23019384', 'female',  '2023-07-20', '2026-04-02', 100 ],
    ['Old Man Jenkins',        'Vieux Jenkins',        '34128394', 'male',    '2022-06-06', '2026-03-30', 91  ],
    ['Bubble Bass',            'Bubble Bass',          '45219304', 'male',    '2025-02-14', '2026-03-28', 83  ],
    ['Flats the Flounder',     "Flats l'Achigan",      '56320194', 'male',    '2023-09-03', '2026-03-26', 74  ],
    ['Nurse Bazooka',          'Infirmière Bazooka',   '67430294', 'female',  '2024-06-18', '2026-03-24', 66  ],
    ['Fred the Fish',          'Fred le Poisson',      '78541304', 'male',    '2022-12-25', '2026-03-22', 59  ],
    ['Mystery the Seahorse',   "Mystère l'Hippocampe", '89652414', 'other',   '2025-04-10', '2026-03-20', 50  ],
	['Mystery the Seahorse',   "Mystère l'Hippocampe", '89652414', 'assault',   '2025-04-10', '2026-03-20', 50  ],
['Nurse Bazooka',          'Infirmière Bazooka',   '67430294', 'break-and-enter',  '2024-06-18', '2026-03-24', 66  ]	
  ];

  var PROFILES = RAW.map(function (r, i) {
    return {
      id:       i + 1,
      name:     r[ni],
      file:     r[2],
      img:      'https://dummyimage.com/480x600/000/fff',
      category: r[3],
      lastSeen: r[4],
      updated:  r[5],
      views:    r[6]
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
      if (mode === 'views')  return b.views - a.views;
      return 0;
    });
  }

  function getActiveFilters() {
    var active = { category: [] };
    checkboxes.forEach(function (cb) {
      if (cb.checked) active[cb.dataset.filter].push(cb.value);
    });
    return active;
  }

  function filterData(filters) {
    return PROFILES.filter(function (p) {
      return !filters.category.length || filters.category.indexOf(p.category) > -1;
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
<!--<script>
const news = [
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/news/2026/05/4352857"><abbr>RCMP</abbr> and <abbr>CBSA</abbr> dismantle crime group after nearly 250&nbsp;<abbr>kg</abbr> of cocaine is detected in shipping container in Halifax</a></strong><br>',  date: '2026-05-07 | Federal Policing Central Region | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Newmarket, Ontario</strong></div>', description: '<div class="mrgn-lft-md">Canadian federal authorities dismantled an organized crime operation that imported 248.7&nbsp;<abbr>kg</abbr> of cocaine from the Dominican Republic.</div>' },
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/nl/news/2026/05/4352845">Bay St. George RCMP issue warning about counterfeit currency circulating in the area</a></strong><br>',  date: '2026-05-06 | Manitoba RCMP | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Newmarket, Ontario</strong></div>', description: '<div class="mrgn-lft-md">Bay St. George RCMP is advising the public about recent circulation of counterfeit currency after reports from local residents and businesses.</div>' },
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/manitoba/news/2026/05/4352847">Suspects arrested after replica handgun seen inside Morris hospital</a></strong><br>',  date: '2026-05-07 | Federal Policing Central Region | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Morris, Manitoba</strong></div>', description: '<div class="mrgn-lft-md">On May 5, at approximately 4:30 p.m., RCMP responded to a report that an armed male was threatening a female inside Morris General Hospital. </div>' },	
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/nb/news/2026/05/4352849">RCMP seeking public’s help following counterfeit money circulation</a></strong><br>',  date: '2026-05-06 | New Brunswick RCMP | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Kedgwick and Saint-Quentin, New Brunswick</strong></div>', description: '<div class="mrgn-lft-md">The Saint-Quentin RCMP is seeking the public’s help to identify a person of interest in connection with a counterfeit money investigation.</div>' },	
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/bc/comox-valley/news/2026/05/4352854">Comox Valley <abbr>RCMP</abbr> looking to locate suspect vehicle after hit-and-run</a></strong><br>',  date: '2026-05-07 | Federal Policing Central Region | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Summerside, Prince Edward Island</strong></div>', description: '<div class="mrgn-lft-md">May 5, 2026, Members of the Prince District Joint Forces Operation (<abbr>JFO</abbr>), Summerside Police, Provincial Joint Enforcement Team (<abbr>JET</abbr>), and <abbr>RCMP</abbr> Police Dog Service, conducted a targeted vehicle stop in Summerside.</div>' },
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/pei/news/2026/05/4352858">Joint Forces Operations Results in Multiple Drug Related Arrests</a></strong><br>',  date: '2026-05-07 | Prince Edward Island <abbr>RCMP</abbr> | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Summerside, Prince Edward Island</strong></div>', description: '<div class="mrgn-lft-md">May 5, 2026, Members of the Prince District Joint Forces Operation (<abbr>JFO</abbr>), Summerside Police, Provincial Joint Enforcement Team (<abbr>JET</abbr>), and <abbr>RCMP</abbr> Police Dog Service, conducted a targeted vehicle stop in Summerside.</div>' },	
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/nb/news/2026/05/4352850">Missing 49-year-old woman</a></strong><br>',  date: '2026-05-06 | Chilliwack <abbr>RCMP</abbr> | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Perth-Andover, New Brunswick</strong></div>', description: '<div class="mrgn-lft-md">The Perth-Andover RCMP is asking for the public’s help to locate a missing 49-year-old woman from Presque Isle, Maine.</div>' },
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/manitoba/news/2026/05/4353043">Steinbach RCMP served an IRP on Monday morning</a></strong><br>',  date: '2026-05-13 | Manitoba RCMP | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Steinbach, Manitoba</strong></div>', description: '<div class="mrgn-lft-md">On May 11, 2026, at 6:50 AM, Steinbach RCMP received a report of a possible impaired driver in a brown SUV on Mckenzie Avenue in Steinbach.</div>' },
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/nova-scotia/news/2026/05/4353038">Antigonish County District RCMP charges man after he flees from officers</a></strong><br>',  date: '2026-05-13 | Nova Scotia RCMP | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Maryvale, Nova Scotia</strong></div>', description: '<div class="mrgn-lft-md">Antigonish County District RCMP has charged a man after he fled from officers near Maryvale.</div>' },	
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/bc/pitt-meadows/news/2026/05/4352855">RCMP opening ceremonies for new detachment in the City of Pitt Meadows</a></strong><br>',  date: '2026-05-12 | Pitt Meadows RCMP | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Pitt Meadows, British Columbia</strong></div>', description: '<div class="mrgn-lft-md">The City of Pitt Meadows and q̓ic̓əy̓ (Katzie) First Nation welcomed the much-anticipated opening of a new RCMP Detachment in Pitt Meadows.</div>' },	
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/alberta/news/2026/05/4353033">Alberta RCMP enforces safe driving during Canada Road Safety Week and Victoria Day long weekend</a></strong><br>',  date: '2026-05-12 | Alberta RCMP | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Edmonton, Alberta</strong></div>', description: '<div class="mrgn-lft-md">May 12-18, 2026, marks Canada Road Safety Week, a seven-day national campaign, made in partnership with the Canadian Association of Chiefs of Police, aimed at making Canada’s roads the safest in the world. The Alberta RCMP will be promoting safe driving behaviours during the week as well as conducting targeted enforcement to remove impaired drivers from Alberta roadways during Victoria Day long weekend and National Impaired Driving Prevention Enforcement Day on May 16, 2026.</div>' },	
{ title: '<div class="mrgn-lft-md"><strong><a href="https://rcmp.ca/en/bc/chilliwack/news/2026/05/4352853">Chilliwack RCMP seek public assistance to identify suspect in bus driver assault</a></strong><br>',  date: '2026-05-07 | Comox Valley <abbr>RCMP</abbr> | News releases</div>', location: '<div class="mrgn-lft-md mrgn-tp-lg"><strong>Chilliwack, British Columbia</strong></div>', description: '<div class="mrgn-lft-md">The Chilliwack RCMP is requesting the public’s assistance in identifying a man alleged to have been involved in the assault of a BC Transit bus driver in March of 2026.</div>' }
		];
const form = document.getElementById('filterForm');
const tableBody = document.getElementById('tableBody');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page reload
  const searchTerm = document.getElementById('titleFilter').value.toLowerCase();
  // Filter the data
  const filteredData = news.filter(news => 
    news.title.toLowerCase().includes(searchTerm),
  );
  renderTable(filteredData);
});
function renderTable(data) {
  tableBody.innerHTML = ''; // Clear current rows
  data.forEach(item => {
    const row = `<tr><td>${item.title}</td><td>${item.date}</td><td>${item.location}</td><td>${item.description}</td></tr>`;
    tableBody.insertAdjacentHTML('beforeend', row); // Build table
  });
}
	// Initial load
renderTable(news);
	var checkboxes   = document.querySelectorAll('#mp-filters input[type="checkbox"]');
	 function getActiveFilters() {
    var active = { category: [] };
    checkboxes.forEach(function (cb) {
      if (cb.checked) active[cb.dataset.filter].push(cb.value);
    });
    return active;
  }
checkboxes.forEach(function (cb) { cb.addEventListener('change', refresh); });
sortSel.addEventListener('change', function () {
    activeData  = sortData(activeData, sortSel.value);
    currentPage = 1;
    draw();
  });
	</script>-->
