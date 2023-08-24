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