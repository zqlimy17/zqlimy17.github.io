const correct = () => {
    correctSound.play();
    switch (difficultyMode) {
        case "easy":
        switch (operation) {
            case "addition":
            scoreCounter = scoreCounter + 2;
            break;
            case "subtraction":
            scoreCounter = scoreCounter + 3;
            break;
            case "multiplication":
            scoreCounter = scoreCounter + 4;
            break;
            case "division":
            scoreCounter = scoreCounter + 5;
            break;
            default:
            switch (true) {
                case (operation === "addition"):
                scoreCounter = scoreCounter + 4;
                break;
                case (operation === "subtraction"):
                scoreCounter = scoreCounter + 6;
                break;
                case (operation === "multiplication"):
                scoreCounter = scoreCounter + 8;
                break;
                default:
                scoreCounter = scoreCounter + 10;
            }
        }
        break;
        case "medium":
        switch (operation) {
            case "addition":
            scoreCounter = scoreCounter + 20;
            break;
            case "subtraction":
            scoreCounter = scoreCounter + 30;
            break;
            case "multiplication":
            scoreCounter = scoreCounter + 40;
            break;
            case "division":
            scoreCounter = scoreCounter + 50;
            break;
            default:
            switch (true) {
                case (operation === "addition"):
                scoreCounter = scoreCounter + 40;
                break;
                case (operation === "subtraction"):
                scoreCounter = scoreCounter + 60;
                break;
                case (operation === "multiplication"):
                scoreCounter = scoreCounter + 80;
                break;
                default:
                scoreCounter = scoreCounter + 100;
            }
        }
        break;
        default:
        switch (operation) {
            case "addition":
            scoreCounter = scoreCounter + 200;
            break;
            case "subtraction":
            scoreCounter = scoreCounter + 300;
            break;
            case "multiplication":
            scoreCounter = scoreCounter + 400;
            break;
            case "division":
            scoreCounter = scoreCounter + 500;
            break;
            default:
            switch (true) {
                case (operation === "addition"):
                scoreCounter = scoreCounter + 400;
                break;
                case (operation === "subtraction"):
                scoreCounter = scoreCounter + 600;
                break;
                case (operation === "multiplication"):
                scoreCounter = scoreCounter + 800;
                break;
                default:
                scoreCounter = scoreCounter + 1000;
            }
        }
    }
    currentScore.text(scoreCounter);
    userInput.val("");
};

const wrong = () => {
    incorrectSound.play();
    scoreCounter = Math.floor(scoreCounter *0.5);
    currentScore.text(scoreCounter);
    userInput.val("");
};

const checkHighScoreUnlockDifficulty = () => {
    if (currentHighScore >= 25) {
        $('#medium-tooltip').tooltip('dispose');
        $('#medium-button').css('pointer-events', '');
        difficultyOptions.eq(1).attr('disabled', false);
    };
    if (currentHighScore >= 250) {
        $('#hard-tooltip').tooltip('dispose')
        $('#hard-button').css('pointer-events', '');
        difficultyOptions.eq(2).attr('disabled', false);
    }
}

// > timer.js