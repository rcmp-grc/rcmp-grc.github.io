---
layout: default
theme: missing
title: Search Canada's missing
date_modified: 2026-11-20
lang: en
lang_url: missing-search-rechearce-fr.html
---
<style>
    #re-filters {
        border: 1px solid var(--c-grey-border);
        padding: 0;
        margin-bottom: 20px;
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
    }

    #re-filters-heading {
        background: var(--c-black);
        color: var(--c-white);
        font-weight: 700;
        padding: 10px 14px;
        margin: 0;
    }

    #re-filters details.wp-filter-group>summary.wp-filter-group-toggle {
        display: flex !important;
        align-items: flex-start !important;
        flex-wrap: nowrap !important;
        gap: 6px !important;
        white-space: normal !important;
    }

    #re-filters details.wp-filter-group>summary.wp-filter-group-toggle .wp-filter-chevron {
        flex-shrink: 0 !important;
        width: 14px !important;
        align-self: center !important;
        margin-top: 0 !important;
    }

    #re-filters details.wp-filter-group>summary.wp-filter-group-toggle .wp-filter-summary-label {
        flex: 1 !important;
        min-width: 0 !important;
        white-space: normal !important;
        word-break: break-word !important;
        display: inline !important;
    }

    #re-filters details:nth-of-type(2) {
        border-top: 1px solid var(--c-grey-border);
    }

    #re-filters .wp-filter-group .checkbox {
        margin-bottom: 5px;
    }

    #re-filters .wp-filter-group .checkbox label {
        align-items: flex-start !important;
    }

    #re-filters .wp-filter-group .checkbox input[type="checkbox"] {
        margin-top: 6px !important;
        flex-shrink: 0 !important;
    }

    .re-select-group {
        padding: 10px 12px;
        border-top: 1px solid var(--c-grey-border);
        border-bottom: 1px solid var(--c-grey-border);
    }

    .re-select-label {
        display: block;
        font-weight: 700;
        margin-bottom: 6px;
        font-size: inherit;
    }

    .re-select {
        width: 100%;
        padding: 6px 8px;
        border: 2px solid var(--c-black);
        border-radius: 0;
        background: var(--c-white);
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%230b0c0c' d='M0 0l6 8 6-8z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        padding-right: 30px;
        box-sizing: border-box;
    }

    .re-select:focus {
        outline: 3px solid var(--c-focus-alt);
        outline-offset: 0;
    }

    .re-input-text-group {
        padding: 10px 12px;
        border-top: 1px solid var(--c-grey-border);
        border-bottom: 1px solid var(--c-grey-border);
    }

    .re-input-text-label {
        display: block;
        font-weight: 700;
        margin-bottom: 6px;
        font-size: inherit;
    }

    .re-input-text {
        width: 100%;
        padding: 6px 8px;
        border: 2px solid var(--c-black);
        border-radius: 0;
        background: var(--c-white);
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        background-repeat: no-repeat;
        background-position: right 10px center;
        padding-right: 30px;
        box-sizing: border-box;
    }

    .re-input-text:focus {
        outline: 3px solid var(--c-focus-alt);
        outline-offset: 0;
    }

    #re-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-bottom: 1px solid var(--c-grey-border);
        padding-bottom: 12px;
        margin-bottom: 20px;
    }

    #re-count {
        margin-bottom: 0;
    }

    #re-active-filters {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 6px;
        width: 100%;
        margin-bottom: 16px;
    }

    .re-filter-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 10px;
        justify-content: flex-start;
        width: 100%;
        box-sizing: border-box;
    }

    .re-filter-row:nth-child(odd) {
        background: var(--c-grey-light);
    }

    .re-filter-row:nth-child(even) {
        background: var(--c-white);
    }

    .re-filter-row-label {
        font-weight: 700;
        flex-shrink: 0;
    }

    .re-filter-row-tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        justify-content: flex-start;
    }

    #re-no-results {
        padding: 32px;
        text-align: left;
        border: 1px dashed var(--c-grey-border);
        width: 100%;
        max-width: none;
        box-sizing: border-box;
    }

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
        position: relative;
        border: 1px solid var(--rcmp-red);
        background: var(--rcmp-white);
        margin: 0 0 16px;
        overflow: hidden;
        width: 100%;
        max-width: none;
        box-sizing: border-box;
        display: block;
    }

    .result-header {
        display: inline-block;
        background: var(--rcmp-red-dark);
        color: white;
        font-size: .75rem;
        padding: .35rem 1rem;
        font-weight: 700;
        top: 0;
        left: 0;
        line-height: 1.4;
        z-index: 3;
        height: 24px;
        display: flex;
        align-items: center;
    }

    .result-body {
        border-top: 3px solid var(--rcmp-red-dark);
         padding: 16px 16px 20px
    }

        .result-body-orig {
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
        font-family: inherit;
        font-weight: 700;
    }

    .result-content h3 a {
        color: var(--link-blue);
        text-decoration: underline;
    }

    .meta {
        margin: 10px 0 0;
    }

    .meta li {
    font-size: 0.88em;
    color: black;
    display: flex;
    align-items: center;
    gap: 7px;
    line-height: 1.4;
    max-width: none;
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
        The Advanced Search tool helps you explore missing persons and unidentified remains cases across Canada using detailed search criteria. Select one or more filters below to narrow your results and find records that match the information available to you.
    </p>

    <div class="alert-info">
        <h2 class="h4">Filtering</h2>
        <p>
            Filtering on fields which only apply to missing persons, unidentified remains, or associated persons will exclude the other types of records from your results.
        </p>
    </div>

    <div class="row mrgn-tp-lg" id="re-page">

        <div class="col-md-3 col-sm-4" id="re-sidebar">
            <aside aria-labelledby="re-filters-heading" id="re-filters">
                <h2 class="h4" id="re-filters-heading">Filter by</h2>
                <p class="small mrgn-lft-md mrgn-tp-md">Select any of the following filters to narrow your search</p>
                <details class="wp-filter-group">
                    <summary class="wp-filter-group-toggle">
                        <i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span class="wp-filter-summary-label">Status</span>
                    </summary>
                    <fieldset>
                        <legend class="wb-inv">Status</legend>

                        <div class="checkbox">
                            <label><input data-filter="statusType" type="checkbox" value="Missing adult"><span class="cb-text">Missing adult</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="statusType" type="checkbox" value="Missing child"><span class="cb-text">Missing child</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="statusType" type="checkbox" value="Unidentified remains"><span class="cb-text">Unidentified remains</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="statusType" type="checkbox" value="Associated persons"><span class="cb-text">Associated persons</span></label>
                        </div>
                    </fieldset>
                </details>
                <details class="wp-filter-group">
                    <summary class="wp-filter-group-toggle">
                        <i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span aria-level="3" class="wp-filter-summary-label" role="heading">Province or territory</span>
                    </summary>
                    <fieldset>
                        <legend class="wb-inv">Province or territory</legend>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Alberta"><span class="cb-text">Alberta</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="British Columbia"><span class="cb-text">British Columbia</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Manitoba"><span class="cb-text">Manitoba</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="New Brunswick"><span class="cb-text">New Brunswick</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Newfoundland and Labrador"><span class="cb-text">Newfoundland and Labrador</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Northwest Territories"><span class="cb-text">Northwest Territories</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Nova Scotia"><span class="cb-text">Nova Scotia</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Nunavut"><span class="cb-text">Nunavut</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Ontario"><span class="cb-text">Ontario</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Prince Edward Island"><span class="cb-text">Prince Edward Island</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Quebec"><span class="cb-text">Quebec</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Saskatchewan"><span class="cb-text">Saskatchewan</span></label>
                        </div>

                        <div class="checkbox">
                            <label><input data-filter="province" type="checkbox" value="Yukon"><span class="cb-text">Yukon</span></label>
                        </div>
                    </fieldset>
                </details>
                <details class="wp-filter-group">
                    <summary class="wp-filter-group-toggle">
                        <i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span class="wp-filter-summary-label">Date last seen or date of discovery</span>
                    </summary>
                    <fieldset>
                        <legend class="wb-inv">Date last seen or date of discovery</legend>

                        <div>
                            <p class="small">Missing persons or unidentified remains only</p>
                        </div>
                        <label class="re-select-label" for="date-occurrence-from">From</label><input data-column="0" class="re-input-text" id="date-occurrence-from" name="date-occurrence-from" type="date">
                        <label class="re-select-label mrgn-tp-md" for="date-occurrence-to">To</label><input data-column="0" class="re-input-text" id="date-occurrence-to" name="date-occurrence-to" type="date">
                    </fieldset>
                </details>
                <details class="wp-filter-group">
                    <summary class="wp-filter-group-toggle">
                        <i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span class="wp-filter-summary-label">Age now</span>
                    </summary>
                    <fieldset>
                        <legend class="wb-inv">Age now</legend>

                        <div>
                            <p class="small">Missing persons or unidentified remains only</p>
                        </div>
                        <label class="re-select-label" for="age-now-min">Minimum age</label><input data-column="0" class="re-input-text" id="age-now-min" name="age-now-min" type="number" min="0" max="120" inputmode="numeric">
                        <label class="re-select-label mrgn-tp-md" for="age-now-max">Maximum age</label><input data-column="0" class="re-input-text" id="age-now-max" name="age-now-max" type="number" min="0" max="120" inputmode="numeric">
                    </fieldset>
                </details>
                <details class="wp-filter-group">
                    <summary class="wp-filter-group-toggle">
                        <i aria-hidden="true" class="fa-solid fa-chevron-down wp-filter-chevron"></i><span class="wp-filter-summary-label">Appearance</span>
                    </summary>

                    <div class="re-select-group">
                        <label class="re-select-label" for="re-select-appearance-gender">Gender</label>
                        <select class="re-select" id="re-select-appearance-gender" data-filter="appearance-gender">
                            <option value="">All</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                    </div>

                    <div class="re-select-group">
                        <label class="re-select-label" for="re-select-appearance-biogroup">Bio group</label>
                        <select class="re-select" id="re-select-appearance-biogroup" data-filter="appearance-biogroup">
                            <option value="">All</option>
                            <option value="Asian">Asian</option>
                            <option value="Black">Black</option>
                            <option value="East Indian">East Indian</option>
                            <option value="Indigenous">Indigenous</option>
                            <option value="Other">Other</option>
                            <option value="Unknown">Unknown</option>
                            <option value="White">White</option>
                        </select>
                    </div>

                    <div class="re-select-group">
                        <label class="re-select-label" for="re-select-appearance-eye-colour">Eye colour</label>
                        <select class="re-select" id="re-select-appearance-eye-colour" data-filter="appearance-eye-colour">
                            <option value="">All</option>
                            <option value="Black">Black</option>
                            <option value="Blue">Blue</option>
                            <option value="Brown">Brown</option>
                            <option value="Green">Green</option>
                            <option value="Grey">Grey</option>
                            <option value="Hazel">Hazel</option>
                        </select>
                    </div>

                    <div class="re-select-group">
                        <label class="re-select-label" for="re-select-appearance-appearance-hair-colour">Hair colour</label>
                        <select class="re-select" id="re-select-appearance-appearance-hair-colour" data-filter="appearance-appearance-hair-colour">
                            <option value="">All</option>
                            <option value="Auburn">Auburn</option>
                            <option value="Bald">Bald</option>
                            <option value="Black">Black</option>
                            <option value="Blonde">Blonde</option>
                            <option value="Brown">Brown</option>
                            <option value="Grey">Grey</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                        </select>
                    </div>
                </details>
                <button class="btn btn-default btn-block mrgn-tp-md" id="re-clear-filters" type="button">Clear filters</button>
            </aside>
        </div>

        <div class="col-md-9 col-sm-8" id="re-results-col">

            <div aria-label="Active filters" aria-live="polite" id="re-active-filters" role="status" style="display:none;"></div>

            <div id="re-toolbar">
                <p aria-live="polite" id="re-count"><strong id="re-count-num">0</strong>&nbsp;<span id="re-count-text">cases found</span></p>
            </div>
            <ul aria-label="Cases" class="list-unstyled" id="re-grid">
            <li class="result-card">
            <span class="result-header">Missing person</span>
            <div class="result-body">

                    <div class="result-image">
                        <img src="https://via.placeholder.com/220x170" alt="">
                    </div>

                    <div class="result-content">
                        <h3>
                            <a href="#">AINSLIE LAFRAMBOISE, Bonnie Shirley</a>
                        </h3>
                        <dl class="meta dl-horizontal">
                        <dt>Born</dt>
                        <dd>October 29, 1942</dd>
                        <dt>Missing since</dt>
                        <dd>November 4, 1995</dd>
                        <dt>Missing from</dt>
                        <dd>Kuuchisinivamiskahikan, QC</dd>
                        </dl>
                    </div>
                </div>
            </li>

        
            
            
            
            </ul>


                    <p id="re-no-results" style="display:none;">No cases match your current filters.</p>

            <nav aria-label="Pagination" class="rcmp-item-pagination" id="re-pagination">

                <div class="rcmp-item-pagination__prev" id="re-prev-wrap">
                    <button aria-label="Previous page" class="rcmp-item-pagination__link" id="re-prev" type="button"><i aria-hidden="true" class="rcmp-item-pagination__icon fa-solid fa-chevron-left"></i> <span class="rcmp-item-pagination__link-title">Previous <span class="rcmp-visually-hidden">page</span></span></button>
                </div>
                <ul class="rcmp-item-pagination__list" id="re-page-list"></ul>

                <div class="rcmp-item-pagination__next" id="re-next-wrap">
                    <button aria-label="Next page" class="rcmp-item-pagination__link" id="re-next" type="button"><span class="rcmp-item-pagination__link-title">Next <span class="rcmp-visually-hidden">page</span></span> <i aria-hidden="true" class="rcmp-item-pagination__icon fa-solid fa-chevron-right"></i></button>
                </div>
            </nav>
        </div>
    </div>
</div>