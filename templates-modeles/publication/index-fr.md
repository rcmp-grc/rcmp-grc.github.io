---
layout: default
title: Page de publication
description: Une page pour afficher les publications officielles de la GRC, comme les rapports, les guides et les documents de référence
date_modified: 2026-08-11
lang: fr
lang_url: index.html
issued: 2026-08-10
custom_css: ../assets/css/provisional-bar.css
charts: true
custom_js: chart-example.js
---
<p class="lead">Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit</p>
<section class="alert alert-info">
	<h2 class="h3">Remarque</h2>
	<p>Donec vel nunc nec nisl aliquam viverra id non nibh. Integer id enim eros. Mauris aliquam mauris id dictum sodales. Praesent vel diam vestibulum eros efficitur tincidunt.</p>
</section>
<section class="alert alert-warning">
	<h2 class="h3">Avis important</h2>
	<p>Etiam ornare, arcu eu porta lacinia, dolor erat finibus risus, sed pretium urna eros et dolor. Nam erat mauris, malesuada vitae nisl mollis, lacinia vulputate urna.</p>
</section>
<section>
	<h2>Sur cette page</h2>
	<ul>
		<li><a href="#s1">Titre 1</a></li>
		<li><a href="#s2">Graphiques</a></li>
		<li><a href="#s3">Tableaux</a></li>
		<li><a href="#s4">Figures</a></li>
		<li><a href="#fn">Notes de bas de page</a></li>
	</ul>
</section>
<details class="brdr-tp brdr-rght brdr-bttm brdr-lft print-open cnt-wdth-lmtd">
	<summary>Renseignements sur les droits d’auteur / Rapport complet</summary>
	<p>Titre de la publication</p>
	<p class="small">© Sa Majesté le Roi du chef du Canada, représenté par la Gendarmerie royale du Canada, 2026</p>
	<p class="small">© Sa Majesté le Roi du chef du Canada, représenté par le ministre de la Sécurité publique, 2026</p>
	<ul class="small">
		<li>ISSN&nbsp;: 0000-0000</li>
		<li>Numéro de catalogue&nbsp;: XX00-00X</li>
	</ul>
	<p>Ce document est accessible sur le site Web du gouvernement du Canada à l'adresse <a href="https://www.canada.ca/fr.html">www.canada.ca</a>.</p>
	<p>Ce document est accessible en médias substituts sur demande.</p>
	<p><a href="https://open.canada.ca/fr">Disponible sur le Portail du gouvernement ouvert</a></p>
</details>
<details class="brdr-tp brdr-rght brdr-bttm brdr-lft print-open cnt-wdth-lmtd">
	<summary>Formats substituts</summary>
	<div class="row mrgn-rght-sm mrgn-lft-sm active">
		<a class="gc-dwnld-lnk" href="#">
		<div class="well gc-dwnld">
			<div class="row">
				<div class="col-xs-4 col-md-2">
					<p><img alt="" class="img-responsive thumbnail gc-dwnld-img" src="https://dummyimage.com/116x137/000/fff"></p>
				</div>
				<div class="col-xs-8 col-md-10">
					<p class="gc-dwnld-txt"><span>Titre de la publication</span> <span class="gc-dwnld-info">[<abbr title="Portable document format">PDF</abbr> - 0&nbsp;<abbr title="kilooctet">Ko</abbr>]</span></p>
					<p class="small">© Sa Majesté le Roi du chef du Canada, représenté par la Gendarmerie royale du Canada, 2026</p>
					<p class="small">© Sa Majesté le Roi du chef du Canada, représenté par le ministre de la Sécurité publique, 2026</p>
					<p class="small">Numéro de catalogue&nbsp;: 000<br>
						ISBN&nbsp;: 000
					</p>
				</div>
			</div>
		</div>
		</a>
	</div>
</details>
<details class="cnt-wdth-lmtd brdr-tp brdr-rght brdr-bttm brdr-lft print-open">
	<summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Liste des acronymes et abréviations</summary>
	<dl class="dl-horizontal mrgn-bttm-0">
		<dt>GRC</dt>
		<dd>Gendarmerie royale du Canada</dd>
	</dl>
</details>
<details class="cnt-wdth-lmtd brdr-tp brdr-rght brdr-bttm brdr-lft print-open">
	<summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Liste des graphiques</summary>
	<ul>
		<li><a href="#c1">Graphique 1&nbsp;: Titre du graphique</a></li>
	</ul>
</details>
<details class="cnt-wdth-lmtd brdr-tp brdr-rght brdr-bttm brdr-lft print-open">
	<summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Liste des tableaux</summary>
	<ul>
		<li><a href="#t1">Tableau 1&nbsp;: Tableau de base</a></li>
		<li><a href="#t2">Tableau 2&nbsp;: Tableau avec notes</a></li>
		<li><a href="#t3">Tableau 3&nbsp;: Table avec des cartes</a></li>
	</ul>
</details>
<details class="cnt-wdth-lmtd brdr-tp brdr-rght brdr-bttm brdr-lft print-open">
	<summary class="wb-toggle" data-toggle="{&quot;print&quot;:&quot;on&quot;}">Liste des figures</summary>
	<ul>
		<li><a href="#f1">Figure 1&nbsp;: Titre de la figure</a></li>
	</ul>
</details>
<section id="s1">
	<h2>Titre 1</h2>
	<details>
        <summary>Dans cette section</summary>
        <ul>
            <li>
                <a href="#s1-1">Sous-titre 1</a>
           </li>
        </ul>
    </details>
	{% include image.html link="https://dummyimage.com/480x600/000/fff" alt="Une image d'exemple de 400x600." caption="Une image d'exemple de 400x600 (Portrait)." format="side" %}
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<sup id="fn1-rf"><a class="fn-lnk" href="#fn1"><span class="wb-inv">note en bas de page</span> 1</a></sup> In eget faucibus orci. Phasellus vulputate eros non libero commodo, vel efficitur augue efficitur. Vivamus sed efficitur eros. Aenean vestibulum, mi ut gravida gravida, tellus felis egestas magna, quis malesuada lacus odio et elit. Suspendisse posuere, leo euismod lacinia tempus, lectus mi bibendum metus, at efficitur quam nisi in lacus. Nullam imperdiet sit amet sapien quis elementum. Pellentesque interdum facilisis condimentum. Vivamus nec ligula quam. Aliquam et est eget neque eleifend mattis sit amet eget ante. In volutpat egestas nulla eget convallis. Nunc ut justo et ligula laoreet tempor. Etiam dictum risus sit amet luctus consequat. Nullam fringilla varius diam, vulputate dapibus risus rutrum id. Vivamus porta nisl enim, ac laoreet enim sollicitudin eu.</p>
	<p>Donec vel nunc nec nisl aliquam viverra id non nibh. Integer id enim eros. Mauris aliquam mauris id dictum sodales. Praesent vel diam vestibulum eros efficitur tincidunt. Etiam ornare, arcu eu porta lacinia, dolor erat finibus risus, sed pretium urna eros et dolor. Nam erat mauris, malesuada vitae nisl mollis, lacinia vulputate urna. Etiam eleifend porta semper. Nam vitae diam orci. In eleifend ex nulla, eu maximus enim dignissim at. Nunc luctus eleifend mauris id fringilla. Ut fringilla eros nec justo placerat euismod. Integer a ultricies enim, nec commodo velit. Sed interdum volutpat congue. Sed sollicitudin lacus tortor, eget sollicitudin tortor semper quis. Nullam hendrerit lorem ac ipsum iaculis pharetra. Duis dapibus, quam quis posuere vestibulum, leo ante mollis quam, eget auctor lacus nunc vitae massa.</p>
	<section id="s1-1">
		<h3>Sous-titre 1</h3>
		<p>Vivamus a diam dui. Maecenas ipsum tortor, tempus at mauris quis, pharetra bibendum felis. Nunc venenatis finibus blandit. Nam consequat mollis sagittis. Morbi lobortis rhoncus sapien ut tincidunt. Fusce vitae leo a mauris facilisis elementum et et sapien. Donec risus leo, hendrerit et interdum non, lobortis in tortor. Pellentesque imperdiet ullamcorper eros. Proin eleifend at turpis ac condimentum. Duis malesuada augue quis arcu commodo placerat.</p>
		<div class="provisional bar bg-primary">
			<div class="container">
				<dl class="mrgn-tp-md">
					<dt>Full width bar</dt>
					<dd>Maecenas tempus in ipsum vel placerat. Aenean sagittis eros mauris. Aliquam volutpat erat eget risus egestas, at consequat nisi egestas. Vivamus orci augue, fermentum vitae vehicula non, lacinia et lectus. Quisque sodales ligula eget nibh aliquet, ut fringilla justo luctus. Nunc condimentum orci a magna ultrices, eu ultrices odio sollicitudin.</dd>
				</dl>
			</div>
		</div>
	</section>
</section>
<section id="s2">
	<h2>Graphiques</h2>
	<details>
        <summary>Dans cette section</summary>
        <ul>
            <li>
                <a href="#s2-1">Sous-titre 1</a>
           </li>
        </ul>
    </details>
	<p>Integer efficitur gravida mauris, et consequat nunc faucibus lobortis. Curabitur arcu lectus, elementum et finibus et, posuere a nunc. Praesent placerat efficitur est id auctor. Nam rhoncus ullamcorper ante, id vulputate magna porttitor sit amet. Integer imperdiet mollis tristique. Sed et egestas sapien. Mauris quis dapibus mauris, et semper quam.</p>
	
	<figure id="c1">
		<h3>Graphique 1&nbsp;: Titre du graphique</h3>
		<div class="chrt-cntnr col-xs-12 mrgn-bttm-md">
			<canvas id="chart-1">
				<p>Pour afficher le contenu graphique, JavaScript doit être active.</p>
			</canvas>
		</div>
		<div class="clearfix"></div>
		<figcaption class="table-responsive small">
			<table class="table table-bordered table-condensed">
				<caption class="text-left">Tableau du graphique</caption>
				<thead>
					<tr class="active">
						<th scope="col" class="text-right">Rouge</th>
						<th scope="col" class="text-right">Bleu</th>
						<th scope="col" class="text-right">Vert</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="text-right nowrap">5</td>
						<td class="text-right nowrap">12</td>
						<td class="text-right nowrap">6</td>
					</tr>
				</tbody>
			</table>
		</figcaption>
	</figure>
	<section id="s2-1">
		<h3>Sous-titre 1</h3>
		<p>Vivamus a diam dui. Maecenas ipsum tortor, tempus at mauris quis, pharetra bibendum felis. Nunc venenatis finibus blandit. Nam consequat mollis sagittis. Morbi lobortis rhoncus sapien ut tincidunt. Fusce vitae leo a mauris facilisis elementum et et sapien. Donec risus leo, hendrerit et interdum non, lobortis in tortor. Pellentesque imperdiet ullamcorper eros. Proin eleifend at turpis ac condimentum. Duis malesuada augue quis arcu commodo placerat.</p>
	</section>
</section>
<section id="s3">
	<h2>Tableaux</h2>
	<details>
        <summary>Dans cette section</summary>
        <ul>
            <li><a href="#s3-1">Tableau avec notes</a></li>
			<li><a href="#s3-2">Table with notes</a></li>
			<li><a href="#s3-3">Table avec des cartes</a></li>
        </ul>
    </details>
	<p>Quisque quis neque est. Nam at est aliquam, porttitor turpis sit amet, mattis tortor. Proin at sagittis massa. Sed cursus quam sed diam egestas, a finibus mi dictum. Nullam faucibus lorem at est scelerisque aliquam.</p>
	<section id="s3-1">
		<h3>Tableau de base</h3>
		<div class="table-responsive small" id="t1">
			<table class="table table-bordered table-condensed">
				<caption class="text-left">Tableau 1&nbsp;: Tableau de base</caption>
				<thead>
					<tr class="active">
						<th scope="col">Couleur</th>
						<th scope="col" class="text-right">2023</th>
						<th scope="col" class="text-right">2024</th>
						<th scope="col" class="text-right">2025</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Rouge</th>
						<td class="text-right">2</td>
						<td class="text-right">5</td>
						<td class="text-right">7</td>
					</tr>
					<tr>
						<th scope="row">Bleu</th>
						<td class="text-right">8</td>
						<td class="text-right">13</td>
						<td class="text-right">5</td>
					</tr>
					<tr>
						<th scope="row">Vert</th>
						<td class="text-right">0</td>
						<td class="text-right">1</td>
						<td class="text-right">4</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<section id="s3-2">
		<h3>Tableau avec notes</h3>
		<div class="table-responsive small" id="t2">
			<table class="table table-bordered table-condensed">
				<caption class="text-left">Tableau 2&nbsp;: Tableau avec notes</caption>
				<thead>
					<tr class="active">
						<th scope="col">Couleur</th>
						<th scope="col" class="text-right">2023 <sup id="t2-fn1-rf"><a class="fn-lnk" href="#t2-fn1"><span class="wb-inv">tableau 2 note de bas de page</span> 1</a></sup></th>
						<th scope="col" class="text-right">2024</th>
						<th scope="col" class="text-right">2025</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Rouge</th>
						<td class="text-right">2</td>
						<td class="text-right">5</td>
						<td class="text-right">7</td>
					</tr>
					<tr>
						<th scope="row">Bleu</th>
						<td class="text-right">8</td>
						<td class="text-right">13 <sup id="t2-fn2-rf"><a class="fn-lnk" href="#t2-fn2"><span class="wb-inv">tableau 2 note de bas de page</span> 2</a></sup></td>
						<td class="text-right">5</td>
					</tr>
					<tr>
						<th scope="row">Vert</th>
						<td class="text-right">0</td>
						<td class="text-right">1</td>
						<td class="text-right">4</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4">
							<section class="wb-fnote" id="t2-fn">
								<h3 class="wb-inv">Notes de bas de page du tableau 2</h3>
								<dl>
									<dt>Tableau 2, note de bas de page 1</dt>
									<dd id="t2-fn1">
										<p>2023 est l'année qui suit 2022.</p>
										<p class="fn-rtn"> <a href="#t1-fn1-rf"><span class="wb-inv">Retour à la référence du tableau 2 de la note de bas de page</span> 1</a></p>
									</dd>
									<dt>Tableau 2, note de bas de page 2</dt>
									<dd id="t2-fn2">
										<p>Le bleu a été abandonné l'année suivante.</p>
										<p class="fn-rtn"> <a href="#t1-fn2-rf"><span class="wb-inv">Retour à la référence du tableau 2 de la note de bas de page</span> 2</a></p>
									</dd>
								</dl>
							</section>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</section>
	<section id="s3-3">
		<h3>Table avec des cartes</h3>
		<div class="table-responsive small" id="t1">
			<table class="table provisional gc-table table-bordered">
				<caption class="text-left">Tableau 3&nbsp;: Table avec des cartes</caption>
				<thead>
					<tr class="active">
						<th scope="col">Couleur</th>
						<th scope="col" class="text-right">2023</th>
						<th scope="col" class="text-right">2024</th>
						<th scope="col" class="text-right">2025</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" data-label="Couleur">Rouge</th>
						<td class="text-right" data-label="2023">2</td>
						<td class="text-right" data-label="2024">5</td>
						<td class="text-right" data-label="2025">7</td>
					</tr>
					<tr>
						<th scope="row" data-label="Couleur">Bleu</th>
						<td class="text-right" data-label="2023">8</td>
						<td class="text-right" data-label="2024">13</td>
						<td class="text-right" data-label="2025">5</td>
					</tr>
					<tr>
						<th scope="row" data-label="Couleur">Vert</th>
						<td class="text-right" data-label="2023">0</td>
						<td class="text-right" data-label="2024">1</td>
						<td class="text-right" data-label="2025">4</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</section>
<section id="s4">
	<h2>Figures</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget faucibus orci. Phasellus vulputate eros non libero commodo, vel efficitur augue efficitur. Vivamus sed efficitur eros. Aenean vestibulum, mi ut gravida gravida, tellus felis egestas magna, quis malesuada lacus odio et elit.</p>
	<figure id="f1" class="well xcnt-wdth-lmtd">
		<img class="center-block img-responsive" alt="" src="https://dummyimage.com/720x450/000/fff">
		<p>Figure 1&nbsp;: Titre de la figure</p>
		<details>
			<summary>Description textuelle</summary>
			<p>Vivamus a diam dui. Maecenas ipsum tortor, tempus at mauris quis, pharetra bibendum felis.</p>
		</details>
	</figure>
</section>
<aside class="wb-fnote" role="note">
	<h2 id="fn">Notes de bas de page</h2>
	<dl>
		<dt id="fn1-dt">Note de bas de page 1</dt>
		<dd id="fn1">
			<p>Maecenas vel euismod ante, sit amet ultricies tortor. Sed ut malesuada nisi. Praesent quis leo sit amet erat porttitor maximus et et nisi.</p>
			<p class="fn-rtn"><a href="#fn1-rf"><span class="wb-inv">Retour à la référence de la note de bas de page </span>1</a></p>
		</dd>
	</dl>
</aside>