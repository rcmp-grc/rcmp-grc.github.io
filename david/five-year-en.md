---
layout: default
title: DRAFT – RCMP five-year evaluation coverage plan (2026–31)
date_modified: 2026-08-12
lang: en
lang_url: five-year-fr.html
---

<style>
	/* Give tables in charts a white background and a white outline. Can we do a generic container query for non-white background? */
figure table {
	background-color: var(--rcmp-white, #fff);
	tr {
		border: 1px solid var(--rcmp-grey-md);
	}
}
/* Balanced table headers */
thead th {
	text-wrap: balance;
}
/* Fluid tables */
table:has(td[data-label]):not(.table-fixed) {
	@media screen and (max-width: 991px) {
		border: none;
		border-block-start: 1px solid var(--rcmp-grey-md);
		thead {
			display: none;
		}
		tr {
			display: block;
			margin: 0;
			padding: 0;
			border: none;
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
			float: none;
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

<p>The following table illustrates planned Evaluation coverage of the RCMP Program Inventory associated with the Departmental Results Framework.</p>
<p>The information in this table is updated annually as part of the RCMP's Departmental Evaluation planning cycle and is subject to change.</p>

<div class="table-responsive small" id="t1">
	<table class="table table-bordered table-condensed">
		<caption class="text-left">Five-year evaluation coverage plan</caption>
		<thead>
			<tr class="active">
				<th scope="col">Program</th>
				<th scope="col" class="text-right">Total planned program spending (2026–27)</th>
				<th scope="col">Planned evaluations (2026–31)</th>
				<th scope="col">Planned fiscal year of approval</th>
				<th scope="col">Reason for evaluating / not evaluating</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th data-label="Core responsibility" scope="rowgroup" colspan="5" class="active">Federal Policing</th>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="5">Federal Policing Investigations</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="5" class="text-right">$953,133,731</td>
				<td data-label="Planned evaluations (2026–31)">Horizontal Evaluation of the Legalization and Strict Regulation of Cannabis (Health Canada lead)</td>
				<td data-label="Planned fiscal year of approval">2027–28</td>
				<td data-label="Reason for evaluating / not evaluating">Treasury Board Submission commitment</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Horizontal Evaluation of the Canadian Drugs and Substances Strategy (Health Canada lead)</td>
				<td data-label="Planned fiscal year of approval">2027–28</td>
				<td data-label="Reason for evaluating / not evaluating">Treasury Board Submission commitment</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of Border Integrity</td>
				<td data-label="Planned fiscal year of approval">2029–30</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of Serious and Organized Crime</td>
				<td data-label="Planned fiscal year of approval">2030–31</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of National Security</td>
				<td data-label="Planned fiscal year of approval">2031–32</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Federal Policing Intelligence</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$118,504,012</td>
				<td data-label="Planned evaluations (2026–31)">Review of the RCMP Operational Coordination Centre</td>
				<td data-label="Planned fiscal year of approval">2031-32</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Federal Policing National Governance</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$125,469,268</td>
				<td data-label="Planned evaluations (2026–31)">Review of Federal Policing Regionalization</td>
				<td data-label="Planned fiscal year of approval">2026-27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="3">International Operations</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="3" class="text-right">$52,428,902</td>
				<td data-label="Planned evaluations (2026–31)">Horizontal Evaluation of Canada’s Indo-Pacific Strategy (Global Affairs Canada lead)</td>
				<td data-label="Planned fiscal year of approval">2027-28</td>
				<td data-label="Reason for evaluating / not evaluating">Treasury Board Submission commitment</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Review of INTERPOL</td>
				<td data-label="Planned fiscal year of approval">2028-29</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Review of International Operations and Policing Development</td>
				<td data-label="Planned fiscal year of approval">2028-29</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="3">Protective Operations</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="3" class="text-right">$215,410,239</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of Protective Operations</td>
				<td data-label="Planned fiscal year of approval">2027-28</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the Canadian Air Carrier Protective Program</td>
				<td data-label="Planned fiscal year of approval">2028-29</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Review of Major Events</td>
				<td data-label="Planned fiscal year of approval">2029-30</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental Priority</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<th data-label="Core responsibility" scope="rowgroup" colspan="5" class="active">National Specialized Services</th>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Canadian Firearms Investigative and Enforcement Services</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$21,751,150</td>
				<td data-label="Planned evaluations (2026–31)">Horizontal Evaluation of the Funding to Enhance Canada’s Firearms Control Framework (Public Safety Canada lead)</td>
				<td data-label="Planned fiscal year of approval">2026-27</td>
				<td data-label="Reason for evaluating / not evaluating">Treasury Board Submission commitment</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Criminal Intelligence Service Canada</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$9,319,016</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the Criminal Intelligence Service Canada</td>
				<td data-label="Planned fiscal year of approval">2027-28</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Forensic Science and Identification Services</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$89,013,072</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the RCMP’s Biology Casework Analysis Services</td>
				<td data-label="Planned fiscal year of approval">2031-32</td>
				<td data-label="Reason for evaluating / not evaluating">Program renewal support</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Canadian Police College</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$9,219,639</td>
				<td data-label="Planned evaluations (2026–31)">Nil</td>
				<td data-label="Planned fiscal year of approval">Not applicable</td>
				<td data-label="Reason for evaluating / not evaluating">Recently evaluated and audited</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Sensitive and Specialized Investigative Services</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$23,920,074</td>
				<td data-label="Planned evaluations (2026–31)">Horizontal Evaluation of the Strategy to Prevent and Address Gender-based Violence (Women and Gender Equality Canada lead)</td>
				<td data-label="Planned fiscal year of approval">2026-27</td>
				<td data-label="Reason for evaluating / not evaluating">Treasury Board Submission commitment</td>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="3">Specialized Technical Investigative Services</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="3" class="text-right">$304,896,780</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the National Child Exploitation Crime Centre</td>
				<td data-label="Planned fiscal year of approval">2026-27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Horizontal Evaluation of the <cite>Sex Offender Registration Information Act</cite> and the National Sex Offender Registry (Public Safety Canada lead)</td>
				<td data-label="Planned fiscal year of approval">2027-28</td>
				<td data-label="Reason for evaluating / not evaluating">Central agency request</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the Special “I” Program</td>
				<td data-label="Planned fiscal year of approval">2027-28</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Canadian Firearms Licensing and Registration</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$142,274,308</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the Transfer Payment Program for the Canadian Firearms Program</td>
				<td data-label="Planned fiscal year of approval">2030-31</td>
				<td data-label="Reason for evaluating / not evaluating"><cite>Financial Administration Act</cite> requirement</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">National Cybercrime Coordination Centre</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$16,898,978</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of the National Cybercrime Coordination Centre and FP Cybercrime</td>
				<td data-label="Planned fiscal year of approval">2027-28</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<th data-label="Core responsibility" scope="rowgroup" colspan="5" class="active">Indigenous, Provincial, Territorial and Municipal Policing</th>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="2">Operational Policing Support</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="2" class="text-right">$84,656,947</td>
				<td data-label="Planned evaluations (2026–31)">Review of the National Search and Rescue Program</td>
				<td data-label="Planned fiscal year of approval">2027–28</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of Body Worn Cameras</td>
				<td data-label="Planned fiscal year of approval">2 2028–29</td>
				<td data-label="Reason for evaluating / not evaluating">Treasury Board Submission commitment</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Excellence in Operations</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$15,521,803</td>
				<td data-label="Planned evaluations (2026–31)">Nil</td>
				<td data-label="Planned fiscal year of approval">Not applicable</td>
				<td data-label="Reason for evaluating / not evaluating">New DRF program – low materiality</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Community Safety Policing Support</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$5,030,334</td>
				<td data-label="Planned evaluations (2026–31)">Nil</td>
				<td data-label="Planned fiscal year of approval">Not applicable</td>
				<td data-label="Reason for evaluating / not evaluating">New DRF program – low materiality</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Force Generation</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$214,123,236</td>
				<td data-label="Planned evaluations (2026–31)">Review of the Cadet Training Program Evaluation of RCMP Reconciliation Actions</td>
				<td data-label="Planned fiscal year of approval">2026–27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="2">Indigenous Policing</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="2" class="text-right">$40,166,184</td>
				<td data-label="Planned evaluations (2026–31)">Interim Review of RCMP Reconciliation Actions</td>
				<td data-label="Planned fiscal year of approval">2026–27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of RCMP Reconciliation Actions</td>
				<td data-label="Planned fiscal year of approval">2 2028–29</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<th data-label="Program" scope="row">Provincial / Territorial / Municipal Policing</th>
				<td data-label="Total planned program spending (2026–27)" class="text-right">$2,771,329,685</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of Strategies to Staff Northern and Isolated Posts</td>
				<td data-label="Planned fiscal year of approval">2026–27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<th data-label="Core responsibility" scope="rowgroup" colspan="5" class="active">Internal Services</th>
			</tr>
			<tr>
				<th data-label="Program" scope="rowgroup" rowspan="2">Internal Services</th>
				<td data-label="Total planned program spending (2026–27)" rowspan="2" class="text-right">$1,076,651,797</td>
				<td data-label="Planned evaluations (2026–31)">Evaluation of RCMP Communications</td>
				<td data-label="Planned fiscal year of approval">2026–27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
			<tr>
				<td data-label="Planned evaluations (2026–31)">Evaluation of Well-being Support Programs</td>
				<td data-label="Planned fiscal year of approval">2026–27</td>
				<td data-label="Reason for evaluating / not evaluating">Departmental priority</td>
			</tr>
		</tbody>
	</table>
</div>
<script></script>
