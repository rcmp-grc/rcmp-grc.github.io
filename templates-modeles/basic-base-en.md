---
layout: template
title: Basic page
lang: en
lang_url: basic-base-fr.html
date_modified: 2026-06-24
---
{% assign template_array = site.pages | where: "title", page.title -%}
<section>
  <h2 class="wb-inv">Current version</h2>
{% for template_page in template_array -%}
  {% unless template_page.url == page.url %}
    <a href="{{ template_page.url }}" class="btn btn-primary">View latest demo</a>
    <p class="small">last modified: {{ template_page.date_modified }}</p>
  {% endunless %}
{% endfor -%}
{%- assign all_templates = site.pages | where: "template", "true" | sort -%}
  <ul>
{%- for tp in all_templates -%}
  <li>{{ tp.title }}</li>
{%- endfor =%}
  </ul>
</section>
<section>
  <h2>When to use</h2>
  <p></p>
</section>
