var pageContentEl = document.getElementById("page-content");
var timerEl = document.getElementById("timer-id");
var leaderHyperLinkEl = document.getElementById("highscore-id")
var quizQuestionEl = document.getElementById("quiz-id")
var containerEl = document.getElementById("container-wrapper")

var timer = 80;
var highScore = [];
var quizQuestions = [
    {q: "How do you iterate a variable" }
];

var createHighScoresPage = function () {

};

var inputQuizInfo = function () {

};

function timerCountdown () {
    var timeleft = 80;

    // calling the timer countdown
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerHTML = timeLeft
        }
        else {
            timerEl.innerHTML = 0;
            clearInterval(timeInterval);
            inputQuizInfo();
        }
    }, 1000);
};


var startQuiz = function () {
    
};

var createFrontPage = function() {

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

    if (startQuizBtn = onclick) {
        pageContentEl.remove();
        startQuiz();
    };
};




createFrontPage();