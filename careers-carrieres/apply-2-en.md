---
layout: careers
title: Apply now
date_modified: 2026-08-18
lang: en
lang_url: apply-fr.html
breadcrumbs:
  - label: "RCMP careers"
    url: "careers-carrieres/careers-carrieres-en.html"
custom_css: /assets/css/careers.css
---

<p class="lead">Ready to join the RCMP?<br>
Choose your path.</p>

<div class="rc-question-card">
  <div class="rc-question-card__body">
    <fieldset class="rc-fieldset">
      <legend class="rc-legend">Choose your path</legend>
      <ul class="rc-options">
        <li class="rc-option">
          <input type="radio" id="path-police" name="career-path" value="police">
          <label for="path-police">Police officer careers</label>
        </li>
        <li class="rc-option">
          <input type="radio" id="path-civilian" name="career-path" value="civilian">
          <label for="path-civilian">Civilian careers</label>
        </li>
      </ul>
    </fieldset>

    <div class="rc-info-panel" id="panel-police">
      <h2 class="rc-info-panel__heading">Police officer careers</h2>
      <p>A career with the RCMP is one with big impact and endless opportunities to grow. Before you apply, make sure you understand what it takes to be an RCMP police officer:</p>
      <ul>
        <li>Check the <a href="">basic requirements</a> to confirm you’re eligible to apply</li>
        <li>Understand the <a href="">application process</a>, from application to cadet training</li>
        <li>Build your fitness and prepare to meet the <a href="">physical standards</a></li>
        <li>Take the <a href="">Readiness Check</a> to see if you’re well-suited for a career in policing</li>
        <li>Reflect on the <a href="/en/corporate-information/royal-canadian-mounted-police-core-values">RCMP Core Values</a> to make sure your personal values align</li>
      </ul>
      <p class="mrgn-tp-md">
        <a class="rc-btn rc-btn--primary" href="https://emploisfp-psjobs.cfp-psc.gc.ca/psrs-srfp/applicant/page1800?poster=2440171">
          Start your police officer application
        </a>
      </p>
    </div>

    <div class="rc-info-panel" id="panel-civilian">
      <h2 class="rc-info-panel__heading">Civilian careers</h2>
      <p>Civilian employees support the RCMP's mission in roles ranging from forensics to information technology, corporate administration, communications and more. </p>
      <ul>
        <li>Create or sign in to your GC Jobs applicant profile to search for civilian jobs</li>
        <li>Explore the <a href="">civilian career opportunities</a> and find the right fit for you</li>
        <li>Learn about the competitive salary, pension plan and <a href="">employee benefits</a></li>
        <li>Reflect on the <a href="/en/corporate-information/royal-canadian-mounted-police-core-values">RCMP Core Values</a> to make sure your personal values align</li>
      </ul>
      <p class="mrgn-tp-md">
        <a class="rc-btn rc-btn--primary" href="https://emploisfp-psjobs.cfp-psc.gc.ca/psrs-srfp/applicant/page2440?tab=2&title=&locationsFilter=&departments=&classificationInfos=&officialLanguage=&referenceNumber=&selectionProcessNumber=&search=Search%20jobs&department=108">
          Search civilian jobs on GC Jobs
        </a>
      </p>
    </div>
  </div>
</div>

<section id="s1">
  <h2>Related links</h2>
  <ul>
    <li>Career paths: browse the specialized roles across the RCMP</li>
    <li>RCMP Cadet Hub: what to expect at Depot, the RCMP training academy</li>
    <li>Experienced Police Officers: review the unique application process for police officers considering a career with the RCMP</li>
  </ul>
</section>

<script>
(function () {
  var police = document.getElementById("panel-police");
  var civilian = document.getElementById("panel-civilian");
  document.querySelectorAll('input[name="career-path"]').forEach(function (input) {
    input.addEventListener("change", function () {
      police.classList.toggle("show", this.value === "police");
      civilian.classList.toggle("show", this.value === "civilian");
    });
  });
})();
</script>