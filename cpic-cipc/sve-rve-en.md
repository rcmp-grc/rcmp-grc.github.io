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
    .re-input-text:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;	
}
    .checkbox input[type="checkbox"]:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;
}
	.form-controls:focus {
	outline: 2px solid var(--rcmp-red);
	outline-offset: 0;	
}
   .input-group	{
   margin: 18px 12px;	   
}
</style>
<p>You may can search for autos, trucks, vans, sport utility vehicles (SUVs), motorcycles, snowmobiles, farm vehicles, heavy equipment, trailers, or all-terrain vehicles (ATVs). Please enter a valid Vehicle Identification Number (VIN) that contains only letters and numbers without spaces or other special characters.</p>
<div class="wb-frmvld">
	<form action="#" method="get" id="validation-example">
		<fieldset class="legend-brdr-bttm">
<legend class="wb-inv"><i aria-hidden="true"></i><span aria-level="3" role="heading">VIN</span></legend>
		<div class="form-group">
			<label for="vin" class="required"><span class="cb-text">Vehicle Identification Number (VIN)</span> <strong class="required">(required)</strong></label>
			<input class="form-control" id="vin" name="vin" pattern="[A-Za-z][0-9]{6}" required="required">
		</div>
		</fieldset>
	</form>
</div>
