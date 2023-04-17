# number-guesser
Codeacademy's JavaScript project.

Project Goals
In this project, you’ll write JavaScript functions to power a small guessing game. Your code will run in the browser instead of the terminal, and you can use your browser’s console to help you test your functions and view any syntax errors.

Project Requirements
In this project, you’ll write four functions in script.js. We’ve provided some additional JavaScript code in game.js that will call your functions based on user interactions, but you don’t need to look at game.js and shouldn’t edit it if you want your project to work as intended. As you complete this project, make sure that all of your functions are named exactly as specified within these tasks so that they can be called correctly when the game is played. In this project, your JavaScript functions are incorporated into a website that also uses HTML/CSS. You’ll learn more about how to do this from scratch as you continue your JavaScript journey. Explore the [completed version](https://content.codecademy.com/PRO/independent-practice-projects/number-guesser/example/index.html?_gl=1*ys1mma*_ga*NDk3Mzk5MDMyMy4xNjc3Njk2MDE3*_ga_3LRZM6TM9L*MTY4MTczMjY4My4xNzguMS4xNjgxNzM1MDM1LjIzLjAuMA..) of the project to get a sense of what you’ll be building.

Tasks
1. Create a generateTarget() function. This function should return a random integer between 0 and 9.

The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.

2. Create a compareGuesses() function. This function:

Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.
The purpose of this function is to be called each round to determine which guess is closest to the target number.

3. Create an updateScore() function. This function:

Has a single parameter. This parameter will be a string value representing the winner.
Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
Does not need to return any value.
The purpose of this function is to be used to correctly increase the winner’s score after each round.

4. Create an advanceRound() function. This function should increase the value of currentRoundNumber by 1.

The purpose of this function is to be used to update the round number after each round.

After completing advanceRound(), your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.

5. Test that your code is working properly by invoking your newly written functions within script.js with sample inputs. You can delete this code once you’re convinced that everything is working as it should.

6. Great work! If you’d like to see the solution, move to the next task. If you’d like to extend your project on your own, you could consider the following:

You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.

7. 
Great work! Visit [our forums](https://discuss.codecademy.com/t/number-guesser-challenge-project-javascript/462394?_gl=1*wxigbl*_ga*NDk3Mzk5MDMyMy4xNjc3Njk2MDE3*_ga_3LRZM6TM9L*MTY4MTczMjY4My4xNzguMS4xNjgxNzM1MDM1LjIzLjAuMA..) to compare your project to our sample solution code. You can also [learn how to host your own solution on GitHub](https://www.codecademy.com/learn/learn-git) so you can share it with other learners! Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.