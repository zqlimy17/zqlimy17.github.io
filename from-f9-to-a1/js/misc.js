// AUDIO
let promise = mainMenuSound.play();

if (promise !== undefined) {
    promise.then(_ => {
        console.log('Autoplay started!')
    }).catch(error => {
        console.log('Autoplay was prevented.')
    });
}

$('.btn').on('click', () => {
    gameButtonSound.play();
})

// LOCAL STORAGE
mainMenuHighScore.hide();
highScoreStorage.push(JSON.parse(window.localStorage.getItem('highScore')));
if (highScoreStorage[0] > 0) {
    currentHighScore = highScoreStorage[0];
    highScore.text(currentHighScore);
    mainMenuHighScore.show();
}
checkHighScoreUnlockDifficulty();

// TOOLTIPS
$('[data-toggle="tooltip"]').tooltip();

// SHOW/HIDE SECTIONS

countdown.hide();
inGame.hide();
endGame.hide();
pausedScreen.hide();