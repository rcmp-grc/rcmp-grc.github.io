---
layout: default
theme: missing
title: Canada's Missing
date_modified: 2026-10-06
lang: en
lang_url: missing-disparus-fr.html
---
<style>
 :root {
  --rcmp-red: #b50315;
  --rcmp-gold: #ecb731;
  --rcmp-black: #0b0c0c;
  --rcmp-grey-light: #f3f2f1;
  --rcmp-grey-medium: #d8d8d8;
  --rcmp-white: #ffffff;
  --hero-start: #1f2c40;
  --hero-end: #404f6a;
  --missing-blue-light: #e1e7f2;
  --missing-blue-medium: #b1bbcc;
 }

 body {
  background: var(--missing-blue-light);
  font-family: "Lato", sans-serif;
  color: var(--rcmp-black);
 }

/*
 .missing-home {
  max-width: 1200px;
  margin: 0 auto;
 }
*/
#missing-fullpage {
 background: var(--missing-blue-light);
 font-family: "Lato", sans-serif;
 color: var(--rcmp-black);
 position: relative;
 width: 100vw;
 left: 50%;
 margin-left: -50vw;
 margin-right: -50vw;
 /*margin: 0 auto; */
 padding: 0 2rem;
 }

 /* HERO */
 .hero-banner {
  background: linear-gradient(90deg,
    var(--hero-start),
    var(--hero-end));
  min-height: 360px;
  border-radius: 24px 24px 0 0;
  position: relative;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
 }

 .hero-card {
  background: rgba(0, 0, 0, 0.88);
  max-width: 480px;
  padding: 1.5rem;
  border-left: 5px solid var(--rcmp-gold);
 }

 .hero-kicker {
  color: var(--rcmp-gold);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
 }

 .hero-card h1 {
  color: #fff;
  margin: 0 0 0.75rem;
  font-size: 3rem;
  font-weight: 400;
 }

 .hero-description {
  color: #fff;
  line-height: 1.6;
  margin: 0;
 }

 /* SEARCH */
 .search-section {
  background: var(--missing-blue-medium);
  padding: 1.25rem;
 }

 .search-form {
  display: flex;
  gap: 0.75rem;
 }

 .search-form input {
  flex: 1;
  height: 50px;
  border: 1px solid #888;
  padding: 0 1rem;
  font-size: 1rem;
 }

 .search-form button {
  background: var(--rcmp-red);
  color: #fff;
  border: none;
  padding: 0 1.5rem;
  font-weight: 700;
  cursor: pointer;
 }

 .search-form button:hover {
  background: #8e0010;
 }

 /* WARNING */
 .content-warning {
  margin: 2rem 0 4rem;
  background: #f4e9c2;
  border-left: 4px solid var(--rcmp-gold);
  padding: 1rem 1.25rem;
 }

 .content-warning strong {
  display: block;
  margin-bottom: 0.35rem;
 }

 /* FEATURED */
 .featured-section {
  padding: 3rem 5vw;
  overflow: hidden;
 }

 .featured-section h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
 }

 .case-carousel {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 1rem;
  scrollbar-width: thin;
  padding-bottom: 1rem;
 }

 .case-carousel::-webkit-scrollbar {
  height: 10px;
 }

 .case-card {
  flex: 0 0 360px;
  background: #fff;
  border: 1px solid #cfcfcf;
  scroll-snap-align: start;
  transition: transform 0.2s ease;
 }

 .case-card:hover {
  transform: translateY(-4px);
 }

 .case-image {
  height: 260px;
  background: #c8ccd1;
 }

 .case-content {
  padding: 1rem;
 }

 .case-type {
  display: inline-block;
  background: var(--rcmp-black);
  color: #fff;
  font-size: 0.75rem;
  padding: 0.35rem 0.6rem;
  margin-bottom: 0.75rem;
 }

 .case-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 400;
 }

 .case-content p,
 .case-content ul {
  margin: 0;
  line-height: 1.5;
 }

 .case-content ul {
  padding-left: 1.25rem;
  margin-top: 0.5rem;
 }

 /* EXPLORE */
 .explore-section {
  background: #ececec;
  border-radius: 0 0 24px 24px;
  padding: 3rem 5vw;
 }

 .explore-section h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.25rem;
 }

 .explore-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
 }

 .explore-links a {
  color: var(--rcmp-black);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
 }

 .explore-links a:hover {
  text-decoration: underline;
 }

 /* RESPONSIVE */
@media (max-width: 768px) {

    .search-form {
        flex-direction: column;
    }

    .hero-card h1 {
        font-size: 2.25rem;
    }

    .featured-section {
        padding: 2rem;
    }

    .case-carousel {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        overflow: visible;
        width: auto;
        margin: 0;
        padding: 0;
        scroll-snap-type: none;
    }

    .case-card {
        width: 100%;
        flex: none;
    }

    .case-image {
        height: 220px;
    }

    .explore-links {
        grid-template-columns: repeat(2, 1fr);
        text-align: left;
    }
}

@media (max-width: 480px) {

    .hero-banner {
        padding: 3rem 1rem;
    }

    .hero-card {
        max-width: 100%;
    }

    .explore-links {
        grid-template-columns: 1fr;
    }
}
</style>

<div id="missing-fullpage" class="missing-home">
 <!-- Hero -->

 <section class="hero-banner">

  <div class="hero-card">
   <p class="hero-kicker">
    NATIONAL CENTRE FOR MISSING PERSONS AND UNIDENTIFIED REMAINS
   </p>
   <h1>Canada's Missing</h1>
   <p class="hero-description">
    Helping investigators and the public locate missing persons and
    identify human remains across Canada.
   </p>
  </div>
 </section>
 <!-- Search -->

 <section class="search-section">
  <form class="search-form">
   <input type="text" placeholder="Search by name, location or occurrence number" aria-label="Search cases">
   <button type="submit">Search</button>
  </form>
 </section>
 <!-- Warning -->

 <section class="content-warning">
  <strong>Content warning</strong>
  <p>
   Images and information contained in this website may be disturbing to some viewers. Reasonable effort has been made to present cases of unidentified remains in a way that is not offensive or uncomfortable for the viewer or disrespectful of the deceased.
  </p>
 </section>
 <!-- Featured Cases -->

 <section class="featured-section">
  <h2>Featured Cases</h2>

  <div class="case-carousel">
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Person</span>
     <h3>Robert Norman Ross</h3>
     <ul>
      <li>Born: October 29, 1942</li>
      <li>Missing since: July 4, 1995</li>
      <li>Missing from: Daytona Beach</li>
     </ul>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Child</span>
     <h3>Profile Name</h3>
     <p>Last seen location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Unidentified Remains</span>
     <h3>Profile Name</h3>
     <p>Discovery location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Person</span>
     <h3>Profile Name</h3>
     <p>Last seen location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Child</span>
     <h3>Profile Name</h3>
     <p>Last seen location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Person</span>
     <h3>Profile Name</h3>
     <p>Last seen location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Unidentified Remains</span>
     <h3>Profile Name</h3>
     <p>Discovery location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Person</span>
     <h3>Profile Name</h3>
     <p>Last seen location and date</p>
    </div>
   </article>
   <article class="case-card">

    <div class="case-image"></div>

    <div class="case-content">
     <span class="case-type">Missing Child</span>
     <h3>Profile Name</h3>
     <p>Last seen location and date</p>
    </div>
   </article>
  </div>
 </section>
 <!-- Explore -->

 <section class="explore-section">
  <h2>Explore Cases</h2>

  <div class="explore-links">
   <a href="#">Missing Persons</a>
   <a href="#">Missing Children</a>
   <a href="#">Unidentified Remains</a>
   <a href="#">Advanced Search</a>
  </div>
 </section>
</div>
