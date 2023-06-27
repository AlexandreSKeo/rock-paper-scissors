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

  if (playerSelection === computerSelection) {
    return "You picked the same! It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats Rock";
    } else {
      return "You lose! Scissors beats Paper";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beats Paper";
    }
  }
}
