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
    outline-offset: 0;	
	width: 50%;	
}
    .checkbox input[type="checkbox"]:focus {
    outline: 2px solid var(--rcmp-red);
    outline-offset: 0;
}
   .checkbox input[type="checkbox"] {   	
   border: 2px solid var(--c-black);
   padding: 8px;	
   border-radius: 0;
   background: var(--c-white);
   font-size: inherit;
   font-family: inherit;	
   cursor: pointer;
   -webkit-appearance: none;
   appearance: none;	
   background-repeat: no-repeat;
   box-sizing: border-box;	   
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
<form id="queryVehicles" name="queryVehicles" method="get">
<div id="re-filters">
<div class="wp-filter-group mrgn-bttm-sm mrgn-tp-sm">
<fieldset class="brdr-tp">
<legend class="wb-inv"><i aria-hidden="true"></i><span aria-level="3" role="heading">VIN</span></legend>
<div class="form-group mrgn-lft-sm">
<label for="vin" class="re-select-label required"><span class="cb-text">Vehicle Identification Number</span> <strong class="required" aria-hidden="true">(required)</strong></label>
<input class="re-input-text" data-rule-alphanumeric="true" data-rule-rangelength="[1,25]" id="vin" maxlength="25" name="vin" pattern="[A-Za-z0-9\s]{1,25}" data-column="0" required>
</div>
</fieldset>
</div>
<div class="mrgn-bttm-lg">
<fieldset>
<legend class="wb-inv"><i aria-hidden="true"></i><span aria-level="3" role="heading" class="field-name">Terms and conditions of use</span></legend>
<div>
<p><strong><span class="cb-text">Terms and conditions</span></strong></p>
<p>By using this search, I understand that access to the website is granted to a user on the condition that the user shall absolve and save harmless, the Royal Canadian Mounted Police or any individual employee thereof from any damages, however caused or arising from unintentional errors, failures, disclosure or use of such information.</p>
<p>Transactions resulting from this search may be shared with law enforcement agencies upon request.</p>
<p>To continue with your inquiry, you must agree to and accept these terms and conditions of use.</p>					
</div>	
<div class="checkbox required">
<label for="terms"><span class="mrgn-lft-sm mrgn-rght-md"><input id="terms" type="checkbox" required="required" value="1"></span><strong>I agree to the terms and conditions of use</strong></label> <strong class="required" aria-hidden="true">(required)</strong>
</div>	
</fieldset>	
</div>
</div>
<button class="btn btn-danger" id="search" type="submit">Search</button>
</form>
</div>
  </div>
</div>
<div class="clearfix"></div>
<script>
	$(document).ready(function(){var e,r=setPageType();$("#search").click(function(e){$("#queryVehicles").valid()&&(e.preventDefault(),displayMsg(r.url,r.messageType),window.location.href="#results")});var t=!1;$("body").keyup(function(r){9===(r.keyCode||r.which)&&(e=$("#rsltsMsg"),console.log(e),e.is(":visible")&&!t&&(e.focus(),t=!0))}),$("#searchItem").keyup(function(e){13===e.keyCode&&$("#queryVehicles").valid()&&displayMsg(r.url,r.messageType)})});var setLocaleVariables=function(){return $("html").is(":lang(fr)")?{psblStlnVeh:"Véhicule possiblement volé en date du&#160;:&#160;",stolen:"VOLÉ",hveRcrd:"Nous possédons une fiche qui correspond aux renseignements que vous avez fournis&#160;",hveRcrds1:"Nous possédons&#160;",hveRcrds2:"&#160;fiches qui correspond aux renseignements que vous avez fournis&#160;",vin:"NIV&#160;:&#160;",typeOfVehicle:"Type de véhicule&#160;:&#160;",licence:"Numéro de plaque d'immatriculation&#160;:&#160;",make:"Marque&#160;:&#160;",model:"Modèle&#160;:&#160;",VehicleYr:"Année-modèle&#160;:&#160;",LicenceYr:"Année de la plaque d'immatriculation&#160;:&#160;",reportStln:"Lieu où le vol a été signalé&#160;:&#160;",contactMsg:"Veuillez communiquer immédiatement avec le service de police de votre localité pour confirmer l'information et obtenir de l'assistance",findMsg:"Trouvez les coordonnées de votre police locale",plsNote:"Remarque",criminalMsg:"Il est criminel d'avoir sciemment en sa possession un véhicule criminellement obtenu. Les résultats de la présente recherche peuvent conduire à une enquête policière. Il importe que vous communiquiez immédiatement avec le service de police local.",auto:"Automobile",farmEquip:"Équipement agricole",heavyEquip:"Équipement lourd",moto:"Motocyclette",atvOther:"VTT ou autre",trailer:"Roulotte",snow:"Motoneige",truck:'Camion/Fourgonnette/<abbr title="véhicules utilitaires sport">VUS</abbr>',na:"s/o",noRcrdsFound:"Aucun document n'a été trouvé à la date du&#160;:&#160;",noRcrds:"Aucun document ne correspond du ",database:" ont été trouvés dans notre base de données",searchAgain:"Rechercher à nouveau",serialNum:"Numéro de série&#160;:&#160;",horsepower:"Puissance&#160;:&#160;",thisSerial:"Ce numéro de série a été marqué comme suit&#160;:&#160;",item:"Article&#160;:&#160;",asOf:"&#160;en date du&#160;",loading:"Chargement...",colour:"Couleur&#160;:&#160;",speed:"Vitesse&#160;:&#160;",type:"Type&#160;:&#160;",calibre:"Calibre&#160;:&#160;",name:"Nom&#160;:&#160;",hullIdNum:"Numéro d'identification de coque&#160;:&#160;",regNum:"Numéro d'enregistrement&#160;:&#160;",year:"Année&#160;:&#160;",boatLicence:"Numéro de permis&#160;:&#160;",contactLink:"https://grc.ca/fr/renseignements-organisationnels/emplacements-grc",m0:"janvier",m1:"février",m2:"mars",m3:"avril",m4:"mai",m5:"juin",m6:"juillet",m7:"août",m8:"septembre",m9:"octobre",m10:"novembre",m11:"décembre"}:{psblStlnVeh:"Possible stolen vehicle as of&#160;",stolen:"STOLEN",hveRcrd:"We have a record on file that matches&#160;",hveRcrds1:"We have&#160;",hveRcrds2:"&#160;records on file that matches&#160;",vin:"VIN:&#160;",typeOfVehicle:"Vehicle Type:&#160;",licence:"Licence:&#160;",make:"Make:&#160;",model:"Model:&#160;",VehicleYr:"Vehicle Year:&#160;",LicenceYr:"Licence Year:&#160;",reportStln:"Reported stolen in:&#160;",contactMsg:"Contact your non-emergency police line to confirm the information and ask for assistance.",findMsg:"Find your local police contact information",plsNote:"Note",criminalMsg:"It is a criminal offence to knowingly be in possession of a vehicle obtained by crime. The results from this search may lead to an active police investigation.",auto:"Auto",farmEquip:"Farm Equipment",heavyEquip:"Heavy Equipment",moto:"Motorcycle",atvOther:"ATV or Other",trailer:"Trailer",snow:"Snowmobile",truck:"Truck/Van/SUV",na:"n/a",noRcrdsFound:"No records were found as of:&#160;",noRcrds:"No records matching ",database:" were found in our database.",searchAgain:"Search again",serialNum:"Serial Number:&#160;",horsepower:"Horsepower&#160;:&#160;",thisSerial:"This serial number has been marked as:&#160;",item:"Item:&#160;",asOf:"&#160;as of&#160;",loading:"Loading...",colour:"Colour:&#160;",speed:"Speed:&#160;",type:"Type:&#160;",calibre:"Calibre:&#160;",name:"Name:&#160;",hullIdNum:"Hull Identification Number:&#160;",regNum:"Registration Number:&#160;",year:"Year:&#160;",boatLicence:"Licence:&#160;",contactLink:"https://rcmp.ca/en/corporate-information/rcmp-locations",m0:"January",m1:"February",m2:"March",m3:"April",m4:"May",m5:"June",m6:"July",m7:"August",m8:"September",m9:"October",m10:"November",m11:"December"}},getVehicleType=function(e){var r=setLocaleVariables();if(""===e)return r.na;switch(e){case"A":return r.auto;case"F":return r.farmEquip;case"H":return r.heavyEquip;case"M":return r.moto;case"O":return r.atvOther;case"R":return r.trailer;case"S":return r.snow;case"T":return r.truck}},reportedProvince=function(e){return $("html").is(":lang(fr)")?e[0].reportedProvince.descriptionFrench:e[0].reportedProvince.descriptionEnglish},colourDesription=function(e,r){return $("html").is(":lang(fr)")?e[r].colour.descriptionFrench:e[r].colour.descriptionEnglish},findStatus=function(e,r){return $("html").is(":lang(fr)")?e[r].status.descriptionFrench:e[r].status.descriptionEnglish},findType=function(e,r){return $("html").is(":lang(fr)")?e[r].type.descriptionFrench:e[r].type.descriptionEnglish},formattedDateTime=function(){var e=setLocaleVariables(),r=new Array(12);r[0]=e.m0,r[1]=e.m1,r[2]=e.m2,r[3]=e.m3,r[4]=e.m4,r[5]=e.m5,r[6]=e.m6,r[7]=e.m7,r[8]=e.m8,r[9]=e.m9,r[10]=e.m10,r[11]=e.m11;var t=new Date;t.setDate(t.getDate());var s=t.getMonth(),a=t.getDate(),n=t.getFullYear();if($("html").is(":lang(fr)"))var o=a+" "+r[s]+" "+n;else var o=r[s]+" "+a+", "+n;return o},hidePageItems=function(){$("#trms").hide(),$("#text").hide(),$("#searchField").hide(),$("#typeField").hide()},setMessages=function(e,r){var t=setLocaleVariables(),s=[],a={};console.log(r);var n=$("#searchItem").val(),o='<div class="alert alert-warning mrgn-bttm-md"><p>'+t.contactMsg+'<br><a href="'+t.contactLink+'">'+t.findMsg+"</a></p><p><strong>"+t.plsNote+"</strong> "+t.criminalMsg+'</p></div><button type="button" class="btn btn-default" onClick="window.location.reload();">'+t.searchAgain+"</button>";if(0!==r.length){switch(e){case"property":for(var i=[],c=0;c<r.length;c++){var l=r[c].item||t.na,m=r[c].make||t.na,p=r[c].model||t.na,d=reportedProvince(r),g=findStatus(r,c);i[c]='<p class="mrgn-tp-md"><strong class="text-primary">'+t.serialNum+"</strong>"+n+'</p><p><strong class="text-primary">'+t.item+"</strong>"+l+'</p><p><strong class="text-primary">'+t.make+"</strong>"+m+'</p><p><strong class="text-primary">'+t.model+"</strong>"+p+'</p><p><strong class="text-primary">'+t.reportStln+"</strong>"+d+"</p>"}var u='<hr class="brdr-bttm">';if(i.length>=1)for(c=0;c<i.length-1;c++)i[c]+=u;var h='<div class="alert alert-danger"><h2 id="rsltsMsg">'+t.thisSerial+g+t.asOf+formattedDateTime()+"</h2></div>";if(r.length>1)var v="<p>"+t.hveRcrds1+r.length+t.hveRcrds2+"<mark>"+n+"</mark>.</p>";else var v="<p>"+t.hveRcrd+"<mark>"+n+"</mark>.</p>";return a={alertMsg:h,rcrdsMsg:v,stoleninfo:i,contactMsg:o,type:"success"},hidePageItems(),a;case"vehicle":for(var i=[],c=0;c<r.length;c++){var f=r[c].licenceYear||t.na,y=r[c].vin||t.na,b=r[c].licence||t.na,m=r[c].make||t.na,p=r[c].model||t.na,M=r[c].year||t.na,d=reportedProvince(r),k=getVehicleType(r[0].vehicleType);i[c]='<p class="mrgn-tp-md"><strong class="text-primary">'+t.vin+"</strong>"+y+'</p><p><strong class="text-primary">'+t.typeOfVehicle+"</strong>"+k+'</p><p><strong class="text-primary">'+t.licence+"</strong>"+b+'</p><p><strong class="text-primary">'+t.make+"</strong>"+m+'</p><p><strong class="text-primary">'+t.model+"</strong>"+p+'</p><p><strong class="text-primary">'+t.VehicleYr+"</strong>"+M+'</p><p><strong class="text-primary">'+t.LicenceYr+"</strong>"+f+'</p><p><strong class="text-primary">'+t.reportStln+"</strong>"+d+"</p>"}var u='<hr class="brdr-bttm">';if(i.length>=1)for(c=0;c<i.length-1;c++)i[c]+=u;var h='<div class="alert alert-danger"><h2 id="rsltsMsg">'+t.psblStlnVeh+formattedDateTime()+"</h2></div>";if(r.length>1)var v="<p>"+t.hveRcrds1+r.length+t.hveRcrds2+"<mark>"+y+"</mark>.</p>";else var v="<p>"+t.hveRcrd+"<mark>"+y+"</mark>.</p>";return a={alertMsg:h,rcrdsMsg:v,stoleninfo:i,contactMsg:o,type:"success"},hidePageItems(),a;case"boat":for(var i=[],c=0;c<r.length;c++){var N=r[c].licenceNumber||t.na,x=r[c].registrationNumber||t.na,w=r[c].hullIdentificationNumber||t.na,q=r[c].name||t.na,m=r[c].make||t.na,p=r[c].model||t.na,M=r[c].year||t.na;i[c]='<p class="mrgn-tp-md"><strong class="text-primary">'+t.name+"</strong>"+q+'</p><p><strong class="text-primary">'+t.hullIdNum+"</strong>"+w+'</p><p><strong class="text-primary">'+t.boatLicence+"</strong>"+N+'</p><p><strong class="text-primary">'+t.regNum+"</strong>"+x+'</p><p><strong class="text-primary">'+t.make+"</strong>"+m+'</p><p><strong class="text-primary">'+t.model+"</strong>"+p+'</p><p><strong class="text-primary">'+t.year+"</strong>"+M+"</p>"}var u='<hr class="brdr-bttm">';if(i.length>=1)for(c=0;c<i.length-1;c++)i[c]+=u;var h='<div class="alert alert-danger"><h2 id="rsltsMsg">'+t.thisSerial+t.stolen+t.asOf+formattedDateTime()+"</h2></div>";if(r.length>1)var v="<p>"+t.hveRcrds1+r.length+t.hveRcrds2+"<mark>"+n+"</mark>.</p>";else var v="<p>"+t.hveRcrd+"<mark>"+n+"</mark>.</p>";return a={alertMsg:h,rcrdsMsg:v,stoleninfo:i,contactMsg:o,type:"success"},hidePageItems(),a;case"boat-motor":for(var i=[],c=0;c<r.length;c++){var T=findType(r,c),V=r[0].horsepower||t.na,R=r[0].serialNumber||t.na;if(c>1)var u="";else var u='<hr class="brdr-bttm">';i[c]='<p class="mrgn-tp-md"><strong class="text-primary">'+t.type+"</strong>"+T+'</p><p><strong class="text-primary">'+t.horsepower+"</strong>"+V+'</p><p><strong class="text-primary">'+t.serialNum+"</strong>"+R+"</p>"}var u='<hr class="brdr-bttm">';if(i.length>=1)for(c=0;c<i.length-1;c++)i[c]+=u;var h='<div class="alert alert-danger"><h2 id="rsltsMsg">'+t.psblStlnVeh+formattedDateTime()+"</h2></div>",v="<p>"+t.hveRcrd+"<mark>"+n+"</mark>.</p>";return a={alertMsg:h,rcrdsMsg:v,stoleninfo:i,contactMsg:o,type:"success"},hidePageItems(),a;case"bicycle":for(var i=[],c=0;c<r.length;c++){var m=r[c].make||t.na,p=r[c].model||t.na,S=r[c].speed||t.na,R=r[c].serialNumber||t.na,g=findStatus(r,c),d=reportedProvince(r,c),O=colourDesription(r,c);i[c]='<p class="mrgn-tp-md"><strong class="text-primary">'+t.serialNum+"</strong>"+R+'</p><p><strong class="text-primary">'+t.make+"</strong>"+m+'</p><p><strong class="text-primary">'+t.model+"</strong>"+p+'</p><p><strong class="text-primary">'+t.colour+"</strong>"+O+'</p><p><strong class="text-primary">'+t.speed+"</strong>"+S+"</p>"}var u='<hr class="brdr-bttm">';if(i.length>=1)for(c=0;c<i.length-1;c++)i[c]+=u;var h='<div class="alert alert-danger"><h2 id="rsltsMsg">'+t.thisSerial+g+t.asOf+formattedDateTime()+"</h2></div>",v="<p>"+t.hveRcrd+"<mark>"+n+"</mark>.</p>";return a={alertMsg:h,rcrdsMsg:v,stoleninfo:i,contactMsg:o,type:"success"},hidePageItems(),a;case"firearm":for(var i=[],c=0;c<r.length;c++){var T=findType(r,c),I=r[c].calibre||t.na,g=findStatus(r,c);i[c]='<p class="mrgn-tp-md"><strong class="text-primary">'+t.serialNum+"</strong>"+n+'</p><p><strong class="text-primary">'+t.type+"</strong>"+T+'</p><p><strong class="text-primary">'+t.calibre+"</strong>"+I+"</p>"}var u='<hr class="brdr-bttm">';if(i.length>=1)for(c=0;c<i.length-1;c++)i[c]+=u;var h='<div class="alert alert-danger"><h2 id="rsltsMsg">'+t.thisSerial+g+t.asOf+formattedDateTime()+"</h2></div>",v="<p>"+t.hveRcrd+"<mark>"+n+"</mark>.</p>";return a={alertMsg:h,rcrdsMsg:v,stoleninfo:i,contactMsg:o,type:"success"},hidePageItems(),a}return console.log(s),s}return s='<div class="alert alert-success"><h2 id="rsltsMsg">'+t.noRcrdsFound+formattedDateTime()+"</h2></div><p>"+t.noRcrds+"<mark>"+n+"</mark>"+t.database+'</p><div class="alert alert-warning"><p>'+t.contactMsg+'<br><a href="'+t.contactLink+'">'+t.findMsg+"</a></p><p><strong>"+t.plsNote+"</strong> "+t.criminalMsg+'</p></div><button class="btn btn-default" id="searchAgain">'+t.searchAgain+"</button>",a={alertMsg:s,type:"failure"},hidePageItems(),a},displayMsg=function(e,r){var t=setLocaleVariables(),s=$("#searchItem").val();if(""!==s)if("boat-motor"!==r)$("#results").html('<div class="alert"><strong>'+t.loading+"</strong></div>"),$.getJSON(e+s,function(e){var t,s=setMessages(r,e);if("success"===s.type){t=s.alertMsg+s.rcrdsMsg;for(var a=0;a<s.stoleninfo.length;a++)t+=s.stoleninfo[a];console.log(s),t+=s.contactMsg}else t=s.alertMsg;$("#results").html(t)});else{$("#results").html('<div class="alert"><strong>'+t.loading+"</strong></div>");var a=$("#motorType").val();e=e+"/queryBoatMotors?serialNumber="+s+"&type="+a,$.getJSON(e,function(e){var t,s=setMessages(r,e);if("success"===s.type){t=s.alertMsg+s.rcrdsMsg;for(var a=0;a<s.stoleninfo.length;a++)t+=s.stoleninfo[a];console.log(s),t+=s.contactMsg}else t=s.alertMsg;$("#results").html(t)})}},setPageType=function(){var e,r,t,s=window.location.pathname;return"mpepcmsaasfrontdoorcdnpnpssitescpiccipc-f5h4bcandddubbez"===window.location.hostname.split(".")[0]&&(t="https://csps-dev.con.rcmp-grc.gc.ca"),"mpepcmsaasfrontdoorcdnpnpssitescpiccipc-f5h4bcandddubbez"===window.location.hostname.split(".")[0]&&(t="https://csps-qa.con.rcmp-grc.gc.ca"),"cipc-cpic"===window.location.hostname.split(".")[0]&&(t="https://csps.con.rcmp-grc.gc.ca"),"cpic-cipc"===window.location.hostname.split(".")[0]&&(t="https://csps.con.rcmp-grc.gc.ca"),~s.indexOf("sve-rve-")?(r=t+"/queryVehicles?vin=",e="vehicle"):~s.indexOf("spt-rpt-")?(r=t+"/queryProperty?serialNumber=",e="property"):~s.indexOf("sfa-raf-")?(r=t+"/queryFirearms?serialNumber=",e="firearm"):~s.indexOf("sbo-rba-")?(r=t+"/queryBoats?criteria=",e="boat"):~s.indexOf("sbm-rmb-")?(r=t,e="boat-motor"):~s.indexOf("sbi-rve-")&&(r=t+"/queryBicycles?serialNumber=",e="bicycle"),{messageType:e,url:r}};
</script>
