var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;
var userClickedPattern = [];

$("body").on("keydown", function () {
    nextSequence();
})

$(".btn").on("click", function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
})

function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100, playSound(randomChosenColor));
}

function playSound(name) {
    var sound = new Audio(src = "sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout( function() { $("#" + currentColor).removeClass("pressed") }, 100);
}
