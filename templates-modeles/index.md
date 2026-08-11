---
layout: default
title: RCMP templates
description: This repository contains bilingual web templates and reusable layouts developed for RCMP.ca projects and internal testing activities.
date_modified: 2026-07-24
lang: en
lang_url: index-fr.html
issued: 2026-07-24
custom_css: ./assets/css/template-page.css
---
<div class="row wb-eqht">
	{%- for template in site.templates_modeles -%}
	<div class="col-xs-12 col-md-4">
		<div class="template-card hght-inhrt">
			<div class="template-img">
				<img src="./assets/{{ template.icon }}" >
			</div>
			<div class="template-info">
				<h3 class="template-title">{{ template.title_en }}</h3>
				<p>{{ template.description_en }}</p>
				<a href="{{ site.url }}{{ template.demo_en }}" class="btn btn-rcmp">View demo</a>
				<a href="{{ site.url }}{{ template.doc_en }}" class="btn btn-default">Read documentation</a>
				{%- assign last_modified = site.pages | where: "url", template.demo_en | map: "date_modified" -%}
				{%- if last_modified -%}
				<p class="small mrgn-tp-md">Last modified: {{ last_modified }}</p>
				{%- endif -%}
				<p class="small">Features:&#32;
				{%- assign features_list = template.features_en | split: ", " -%}
				{%- for feature in features_list -%}
				<span class="label label-default mrgn-rght-sm">{{ feature }}</span>
				{%- unless forloop.last -%}
				<span class="wb-inv">, </span>
				{%- endunless -%}
				{%- endfor -%}
				</p>
			</div>
		</div>
	</div>
	{%- endfor -%}
</div>