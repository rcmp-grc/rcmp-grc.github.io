---
layout: default
theme: missing
title: Canada's Missing
date_modified: 2026-10-06
lang: en
lang_url: missing-disparus-fr.html

---
<style>

.missing-full-width {
    width: 100vw;
    margin-left: calc(50% - 50vw);
}

:root {
    --missing-red: #b50315;
    --missing-gold: #bea468;
    --missing-black: #0b0c0c;
    --missing-grey: #f3f2f1;
    --missing-white: #ffffff;
}

.missing-home {
    background: #fff;
}

/* HERO */

.missing-hero {
    position: relative;
    height: 70vh;
    min-height: 650px;
    overflow: hidden
    width: 100vw;
    margin-left: calc(50% - 50vw);
}

.missing-hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;}

.missing-hero-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient:
            90deg,
            rg*a(0,0,0,.85) 0%,
            rgba(*,0,0,.55) 55%,
            rgba(0,*,0,.25) 100%
        );
}

.missing-hero-content {
    position: relative;
    z-index: 2;
    max-width: 760px;
    padding: 7rem 2rem;
    color: white;
}

.hero-kicker {
    display: inline-block;
    color: var(--missing-gold);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .15rem;
    margin-bottom: 1rem;
}

.missing-hero h1 {
    font-size: clamp(3rem, 8vw, 5.5rem);
    line-height: 1;
    margin-bottom: 1.5rem;
    font-weight: 900;
}

.hero-description {
    font-size: 1.3rem;
    max-width: 650px;
    margin-bottom: 2rem;
}
	

.banner {
	position: relative;
	width: 100%;
	max-height: 250px;
	overflow: hidden;
	display: flex;

}	
	
.banner img {
  width: 100%;
  height: auto;
  display: block;
}

.banner-overlay {
	position: absolute;
	top: 15px;
	left: 15px;
	background-color: rgba(89,137,203,0.5);
	display: flex;
	justify-content: center;
	align-content: left;
	padding: 0.10rem 0.75rem;
}
	
.banner-title {

  font-weight: 700;
  color: black;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}	
	
.missing-card {
	background-color: #fff;
    box-shadow: 0 0.125rem 0.5rem 0.125rem;
    color: #333;
    display: block;
    height: 100%;
    padding: 2.25rem 1.5rem;
    position: relative;
}

.missing-card-img {
	width: 100%;
	display: block;
    max-width: 100%;
    height: auto;
	
}

 </style>
<div class="missing-home missing-full-width">
<section class="missing-hero"> 
<div class="banner">
<img src="banner-missing-01.png">
<div class="banner-overlay">
	<h2 class="banner-title">National Missing Persons Day</h2>
</div>	
</div>
<div class="missing-hero-overlay"></div>
<div class="missing-hero-content">
<span class="hero-kicker">
                National Centre for Missing Persons and Unidentified Remains
            </span>

            <h1>Help bring someone home</h1>

            <p class="hero-description">
                Search missing persons and unidentified remains cases
                published by law enforcement agencies across Canada.
            </p>

            <form class="hero-search">
                <label class="wb-inv" for="hero-search">
                    Search by name
                </label>

                <input
                    id="hero-search"
                    type="text"
                    placeholder="Search by name">

                <button type="submit">
                    Search
                </button>
            </form>

            <div class="hero-actions">
                search-en.html
                    Search cases
                </a>

                advanced-search-en.html
                    Advanced search
                </a>
            </div>

        </div>

    </section>



	
    <section class="featured-section">

        <div class="container">

            <div class="section-header">

                <div>
                    <p class="section-label">
                        Featured cases
                    </p>

                    <h2>
                        Help identify these individuals
                    </h2>
                </div>

                search-en.html
                    View all cases
                </a>

            </div>

        </div>

        <div class="case-scroll">

            {% for person in site.data.featured_cases limit:9 %}

            {{ person.url }}

                <div class="case-image-wrap">

                    {{ person.image }}

                    <span class="case-type">
                        Missing Person
                    </span>

                </div>

                <div class="case-body">

                    <h3>{{ person.name }}</h3>

                    <p>
                        Missing since {{ person.date }}
                    </p>

                    <p>
                        {{ person.city }}
                    </p>

                </div>

            </a>

            {% endfor %}

        </div>

    </section>

    <section class="warning-section">

        <div class="container">

            <div class="warning-card">

                <h2>Content warning</h2>

                <p>
                    Images and information contained on this website may be
                    disturbing to some viewers.
                </p>

            </div>

        </div>

    </section>

    <section class="about-section">

        <div class="container">

            <div class="about-grid">

                <div class="about-content">

                    <p class="section-label">
                        About NCMPUR
                    </p>

                    <h2>
                        Canada's national centre for missing persons and unidentified remains
                    </h2>

                    <p>
                        The National Centre for Missing Persons and
                        Unidentified Remains assists law enforcement,
                        medical examiners and chief coroners with
                        investigations across Canada.
                    </p>

                    <a href="about-ausujet/index-eng.htm"
                       class="btn-primary">
                        Learn more
                    </a>

                </div>

                <div class="about-cards">

                    <div class="info-card">
                        <h3>Missing persons</h3>
                        <p>
                            View active published cases.
                        </p>
                    </div>

                    <div class="info-card">
                        <h3>Unidentified remains</h3>
                        <p>
                            Assist investigators in identifying remains.
                        </p>
                    </div>

                    <div class="info-card">
                        <h3>Maps</h3>
                        <p>
                            Explore cases across Canada.
                        </p>
                    </div>

                    <div class="info-card">
                        <h3>Advanced search</h3>
                        <p>
                            Search using detailed criteria.
                        </p>
                    </div>

                </div>

            </div>

        </div>

    </section>
	</div>


      
