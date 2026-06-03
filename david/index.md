---
layout: default
title: David's testing grounds
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
	table:has(td[data-label]) {

		thead {
			display: none;
		}

		tr {
			display: block;
			margin-bottom: 1em;
			border: 1px solid #ccc;
		}

		tbody td {
			display: block;
			padding: 0.35em 0.75em;
			border: none;
			text-align: left !important;
			white-space: normal;
		}

		tbody td::before {
			content: attr(data-label);
			display: block;
			font-weight: 700;
			font-size: 0.85em;
			color: #5a5a5a;
			margin-bottom: 0.1em;
		}

		td+td {
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

		:where(.table-condensed, .table-sm) tbody {
			td {
				padding: 0.2em 0.6em;
			}

			th[colspan] {
				padding: 0.3em 0.6em;
			}

			td::before {
				font-size: 0.8em;
			}

			td+td {
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

  <p>Table 1: table table-bordered table-condensed</p>
  
  <table class="table table-bordered table-condensed" id="t1">
  <caption>Table 1: Individual firearms licences by type and province or territory, 2025</caption>
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
  <tr>
  <td data-label="Province or territory">Manitoba</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">105,185</td>
  <td data-label="Minor's Licence" class="text-right nowrap">846</td>
  <td data-label="Total" class="text-right nowrap">106,031</td>
  </tr>
  <tr>
  <td data-label="Province or territory">New Brunswick</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">77,820</td>
  <td data-label="Minor's Licence" class="text-right nowrap">290</td>
  <td data-label="Total" class="text-right nowrap">78,110</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Newfoundland and Labrador</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">75,826</td>
  <td data-label="Minor's Licence" class="text-right nowrap">614</td>
  <td data-label="Total" class="text-right nowrap">76,440</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Northwest Territories</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">6,049</td>
  <td data-label="Minor's Licence" class="text-right nowrap">21</td>
  <td data-label="Total" class="text-right nowrap">6,070</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Nova Scotia</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">80,469</td>
  <td data-label="Minor's Licence" class="text-right nowrap">726</td>
  <td data-label="Total" class="text-right nowrap">81,195</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Nunavut</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">3,412</td>
  <td data-label="Minor's Licence" class="text-right nowrap">32</td>
  <td data-label="Total" class="text-right nowrap">3,444</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Ontario</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">705,303</td>
  <td data-label="Minor's Licence" class="text-right nowrap">5,964</td>
  <td data-label="Total" class="text-right nowrap">711,267</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Prince Edward Island</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">7,532</td>
  <td data-label="Minor's Licence" class="text-right nowrap">31</td>
  <td data-label="Total" class="text-right nowrap">7,563</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Quebec</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">502,111</td>
  <td data-label="Minor's Licence" class="text-right nowrap">584</td>
  <td data-label="Total" class="text-right nowrap">502,695</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Saskatchewan</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">123,175</td>
  <td data-label="Minor's Licence" class="text-right nowrap">723</td>
  <td data-label="Total" class="text-right nowrap">123,898</td>
  </tr>
  <tr>
  <td data-label="Province or territory">Yukon</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">9,075</td>
  <td data-label="Minor's Licence" class="text-right nowrap">80</td>
  <td data-label="Total" class="text-right nowrap">9,155</td>
  </tr>
  <tr class="active">
  <td data-label="Province or territory">Total</td>
  <td data-label="Possession and Acquisition Licence" class="text-right nowrap">2,458,677</td>
  <td data-label="Minor's Licence" class="text-right nowrap">14,984</td>
  <td data-label="Total" class="text-right nowrap">2,473,661</td>
  </tr>
  </tbody>
  </table>
  
  <p>Table 2: table table-bordered</p>
  
  <table class="table table-bordered" id="t2">
  <caption>Table 2: Possession and Acquisition Licence holders and Minor's Licence holders, 2021 to 2025</caption>
  <thead>
  <tr class="active">
  <th scope="col" class="text-right nowrap">2021</th>
  <th scope="col" class="text-right nowrap">2022</th>
  <th scope="col" class="text-right nowrap">2023</th>
  <th scope="col" class="text-right nowrap">2024</th>
  <th scope="col" class="text-right nowrap">2025</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td data-label="2021" class="text-right nowrap">2,245,842</td>
  <td data-label="2022" class="text-right nowrap">2,272,760</td>
  <td data-label="2023" class="text-right nowrap">2,364,726</td>
  <td data-label="2024" class="text-right nowrap">2,425,627</td>
  <td data-label="2025" class="text-right nowrap">2,473,661</td>
  </tr>
  </tbody>
  </table>
  
  <p>Table 3: table table-bordered</p>

  <table class="table table-bordered" id="t3">
  <caption>Table 3: Individual licences issued (including new and renewals), 2025</caption>
  <thead>
  <tr class="active">
  <th scope="col">Licence type</th>
  <th scope="col" class="text-right nowrap">2025</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td data-label="Licence type">Possession and Acquisition Licence</td>
  <td data-label="2025" class="text-right nowrap">482,839</td>
  </tr>
  <tr>
  <td data-label="Licence type">Minor's Licence</td>
  <td data-label="2025" class="text-right nowrap">6,906</td>
  </tr>
  <tr>
  <td data-label="Licence type">Total</td>
  <td data-label="2025" class="text-right nowrap">489,745</td>
  </tr>
  </tbody>
  </table>
  
  <details class="print-open mrgn-bttm-lg">
  <summary>Table 3 notes</summary>
  <p>These numbers include licences outside of Canada.</p>
  </details>
  
  <p>Table 4: table table-bordered table-condensed</p>
  
  <table class="table table-bordered table-condensed" id="t4">
    <caption>Table 4: Number of individual licences issued by province or territory, 2025</caption>
    <thead>
      <tr class="active">
        <th rowspan="2" scope="col">Province or territory</th>
        <th colspan="3" scope="colgroup" class="text-center">Possession and Acquisition Licence (PAL)</th>
        <th colspan="3" scope="colgroup" class="text-center">Minor's Licence</th>
        <th colspan="3" scope="colgroup" class="text-center">Total</th>
      </tr>
      <tr class="active">
        <th scope="col" class="text-right">New</th>
        <th scope="col" class="text-right">Renewal</th>
        <th scope="col" class="text-right">Total PAL</th>
        <th scope="col" class="text-right">New</th>
        <th scope="col" class="text-right">Renewal</th>
        <th scope="col" class="text-right">Total Minor's</th>
        <th scope="col" class="text-right">New</th>
        <th scope="col" class="text-right">Renewal</th>
        <th scope="col" class="text-right">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Province or territory">Alberta</td>
        <td data-label="PAL – New" class="text-right nowrap">23,542</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">52,067</td>
        <td data-label="PAL – Total" class="text-right nowrap">75,609</td>
        <td data-label="Minor's – New" class="text-right nowrap">1,376</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">83</td>
        <td data-label="Minor's – Total" class="text-right nowrap">1,459</td>
        <td data-label="Total new" class="text-right nowrap">24,918</td>
        <td data-label="Total renewals" class="text-right nowrap">52,150</td>
        <td data-label="Total" class="text-right nowrap">77,068</td>
      </tr>
      <tr>
        <td data-label="Province or territory">British Columbia</td>
        <td data-label="PAL – New" class="text-right nowrap">23,645</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">52,157</td>
        <td data-label="PAL – Total" class="text-right nowrap">75,802</td>
        <td data-label="Minor's – New" class="text-right nowrap">723</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">48</td>
        <td data-label="Minor's – Total" class="text-right nowrap">771</td>
        <td data-label="Total new" class="text-right nowrap">24,368</td>
        <td data-label="Total renewals" class="text-right nowrap">52,205</td>
        <td data-label="Total" class="text-right nowrap">76,573</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Manitoba</td>
        <td data-label="PAL – New" class="text-right nowrap">6,439</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">14,211</td>
        <td data-label="PAL – Total" class="text-right nowrap">20,650</td>
        <td data-label="Minor's – New" class="text-right nowrap">439</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">20</td>
        <td data-label="Minor's – Total" class="text-right nowrap">459</td>
        <td data-label="Total new" class="text-right nowrap">6,878</td>
        <td data-label="Total renewals" class="text-right nowrap">14,231</td>
        <td data-label="Total" class="text-right nowrap">21,109</td>
      </tr>
      <tr>
        <td data-label="Province or territory">New Brunswick</td>
        <td data-label="PAL – New" class="text-right nowrap">4,290</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">10,753</td>
        <td data-label="PAL – Total" class="text-right nowrap">15,043</td>
        <td data-label="Minor's – New" class="text-right nowrap">122</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">4</td>
        <td data-label="Minor's – Total" class="text-right nowrap">126</td>
        <td data-label="Total new" class="text-right nowrap">4,412</td>
        <td data-label="Total renewals" class="text-right nowrap">10,757</td>
        <td data-label="Total" class="text-right nowrap">15,169</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Newfoundland and Labrador</td>
        <td data-label="PAL – New" class="text-right nowrap">3,143</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">11,093</td>
        <td data-label="PAL – Total" class="text-right nowrap">14,236</td>
        <td data-label="Minor's – New" class="text-right nowrap">309</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">23</td>
        <td data-label="Minor's – Total" class="text-right nowrap">332</td>
        <td data-label="Total new" class="text-right nowrap">3,452</td>
        <td data-label="Total renewals" class="text-right nowrap">11,116</td>
        <td data-label="Total" class="text-right nowrap">14,568</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Northwest Territories</td>
        <td data-label="PAL – New" class="text-right nowrap">515</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">804</td>
        <td data-label="PAL – Total" class="text-right nowrap">1,319</td>
        <td data-label="Minor's – New" class="text-right nowrap">4</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">1</td>
        <td data-label="Minor's – Total" class="text-right nowrap">5</td>
        <td data-label="Total new" class="text-right nowrap">519</td>
        <td data-label="Total renewals" class="text-right nowrap">805</td>
        <td data-label="Total" class="text-right nowrap">1,324</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Nova Scotia</td>
        <td data-label="PAL – New" class="text-right nowrap">4,342</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">11,232</td>
        <td data-label="PAL – Total" class="text-right nowrap">15,574</td>
        <td data-label="Minor's – New" class="text-right nowrap">303</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">22</td>
        <td data-label="Minor's – Total" class="text-right nowrap">325</td>
        <td data-label="Total new" class="text-right nowrap">4,645</td>
        <td data-label="Total renewals" class="text-right nowrap">11,254</td>
        <td data-label="Total" class="text-right nowrap">15,899</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Nunavut</td>
        <td data-label="PAL – New" class="text-right nowrap">349</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">403</td>
        <td data-label="PAL – Total" class="text-right nowrap">752</td>
        <td data-label="Minor's – New" class="text-right nowrap">15</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">0</td>
        <td data-label="Minor's – Total" class="text-right nowrap">15</td>
        <td data-label="Total new" class="text-right nowrap">364</td>
        <td data-label="Total renewals" class="text-right nowrap">403</td>
        <td data-label="Total" class="text-right nowrap">767</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Ontario</td>
        <td data-label="PAL – New" class="text-right nowrap">40,325</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">93,439</td>
        <td data-label="PAL – Total" class="text-right nowrap">133,764</td>
        <td data-label="Minor's – New" class="text-right nowrap">2,217</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">175</td>
        <td data-label="Minor's – Total" class="text-right nowrap">2,392</td>
        <td data-label="Total new" class="text-right nowrap">42,542</td>
        <td data-label="Total renewals" class="text-right nowrap">93,614</td>
        <td data-label="Total" class="text-right nowrap">136,156</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Prince Edward Island</td>
        <td data-label="PAL – New" class="text-right nowrap">564</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">1,023</td>
        <td data-label="PAL – Total" class="text-right nowrap">1,587</td>
        <td data-label="Minor's – New" class="text-right nowrap">10</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">1</td>
        <td data-label="Minor's – Total" class="text-right nowrap">11</td>
        <td data-label="Total new" class="text-right nowrap">574</td>
        <td data-label="Total renewals" class="text-right nowrap">1,024</td>
        <td data-label="Total" class="text-right nowrap">1,598</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Quebec</td>
        <td data-label="PAL – New" class="text-right nowrap">27,039</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">74,732</td>
        <td data-label="PAL – Total" class="text-right nowrap">101,771</td>
        <td data-label="Minor's – New" class="text-right nowrap">334</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">7</td>
        <td data-label="Minor's – Total" class="text-right nowrap">341</td>
        <td data-label="Total new" class="text-right nowrap">27,373</td>
        <td data-label="Total renewals" class="text-right nowrap">74,739</td>
        <td data-label="Total" class="text-right nowrap">102,112</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Saskatchewan</td>
        <td data-label="PAL – New" class="text-right nowrap">5,873</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">18,080</td>
        <td data-label="PAL – Total" class="text-right nowrap">23,953</td>
        <td data-label="Minor's – New" class="text-right nowrap">286</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">10</td>
        <td data-label="Minor's – Total" class="text-right nowrap">296</td>
        <td data-label="Total new" class="text-right nowrap">6,159</td>
        <td data-label="Total renewals" class="text-right nowrap">18,090</td>
        <td data-label="Total" class="text-right nowrap">24,249</td>
      </tr>
      <tr>
        <td data-label="Province or territory">Yukon</td>
        <td data-label="PAL – New" class="text-right nowrap">652</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">1,346</td>
        <td data-label="PAL – Total" class="text-right nowrap">1,998</td>
        <td data-label="Minor's – New" class="text-right nowrap">23</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">6</td>
        <td data-label="Minor's – Total" class="text-right nowrap">29</td>
        <td data-label="Total new" class="text-right nowrap">675</td>
        <td data-label="Total renewals" class="text-right nowrap">1,352</td>
        <td data-label="Total" class="text-right nowrap">2,027</td>
      </tr>
      <tr class="active">
        <td data-label="Province or territory">Canada</td>
        <td data-label="PAL – New" class="text-right nowrap">140,718</td>
        <td data-label="PAL – Renewal" class="text-right nowrap">341,340</td>
        <td data-label="PAL – Total" class="text-right nowrap">482,058</td>
        <td data-label="Minor's – New" class="text-right nowrap">6,161</td>
        <td data-label="Minor's – Renewal" class="text-right nowrap">400</td>
        <td data-label="Minor's – Total" class="text-right nowrap">6,561</td>
        <td data-label="Total new" class="text-right nowrap">146,879</td>
        <td data-label="Total renewals" class="text-right nowrap">341,740</td>
        <td data-label="Total" class="text-right nowrap">488,619</td>
      </tr>
    </tbody>
  </table>
  
<p>Table 5: table table-bordered table-condensed NO DATA-LABEL</p>
  
  <table class="table table-bordered table-condensed ant-man-wasp" id="t5">
  <caption>Table 5: Possession and Acquisition Licence privileges by province or territory, 2025</caption>
  <thead>
  <tr class="active">
  <th scope="col">Province or territory</th>
  <th scope="col" class="text-right">Non-restricted</th>
  <th scope="col" class="text-right">Restricted</th>
  <th scope="col" class="text-right">Prohibited</th>
  <th scope="col" class="text-right">Total Possession and Acquisition Licences</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Alberta</td>
  <td class="text-right nowrap">199,850</td>
  <td class="text-right nowrap">180,238</td>
  <td class="text-right nowrap">5,361</td>
  <td class="text-right nowrap">385,449</td>
  </tr>
  <tr>
  <td>British Columbia</td>
  <td class="text-right nowrap">191,688</td>
  <td class="text-right nowrap">179,199</td>
  <td class="text-right nowrap">6,384</td>
  <td class="text-right nowrap">377,271</td>
  </tr>
  <tr>
  <td>Manitoba</td>
  <td class="text-right nowrap">72,493</td>
  <td class="text-right nowrap">31,366</td>
  <td class="text-right nowrap">1,326</td>
  <td class="text-right nowrap">105,185</td>
  </tr>
  <tr>
  <td>New Brunswick</td>
  <td class="text-right nowrap">63,206</td>
  <td class="text-right nowrap">13,249</td>
  <td class="text-right nowrap">1,365</td>
  <td class="text-right nowrap">77,820</td>
  </tr>
  <tr>
  <td>Newfoundland and Labrador</td>
  <td class="text-right nowrap">67,948</td>
  <td class="text-right nowrap">7,462</td>
  <td class="text-right nowrap">416</td>
  <td class="text-right nowrap">75,826</td>
  </tr>
  <tr>
  <td>Northwest Territories</td>
  <td class="text-right nowrap">4,903</td>
  <td class="text-right nowrap">1,116</td>
  <td class="text-right nowrap">30</td>
  <td class="text-right nowrap">6,049</td>
  </tr>
  <tr>
  <td>Nova Scotia</td>
  <td class="text-right nowrap">58,888</td>
  <td class="text-right nowrap">19,956</td>
  <td class="text-right nowrap">1,625</td>
  <td class="text-right nowrap">80,469</td>
  </tr>
  <tr>
  <td>Nunavut</td>
  <td class="text-right nowrap">3,124</td>
  <td class="text-right nowrap">281</td>
  <td class="text-right nowrap">7</td>
  <td class="text-right nowrap">3,412</td>
  </tr>
  <tr>
  <td>Ontario</td>
  <td class="text-right nowrap">434,491</td>
  <td class="text-right nowrap">257,727</td>
  <td class="text-right nowrap">13,085</td>
  <td class="text-right nowrap">705,303</td>
  </tr>
  <tr>
  <td>Prince Edward Island</td>
  <td class="text-right nowrap">5,468</td>
  <td class="text-right nowrap">1,921</td>
  <td class="text-right nowrap">143</td>
  <td class="text-right nowrap">7,532</td>
  </tr>
  <tr>
  <td>Quebec</td>
  <td class="text-right nowrap">440,487</td>
  <td class="text-right nowrap">56,369</td>
  <td class="text-right nowrap">5,255</td>
  <td class="text-right nowrap">502,111</td>
  </tr>
  <tr>
  <td>Saskatchewan</td>
  <td class="text-right nowrap">77,404</td>
  <td class="text-right nowrap">43,740</td>
  <td class="text-right nowrap">2,031</td>
  <td class="text-right nowrap">123,175</td>
  </tr>
  <tr>
  <td>Yukon</td>
  <td class="text-right nowrap">6,804</td>
  <td class="text-right nowrap">2,144</td>
  <td class="text-right nowrap">127</td>
  <td class="text-right nowrap">9,075</td>
  </tr>
  <tr class="active">
  <td>Canada</td>
  <td class="text-right nowrap">1,626,754</td>
  <td class="text-right nowrap">794,768</td>
  <td class="text-right nowrap">37,155</td>
  <td class="text-right nowrap">2,458,677</td>
  </tr>
  </tbody>
  </table>
  <details class="print-open mrgn-bttm-lg">
  <summary>Table 5 notes</summary>
  <p>Possession and Acquisition Licence holders can obtain multiple privileges. The numbers in this table represent the maximum privileges a client holds. These numbers do not include Minor's Licences.</p>
  </details>
  
  <p>In 2025, there were 1,353 firearms licence applications refused for various public safety reasons (Tables 6 and 7). Under the <cite>Firearms Act</cite>, Chief Firearms Officers are authorized to refuse an application for a firearms licence based on their assessment of the applicant's risk to public safety.</p>
  <p>Table 6 provides a breakdown of the number of firearms licence application refusals from 2021 to 2025.</p>
  
  <table class="table table-bordered table-condensed ant-man-wasp" id="t6">
  <caption>Table 6: Firearms licence application refusals, 2021 to 2025</caption>
  <thead>
  <tr class="active">
  <th scope="col">Year</th>
  <th scope="col" class="text-right">Refusals</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>2021</td>
  <td class="text-right nowrap">1,227</td>
  </tr>
  <tr>
  <td>2022</td>
  <td class="text-right nowrap">923</td>
  </tr>
  <tr>
  <td>2023</td>
  <td class="text-right nowrap">920</td>
  </tr>
  <tr>
  <td>2024</td>
  <td class="text-right nowrap">1,469</td>
  </tr>
  <tr>
  <td>2025</td>
  <td class="text-right nowrap">1,353</td>
  </tr>
  </tbody>
  </table>
</section>

<script>
  
</script>
