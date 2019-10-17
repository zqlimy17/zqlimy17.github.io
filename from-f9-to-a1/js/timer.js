let startTimer = () => {
    mainMenuSound.pause();
    if (activeGameMode === "Timed") {
        timeBar.show();
        timeBar.addClass('colorchange');
        timeLeft = time;
        let x = setInterval(function() {
            if (!isPaused) {
                timeLeft = timeLeft - 0.01;
                timeBar.width(((timeLeft/time)*100)+'%');
            }
            if (timeLeft <= 0.01) {
                clearInterval(x);
                gameEnd();
            }
        },10);
        pausedMainMenu.on('click', () => {
            clearInterval(x);
            isPaused = false;
        })
        inGameEndGame.on('click', () => {
            clearInterval(x);
        })
    } else if (activeGameMode === "Casual") {
        timeBar.hide();
    }
};

const startGameButtonClicked = () => {
    tipsSpace.text(tips[Math.floor(Math.random()* tips.length)]);
    scoreCounter = 0;
    currentScore.text(scoreCounter);
    let counter = 3;
    startMenu.hide();
    countdown.show();
    startCountdown.text(counter);
    let count = setInterval(function(){
        counter--;
        startCountdown.text(counter);
        if(counter === 0) {
            goSound.play();
            startCountdown.text('Go!');
            clearInterval(count);
        } else {
            countdownSound.play();
        }
        mainMenuSound.volume -= 0.3;
    },1000);
    setTimeout(function(){
        gameStart();
    }, 4000);
};

// > buttons.js