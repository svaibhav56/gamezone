var gamePattern = [];
const allImages = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var level = 0;
var started = false;
var userClickedPatterns = [];


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPatterns = [];
  level++;
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 8);
  let randomChoosenImage = allImages[randomNumber];
  gamePattern.push(randomChoosenImage);
  $("#" + randomChoosenImage).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenImage);
}

$("img").click(function() {
  var userClickedImages = $(this).attr("id");
  userClickedPatterns.push(userClickedImages);
  playSound(userClickedImages);
  animatePress(userClickedImages);
  checkAnswer(userClickedPatterns.length - 1);
});

function checkAnswer(currentlevel) {
  if (gamePattern[currentlevel] === userClickedPatterns[currentlevel]) {
    if (gamePattern.length === userClickedPatterns.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sound/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
