// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// VARIABLE DECLARATION
// lowercase letter array
var lowerCaseLetters = [
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
  "z",
];

// uppercase letter array - don't want to type out all the letters again so running a for loop on lowerCaseLetters
// lowerCaseLetters.slice makes a copy of lowerCaseLetters so it doesn't change original array
var upperCaseLetters = lowerCaseLetters.slice(0, lowerCaseLetters.length);
for (var i = 0; i < upperCaseLetters.length; i++) {
  upperCaseLetters[i] = upperCaseLetters[i].toUpperCase();
}

// numbers array
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// special characters array
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "?",
  "'",
  "(",
  ")",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "[",
  "]",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// create master array of all possible characters
var masterArray = [].concat(
  lowerCaseLetters,
  upperCaseLetters,
  numbers,
  specialCharacters
);

console.log(masterArray);
// Pseudo-code: outline in normal English

// create generatePassword function

function generatePassword() {
  // prompt user for length
  var passwordLength = prompt(
    "How long would you like your password to be? \nMust be between 8 and 128 characters"
  );
  // error handling - is it between 8-128 characters?
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Sorry, that is an invalid input. \nPlease input a number 8 and 128");
    generatePassword();
  } else {
    function choosecharacters() {
      // prompt user to confirm all character selections separately
      // store answers in an array
      var whatCharacters = {
        lowerCase: confirm(
          "Would you like lowercase letters in your password?"
        ),
        upperCase: confirm(
          "Would you like uppercase letters in your password?"
        ),
        numbers: confirm("Would you like numbers in your password?"),
        specialCharacters: confirm(
          "Would you like special characters in your password?"
        ),
      };
      if (
        // error handling - did they select at least one option?
        whatCharacters.lowerCase === false &&
        whatCharacters.upperCase === false &&
        whatCharacters.numbers === false &&
        whatCharacters.specialCharacters === false
      ) {
        alert("Please select at least one character type.");
        choosecharacters();
      } else {
        function createPassword() {
          // use inputs to generate password

          if (whatCharacters.lowerCase === false) {
            // if they selected lowercase, add all lowerCaseLetters to masterArray
            masterArray.splice(0, 25);
          }
          if (whatCharacters.upperCase === false) {
            // if they selected uppercase, add all upperCaseLetters to masterArray
            masterArray.splice(26, 51);
          }
          if (whatCharacters.numbers === false) {
            masterArray.splice(52, 61);
          }
          if (whatCharacters.specialCharacters === false) {
            // call for random special character
            masterArray.splice(62, 91);
          }
          console.log(masterArray);
        }
        createPassword();
        // return the password from the generatePassword function either as an alert or in the box
      }
    }
    choosecharacters();
  }
}

// console.log(masterArray);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
