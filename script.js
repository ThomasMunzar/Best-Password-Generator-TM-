// Assignment Code
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', 
'{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
//creating a reference to a "generate button"  in HTML with the variable name generateBtn
var generateBtn = document.querySelector("#generate");

function generatePassword()

// Write password to the #password input
//Function called "writePassword"
function writePassword() {
  // creates variable "password" and sets it equal to the return function called "generatePassword"
  var password = generatePassword()
  //creates variable "passwordText" with function grabbing "id=password" in html
  var passwordText = document.querySelector("#password");
//setting value to password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//PHASE 1-Creating variable and getting the info we need
//what do we neeed to do? 
var availablechars = []
// must PROMPT use for length of word (8-128)(use prompt)
//confirm user for upper/lower case (yes no? USE CONFIRM)
//confirm user is theyd like to use special characters
//confirm user if theyd like to use numbers
// if they said yes to numbers, add the numbers to availableChars
//Create a pool of available charachters(lowercase/uppercase/numbers/special charachters)
//all are yes/no except for length
//THINK about edge cases for bad length inputs**
// If user types in 6 characters -- tell them what they did wrong / terminte function / restart
// "if length is less than 8" tell them it was too small
// "if length is less that 128" tell them too big
// "if no length indicated and non numerical" tell them wrong entry
// if user says no to every type of character / tell them to select at least 1 tpye of character/ restart

//Phase 2
//What values do we need to track?
// Create password variable that is an EMPTY STRING 
//create a for loop that runs length number of times 
//in for loop we need to generate a single random character and uppend this carachter to our password
//FOR LOOP STEPS
//Create a random number between 0 and length of our available pool character types array depending on what user choses
// Select 1 element from array of availablechars at index random number we gen
// var newChar = availablechars[randomNum]
// Append this new element to password variable
//RETURN password we just created 