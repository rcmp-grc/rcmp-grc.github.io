---
layout: default
title: SpongeBob SquarePants
date_modified: 2026-05-08
lang: en
lang_url: wanted-recherchées-fr.html
issued: 2026-05-08
lead: Wanted
---

<style>
/* DANGER / DO-NOT-APPROACH banner */
#wp-danger-banner {
  background: #0b0c0c;
  color: #fff;
  border-left: 6px solid #b50315;
  padding: 14px 20px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 1em;
  line-height: 1.5;
}
#wp-danger-banner svg { flex-shrink: 0; margin-top: 2px; }
#wp-danger-banner strong { display: block; font-size: 1.05em; margin-bottom: 2px; }

/* WANTED frame — black/yellow hazard stripe surround */
#wp-photo-col .wp-wanted-frame {
  background: repeating-linear-gradient(
    -45deg,
    #f5d000 0px,
    #f5d000 12px,
    #0b0c0c 12px,
    #0b0c0c 24px
  );
  padding: 12px;
}
/* WANTED label bar — #f5d000 on #0b0c0c = 8.59:1, WCAG AAA */
#wp-photo-col .wp-wanted-label {
  background: #0b0c0c;
  color: #f5d000;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 6px 0 4px;
  margin: 0 0 0 0;
}
#wp-photo-col figure {
  margin: 0;
  border: none;
}
#wp-photo-col figcaption {
  background: #f3f2f1;
  padding: 12px 14px;
  font-size: 0.95em;
  border-top: 3px solid #0b0c0c;
}
#wp-photo-col figcaption strong {
  display: block;
  font-size: 1.05em;
  margin-bottom: 4px;
}
#wp-photo-col .file-number {
  color: #505a5f;
  font-size: 0.9em;
}

/* Charges tag list */
#wp-charges-list {
  list-style: none;
  padding: 0;
  margin: 0 0 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
#wp-charges-list li {
  background: #0b0c0c;
  color: #fff;
  font-size: 0.82em;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  text-transform: uppercase;
}

/* Summary description */
#wp-description {
  border-left: 4px solid #b50315;
  padding: 12px 16px;
  background: #fff8f8;
  margin-bottom: 0;
  line-height: 1.6;
}

/* Section headings — UK GOV rule */
#wp-page h2.wp-section-heading {
  font-size: 1.3em;
  border-bottom: 3px solid #0b0c0c;
  padding-bottom: 6px;
  margin-top: 0;
  margin-bottom: 16px;
}

/* Definition lists */
#wp-page .dl-horizontal dt { font-weight: 700; color: #0b0c0c; }
#wp-page .dl-horizontal dd { color: #0b0c0c; margin-bottom: 8px; }

/* Tip CTA box */
#wp-tip-box {
  border: 3px solid #0b0c0c;
  padding: 20px 24px;
  background: #fff;
}
#wp-tip-box .tip-headline {
  font-size: 1.15em;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
}
#wp-tip-box .tip-numbers {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
}
#wp-tip-box .tip-channel {
  background: #f3f2f1;
  border-left: 4px solid #b50315;
  padding: 10px 14px;
  min-width: 180px;
  flex: 1 1 180px;
}
#wp-tip-box .tip-channel strong {
  display: block;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
  color: #505a5f;
}
#wp-tip-box .tip-channel a {
  font-size: 1.2em;
  font-weight: 700;
  color: #0b0c0c;
  text-decoration: underline;
}
#wp-tip-box .tip-channel a:focus {
  outline: 3px solid #fd0;
  outline-offset: 2px;
  background: #fd0;
  color: #0b0c0c;
}
#wp-tip-box .tip-anonymous-note {
  font-size: 0.88em;
  color: #505a5f;
  margin-top: 12px;
  margin-bottom: 0;
}

/* Gallery thumbnails */
#wp-gallery .wb-lbx li a {
  display: block;
  border: 2px solid transparent;
}
#wp-gallery .wb-lbx li a:focus,
#wp-gallery .wb-lbx li a:hover {
  border-color: #1d70b8;
  outline: 3px solid #fd0;
  outline-offset: 0;
}

/* Media contact */
#wp-media-box {
  background: #f3f2f1;
  border-left: 4px solid #505a5f;
  padding: 14px 18px;
}

/* Focus supplement */
#wp-page a:focus {
  outline: 3px solid #fd0;
  outline-offset: 2px;
  background: #fd0;
  color: #0b0c0c;
}

@media (max-width: 767px) {
  #wp-tip-box .tip-numbers { flex-direction: column; }
}
</style>

<div id="wp-page">

  <!-- ── DO NOT APPROACH WARNING ──────────────────────────────────────── -->
  <div aria-live="assertive" id="wp-danger-banner" role="alert">
    <svg aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path d="M1 21L12 2l11 19H1zm11-3h2v-2h-2v2zm0-4h2v-4h-2v4z"/>
    </svg>
    <div>
      <strong>Warning — Do not approach this person.</strong>
      This suspect may be armed and dangerous. Do not attempt to apprehend them yourself. Report any sightings immediately through the channels below.
    </div>
  </div>

  <!-- ── PHOTO + CHARGES ───────────────────────────────────────────────── -->
  <div class="row mrgn-bttm-md mrgn-tp-md">

    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3" id="wp-photo-col">
      <div class="wp-wanted-frame">
        <p class="wp-wanted-label">Wanted</p>
        <figure>
          <img
            alt="Mugshot of wanted person SpongeBob SquarePants"
            class="img-responsive"
            src="https://dummyimage.com/480x600/000/fff"
            width="480"
            height="600"
          >
          <figcaption>
            <strong>SpongeBob SquarePants</strong>
            <div class="d-flex file-number">
              <span class="mrgn-rght-sm">File number:</span>
              <span>32473043</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="col-md-8 col-md-offset-2 mrgn-tp-md">
      <p class="mrgn-bttm-xs"><strong>Charges:</strong></p>
      <ul id="wp-charges-list" aria-label="Charges against SpongeBob SquarePants">
        <li>Theft of Krabby Patty formula</li>
        <li>Conspiracy</li>
        <li>Unlawfully at large</li>
      </ul>
      <p id="wp-description" class="mrgn-tp-md">
        SpongeBob SquarePants is a good-natured but allegedly deceptive sea sponge currently wanted in connection with the theft of the Krabby Patty secret formula. He was last observed in the Bikini Bottom area. He is known to frequent the Krusty Krab and Jellyfish Fields, and may be in the company of Patrick Star. Approach is not advised — contact authorities immediately if located.
      </p>
    </div>

  </div>

  <!-- ── PERSONAL INFO + LAST KNOWN LOCATION ──────────────────────────── -->
  <div class="row">

    <div class="col-md-6">
      <section aria-labelledby="s2-heading" class="mrgn-bttm-lg" id="s2">
        <h2 class="mrgn-tp-sm wp-section-heading" id="s2-heading">Personal information</h2>
        <dl class="dl-horizontal brdr-0">
          <dt>Name</dt>
          <dd>SpongeBob SquarePants</dd>
          <dt>Also known as</dt>
          <dd>SpongeBoy, SB</dd>
          <dt>Year of birth</dt>
          <dd>1986</dd>
          <dt>Age</dt>
          <dd>Not applicable</dd>
          <dt>Gender</dt>
          <dd>Male</dd>
          <dt>Height</dt>
          <dd>10 <abbr title="centimetres">cm</abbr> (4 <abbr title="inches">in</abbr>)</dd>
          <dt>Weight</dt>
          <dd>28 g (1 oz)</dd>
          <dt>Hair colour</dt>
          <dd>None</dd>
          <dt>Left eye colour</dt>
          <dd>Blue</dd>
          <dt>Right eye colour</dt>
          <dd>Blue</dd>
          <dt>Ethnicity</dt>
          <dd>Not applicable (fictional species)</dd>
          <dt>Build</dt>
          <dd>Rectangular / sponge-like</dd>
          <dt>Complexion</dt>
          <dd>Yellow, porous</dd>
        </dl>
      </section>
    </div>

    <div class="col-md-6">

      <section aria-labelledby="s3-heading" class="mrgn-bttm-lg" id="s3">
        <h2 class="mrgn-tp-sm wp-section-heading" id="s3-heading">Last known location</h2>
        <dl class="dl-horizontal brdr-0">
          <dt>Date last seen</dt>
          <dd><time datetime="1999-05-01T00:00:00Z">1999-05-01</time></dd>
          <dt>Time</dt>
          <dd>Approximately N/A</dd>
          <dt>Location</dt>
          <dd>Bikini Bottom, Pacific Ocean</dd>
          <dt>Last known clothing</dt>
          <dd>White short-sleeve shirt, red tie, brown square pants, black shoes</dd>
          <dt>Likely whereabouts</dt>
          <dd>Krusty Krab restaurant; Jellyfish Fields; Patrick Star's residence</dd>
        </dl>
      </section>

      <section aria-labelledby="s4-heading" class="mrgn-bttm-lg" id="s4">
        <h2 class="mrgn-tp-sm wp-section-heading" id="s4-heading">Identifying features</h2>
        <dl class="dl-horizontal brdr-0">
          <dt>Hair style</dt>
          <dd>None</dd>
          <dt>Facial hair</dt>
          <dd>None</dd>
          <dt>Distinctive features</dt>
          <dd>Square body shape, large front teeth, porous sponge texture, prominent freckles</dd>
        </dl>
      </section>

    </div>

  </div>

  <!-- ── IMAGE GALLERY ─────────────────────────────────────────────────── -->
  <section aria-labelledby="s5-heading" class="mrgn-bttm-lg wb-lbx lbx-gal" id="wp-gallery">
    <h2 class="mrgn-tp-sm wp-section-heading" id="s5-heading">Image gallery</h2>
    <ul aria-label="Additional photographs of SpongeBob SquarePants" class="list-inline">
      <li>
        <a href="https://dummyimage.com/480x600/000/fff" title="SpongeBob SquarePants — enlarged view">
          <img alt="SpongeBob SquarePants character image" src="https://dummyimage.com/175x175/000/fff">
        </a>
      </li>
      <li>
        <a href="https://dummyimage.com/480x600/333/fff" title="SpongeBob and friends illustration — enlarged view">
          <img alt="SpongeBob and friends illustration" src="https://dummyimage.com/175x175/333/fff">
        </a>
      </li>
    </ul>
  </section>

  <!-- ── TIP / REPORT ──────────────────────────────────────────────────── -->
  <section aria-labelledby="s6-heading" class="mrgn-bttm-lg" id="s6">
    <h2 class="mrgn-tp-sm wp-section-heading" id="s6-heading">Do you have any information?</h2>
    <div id="wp-tip-box">
      <p class="tip-headline">If you have information, please contact us — you can remain completely anonymous.</p>
      <p>If you have information regarding SpongeBob SquarePants or his whereabouts, report through one of the following channels. <strong>Do not approach the suspect.</strong></p>
      <div class="tip-numbers" role="list">
        <div class="tip-channel" role="listitem">
          <strong>Emergency</strong>
          <a href="tel:911" aria-label="Call 911 for emergencies">9-1-1</a>
        </div>
        <div class="tip-channel" role="listitem">
          <strong>Crime Stoppers (anonymous)</strong>
          <a href="tel:18002228477" aria-label="Call Crime Stoppers at 1-800-222-TIPS">1-800-222-<abbr title="8477">TIPS</abbr></a>
        </div>
        <div class="tip-channel" role="listitem">
          <strong>Local RCMP detachment</strong>
          <a href="https://rcmp.ca/en/contact-rcmp">Find a detachment</a>
        </div>
      </div>
      <p class="tip-anonymous-note">
        Tips submitted through Crime Stoppers are fully anonymous — you will never need to speak to an investigator.
      </p>
    </div>
  </section>

  <!-- ── MEDIA CONTACT ─────────────────────────────────────────────────── -->
  <section aria-labelledby="s7-heading" id="s7">
    <h2 class="mrgn-tp-sm wp-section-heading" id="s7-heading">Media contact</h2>
    <div id="wp-media-box">
      <p>Nickelodeon Media Relations – Animation Department</p>
    </div>
  </section>

</div>
