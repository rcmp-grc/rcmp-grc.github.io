---
layout: careers
title: "Navigation test"
date_modified: 2026-07-10
lang: en
lang_url: nav.html
breadcrumbs:
  - label: "RCMP careers"
    url: "careers-carrieres/careers-carrieres-en.html"
  - label: "Police officer careers"
    url: "careers-carrieres/officer-agent-en.html"
custom_css: /assets/css/careers.css
---

<nav aria-label="On this page">
<h2>On this page</h2>
<ul>
  <li><a href="#1">This navigation landmark uses aria-label</a></li>
  <li><a href="#2">NVDA reads it twice</a></li>
</ul>
</nav>

<hr>

<nav aria-labelledby="pagenav">
<h2 id="pagenav">On this page</h2>
<ul>
  <li><a href="#1">This navigation landmark uses aria-labelledby</a></li>
  <li><a href="#2">NVDA reads it once</a></li>
</ul>
</nav>

<hr>

<nav>
<h2>On this page</h2>
<ul>
  <li><a href="#1">This navigation landmark isn't named</a></li>
  <li><a href="#2">NVDA reads it once</a></li>
  <li><a href="#3">This isn't recommended as there are multiple navigation landmarks</a></li>
</ul>
</nav>

