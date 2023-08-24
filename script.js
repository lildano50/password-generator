// Password Generator


// Get references to the #generate element
// Variables to store 4 different input criteria in strings
var generateBtn = document.querySelector("#generate");
let specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789";


// Add event listener to generate button
// Clicking the generate password button will call the writePassword() function
generateBtn.addEventListener("click", writePassword);

// Function to run through prompts for password criteria
function writePassword() {
  let characters = "";
  var pwLength = prompt ("Select a password length between 8 and 128:");
  while (pwLength > 128 || pwLength < 8) {
    pwLength = prompt ("Invalid length! Select a password length between 8 and 128:")
  }
  var uppercase = prompt("Would you like to include uppercase letters?");
  if (uppercase === "yes" || uppercase === "y"){
    characters += upperLetters
  };
  var lowercase = prompt("Would you like to include lowercase letters?");
  if (lowercase === "yes" || lowercase === "y"){
    characters += lowerLetters
  };
  var num = prompt("Would you like to include numbers?");
  if (num === "yes" || num === "y"){
    characters += numbers
  };
  var special = prompt("Would you like to include special characters?");
  if (special === "yes" || special === "y"){
    characters += specialChar
  };
  var passwordText = document.querySelector("#password");

  var password = generatePassword(pwLength,characters);
  passwordText.value = password;

}

//Function to generate password
//Function is called in the writePassword() function to generate a password based on passed arguments
function generatePassword(length,characters) {
  let password = "";
  for (let i=0; i < length; i++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};