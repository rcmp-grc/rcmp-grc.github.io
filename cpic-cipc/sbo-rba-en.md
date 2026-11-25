---
layout: default
title: Search for stolen boats
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
 appearance: none;  
 background-repeat: no-repeat;	
 background-position: right 10px center;  
 padding-right: 30px;  
 box-sizing: border-box;  
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
.input-group	{
margin: 18px 12px;	   
}
</style>
<p>You can search for boats by one of the following criteria: </p>
<div class="mrgn-bttm-sm">
</div>
<div id="expand-collapse">
  <details>
    <summary>Boat name</summary>
    <p>Enter the boat's name. Spaces and special characters are not permitted (for example, search Canada's #1 as canadas1). If the name exceeds 13 characters, enter the first 13.</p>
  </details>
  <details>
      <summary>Hull identification number</summary>
    <p>Since 1982, Canadian and American boat manufacturers must, by law, affix an identification serial number to each hull. If this number exceeds 12 characters, enter the first 12.</p>
  </details>
  <details>
      <summary>Licence number</summary>
    <p>All boats with 10 horsepower(<abbr>hp</abbr>) or more are required, by law, to be licenced. The licence number is affixed, painted or engraved on the bow of the boat. If the licence number exceeds 10 characters, enter the first 10.</p>
  </details>
  <details>
     <summary>Registration number</summary>
    <p>Enter your vessel's registration number. If the registration number exceeds 7 characters, enter the first 7. (This includes sail numbers if the registration is not known).</p>
  </details>
</div>
<div class="panel panel-default">
<div class="panel-body">
<div class="wb-frmvld">
<form id="queryVehicles" name="queryVehicles" method="get" action="#">
<div id="re-filters">
<div class="input-group mrgn-bttm-sm mrgn-tp-sm">
<fieldset>
<legend class="wb-inv"><i aria-hidden="true"></i><span aria-level="3" role="heading">Search criteria</span></legend>
<label for="criteria" class="required mrgn-lft-md mrgn-rght-md"><span class="field-name">Search criteria</span> <strong class="required" aria-hidden="true">(required)</strong> <a class="wb-lbx lbx-modal" title="Entry instrutions" href="#instructions"><i class="fa-solid fa-circle-info" style="color: hsl(214, 42%, 27%);"></i></a>
<section id="instructions" class="mfp-hide modal-dialog modal-content overlay-def">
			<header class="modal-header">
				<h2 class="modal-title">Instructions</h2>
			</header>
			<div class="modal-body">
				<p>Please enter only letters and numbers without spaces or other special characters.</p>
			</div>
		</section>
</label>
<input class="re-input-text" data-rule-alphanumeric="true" data-rule-rangelength="[1,25]" id="criteria" maxlength="25" name="criteria" pattern="[A-Za-z0-9\s]{1,25}" data-column="0" required>
</fieldset>
</div>
<div class="input-group">
<fieldset class="chkbxrdio-grp mrgn-bttm-md">
 <legend class="required mrgn-lft-md"><i aria-hidden="true"></i><span class="field-name" aria-level="3" role="heading">Terms and conditions</span></legend> 
<div>
<p>By using this search, I understand that access to the website is granted to a user on the condition that the user shall absolve and save harmless, the Royal Canadian Mounted Police or any individual employee thereof from any damages, however caused or arising from unintentional errors, failures, disclosure or use of such information.</p>
<p>Transactions resulting from this search may be shared with law enforcement agencies upon request.</p>
<p>To continue with your inquiry, you must agree to and accept these terms and conditions of use.</p>
</div>		
<label class="checkbox-row checkbox required mrgn-lft-md" for="agree"><input id="agree" name="agree" type="checkbox" required value="1">&nbsp;<strong>I agree to the terms and conditions</strong> <strong class="required" aria-hidden="true">(required)</strong></label>
</fieldset></div>
<ul class="list-inline lst-spcd">	
<li><button type="submit" value="Search" class="btn btn-danger mrgn-bttm-sm mrgn-lft-sm"><strong>Search</strong></button></li> <li><input type="reset" value="Reset page to defaults" class="btn btn-link show p-0 mrgn-lft-md mrgn-bttm-sm"></li>
</ul> 
</div></form></div>
<footer class="panel-footer mrgn-lft-sm mrgn-rght-sm mrgn-bttm-lg mrgn-tp-md">
<p><strong>No records</strong> were found matching <strong>XXX000000</strong> as of November 23, 2026.</p>
<p><strong>1 record</strong> was found matching <strong>XXX00000000</strong> as of November 23, 2026.</p> <p>Please contact your <a href="https://rcmp.ca/en/corporate-information/rcmp-locations">local police</a> to confirm the information and ask for assistance. </p></footer>
</div></div>  
