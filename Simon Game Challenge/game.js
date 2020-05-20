var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;
var started = false;
var userClickedPattern = [];

$("body").on("keydown", function () {
    if(!started) {
        started = true;
        nextSequence();
    }
})

$(".btn").on("click", function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    }
    else {
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over") }, 200);
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100, playSound(randomChosenColor));
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function playSound(name) {
    var sound = new Audio(src = "sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout( function() { $("#" + currentColor).removeClass("pressed") }, 100);
}
