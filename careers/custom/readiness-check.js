const questions = [
    {
        number: 1,
        title: "<abbr>RCMP</abbr> core values",
        details: "<abbr>RCMP</abbr> officers and cadets are expected to consistently live and demonstrate the <abbr>RCMP</abbr>'s core values; <strong>take responsibility, show respect, serve with excellence, demonstrate compassion and act with integrity</strong> both on and off duty.",
        bullets: [],
        question: "Are you prepared to live and be held accountable to the <abbr>RCMP</abbr>'s core values in all aspects of your life? This includes being willing to:",
        questionBullets: [
            "take responsibility for your actions, mistakes and decisions",
            "treat all people with respect, even if they are disrespectful toward you",
            "act with integrity, honesty and use ethical judgement, even when it is difficult or unpopular",
            "show compassion toward people in crisis, including victims, offenders and vulnerable populations",
            "strive for excellence by accepting feedback, correction and high standards of conduct"
        ],
        info: "The <abbr>RCMP</abbr> core values guide how officers treat the public, colleagues, partners and people in their care, especially in stressful or challenging situations.</p> <p>At Depot, failure to demonstrate these values (for example, through behaviour or conduct) will result in termination from the Cadet Training Program."
    },
    {
        number: 2,
        title: "Operational driving",
        details: "<abbr>RCMP</abbr> officers are expected to handle driving in various scenarios with confidence.",
        bullets: [],
        question: "Would you be comfortable driving in these conditions?",
        questionBullets: [
            "emergency response driving, driving fast",
            "pursuit scenarios, chasing another vehicle",
            "rural and remote rough terrain driving",
            "extreme weather conditions",
            "transporting people who are in custody"
        ],
        info: "You must have a valid, unrestricted Canadian driver's licence before you apply. That proves you can drive unsupervised at any time, on any road, with as many passengers as there are seatbelts."
    },
    {
        number: 3,
        title: "Use of force, firearms and other police tools",
        details: "As a police officer, your main responsibility is to protect life, including your own. When you respond to an incident, you will need to make sound, timely decisions, and take the appropriate action. You're required to carry and use firearms and other police tools as needed. Some of these tools include:",
        bullets: [
            "firearms (pistols)",
            "Oleoresin Capsicum (pepper) spray",
            "handcuffs",
            "conducted energy weapons (Taser)",
            "batons"
        ],
        question: "Would you be comfortable taking the following actions as needed?",
        questionBullets: [
            "restraining a person with handcuffs",
            "causing injury in effort to control a person physically (for example, punching or kicking)",
            "using aerosols or a baton (not for causing serious injury)",
            "using lethal force (likely causing life-threatening injury or death)"
        ],
        info: "During cadet training at Depot, you will learn how to safely handle a firearm and various other police tools used to diffuse an incident.   Every use of force is documented. Officers must be ready to justify actions in reports and potentially in court."
    },
    {
        number: 4,
        title: "Physical fitness",
        details: "Policing is a physically demanding job. You must be physically fit before arriving at Depot for cadet training. To be fit for Depot, you should be able to:",
        bullets: [
            "run 5 km without stopping in 30 to 35 minutes",
            "do 10 or more push-ups in a row from your toes and your chin or chest to the ground",
            "lift and carry 45 lbs of weight 50 metres without stopping for rest",
            "do an intense 30-minute workout that keeps your heart rate up the entire time",
            "exercise 5 days per week",
        ],
        question: "Do you currently meet these fitness standards?",
        questionBullets: [],
        info: "Arrive to the <abbr>RCMP</abbr> Training Academy ready to pass the <a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\" - Opens in a new window\">Police Fitness Assessment <span class=\"sr-only\">(opens in new window)</span></a> within the first few weeks of the training program."
    },
    {
        number: 5,
        title: "6-month training",
        details: "",
        bullets: [],
        question: "Are you willing to:",
        questionBullets: [
            "spend 6 months in Regina, Saskatchewan at the <abbr>RCMP</abbr> training academy",
            "be away from friends and family",
            "live in co-ed dorms onsite at Depot",
            "learn and study Canadian law",
            "adhere to the <abbr>RCMP</abbr>'s core values (<a href=\"https://rcmp.ca/en/corporate-information/royal-canadian-mounted-police-core-values\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\" responsibility, respect, excellence, compassion and integrity - Opens in a new window\">responsibility, respect, excellence, compassion and integrity <span class=\"sr-only\">(opens in new window)</span></a>)"
        ],
        info: "Training is a full-time commitment with evening and weekend assignments. The environment is meant to challenge you. Remember, your training contract may be terminated from the Cadet Training Program for violations of core values. If you are terminated, you may be subject to repay your training allowance (up to $26,000)."
    },
    {
        number: 6,
        title: "Relocation",
        details: "",
        bullets: [],
        question: "Are you willing to move anywhere in Canada after graduation from the Cadet Training Program?",
        questionBullets: [],
        info: "The <abbr>RCMP</abbr> is a national police service. While preference is considered, postings are based on operational needs, including northern and remote regions."
    },
    {
        number: 7,
        title: "Shift work",
        details: "",
        bullets: [],
        question: "Are you willing to work nights, weekends, and/or holidays?",
        questionBullets: [],
        info: "Policing is a 24/7 service. You will need to respond to a call if it happens within your shift. You will be asked to stay late. While on-call, you may get called in outside of regular hours, including overnight.  You will be compensated for any overtime worked."
    }
];

let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);

const questionContainer = document.getElementById('question-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const progressFill = document.getElementById('progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressPercent = document.getElementById('progress-percent');
const progressBar = document.querySelector('.progress-bar');
const liveRegion = document.getElementById('live-region');
const quizIntro = document.getElementById('quiz-intro');

totalQuestionsSpan.textContent = questions.length;

function announce(message) {
    liveRegion.textContent = message;
    setTimeout(() => {
        liveRegion.textContent = '';
    }, 1000);
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    
    if(question.number > 1 && !quizIntro.classList.contains('hidden')){
        quizIntro.classList.add('hidden');
    }
    else if(question.number == 1 && quizIntro.classList.contains('hidden')){
        quizIntro.classList.remove('hidden');
    }

    let html = `
        <div class="question-number sr-only" aria-label="Question ${question.number} of ${questions.length}">
            Question ${question.number} of ${questions.length}
        </div>
        <h2 class="question-title" id="question-title-${question.number}">${question.title}</h2>
    `;

    if (question.details || question.bullets.length > 0) {
        html += '<div class="question-details">';
        if (question.details && question.bullets.length > 0) {
            html += `<p>${question.details}</p>`;
        }
        else {
            html += `<p class="mrgn-bttm-0">${question.details}</p>`;
        }
        if (question.bullets.length > 0) {
            html += '<ul>';
            question.bullets.forEach(bullet => {
                html += `<li>${bullet}</li>`;
            });
            html += '</ul>';
        }
        html += '</div>';
    }

    html += `<div class="question-legend" id="question-legend-${question.number}">
                <p><strong>${question.question}</strong></p>
    `;
        if (question.questionBullets.length > 0) {
            html += '<ul>';
            question.questionBullets.forEach(bullet => {
                html += `<li>${bullet}</li>`;
            });
            html += '</ul>';
        }
    html += '</div>';

    html += `
        <fieldset>
            <div class="radio-group" role="radiogroup" aria-labelledby="question-legend-${question.number}">
                <div class="btn radio-option">
                    <input 
                        type="radio" 
                        id="yes-${question.number}" 
                        name="question-${question.number}" 
                        value="yes"
                        ${answers[currentQuestionIndex] === 'yes' ? 'checked' : ''}
                    >
                    <label for="yes-${question.number}" class="radio-label">Yes</label>
                </div>
                <div class="btn radio-option">
                    <input 
                        type="radio" 
                        id="no-${question.number}" 
                        name="question-${question.number}" 
                        value="no"
                        ${answers[currentQuestionIndex] === 'no' ? 'checked' : ''}
                    >
                    <label for="no-${question.number}" class="radio-label">No</label>
                </div>
            </div>
        </fieldset>
        <div class="did-you-know ${answers[currentQuestionIndex] !== null ? 'show' : ''}" 
                id="info-section-${question.number}"
                role="region"
                aria-label="Additional information">
            
            <p>${question.info}</p>
        </div>
    `;

    questionContainer.innerHTML = html;

    const yesRadio = document.getElementById(`yes-${question.number}`);
    const noRadio = document.getElementById(`no-${question.number}`);

    yesRadio.addEventListener('change', () => selectAnswer('yes'));
    noRadio.addEventListener('change', () => selectAnswer('no'));

    updateNavigation();
    updateProgress();

    const questionTitle = document.getElementById(`question-title-${question.number}`);
    if (questionTitle) {
        questionTitle.focus();
        questionTitle.setAttribute('tabindex', '-1');
    }

    announce(`Question ${question.number} of ${questions.length}: ${question.title}`);
}

function selectAnswer(answer) {
    const wasNull = answers[currentQuestionIndex] === null;
    answers[currentQuestionIndex] = answer;
    
    const question = questions[currentQuestionIndex];
    const infoSection = document.getElementById(`info-section-${question.number}`);
    
    if (infoSection) {
        infoSection.classList.add('show');
        
        if (wasNull) {
            announce('Additional information is now available below the answer choices.');
        }
    }

    updateNavigation();
}

function updateNavigation() {
    prevButton.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = 'View results';
        nextButton.setAttribute('aria-label', 'View your results');
        nextButton.disabled = answers[currentQuestionIndex] === null;
    } else {
        nextButton.textContent = 'Next';
        nextButton.setAttribute('aria-label', 'Go to next question');
        nextButton.disabled = answers[currentQuestionIndex] === null;
    }
}

function updateProgress() {
    const answeredQuestions = answers.filter(a => a !== null).length;
    const progress = (answeredQuestions / questions.length) * 100;
    progressFill.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    progressPercent.textContent = Math.round(progress) + '%';
}

var elementOffset = document.querySelector('#quiz-section');

function showResults() {
    const yesCount = answers.filter(a => a === 'yes').length;
    const noCount = answers.filter(a => a === 'no').length;

    let html = '';
    
    if (yesCount === questions.length) {
        html = `
            <div class="results success">
                <h2 id="results-heading" class="oswald-500 uppercase">Congratulations!</h2>
                <div class="results-content">
                    <p>Looks like you might have what it takes to be an <abbr>RCMP</abbr> police officer.</p>
                    <p>Next steps:</p>

                    <ol>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Review the basic requirements - Opens in a new window">Review the basic requirements <span class="sr-only">(opens in new window)</span></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Learn about the application process - Opens in a new window">Learn about the application process <span class="sr-only">(opens in new window)</span></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Apply now - Opens in a new window">Apply now <span class="sr-only">(opens in new window)</span></a></li>
                    </ol>
                </div>
            </div>
        `;
    } else {
        html = `
            <div class="results warning">
                <h2 id="results-heading" class="oswald-500 uppercase">Additional preparation needed</h2>
                <div class="results-content">
                    <p>Looks like you're not ready to apply. Review the <a href="#" target="_blank" rel="noopener noreferrer" aria-label="basic requirements - Opens in a new window">basic requirements <span class="sr-only">(opens in new window)</span></a> to be an <abbr>RCMP</abbr> police officer to make sure you're fit and ready for a career in policing.</p>
                    <p style="margin-top: 15px;"><strong>You answered "Yes" to ${yesCount} out of ${questions.length} questions.</strong></p>
                    <p>Take a closer look at the requirement(s):</p>
                    <ul>`;

                    for (let i = 0; i < answers.length; i++) {
                        const answer = answers[i];
                        const question = questions[i];
                        
                        if(answer == "no"){
                            html += `<li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="${question.title} - Opens in a new window">${question.title} <span class="sr-only">(opens in new window)</span></a></li>`;
                        }
                    }
                        
        html += `
                    </ul>
                </div>
                <button type="button" class="btn btn-careers" onclick="restartQuiz()">Start over</button>
            </div>
        `;
    }

    resultsSection.innerHTML = html;
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    const resultsHeading = document.getElementById('results-heading');
    if (resultsHeading) {
        resultsHeading.setAttribute('tabindex', '-1');
        resultsHeading.focus();
    }

    if (yesCount === questions.length) {
        announce('Quiz complete! Congratulations, you appear suited to be an <abbr>RCMP</abbr> police officer.');
    } else {
        announce(`Quiz complete! You answered yes to ${yesCount} out of ${questions.length} questions. Additional preparation may be needed.`);
    }
    
    window.scrollTo({ top: elementOffset.offsetTop, behavior: 'smooth' });
}

function goToQuestion(number){

}
function restartQuiz() {
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    quizSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    renderQuestion();
    announce('Quiz restarted. You are back at question 1.');
    window.scrollTo({ top: elementOffset.offsetTop, behavior: 'smooth' });
}

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        window.scrollTo({ top: elementOffset.offsetTop, behavior: 'smooth' });
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        window.scrollTo({ top: elementOffset.offsetTop, behavior: 'smooth' });
    } else {
        showResults();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.target.type !== 'radio') {
        if (e.key === 'ArrowRight' && !nextButton.disabled) {
            nextButton.click();
        } else if (e.key === 'ArrowLeft' && !prevButton.disabled) {
            prevButton.click();
        }
    }
});

renderQuestion();