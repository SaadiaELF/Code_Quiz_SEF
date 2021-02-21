var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var questionContainer = document.getElementById("question");
var questionRow = document.getElementById("questionRow");
var answerRow = document.getElementById("answerRow");
var answer = document.getElementById("answer");
var scorePage = document.getElementById("scorePage");
var yourScore = document.getElementById("yourScore");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var scoresList = document.getElementById("scoresList");
var highscoresPage = document.getElementById("highscoresPage");
var highscoresBtn = document.getElementById("highscores");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var secondsLeft = 60;
var score = 0;
var showScores = false;
// Object that holds questions and their answers 
var Questions = [
    {
        question: "What does HTML stand for ?",
        answers: [
            ["Hyper Text Markup Language", true],
            ["High Text Markup Language", false],
            ["Hyper Tabular Markup Language", false],
            ["None of these", false]
        ]
    },

    {
        question: "Markup tags tell the web browser :",
        answers: [
            ["How to organise the page", false],
            ["How to display the page", true],
            ["How to display message box on page", false],
            ["None of these", false],
        ]
    },

    {
        question: "Web pages start with which of the following tag ?",
        answers: [
            ["<body>", false],
            ["<head>", false],
            ["<html>", true],
            ["<title>", false],
        ]
    },

    {
        question: "How can you open a link in a new browser window ?",
        answers: [
            ["<a href = url target = new>", false],
            ["<a href = url target = _blank>", true],
            ["<a href = url.new>", false],
            ["<a href = url target = open>", false],
        ]
    },

    {
        question: "What tag is used to display a picture in a HTML page ?",
        answers: [
            ["<picture>", false],
            ["<image>", false],
            ["<img>", true],
            ["<src>", false],
        ]
    },

    {
        question: "HTML web pages can be read and rendered by _________.",
        answers: [
            ["Compiler", false],
            ["Server", false],
            ["Interpreter", false],
            ["Browser", true],
        ]
    },
];
// Click to show highscores page
highscoresBtn.addEventListener("click", function (event) {
    event.preventDefault();
    startPage.classList.add("hide");
    questionContainer.classList.add("hide");
    scorePage.classList.add("hide");
    highscoresPage.classList.remove("hide");
    renderHighscores();
});

// Setting up a timer 
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time : " + secondsLeft;

        if (secondsLeft <= 0 || showScores === true) {
            showScore();
            clearInterval(timerInterval);
            showScores = false;
        };
    }, 1000);

};

// When the start button is clicked the timer starts , the first page disappear 
// and the first question will be shown
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    startTimer();
    startPage.classList.add("hide");
    questionContainer.classList.remove("hide");

    for (var i = 0; i < Questions.length; i++) {
        createQuestions(i);
        clickBtn(i + 1);
    };

    document.getElementById("question01").classList.remove("hide");

});

// Create a div that holds a question and its choices
function createQuestions(i) {

    var h2Tag = document.createElement("H2");
    h2Tag.innerHTML = Questions[i].question;
    var col = document.createElement("DIV");
    col.setAttribute("id", "question0" + (i + 1));
    col.setAttribute("class", "col-8 hide");
    col.setAttribute("style", "margin-top : 30px");
    col.appendChild(h2Tag);


    Questions[i].answers.forEach(function (item, j) {

        var btn = document.createElement("BUTTON");
        btn.setAttribute("id", "choice0" + (j + 1));
        btn.setAttribute("class", "btnChoice" + (i + 1) + " btn btn-outline-danger btn-lg btn-rounded btn-block");
        btn.textContent = Questions[i].answers[j][0];
        questionRow.appendChild(col);
        col.appendChild(btn);

    });

};

// When a choice is clicked 
function clickBtn(a) {
    var qst = document.querySelector('#question0' + a);
    var btns = qst.querySelectorAll('.btnChoice' + a);
    btns.forEach(function (btn, i) {
        btn.addEventListener("click", function () {
            // If the btnChoice is clicked the previous question is hidden and the next question is shown
            if (a < Questions.length) {
                createQuestions(a);
                qst.classList.add("hide");
                trueFalse(a, i);
                document.getElementById('question0' + (a + 1)).classList.remove("hide");
            }
        });
    });

    if (a == 6) {
        btns.forEach(function (btn, i) {
            btn.addEventListener("click", function () {
                trueFalse(a, i);
                showScore();
            });
        });

    }
};


function showScore() {

    questionRow.classList.add("hide");
    answerRow.classList.add("hide");
    scorePage.classList.remove("hide");
    yourScore.append(score);
    saveName();
    showScores = true;

}

function trueFalse(a, i) {
    // if the answers is true increment the score by 10 and show "Correct answer !!"
    if (Questions[a - 1].answers[i][1]) {
        score += 10;
        answer.textContent = "Correct answer !!"
        answer.style.color = "green"
        answerRow.classList.remove("hide");

        // if the answers is false increment the score by 10 and show "Wrong answer !!"
    } else {
        secondsLeft -= 5;
        answer.textContent = "Wrong answer !!"
        answer.style.color = "red"
        answerRow.classList.remove("hide");
    };

}

// Creating locl storage to store initials and scores
function saveName() {
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        var scoreObj = { name: '', score: '' };
        scoreObj.name = initials.value;
        scoreObj.score = score;
        localStorage.setItem("ScoresObj", JSON.stringify(scoreObj));
        var ScoresList = JSON.parse(localStorage.getItem("ScoresList")) || [];
        if (scoreObj) ScoresList.push(scoreObj);
        localStorage.setItem("ScoresList", JSON.stringify(ScoresList));

        var ScoresListSorted = ScoresList.sort(function (n1, n2) {
            return n2.score - n1.score;
        });
        localStorage.setItem("ScoresListSorted", JSON.stringify(ScoresListSorted));

        renderHighscores();

    });
}

function renderHighscores() {
    scorePage.classList.add("hide");
    highscoresPage.classList.remove("hide");
    var scoresArr = JSON.parse(localStorage.getItem("ScoresListSorted"));

    for (var i = 0; i < scoresArr.length; i++) {
        var elt = document.createElement("li");
        elt.innerHTML = scoresArr[i].name.toUpperCase() + "---" + scoresArr[i].score;
        scoresList.appendChild(elt);
    }
}

back.addEventListener("click", function (event) {
    event.preventDefault();
    timeEl.textContent = "Time : 0";
    secondsLeft = 60;
    startPage.classList.remove("hide");
    questionContainer.classList.add("hide");
    scorePage.classList.add("hide");
    highscoresPage.classList.add("hide");
});

clear.addEventListener("click", function (event) {
    event.preventDefault();
    scoresList.textContent = "";
    localStorage.clear();
});