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

thead th {
	text-wrap: balance;
}

/* Fluid tables */

@media screen and (max-width: 991px) {
	table:not(.table-fixed):has(td[data-label]) {

		border: none;
		border-block-start: 1px solid var(--rcmp-grey-md);

		thead {
			display: none;
		}

		tr {
			display: block;
			/* margin-bottom: 1em; */
			padding: 0;
			border-block-end: 1px solid var(--rcmp-grey-md);
		}

		/* Can we get rid of tbody? what if they use tfoot for data? */

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
			color: var(--rcmp-grey-dk);
			margin-bottom: 0.1em;
		}

		/* :is(td, th)+ :is(td, th) {
			/* border-top: 1px solid var(--rcmp-grey-lt); 
			padding-top: 0.375em;
		} */

		th[colspan] {
			/* display: block; */
			background-color: var(--rcmp-grey-lt);
			/* padding: 0.75em 0; */
			/* font-weight: bold; */
			/* border-bottom: 1px solid var(--rcmp-grey-md); */
		}

		/* &.table-bordered td {
			border-block-start: 1px solid var(--rcmp-grey-lt);
		} */

		&.table-condensed tbody,
		&.table-sm tbody {
			td {
				padding: 0.25em 0;
			}

			th[colspan] {
				padding: 0.375em 0;
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



<div class="list-group">
  <a href="#tables" class="list-group-item">Table tests</a>
</div>

<section id="tables">
  <h2>Table tests</h2>

<p>Table 1: table with TH and DATA-LABEL</p>

<table class="table" id="t1">
	<caption>Table 1: This table should collapse when small since it has DATA-LABEL attributes on the TD and TH elements</caption>
	<thead>
		<tr>
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
	</tbody>
	<tfoot>
		<tr>
			<th scope="row" data-label="Province or territory">Total</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tfoot>
	</tbody>
</table>

<p>Table 2: table with TH without DATA-LABEL</p>

<table class="table" id="t2">
	<caption>Table 2: This table should not collapse when small since it does not have DATA-LABEL attributes</caption>
	<thead>
		<tr>
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
	</tbody>
	<tfoot>
		<tr class="active">
			<th scope="row">Total</th>
			<td class="text-right nowrap">2,458,677</td>
			<td class="text-right nowrap">14,984</td>
			<td class="text-right nowrap">2,473,661</td>
		</tr>
	</tfoot>
</table>

<p>Table 3: table table-fixed with DATA-LABEL (same as first, but fixed)</p>

<table class="table table-fixed" id="t3">
	<caption>Table 3: This table should not collapse when small because it has the TABLE-FIXED class, even though it has DATA-LABEL attributes on the TD and TH elements</caption>
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
	</tbody>
	<tfoot>
		<tr class="active">
			<th scope="row" data-label="Province or territory">Total</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tfoot>
</table>


<p>Table 4: table table-bordered table-condensed</p>

<table class="table table-bordered table-condensed" id="t4">
	<caption>Table 4: This table has TABLE-BORDERED and TABLE-CONDENSED classes. They don't do anything when collapsed, but should they?</caption>
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

<p>Table 5: Table with multiple TBODYs and COLSPAN</p>

<table class="table" id="t5">
	<caption>Table 5: This is testing two things: multiple TBODY elements and a TH with COLSPAN for in-table headers</caption>
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
			<th scope="rowgroup" colspan="4">West Coast</th>
		</tr>
		<tr class="active">
			<th scope="row" data-label="Province or territory">British Columbia</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th scope="rowgroup" colspan="4">Prairies</th>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">Alberta</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">Saskatchewan</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr class="active">
			<th scope="row" data-label="Province or territory">Manitoba</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 6: table with ROWSPAN</p>

<table class="table table-bordered" id="t6">
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
			<th scope="rowgroup" rowspan="2" data-label="Province or territory">Alberta</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">4,984</td>
			<td data-label="Total" class="text-right nowrap">473,661</td>
		</tr>
		<tr class="active">
			<td data-label="Province or territory">Total</td>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>

<p>Table 7: Table with TABLE-ZEBRA</p>

<table class="table table-zebra" id="t7">
	<caption>Table 7: This is testing striping</caption>
	<thead>
		<tr class="active">
			<th scope="col">Province or territory</th>
			<th scope="col" class="text-right">Possession and Acquisition Licence</th>
			<th scope="col" class="text-right">Minor's Licence</th>
			<th scope="col" class="text-right">Total</th>
		</tr>
	</thead>
	<tbody>
		<tr class="active">
			<th scope="row" data-label="Province or territory">British Columbia</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">Alberta</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">Saskatchewan</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr class="active">
			<th scope="row" data-label="Province or territory">Manitoba</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
		<tr class="active">
			<th scope="row" data-label="Province or territory">British Columbia</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">Alberta</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr>
			<th scope="row" data-label="Province or territory">Saskatchewan</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">385,449</td>
			<td data-label="Minor's Licence" class="text-right nowrap">3,406</td>
			<td data-label="Total" class="text-right nowrap">388,855</td>
		</tr>
		<tr class="active">
			<th scope="row" data-label="Province or territory">Manitoba</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tbody>
</table>


<p>Table 8: table with PROVISIONAL and GC-TABLE</p>

<table class="table provisional gc-table" id="t8">
	<caption>Table 8: This table has beta classes. Do they clash? Get ignored? Do we need to override specific declarations?</caption>
	<thead>
		<tr>
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
	</tbody>
	<tfoot>
		<tr>
			<th scope="row" data-label="Province or territory">Total</th>
			<td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
			<td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
			<td data-label="Total" class="text-right nowrap">2,473,661</td>
		</tr>
	</tfoot>
	</tbody>
</table>
</section>


<script></script>
