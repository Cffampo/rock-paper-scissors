
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors: ");
    
    return choice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a tie!");
        } else if (computerChoice == "paper") {
            console.log("You lose! Rock loses to Paper");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("It's a tie!");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Paper loses to Scissors!");
            computerScore++;
        } else {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("It's a tie!");
        } else if (computerChoice == "rock") {
            console.log("You lose! Scissors loses to Rock!");
            computerScore++;
        } else {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        }
    }
}



function playGame() {

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("You win!");
    } else if(humanScore < computerScore){
        console.log("You lose!");
    } else {
        console.log("It's a tie!")
    }
}
playGame();



