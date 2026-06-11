---
layout: careers
title: RCMP careers
date_modified: 2026-06-10
lang: en
lang_url: careers-carrieres-fr.html
h1_hidden: true
is_homepage: true
custom_css: /assets/css/careers.css
---

<div id="careers-fullpage">
<section id="police-officer" class="fp-section" style="background-image: url('/assets/img/hero-police-officer.jpg');">
    <div class="fp-overlay"></div>
    <nav id="wb-bc" class="fp-breadcrumb" aria-label="Breadcrumb" property="breadcrumb">
      <div class="bc-showcase-inner">
        <div class="bc-row">
          <div class="bc-nav-wrap bc-wrap-outer">
            <div class="bc-band">
<ol class="bc" typeof="BreadcrumbList">
  <li property="itemListElement" typeof="ListItem">
    <a href="/" property="item" typeof="WebPage"><span property="name">RCMP.ca</span></a>
    <meta content="1" property="position" />
  </li>
</ol>
            </div>
          </div>
        </div>
      </div>
    </nav>
<div class="fp-content">
      <p class="uppercase">Welcome to RCMP careers</p>
      <h2 class="oswald-500 uppercase">Police officer careers</h2>
      <p class="header-description">There's a uniform with your name on it. Serve boldly.</p>
      <a href="#" class="btn btn-careers">
        More information<span class="wb-inv"> about police officer careers</span>
      </a>
    </div>
    <button class="fp-arrow fp-arrow--down" aria-label="Scroll to next section"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i> Civilian careers</button>
  </section>
  <section id="civilian-employees" class="fp-section" style="background-image: url('/assets/img/hero-civilian.jpg');">
    <div class="fp-overlay"></div>
    <div class="fp-content">
      <h2 class="oswald-500 uppercase">Civilian careers</h2>
      <p class="header-description">Your skills. Our mission. Roles with impact.</p>
      <a href="#" class="btn btn-careers">
        More information<span class="wb-inv"> about civilian careers</span>
      </a>
    </div>
    <button class="fp-arrow fp-arrow--up" aria-label="Scroll to previous section"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i> Police officer</button>
    <button class="fp-arrow fp-arrow--down" aria-label="Scroll to next section"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i> More opportunities</button>
  </section>
<section id="more-opportunities" class="fp-section fp-section--scroll">
  <button class="fp-arrow fp-arrow--up fp-arrow--more-opp-up" aria-label="Scroll to civilian employees"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i> Civilian careers</button>
  <div class="container">
    <h2 id="more-opp-heading" class="careers-h1 mrgn-tp-md">More opportunities</h2>
    <section aria-labelledby="more-opp-heading" class="gc-features">
      <ul class="list-unstyled row">
        <li class="col-lg-4 col-md-6 col-xs-12">
          <div class="well">
            <img alt="" class="img-responsive full-width" src="/assets/img/mo-community-constables.jpg">
            <h3 class="h5"><a href="#">Community constables</a></h3>
            <p>Build trust and help to reduce crime in your own community.</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-6 col-xs-12">
          <div class="well">
            <img alt="" class="img-responsive full-width" src="/assets/img/mo-rcmp-reserve.jpg">
            <h3 class="h5"><a href="#">RCMP Reserve program</a></h3>
            <p>Continue to serve the community after retirement or leaving the service.</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-6 col-xs-12">
          <div class="well">
            <img alt="" class="img-responsive full-width" src="/assets/img/mo-volunteer.jpg">
            <h3 class="h5"><a href="#">Volunteer programs</a></h3>
            <p>Support local detachments as a community partner and help to tell the RCMP story across Canada.</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-6 col-xs-12">
          <div class="well">
            <img alt="" class="img-responsive full-width" src="/assets/img/streams-flux-3.jpg">
            <h3 class="h5"><a href="#">Diverse and Inclusive Pre-Cadet Experience</a></h3>
            <p>Get a firsthand look into policing before you apply. Designed to support racialized and underrepresented communities.</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-6 col-xs-12">
          <div class="well">
            <img alt="" class="img-responsive full-width" src="/assets/img/mo-indigenous-recruitment.jpg">
            <h3 class="h5"><a href="#">Indigenous recruitment</a></h3>
            <p>Discover programs that support Indigenous applicants considering a career in policing.</p>
          </div>
        </li>
        <li class="col-lg-4 col-md-6 col-xs-12">
          <div class="well">
            <img alt="" class="img-responsive full-width" src="/assets/img/mo-student-jobs.jpg">
            <h3 class="h5"><a href="#">Student jobs</a></h3>
            <p>Start your career with purpose and drive national impact while you study.</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</section>
</div>
<script>
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo({ top: 0, behavior: 'instant' });
  var sections = Array.from(document.querySelectorAll('#careers-fullpage .fp-section'));
  if (!sections.length) return;
  var current = 0;
  var scrolling = false;
  var DURATION = 800;
  function goTo(index) {
    if (index < 0 || index >= sections.length || scrolling) return;
    scrolling = true;
    current = index;
    sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(function () { scrolling = false; }, DURATION);
  }
var wheelTimer = null;
  var halfHeight = window.innerHeight * 0.5;
  window.addEventListener('wheel', function (e) {
    if (current >= sections.length - 1 && e.deltaY > 0) return;
    if (current === 0 && e.deltaY < 0) return;
    var inFp = sections.some(function (s) {
      var r = s.getBoundingClientRect();
      return r.top <= 1 && r.bottom >= halfHeight;
    });
    if (!inFp) return;
    e.preventDefault();
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(function () {
      goTo(current + (e.deltaY > 0 ? 1 : -1));
    }, 120);
  }, { passive: false });
  var touchStartY = 0;
  window.addEventListener('touchstart', function (e) { touchStartY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchend', function (e) {
    var dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) < 50) return;
    if (current >= sections.length - 1 && dy > 0) return;
    goTo(current + (dy > 0 ? 1 : -1));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' && current < sections.length - 1) { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowUp' && current > 0) { e.preventDefault(); goTo(current - 1); }
  });
  document.getElementById('careers-fullpage').addEventListener('click', function (e) {
    var btn = e.target.closest('.fp-arrow');
    if (!btn) return;
    if (btn.classList.contains('fp-arrow--down')) goTo(current + 1);
    if (btn.classList.contains('fp-arrow--up')) goTo(current - 1);
  });
});
</script>
