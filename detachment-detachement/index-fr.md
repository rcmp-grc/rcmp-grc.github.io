---
layout: default
title: Test
description: Description de ma page
date_modified: 2026-05-04
lang: fr
lang_url: index.html
author:
creator:
subject:
issued: 2026-05-04
---
<div class="row">
	<div class="col-md-3 mrgn-bttm-md">
		<section id="filters">
			<form aria-controls="datatable" class="wb-tables-filter" data-bind-to="datatable">
				<h2 class="mrgn-tp-0">Filtres</h2>
				<section class="form-group">
					<h3 class="h4 mrgn-tp-lg mrgn-bttm-sm">
						<label for="dt-location">Désignation linguistique</label>
					</h3>
					<select name="dt-location" id="dt-location" data-column="2" class="form-control">
						<option value="">Tous</option>
						<option value="Anglais et français">Anglais et français</option>
						<option value="Anglais seulement">Anglais seulement</option>
						<option value="Français seulement">Français seulement</option>
					</select>
				</section>
				<button aria-controls="datatable" class="btn btn-primary btn-block btn-sm mrgn-tp-lg" type="submit">Appliquer les filtres</button>
				<button class="btn btn-default btn-block btn-sm" type="reset">Réinitialiser les filtres</button>
			</form>
		</section>
	</div>
	<div class="col-md-9">
		<table id="datatable" class="nws-tbl table wb-tables table-striped table-condensed" data-wb-tables="{ &quot;order&quot;: [[0, &quot;asc&quot;], [1, &quot;asc&quot;]], &quot;pageLength&quot;: 100, &quot;lengthChange&quot;: false}">
			<thead>
				<tr>
					<th class="hidden">Ordre</th>
					<th class="hidden">Nom du détachement</th>
					<th class="hidden">Désignation linguistique</th>
					<th class="hidden">Contact en cas d'urgence</th>
					<th class="hidden">>Renseignements généraux</th>
					<th class="hidden">Emplacement</th>
					<th class="hidden">Services disponibles</th>
				</tr>
			</thead>
			<tbody>
				<tr id="20190">
					<td class="hidden">Beaver Creek</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de test</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais et français</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Veuillez communiquer directement avec le détachement pour connaître ses heures d'ouverture.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-862-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-862-7804</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=62.3831637285805,-140.8743807289492&hl=fr-CA" target="_blank">121947 autoroute de l'Alaska<br> Beaver Creek (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 32<br> Beaver Creek YT&#160; Y0B 1A0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="23322">
					<td class="hidden">Carcross</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Carcross</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Veuillez communiquer directement avec le détachement pour connaître ses heures d'ouverture.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-821-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-821-3705</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=60.166842761232076,-134.70471147722677&hl=fr-CA" target="_blank">11 chemin Caribou (Route 5)<br> Carcross (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 129<br> Carcross YT&#160; Y0B 1B0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="20196">
					<td class="hidden">Carmacks</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Carmacks</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Veuillez communiquer directement avec le détachement pour connaître ses heures d'ouverture.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-863-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-863-5012</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=62.08977602096233,-136.2892672357153&hl=fr-CA" target="_blank">151 promenade River<br> Carmacks (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 133<br> Carmacks YT&#160; Y0B 1C0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="20060">
					<td class="hidden">Dawson City</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Dawson City</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd> Du lundi au vendredi<br> De 9&#160;h à 12&#160;h<br> De 13&#160;h&#160;30 à 17&#160;h </dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-993-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-993-5936</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=64.05703780887602,-139.44013443540706&hl=fr-CA" target="_blank">402 rue Front<br> Dawson City (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 159<br> Dawson YT&#160; Y0B 1G0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="19914">
					<td class="hidden">Faro</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Faro</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-994-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-994-2452</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=62.230668086728734,-133.3566635472941&hl=fr-CA" target="_blank">24 avenue Kitza<br> Faro (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 310<br> Faro YT&#160; Y0B 1K0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="20189">
					<td class="hidden">Haines Junction</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Haines Junction</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais et français</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd> Du lundi au vendredi<br> De 8&#160;h à 12&#160;h<br> De 13&#160;h à 16&#160;h&#160;30 </dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-634-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-634-2428</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=60.75197178125077,-137.5107280314997&hl=fr-CA" target="_blank">157 route Haines<br> Haines Junction (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 5340<br> Haines Junction YT&#160; Y0B 1L0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="20001">
					<td class="hidden">Mayo</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Mayo</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-996-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-996-2801</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=63.59558344607216,-135.89777955257398&hl=fr-CA" target="_blank">208 6e Avenue<br> Mayo (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 70<br> Mayo YT&#160; Y0B 1M0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="20194">
					<td class="hidden">Old Crow</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement d'Old Crow</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais et français</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-966-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-966-3183</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=67.5690690966879,-139.8324246923276&hl=fr-CA" target="_blank">Old Crow (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 91<br> Old Crow YT&#160; Y0B 1N0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="31043">
					<td class="hidden">Pelly Crossing</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Pelly Crossing</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-537-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-537-3303</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=62.82380827372366,-136.5775172208898&hl=fr-CA" target="_blank">Pelly Crossing (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 10<br> Pelly Crossing YT&#160; Y0B 1P0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="20184">
					<td class="hidden">Ross River</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Ross River</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-969-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-969-2613</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=61.9822740918631,-132.45395262314642&hl=fr-CA" target="_blank">274 rue Kulan<br> Ross River (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 98<br> Ross River YT&#160; Y0B 1S0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="19922">
					<td class="hidden">Teslin</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Teslin</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-390-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-390-2905</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=60.164617768451336,-132.7245611215806&hl=fr-CA" target="_blank">9 avenue Johnston<br> Teslin (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 29<br> Teslin YT&#160; Y0A 1B0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="36692">
					<td class="hidden">Watson Lake</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Détachement de Watson Lake</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais seulement</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd> Du lundi au vendredi<br> De 9&#160;h à 17&#160;h </dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-536-5555</dd>
										<dt>Télécopieur</dt>
										<dd>867-536-7425</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=60.05559404325373,-128.67228345534656&hl=fr-CA" target="_blank">162 sentier Adela<br> Watson Lake (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> Case postale 40<br> Watson Lake YT&#160; Y0A 1C0 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>Les services disponibles peuvent varier. Veuillez communiquer directement avec le détachement pour obtenir des renseignements sur les services offerts.</dd>
						</dl>
					</td>
				</tr>
				<tr id="19978">
					<td class="hidden">1</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Quartier général de la Division M et Détachement de Whitehorse</h2>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Langue de service</dt>
							<dd>Anglais et français</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>En cas d'urgence</dt>
							<dd>Composez le 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Heures d'ouverture</dt>
								<dd> Du lundi au vendredi<br> De 9&#160;h à 16&#160;h </dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Informations de contact non urgentes</dt>
								<dd>
									<dl>
										<dt>Demandes générales</dt>
										<dd>867-667-5551</dd>
										<dt>Télécopieur</dt>
										<dd>867-393-6791</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Emplacement</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=60.71812221174552,-135.056315169137&hl=fr-CA" target="_blank">4100 4e Avenue<br> Whitehorse (Yukon)</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Adresse postale</dt>
								<dd> 4100 4e Av<br> Whitehorse YT&#160; Y1A 1H5 </dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services disponibles</dt>
							<dd>
								<ul class="colcount-sm-2">
									<li>Déclaration électronique d'un crime</li>
									<li>Empreintes digitales</li>
									<li>Renseignements généraux</li>
								</ul>
							</dd>
						</dl>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
