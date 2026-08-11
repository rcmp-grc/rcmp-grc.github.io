---
layout: default
title: Outil de suivi
description: Une page pour suivre les progrès réalisés dans le cadre des mesures prises en réponse aux recommandations d'un rapport
date_modified: 2026-07-21
lang: fr
lang_url: index.html
issued: 2026-07-21
charts: true
custom_js: tracker-outil-suivi-fr.js
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
				<summary>Répartition de l'état d'avancement du projet</summary>
				<div class="table-responsive small mrgn-tp-md" id="t1">
					<table class="table table-bordered table-condensed details-table mrgn-bttm-0">
						<caption class="text-left wb-inv">
								Répartition de l'état d'avancement du projet
						</caption>
						<thead>
							<tr class="active">
								<th>Status</th>
								<th>Count</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Terminé</th>
								<td>1</td>
							</tr>
							<tr>
								<th>En cours</th>
								<td>1</td>
							</tr>
							<tr>
								<th>À mettre en œuvre</th>
								<td>1</td>
							</tr>
							<tr>
								<th>Reconsidérée</th>
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