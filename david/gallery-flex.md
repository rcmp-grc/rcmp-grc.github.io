---
layout: default
title: Image gallery flexbox fix
date_modified: 2026-09-11
lang: en
lang_url: gallery-flex.html
---

<style>
.wb-lbx:has(#isFlex:checked) {
& > ul {
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5px;
> li {
	padding: 0;
	margin: 0;
}
}
}
</style>

<section class="wb-lbx lbx-gal">
  <h2>Image gallery</h2>
  <label>Flex <input type="checkbox" id="isFlex"></label>
  <ul class="list-inline">
		<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
		<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
		<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
  	<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
  	<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
  	<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
  	<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
  	<li><a href="#"><img src="https://dummyimage.com/150x150/f74af7/050505.png"></a></li>
  </ul>
</section>
