// MASTER OPTIONS
let time = 30,
difficultyMode = 'easy',
activeGameMode = "Timed",
timeLeft = time,
operation = "",
currentHighScore = "",
ans = 0,
isPaused = false,
scoreCounter = 0,
highScoreStorage = [];

// SELECTORS
const startMenu = $('#start-menu'),
countdown = $('#countdown'),
inGame = $('#in-game'),
endGame = $('#end-game'),
scoreBoard = $('#score-board'),
startGame = $('#start-game'),
userInput = $('#user-input'),
timeBar = $('#time-bar'),
tipsSpace = $('#tips'),
endGameScore = $('#end-game-score'),
pausedScreen = $('#paused-screen'),
masterTime = $('#master-time'),
operationButton = $('.operation-button'),
startCountdown = $('#start-countdown'),
gameSpace = $('#mathable'),
mainMenuHighScore = $('#main-menu-high-score'),
highScore = $('.high-score'),
currentScore = $('#current-score'),

// BUTTON SELECTORS
restartGameButton = $('#restart-game'),
mainMenuButton = $('.back-to-main-menu'),
additionButton = $('#addition'),
subtractionButton = $('#subtraction'),
multiplicationButton = $('#multiplication'),
divisionButton = $('#division'),
randomButton = $('#random'),
pauseButton = $('#pause-button'),
inGameEndGame = $('#in-game-end-game'),
resumeButton = $('#resume-button'),
pausedMainMenu = $('#paused-main-menu'),
gameMode = $('.game-mode'),
difficultyOptions = $('.difficulty-options');

// AUDIO
let mainMenuSound = new Audio('audio/mainmenu.wav'),
inGameSound = new Audio('audio/in-game.mp3'),
gameButtonSound = new Audio('audio/buttonclick.mp3'),
countdownSound = new Audio('audio/countdown-timer.mp3'),
goSound = new Audio('audio/start-voice.mp3'),
correctSound = new Audio('audio/correct-voice.mp3'),
incorrectSound = new Audio('audio/incorrect-voice.mp3'),
gameEndSound = new Audio('audio/gameend.mp3');

// TIPS
const tips = [
"Tip: Hit SPACE to skip!",
"Tip: Stuck? Try the Casual game mode!",
"Tip: Too hard? HIT SPACE TO SKIP!",
"Tip: Spacebar to skip."
]

//FUNCTIONS

let game = () => {
    userInput.focus();
    switch (operation) {
        case "addition":
        addition();
        break;
        case "subtraction":
        subtraction();
        break;
        case "multiplication":
        multiplication();
        break;
        case "division":
        division();
        break;
        default:
        random();
    }
};

let addition = () => {
    switch (difficultyMode) {
        case "easy":
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a + b;
        gameSpace.text(a + '+' + b);
        break;
        case "medium":
        var a = Math.ceil(Math.random() * 75) + 25;
        var b = Math.ceil(Math.random() * 75) + 25;
        var c = Math.ceil(Math.random() * 75) + 25;
        ans = a + b +c;
        gameSpace.text(a + '+' + b + '+' + c);
        break;
        default:
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        var d = Math.ceil(Math.random() * 47) + 3;
        ans = a + b + c + d;
        gameSpace.text(`${a} + ${b} + ${c} + ${d}`);
    }
};

let subtraction = () => {
    switch (difficultyMode) {
        case "easy":
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a - b;
        gameSpace.text(a + '-' + b);
        break;
        case "medium":
        var a = Math.ceil(Math.random() * 25) + 25;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        ans = a - b - c;
        gameSpace.text(`${a} - ${b} - ${c}`);
        break;
        default:
        var a = Math.ceil(Math.random() * 80) + 20;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        var d = Math.ceil(Math.random() * 47) + 3;
        ans = a - b - c - d;
        gameSpace.text(`${a} - ${b} - ${c} - ${d}`);
    }
}


let multiplication = () => {
    let randoming = Math.random();
    switch (difficultyMode) {
        case "easy":
        var a = Math.ceil(Math.random() * 9) + 3;
        var b = Math.ceil(Math.random() * 9) + 3;
        ans = a * b;
        gameSpace.text(a + 'x' + b);
        break;
        case "medium":
        randoming = Math.random();
        var a = Math.ceil(Math.random() * 8)+4;
        var b = Math.ceil(Math.random() * 4)+1;
        if (randoming < 0.5) {
            ans = a * a * b;
            gameSpace.text(`${a}² x ${b}`);
        } else {
            ans = a * b * b;
            gameSpace.text(`${a} x ${b}²`);
        }
        break;
        default:
        randoming = Math.random();
        var a = Math.ceil(Math.random() * 4)+2;
        var y = (Math.ceil(Math.random() * 4)+2);
        switch (true) {
            case (randoming < 0.33):
            var b = y * y;
            var c = Math.ceil(Math.random() * 4)+2;
            ans = a * a * Math.sqrt(b) * c;
            gameSpace.text(`${a}² x √${b} x ${c}`);
            break;
            case (randoming < 0.67):
            var c = y * y;
            var b = Math.ceil(Math.random() * 4)+2;
            ans = a * b * b * Math.sqrt(c);
            gameSpace.text(`${a} x ${b}² x √${c}`);
            break;
            default:
            var d = (Math.ceil(Math.random() * 4)+2);
            var b = (Math.ceil(Math.random() * 4)+2);
            var c = (Math.ceil(Math.random() * 4)+2);
            ans = a * b * c * d;
            gameSpace.text(`${a} x ${b} x ${c} x ${d}`);
        }
    }
};

let division = () => {
    switch (difficultyMode) {
        case "easy":
        var b = Math.ceil(Math.random() * 9) + 3;
        var a = b * (Math.ceil(Math.random() * 9) +3);
        ans = a / b;
        gameSpace.text(a + '÷' + b);
        break;
        case "medium":
        var b = Math.ceil(Math.random() * 2) + 3;
        var y = b * (Math.ceil(Math.random() * 7));
        var a = y * y;
        ans = y / b
        gameSpace.text(`√${a} ÷ ${b}`);
        break;
        default:
        var z = Math.ceil(Math.random() * 2) + 2;
        var b = z * z;
        var y = b * (Math.ceil(Math.random() * 3));
        var a = y * y;
        ans = y/z;
        gameSpace.text(`√${a} ÷ √${b}`);
    }
};

let random = () => {
    let r = "";
    r = Math.floor(Math.random() * 4);
    switch (true) {
        case (r === 0):
        addition();
        break;
        case (r === 1):
        subtraction();
        break;
        case (r === 2):
        multiplication();
        break;
        default:
        division();
    }
};

let enter = (event) => {
    let answer = event.target.value;
    if (answer == ans) {
        userInput.addClass('flash')
        setTimeout(function() {
            userInput.removeClass('flash')
        }, 400);
        correct();
        game();
    } else {
        userInput.addClass('shake')
        setTimeout(function() {
            userInput.removeClass('shake')
        }, 400);
        wrong();
    };
};

userInput.on('keydown', function (event) {
    if (event.keyCode === 13) {
        enter(event);
    } else if (event.keyCode === 32) {
        game();
    }
});

const gameStart = () => {
    timeBar.css('animation-play-state', '');
    inGameSound.play();
    inGameSound.volume = 0.5;
    inGameSound.loop = true;
    countdown.hide();
    inGame.show();
    game();
    startTimer();
};

const gameEnd = () => {
    inGameSound.pause();
    inGameSound.currentTime = 0;
    gameEndSound.play();
    inGame.hide();
    endGame.show();
    endGameScore.append(scoreCounter);
    mainMenuHighScore.show();
    if (currentHighScore < scoreCounter) {
        currentHighScore = scoreCounter;
        highScore.text(currentHighScore);
        highScoreStorage.pop();
        highScoreStorage.push(currentHighScore);
        window.localStorage.setItem('highScore', JSON.stringify(highScoreStorage));
    };
    checkHighScoreUnlockDifficulty();
};

// > check.js