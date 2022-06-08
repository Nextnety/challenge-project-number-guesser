let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    humanGuess < 0 || humanGuess > 10
        ? alert("You have entered a numner out of range, please try again!")
        : false;

    let humanDifference = Math.abs(target - humanGuess);
    let computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;

    /* if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    } */
};

let updateScore = (winner) => {
    if (winner === "human") {
        humanScore += 1;
        // or humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
};

let advanceRound = () => currentRoundNumber++;
