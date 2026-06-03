---
layout: default
title: Dave's testing grounds
date_modified: 2026-06-03
lang: en
lang_url: index-fr.html
---

<style>
/* Give tables in charts a white background */
figure td {
	background-color: var(--rcmp-white, #fff)
}

/* Balanced table headers */

th {
	text-wrap: balance;
}

/* Fluid tables */

@media screen and (max-width: 991px) {
	table:not(.boring):has(td[data-label]) {

		&.table-bordered {
			border: none;
		}

		thead {
			display: none;
		}

		tr {
			display: block;
			margin-bottom: 1em;
			border: 1px solid #ccc;
		}

		tbody td,
		tbody th {
			display: block;
			padding: 0.35em 0.75em;
			border: none;
			text-align: left !important;
			white-space: normal;
		}

		tbody td::before,
		tbody th::before {
			content: attr(data-label);
			display: block;
			font-weight: 700;
			font-size: 0.85em;
			color: #5a5a5a;
			margin-bottom: 0.1em;
		}

		:is(td,th) + :is(td,th) {
			border-top: 1px solid #e8e8e8;
			padding-top: 0.5em;
		}

		th[colspan] {
			display: block;
			background-color: #f5f5f5;
			padding: 0.5em 0.75em;
			font-weight: bold;
			border-bottom: 1px solid #ccc;
		}

		&.table-condensed tbody, &.table-sm tbody {
			td {
				padding: 0.2em 0.6em;
			}

			th[colspan] {
				padding: 0.3em 0.6em;
			}

			td::before {
				font-size: 0.8em;
			}

			:is(td,th) + :is(td,th) {
				padding-top: 0.3em;
			}
		}
	}
}
</style>



<div class="list-group">
  <a href="#tables" class="list-group-item">Table tests</a>
</div>

<section id="tables">
  <h2>Table tests</h2>
<p>Table 1: table with TH and DATA-LABEL</p>

<table class="table" id="t1">
	<caption>Table 1</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" data-label="Province or territory">Alberta</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">British Columbia</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">377,271</td>
			<td data-label="Minor's Licence" class="text-right nowrap">1,667</td>
			<td data-label="Total" class="text-right nowrap">378,938</td>
		</tr>
		<tr class="active">
			<th scope="row" data-label="Province or territory">Total</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 2: table with TH without DATA-LABEL</p>

<table class="table" id="t2">
	<caption>Table 2</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Manitoba</th>
			<td class="text-right nowrap">105,185</td>
			<td class="text-right nowrap">846</td>
			<td class="text-right nowrap">106,031</td>
		</tr>
		<tr>
			<th scope="row">New Brunswick</th>
			<td class="text-right nowrap">77,820</td>
			<td class="text-right nowrap">290</td>
			<td class="text-right nowrap">78,110</td>
		</tr>
		<tr class="active">
			<th scope="row">Total</th>
			<td class="text-right nowrap">2,458,677</td>
			<td class="text-right nowrap">14,984</td>
			<td class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 3: table table-bordered with DATA-LABEL</p>

<table class="table table-bordered" id="t3">
	<caption>Table 3</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="Province or territory">Alberta</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<td data-label="Province or territory">British Columbia</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">377,271</td>
			<td data-label="Minor's Licence" class="text-right nowrap">1,667</td>
			<td data-label="Total" class="text-right nowrap">378,938</td>
		</tr>
		<tr class="active">
			<td data-label="Province or territory">Total</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 4: table table-bordered without DATA-LABEL</p>

<table class="table table-bordered" id="t4">
	<caption>Table 4</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Manitoba</td>
			<td class="text-right nowrap">105,185</td>
			<td class="text-right nowrap">846</td>
			<td class="text-right nowrap">106,031</td>
		</tr>
		<tr>
			<td>New Brunswick</td>
			<td class="text-right nowrap">77,820</td>
			<td class="text-right nowrap">290</td>
			<td class="text-right nowrap">78,110</td>
		</tr>
		<tr class="active">
			<td>Total</td>
			<td class="text-right nowrap">2,458,677</td>
			<td class="text-right nowrap">14,984</td>
			<td class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 5: table table-condensed with DATA-LABEL</p>

<table class="table table-condensed" id="t5">
	<caption>Table 5</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="Province or territory">Alberta</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<td data-label="Province or territory">British Columbia</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">377,271</td>
			<td data-label="Minor's Licence" class="text-right nowrap">1,667</td>
			<td data-label="Total" class="text-right nowrap">378,938</td>
		</tr>
		<tr class="active">
			<td data-label="Province or territory">Total</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 6: table table-condensed without DATA-LABEL</p>

<table class="table table-condensed" id="t6">
	<caption>Table 6</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Manitoba</td>
			<td class="text-right nowrap">105,185</td>
			<td class="text-right nowrap">846</td>
			<td class="text-right nowrap">106,031</td>
		</tr>
		<tr>
			<td>New Brunswick</td>
			<td class="text-right nowrap">77,820</td>
			<td class="text-right nowrap">290</td>
			<td class="text-right nowrap">78,110</td>
		</tr>
		<tr class="active">
			<td>Total</td>
			<td class="text-right nowrap">2,458,677</td>
			<td class="text-right nowrap">14,984</td>
			<td class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 7: table with COLSPAN with DATA-LABEL</p>

<table class="table" id="t7">
	<caption>Table 7</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="Province or territory">Alberta</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<th scope="rowgroup" colspan="4">New section</th>
		</tr>
		<tr class="active">
			<td data-label="Province or territory">Total</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 8: table with COLSPAN without DATA-LABEL</p>

<table class="table" id="t8">
	<caption>Table 8</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Manitoba</td>
			<td class="text-right nowrap">105,185</td>
			<td class="text-right nowrap">846</td>
			<td class="text-right nowrap">106,031</td>
		</tr>
		<tr>
			<th scope="rowgroup" colspan="4">New section</th>
		</tr>
		<tr class="active">
			<td>Total</td>
			<td class="text-right nowrap">2,458,677</td>
			<td class="text-right nowrap">14,984</td>
			<td class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 9: table boring with DATA-LABEL (same as first, but boring)</p>

<table class="table boring" id="t9">
	<caption>Table 9</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="Province or territory">Alberta</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<td data-label="Province or territory">British Columbia</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">377,271</td>
			<td data-label="Minor's Licence" class="text-right nowrap">1,667</td>
			<td data-label="Total" class="text-right nowrap">378,938</td>
		</tr>
		<tr class="active">
			<td data-label="Province or territory">Total</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>


</section>

<script>
  
</script>
