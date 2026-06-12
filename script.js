```javascript
const leftUser = document.getElementById("leftUser");
const rightUser = document.getElementById("rightUser");

const tea = document.getElementById("tea");

const timeText = document.getElementById("time");
const bestText = document.getElementById("best");

const overlay = document.getElementById("overlay");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const restartBtn = document.getElementById("restartBtn");

const speechBubble = document.getElementById("speechBubble");

const drinkBtn = document.getElementById("drinkBtn");

let drinking = false;
let gameOver = false;

let teaLevel = 80;

let timer = 0;
let bestScore = 0;

let animationFrame;

function update() {

    if (gameOver) return;

    if (drinking) {

        timer += 0.016;
        timeText.innerText = timer.toFixed(2) + "s";

        teaLevel -= 0.15;

        if (teaLevel <= 0) {

            teaLevel = 0;

            resultTitle.innerText = "YOU WIN!";
            resultText.innerText =
                "You finished the drink in " +
                timer.toFixed(2) +
                " seconds!";

            overlay.style.display = "flex";

            gameOver = true;

            if (timer > bestScore) {

                bestScore = timer;
                bestText.innerText = bestScore.toFixed(2) + "s";

            }

        }

        tea.style.height = teaLevel + "%";

    }

    animationFrame = requestAnimationFrame(update);

}

update();


function startDrinking() {

    if (gameOver) return;

    drinking = true;

    rightUser.classList.remove("working");
    rightUser.classList.add("drinking");

}

function stopDrinking() {

    if (gameOver) return;

    drinking = false;

    rightUser.classList.remove("drinking");
    rightUser.classList.add("working");

}

drinkBtn.addEventListener("mousedown", startDrinking);
drinkBtn.addEventListener("mouseup", stopDrinking);
drinkBtn.addEventListener("mouseleave", stopDrinking);

drinkBtn.addEventListener("touchstart", startDrinking);
drinkBtn.addEventListener("touchend", stopDrinking);


function randomLook() {

    if (gameOver) return;

    leftUser.classList.add("suspicious");

    // 🤨 face duration
    setTimeout(() => {

        if (drinking) {

            caught();

        }
        else {

            leftUser.classList.remove("suspicious");

        }

    }, 500);

}


function caught() {

    gameOver = true;

    drinking = false;

    cancelAnimationFrame(animationFrame);

    speechBubble.style.display = "block";

    resultTitle.innerText = "YOU LOSE";

    resultText.innerText =
        "Caught red-handed at " +
        timer.toFixed(2) +
        "s";

    overlay.style.display = "flex";

    if (timer > bestScore) {

        bestScore = timer;

        bestText.innerText =
            bestScore.toFixed(2) + "s";

    }

}


function loopLook() {

    if (gameOver) return;

    let delay = Math.random() * 3000 + 1500;

    setTimeout(() => {

        randomLook();

        loopLook();

    }, delay);

}

loopLook();


restartBtn.addEventListener("click", () => {

    gameOver = false;

    drinking = false;

    timer = 0;

    teaLevel = 80;

    tea.style.height = "80%";

    timeText.innerText = "0.00s";

    overlay.style.display = "none";

    speechBubble.style.display = "none";

    leftUser.classList.remove("suspicious");

    rightUser.classList.remove("drinking");

    rightUser.classList.add("working");

    update();

    loopLook();

});
```
