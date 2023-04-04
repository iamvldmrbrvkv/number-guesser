let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    const userDifferense = Math.abs(userGuess - secretNumber);
    const computerDifferense = Math.abs(computerGuess - secretNumber);
    if (userDifferense >= computerDifferense) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        return humanScore++;
    } else {
        return computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;