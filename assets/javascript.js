var pageContentEl = document.getElementById("page-content");
var timerEl = document.getElementById("timer-id");
var leaderHyperLinkEl = document.getElementById("highscore-id")
var quizQuestionEl = document.getElementById("quiz-id")
var containerEl = document.getElementById("container-wrapper")

var timer = 80;
var highScore = [];
var quizQuestions = [
    { q: "How do you iterate a variable", a: "Onclick", c: "for loop", b: "function", d: "event"},
    { q: "What is short for 'index'?", c: "i", a: "in", b: "dex", d: "ix"},
    { q: "What is the measure of setInterval?", a: "deciseconds", d: "seconds", b: "nanoseconds", c: "miliseconds"},
    { q: "How to add an element to HTML?", a: "addElement", d: "createElement", b: "suspendChild", c: "appendChild"},
    { q: "What is an eventListener?", c: "Listens for Doms", a: "Nothing", b: "Let functions", d: "New variables"},
    { q: "How to store information?", a: "storeItem", c: "setItem", b: "placeItem", d: "pushItem"},
    { q: "What is an array?", a: "A function", b: "A style class", c: "contains data", d: "Pushes to Dom"}
];

var createHighScoresPage = function () {
    // need to recall stored information

    // push to high score array

    // push it to the page as a list (for loop?)
};

var inputQuizInfo = function () {
    // create text for leader board

    // create an input field that stores a text and value 

};

// can I call to this function? 
function countdown() {
    var timeleft = 80;

    // calling the timer countdown
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerHTML = timeLeft
        }
        else (timeLeft === 0) {
            clearInterval(timeInterval);
            inputQuizInfo(); // clear contents and go to quiz leader board
        }
    }, 1000);
};


var startQuiz = function () {
    countdown(); // start countdown

    // call question array and append the question to the DOM elements


    // buttons that do on click


    // check to see if the selected button was correct or wrong


    // increase or decrease time based on answer

    // check to see if there is still countdown to move to next question

    // quiz function needs to end?

};

var createFrontPage = function () {
    //creating main display
    var displayTextEl = document.createElement("div");
    displayTextEl.className = "display-text";
    displayTextEl.innerHTML = "<h2>Javascript Quiz Challenge!</h2> <br /> <p> Clicking the button below will start a 7 question timed quiz. Each question you get right will add to the timer and any question you get wrong will subtract time. The more time left, the higher your score! Let's get started! </p>";
    pageContentEl.appendChild(displayTextEl);

    //creating high score button
    var highscoreBtn = document.createElement("button");
    highscoreBtn.className = "highscore-style";
    highscoreBtn.innerHTML = "<p>View High Scores</p>"
    leaderHyperLinkEl.appendChild(highscoreBtn);

    //creating timer
    var displayTimerEl = document.createElement("p");
    displayTimerEl.className = "timer-style";
    displayTimerEl.innerHTML = "Time Left: " + timer;
    timerEl.appendChild(displayTimerEl);

    // creating start quiz button
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "answer-btn";
    startQuizBtn.innerHTML = "Start!";
    startQuizBtn.setAttribute("onclick", startQuiz())
    displayTextEl.appendChild(startQuizBtn);

    // how to know when clicking startQuiz button it transitions to the quiz?
};

// is this necessary?
var saveHighScores = function () {

};

// is this necessary?
var recallHighScores = function () {

};


//which eventlisteners am I missing?

createFrontPage();