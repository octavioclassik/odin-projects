// get random number from 0 to 2
function getCompChoice() {
    let cChoice = Math.floor(Math.random() * 3);
    if (cChoice == 0) {
        return "rock";
    } else if (cChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// get human choice
function getHumanChoice() {
  const choice = prompt("Choose: Rock / Paper / Scissors");
  return choice.toLowerCase();
}

function playGame(computer, human) {
    console.log(`Current scores: Computer: ${compScore}, Human: ${humanScore}`)
    if (computer == human) {
        console.log(`You chose ${human} and Computer chose ${computer}, It's a draw!!`);
    } else if (computer == "rock" && human == "scissors") {
        console.log(`You chose ${human} and Computer chose ${computer}, computer wins!!`);
        compScore += 1
    } else if (computer == "paper" && human == "rock") {
        console.log(`You chose ${human} and Computer chose ${computer}, computer wins!!`);
        compScore += 1
    } else if (computer == "scissors" && human == "paper") {
        console.log(`You chose ${human} and Computer chose ${computer}, computer wins!!`);
        compScore += 1
    } else {
        console.log(`You chose ${human} and Computer chose ${computer}, You win!!`);
        humanScore += 1
    }
}

function playRounds(game) {
    game(getCompChoice(), getHumanChoice());
    game(getCompChoice(), getHumanChoice());
    game(getCompChoice(), getHumanChoice());
    game(getCompChoice(), getHumanChoice());
    game(getCompChoice(), getHumanChoice());
    console.log(`Final scores are Computer: ${compScore}, Human: ${humanScore}`)
}

let humanScore = 0;
let compScore = 0;

playRounds(playGame);