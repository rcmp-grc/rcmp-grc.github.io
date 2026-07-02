---
layout: default
title: Statistiques relatives à la fausse monnaie canadienne
date_modified: 2026-06-29
lang: en
lang_url: stats.html
---

<style>
/* Better tables */
thead th {text-wrap: balance}
caption {text-align: left}
figure table {background-color: var(--rcmp-white, #fff)}

/* Squishy tables */
@media screen and (max-width: 991px) {
	table:has(td[data-label]):not(.table-fixed) {

		border: none;
		border-block-start: 1px solid var(--rcmp-grey-md, #b1b4b6);

		thead {
			display: none;
		}

		tr {
			display: block;
			margin: 0;
			padding: 0;
			border: none;
			border-block-end: 1px solid var(--rcmp-grey-md, #b1b4b6);
		}

		th,
		td {
			display: block;
			border: none;
			text-align: left !important;
			white-space: normal;
		}

		th {
			padding: 0.75em 0.25em;
		}

		td {
			padding: 0.375em 0.25em;

			&:first-of-type {
				padding-block-start: 0.75em;
			}

			&:last-of-type {
				padding-block-end: 0.75em;
			}
		}

		td::before,
		th::before {
			content: attr(data-label) / attr(data-label);
			display: block;
			font-weight: 400;
			font-size: 0.85em;
			color: var(--rcmp-grey-dk, #505a5f);
			margin-bottom: 0.1em;
			float: none;
		}

		th[colspan] {
			background-color: var(--rcmp-grey-lt, #f3f2f1);
			/* border-bottom: 1px solid var(--rcmp-grey-md, #b1b4b6); */
		}

		tbody+tbody {
			border: none;
		}

		&.table-condensed tbody,
		&.table-sm tbody {
			td {
				padding: 0.25em .25em;
			}

			th[colspan] {
				padding: 0.375em .25em;
			}

			td::before {
				font-size: 0.75em;
			}

			:is(td, th)+ :is(td, th) {
				padding-top: 0.25em;
			}
		}
	}
}
</style>


<nav>
	<h2>Sur cette page</h2>
	<ul>
		<li><a href="#t1">Tableau 1: Statistiques sur les billets de banque contrefaits - Nombre total de billets passés et saisis au Canada</a></li>
		<li><a href="#t2">Tableau 2: Statistiques sur les billets de banque contrefaits - Nombre total par coupure</a></li>
		<li><a href="#t3">Tableau 3: Statistiques sur les billets de banque contrefaits - Valeur totale des billets passés en circulation par coupure</a></li>
		<li><a href="#t4">Tableau 4: Statistiques sur les billets de banque contrefaits - Nombre total par province et territoire</a></li>
		<li><a href="#t5">Tableau 5: Technologie utilisée - Nombre total de billets passés et saisis</a></li>
		<li><a href="#t6">Tableau 6: Statistiques sur les fausses pièces de monnaie canadienne - Nombre total de pièces passées et saisies</a></li>
	</ul>
</nav>

<section class="alert alert-info">
	<h2>Notes</h2>
	<!-- <p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&nbsp;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p> -->
	<p>La monnaie contrefaite est classées en deux catégories&nbsp;: billet de banque/pièce de monnaie passé(e) (qu'on a réussi à faire entrer dans le système financier), et billet de banque/pièce de monnaie saisi(e) (saisi par la police avant d'entrer dans le système financier).</p>
</section>

<table class="table table-bordered table-condensed" id="t1">
	<caption>Tableau 1&nbsp;: Statistiques sur les billets de banque contrefaits - Nombre total de billets passés et saisis au Canada</caption>
	<thead>
		<tr class="active">
			<th scope="col">Année</th>
			<th class="text-right" scope="col">Passés</th>
			<th class="text-right" scope="col">Saisis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" data-label="Année">2025</th>
			<td data-label="Passés" class="text-right nowrap">42 204</td>
			<td data-label="Saisis" class="text-right nowrap">154 622</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2024</th>
			<td data-label="Passés" class="text-right nowrap">22 478</td>
			<td data-label="Saisis" class="text-right nowrap">46 988</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2023</th>
			<td data-label="Passés" class="text-right nowrap">17 043</td>
			<td data-label="Saisis" class="text-right nowrap">39 244</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2022</th>
			<td data-label="Passés" class="text-right nowrap">15 332</td>
			<td data-label="Saisis" class="text-right nowrap">53 630</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2021</th>
			<td data-label="Passés" class="text-right nowrap">17 228</td>
			<td data-label="Saisis" class="text-right nowrap">29 918</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2020</th>
			<td data-label="Passés" class="text-right nowrap">18 965</td>
			<td data-label="Saisis" class="text-right nowrap">6 355</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2019</th>
			<td data-label="Passés" class="text-right nowrap">33 732</td>
			<td data-label="Saisis" class="text-right nowrap">10 198</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2018</th>
			<td data-label="Passés" class="text-right nowrap">33 437</td>
			<td data-label="Saisis" class="text-right nowrap">11 167</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2017</th>
			<td data-label="Passés" class="text-right nowrap">22 794</td>
			<td data-label="Saisis" class="text-right nowrap">23 836</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2016</th>
			<td data-label="Passés" class="text-right nowrap">17 504</td>
			<td data-label="Saisis" class="text-right nowrap">3 362</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2015</th>
			<td data-label="Passés" class="text-right nowrap">16 445</td>
			<td data-label="Saisis" class="text-right nowrap">3 967</td>
		</tr>
		<tr>
			<th scope="row" data-label="Année">2014</th>
			<td data-label="Passés" class="text-right nowrap">62 418</td>
			<td data-label="Saisis" class="text-right nowrap">13 960</td>
		</tr>
	</tbody>
</table>
<!-- <details class="print-open">
<summary>Notes du tableau 1</summary>
<p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&#160;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p>
</details> -->

<table class="table table-bordered table-condensed" id="t2">
	<caption>Tableau 2&nbsp;: Statistiques sur les billets de banque contrefaits - Nombre total par coupure</caption>
	<thead>
		<tr class="active">
			<th scope="col" colspan="2">Année</th>
			<th class="text-right nowrap" scope="col">5 $</th>
			<th class="text-right nowrap" scope="col">10 $</th>
			<th class="text-right nowrap" scope="col">20 $</th>
			<th class="text-right nowrap" scope="col">50 $</th>
			<th class="text-right nowrap" scope="col">100 $</th>
			<th class="text-right nowrap" scope="col">1 000 $</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2025</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">4 512</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">395</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">12 897</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">5 449</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">18 933</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">14</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">288</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">372</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">85 622</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">13 800</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">54 527</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">1</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2024</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">5 190</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">524</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">2 911</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">5 351</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">8 495</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">5</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">567</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">598</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">12 283</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">11 131</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">22 405</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">3</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2023</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">1 138</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">357</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">2 931</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">4 665</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">7 933</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">14</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">645</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">559</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">14 447</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">10 008</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">13 573</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">4</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2022</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">1 522</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">459</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">2 832</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">4 235</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">6 252</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">28</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">290</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">45</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">20 054</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">6 458</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">26 725</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">15</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2021</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">2 133</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">1 097</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">4 095</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">4 447</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">5 448</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">7</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">2 207</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">1 023</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">14 384</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">5 743</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">6 561</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2020</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">2 251</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">986</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">4 788</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">5 434</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">5 483</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">15</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">577</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">512</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">762</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">1 961</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">2 521</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">1</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2019</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">3 354</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">1 497</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">12 780</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">5 902</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">10 172</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">16</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">697</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">591</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">2 591</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">1 970</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">4 346</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">2</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2018</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">3 355</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">1 561</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">9 029</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">5 777</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">13 685</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">24</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">710</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">469</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">2 728</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">2 570</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">4 686</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">1</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2017</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">1 667</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">1 127</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">6 345</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">5 792</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">7 858</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">3</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">720</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">577</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">6 725</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">1 805</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">14 005</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2016</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">789</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">1 470</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">6 341</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">2 820</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">6 074</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">8</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">552</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">252</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">606</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">542</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">1 408</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">2</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2015</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">1 653</td>
			<td data-label="Billets de 10 $ passés" class="text-right nowrap">984</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">8 707</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">1 092</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">3 984</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">14</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">355</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">272</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">1 618</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">578</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">976</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">32</td>
		</tr>
		<tr>
			<th data-label="Année" scope="rowgroup" rowspan="2" class="col-md-1">2014</th>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Passés</th>
			<td data-label="Billets de 5 $ passés" class="text-right nowrap">666</td>
			<td1 data-label="Billets de 10 $ passés" class="text-right nowrap">1 441</td>
			<td data-label="Billets de 20 $ passés" class="text-right nowrap">44 389</td>
			<td data-label="Billets de 50 $ passés" class="text-right nowrap">1 207</td>
			<td data-label="Billets de 100 $ passés" class="text-right nowrap">14 663</td>
			<td data-label="Billets de 1 000 $ passés" class="text-right nowrap">6</td>
		</tr>
		<tr>
			<th data-label="Passé ou saisi" scope="row" class="col-md-1">Saisis</th>
			<td data-label="Billets de 5 $ saisis" class="text-right nowrap">77</td>
			<td data-label="Billets de 10 $ saisis" class="text-right nowrap">122</td>
			<td data-label="Billets de 20 $ saisis" class="text-right nowrap">7 651</td>
			<td data-label="Billets de 50 $ saisis" class="text-right nowrap">120</td>
			<td data-label="Billets de 100 $ saisis" class="text-right nowrap">5 990</td>
			<td data-label="Billets de 1 000 $ saisis" class="text-right nowrap">0</td>
		</tr>
	</tbody>
</table>
<details class="print-open mrgn-bttm-lg">
	<summary>Notes du tableau 2</summary>
	<p>À l'exception des billets de 1&#160;$ et 2&#160;$.</p>
	<!-- <p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&#160;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p> -->
</details>

<table class="table table-bordered table-condensed" id="t3">
	<caption>Tableau 3&nbsp;: Statistiques sur les billets de banque contrefaits - Valeur totale des billets passés en circulation par coupure</caption>
	<thead>
		<tr class="active">
			<th scope="col" class="col-md-1">Année</th>
			<th scope="col" class="col-md-2 text-right">Valeur totale en $</th>
			<th scope="col" class="col-md-1 text-right">5&nbsp;$ <br>(pourcent)</th>
			<th scope="col" class="col-md-1 text-right">10&nbsp;$ <br>(pourcent)</th>
			<th scope="col" class="col-md-1 text-right">20&nbsp;$ <br>(pourcent)</th>
			<th scope="col" class="col-md-1 text-right">50&nbsp;$ <br>(pourcent)</th>
			<th scope="col" class="col-md-1 text-right">100&nbsp;$ <br>(pourcent)</th>
			<th scope="col" class="col-md-1 text-right">1&nbsp;000&nbsp;$ <br>(pourcent)</th>
		</tr>
	</thead>
	<tr>
		<th data-label="Année" scope="row">2025</th>
		<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>2 460 090 $</b></td>
		<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">22 560 $<br>(11 %)</td>
		<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">3 950 $<br>(1 %)</td>
		<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">257 940 $<br>(30 %)</td>
		<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">272 450 $<br>(13 %)</td>
		<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">1 893 300 $<br>(45 %)</td>
		<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">14 000 $<br>(0 %)</td>
	</tr>
	<tbody>
		<tr>
			<th data-label="Année" scope="row">2024</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>1 211 460 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">25 950 $ <br>(23 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">5 240 $ <br>(2 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">58 220 $ <br>(13 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">267 550 $ <br>(24 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">849 500 $ <br>(38 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">5 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2023</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>1 108 430 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">5 690 $ <br>(7 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">3 570 $ <br>(2 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">58 620 $ <br>(17 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">233 250 $ <br>(27 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">793 300 $ <br>(47 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">14 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2022</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>933 798 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">7 610 $ <br>(10 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">4 590 $ <br>(3 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">56 640 $ <br>(18 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">211 750 $ <br>(28 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">625 200 $ <br>(41 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">28 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2021</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>877 685 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">10 665 $ <br>(12 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">10 970 $ <br>(6 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">81 900 $ <br>(24 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">222 350 $ <br>(26 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">544 800 $ <br>(32 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">7 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2020</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>951 875 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">2 251 $ <br>(12 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">986 $ <br>(5 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">4 788 $ <br>(25 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">5 434 $ <br>(29 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">5 483 $ <br>(29 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">15 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2019</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>1 615 640 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">3 354 $ <br>(10 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">1 497 $ <br>(4 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">12 780 $ <br>(38 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">5 902 $ <br>(18 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">10 172 $ <br>(30 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">16 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2018</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>1 894 315 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">16 775 $ <br>(10 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">15 610 $ <br>(5 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">180 580 $ <br>(27 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">288 850 $ <br>(17 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">1 368 500 $ <br>(41 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">24 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2017</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>1 224 905 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">8 335 $ <br>(7 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">11 270 $ <br>(5 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">126 900 $ <br>(28 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">289 600 $ <br>(25 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">785 800 $ <br>(34 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">3 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2016</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>901 865 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">3 945 $ <br>(5 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">14 700 $ <br>(8 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">126 820 $ <br>(36 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">141 000 $ <br>(16 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">607 400 $ <br>(35 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">8 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2015</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>659 245 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">8 265 $ <br>(10 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">9 840 $ <br>(6 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">174 140 $ <br>(53 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">54 600 $ <br>(7 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">398 400 $ <br>(24 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">14 000 $ <br>(0 %)</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2014</th>
			<td data-label="Valeur totale de tous les billets contrefaits" class="text-right nowrap"><b>2 438 170 $</b></td>
			<td data-label="Valeur des billets de 5 $ (pourcent)" class="text-right nowrap">3 330 $ $ <br>(1 %)</td>
			<td data-label="Valeur des billets de 10 $ (pourcent)" class="text-right nowrap">14 410 $ $ <br>(2 %)</td>
			<td data-label="Valeur des billets de 20 $ (pourcent)" class="text-right nowrap">887 780 $ $ <br>(71 %)</td>
			<td data-label="Valeur des billets de 50 $ (pourcent)" class="text-right nowrap">60 350 $ $ <br>(2 %)</td>
			<td data-label="Valeur des billets de 100 $ (pourcent)" class="text-right nowrap">1 466 300 $ $ <br>(24 %)</td>
			<td data-label="Valeur des billets de 1 000 $ (pourcent)" class="text-right nowrap">6 000 $ $ <br>(0 %)</td>
		</tr>
	</tbody>
</table>
<!-- <details class="print-open">
Notes du tableau 3
<p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&#160;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p>
</details> -->

<table class="table table-bordered table-condensed" id="t4">
	<caption>Tableau 4&nbsp;: Statistiques sur les billets de banque contrefaits - Nombre total par province et territoire</caption>
	<thead>
		<tr class="active">
			<th rowspan="2" scope="col">Province ou territoire</th>
			<th class="text-center" colspan="2" scope="colgroup">2024</th>
			<th class="text-center" colspan="2" scope="colgroup">2025</th>
		</tr>
		<tr class="active">
			<th class="text-right" scope="col">Passés</th>
			<th class="text-right" scope="col">Saisis</th>
			<th class="text-right" scope="col">Passés</th>
			<th class="text-right" scope="col">Saisis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th data-label="Province ou territoire" scope="row">Colombie-Britannique</th>
			<td data-label="Passée en 2024" class="text-right nowrap">2 061</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">751</td>
			<td data-label="Passée en 2025" class="text-right nowrap">3 955</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">27 394</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Alberta</th>
			<td data-label="Passée en 2024" class="text-right nowrap">3 897</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">7 099</td>
			<td data-label="Passée en 2025" class="text-right nowrap">3 966</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">7 031</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Saskatchewan</th>
			<td data-label="Passée en 2024" class="text-right nowrap">190</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">73</td>
			<td data-label="Passée en 2025" class="text-right nowrap">455</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">791</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Manitoba</th>
			<td data-label="Passée en 2024" class="text-right nowrap">554</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">12</td>
			<td data-label="Passée en 2025" class="text-right nowrap">628</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">585</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Ontario</th>
			<td data-label="Passée en 2024" class="text-right nowrap">10 796</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">32 765</td>
			<td data-label="Passée en 2025" class="text-right nowrap">21 395</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">108 593</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Québec</th>
			<td data-label="Passée en 2024" class="text-right nowrap">4 644</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">5 469</td>
			<td data-label="Passée en 2025" class="text-right nowrap">11 174</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">9 970</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Nouvelle-Écosse</th>
			<td data-label="Passée en 2024" class="text-right nowrap">228</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">10</td>
			<td data-label="Passée en 2025" class="text-right nowrap">501</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">30</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Nouveau-Brunswick</th>
			<td data-label="Passée en 2024" class="text-right nowrap">72</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">216</td>
			<td data-label="Passée en 2025" class="text-right nowrap">69</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">219</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Île-du-Prince-Édouard</th>
			<td data-label="Passée en 2024" class="text-right nowrap">2</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">0</td>
			<td data-label="Passée en 2025" class="text-right nowrap">4</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Terre-Neuve-et-Labrador</th>
			<td data-label="Passée en 2024" class="text-right nowrap">16</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">593</td>
			<td data-label="Passée en 2025" class="text-right nowrap">54</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">9</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Yukon</th>
			<td data-label="Passée en 2024" class="text-right nowrap">16</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">0</td>
			<td data-label="Passée en 2025" class="text-right nowrap">0</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Nunavut</th>
			<td data-label="Passée en 2024" class="text-right nowrap">0</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">0</td>
			<td data-label="Passée en 2025" class="text-right nowrap">1</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Province ou territoire" scope="row">Territoires du Nord-Ouest</th>
			<td data-label="Passée en 2024" class="text-right nowrap">2</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">0</td>
			<td data-label="Passée en 2025" class="text-right nowrap">2</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">0</td>
		</tr>
		<tr class="active">
			<th data-label="Province ou territoire" scope="row">Total</th>
			<td data-label="Passée en 2024" class="text-right nowrap">22 478</td>
			<td data-label="Saisie en 2024" class="text-right nowrap">46 988</td>
			<td data-label="Passée en 2025" class="text-right nowrap">42 204</td>
			<td data-label="Saisie en 2025" class="text-right nowrap">154 622</td>
		</tr>
	</tbody>
</table>
<!-- <details class="print-open">
Notes du tableau 4
<p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&#160;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p>
</details> -->

<table class="table table-bordered table-condensed" id="t5">
	<caption>Tableau 5&nbsp;: Technologie utilisée - Nombre total de billets passés et saisis</caption>
	<thead>
		<tr class="active">
			<th scope="col">Année</th>
			<th class="text-right col-md-3" scope="col">Impression offset</th>
			<th class="text-right col-md-3" scope="col">Impression au toner</th>
			<th class="text-right col-md-3" scope="col">Impression par jet d’encre</th>
			<th class="text-right col-md-2" scope="col">Autre</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th data-label="Année" scope="row">2025</th>
			<td data-label="Impression offset" class="text-right nowrap">121 438</td>
			<td data-label="Impression au toner" class="text-right nowrap">3 293</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">67 678</td>
			<td data-label="Autre" class="text-right nowrap">4 417</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2024</th>
			<td data-label="Impression offset" class="text-right nowrap">50 249</td>
			<td data-label="Impression au toner" class="text-right nowrap">4 431</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">9 591</td>
			<td data-label="Autre" class="text-right nowrap">5 195</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2023</th>
			<td data-label="Impression offset" class="text-right nowrap">32 758</td>
			<td data-label="Impression au toner" class="text-right nowrap">11 172</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">11 262</td>
			<td data-label="Autre" class="text-right nowrap">1 095</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2022</th>
			<td data-label="Impression offset" class="text-right nowrap">54 211</td>
			<td data-label="Impression au toner" class="text-right nowrap">4 380</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">8 848</td>
			<td data-label="Autre" class="text-right nowrap">1 523</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2021</th>
			<td data-label="Impression offset" class="text-right nowrap">31 942</td>
			<td data-label="Impression au toner" class="text-right nowrap">3 051</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">9 828</td>
			<td data-label="Autre" class="text-right nowrap">2 325</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2020</th>
			<td data-label="Impression offset" class="text-right nowrap">7 775</td>
			<td data-label="Impression au toner" class="text-right nowrap">1 290</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">13 635</td>
			<td data-label="Autre" class="text-right nowrap">2 620</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2019</th>
			<td data-label="Impression offset" class="text-right nowrap">11 457</td>
			<td data-label="Impression au toner" class="text-right nowrap">3 519</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">25 289</td>
			<td data-label="Autre" class="text-right nowrap">3 665</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2018</th>
			<td data-label="Impression offset" class="text-right nowrap">11 700</td>
			<td data-label="Impression au toner" class="text-right nowrap">8 719</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">20 025</td>
			<td data-label="Autre" class="text-right nowrap">4 160</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2017</th>
			<td data-label="Impression offset" class="text-right nowrap">13 693</td>
			<td data-label="Impression au toner" class="text-right nowrap">4 915</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">25 862</td>
			<td data-label="Autre" class="text-right nowrap">2 160</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2016</th>
			<td data-label="Impression offset" class="text-right nowrap">266</td>
			<td data-label="Impression au toner" class="text-right nowrap">1 876</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">17 697</td>
			<td data-label="Autre" class="text-right nowrap">1 027</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2015</th>
			<td data-label="Impression offset" class="text-right nowrap">65</td>
			<td data-label="Impression au toner" class="text-right nowrap">3 245</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">16 986</td>
			<td data-label="Autre" class="text-right nowrap">116</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2014</th>
			<td data-label="Impression offset" class="text-right nowrap">201</td>
			<td data-label="Impression au toner" class="text-right nowrap">32 008</td>
			<td data-label="Impression par jet d’encre" class="text-right nowrap">44 128</td>
			<td data-label="Other" class="text-right nowrap">41</td>
		</tr>
	</tbody>
</table>
<!-- <details class="print-open">
Notes du tableau 5
<p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&#160;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p>
</details> -->

<table class="table table-bordered table-condensed" id="t6">
	<caption>Tableau 6&nbsp;: Statistiques sur les fausses pièces de monnaie canadienne - Nombre total de pièces passées et saisies</caption>
	<thead>
		<tr class="active">
			<th rowspan="2" scope="col">Année</th>
			<th class="text-center" colspan="2" scope="colgroup">1&nbsp;$</th>
			<th class="text-center" colspan="2" scope="colgroup">2&nbsp;$</th>
		</tr>
		<tr class="active">
			<th class="text-right" scope="col">Passés</th>
			<th class="text-right" scope="col">Saisis</th>
			<th class="text-right" scope="col">Passés</th>
			<th class="text-right" scope="col">Saisis</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th data-label="Année" scope="row">2025</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">0</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">9 337</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2024</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">0</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">9 017</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">0</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2023</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">3</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">2 007</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">26 659</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2022</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">2</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">10 369</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">601</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2021</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">0</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">850</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">6 502</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2020</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">0</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">8</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">2 195</td>
		</tr>
		<tr>
			<th data-label="Année" scope="row">2019</th>
			<td data-label="Pièces de 1 $ passées" class="text-right nowrap">1</td>
			<td data-label="Pièces de 1 $ saisies" class="text-right nowrap">0</td>
			<td data-label="Pièces de 2 $ passées" class="text-right nowrap">300</td>
			<td data-label="Pièces de 2 $ saisies" class="text-right nowrap">1 000</td>
		</tr>
	</tbody>
</table>
<!-- <details class="print-open">
Notes du tableau 6
<p>Pour les données de 2025, il s'agit des statistiques provisoires en date du 10&#160;février 2026. Une fois toutes les pièces à conviction examinées, les données définitives pour 2025 seront publiées.</p>
</details> -->



<script></script>
