import { quizzarr1, quizzarr2, quizzarr3 } from './data.js';

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page5 = document.getElementById('page5');
const questionText = document.getElementById('question_text');
const optionA = document.getElementById('text_a');
const optionB = document.getElementById('text_b');
const optionC = document.getElementById('text_c');
const optionD = document.getElementById('text_d');
const submitBtn = document.getElementById('submit1');
const scoreSpan = document.getElementById('span1');

const buttons = [optionA, optionB, optionC, optionD];

let selectedAnswer = '';

// Start the quiz
window.startQuiz = function(category) {
    if (category === '2-4') {
        currentQuiz = quizzarr1;
    } else if (category === '4-7') {
        currentQuiz = quizzarr2;
    } else if (category === '7-10') {
        currentQuiz = quizzarr3;
    } 

    currentQuestionIndex = 0;
    score = 0;

    page1.hidden = true;
    page2.hidden = false;
    page5.hidden = true;

    showQuestion();
};

// Show a question
function showQuestion() {
    clearOptionsColor();

    const currentQuestion = currentQuiz[currentQuestionIndex];
    if (!currentQuestion) {
        console.error('No question found!');
        return;
    }

    questionText.innerText = currentQuestion.question || 'Question Missing';

    optionA.innerText = currentQuestion.answers[0] || 'Option A';
    optionB.innerText = currentQuestion.answers[1] || 'Option B';
    optionC.innerText = currentQuestion.answers[2] || 'Option C';
    optionD.innerText = currentQuestion.answers[3] || 'Option D';

    selectedAnswer = '';

    buttons.forEach(button => {
        button.onclick = () => selectAnswer(button);
    });
}

function clearOptionsColor() {
    buttons.forEach(btn => {
        btn.classList.remove('bg-green-400', 'bg-red-400', 'bg-gray-300', 'selected-option');
        btn.classList.add('bg-gray-200');
    });
}


function selectAnswer(optionButton) {
    selectedAnswer = optionButton.innerText;
    buttons.forEach(btn => {
        btn.classList.remove('bg-gray-300', 'selected-option');
    });
    optionButton.classList.add('bg-gray-300', 'selected-option');
}

submitBtn.onclick = function() {
    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }

    const currentQuestion = currentQuiz[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    
    let correctButton = buttons.find(btn => btn.innerText === correctAnswer);
    if (selectedAnswer === correctAnswer) {
       
        score++;
        highlightCorrect();
    } else {
        highlightWrong(correctButton);
    }

    buttons.forEach(btn => btn.onclick = null);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 500); 
};

function highlightCorrect() {
    buttons.forEach(btn => {
        if (btn.innerText === selectedAnswer) {
            btn.classList.remove('bg-gray-300');
            btn.classList.add('bg-green-400');
        }
    });
}

function highlightWrong(correctButton) {
    buttons.forEach(btn => {
        if (btn.innerText === selectedAnswer) {
            btn.classList.remove('bg-gray-300');
            btn.classList.add('bg-red-400');
        }
    });

    if (correctButton) {
        correctButton.classList.remove('bg-gray-200');
        correctButton.classList.add('bg-green-400');
    }
}



function showResult() {
    page1.hidden = true;
    page2.hidden = true;
    page5.hidden = false;

    let total = currentQuiz.length;
    let correct = score;
    let wrong = total - correct;
    let percentage = Math.round((correct / total) * 100);

    document.getElementById('totalQuestions').innerText = total;
    document.getElementById('correctAnswers').innerText = correct;
    document.getElementById('wrongAnswers').innerText = wrong;
    document.getElementById('percentage').innerText = percentage;

    let remark = '';
    if (percentage >= 80) {
        remark = "Excellent! 🎉";
    } else if (percentage >= 50) {
        remark = "Good Job! 👍";
    } else {
        remark = "Needs Improvement 💡";
    }
    document.getElementById('remarkText').innerText = remark;
}



// Restart quiz
window.restartQuiz = function() {
    page1.hidden = false;
    page2.hidden = true;
    page5.hidden = true;
};
