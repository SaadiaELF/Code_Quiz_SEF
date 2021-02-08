var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var questionContainer = document.getElementById("question");
var questionRow = document.getElementById("questionRow");
var answerRow = document.getElementById("answerRow");
var answer = document.getElementById("answer");
var scorePage = document.getElementById("scorePage");
var secondsLeft = 60;
var score = 0;
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

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time : " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        };
    }, 1000);

};

startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    startTimer();
    startPage.style.display = "none";
    questionContainer.style.display = "block";
    for (var i = 0; i < Questions.length; i++) {
        createQuestions(i);
        clickBtn(i + 1);
    };

    document.getElementById("question01").style.display = "block";

});

function createQuestions(i) {//5

    var h2Tag = document.createElement("H2");
    h2Tag.innerHTML = Questions[i].question;
    var col = document.createElement("DIV");
    col.setAttribute("id", "question0" + (i + 1));//6
    col.setAttribute("class", "col-6");
    col.setAttribute("style", "margin-top : 30px");
    col.appendChild(h2Tag);

    col.style.display = "none";

    Questions[i].answers.forEach(function (item, j) {

        var btn = document.createElement("BUTTON");
        btn.setAttribute("id", "choice0" + (j + 1));
        btn.setAttribute("class", "btn btn-outline-info btn-lg btn-rounded btn-block");
        btn.textContent = Questions[i].answers[j][0];
        questionRow.appendChild(col);
        col.appendChild(btn);

    });

};


function clickBtn(a) {
    var qst = document.querySelector('#question0' + a);//6
    var btns = qst.querySelectorAll('.btn');
    btns.forEach(function (btn, i) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            if (a < Questions.length) {
                createQuestions(a);//6
                qst.style.display = "none";//6

                if (Questions[a - 1].answers[i][1]) {
                    score += 10;
                    answer.textContent = "Correcr answer !!"
                    answer.style.color = "green"
                    answerRow.classList.remove("hide");
                } else {
                    secondsLeft -= 5;
                    answer.textContent = "Wrong answer !!"
                    answer.style.color = "red"
                    answerRow.classList.remove("hide");
                };
                document.getElementById('question0' + (a + 1)).style.display = "block";
            }

            if (secondsLeft === 0) {
                questionContainer.style.display = "none";
            };

        });
    });
};


function showScore(a) {

    qst.style.display = "none";
    answerRow.style.display = "none";
    scorePage.style.display = "block";

}