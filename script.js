// Assignment Code
var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// Creating a variable(generateBtn) referencing the html button
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordLength = prompt("pick a number of characters for password (Minimum 8 Characters)"); // I had the PROMPT and ALERT outside of this function and it didnt work, after reading i learned they must be nested!
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("INVALID! Please enter a number between 8 and 128");
    passwordLength = parseInt(prompt("Please enter number between 8 and 128 characters):"));
  }
} 






// Write password to the #password input
// function called "writePassword"
function writePassword() {
// creates variable "password" and sets it equal to the return function called "generatePassword"
  var password = generatePassword();
// creates variable "passwordText" with a function grabbing "id=password" in html
  var passwordText = document.querySelector("#password");
// setting value to password
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// PHASE 1: creating variables and getting the info we need
// what do we need to do?
// must PROMPT user for length of word (8-128)


let passwordLength = parseInt(prompt("between 8 and 128 characters):"));



// confirm user for upper/lower case (yes/no? USE CONFIRM)
var includeUpperCase = confirm("Include Uppercase?");
var includeLowerCase = confirm("Include Lowercase?");
// confirm user if theyd like to use special characters
 var includeSpecialChar = confirm("Include Special Characters?");
// confirm user if theyd like to use numbers
var includeNumbers = confirm("Include Numbers?");
// create a pool of available characters(lowercase/uppercase/numbers/special characters)
var availableChars = [];
// if they said yes to numbers, add the numbers to available char
if (includeUpperCase) {
  availableChars = availableChars.concat(upperCase)
};

if (includeLowerCase){
availableChars = availableChars.concat(lowerCase)
}

if (includeSpecialChar){
  availableChars = availableChars.concat(specialChar)
}


if (includeNumbers){
  availableChars =availableChars.concat(numbersChar)
};
// all are yes/no except for length
// THINK about edge cases for bad length imputs, (user imputs bad length)
// if user types in 6, say what they did wrong, terminate function, and restart

// else if statement to explain that they chose the wrong values
// what if they say no to every type character(return no password available)
if (availableChars.length === 0){
  alert("Please select at least one character type!")
};




// phase 2
// what values do we need to track?
// create password variable that is an EMPTY STRING
// create a for loop that runs length number of times based on an array (line 26)
// in for loop we need to generate a single random character and Append this character to our password
// FOR LOOP STEPS
// create a random number between 0 and length of our available pool characters type array based on what the user choses
// select 1 element from array of availableChars at index random number we gen
// view newChar = availableChars[randomNum]
// Append this new element to password variable
// RETURN password we just created
// var createdPassword