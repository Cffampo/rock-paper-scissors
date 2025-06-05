
let humanScore = 0;
let computerScore = 0;

// Gets the computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) //random number. either 0, 1, or 2

    console.log(choice);

    if(choice === 0){
        choice = "Rock";
    } else if (choice === 1){
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

// Gets the logic for one round
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            const message = document.createElement("h4");
            message.textContent = "It's a tie!";
            content.append(message);
        } else if (computerChoice == "paper") {
            const message = document.createElement("h4");
            message.textContent = "You lose! Rock loses to Paper";
            computerScore++;
            content.append(message);
        } else {
            const message = document.createElement("h4");
            message.textContent = "You win! Rock beats Scissors!";
            humanScore++;
            content.append(message);
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "paper") {
            const message = document.createElement("h4");
            message.textContent = "It's a tie!";
            content.append(message);
        } else if (computerChoice == "scissors") {
            const message = document.createElement("h4");
            message.textContent = "You lose! Paper loses to Scissors!";
            computerScore++;
            content.append(message);
        } else {
            const message = document.createElement("h4");
            message.textContent = "You win! Paper beats Rock!"
            humanScore++;
            content.append(message);
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "scissors") {
            const message = document.createElement("h4");
            message.textContent = "It's a tie!";
            content.append(message);
        } else if (computerChoice == "rock") {
            const message = document.createElement("h4");
            message.textContent = "You lose! Scissors loses to Rock!";
            computerScore++;
            content.append(message);
        } else {
            const message = document.createElement("h4");
            message.textContent = "You win! Scissors beats paper";
            humanScore++;
            content.append(message);
        }
    }

    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;


    if(humanScore == 5){
        alert("You Win!");
    }

    if(computerScore == 5){
        alert("You lose!");
    }

}

const content = document.querySelector(".content");
content.style.backgroundColor = '#f0f0f0';
content.style.padding = '20px';
content.style.borderRadius = '10px';
content.style.width = '300px';
content.style.margin = '20px auto';
content.style.textAlign = 'center';
content.style.fontFamily = 'Arial, sans-serif';


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.style.backgroundColor = '#4CAF50';  // nice green
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.padding = '10px 20px';
  button.style.margin = '10px';
  button.style.borderRadius = '5px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.transition = 'background-color 0.3s ease';

  
  
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#45a049';
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#4CAF50';
  });
});


const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");


rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})



