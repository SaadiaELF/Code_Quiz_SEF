var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var question = document.getElementById("question");
var secondsLeft = 60;
var Questions =
{
    question: "What does HTML stand for ?",
    answers: {
        a: {
            q: "Hyper Text Markup Language",
            value: true
        },
        b: {
            q: "High Text Markup Language",
            value: false
        },
        c: {
            q: "Hyper Tabular Markup Language",
            value: false
        },
        d: {
            q: "None of these",
            value: false
        },
    },
    question: "Markup tags tell the web browser :",
    answers: {
        a: {
            q: "How to organise the page",
            value: false
        },
        b: {
            q: "How to display the page",
            value: true
        },
        c: {
            q: "How to display message box on page",
            value: false
        },
        d: {
            q: "None of these",
            value: false
        },
    },
    question: "Web pages start with which of the following tag ?",
    answers: {
        a: {
            q: "<body>",
            value: false
        },
        b: {
            q: "<head>",
            value: false
        },
        c: {
            q: "html",
            value: true
        },
        d: {
            q: "<title>",
            value: false
        },
    },
    question: "How can you open a link in a new browser window ?",
    answers: {
        a: {
            q: "<a href = url target = new>",
            value: false
        },
        b: {
            q: "<a href = url target = _blank>",
            value: true
        },
        c: {
            q: "<a href = url.new>",
            value: false
        },
        d: {
            q: "<a href = url target = open>",
            value: false
        },
    },
    question: "What tag is used to display a picture in a HTML page ?",
    answers: {
        a: {
            q: "<picture>",
            value: false
        },
        b: {
            q: "<image>",
            value: false
        },
        c: {
            q: "<img>",
            value: true
        },
        d: {
            q: "<src>",
            value: false
        },
    },
    question: "HTML web pages can be read and rendered by _________.",
    answers: {
        a: {
            q: "Compiler",
            value: false
        },
        b: {
            q: "Server",
            value: false
        },
        c: {
            q: "Interpreter",
            value: false
        },
        d: {
            q: "Browser",
            value: true
        },
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

