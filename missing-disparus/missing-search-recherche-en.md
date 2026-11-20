---
layout: default
theme: missing
title: Search Canada's missing
date_modified: 2026-11-20
lang: en
lang_url: missing-search-rechearce-fr.html
---

<style>


.search-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
}

.page-intro {
    max-width: 760px;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.filtering-callout {
    border-left: 4px solid #009ed1;
    padding-left: 1rem;
    margin-bottom: 3rem;
}

.filtering-callout h2 {
    margin: 0 0 .25rem;
    font-size: 1.25rem;
}

.search-layout {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 2rem;
}

.filters {
    border: 1px solid var(--rcmp-grey-md);
    background: #f7f7f7;
}
.missing-filters-heading {	
	background: var(--rcmp-grey-lt);
	color: var(--c-black);
	font-weight: 700;
	padding: 10px 15px;
	margin: 0;
}

	#re-filters {
	border: 0;	
	margin-bottom: 0px;	
	padding: 0;
	width: 100%;
    overflow: hidden;
}
    #re-filters details {
    border-top: 1px solid var(--c-grey-border);
}	
	.re-select:focus {
	outline: 2px solid var(--rcmp-red);
	outline-offset: 0;	
}
    .re-input-text:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;	
}








.filters-inner {
    padding: 1rem;
}

.filters h2 {
    margin-top: 0;
    font-size: 2rem;
}

.filters h3 {
    font-size: 1.25rem;
    margin: 1.5rem 0 .5rem;
    color: #1f3954;
}

.filters h4 {
    margin: 1rem 0 .5rem;
    font-size: 1rem;
}

.filters .help {
    font-size: .875rem;
    color: var(--rcmp-grey-dk);
    margin-bottom: .75rem;
}

.search-box,
.date-input,
.select-input,
.age-input {
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    border: 1px solid var(--rcmp-grey-md);
}

.filter-group {
    border-top: 1px solid var(--rcmp-grey-md);
    padding-top: 1rem;
    margin-top: 1rem;
}

.checkbox-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.checkbox-list li {
    margin-bottom: .4rem;
}

.checkbox-list label {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: .95rem;
}

.date-range,
.age-range {
    display: grid;
    gap: .75rem;
}

.age-range {
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
}

.results {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.result-card {
    border: 1px solid var(--rcmp-red);
    background: var(--rcmp-white);
}

.result-header {
    display: inline-block;
    background: var(--rcmp-red-dark);
    color: white;
    font-size: .875rem;
    padding: .35rem 1rem;
    font-weight: 700;
}

.result-body {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 1rem;
    padding: 0;
}

.result-image {
    background: #e5e5e5;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.result-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.result-content {
    padding: 1rem 1rem 1rem 0;
}

.result-content h3 {
    margin: 0 0 .75rem;
    font-size: 1.5rem;
}

.result-content h3 a {
    color: var(--link-blue);
    text-decoration: underline;
}

.meta {
    list-style: none;
    padding: 0;
    margin: 0;
}

.meta li {
    margin-bottom: .5rem;
}

.meta strong {
    display: block;
}

.icon {
    display: inline-block;
    width: 20px;
}

@media (max-width: 991px) {
    .search-layout {
        grid-template-columns: 1fr;
    }

    .result-body {
        grid-template-columns: 1fr;
    }

    .result-content {
        padding: 1rem;
    }
}
</style>

<div class="search-page">



    <p>
        The Advanced Search tool helps you explore missing persons and unidentified remains
        cases across Canada using detailed search criteria. Select one or more filters below
        to narrow your results and find records that match the information available to you.
    </p>

    <div class="alert-info">
        <h2 class="h4">Filtering</h2>
        <p>
            Filtering on fields which only apply to missing persons, unidentified remains,
            or associated persons will exclude the other types of records from your results.
        </p>
    </div>

    <div class="search-layout">
        <aside class="filters">
    
            <div class="filters-inner">
                <h2 class="h6 missing-filters-heading">Search</h2>
                <aside aria-labelledby="missing-filters-heading" id="news-filters">
                    <label for="btngrp-search2" class="wb-inv">Search</label>
    
                    <div class="input-group">
                        <input type="text" class="form-controls" id="btngrp-search2" placeholder="Search cases" />
                        <span class="input-group-btn">
                            <button class="btn btn-danger" type="submit"><span class="glyphicon-search glyphicon"></span></button>
                        </span>
                    </div>
		<div id="re-filters">
		<h2 class="h6 news-filters-heading">Filter by</h2>
		<p class="small mrgn-lft-md mrgn-tp-md">Select any of the following filters to narrow your search</p>	
	    <details class="wp-filter-group">
        <summary class="wp-filter-group-toggle"><i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span aria-level="3" class="wp-filter-summary-label" role="heading">Status</span></summary>
		<fieldset>	
            <legend class="wb-inv">Status</legend>
                    <div class="checkbox">
                        <label><input data-filter="category" type="checkbox" value="Missing adult"><span class="cb-text">Missing adult</span></label>
                    </div>
                    
                    <div class="checkbox">
                        <label><input data-filter="category" type="checkbox" value="Missing child"><span class="cb-text">Missing child</span></label>
                    </div>
                    
                    <div class="checkbox">
                        <label><input data-filter="category" type="checkbox" value="Unidentified remains"><span class="cb-text">Unidentified remains</span></label>
                    </div>
                    
                    <div class="checkbox">
                        <label><input data-filter="category" type="checkbox" value="Assault"><span class="cb-text">Assault</span></label>
                    </div>


                     
                        <ul class="checkbox-list">
                            <li><label><input type="checkbox"> Missing adult</label></li>
                            <li><label><input type="checkbox"> Missing child</label></li>
                            <li><label><input type="checkbox"> Unidentified remains</label></li>
                            <li><label><input type="checkbox"> Associated persons</label></li>
                        </ul>
                    </div>

                <div class="filter-group">
                    <h4>Missing from</h4>

                    <ul class="checkbox-list">
                        <li><label><input type="checkbox"> Alberta</label></li>
                        <li><label><input type="checkbox"> British Columbia</label></li>
                        <li><label><input type="checkbox"> Manitoba</label></li>
                        <li><label><input type="checkbox"> New Brunswick</label></li>
                        <li><label><input type="checkbox"> Newfoundland and Labrador</label></li>
                        <li><label><input type="checkbox"> Northwest Territories</label></li>
                        <li><label><input type="checkbox"> Nova Scotia</label></li>
                        <li><label><input type="checkbox"> Nunavut</label></li>
                        <li><label><input type="checkbox"> Ontario</label></li>
                        <li><label><input type="checkbox"> Prince Edward Island</label></li>
                        <li><label><input type="checkbox"> Quebec</label></li>
                        <li><label><input type="checkbox"> Saskatchewan</label></li>
                        <li><label><input type="checkbox"> Yukon</label></li>
                        <li><label><input type="checkbox"> Other</label></li>
                    </ul>
                </div>

                <div class="filter-group">
                    <h4>Date last seen or date of discovery</h4>
                    <div class="help">Missing persons or unidentified remains only</div>

                    <div class="date-range">
                        <div>
                            <label>From</label>
                            <input type="date" class="date-input">
                        </div>

                        <div>
                            <label>To</label>
                            <input type="date" class="date-input">
                        </div>
                    </div>
                </div>

                <div class="filter-group">
                    <h4>Age now</h4>
                    <div class="help">Missing persons or unidentified remains only</div>

                    <div class="age-range">
                        <input class="age-input" type="number" value="0">
                        <span>to</span>
                        <input class="age-input" type="number" value="99">
                    </div>
                </div>

                <div class="filter-group">
                    <h4>Appearance</h4>

                    <label>Gender</label>
                    <select class="select-input">
                        <option>Select option</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                        <option>Unknown</option>
                    </select>

                    <br><br>

                    <label>Bio group</label>
                    <select class="select-input">
                        <option>Select option</option>
                        <option>Asian</option>
                        <option>Black</option>
                        <option>East Indian</option>
                        <option>Indigenous</option>
                        <option>Other</option>
                        <option>Unknown</option>
                        <option>White</option>
                    </select>

                    <br><br>

                    <label>Eye colour</label>
                    <select class="select-input">
                        <option>Select option</option>
                        <option>Black</option>
                        <option>Blue</option>
                        <option>Brown</option>
                        <option>Green</option>
                        <option>Grey</option>
                        <option>Hazel</option>
                    </select>

                    <br><br>

                    <label>Hair colour</label>
                    <select class="select-input">
                        <option>Select option</option>
                        <option>Auburn</option>
                        <option>Bald</option>
                        <option>Black</option>
                        <option>Blonde</option>
                        <option>Brown</option>
                        <option>Grey</option>
                        <option>Red</option>
                        <option>White</option>
                    </select>

                </div>

            </div>
        </aside>

        <section class="results">

            <article class="result-card">
                <div class="result-header">Missing person</div>

                <div class="result-body">
                    <div class="result-image">
                        <img src="https://via.placeholder.com/220x170" alt="">
                    </div>

                    <div class="result-content">
                        <h3>
                            <a href="#">AINSLIE LAFRAMBOISE, Bonnie Shirley</a>
                        </h3>

                        <ul class="meta">
                            <li><strong>Born</strong> October 29, 1942</li>
                            <li><strong>Missing since</strong> November 4, 1995</li>
                            <li><strong>Missing from</strong> Kuuchisinivamiskahikan, QC</li>
                        </ul>
                    </div>
                </div>
            </article>

            <article class="result-card">
                <div class="result-header">Missing child</div>

                <div class="result-body">
                    <div class="result-image">
                        <img src="https://via.placeholder.com/220x170" alt="">
                    </div>

                    <div class="result-content">
                        <h3>
                            <a href="#">KASPRICK, Lori Lee</a>
                        </h3>

                        <ul class="meta">
                            <li><strong>Born</strong> 1961</li>
                            <li><strong>Missing since</strong> September 1, 1976</li>
                            <li><strong>Missing from</strong> Mundare, Alberta</li>
                        </ul>
                    </div>
                </div>
            </article>

            <article class="result-card">
                <div class="result-header">Unidentified remains</div>

                <div class="result-body">
                    <div class="result-image">
                        <img src="https://via.placeholder.com/220x170" alt="">
                    </div>

                    <div class="result-content">
                        <h3>
                            <a href="#">Male, 50 to 65</a>
                        </h3>

                        <ul class="meta">
                            <li><strong>Discovered on</strong> May 2, 1980</li>
                            <li><strong>Discovered at</strong> Mission, British Columbia</li>
                        </ul>
                    </div>
                </div>
            </article>

        </section>

    </div>

</div>