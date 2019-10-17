startGame.attr('disabled', true);

startGame.on('click', () => {
    startGameButtonClicked();
    countdownSound.play();

});

restartGameButton.on('click', () => {
    countdownSound.play();
    startGameButtonClicked();
    endGame.hide();
    endGameScore.text("");
});

operationButton.on('click', (event) => {
    $('#start-tooltip').tooltip('dispose');
    let x = event.target.id;
    operationButton.removeClass('active');
    $(event.currentTarget).addClass('active');
    operation = x;
    startGame.attr('disabled', false);
});

gameMode.on('click', (event) => {
    gameMode.removeClass('active');
    $(event.currentTarget).addClass('active');
    masterTime.text($(event.currentTarget).attr('value'));
    activeGameMode = $(event.currentTarget).text();
});

difficultyOptions.on('click', (event) => {
    difficultyOptions.removeClass('active');
    $(event.currentTarget).addClass('active');
    difficultyMode = $(event.currentTarget).attr('value');
});

inGameEndGame.on('click', () => {
    gameEnd();
});

mainMenuButton.on('click',() => {
    mainMenuSound.volume = 1;
    mainMenuSound.play();
    mainMenuSound.loop = true;
    pausedScreen.hide();
    countdown.hide();
    inGame.hide();
    endGame.hide();
    startMenu.show();
    endGameScore.text("");
});

pauseButton.on('click', () => {
    inGameSound.pause();
    timeBar.css('animation-play-state', 'paused');
    isPaused = true;
    pausedScreen.show();
    inGame.hide();
});

resumeButton.on('click', () => {
    inGameSound.play();
    timeBar.css('animation-play-state', '');
    isPaused = false;
    pausedScreen.hide();
    inGame.show();
});

// > misc.js