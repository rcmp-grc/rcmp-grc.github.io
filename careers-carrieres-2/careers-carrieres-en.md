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
    <div class="fp-content container">
      <p class="uppercase">Welcome to <abbr>RCMP</abbr> careers</p>
      <h2 class="oswald-500 uppercase">Police officer careers</h2>
      <p class="header-description">There's a uniform with your name on it. Serve boldly.</p>
      <a href="#" class="btn btn-careers">
        More information<span class="wb-inv"> about police officer careers</span>
      </a>
    </div>
    <button class="fp-arrow fp-arrow--down" aria-label="Scroll to next section"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
  </section>
  <section id="civilian-employees" class="fp-section" style="background-image: url('/assets/img/hero-civilian.jpg');">
    <div class="fp-overlay"></div>
    <div class="fp-content container">
      <h2 class="oswald-500 uppercase">Civilian careers</h2>
      <p class="header-description">Your skills. Our mission. Roles with impact.</p>
      <a href="#" class="btn btn-careers">
        More information<span class="wb-inv"> about civilian careers</span>
      </a>
    </div>
    <button class="fp-arrow fp-arrow--up" aria-label="Scroll to previous section"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i></button>
    <button class="fp-arrow fp-arrow--down" aria-label="Scroll to next section"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
  </section>
  <section id="more-opportunities" class="fp-section fp-section--scroll">
    <div class="container">
      <h2 class="oswald-500 uppercase">More opportunities</h2>
      <div class="c-grid-container">
        <div class="c-grid">
          <div class="c-card">
            <img src="img/mo-community-constables.jpg" alt="" />
            <div class="c-card-container">
              <h3 class="h5">Community constables</h3>
              <p>Build trust and help to reduce crime in your own community.</p>
              <button class="btn btn-careers-outline mrgn-tp-md">
                More information<span class="wb-inv"> about community constables</span>
              </button>
            </div>
          </div>
          <div class="c-card">
            <img src="img/mo-rcmp-reserve.jpg" alt="" />
            <div class="c-card-container">
              <h3 class="h5"><abbr>RCMP</abbr> Reserve program</h3>
              <p>Continue to serve the community after retirement or leaving the service.</p>
              <button class="btn btn-careers-outline mrgn-tp-md">
                More information<span class="wb-inv"> about the <abbr>RCMP</abbr> reserve program</span>
              </button>
            </div>
          </div>
          <div class="c-card">
            <img src="img/mo-volunteer.jpg" alt="" />
            <div class="c-card-container">
              <h3 class="h5">Volunteer programs</h3>
              <p>Support local detachments as a community partner and help to tell the <abbr>RCMP</abbr> story across Canada.</p>
              <button class="btn btn-careers-outline mrgn-tp-md">
                More information<span class="wb-inv"> about volunteer programs</span>
              </button>
            </div>
          </div>
          <div class="c-card">
            <img src="img/mo-dice.jpg" alt="" />
            <div class="c-card-container">
              <h3 class="h5">Diverse and Inclusive Pre-Cadet Experience</h3>
              <p>Get a firsthand look into policing before you apply. Designed to support racialized and unrepresented communities.</p>
              <button class="btn btn-careers-outline mrgn-tp-md">More information</button>
            </div>
          </div>
          <div class="c-card">
            <img src="img/mo-indigenous-recruitment.jpg" alt="" />
            <div class="c-card-container">
              <h3 class="h5">Indigenous recruitment</h3>
              <p>Discover programs that support Indigenous applicants considering a career in policing.</p>
              <button class="btn btn-careers-outline mrgn-tp-md">More information</button>
            </div>
          </div>
          <div class="c-card">
            <img src="img/mo-student-jobs.jpg" alt="" />
            <div class="c-card-container">
              <h3 class="h5">Student jobs</h3>
              <p>Start your career with purpose and drive national impact while you study.</p>
              <button class="btn btn-careers-outline mrgn-tp-md">More information</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<script>
document.addEventListener('DOMContentLoaded', function () {
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
    }, 50);
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
