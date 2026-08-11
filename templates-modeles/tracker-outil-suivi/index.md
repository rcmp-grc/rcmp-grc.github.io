---
layout: default
title: Tracker
description: A page for tracking progress on actions taken in response to report recommendations
date_modified: 2026-07-16
lang: en
lang_url: index-fr.html
issued: 2026-07-16
charts: true
custom_js: tracker-outil-suivi-en.js
data_file: tracker-outil-suivi
---
<div id="tracker-page">
	<div class="row mrgn-bttm-lg">
		<noscript>To view the graphical content, JavaScript must be enabled.</noscript>
		<div class="col-md-8 col-md-offset-2">
			<canvas id="chart-1"></canvas>
		</div>
		<div class="col-md-12">
			<details class="mrgn-bttm-md">
				<summary>Project status breakdown</summary>
				<div class="table-responsive small mrgn-tp-md" id="t1">
					<table class="table table-bordered table-condensed details-table mrgn-bttm-0">
						<caption class="text-left wb-inv">
								Project status breakdown
						</caption>
						<thead>
							<tr class="active">
								<th>Status</th>
								<th>Count</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Completed</th>
								<td>1</td>
							</tr>
							<tr>
								<th>In progress</th>
								<td>1</td>
							</tr>
							<tr>
								<th>To be actioned</th>
								<td>1</td>
							</tr>
							<tr>
								<th>Re-envisioned</th>
								<td>1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</details>
		</div>
	</div>
	
	<section class="alert alert-info">
		<h2 class="h3">Note</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus optio, deleniti fugit cupiditate, temporibus iusto possimus libero aspernatur eum praesentium nihil itaque iure ipsa hic laborum explicabo enim dolorum.</p>
	</section>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus optio, deleniti fugit cupiditate, temporibus iusto possimus libero aspernatur eum praesentium nihil itaque iure ipsa hic laborum explicabo enim dolorum.</p>
	<div class="accordion mrgn-bttm-lg">
		<details class="acc-group">
			<summary class="wb-toggle tgl-tab" data-toggle='{"parent": ".accordion", "group": ".acc-group"}'>About this information</summary>
			<div class="tgl-panel">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus optio, deleniti fugit cupiditate, temporibus iusto possimus libero aspernatur eum praesentium nihil itaque iure ipsa hic laborum explicabo enim dolorum.</p>
			</div>
		</details>
		<details class="acc-group">
			<summary class="wb-toggle tgl-tab" data-toggle='{"parent": ".accordion", "group": ".acc-group"}'>How to know when the page has been updated?</summary>
			<div class="tgl-panel">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus optio, deleniti fugit cupiditate, temporibus iusto possimus libero aspernatur eum praesentium nihil itaque iure ipsa hic laborum explicabo enim dolorum.</p>
			</div>
		</details>
	</div>
{%- include datatable.html id="datatable-test" -%}