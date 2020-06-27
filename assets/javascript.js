var pageContentEl = document.getElementById("page-content");
var timerEl = document.getElementById("timer-id");
var leaderHyperLinkEl = document.getElementById("highscore-id");
var quizQuestionEl = document.getElementById("quiz-id");
var containerEl = document.getElementById("container-wrapper");
var choiceListEl = document.getElementById("answer-style")
var feedbackAnswerEl = document.getElementById("feedback-answer");

var currentQuestionIndex = 0;
var timer = 80;
var highScore = [];
var quizQuestionsArray = [
    { q: "How do you cycle through an array?", choices: ['onclick', 'for loop', 'function', 'event'], answer: "for loop" },
    { q: "What is the symbol for 'index'?", choices: ['i', 'in', 'dex', 'ix'], answer: "i" },
    { q: "What is the measure of 'setInterval()'?", choices: ['deciseconds', 'seconds', 'nanoseconds', 'miliseconds'], answer: "miliseconds" },
    { q: "How do you place an element to HTML?", choices: ['addElement', 'createElement', 'suspendChild', 'appendChild'], answer: "appendChild" },
    { q: "What is an eventListener?", choices: ['Listens for Doms', 'Nothing', 'Let functions', 'New variables'], answer: "Listens for Doms" },
    { q: "How do you store information in the web browser?", choices: ['storeItem', 'setItem', 'placeItem', 'pushItem'], answer: "setItem" },
    { q: "What is an array?", choices: ['A function', 'A style class', 'Contains data', 'Pushes to Dom'], answer: "Contains data" }
];

function refreshPage(){
    window.location.reload();
} 

function createHighScoresPage() {
    console.log("1")

    quizQuestionEl.innerHTML = "";
    choiceListEl.innerHTML = "";
    feedbackAnswerEl.innerHTML = "";
    // need to recall stored information
    // get task items from local storage
    var startAgainBtn = document.createElement("button");
    startAgainBtn.className = "answer-btn";
    startAgainBtn.innerHTML = "Play Again!";
    startAgainBtn.onclick = refreshPage;
    feedbackAnswerEl.appendChild(startAgainBtn);

    // this technically not working
    highScore = localStorage.getItem("storedscores");
    if (highScore === null) {
        highScore = [];
        return false;
    } else {
        highScore = highScore.sort(function (a, b) { return b - a });
        highScore.forEach(function (i) {
        var highScoreList = document.createElement("li");
        highScoreList.setAttribute("class", "choice");
        highScoreList.className = "answer-btn";
        highScoreList.textContent = i;
        choiceListEl.appendChild(highScoreList);
        });
    };
    

    

    // push to high score array & sort function into high to low
    //global var = pulled var
    //function sortvariable (){
    //   global var  = storedScore.sort(function(a, b){return b-a});
    // append it to ol
    //
    // push it to the page as a list (for loop?)

};

var inputQuizInfo = function () {
    // store the scores
    var storedScores = []
    var saveHighScores = function () {
        if (inputInitials.innerHTML === "") {
            localStorage.setItem("storedScores", JSON.stringify(storedScores));
        } else {
            alert("You must input your name before submitting!")
        }
        choiceListEl = "";
    };

    //ready the page
    quizQuestionEl.innerHTML = "";
    choiceListEl.innerHTML = "";
    feedbackAnswerEl.innerHTML = "";
    var finalScore = timerEl.textContent;

    //creating the page elements/content
    var displayHsHeading = document.createElement("h2");
    displayHsHeading.className = "quiz-question-style";
    displayHsHeading.innerHTML = "Quiz Ended! <br> <p>Your final score is: " + finalScore + "</p>";
    quizQuestionEl.appendChild(displayHsHeading);

    var inputInitials = document.createElement("input");
    inputInitials.setAttribute("placeholder", "Enter Name Here");
    //inputInitials.setAttribute("for", name)
    inputInitials.setAttribute("name", name)
    inputInitials.className = "answer-btn";
    inputInitials.type = "text";
    choiceListEl.appendChild(inputInitials);

    var storeScoresBtn = document.createElement("button");
    storeScoresBtn.className = "answer-btn";
    storeScoresBtn.innerHTML = "Submit!"
    storeScoresBtn.onclick = saveHighScores;
    choiceListEl.appendChild(storeScoresBtn);

    var viewHighScoreBtn = document.createElement("button")
    viewHighScoreBtn.className = "answer-btn";
    viewHighScoreBtn.innerHTML = "View High Scores!";
    viewHighScoreBtn.onclick = createHighScoresPage;
    choiceListEl.appendChild(viewHighScoreBtn);
    // create an input field that stores a text and value

};

//controls the timer and the timerEl.innterHTML is the variable
function countdown() {
    // calling the timer countdown
    var timeInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            timerEl.innerHTML = "Time Left: " + timer
        }
        else if (timer === 0) {
            clearInterval(timeInterval);
            inputQuizInfo(); // clear contents and go to quiz leader board
        }
    }, 1000);
};

// cycles through the next question and creates the choice buttons
function getQuestion() {
    var currentQuestion = quizQuestionsArray[currentQuestionIndex];
    var title = document.getElementById("quiz-id")
    title.textContent = currentQuestion.q
    choiceListEl.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i) {
        var answerButton = document.createElement("button");
        answerButton.setAttribute("class", "choice");
        answerButton.setAttribute("value", choice);
        answerButton.className = "answer-btn";
        answerButton.textContent = i + 1 + "." + " " + choice;
        answerButton.onclick = questionClick;
        choiceListEl.appendChild(answerButton);
    });
};

// what happens when user clicks an answe
function questionClick() {
    feedbackAnswerEl.innerHTML = ""
    if (this.value !== quizQuestionsArray[currentQuestionIndex].answer) {
        timer -= 15;
        var wrongAnswer = document.createElement("h2")
        wrongAnswer.innerHTML = "Wrong!";
        wrongAnswer.className = "feedback-answer"
        feedbackAnswerEl.appendChild(wrongAnswer);
    }
    if (this.value === quizQuestionsArray[currentQuestionIndex].answer) {
        timer += 5;
        var correctAnswer = document.createElement("h2");
        correctAnswer.innerHTML = "Correct!";
        correctAnswer.className = "feedback-answer"
        feedbackAnswerEl.appendChild(correctAnswer);
    }
    if (timer <= 0) {
        timer = 0;
        clearInterval();
        inputQuizInfo();
    };
    timer.textContent = "Time Left: " + timer
    currentQuestionIndex++;
    if (currentQuestionIndex === quizQuestionsArray.length) {
        clearInterval();
        inputQuizInfo();
    } else {
        getQuestion();
    }
};

// start's the quiz and functions
var startQuiz = function () {
    countdown();
    quizQuestionEl.innerHTML = "";
    choiceListEl.innerHTML = "";
    getQuestion();
};

function createFrontPage() {
    //creating main display
    var displayTextEl = document.createElement("div");
    displayTextEl.className = "display-text";
    displayTextEl.innerHTML = "<h2>Javascript Quiz Challenge!</h2> <br /> <p> Clicking the button below will start a 7 question timed quiz. Each question you get right will add to the timer and any question you get wrong will subtract time. The more time left, the higher your score! Let's get started! </p>";
    quizQuestionEl.appendChild(displayTextEl);

    //creating timer
    var displayTimerEl = document.createElement("p");
    displayTimerEl.className = "timer-style";
    displayTimerEl.innerHTML = "Time Left: " + timer;
    timerEl.appendChild(displayTimerEl);

    // creating start quiz button
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "answer-btn";
    startQuizBtn.innerHTML = "Start!";
    startQuizBtn.addEventListener("click", startQuiz)
    displayTextEl.appendChild(startQuizBtn);
};

createFrontPage();