---
layout: default
title: Search for stolen vehicles
description: My page description
date_modified: 2026-11-04
lang: en
lang_url: sve-rve-fr.html
author:
creator:
subject:
issued: 2026-11-04
breadcrumbs:
  - label: "Canadian Police Information Centre"
    url: "/en/cpic-cipc-en.html"
---

<style>
  .news-card {
  position: relative;
  border: 1px solid var(--c-grey-border);
  background: var(--c-white);
  margin: 0 0 16px;
  overflow: hidden;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  display: block;
}
.news-card-body {
  padding: 16px 16px 0px 16px;
  border-top: 3px solid var(--rcmp-red);
}
.news-card-format-tag {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 3px 10px;
    line-height: 1.4;
    letter-spacing: 0.03em;
    background: var(--rcmp-red);
    color: #ffffff;
    z-index: 3;
    height: 24px;
    display: flex;
    align-items: center;
}
	#news-filters {
	border: 1px solid var(--c-grey-border);	
	padding: 0;
	overflow: hidden;
	width: 100%;
}
	.news-filters-heading {	
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
    .checkbox input[type="checkbox"]:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;
}
    #news-sort-select:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;	
}	
	.form-controls:focus {
	outline: 2px solid var(--rcmp-red);
	outline-offset: 0;	
}
   .form-controls {
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
   box-sizing: border-box;
}
   .input-group	{
   margin: 18px 12px;	   
}
   #news-count {
   display: flex;
   align-items: center;
   margin-bottom: 0;
}
 .btn-danger {
   padding-top: 12px;     
   padding-bottom: 11px;
   border-radius: 0;
}		 
</style>
<p>You may can search for autos, trucks, vans, sport utility vehicles (SUVs), motorcycles, snowmobiles, farm vehicles, heavy equipment, trailers, or all-terrain vehicles (ATVs). Please enter a valid Vehicle Identification Number (VIN) that contains only letters and numbers without spaces or other special characters.</p>
<div class="wb-frmvld" id="re-page">
	<div class="col-md-8" id="re-sidebar">
	<form action="#" method="get" id="validation-example">
	<div id="re-filters">
	    <div class="wp-filter-group mrgn-bttm-lg">
		<fieldset class="legend-brdr-bttm">
<legend><i aria-hidden="true"></i><span aria-level="3" role="heading">VIN</span></legend>
		<div class="form-group">
			<label for="vin" class="required"><span class="cb-text">Vehicle Identification Number (VIN)</span> <strong class="required">(required)</strong></label>
			<input class="form-control" id="vin" name="vin" pattern="[A-Za-z][0-9]{6}" required="required">
		</div>
		</fieldset>
</div>
	</div>
	</form>
	</div>
</div>
