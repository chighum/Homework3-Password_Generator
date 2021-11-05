// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Pseudo-code: outline in normal English

// create generatePassword function
function generatePassword() {
  // prompt user for length
  var passwordLength = prompt(
    "How long would you like your password to be? \nMust be between 8 and 128 characters"
  );
  // error handling - is it between 8-128 characters?
  if (passwordLength < 8 || passwordLength > 128) {
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
          // set the password string length to passwordLength using setAttribute()?

          if (whatCharacters[0]) {
            // call for random letter from letters array
          }
          if (whatCharacters[1]) {
            // call for random letter from letters.toUpperCase()
          }
          if (whatCharacters[2]) {
            var randomNum = Math.floor(Math.random() * 10);
          }
          if (whatCharacters[3]) {
            // call for random special character
          }
          //
        }
        createPassword();
        // return the password from the generatePassword function either as an alert or in the box
      }
    }
    choosecharacters();
  }
}

// letter array
const letters = [
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
  "x",
  "y",
  "z",
];

// special characters array
const specialCharacters = [
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
  "~",
];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
