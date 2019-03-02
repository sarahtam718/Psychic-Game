// document ready - everything nested in here
document.addEventListener("DOMContentLoaded", function() {
  console.log("ready");
});

// press any key to begin game
// nest everything below inside this
// document.onkeyup = function(event) {
//   console.log(event.key);
// };

// variable (array + push) to store computerGuess
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

// computerChoice random letter - starts immediately
var computerChoice = computerGuess[Math.floor(Math.random() * 27)];
console.log("computer: " + computerChoice);

// variable (empty array + push) to store userGuesses
var userChoices = [];

document.onkeyup = function(keyPress) {
  var userGuess = keyPress.key;
  // userGuess input letter
  console.log("user guess: " + keyPress.key);
  // push to empty array
  userChoices.push(keyPress.key);
  // keep track of letters in array
  console.log("user: " + userChoices);
  // update userGuess array (display)
  // if else for pressing the same key twice or not a letter key - maybe alert?
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
  } else if (computerChoice != userGuess && guessesNum > 0) {
    console.log("Try again!");
  }
  // else if (guessesNum = 0){
  //   console.log("User loses");
  //   // update losses counter by 1
  //   loss--;
  //   // update guesses left to 9
  //   guessesNum = 9;
  // }
};

// make wins & losses start values
var win = 0;
var loss = 0;

// create guesses left counter
var guessesNum = 9;

// with each userGuess, decrease guesses left counter
guessesNum--;

// } else if (computerGuess != userGuess && guessLeft > 0) {
//   console.log("Take another guess");
// decrease guesses left
// } else if ((guessLeft = 0)) {
//   console.log("Computer wins :(");
// increase loss counter
// clear arrays
// update guesses left to 9
// };
