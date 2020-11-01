// var interval; to do the `timed` functionality

// `interval = setInterval(fuction() {}, 1000)`

// clearInterval to stop the timeout

// VAR currentScore/timeLeft

// VAR pointer/index - Current position in the question array
var currentQuestionIndex

// shuffle the questions
var shuffledQuestions

// Question and answer variables
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-btns')

// VAR startButton
var startPage = document.getElementById('start-page');
var startButton = document.getElementById('start-btn');
var questionContainerEl = document.getElementById('questionContainer')

// OBJECT: QUESTIONS
var questions = [
    {
        // Question text
        question: 'What is used to repeat an action until a specified condition evaluates to false?',
        // List of answers
        answers: [
            { text: 'for loop', correct: true },
            { text: 'conditionals', correct: false },
            { text: 'repeat', correct: false },
            { text: 'while loop', correct: false }
        ]
    },
    {
        question: 'How do you declare a variable?',
        answers: [
            { text: 'vari', correct: false },
            { text: 'var', correct: true },
            { text: 'variable', correct: false },
            { text: 'v', correct: false }
        ]
    },
    {
        question: 'Values that are true or false are known as:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'objects', correct: false },
            { text: 'booleans', correct: true },
            { text: 'arrays', correct: false }
        ]
    },
    {
        question: 'How can you exit a loop?',
        answers: [
            { text: 'exit', correct: false },
            { text: 'return', correct: true },
            { text: 'leave', correct: false },
            { text: 'rtrn', correct: false }
        ]
    },
    {
        question: 'What is the comparison operator for “not equal”?',
        answers: [
            { text: '===', correct: false },
            { text: '<==', correct: false },
            { text: '>==', correct: false },
            { text: '!==', correct: true }
        ]
    },
    {
        question: 'Arrays should be wrapped in:',
        answers: [
            { text: 'curly brackets', correct: false },
            { text: 'parentheses', correct: false },
            { text: 'square brackets', correct: true },
            { text: 'quotation marks', correct: false }
        ]
    },
    {
        question: 'The process of outlining your code before you build it is known as:',
        answers: [
            { text: 'pre-coding', correct: false },
            { text: 'comment-coding', correct: false },
            { text: 'pseudo-coding', correct: true },
            { text: 'false-coding', correct: false }
        ]
    },
    {
        question: 'What is one way to get a user to input information?',
        answers: [
            { text: 'prompt', correct: true },
            { text: 'alert', correct: false },
            { text: 'confirm', correct: false },
            { text: 'console', correct: false }
        ]
    }
]

// GIVEN I am taking a code quiz


// WHEN I click the `start button`
startButton.addEventListener('click', startGame)

// THEN the `startQuiz` function runs
function startGame(){ 
    console.log('Started')
    // HIDE the start page
    startPage.classList.add('hide');
    // SHUFFLE my questions
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    // SET my current index to 0
    currentQuestionIndex = 0;
    // UNHIDE my question
    questionContainerEl.classList.remove('hide');
    // move to the next question in the array
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questions) {
    questionEl.innerText = questions.question;
    questions.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button);
    })
}

// THEN a timer starts and I am presented with a question

    // * Set starting score = 100 (-- to subtract the timer by 1)
    var score = 100;
    // * Start the interval to begin the score countdown

    // PRESENT the question = Create new HTML elements for the question content
        // > Set the #questionContainer divs innerHTML = "";
        // > Append an `h2` for the question text
        // > Append a new `button` for each choice

        // > var button = document.createElement('button');
        // > button.textContent = questionText
        // OR
        // > button.setAttribute("data-choice", questionText)

// WHEN I answer a question
function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function selectAnswer(event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass() {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass() {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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
