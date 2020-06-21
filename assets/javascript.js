var pageContentEl = document.getElementById("page-content");
var timerEl = document.getElementById("timer-id");
var leaderHyperLinkEl = document.getElementById("highscore-id");
var quizQuestionEl = document.getElementById("quiz-id");
var containerEl = document.getElementById("container-wrapper");
var choiceListEl = document.getElementById("answer-style")

var timer = 80;
var highScore = [];
var quizQuestionsArray = [
    { q: "How do you iterate a variable?", choices:['Onclick', 'for loop', 'function', 'event'], answer: "for loop" },
    { q: "What is short for 'index'?", choices:['i', 'in', 'dex', 'ix'], answer: "i" },
    { q: "What is the measure of setInterval?", choices:['deciseconds', 'seconds','nanoseconds', 'miliseconds'], answer: "miliseconds" },
    { q: "How to add an element to HTML?", choices:['addElement', 'createElement', 'suspendChild', 'appendChild'], answer: "appendChild" },
    { q: "What is an eventListener?", choices:['Listens for Doms', 'Nothing', 'Let functions', 'New variables'], answer: "Listens for Doms" },
    { q: "How to store information?", choices:['storeItem', 'setItem', 'placeItem', 'pushItem'], answer: "setItem" },
    { q: "What is an array?", choices:['A function', 'A style class', 'contains data', 'Pushes to Dom'], answer: "contains data" }
];

var createHighScoresPage = function () {
    // need to recall stored information

    // push to high score array & sort function into high to low
    //global var = pulled var
    //function sortvariable (){
    //   global var  = storedScore.sort(function(a, b){return b-a});
    // append it to ol
    // }
    //
    // push it to the page as a list (for loop?)


};

var inputQuizInfo = function () {
    // create text for leader board

    // create an input field that stores a text and value

    // submit bring up createHighScoresPage();

};

// ignore this for now
// var countdown = function () {
//     var timeLeft = 80;

//     // calling the timer countdown
//     var timeInterval = setInterval(function () {
//         if (timeLeft > 0) {
//             timeLeft--;
//             timerEl.innerHTML = timeLeft
//         }
//         else if (timeLeft === 0) {
//             clearInterval(timeInterval);
//             inputQuizInfo(); // clear contents and go to quiz leader board
//         }
//     }, 1000);
// };
var checkAnswer = function () {


};

var startQuiz = function () {
    // var countdown = function () {
    quizQuestionEl.innerHTML = "";
    choiceListEl.innerHTML = "";
    console.log("1");

    var displayQuizQuestionEl = document.createElement("div");
    displayQuizQuestionEl.className = "display-text";
    displayQuizQuestionEl.innerHTML = quizQuestionsArray[0].q;
    quizQuestionEl.appendChild(displayQuizQuestionEl);
    console.log(displayQuizQuestionEl);

    for (var i = 0; i < quizQuestionsArray[0].choices.length; i++) {
        var displayOrderedAnswerList = document.createElement("li");
        displayOrderedAnswerList.className = "answer-btn";
        displayOrderedAnswerList.addEventListener("click", checkAnswer);
        displayOrderedAnswerList.innerHTML = quizQuestionsArray[0].choices[i];
        choiceListEl.appendChild(displayOrderedAnswerList);
        console.log(displayOrderedAnswerList);
    }
    var timeLeft = 80;
    // calling the timer countdown
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerHTML = "Time Left: " + timeLeft;
        }
        // quiz function needs to end
        else if (timeLeft === 0) {
            clearInterval(timeInterval);
            inputQuizInfo(); // clear contents and go to quiz leader board
            return;
        }

        for (var i = 0; i < quizQuestionsArray.length; i++) {
            // call question array and append the question to the DOM element



            // buttons that do on click


            // check to see if the selected button was correct or wrong


            // increase or decrease time based on answer


            // check to see if there is still countdown to move to next question


        }

    }, 1000);
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