---
layout: careers
title: Readiness check
date_modified: 2026-06-10
lang: en
lang_url: readiness-preparation-fr.html
breadcrumbs:
  - label: "RCMP careers"
    url: "careers-carrieres-2/careers-carrieres-en.html"
  - label: "Police officer careers"
    url: "careers-carrieres-2/officer-agent-en.html"
custom_css: /assets/css/careers.css
---

<div aria-live="polite" aria-atomic="true" class="rc-live-region sr-only" id="live-region"></div>
<div class="rc-quiz-wrap">
  <noscript>
    <div class="alert alert-warning">
      <p>This quiz requires JavaScript to be enabled in your browser. Please enable JavaScript and reload the page to take the readiness check.</p>
    </div>
  </noscript>
  <div class="rc-intro" id="quiz-intro">
    <p>Take this short quiz to know if you're ready to apply to be a police officer with the RCMP.</p>
  </div>
  <div id="quiz-section">
    <div class="rc-progress-bar-wrap" role="region" aria-label="Quiz progress">
      <div class="rc-progress-meta">
        <span id="progress-text">Question <span id="current-question">1</span> of <span id="total-questions">7</span></span>
        <span id="progress-percent" aria-hidden="true">0%</span>
      </div>
      <div
        class="rc-progress-track"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Quiz completion"
      >
        <div class="rc-progress-fill" id="progress-fill"></div>
      </div>
    </div>
    <form id="quiz-form" novalidate>
      <div id="question-container"></div>
      <div class="rc-nav" role="navigation" aria-label="Quiz navigation">
        <button type="button" id="prev-button" class="rc-btn rc-btn--secondary" aria-label="Go to previous question" disabled>
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          Previous
        </button>
        <button type="button" id="next-button" class="rc-btn rc-btn--primary" aria-label="Go to next question" disabled>
          Next
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  </div>
  <div class="hidden" id="results-section" role="region" aria-live="polite" aria-atomic="true"></div>
</div>

<script>
(function () {
  "use strict";

  /* ── Questions ── */
  var questions = [
    {
      number: 1,
      title: "RCMP core values",
      titleHTML: "<abbr>RCMP</abbr> core values",
      details:
        '<abbr>RCMP</abbr> officers and cadets are expected to consistently live and demonstrate the <abbr>RCMP</abbr>\'s core values; <strong><a href="https://rcmp.ca/en/corporate-information/royal-canadian-mounted-police-core-values" target="_blank" rel="noopener noreferrer" aria-label="Royal Canadian Mounted Police core values - Opens in a new window">take responsibility, show respect, serve with excellence, demonstrate compassion and act with integrity</a></strong> both on and off duty.',
      bullets: [],
      question: "Are you willing to live by the <abbr>RCMP</abbr>'s core values in all areas of your life? This means:",
      questionBullets: [
        "taking responsibility for your actions, mistakes and decisions",
        "treating all people with respect, even if they are disrespectful toward you",
        "acting with integrity, honesty and using ethical judgement, even when it is difficult or unpopular",
        "showing compassion toward people in crisis, including victims, offenders and vulnerable populations",
        "striving for excellence by accepting feedback, correction and high standards of conduct",
      ],
      info: "The <abbr>RCMP</abbr> core values guide how officers treat the public, colleagues, partners and people in their care, especially in stressful or challenging situations. At Depot, failure to demonstrate these values will result in termination from the Cadet Training Program.",
      link: "/careers-carrieres/police-officer",
    },
    {
      number: 2,
      title: "Operational driving",
      titleHTML: "Operational driving",
      details: "<abbr>RCMP</abbr> officers are expected to handle driving in various scenarios with confidence.",
      bullets: [],
      question: "Would you be comfortable driving in these conditions?",
      questionBullets: [
        "emergency response driving, driving fast",
        "pursuit scenarios, chasing another vehicle",
        "rural and remote rough terrain driving",
        "extreme weather conditions",
        "transporting people who are in custody",
      ],
      info: "You must have a valid, unrestricted Canadian driver's licence before you apply. That proves you can drive unsupervised at any time, on any road, with as many passengers as there are seatbelts.",
      link: "/careers-carrieres/police-officer",
    },
    {
      number: 3,
      title: "Use of force and police tools",
      titleHTML: "Use of force and police tools",
      details:
        "As a police officer, your main responsibility is to protect life, including your own. You're required to carry and use firearms and other police tools as needed. Some of these tools include:",
      bullets: ["firearms (pistols)", "Oleoresin Capsicum (pepper) spray", "handcuffs", "conducted energy weapons (taser)", "batons"],
      question: "Would you be comfortable taking the following actions as needed?",
      questionBullets: [
        "restraining a person with handcuffs",
        "causing injury in effort to control a person physically (for example, punching or kicking)",
        "using aerosols or a baton (not for causing serious injury)",
        "using lethal force (likely causing life-threatening injury or death)",
      ],
      info: "During cadet training at Depot, you will learn how to safely handle a firearm and various other police tools used to diffuse an incident. Every use of force is documented. Officers must be ready to justify actions in reports and potentially in court.",
      link: "/careers-carrieres/police-officer",
    },
    {
      number: 4,
      title: "Physical fitness",
      titleHTML: "Physical fitness",
      details: "Policing is a physically demanding job. You must be physically fit before arriving at Depot for cadet training. To be fit for Depot, you should be able to:",
      bullets: [
        "run 5 km without stopping in 30 to 35 minutes",
        "do 10 or more push-ups in a row from your toes, lowering your chin or chest to the ground",
        "lift and carry 45 lbs of weight 50 metres without stopping",
        "complete an intense 30-minute workout that keeps your heart rate up",
        "exercise 5 days per week",
        "run 500 metres under 2 minutes 25 seconds",
      ],
      question: "Do you currently meet these fitness standards?",
      questionBullets: [],
      info: 'Arrive to the <abbr>RCMP</abbr> Training Academy ready to pass the <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Police Fitness Assessment - Opens in a new window">Police Fitness Assessment <span class="sr-only">(opens in new window)</span></a> within the first few weeks of the training program.',
      link: "/careers-carrieres/police-officer",
    },
    {
      number: 5,
      title: "6-month training",
      titleHTML: "6-month training",
      details: "",
      bullets: [],
      question: "Are you willing to:",
      questionBullets: [
        "spend 6 months in Regina, Saskatchewan at the <abbr>RCMP</abbr> training academy",
        "be away from friends and family",
        "live in co-ed dorms onsite at Depot",
        "learn and study Canadian law",
      ],
      info: "Training is a full-time commitment with evening and weekend assignments. The environment is meant to challenge you. If terminated from the Cadet Training Program for violations of core values, you may be required to repay your training allowance (up to $26,000).",
      link: "/careers-carrieres/police-officer",
    },
    {
      number: 6,
      title: "Relocation",
      titleHTML: "Relocation",
      details: "",
      bullets: [],
      question: "Are you willing to move anywhere in Canada after graduation from the Cadet Training Program?",
      questionBullets: [],
      info: "The <abbr>RCMP</abbr> is a national police service. While preference is considered, postings are based on operational needs, including northern and remote regions.",
      link: "/careers-carrieres/police-officer",
    },
    {
      number: 7,
      title: "Shift work",
      titleHTML: "Shift work",
      details: "",
      bullets: [],
      question: "Are you willing to work nights, weekends, and/or holidays?",
      questionBullets: [],
      info: "Policing is a 24/7 service. You will need to respond to a call if it happens within your shift. You will be asked to stay late. While on-call, you may get called in outside of regular hours. You will be compensated for any overtime worked.",
      link: "/careers-carrieres/police-officer",
    },
  ];

  /* ── State ── */
  var currentIndex = 0;
  var answers = new Array(questions.length).fill(null);

  /* ── DOM refs ── */
  var questionContainer = document.getElementById("question-container");
  var prevButton        = document.getElementById("prev-button");
  var nextButton        = document.getElementById("next-button");
  var quizSection       = document.getElementById("quiz-section");
  var resultsSection    = document.getElementById("results-section");
  var progressFill      = document.getElementById("progress-fill");
  var currentQSpan      = document.getElementById("current-question");
  var totalQSpan        = document.getElementById("total-questions");
  var progressPercent   = document.getElementById("progress-percent");
  var progressTrack     = document.querySelector(".rc-progress-track");
  var liveRegion        = document.getElementById("live-region");
  var quizIntro         = document.getElementById("quiz-intro");
  var quizScrollTarget  = document.getElementById("quiz-section");

  totalQSpan.textContent = questions.length;

  /* ── Helpers ── */
  function announce(msg) {
    liveRegion.textContent = "";
    setTimeout(function () { liveRegion.textContent = msg; }, 50);
  }

function scrollToQuiz() {
  var target = document.querySelector(".rc-progress-bar-wrap") || quizScrollTarget;
  if (target) {
    var offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
}

  /* ── Render ── */
  function renderQuestion() {
    var q = questions[currentIndex];

    if (currentIndex === 0) {
      quizIntro.classList.remove("hidden");
    } else {
      quizIntro.classList.add("hidden");
    }

    /* Body content (details + detail bullets) */
    var bodyHTML = "";
    if (q.details || q.bullets.length) {
      bodyHTML += '<div class="rc-question-body">';
      if (q.details) bodyHTML += "<p>" + q.details + "</p>";
      if (q.bullets.length) {
        bodyHTML += "<ul>";
        q.bullets.forEach(function (b) { bodyHTML += "<li>" + b + "</li>"; });
        bodyHTML += "</ul>";
      }
      bodyHTML += "</div>";
    }

    /* Legend (question stem + question bullets) */
    var legendInner = "<strong>" + q.question + "</strong>";
    if (q.questionBullets.length) {
      legendInner += "<ul>";
      q.questionBullets.forEach(function (b) { legendInner += "<li>" + b + "</li>"; });
      legendInner += "</ul>";
    }

    /* Radio tiles */
    var yesChecked = answers[currentIndex] === "yes" ? "checked" : "";
    var noChecked  = answers[currentIndex] === "no"  ? "checked" : "";

    var html = [
      '<div class="rc-question-card">',
        '<div class="rc-question-card__body">',
          '<h2 class="rc-question-title" id="q-title-' + q.number + '" tabindex="-1">' + q.titleHTML + '</h2>',
          bodyHTML,
          '<fieldset class="rc-fieldset">',
            '<legend class="rc-legend" id="q-legend-' + q.number + '">' + legendInner + '</legend>',
          '</fieldset>',
        '</div>',
        '<div class="rc-question-card__answers">',
          '<ul class="rc-options" role="list" aria-labelledby="q-legend-' + q.number + '">',
            '<li class="rc-option">',
              '<input type="radio" id="yes-' + q.number + '" name="q-' + q.number + '" value="yes" ' + yesChecked + ' aria-describedby="q-legend-' + q.number + '">',
              '<label for="yes-' + q.number + '">Yes</label>',
            '</li>',
            '<li class="rc-option">',
              '<input type="radio" id="no-' + q.number + '" name="q-' + q.number + '" value="no" ' + noChecked + ' aria-describedby="q-legend-' + q.number + '">',
              '<label for="no-' + q.number + '">No</label>',
            '</li>',
          '</ul>',
          '<div class="rc-info-panel ' + (answers[currentIndex] !== null ? "show" : "") + '" id="info-' + q.number + '" role="note" aria-label="Additional information">',
            '<h3 class="rc-info-panel__heading">Additional information</h3>',
            '<p>' + q.info + '</p>',
          '</div>',
        '</div>',
      '</div>',
    ].join("");

    questionContainer.innerHTML = html;

    /* Bind radio events */
    var yesRadio = document.getElementById("yes-" + q.number);
    var noRadio  = document.getElementById("no-"  + q.number);
    yesRadio.addEventListener("change", function () { selectAnswer("yes"); });
    noRadio.addEventListener("change",  function () { selectAnswer("no");  });

    updateProgress();
    updateNav();

    var heading = document.getElementById("q-title-" + q.number);
    if (heading) { heading.focus(); }

    announce("Question " + (currentIndex + 1) + " of " + questions.length + ": " + q.title);
  }

  /* ── Select answer ── */
  function selectAnswer(value) {
    var wasNull = answers[currentIndex] === null;
    answers[currentIndex] = value;

    var q = questions[currentIndex];
    var infoPanel = document.getElementById("info-" + q.number);
    if (infoPanel) {
      infoPanel.classList.add("show");
      if (wasNull) {
        announce("Additional information is now available below the answer choices.");
      }
    }

    updateNav();
  }

  /* ── Progress ── */
  function updateProgress() {
    var answered = answers.filter(function (a) { return a !== null; }).length;
    var pct = Math.round((answered / questions.length) * 100);
    progressFill.style.width = pct + "%";
    if (progressTrack) { progressTrack.setAttribute("aria-valuenow", pct); }
    currentQSpan.textContent = currentIndex + 1;
    progressPercent.textContent = pct + "%";
  }

  /* ── Navigation state ── */
  function updateNav() {
    prevButton.style.display = currentIndex === 0 ? "none" : "";
    prevButton.disabled = currentIndex === 0;

    var hasAnswer = answers[currentIndex] !== null;
    nextButton.disabled = !hasAnswer;

    if (currentIndex === questions.length - 1) {
      nextButton.innerHTML = 'View results <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';
      nextButton.setAttribute("aria-label", "View your results");
    } else {
      nextButton.innerHTML = 'Next <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';
      nextButton.setAttribute("aria-label", "Go to next question");
    }
  }

  /* ── Results ── */
  function showResults() {
    var yesCount = answers.filter(function (a) { return a === "yes"; }).length;
    var html;

    if (yesCount === questions.length) {
      html = [
        '<div class="rc-results rc-results--success">',
          '<h2 class="rc-results__heading" id="results-heading" tabindex="-1">Congratulations!</h2>',
          '<p>Looks like you might have what it takes to be an <abbr>RCMP</abbr> police officer.</p>',
          '<p><strong>Next steps:</strong></p>',
          '<ol>',
            '<li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Review the basic requirements - Opens in a new window">Review the basic requirements <span class="sr-only">(opens in new window)</span></a></li>',
            '<li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Learn about the application process - Opens in a new window">Learn about the application process <span class="sr-only">(opens in new window)</span></a></li>',
            '<li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Apply now - Opens in a new window">Apply now <span class="sr-only">(opens in new window)</span></a></li>',
          '</ol>',
        '</div>',
      ].join("");
    } else {
      var noItems = "";
      for (var i = 0; i < answers.length; i++) {
        if (answers[i] === "no") {
          noItems += '<li><a href="' + questions[i].link + '" target="_blank" rel="noopener noreferrer" aria-label="' + questions[i].title + ' - Opens in a new window">' + questions[i].title + ' <span class="sr-only">(opens in new window)</span></a></li>';
        }
      }
      html = [
        '<div class="rc-results">',
          '<h2 class="rc-results__heading" id="results-heading" tabindex="-1">Additional preparation needed</h2>',
          '<p>Looks like you\'re not quite ready to apply. Review the <a href="#" target="_blank" rel="noopener noreferrer" aria-label="basic requirements - Opens in a new window">basic requirements <span class="sr-only">(opens in new window)</span></a> to make sure you\'re fit and ready for a career in policing.</p>',
          '<p><strong>You answered "Yes" to ' + yesCount + ' out of ' + questions.length + ' questions.</strong></p>',
          '<p>Take a closer look at the requirement(s) you answered "No" to:</p>',
          '<ul>' + noItems + '</ul>',
          '<button type="button" class="rc-btn rc-btn--primary" onclick="rcRestartQuiz()">Start over</button>',
        '</div>',
      ].join("");
    }

    resultsSection.innerHTML = html;
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    var heading = document.getElementById("results-heading");
    if (heading) { heading.focus(); }

    if (yesCount === questions.length) {
      announce("Quiz complete. Congratulations — you appear suited to apply as an RCMP police officer.");
    } else {
      announce("Quiz complete. You answered Yes to " + yesCount + " out of " + questions.length + " questions. Additional preparation may be needed.");
    }

    scrollToQuiz();
  }

  /* ── Restart ── */
  window.rcRestartQuiz = function () {
    currentIndex = 0;
    answers = new Array(questions.length).fill(null);
    quizSection.classList.remove("hidden");
    resultsSection.classList.add("hidden");
    renderQuestion();
    announce("Quiz restarted. You are now on question 1.");
    scrollToQuiz();
  };

  /* ── Button events ── */
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
      scrollToQuiz();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
      scrollToQuiz();
    } else {
      showResults();
    }
  });

  /* Keyboard: arrow keys when focus is not on a radio input */
  document.addEventListener("keydown", function (e) {
    if (e.target.type === "radio") return;
    if (e.key === "ArrowRight" && !nextButton.disabled) nextButton.click();
    if (e.key === "ArrowLeft"  && !prevButton.disabled) prevButton.click();
  });

  /* ── Init ── */
  renderQuestion();
})();
</script>
