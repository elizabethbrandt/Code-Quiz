var userInitials = JSON.parse(localStorage.getItem('userInitials')) || [];

// VAR pointer/index - Current position in the question array
var currentQuestionIndex = 0;

// Question and answer variables
var questionEl = document.getElementById('question');

var answerButtonsEl = document.getElementById('answer-btns');
var answer1 = document.getElementById('1');
var answer2 = document.getElementById('2');
var answer3 = document.getElementById('3');
var answer4 = document.getElementById('4');

// VAR startButton
var startPage = document.getElementById('start-page');
var startButton = document.getElementById('start-btn');
var questionContainerEl = document.getElementById('questionContainer')
var score = 100;
var answerIndicator = document.getElementById('correct-answer');

var timerEl = document.getElementById('timer');

// OBJECT: QUESTIONS
var questionList = [
    {
        // Question text
        questionText: 'What is used to repeat an action until a specified condition evaluates to false?',
        // List of answers
        answerOptions: [
            { text: 'for loop', correct: true },
            { text: 'conditionals', correct: false },
            { text: 'repeat', correct: false },
            { text: 'while loop', correct: false }
        ]
    },
    {
        questionText: 'How do you declare a variable?',
        answerOptions: [
            { text: 'vari', correct: false },
            { text: 'var', correct: true },
            { text: 'variable', correct: false },
            { text: 'v', correct: false }
        ]
    },
    {
        questionText: 'Values that are true or false are known as:',
        answerOptions: [
            { text: 'strings', correct: false },
            { text: 'objects', correct: false },
            { text: 'booleans', correct: true },
            { text: 'arrays', correct: false }
        ]
    },
    {
        questionText: 'How can you exit a loop?',
        answerOptions: [
            { text: 'exit', correct: false },
            { text: 'return', correct: true },
            { text: 'leave', correct: false },
            { text: 'rtrn', correct: false }
        ]
    },
    {
        questionText: 'What is the comparison operator for “not equal”?',
        answerOptions: [
            { text: '===', correct: false },
            { text: '<==', correct: false },
            { text: '>==', correct: false },
            { text: '!==', correct: true }
        ]
    },
    {
        questionText: 'Arrays should be wrapped in:',
        answerOptions: [
            { text: 'curly brackets', correct: false },
            { text: 'parentheses', correct: false },
            { text: 'square brackets', correct: true },
            { text: 'quotation marks', correct: false }
        ]
    },
    {
        questionText: 'The process of outlining your code before you build it is known as:',
        answerOptions: [
            { text: 'pre-coding', correct: false },
            { text: 'comment-coding', correct: false },
            { text: 'pseudo-coding', correct: true },
            { text: 'false-coding', correct: false }
        ]
    },
    {
        questionText: 'What is one way to get a user to input information?',
        answerOptions: [
            { text: 'prompt', correct: true },
            { text: 'alert', correct: false },
            { text: 'confirm', correct: false },
            { text: 'console', correct: false }
        ]
    }
]

// console.log(questionList);
// [1].questionText
// console.log(questionList[1].questionText);
// console.log(questionList[1].answerOptions[1].correct);

// PRESENT the question = Create new HTML elements for the question content

showQuestion();
function showQuestion() {

    questionEl.textContent = questionList[currentQuestionIndex].questionText
    // answerButtonsEl.textContent = questionList[currentQuestionIndex].answerOptions;
    answer1.textContent = questionList[currentQuestionIndex].answerOptions[0].text
    answer2.textContent = questionList[currentQuestionIndex].answerOptions[1].text
    answer3.textContent = questionList[currentQuestionIndex].answerOptions[2].text
    answer4.textContent = questionList[currentQuestionIndex].answerOptions[3].text

    answer1.setAttribute('data-correct', questionList[currentQuestionIndex].answerOptions[0].correct)
    answer2.setAttribute('data-correct', questionList[currentQuestionIndex].answerOptions[1].correct)
    answer3.setAttribute('data-correct', questionList[currentQuestionIndex].answerOptions[2].correct)
    answer4.setAttribute('data-correct', questionList[currentQuestionIndex].answerOptions[3].correct)

    var newbutton = document.createElement('button');

}

answerButtonsEl.addEventListener('click', function (event) {
    var isCorrect = event.target.dataset.correct;
    if (isCorrect === 'true') {
        answerIndicator.textContent = 'Correct!';
    } else {
        answerIndicator.textContent = 'Incorrect';
        score -= 10;
    }
    currentQuestionIndex++;
    showQuestion();
    // set timeout to delay the function running and set answerIndicator to ''
});

// WHEN I click the `start button`
startButton.addEventListener('click', startGame)

// THEN the `startQuiz` function runs
function startGame() {
    console.log('Started')
    // HIDE the start page
    startPage.classList.add('hide');
    // UNHIDE my question
    questionContainerEl.classList.remove('hide');
    // move to the next question in the array
    showQuestion();
    startTimer();
}

function setNextQuestion() {
    resetState();
    showQuestion(currentQuestionIndex);
}

function endQuiz() {
    var userInput = prompt('Please enter your initials');
    var finalScore = { initials: userInput, userScore: score };
    userInitials.push(finalScore);
    var userString = JSON.stringify(userInitials);
    localStorage.setItem('userInitials', userString);
}

// THEN a timer starts and I am presented with a question
function startTimer() {
    timerEl.textContent = 'Time: ' + score
    var timerInterval = setInterval(function () {
        timerEl.innerHTML = 'Time: ' + score--;
        if (score <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000)
}

// add endQuiz() when currentQuestionIndex is over
// * Set starting score = 100 (-- to subtract the timer by 1)

// * Start the interval to begin the score countdown




// WHEN I answer a question

// * When the user clicks one of the `answerButtons`

// WHEN I answer a question incorrectly
// setup click eventlistener to listen to all clicks
// event.target.matches("button")
// > var clickButtonContent = event.target.textContent;
// OR
// var clickButtonContent = event.target.getAttribute("data-choice", questionText);

// > The question is correct with clickButtonValue == questions[pointer].answer

// THEN time is subtracted from the clock
// > Subtract points from current score

// THEN I am presented with another question

// * Increase our pointer by 1
// * Clear out the previous question
// * Display the next question

// WHEN all questions are answered or the timer reaches 0
// pointer = questions.length - 1

// THEN the game is over
// function endGame()
// > Transition off of displaying questions
// clearInterval(interval)
// Clear out current question
// Show our results form for getting user's initials

// WHEN the game is over
// THEN I can save my initials and score
// > ON my initials form "submit"
// > var highscore = [];
// > GET the currently saved highscores out of localStorage
// localStorage.getItem("highscores")
// if (storedHighscores), 
// then highscores = JSON.parse(storedHighscores)
// else highscores = [];
// > Create a new list (for highscores)
// > Get the value of `initials` input
// > Append an object with the initals and highscores
// > Store our list of highscores in localStorage (JSON.stringify)