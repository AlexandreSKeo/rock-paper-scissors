let playerScore = 0;
let computerScore = 0;

const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("#paper");
const scissorsBtnEl = document.querySelector("#scissors");
const resultEl = document.querySelector("#result");

// function that contains the logic for the computer to play rock paper scissors
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(playerScore, computerScore);

  if (playerSelection === computerSelection) {
    resultEl.textContent = "You picked the same! It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      resultEl.textContent = `You lose! Paper beats Rock, It's ${playerScore} to ${computerScore}, keep playing!`;
    } else {
      playerScore++;
      resultEl.textContent = `You win! Rock beats Scissors, It's ${playerScore} to ${computerScore}, keep playing!`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      resultEl.textContent = `You win! Paper beats Rock, It's ${playerScore} to ${computerScore}, keep playing!`;
    } else {
      computerScore++;
      resultEl.textContent = `You lose! Scissors beats Paper, It's ${playerScore} to ${computerScore}, keep playing!`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      resultEl.textContent = `You lose! Rock beats Scissors, It's ${playerScore} to ${computerScore}, keep playing!`;
    } else {
      playerScore++;
      resultEl.textContent = `You win! Scissors beats Paper, It's ${playerScore} to ${computerScore}, keep playing!`;
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultEl.textContent = `You win the game! Final score: ${playerScore} to ${computerScore}`;
    } else {
      resultEl.textContent = `You lose the game! Final score: ${playerScore} to ${computerScore}`;
    }
    playerScore = 0;
    computerScore = 0;
  }
}

rockBtnEl.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperBtnEl.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsBtnEl.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
