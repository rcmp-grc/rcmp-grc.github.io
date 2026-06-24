---
layout: template
title: Basic page
lang: en
lang_url: basic-base-fr.html
# date_modified: 2026-05-21
# author: RCMP Web Team
---
<ul>
{% assign template_array = site.pages | where: "title", "Basic page" %}
{% for template_page in template_array %}
<li>{{ template_page.title }}, {{template_page.layout}}, {{template_page.url}}</li>
{% endfor %}
</ul>
<section>
  <h2>When to use</h2>
  <p></p>
</section>
