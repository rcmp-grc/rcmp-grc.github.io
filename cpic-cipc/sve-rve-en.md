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
custom_css: /assets/css/careers.css    
---

<style>
  .result-card {
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
.result-body {
  padding: 16px 16px 0px 16px;
  border-top: 3px solid var(--rcmp-red);
}
.result-card-format-tag {
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
	#result-filters {
	border: 1px solid var(--c-grey-border);	
	padding: 0;
	overflow: hidden;
	width: 100%;
}
	.result-filters-heading {	
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
   .re-select:focus {
	outline: 2px solid var(--rcmp-red);
	outline-offset: 0;	
}
    .re-input-text:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;	
}
	.re-input-text {
    outline: 2px solid var(--rcmp-black);
	width: 80%;	
	padding: 8px;	
    background: var(--c-white);
    font-size: inherit;
    font-family: inherit;	
    cursor: pointer;
    -webkit-appearance: none;	
    background-repeat: no-repeat;	
}
.input-row {
	display: inline-flex;
	gap: 10px;
}	
.checkbox-row {
	display: inline-flex;
	align-items: center;
	gap: 10px;
}
.checkbox-row input[type="checkbox"]:focus {
outline: 2px solid var(--rcmp-red);
outline-offset: 0;
}
.checkbox-row input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;	
  height: 30px;
  width: 30px;	
  border: 2px solid var(--rcmp-black);	
  background: var(--c-white);	
  cursor: pointer;
  display: inline-grid;
  place-content: center;	
}
.checkbox-row input[type="checkbox"]:checked::after {
  content: "\2713";
  display: inline-block;	
  font-size: 1.2em;	
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
</style>
<p>You can search for autos, trucks, vans, sport utility vehicles (SUVs), motorcycles, snowmobiles, farm vehicles, heavy equipment, trailers, or all-terrain vehicles (ATVs). Please enter a valid Vehicle Identification Number (VIN) that contains only letters and numbers without spaces or other special characters.</p>
<div class="alert alert-info">
<p>If you receive a positive result, please contact your local police to confirm the information and ask for assistance.</p>
</div>
<div class="panel panel-default col-md-8">
  <div class="panel-body">
<div class="wb-frmvld">
<form id="queryVehicles" name="queryVehicles" method="get" action="#">
<div id="re-filters">
<div class="input-group mrgn-bttm-sm mrgn-tp-sm">
<fieldset>
<legend class="wb-inv required"><i aria-hidden="true"></i><span aria-level="3" role="heading">VIN</span></legend>
<div class="required"></div>
<label for="vin" class="required mrgn-lft-md input-row"><span class="field-name">Vehicle Identification Number</span> <strong class="required" aria-hidden="true">(required)</strong></label>
<input class="re-input-text" data-rule-alphanumeric="true" data-rule-rangelength="[1,25]" id="vin" maxlength="25" name="vin" pattern="[A-Za-z0-9\s]{1,25}" data-column="0" required>
</fieldset>
</div>
<div class="input-group">
<fieldset class="mrgn-bttm-md">
<legend class="wb-inv required"><i aria-hidden="true"></i><span aria-level="3" role="heading">Terms and conditions</span></legend>
<div>
<p class="cb-text"><strong>Terms and conditions</strong></p>
<p>By using this search, I understand that access to the website is granted to a user on the condition that the user shall absolve and save harmless, the Royal Canadian Mounted Police or any individual employee thereof from any damages, however caused or arising from unintentional errors, failures, disclosure or use of such information.</p>
<p>Transactions resulting from this search may be shared with law enforcement agencies upon request.</p>
<p>To continue with your inquiry, you must agree to and accept these terms and conditions of use.</p></div>		
<label class="checkbox-row required mrgn-lft-md" for="agree"><input id="agree" name="agree" type="checkbox" required> <span class="field-name"><strong>I agree to the terms and conditions</strong></span> <strong class="required" aria-hidden="true">(required)</strong></label>
</fieldset>
</div>
<button class="btn btn-danger mrgn-lft-md mrgn-bttm-lg" id="search" type="submit">Search</button>
</div>
</form>
</div>
  </div>
	<h2>Results</h2>

</div>
<div class="clearfix"></div>

