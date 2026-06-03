---
layout: default
title: Test
description:
date_modified: 2026-05-04
lang: en
lang_url: index-fr.html
author:
creator:
subject:
issued: 2026-05-04
---

<div class="row">
	<div class="col-md-3 mrgn-bttm-md">
		<section id="filters">
			<form aria-controls="datatable" class="wb-tables-filter" data-bind-to="datatable">
				<h2 class="mrgn-tp-0">Filters</h2>
				<section class="form-group">
					<h3 class="h4 mrgn-tp-lg mrgn-bttm-sm">
						<label for="dt-language">Language designation</label>
					</h3>
					<select name="dt-language" id="dt-language" data-column="2" class="form-control">
						<option value="">All</option>
						<option value="English and French">English and French</option>
						<option value="English only">English only</option>
						<option value="French only">French only</option>
					</select>
				</section>
				<button aria-controls="datatable" class="btn btn-primary btn-block btn-sm mrgn-tp-lg" type="submit">Apply filters</button>
				<button class="btn btn-default btn-block btn-sm" type="reset">Clear filters</button>
			</form>
		</section>
	</div>
	<div class="col-md-9">
		<table id="datatable" class="nws-tbl table wb-tables table-striped table-condensed" data-wb-tables="{ &quot;order&quot;: [[0, &quot;asc&quot;], [1, &quot;asc&quot;]], &quot;pageLength&quot;: 100, &quot;lengthChange&quot;: false}">
			<thead>
				<tr>
					<th class="hidden">Order</th>
					<th class="hidden">Detachment name</th>
					<th class="hidden">Language designation</th>
					<th class="hidden">Emergency contact</th>
					<th class="hidden">General information</th>
					<th class="hidden">Location</th>
					<th class="hidden">Services available</th>
				</tr>
			</thead>
			<tbody>
				<tr id="20190">
					<td class="hidden">2</td>
					<td class="nws-tbl-desc mrgn-lft-md">
						<h2 class="mrgn-tp-0">Test Detachment</h2>
						<figure class="cn-inline-figure width=50">
          <img alt="Detachment photo" class="img-responsive" src="https://dummyimage.com/600x400/000/fff">
          <figcaption>
            Photo: Bikini Bottom Detachment / RCMP
          </figcaption>
        </figure>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Service language</dt>
							<dd>English and French</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl class="alert alert-danger">
							<dt>For emergency assistance</dt>
							<dd>Dial 9-1-1</dd>
						</dl>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Hours of operation</dt>
								<dd>Please contact the detachment directly to find out their hours of operation.</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Non-emergency contact information</dt>
								<dd>
									<dl>
										<dt>General inquiries</dt>
										<dd>867-862-5555</dd>
									</dl>
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<div class="col-md-6">
							<dl>
								<dt>Location</dt>
								<dd>
									<a href="https://www.google.ca/maps?q=62.3831637285805,-140.8743807289492&hl=en-CA" target="_blank">121947 Alaska Highway<br>Beaver Creek, Yukon</a>
								</dd>
							</dl>
						</div>
						<div class="col-md-6">
							<dl>
								<dt>Mailing address</dt>
								<dd>
									<abbr>PO</abbr> Box 32<br>Beaver Creek YT&#160; Y0B 1A0
								</dd>
							</dl>
						</div>
						<div class="clearfix"></div>
					</td>
					<td class="nws-tbl-desc mrgn-lft-lg">
						<dl>
							<dt>Services and accessibility information</dt>
							<dd>
								<ul>
									<li <i class="fa-solid fa-wheelchair-move"></i>>Access For People With Reduced Mobility</li>
									<li>Assistance Dogs Welcome</li>
									<li>First Aid</li>
									<li>Twenty Four Hr Access</li>
									<li>Automatic Doors</li>
								</ul>							
							</dd>
						</dl>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
