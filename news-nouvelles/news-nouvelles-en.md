---
layout: default
title: News and communications
description: My page description
date_modified: 2026-05-04
lang: en
lang_url: news-nouvelles-fr.html
author:
creator:
subject:
issued: 2026-05-04
---


<p>Read the RCMP news and communications.</p>
	

<div class="wb-eqht row">
<div class="col-md-4">
<section class="gc-drmt">
<h3 data-emptytext="Executive" class="h5">
<a href="/en/news/comm-en.html">Read the latest communications 
from our executive</a></h3>
<p>Read all news from the leaders of the <abbr>RCMP</abbr> across Canada.</p>
</section>
</div>

<div class="col-md-4">       		
<section class="gc-drmt">
<h3 data-emptytext="Subscribe" class="h5">
<a href="/en/news/subscribe-en.html">Subscribe to news</a></h3>
<p>Receive news and communications by email.</p>
</section>
</div>
</div>


<div class="mwscolumns section">
<div class="row">
<div class="col-md-3">
<div class="news-article-filter section">
<section class="mrgn-tp-lg">
<h4 class="h4">Search</h4>
<form action="https://github.com/rcmp-grc/rcmp-grc.github.io/edit/main/news-nouvelles/news-nouvelles-en.html#wb-news" id="cse-search-box" method="get" name="cse-search-box" role="search">
<div class="form-group wb-srch-news-qry">
<label class="wb-inv" for="wb-srch-news">Search RCMP news</label>
<input class="wb-srch-news form-control" id="wb-srch-news" list="wb-srch-news-q" maxlength="170" name="news" placeholder="RCMP news" size="15" type="search" value="">
<!--<datalist id="wb-srch-news-ac"></datalist>-->
</div>
<div class="form-group submit">
<button class="btn btn-primary btn-small" id="wb-srch-sub" name="wb-srch-sub" type="submit"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button>
</div>
</form>

				
			   <form class="wb-tables-filter" data-bind-to="dataset-filter" data-gc-analytics-formname="ServCan:Filter News - Filtrer les Nouvelles" data-gc-analytics-collect="[{&quot;value&quot;:&quot;select&quot;,&quot;emptyField&quot;:&quot;Any&quot;}]">
				  <div class="form-group">
					<label for="dt_type">News topic</label>
					<select class="form-control" id="dt_type" name="dt_type" data-column="3" data-exact="true">
						<option value="">All topics</option>
						
							<option>Assault</option>
						
							<option>Break and enter</option>
						
							<option>Disturbance</option>
						
							<option>Fraud</option>
						
							<option>Homicide</option>
						
							<option>Illegal border crossing</option>

							<option>Illicit drugs</option>
						
							<option>Missing person</option>
						
							<option>Organized crime</option>

							<option>Property damage</option>

							<option>Theft</option>
						
							<option>Traffic services</option>
						
							<option>Trafficking</option>

							<option>Wanted</option>

							<option>Weapons</option>
						
					</select>
				  </div> 
				  
				<div class="form-group">
					  <label for="dt_province-territory">Province or territory</label>
						<select class="form-control" id="dt_province-territory" name="dt_province-territory" data-column="2" data-exact="true">
							<option value="">All provinces and territories</option>
							
								<option>Alberta</option>
							
								<option>British Columbia</option>
							
								<option>Manitoba</option>
							
								<option>New Brunswick</option>
							
								<option>Newfoundland and Labrador</option>
							
								<option>Northwest Territories</option>
							
								<option>Nova Scotia</option>
							
								<option>Nunuvut</option>
							
								<option>Ontario</option>
							
								<option>Prince Edward Island</option>
							
								<option>Quebec</option>
							
								<option>Saskatchewan</option>
							
								<option>Yukon</option>
					  </select>
					</div>
					<div class="form-group">
					  <label for="dt_publisher">Published by</label>
					  <select class="form-control" id="dt_publisher" name="dt_publisher" data-column="7">
						<option value="">All divisions and regions</option>
						
				  			<option>Alberta RCMP</option>
						
				  			<option>British Columbia RCMP</option>
						
				  			<option>Federal Policing Central Region</option>
						
				  			<option>Federal Policing Eastern Region</option>
						
				  			<option>Federal Policing Northwest Region</option>
						
				  			<option>Federal Policing Pacific Region</option>
						
				  			<option>Manitoba RCMP</option>
						
				  			<option>New Brunswick RCMP</option>
						
				  			<option>Information and Communications</option>
						
				  			<option>Newfoundland and Labour RCMP</option>
						
				  			<option>Northwest Territories RCMP</option>
						
				  			<option>Nova Scotia RCMP</option>
						
				  			<option>Nunavut RCMP</option>
						
				  			<option>Prince Edward Island RCMP</option>
						
				  			<option>RCMP Depot Division</option>
						
				  			<option>RCMP National Headquarters</option>
						
				  			<option>Saskatchewan RCMP</option>
						
				  			<option>Yukon RCMP</option>
						
					  </select>
					</div>
					
					  <label for="dt_date">Published</label>
					 <div class="form-group">
								<label for="dt_mindate" class="small">Before</label>
								<input type="text" class="form-control" id="dt_mindate" name="dt_mindate" data-column="0">
							</div>
							<div class="form-group">
								<label for="dt_maxdate" class="small">After</label>
								<input type="text" class="form-control" id="dt_maxdate" name="dt_maxdate" data-column="0">
							</div>
					
					
					<div class="row">
						<div class="col-xs-6">
							<button type="submit" class="btn btn-primary" aria-controls="dataset-filter">Apply filter</button>
						</div>
						<div class="col-xs-6">
							<button type="reset" class="btn btn-default">Clear filters</button>
						</div>
					</div>
			 </form>

      </section>

</div>


                </div>
            
                <div class="col-md-9">
			<section id="body">
				  <h2 class="mrgn-tp-lg">List of news</h2>
<table id="n"  class="wb-tables table nws-tbl table-striped" data-wb-tables-color=".pkey" data-wb5-bind="[data-wbtbl-draw]" data-wb-tables='{
	"ordering": false,
	"pageLength": 10,
	"lengthChange": false,
	"columns": [{
			"data": "title",
			"className": "nws-tbl-ttl"
		},
		{
			"data": "date",
			"className": "nws-tbl-date"
		},
		{
			"data": "detachment",
			"className": "nws-tbl-type"
		},
		{
			"data": "type",
			"className": "nws-tbl-type"
		},
		{
			"data": "location",
			"className": "nws-tbl-desc"
		},
		{
			"data": "province",
			"className": "hidden"
		},
		{
			"data": "description",
			"className": "nws-tbl-desc mrgn-bbtm-md"
		}
	]
}'>
	<thead>
		<tr>
			<th class="hidden" tabindex="-1">Title</th>
			<th class="hidden" tabindex="-1">Date</th>
			<th class="hidden" tabindex="-1">Division or Federal Policing region</th>
			<th class="hidden" tabindex="-1">Type</th>
			<th class="hidden" tabindex="-1">Location</th>
			<th class="hidden" tabindex="-1">Province or territory</th>
			<th class="hidden" tabindex="-1">Description</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>

			</section>
		</div>
						
	</div>	
	</section>
  </div>

  </div>

    

<div class="mwsgeneric-base-html parbase section">



    <section class="gc-features">
	<h2>Features</h2>
	<!-- START: Add the list of links to the features to display in basic HTML mode -->
	<ul class="nojs-show">
		
        <li><a href="https://www.census.gc.ca/en/index?utm_source=canada-ca-web-tile&amp;utm_medium=pog&amp;utm_campaign=statcan-statcan-2026-genpop-collection-26-27&amp;utm_content=gr-094-en-census-wrapper">The 2026 Census is underway</a></li>
        
		<li><a href="https://budget.canada.ca/update-miseajour/2026/home-accueil-en.html?utm_campaign=fin-fin-update-miseajour-26-27">Spring Economic Update 2026</a></li>

		<li><a href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/response_conflict-reponse_conflits/crisis-crises/middle-east-moyen-orient.aspx?lang=fra">Conflict in the Middle East</a></li>

		<li><a href="/en/canadian-heritage/campaigns/asian-heritage-month.html?utm_campaign=pch-pch-ahm---mpa-26-27&amp;utm_medium=pog&amp;utm_source=canadanews&amp;utm_content=ahm2026-en-260501">Celebrate Asian Heritage Month</a></li>
        
        <li><a href="/en/services/policing/emergencies/preparedness/get-prepared/emergency-preparedness-week.html">Emergency Preparedness Week 2026</a></li>
        
        <li><a href="/en/public-services-procurement/services/communication/digitizing-records.html?utm_campaign=pspc-spac-disc-25-26&amp;utm_medium=vanity-url&amp;utm_source=canada-ca_homepage-feature_en">Document imaging solutions</a></li>

		<li><a href="/en/canadian-heritage/campaigns/canada-pass.html?utm_campaign=pch-pch-csp-lpcf-phase3-25-26&amp;utm_medium=canada-ca&amp;utm_source=news&amp;utm_content=featured-en-260116">Your Canadian summer starts here</a></li>

		<li><a href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/response_conflict-reponse_conflits/crisis-crises/ukraine.aspx?lang=eng&amp;utm_campaign=gac-amc-ukraine-21-22&amp;utm_source=canadahome&amp;utm_medium=feat&amp;utm_content=en">Canada and Ukraine</a></li>

		<li><a href="/en/canadian-heritage/campaigns/soccer-2026.html?utm_campaign=pch-pch-fifa26-2025-2026&amp;utm_medium=canada-ca&amp;utm_source=news-bas&amp;utm_content=web-promos-en-260303">Canada welcomes the FIFA World Cup 2026<abbr title="Trademark">™</abbr></a></li>
        
        <li><a href="https://gcsurplus.ca/mn-eng.cfm?utm_campaign=pspc-spac-gcsurplus-25-26&amp;utm_medium=vanity-url&amp;utm_source=canada-ca_news-feature_en">Find great deals on government surplus items</a></li>
        
        <li><a href="/en/health-canada/services/healthy-living/improving-health-men-canada.html#j">Your voice matters: #HealthyMen</a></li>
    
	</ul>
	<!-- END -->

	<!-- Add the "data-wb-randomize" attribute to the "row" element to randomize the features -->
	<div class="row wb-eqht-grd">

    <!-- SLOT 1 -->

		<div class="col-lg-4 col-sm-6 hght-inhrt wb-init wb-randomize-inited" data-wb-randomize="{ &quot;toggle&quot;: &quot;hide&quot; }" id="wb-auto-5">
			
			<section class="well well-sm eqht-trgt wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-6">
				<img src="/content/dam/news/features/20260504-1-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="https://www.census.gc.ca/en/index?utm_source=canada-ca-web-tile&amp;utm_medium=pog&amp;utm_campaign=statcan-statcan-2026-genpop-collection-26-27&amp;utm_content=gr-094-en-census-wrapper">The 2026 Census is underway</a></h3>
				<p>Check your mail and complete your census online. It’s quick, secure, and confidential</p>
			</section>	

			<section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-7">
				<img src="/content/dam/news/features/20260428-1-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="https://budget.canada.ca/update-miseajour/2026/home-accueil-en.html?utm_campaign=fin-fin-update-miseajour-26-27">Spring Economic Update 2026</a></h3>
				<p>The government’s plan to build, protect, and empower Canada amid global uncertainty.</p>
			</section>
			
			<section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-8">
				<img src="/content/dam/news/features/20260304-1-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/response_conflict-reponse_conflits/crisis-crises/middle-east-moyen-orient.aspx?lang=fra">Conflict in the Middle East</a></h3>
				<p>Information for Canadians in the region and worldwide</p>
			</section>
								
		</div>

    <!-- SLOT 2 -->

		<div class="col-lg-4 col-sm-6 hght-inhrt wb-init wb-randomize-inited" data-wb-randomize="{ &quot;toggle&quot;: &quot;hide&quot; }" id="wb-auto-9">
			
			<section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-10">
				<img src="/content/dam/news/features/20260501-1-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="/en/canadian-heritage/campaigns/asian-heritage-month.html?utm_campaign=pch-pch-ahm---mpa-26-27&amp;utm_medium=pog&amp;utm_source=canadanews&amp;utm_content=ahm2026-en-260501">Celebrate Asian Heritage Month</a></h3>
				<p>May is Asian Heritage Month and an opportunity to recognize the outstanding contributions of people of Asian origin in Canada.</p>
			</section>
            
            <section class="well well-sm eqht-trgt wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-11">
				<img src="/content/dam/news/features/20260501-2-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="/en/services/policing/emergencies/preparedness/get-prepared/emergency-preparedness-week.html">Emergency Preparedness Week 2026</a></h3>
				<p>Be prepared for emergencies by understanding the risks in your area.</p>
			</section>
            
            <section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-12">
				<img src="/content/dam/news/features/20260501-3-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="/en/public-services-procurement/services/communication/digitizing-records.html?utm_campaign=pspc-spac-disc-25-26&amp;utm_medium=vanity-url&amp;utm_source=canada-ca_homepage-feature_en">Document imaging solutions</a></h3>
				<p>Transform your records with tailored digitization services that help your organization work cleaner, faster and more efficiently.</p>
			</section>
						
			<section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-13">
				<img src="/content/dam/news/features/20260316-2-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="/en/canadian-heritage/campaigns/canada-pass.html?utm_campaign=pch-pch-csp-lpcf-phase3-25-26&amp;utm_medium=canada-ca&amp;utm_source=news&amp;utm_content=featured-en-260116">Your Canadian summer starts here</a></h3>
				<p>Free or discounted museums, parks, campsites and trains from June 19 to September 7. Plan your adventure now.</p>
			</section>

		</div>

    <!-- SLOT 3 -->

		<div class="col-lg-4 col-sm-6 hght-inhrt wb-init wb-randomize-inited" data-wb-randomize="{ &quot;toggle&quot;: &quot;hide&quot; }" id="wb-auto-14">
			
			<section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-15">
				<img src="/content/dam/news/features/20230201-2-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/response_conflict-reponse_conflits/crisis-crises/ukraine.aspx?lang=eng&amp;utm_campaign=gac-amc-ukraine-21-22&amp;utm_source=canadahome&amp;utm_medium=feat&amp;utm_content=en">Canada and Ukraine</a></h3>
				<p>Learn about Canada’s response to the Russian invasion of Ukraine.</p>
			</section>
			
			<section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-16">
				<img src="/content/dam/news/features/20260306-1-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="/en/canadian-heritage/campaigns/soccer-2026.html?utm_campaign=pch-pch-fifa26-2025-2026&amp;utm_medium=canada-ca&amp;utm_source=news-bas&amp;utm_content=web-promos-en-260303">Canada welcomes the FIFA World Cup 2026<abbr title="Trademark">™</abbr></a></h3>
				<p>Make the most of the event and discover the best of Canada. Consult the resources for fans, travellers and businesses.</p>
			</section>
            
            <section class="well well-sm eqht-trgt hide wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-17">
				<img src="/content/dam/news/features/20260501-4-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="https://gcsurplus.ca/mn-eng.cfm?utm_campaign=pspc-spac-gcsurplus-25-26&amp;utm_medium=vanity-url&amp;utm_source=canada-ca_news-feature_en">Find great deals on government surplus items</a></h3>
				<p>Explore GCSurplus for affordable government surplus items (furniture, vehicles and more) and support sustainability nationwide.</p>
			</section>
            
            <section class="well well-sm eqht-trgt wb-init wb-eqht-grd-inited hght-inhrt" id="wb-auto-18">
				<img src="/content/dam/news/features/20260501-5-360x203.jpg" alt="">
				<h3><a class="stretched-link" href="/en/health-canada/services/healthy-living/improving-health-men-canada.html#j">Your voice matters: #HealthyMen</a></h3>
				<p>Help shape the first Men and Boys’ Health Strategy. Questionnaire closes June 1, 2026.</p>
			</section>

		</div>

	</div>

</section>


</div>
<div class="mwscolumns section">
    

    

        

        
            
