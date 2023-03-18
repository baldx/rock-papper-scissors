
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


let btn = document.querySelectorAll("button");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

 function PlayerSelection(playerInput) {
    btn.forEach((button) => { //btn runs for each argument once with the parameter "button"
    button.addEventListener("click", () => { //button has an event 
        const img = button.querySelector("img"); //if button is clicked img is assigned to img query 
        playerInput = img.alt; //playerInput equals to images alt
        console.log(playerInput);
        button.classList.toggle("btnClick");
        return playerInput;
    });
});
}

function playRound(roundPlayerSelection, computerSelection) {
computerSelection = getComputerChoice();
roundPlayerSelection = PlayerSelection();
const container = document.querySelector("#info");
const divText = document.createElement("p");
        if (roundPlayerSelection === computerSelection) {
            divText.textContent = "Tie!";
            container.appendChild(divText);
            }
            else if (roundPlayerSelection == "paper" && computerSelection == "rock"){
                console.log("You won!");
            }
            else if (roundPlayerSelection == "scissors" && computerSelection == "rock") {
                console.log("You lost!");
            }
            else if (roundPlayerSelection == "rock" && computerSelection == "paper") {
                console.log("You lost!");
            }
            else if (roundPlayerSelection == "scissors" && computerSelection == "paper") {
                console.log("You won!");
            }
            else if (roundPlayerSelection == "rock" && computerSelection == "scissors") {
                console.log("You won!");
            }
            else if (roundPlayerSelection == "paper" && computerSelection == "scissors"){
                console.log("You lost!");
            }
}


playRound();