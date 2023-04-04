let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

/*
const compareGuesses = (userGuess, computerGuess, target) => {
    const userDifferense = Math.abs(userGuess - target);
    const computerDifferense = Math.abs(computerGuess - target);
    if (userDifferense <= computerDifferense) {
        return true;
    } else {
        return false;
    }
}
*/

// if ((x >= xmin) && (x <= xmax)) solution start
let min = 0;
let max = 9;

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const numberInRange = (userGuess, min, max) => {
  return userGuess >= min && userGuess <= max;
}

const compareGuesses = (userGuess, computerGuess, target) => {
  if (numberInRange(userGuess, min, max)) {
    return getAbsoluteDistance(userGuess, target) <= getAbsoluteDistance(computerGuess, target);
  }
  alert('Please enter a number between 0 and 9!');
}
// if ((x >= xmin) && (x <= xmax)) solution end

// getAbsoluteDistance solution start
/*
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const compareGuesses = (userGuess, computerGuess, target) => {
    if (userGuess < 0 || userGuess > 9) {
        alert('Please enter a number between 0 and 9!')
    } else if (getAbsoluteDistance(userGuess, target) <= getAbsoluteDistance(computerGuess, target)) {
        return true;
    } else {
        return false;
    }
}
*/
// getAbsoluteDistance solution end

const updateScore = winner => {
    if (winner === 'human') {
        return humanScore++;
    } else {
        return computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;