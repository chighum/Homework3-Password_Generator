// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// VARIABLE DECLARATION
// All of the possible characters inside their own array inside an object called masterArray declared globally
var masterArray = {
  lowerCaseLetters: [
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
  ],
  upperCaseLetters: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [
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
  ],
};

// Pseudo-code: outline in normal English

// create generatePassword function

function generatePassword() {
  // prompt user for length
  var passwordLength = prompt(
    "How long would you like your password to be? \nMust be between 8 and 128 characters"
  );
  // error handling - is it a number between 8-128 characters?
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Sorry, that is an invalid input. \nPlease input a number between 8 and 128"
    );
    generatePassword();
  } else {
    function choosecharacters() {
      // prompt user to confirm all character selections separately
      // store answers in an object
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
          // clone masterArray into usersCharacters so masterArray is unchanged
          // allows the user to run the program multiple times in a row without refreshing the page
          var usersCharacters = Object.assign({}, masterArray);
          // eliminating character types the user did not choose from the new userCharacters object
          if (whatCharacters.lowerCase === false) {
            delete usersCharacters.lowerCaseLetters;
          }
          if (whatCharacters.upperCase === false) {
            delete usersCharacters.upperCaseLetters;
          }
          if (whatCharacters.numbers === false) {
            delete usersCharacters.numbers;
          }
          if (whatCharacters.specialCharacters === false) {
            delete usersCharacters.specialCharacters;
          }
          // change the userCharacters object of arrays into one new array called passwordArray
          // passwordArray only contains the character types selected
          var passwordArray = [].concat.apply(
            [],
            Object.values(usersCharacters)
          );
          var secretPassword = "";

          // for loop iteration to randomly select elements from the passwordArray
          // stores in new variable called secretPassword as a string
          // iteration stops when we reach the desired password length
          for (var i = 0; i < passwordLength; i++) {
            secretPassword +=
              passwordArray[Math.floor(Math.random() * passwordArray.length)];
          }
          // present secretPassword as a confirm
          // ask user if they want to generate a different password and then if they want to change inputs
          function showPassword() {
            var anotherPassword = confirm(
              "Here is your random password: \n\n" +
                secretPassword +
                "\n\nDo you want to generate a different password?"
            );
            if (anotherPassword) {
              function changeInputs() {
                var change = confirm("Do you want to change input parameters?");
                if (change) {
                  generatePassword();
                } else {
                  createPassword();
                }
              }
              changeInputs();
            } else {
              alert("Thanks for stopping by!");
            }
          }
          showPassword();
        }
        createPassword();
      }
    }
    choosecharacters();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
