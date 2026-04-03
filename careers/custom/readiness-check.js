const questions = [
    {
        number: 1,
        title: "Operational driving",
        details: "<abbr>RCMP</abbr> officers are expected to handle driving in various scenarios.",
        bullets: [
            "Emergency response driving",
            "Pursuit scenarios",
            "Rural and remote terrain driving",
            "Extreme weather conditions",
            "Transporting detainees"
        ],
        question: "Would you be comfortable driving in the following scenarios?",
        info: "You must have a valid unrestricted Canadian driver's licence to apply to be a police officer. An unrestricted licence means you can drive unsupervised at any time, on any road, with passengers. In addition, applicants must be confident drivers, capable of driving in various scenarios."
    },
    {
        number: 2,
        title: "First Aid certification",
        details: "You must have a valid Standard First Aid certification.",
        bullets: [
            "Providing immediate, basic medical assistance",
            "Seeking and calling for medical assistance",
            "Documenting and reporting incidents"
        ],
        question: "Would you feel comfortable carrying out the following expectations in case of emergency?",
        info: "As a police officer you may often be the first responder to a scene, you must be comfortable assessing the situation and providing standard First Aid support. You must have Level C <abbr>CPR</abbr> for infant, child and adult. Proof of your certification will be requested during the application process and must be valid during your cadet training if you advance in the process."
    },
    {
        number: 3,
        title: "Operational decision-making and the use of force",
        details: "As a police officer you are required to make sound, time-sensitive decisions, and at times apply the use of force.",
        bullets: [],
        question: "Would you be comfortable making timely decisions and using force as needed?",
        info: "Operational decision-making and the use of force are two of four critical health requirements related to the role of a police officer."
    },
    {
        number: 4,
        title: "Use of firearms and other intervention equipment",
        details: "As a police officer you are required to carry and use a firearm and other intervention tools as needed.",
        bullets: [],
        question: "Are you prepared and able to use and carry a firearm and other intervention tools as needed to support your duties?",
        info: "Police officers must maintain public order and safety, which includes using intervention techniques and firearms when required. If you're not comfortable with this, a career in policing may not be the right fit for you."
    },
    {
        number: 5,
        title: "Physical fitness",
        details: "Policing is a physically demanding job. Police officers are required to successfully complete the Police Fitness Assessment to be considered fit for duty.</p><p>Cadets are expected to be able to be able to run 5 kilometres in 30 minutes as the minimum standard.",
        bullets: [],
        question: "Are you in good physical shape and prepared for the demands of police work and the Cadet Training Program?",
        info: "Applicant must arrive to Cadet training fit and ready to meet the physical demands of policing. Cadet training at Depot isn't designed to build fitness. Arriving unprepared increases risk of injury and makes training harder."
    },
    {
        number: 6,
        title: "Training commitment",
        details: "",
        bullets: [],
        question: "Are you willing to spend 26 weeks living on-site at Depot, the <abbr>RCMP</abbr>'s training academy in Saskatchewan?",
        info: "Training is full-time and includes evenings and weekends. Food, accommodation, and a weekly allowance are provided."
    },
    {
        number: 7,
        title: "Mobility",
        details: "",
        bullets: [],
        question: "Are you willing to relocate anywhere within Canada after graduation from the Cadet Training Program?",
        info: "The <abbr>RCMP</abbr> is a national service. While preference is a consideration, postings are ultimately based on operational needs."
    },
    {
        number: 8,
        title: "Flexibility to shift work",
        details: "",
        bullets: [],
        question: "Are you willing to work shift work, including nights, weekends, and holidays?",
        info: "Policing is a 24/7 service. You can expect to work irregular hours and holiday shifts as needed."
    },
    {
        number: 9,
        title: "Legal requirements",
        details: "",
        bullets: [],
        question: "Are you a law-abiding citizen and prepared to disclose any past criminal records, and be open to a full criminal records check?",
        info: "Police officers should uphold the law and must not be engaged in any criminal activities. Review the criminal activities and misconduct that could prevent you from being successful in your application."
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

totalQuestionsSpan.textContent = questions.length;

function announce(message) {
    liveRegion.textContent = message;
    setTimeout(() => {
        liveRegion.textContent = '';
    }, 1000);
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    
    let html = `
        <div class="question-number sr-only" aria-label="Question ${question.number} of ${questions.length}">
            Question ${question.number} of ${questions.length}
        </div>
        <h2 class="question-title" id="question-title-${question.number}">${question.title}</h2>
    `;

    if (question.details || question.bullets.length > 0) {
        html += '<div class="question-details">';
        if (question.details) {
            html += `<p>${question.details}</p>`;
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

    html += `
        <fieldset>
            <legend id="question-legend-${question.number}">${question.question}</legend>
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
            <div class="did-you-know-header">
                <i class="fas fa-lightbulb" aria-hidden="true"></i>
                <span>Did you know?</span>
            </div>
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

function showResults() {
    const yesCount = answers.filter(a => a === 'yes').length;
    const noCount = answers.filter(a => a === 'no').length;

    let html = '';
    
    if (yesCount === questions.length) {
        html = `
            <div class="results success">
                <h2 id="results-heading" class="oswald-500 uppercase">Congratulations!</h2>
                <div class="results-content">
                    <p>Looks like you are suited to be an <abbr>RCMP</abbr> police officer. If you've already reviewed the basic requirements, read through the application process to know what you can expect.</p>
                </div>
                <a href="https://rcmp.ca/en/careers-rcmp/police-officer-careers" 
                    class="btn btn-careers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Apply now - Opens in a new window">
                    Apply now
                    <span class="sr-only">(opens in new window)</span>
                </a>
            </div>
        `;
    } else {
        html = `
            <div class="results warning">
                <h2 id="results-heading" class="oswald-500 uppercase">Additional preparation needed</h2>
                <div class="results-content">
                    <p>Looks like you don't meet all the requirements just yet. Before you apply, review the basic requirements to be an <abbr>RCMP</abbr> police officer to make sure you're fit and ready for a career in policing.</p>
                    <p style="margin-top: 15px;">You answered "Yes" to ${yesCount} out of ${questions.length} questions.</p>
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
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    quizSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    renderQuestion();
    announce('Quiz restarted. You are back at question 1.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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