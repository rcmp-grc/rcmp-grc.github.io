---
layout: missing
title: My Page Title
description: A short summary of this page.
lang: en
# lang_url: /fr/verification-casier-judiciaire.html
# date_modified: 2026-05-04
# author: RCMP Web Team
# custom_css: /assets/css/special-page.css
---

<footer id="wb-info">
  <h2 class="wb-inv">{{ about_site }}</h2>
  {% if page.layout == 'careers' %}
  <div class="gc-contextual">
    <div class="container">
      <nav aria-label="{% if page.lang == 'fr' %}Liens sur les carrières{% else %}Careers links{% endif %}">
        {% if page.lang == 'fr' %}
        <h3 class="wb-gld">Carrières</h3>
        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
          <li><a href="/careers-carrieres/security-screening-portal-fr.html">Portail de filtrage de sécurité</a></li>
          <li><a href="/careers-carrieres/recruiting-recrutement-fr.html">Activités de recrutement</a></li>
          <li><a href="/careers-carrieres/readiness-preparation-fr.html">Test de préparation</a></li>
          <li><a href="/careers-carrieres/fed-pol-landing-fr.html">Carrières en police fédérale</a></li>
        </ul>
        {% else %}
        <h3 class="wb-gld">Careers</h3>
        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
          <li><a href="/careers-carrieres/security-screening-portal-en.html">Security screening portal</a></li>
          <li><a href="/careers-carrieres/recruiting-recrutement-en.html">Recruiting events</a></li>
          <li><a href="/careers-carrieres/readiness-preparation-en.html">Readiness Check</a></li>
          <li><a href="/careers-carrieres/fed-pol-landing-en.html">Federal Policing careers</a></li>
        </ul>
        {% endif %}
      </nav>
    </div>
  </div>
  {% endif %}


  {% if page.layout == 'missing' %}
  <div class="gc-contextual">
    <div class="container">
      <nav aria-label="{% if page.lang == 'fr' %}Liens sur les personnes disparues{% else %}Missing persons links{% endif %}">
        {% if page.lang == 'fr' %}
        <h3 class="wb-gld">Personnes disparues</h3>
        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
          <li><a href="https://canadasmissing.ca/about-ausujet/index-fra.htm">À propos</a></li>
          <li><a href="https://canadasmissing.ca/news-nouvelles/index-fra.htm">Nouvelles</a></li>
          <li><a href="https://grc.ca/fr/renseignements-organisationnels/medias-sociaux">Restez branchés</a></li>
          <li><a href="https://canadasmissing.ca/about-ausujet/index-fra.htm#is">Initiatives</a></li>
        </ul>
        {% else %}
        <h3 class="wb-gld">Missing persons</h3>
        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
          <li><a href="https://canadasmissing.ca/about-ausujet/index-eng.htm">About</a></li>
          <li><a href="https://canadasmissing.ca/news-nouvelles/index-eng.htm">News</a></li>
          <li><a href="https://rcmp.ca/en/corporate-information/social-media">Stay connected</a></li>
          <li><a href="https://canadasmissing.ca/about-ausujet/index-eng.htm#is">Initiatives</a></li>
        </ul>
        {% endif %}
      </nav>
    </div>
  </div>
  {% endif %}


  <div class="gc-main-footer">
    <div class="container">
      <nav aria-label="{% if page.lang == 'fr' %}Liens du pied de page de la GRC{% else %}RCMP footer links{% endif %}">
        <h3 class="wb-gld">{{ org_name }}</h3>
        <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3">
          <li><a href="{{ base_url }}{{ contacts_url }}">{{ contacts_label }}</a></li>
          <li><a href="{{ base_url }}{{ news_url }}">{{ news_label }}</a></li>
          <li><a href="{{ base_url }}{{ about_url }}">{{ about_label }}</a></li>
        </ul>
        <h4><span class="wb-inv">{{ themes_label }}</span></h4>
		<ul class="list-unstyled colcount-sm-2 colcount-md-3">
		  {% for item in theme_links %}
			{% assign parts = item | split: '|' %}
			{% if parts[0] contains 'https' %}
			  <li><a href="{{ parts[0] }}">{{ parts[1] }}</a></li>
			{% else %}
			  <li><a href="{{ base_url }}/{{ parts[0] }}">{{ parts[1] }}</a></li>
			{% endif %}
		  {% endfor %}
		</ul>
      </nav>
    </div>
  </div>
  <div class="gc-sub-footer">
    <div class="container d-flex align-items-center">
      <nav aria-label="{% if page.lang == 'fr' %}Liens organisationnels de la GRC{% else %}RCMP organization links{% endif %}">
        <h3 class="wb-inv">{{ org_label }}</h3>
        <ul>
          <li><a href="{{ base_url }}{{ social_url }}">{{ social_label }}</a></li>
          <li><a href="{{ base_url }}{{ terms_url }}">{{ terms_label }}</a></li>
        </ul>
      </nav>
      <div class="wtrmrk align-self-end">
        <img alt="{{ img_alt }}" src="/assets/wmms-blk.svg" />
      </div>
    </div>
  </div>
</footer>