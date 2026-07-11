---
layout: careers
title: Test de préparation
date_modified: 2026-06-10
lang: fr
lang_url: readiness-preparation-en.html
breadcrumbs:
  - label: "Carrières à la GRC"
    url: "careers-carrieres/careers-carrieres-fr.html"
  - label: "Carrières policières"
    url: "careers-carrieres/officer-agent-fr.html"
custom_css: /assets/css/careers.css
---

<div aria-live="polite" aria-atomic="true" class="rc-live-region sr-only" id="live-region"></div>
<div class="rc-quiz-wrap">
  <noscript>
    <div class="alert alert-warning">
      <p>Ce questionnaire nécessite que JavaScript soit activé dans votre navigateur. Veuillez activer JavaScript, puis actualiser la page pour effectuer la vérification de l'état de préparation.</p>
    </div>
  </noscript>
  <div class="rc-intro" id="quiz-intro">
    <p>Répondez à ce court questionnaire pour savoir si vous êtes prêt(e) à postuler pour devenir policier ou policière à la GRC.</p>
  </div>
  <div id="quiz-section">
    <div class="rc-progress-bar-wrap" role="region" aria-label="Progression du questionnaire">
      <div class="rc-progress-meta">
        <span id="progress-text">Question <span id="current-question">1</span> sur <span id="total-questions">7</span></span>
        <span id="progress-percent" aria-hidden="true">0&#160;%</span>
      </div>
      <div class="rc-progress-track" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="Achèvement du questionnaire" aria-valuetext="0 % terminé">
        <div class="rc-progress-fill" id="progress-fill"></div>
      </div>
    </div>
    <form id="quiz-form" novalidate>
      <div id="question-container"></div>
      <div class="rc-nav" role="group" aria-label="Navigation dans le questionnaire">
        <button type="button" id="prev-button" class="rc-btn rc-btn--secondary" aria-label="Aller à la question précédente" disabled>
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
          Précédent
        </button>
        <button type="button" id="next-button" class="rc-btn rc-btn--primary" aria-label="Aller à la question suivante" disabled>
          Suivant
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  </div>
  <div class="hidden" id="results-section" role="region" aria-label="Résultats du questionnaire"></div>
</div>

<script>
(function () {
  "use strict";

  var questions = [
    {
      number: 1,
      title: "Valeurs fondamentales de la GRC",
      details: 'Les policiers et les cadets de la GRC doivent systématiquement mettre en pratique et incarner les <a href="/fr/renseignements-organisationnels/valeurs-fondamentales-gendarmerie-royale-du-canada" target="_blank" aria-label="Valeurs fondamentales de la Gendarmerie royale du Canada – S\'ouvre dans une nouvelle fenêtre">valeurs fondamentales de la GRC</a>, c\'est-à-dire qu\'ils doivent assumer leurs responsabilités, faire preuve de respect et de compassion, servir avec excellence et agir avec intégrité, qu\'ils soient de service ou non.',
      bullets: [],
      question: [
        "Êtes-vous prêt(e) à vivre selon les valeurs fondamentales de la GRC dans votre vie personnelle et professionnelle?",
        "Vous devrez :",
      ],
      questionBullets: [
        "assumer la responsabilité de vos actions, de vos erreurs et de vos décisions;",
        "traiter toutes les personnes avec respect, même si elles se montrent irrespectueuses à votre égard;",
        "agir avec intégrité et honnêteté et faire preuve d\'un jugement éthique, même si cela est difficile ou impopulaire;",
        "faire preuve de compassion envers les personnes en crise, notamment les victimes, les contrevenants, les populations vulnérables et les collègues;",
        "viser l\'excellence en acceptant la rétroaction, les mesures correctives et les normes de conduite exigeantes.",
      ],
      info: [
        "Les valeurs fondamentales de la GRC orientent la façon dont les policiers traitent le public, les collègues, les partenaires et les personnes sous leur garde, en particulier dans des situations stressantes ou difficiles.",
        "Le fait de ne pas incarner ces valeurs (dans son comportement ou sa conduite, par exemple) entraînera le retrait immédiat du Programme de formation des cadets.",
        "N\'oubliez pas qu\'en cas de manquement aux valeurs fondamentales, votre contrat de formation pourrait être résilié. Si vous démissionnez ou êtes renvoyé(e) du Programme de formation des cadets, vous pourriez être tenu(e) de rembourser votre allocation de formation.",
      ],
    },
    {
      number: 2,
      title: "Operational driving",
      details: "RCMP officers are expected to handle driving in various scenarios with confidence.",
      bullets: [],
      question: "Would you be comfortable driving in these conditions?",
      questionBullets: [
        "emergency response driving (high speeds, collision avoidance, performing other tasks when driving)",
        "Emergency Vehicle Operations (pursuits and chasing) sometimes on gravel and remote rough terrain driving",
        "extreme weather conditions (winter storm, floods, heatwaves, etc.)",
        "transporting people who are in custody",
      ],
      info: [
        "You must have a valid, unrestricted Canadian driver\'s licence before you apply. An unrestricted licence means you have full driving privileges with no probationary conditions or limitations. You must have the ability to drive on your own at any time, on any road.",
        "Note: Applicants with vision\-related driver\'s licence restrictions may still be eligible, provided they meet RCMP medical and vision requirements.",
      ],
    },
    {
      number: 3,
      title: "Use of force, firearms and other police tools",
      details: "As a police officer, your main responsibility is to protect life, including your own. When you respond to an incident, you will need to make sound, timely decisions and take appropriate action. You're required to carry firearms and other approved intervention options. Some of these tools include: ",
      bullets: [
        "firearms (pistols, carbine, shotgun, extended range impact weapon)",
        "Oleoresin Capsicum (pepper) spray",
        "handcuffs",
        "conducted energy weapons (taser)",
        "collapsible batons",
      ],
      question: "Will you be comfortable taking the following actions?",
      questionBullets: [
        "restraining a person using physical control techniques and handcuffs using approved use of force intervention options such as OC spray or collapsible baton to control a violent, non-compliant person (someone resisting)",
        "applying lethal force to preserve life, including your own, when faced with such a situation",
      ],
      info: "During the Cadet Training Program, you will learn how to safely handle and use firearms and various other approved tools to support interventions. Use of force is documented, and regular members must articulate their actions and decisions in reports and in court.",
    },
    {
      number: 4,
      title: "Physical fitness",
      details: [
        "Policing is a physically demanding job. You must be physically fit before arriving at the RCMP Academy, Depot.",
        "You should be able to:",
      ],
      bullets: [
        "run 5 km without stopping in 30 to 35 minutes",
        "do 10 or more push-ups in a row from your toes, and lowering your chin or chest to the ground",
        "lift and carry 45 lbs of weight 50 m without stopping for rest",
        "complete an intense 30-minute workout that keeps your heart rate up the entire time",
        "run 500 m in under 2 minutes 25 seconds",
      ],
      question: "Are you physically fit?",
      questionBullets: [],
      info: 'You must arrive at the RCMP Academy, Depot ready to succeed the <a href="#" target="_blank" aria-label="Police Fitness Assessment - Opens in a new window">Police Fitness Assessment <span class="sr-only">(opens in new window)</span></a> within the first few weeks of the training program.',
    },
    {
      number: 5,
      title: "6-month training",
      details: "Training is a full-time commitment with evening and weekend assignments. Training also takes place during statutory holidays.  The environment will challenge you and reflect the 24/7 nature of police work.",
      bullets: [],
      question: "Are you willing to:",
      questionBullets: [
        "spend 26 weeks (6 months) in Regina, Saskatchewan at the RCMP Academy, Depot",
        "be away from family and friends",
        "train for long hours during the day and sometimes on weekends",
        "live in co-ed dorms onsite at the RCMP Academy, Depot",
        "learn and study Canadian law, police procedures and policy, investigative techniques, firearms, police defensive tactics, police driving, police fitness, and drill and deportment",
      ],
      info: "The RCMP is committed to inclusion and respect for diversity. Reasonable accommodations may be available for religious practices and observances, including religious holidays, subject to operational and training requirements.",
    },
    {
      number: 6,
      title: "Relocation",
      details: "",
      bullets: [],
      question: "Are you willing to move anywhere in Canada after graduation from the RCMP Academy, Depot?",
      questionBullets: [],
      info: "The RCMP is a national police service. While personal preference is considered, postings are based on operational needs, including northern and remote regions.",
    },
    {
      number: 7,
      title: "Shift work",
      details: "",
      bullets: [],
      question: "Are you willing to work nights, weekends, and/or holidays?",
      questionBullets: [],
      info: "Policing is a 24/7 service. You will respond to calls when on shift. Your shift may extend based on operational needs.  You may get called in outside of regular hours, including in the middle of the night.  You will be compensated for extra duty hours and operational availability (on-call) when applicable.",
    },
  ];

  var currentIndex = 0;
  var answers      = new Array(questions.length).fill(null);

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

  totalQSpan.textContent = questions.length;

  function announce(msg) {
    liveRegion.textContent = "";
    setTimeout(function () { liveRegion.textContent = msg; }, 50);
  }

  function buildInfoHTML(info) {
    var items = Array.isArray(info) ? info : [info];
    return items.map(function (p) { return "<p>" + p + "</p>"; }).join("");
  }

  function scrollToQuiz() {
    var target = document.querySelector(".rc-progress-bar-wrap") || quizSection;
    if (target) {
      var offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }

  function renderQuestion() {
    var q   = questions[currentIndex];
    var ans = answers[currentIndex];

    if (currentIndex === 0) {
      quizIntro.classList.remove("hidden");
    } else {
      quizIntro.classList.add("hidden");
    }

    var bodyHTML = "";
    if (q.details || q.bullets.length) {
      bodyHTML += '<div class="rc-question-body">';
      if (q.details) { bodyHTML += buildInfoHTML(q.details); }
      if (q.bullets.length) {
        bodyHTML += "<ul>";
        q.bullets.forEach(function (b) { bodyHTML += "<li>" + b + "</li>"; });
        bodyHTML += "</ul>";
      }
      bodyHTML += "</div>";
    }

    var questionLines = Array.isArray(q.question) ? q.question : [q.question];
    var legendInner = questionLines.map(function (line, i) {
      return i === 0 ? "<strong>" + line + "</strong>" : "<p>" + line + "</p>";
    }).join("");
    if (q.questionBullets.length) {
      legendInner += "<ul>";
      q.questionBullets.forEach(function (b) { legendInner += "<li>" + b + "</li>"; });
      legendInner += "</ul>";
    }

    var yesChecked = ans === "yes" ? " checked" : "";
    var noChecked  = ans === "no"  ? " checked" : "";

var html = [
  '<div class="rc-question-card">',
    '<div class="rc-question-card__body">',
      '<h2 class="rc-question-title" id="q-title-' + q.number + '" tabindex="-1">' + q.title + '</h2>',
      bodyHTML,
    '</div>',
    '<div class="rc-question-card__answers">',
      '<div class="rc-answers-inner">',
        '<div class="rc-legend" id="q-legend-' + q.number + '">' + legendInner + '</div>',
        '<fieldset class="rc-fieldset">',
          '<legend class="sr-only">Oui or Non: ' + (Array.isArray(q.question) ? q.question[0] : q.question) + '</legend>',
          '<ul class="rc-options" role="list">',
                '<li class="rc-option">',
                  '<input type="radio" id="yes-' + q.number + '" name="q-' + q.number + '" value="yes"' + yesChecked + '>',
                  '<label for="yes-' + q.number + '">Oui</label>',
                '</li>',
                '<li class="rc-option">',
                  '<input type="radio" id="no-' + q.number + '" name="q-' + q.number + '" value="no"' + noChecked + '>',
                  '<label for="no-' + q.number + '">Non</label>',
                '</li>',
              '</ul>',
            '</fieldset>',
          '<div class="rc-info-panel ' + (ans !== null ? "show" : "") + '"',
               ' id="info-' + q.number + '"',
               ' role="note"',
               ' aria-label="Renseignements supplémentaires"',
               ' aria-live="polite"',
          '>',
            '<h3 class="rc-info-panel__heading">Renseignements supplémentaires</h3>',
            buildInfoHTML(q.info),
          '</div>',
        '</div>',
      '</div>',
    ].join("");

    questionContainer.innerHTML = html;

    document.getElementById("yes-" + q.number).addEventListener("change", function () { selectAnswer("yes"); });
    document.getElementById("no-"  + q.number).addEventListener("change", function () { selectAnswer("no");  });

    updateProgress();
    updateNav();

    var heading = document.getElementById("q-title-" + q.number);
    if (heading) { heading.focus(); }

    announce("Question " + (currentIndex + 1) + " of " + questions.length + ": " + q.title);
  }

  function selectAnswer(value) {
    var wasNull = answers[currentIndex] === null;
    answers[currentIndex] = value;

    var q         = questions[currentIndex];
    var infoPanel = document.getElementById("info-" + q.number);
    if (infoPanel) {
      infoPanel.classList.add("show");
      if (wasNull) {
        announce("Renseignements supplémentaires is now available below the answer choices.");
      }
      setTimeout(function () {
        var offset = infoPanel.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }, 50);
    }

    updateNav();
  }

  function updateProgress() {
    var answered = answers.filter(function (a) { return a !== null; }).length;
    var pct      = Math.round((answered / questions.length) * 100);

    progressFill.style.width        = pct + " %";
    progressTrack.setAttribute("aria-valuenow", pct);
    progressTrack.setAttribute("aria-valuetext", pct + " % complete");
    currentQSpan.textContent        = currentIndex + 1;
    progressPercent.textContent     = pct + " %";
  }

  function updateNav() {
    var isFirst   = currentIndex === 0;
    var hasAnswer = answers[currentIndex] !== null;
    var isLast    = currentIndex === questions.length - 1;

    prevButton.style.display = currentIndex === 0 ? "none" : "";
    prevButton.disabled = currentIndex === 0;

    nextButton.disabled = !hasAnswer;

    if (isLast) {
      nextButton.innerHTML = 'View results <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';
      nextButton.setAttribute("aria-label", "View your results");
    } else {
      nextButton.innerHTML = 'Next <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>';
      nextButton.setAttribute("aria-label", "Go to next question");
    }
  }

  function showResults() {
    var yesCount = answers.filter(function (a) { return a === "yes"; }).length;
    var allOui   = yesCount === questions.length;
    var html;

    if (allOui) {
      html = [
        '<div class="rc-results rc-results--success">',
          '<h2 class="rc-results__heading" id="results-heading" tabindex="-1">End of Readiness Check</h2>',
          '<p>Looks like you might have what it takes to be an RCMP police officer.</p>',
          '<p>Next steps:</p>',
          '<ol>',
            '<li><a href="#" target="_blank" aria-label="Review the basic requirements - Opens in a new window">Review the basic requirements <span class="sr-only">(opens in new window)</span></a></li>',
            '<li><a href="#" target="_blank" aria-label="Learn about the application process - Opens in a new window">Learn about the application process <span class="sr-only">(opens in new window)</span></a></li>',
            '<li><a href="#" target="_blank" aria-label="Apply now - Opens in a new window">Apply now <span class="sr-only">(opens in new window)</span></a></li>',
          '</ol>',
        '</div>',
      ].join("");
    } else {
      var noItems = "";
      for (var i = 0; i < answers.length; i++) {
        if (answers[i] === "no") {
          noItems +=
            '<li><a href="#" target="_blank" aria-label="' + questions[i].title + ' - Opens in a new window">' +
            questions[i].title +
            ' <span class="sr-only">(opens in new window)</span></a></li>';
        }
      }
      html = [
        '<div class="rc-results">',
          '<h2 class="rc-results__heading" id="results-heading" tabindex="-1">End of Readiness Check</h2>',
          '<p>Looks like you\'re not quite ready to apply. Review the <a href="#" target="_blank" aria-label="basic requirements - Opens in a new window">basic requirements <span class="sr-only">(opens in new window)</span></a> to make sure you\'re fit and ready for a career in policing.</p>',
          '<p>Take a closer look at the requirement(s):</p>',
          '<ul>' + noItems + '</ul>',
          '<button type="button" class="rc-btn rc-btn--primary" id="restart-btn">Start over</button>',
        '</div>',
      ].join("");
    }

    resultsSection.innerHTML = html;
    var restartBtn = document.getElementById("restart-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", window.rcRestartQuiz);
    }
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    var heading = document.getElementById("results-heading");
    if (heading) { heading.focus(); }

    if (allOui) {
      announce("Quiz complete. Congratulations \u2014 you appear suited to apply as an RCMP police officer.");
    } else {
      announce("Quiz complete. You answered Oui to " + yesCount + " out of " + questions.length + " questions. Additional preparation may be needed.");
    }

    scrollToQuiz();
  }

  window.rcRestartQuiz = function () {
    currentIndex = 0;
    answers      = new Array(questions.length).fill(null);
    quizSection.classList.remove("hidden");
    resultsSection.classList.add("hidden");
    renderQuestion();
    announce("Quiz restarted. You are now on question 1.");
    scrollToQuiz();
  };

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

  document.addEventListener("keydown", function (e) {
    if (e.target.type === "radio") { return; }
    if (e.key === "ArrowRight" && !nextButton.disabled) { nextButton.click(); }
    if (e.key === "ArrowLeft"  && !prevButton.disabled) { prevButton.click(); }
  });

  renderQuestion();

}());
</script>
