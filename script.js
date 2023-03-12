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


    function playRound(playerSelection, computerSelection ) {
        computerSelection = getComputerChoice()
        for (i = 0; i < 5; i++) {
            playerSelection = prompt("Welcome to rock paper scissors\nChoose from rock paper scissors")
            if (playerSelection == "rock" && computerSelection == "rock") {
                console.log("Tie!");
                }
                else if (playerSelection == "paper" && computerSelection == "rock"){
                    console.log("You won!");
                }
                else if (playerSelection == "scissors" && computerSelection == "rock") {
                    console.log("You lost!");
                }
                else if (playerSelection == "rock" && computerSelection == "paper") {
                    console.log("You lost!");
                }
                else if (playerSelection == "paper" && computerSelection == "paper"){
                    console.log("Tie!");
                }
                else if (playerSelection == "scissors" && computerSelection == "paper") {
                    console.log("You won!");
                }
                else if (playerSelection == "rock" && computerSelection == "scissors") {
                    console.log("You won!");
                }
                else if (playerSelection == "paper" && computerSelection == "scissors"){
                    console.log("You lost!");
                }
                else if (playerSelection == "scissors" && computerSelection == "scissors") {
                    console.log("Tie!");
                }
                else {
                    console.log("Invalid input")
                }
        }


    }
