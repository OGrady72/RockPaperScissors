// getComputerChoice()
// Setup an ComputerChoice array with three variable, "Rock, Paper, Scissors"
// create a RandomNumber variable.
// Assign the value of a Random number between 0 and 2 to the randomNumber variable.
// return the value of the ComputerChoice[Random] number. 

// getPlayerChoice()
// create Choice variable to hold value user chooses
// Prompt the user for a choice "Rock, Paper, Scissors"
// assign user choice to the choice variable.
// RegEx test against "Rock, Paper, or Scissors case insensitive"
// If test fails.. Prompt user again.
// Make a new string all lowercase.
// Make a new String first letter uppercase.
// IF not, Invalid Choice, Prompt the user again.
// Return Valid Player Choice.

let playerChoice = getPlayerChoice();
console.log(playerChoice);

function getPlayerChoice() 
{
let regEx = /(rock|paper|scissors)/i;
let loop = false;
let choice = "";

do {
    choice = prompt(`Which do you choose, "Paper, Scissors or Rock"?`);
      loop = regEx.test(choice);
} while (loop == false);

let first = choice.slice(0,1);
let rest = choice.slice(1, (choice.length));
let upper = first.toUpperCase();
let answer = upper + rest;
//console.log(`You chose ${answer}`);
return answer;
}