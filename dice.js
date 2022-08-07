function playDice() {
  // setting first dice


  var player1 = Math.random();
  var playerOneDice = Math.floor(player1 * 6) + 1;
  var diceOne = "images/dice" + playerOneDice + ".png";
  var image1 = document.querySelectorAll(".dices")[0];
  image1.setAttribute("src", diceOne);
  // setting second dice
  var player2 = Math.random();
  var playerTwoDice = Math.floor(player2 * 6) + 1;
  var diceTwo = "images/dice" + playerTwoDice + ".png";
  var image2 = document.querySelectorAll(".dices")[1];
  image2.setAttribute("src", diceTwo);

  // conditional statements
  if (playerOneDice > playerTwoDice) {
    document.querySelector("h1").innerHTML = "Computer wins the game 😈🤖";
    document.querySelector(".img1").style.backgroundColor = "#3EC70B";
    document.querySelector(".img1").classList.add("winner");
    document.querySelector(".img2").style.backgroundColor = "#F2D7D9";
  } else if (playerOneDice < playerTwoDice) {
    document.querySelector("h1").innerHTML = "Player Wins, congratulations ✌️🎈🎊🎉";
    document.querySelector(".img1").style.backgroundColor = "#F2D7D9";
    document.querySelector(".img2").style.backgroundColor = "#3EC70B";
    document.querySelector(".img2").classList.add("winner");
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw/Tie Game";
    document.querySelector(".img1").style.backgroundColor = "#393E46";
    document.querySelector(".img2").style.backgroundColor = "#393E46";
  }
}
var audio = new Audio("sound/roll.wav");

document.querySelector("button").onclick = function() {
  document.querySelector(".img1").classList.remove("winner");
  document.querySelector(".img2").classList.remove("winner");
  audio.play();
  playDice();
}
