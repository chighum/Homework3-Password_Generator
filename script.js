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
  var passwordLength = prompt(
    "How long would you like your password to be? \nMust be between 8 and 128 characters"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry, that is an invalid input. \nPlease input a number 8 and 128");
    generatePassword();
  } else {
    choosecharacters();
  }
}
function choosecharacters() {
  const whatCharacters = [
    confirm("Would you like lowercase letters in your password?"),
    confirm("Would you like uppercase letters in your password?"),
    confirm("Would you like numbers in your password?"),
    confirm("Would you like special characters in your password?"),
  ];
  if (
    whatCharacters[0] === false &&
    whatCharacters[1] === false &&
    whatCharacters[2] === false &&
    whatCharacters[3] === false
  ) {
    alert("Please select at least one character type.");
    choosecharacters();
  } else {
    createPassword();
  }
}

// function createPassword() {
// if whatCharacters
// }

// prompt user for length
// error handling - is it between 8-128 characters?

// prompt user to confirm all character selections separately
// error handling - did they select at least one option?

// use inputs to generate password
// return to the password from the generatePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
