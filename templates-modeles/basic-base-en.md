---
layout: template
title: Basic page
lang: en
lang_url: basic-base-fr.html
# date_modified: 2026-05-21
# author: RCMP Web Team
---
{% assign template_array = site.pages | where: "title", page.title -%}
{% for template_page in template_array -%}
  {% unless template_page.url == page.url -%}
    <a href="{{ template_page.url }}" class="btn btn-primary">View latest demo</a>
    <p class="small">last modified: {{ template_page.date_modified }}</p>
  {% endunless -%}
{% endfor -%}
<section>
  <h2>When to use</h2>
  <p></p>
</section>
