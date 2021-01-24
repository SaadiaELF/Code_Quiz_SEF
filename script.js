var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var questionContainer = document.getElementById("question");
var questionText = document.getElementById("questionText");
var row = document.getElementById("row");
var secondsLeft = 60;
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
            ["html", true],
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
    }, 1000);

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    };
};

startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    startTimer();
    startPage.style.display = "none";
    questionContainer.style.display = "block";
    nextQuestion(0);
   
});

function createQuestions(i) {

    var h2Tag = document.createElement("H2");
    h2Tag.innerHTML = Questions[i].question;
    var col = document.createElement("DIV");
    col.setAttribute("id", "question0" + (i + 1));
    col.setAttribute("class", "col-6");
    col.setAttribute("style", "margin-top : 30px");
    col.appendChild(h2Tag);
    //document.getElementById("question0"+ (i + 1)).style.display = "block";
    //col.style.display = "block";
    Questions[i].answers.forEach(function (item, j) {

        var btn = document.createElement("BUTTON");
        btn.setAttribute("id", "choice0" + (j + 1));
        btn.setAttribute("class", "btn btn-outline-info btn-lg btn-rounded btn-block");
        btn.textContent = Questions[i].answers[j][0];
        row.appendChild(col);
        col.appendChild(btn);
    });

};

function clickBtn(a) {
    var btns = document.querySelectorAll('.btn')
    btns.forEach(function (btn, i) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("question0"+a).style.display = "none";
            createQuestions(a);
        });
    });
};


function nextQuestion(a) {
    createQuestions(a);
    clickBtn(a+1);
    
}
