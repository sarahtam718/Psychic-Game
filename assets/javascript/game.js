// document ready - everything nested in here
document.addEventListener("DOMContentLoaded", function() {
  console.log("ready");
  // how to restart game? would i have to create a new function that i set off inside the onkeypress statement?
  // function data-again(computerGuess) {
  //   computerGuess[Math.floor(Math.random() * 27)]
  //   console.log("computer's new guess: " + computerGuess);
  // }

  // create counters
  var win = 0;
  var loss = 0;
  var guessesNum = 9;

  // connect document elements to javascript
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesLeftText = document.getElementById("guessesLeft-text");
  var userChoiceText = document.getElementById("userChoice-text");

  // variable (array) to limit computer options to letters
  var computerGuess = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  // computerChoice random letter - 27 because one more than 26 (arrays start at 0)
  var computerChoice = computerGuess[Math.floor(Math.random() * 27)];
  console.log("computer: " + computerChoice);

  // variable (empty array + push) to store userGuesses
  var userChoices = [];

  document.onkeyup = function(keyPress) {
    var userGuess = keyPress.key;
    // is the key a letter?
    var alphabet = /^[A-Za-z]+$/;
    if (keyPress.key.match(alphabet)) {
      // console.log("it's a letter");

      // userGuess input letter
      // console.log("user guess: " + keyPress.key);

      // push to empty array
      userChoices.push(keyPress.key);

      // keep track of letters in array
      console.log("user: " + userChoices);

      // compare computerGuess & userGuess (===)
      if (computerChoice === userGuess) {
        // update wins counter by 1
        win++;
        console.log("User wins!");
        // clear user array
        userChoices.length = 0;
        console.log("clear");
        // update guesses left to 9
        guessesNum = 9;
        console.log("we're back!");
        // clear computer choice
        computerChoice;
        // for the next line, had to change to 2 because otherwise would give an extra 0 guess
      } else if (computerChoice != userGuess && guessesNum >= 2) {
        // with each userGuess, decrease guesses left counter
        guessesNum--;
        console.log("Try again! Guesses Left: " + guessesNum);
      } else {
        console.log("User loses");
        // update losses counter by 1
        loss++;
        console.log("add one loss. losses: " + loss);
        // clear user array
        userChoices.length = 0;
        console.log("clear");
        // update guesses left to 9
        guessesNum = 9;
      }
      // pressed a non-letter key
    } else {
      console.log("Please guess a letter only");
      alert("Please guess letters only.");
    }
    // how would i be able to check for a duplicate userGuess?
    // I somehow would want to loop through the user index and compare each of the values to each other

    // display user's wins/losses/guesses so far
    winsText.textContent = "Wins: " + win;
    lossesText.textContent = "Losses: " + loss;
    guessesLeftText.textContent = "Guesses Left: " + guessesNum;
    userChoiceText.textContent = "User Guesses so far: " + userChoices;
  };
});
