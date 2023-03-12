prompt("Welcome to rock paper scissors\nChoose from rock paper scissors")

function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 34) {
        computerChoice = "rock";
    }
    else if (computerChoice <= 67 && computerChoice > 34) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Tie!")
    }
}