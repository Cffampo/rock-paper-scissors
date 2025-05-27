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

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors: ");
    
    return choice;
}

console.log(getHumanChoice());

