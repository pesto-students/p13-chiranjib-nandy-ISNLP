function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numberOfGuesses = 0;

  while (numberOfGuesses < totalGuesses) {
    let userInput = prompt(`Enter a number between 1 and 100 (Guesses left: ${totalGuesses - numberOfGuesses})`);

    if (userInput === null) {
      return 0; // User pressed Cancel
    }

    let userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
      alert("Please enter a valid number.");
      continue;
    }

    numberOfGuesses++;

    if (userGuess === numToGuess) {
      alert(`Congratulations! You guessed the number ${numToGuess} in ${numberOfGuesses} tries.`);
      return numberOfGuesses;
    } else if (userGuess < numToGuess) {
      alert(`${userGuess} is too small. Guess a larger number.(Guesses left: ${totalGuesses - numberOfGuesses}`);
    } else {
      alert(`${userGuess} is too large. Guess a smaller number.(Guesses left: ${totalGuesses - numberOfGuesses}`);
    }
  }


// Example usage:
let numToGuess = 7;
let totalGuesses = 3;
let numberOfTries = playGuessingGame(numToGuess, totalGuesses);
