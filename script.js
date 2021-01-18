var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var question = document.getElementById("question");
var secondsLeft = 60;
var Questions =
{
    question: "What does HTML stand for ?",
    answers: {
        a: ["Hyper Text Markup Language", true],
        b: ["High Text Markup Language", false],
        c: ["Hyper Tabular Markup Language", false],
        d: ["None of these", false]
    },

    question: "Markup tags tell the web browser :",
    answers: {
        a: ["How to organise the page", false],
        b: ["How to display the page", true],
        c: ["How to display message box on page", false],
        d: ["None of these", false],
    },

    question: "Web pages start with which of the following tag ?",
    answers: {
        a: ["<body>", false],
        b: ["<head>", false],
        c: ["html", true],
        d: ["<title>", false],
    },

    question: "How can you open a link in a new browser window ?",
    answers: {
        a: ["<a href = url target = new>", false],
        b: ["<a href = url target = _blank>", true],
        c: ["<a href = url.new>", false],
        d: ["<a href = url target = open>", false],
    },

    question: "What tag is used to display a picture in a HTML page ?",
    answers: {
        a: ["<picture>", false],
        b: ["<image>", false],
        c: ["<img>", true],
        d: ["<src>", false],
    },

    question: "HTML web pages can be read and rendered by _________.",
    answers: {
        a: ["Compiler", false],
        b: ["Server", false],
        c: ["Interpreter", false],
        d: ["Browser", true],
    },
};

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time : " + secondsLeft;
    }, 1000);

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    };
};

startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    startTimer();
    startPage.style.display = "none";
    question.style.display = "block";
});

