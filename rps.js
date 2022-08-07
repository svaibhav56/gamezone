function playGame() {
  // for computerhand
  computer = Math.floor(Math.random() * 3) + 1;

  // for playerhand
  player = 0;
  if (document.getElementById('radioRock').checked == true) {
    player = 1;

  } else if (document.getElementById('radioPaper').checked == true) {
    player = 2;

  } else if (document.getElementById('radioScissor').checked == true) {
    player = 3;

  } else {
    alert("Hey Player, Please select you hand from right panel to play the game");
    player = 0;
    computer = 4;
  }
  // setting player
  var playerImage = "images/photo" + player + ".png";
  var playerHand = document.querySelectorAll(".images")[1];
  playerHand.setAttribute("src", playerImage);
  playerHand.classList.add("winner");
  // setting computer
  var computerImage = "images/photo" + computer + ".png";
  var computerHand = document.querySelectorAll(".images")[0];
  computerHand.setAttribute("src", computerImage);
}

// for winner decleration
function titleWinner() {

  if (player === computer) {
    document.querySelector("h1").innerHTML = "It's a Draw/Tie game";
  } else if (player === 1 && computer === 3) {
    document.querySelector("h1").innerHTML = "Player Wins, congratulations ✌️🎈🎊🎉";
  } else if (player === 2 && computer === 1) {
    document.querySelector("h1").innerHTML = "Player Wins, congratulations ✌️🎉🎈🎊";
  } else if (player === 3 && computer === 2) {
    document.querySelector("h1").innerHTML = "Player Wins, congratulations ✌️🎊🎉🎈";
  } else {
    document.querySelector("h1").innerHTML = "Computer wins the game 🤖😈";
  }
  if (player === 0) {
    document.querySelector("h1").innerHTML = "Choose the correct hand and play 😀";
  }
}
var audio = new Audio("sound/mouseclick.wav")

// for button
document.querySelector(".btn").onclick = function() {
  audio.play();
  playGame();
  titleWinner();
}
