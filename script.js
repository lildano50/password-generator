// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
    //passwordLength = prompt("How long would you like the password to be? \n Password must be between 8 and 128 characters.")
    //randomPassword = specialChar[Math.floor(Math.random() * passwordLength)]

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let characters = "";

  var pwLength = prompt ("Select a password length between 8 and 128:");

  while (pwLength > 128 || pwLength < 8) {
    pwLength = prompt("Invalid length! Select a password length between 8 and 128:")
  }

  while (characters === ""){
    alert("YOU MUST SELECT AT LEAST ONE CHARACTER TYPE TO INCLUDE!" + "\n" + "\n" +
    "Click OK to proceed");
    var uppercase = prompt("Would you like to include uppercase letters?");
    if (uppercase.toLowerCase() === "yes" || uppercase.toLowerCase() === "y"){
      characters += upperLetters
    };
    var lowercase = prompt("Would you like to include lowercase letters?");
    if (lowercase.toLowerCase() === "yes" || lowercase.toLowerCase() === "y"){
      characters += lowerLetters
    };
    var num = prompt("Would you like to include numbers?");
    if (num.toLowerCase() === "yes" || num.toLowerCase() === "y"){
      characters += numbers
    };
    var special = prompt("Would you like to include special characters?");
    if (special.toLowerCase() === "yes" || special.toLowerCase() === "y"){
      characters += specialChar
    };
  };
  
  var passwordText = document.querySelector("#password");
  var password = generatePassword(pwLength,characters);
  passwordText.value = password;

}

//Function to generate password
function generatePassword(length,characters) {
  let password = "";
  for (let i=0; i < length; i++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};