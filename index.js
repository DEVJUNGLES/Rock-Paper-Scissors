const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

const computerTurn = () => {
  ranNum = Math.floor(Math.random() * 3) + 1;
  switch (ranNum) {
    case 1:
      computer = "Rock";

      break;
    case 2:
      computer = "Paper";

      break;

    case 3:
      computer = "Scissors";

      break;

    default:
      break;
  }
};

const check = () => {
  if (computer == player) {
    resultText.style.color = "yellow";
    return "Draw, try again";
  } else if (computer == "Rock") {
    if (player == "Paper") {
      resultText.style.color = "green";
      return "You win!";
    } else {
      resultText.style.color = "red";
      return "You lose!";
    }
    // return player == "Paper" ? "You win" :  "You lose";
  } else if (computer == "Paper") {
    if (player == "Scissors") {
      resultText.style.color = "green";
      return "You win!";
    } else {
      resultText.style.color = "red";
      return "You lose!";
    }
    // return player == "Scissors" ? "You win" : "You lose";
  } else if (computer == "Scissors") {
    if (player == "Rock") {
      resultText.style.color = "green";
      return "You win!";
    } else {
      resultText.style.color = "red";
      return "You lose!";
    }
    // return player == "Rock" ? "You win" : "You lose";
  }
};

choiceBtn.forEach((e) =>
  e.addEventListener("click", () => {
    player = e.textContent;
    computerTurn();
    playerText.textContent = `Player:${player}`;
    computerText.textContent = `Computer:${computer}`;
    resultText.textContent = `Result: ${check()}`;
  })
);
