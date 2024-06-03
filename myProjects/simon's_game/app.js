let gameSeq = [];
let userSeq = [];
let score = [];

let btns = ["emerald", "gunmetal", "purple", "gray"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game has started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelUp, 700);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>! <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setInterval(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        highestScore();
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};