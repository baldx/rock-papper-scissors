

// function getComputerChoice(computerChoice) {
//     computerChoice = Math.floor(Math.random() * 100);
//     if (computerChoice <= 34) {
//         computerChoice = "rock";
//     }
//     else if (computerChoice <= 67 && computerChoice > 34) {
//         computerChoice = "paper";
//     }
//     else {
//         computerChoice = "scissors";
//     }
//     return computerChoice;
// }

// // function PlayerSelection(playerInput, lowerInput) {
// //         playerInput = prompt("Choose from rock paper scissors");
// //         lowerInput = playerInput.toLowerCase();
// //         return lowerInput;
// // }

// function playRound(roundPlayerSelection, computerSelection ) {
// computerSelection = getComputerChoice();
// roundPlayerSelection = PlayerSelection();
//         if (roundPlayerSelection == "rock" && computerSelection == "rock") {
//             console.log("Tie!");
//             }
//             else if (roundPlayerSelection == "paper" && computerSelection == "rock"){
//                 console.log("You won!");
//             }
//             else if (roundPlayerSelection == "scissors" && computerSelection == "rock") {
//                 console.log("You lost!");
//             }
//             else if (roundPlayerSelection == "rock" && computerSelection == "paper") {
//                 console.log("You lost!");
//             }
//             else if (roundPlayerSelection == "paper" && computerSelection == "paper"){
//                 console.log("Tie!");
//             }
//             else if (roundPlayerSelection == "scissors" && computerSelection == "paper") {
//                 console.log("You won!");
//             }
//             else if (roundPlayerSelection == "rock" && computerSelection == "scissors") {
//                 console.log("You won!");
//             }
//             else if (roundPlayerSelection == "paper" && computerSelection == "scissors"){
//                 console.log("You lost!");
//             }
//             else if (roundPlayerSelection == "scissors" && computerSelection == "scissors") {
//                 console.log("Tie!");
//             }
//             else {
//                 console.log("Invalid input")
//             }
// }

// for (i = 0; i < 5; i++) {
//   playRound()  
// }
