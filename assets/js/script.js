/*

# Tasks
​
* var interval; to do the `timed` functionality

* interval = setInterval(fuction() {}, 1000)
​
* clearInterval to stop the timeout
​
* VAR currentScore/timeLeft
​
* VAR questions - Array
​
* VAR pointer/index - Current position in the question array
​
* VAR startButton

*/

// OBJECT: QUESTIONS
var questions = [
    {
        // Question text
        // List of question answers
        // Correct answer property
            // answer:"correct"
    }
]

​
// GIVEN I am taking a code quiz
​
// WHEN I click the `start button`

function startGame(){
​
}

// 'startButton'.addEventListener("click", startGame);
​
// THEN a timer starts and I am presented with a question
​
    // * Set starting score = 75 (-- to subtract the timer by 1)
    // * Start the interval to begin the score countdown

​    // * PRESENT the question = Create new HTML elements for the question content
        // > Set the #questionContainer divs innerHTML = "";
        // > Append an `h2` for the question text
        // > Append a new `button` for each choice

        // > var button = document.createElement('button');
        // > button.textContent = questionText
        // OR
        // > button.setAttribute("data-choice", questionText)

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
