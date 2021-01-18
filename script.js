var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("startButton");
var startPage = document.getElementById("startPage");
var secondsLeft = 60;

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
    startPage.style.display = "none"
});