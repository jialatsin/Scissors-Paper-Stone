// 0 is rock
// 1 is paper
// 2 is scissors

function computerPlay() {
    computerNumber = Math.floor(Math.random() * choices.length);
    return choices[computerNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `You Draw! You both picked ${playerSelection}`;
    }
    else if (choices[choices.indexOf(playerSelection)+1] == computerSelection) {
        return `You Lost! ${capitalise(computerSelection)} beats ${capitalise(playerSelection)}`;
    } else {
        return `You Won! ${capitalise(playerSelection)} beats ${capitalise(computerSelection)}`;
    }
}

function capitalise(s) {
    return s[0].toUpperCase() + s.slice(1);
}

let playerSelection;
let choices = ["rock", "paper", "scissors"];

for (let i=0; i<5; i++) {
    while (true) {
        playerSelection = prompt("Rock, Paper or Scissors? Pick one.").toLowerCase();
        if (choices.includes(playerSelection)) {
            break;
        }
        else {
            alert("That is not a valid option. Pick again.");
        }
    }
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}