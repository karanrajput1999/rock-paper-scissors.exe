const playerBtns = document.querySelectorAll(".btns");
const playerTurn = document.querySelector("#player-turn-info");
const computerTurn = document.querySelector("#computer-turn-info");
const winInfo = document.querySelector("#win-info");
const playerScoreBoard = document.querySelector("#player-score");
const computerScoreBoard = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");
const computerInputs = ["👊🏽", "✋🏽", "✌🏽"];
let playerScore = 0;
let computerScore = 0;

// player button functionality.
playerBtns.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const button = ev.currentTarget;
    playerTurn.innerText = button.innerText;
    computerInp();
    checkWin();
    gameWon();
  });
});

// computer functionality.
function computerInp() {
  const randomVal = Math.floor(Math.random() * computerInputs.length);
  computerTurn.innerText = computerInputs[randomVal];
}

// function to check who won.
function checkWin() {
  const player = playerTurn.innerText;
  const computer = computerTurn.innerText;

  if (player === computer) {
    winInfo.innerText = "It's a tie ! 🤝🏽";
  } else if (player === "✋🏽") {
    if (computer === "✌🏽") {
      winInfo.innerText = "Computer won ! 🦾";
      computerScore++;
      computerScoreBoard.innerText = computerScore;
    } else {
      winInfo.innerText = "Player won ! 💁🏽‍♂️";
      playerScore++;
      playerScoreBoard.innerText = playerScore;
    }
  } else if (player === "👊🏽") {
    if (computer === "✋🏽") {
      winInfo.innerText = "Computer won ! 🦾";
      computerScore++;
      computerScoreBoard.innerText = computerScore;
    } else {
      winInfo.innerText = "Player won ! 💁🏽‍♂️";
      playerScore++;
      playerScoreBoard.innerText = playerScore;
    }
  } else if (player === "✌🏽") {
    if (computer === "👊🏽") {
      winInfo.innerText = "Computer won ! 🦾";
      computerScore++;
      computerScoreBoard.innerText = computerScore;
    } else {
      winInfo.innerText = "Player won ! 💁🏽‍♂️";
      playerScore++;
      playerScoreBoard.innerText = playerScore;
    }
  }
}

// checking if player or computer has won the game
function gameWon() {
  if (playerScore === 10) {
    winInfo.innerText = "Player has won the game ! 🙎🏽‍♂️🏆";
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
  if (computerScore === 10) {
    winInfo.innerText = "Computer has won the game ! 💻🏆";
    setTimeout(() => {
      resetGame();
    }, 3000);
  }
}

// event listener for reset button
resetBtn.addEventListener("click", () => {
  resetGame();
});

// function to reset the game
function resetGame() {
  playerScoreBoard.innerText = 0;
  computerScoreBoard.innerText = 0;
  playerTurn.innerText = "";
  winInfo.innerText = "Play your turn...";
  computerTurn.innerText = "";
}
