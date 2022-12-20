

let player = getPlayerChoice();
let comp = getComputerChoice();

console.log(player);

console.log(playRound(player, comp));

// Get's the player choice and modifyies the string to "Rock, Paper, or Scissors" if the case 
// does not match.
// Returns the string "Rock", "Paper", or "Scissors".

function getPlayerChoice() {

  let regEx = /(rock|paper|scissors)/i;
  let loop = false;
  let choice = "";

  do {
    choice = prompt(`Which do you choose, "Paper, Scissors or Rock"?`);
      loop = regEx.test(choice);
  } while (loop == false);

  if (choice == `Rock` || choice == `Paper` || choice == `Scissors`) {
  return choice;

} else {
  let first = choice.slice(0,1);
  let rest = choice.slice(1, (choice.length));
  rest = rest.toLowerCase();
  let upper = first.toUpperCase();
  let answer = upper + rest;

  return answer;
  }
}

/* This function defines an array of choices "Rock, Paper, Scissors"
    and then calls getRandomNumber and uses that as the accessor to
    the array for the computer choice. It returns the computerChoice */ 

function getComputerChoice() {
  let choices = [`Rock`, `Paper`, `Scissors`];
  
  const choicesNumber = getRandomNumber();
  const compChoice = choices[choicesNumber];

return compChoice;

}
/* This is a helper function to return a random number between 0 and 2 */

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

// This is the playRound() function. It has two parameters, the userchoice
// and the computerchoice. It plays a round of the game and returns a string
// stating wheather you won or lost and what the values were. 

function playRound(playerChoice, computerChoice) {

  let rpsString ="";

  if (playerChoice == "Rock") {

    switch(computerChoice) {

      case `Paper`:
        rpsString = `You Lose! ${computerChoice} beats ${playerChoice}`;
        break;

      case `Scissors`: 
      rpsString = `You Win! ${playerChoice} beats ${computerChoice}`
      break;

      default: 
      rpsString = `Tie! ${playerChoice} ties ${computerChoice}`;
      break;
    } 

    return rpsString;
  
  } else if(playerChoice == "Scissors") {
 
    switch(computerChoice) {

      case `Paper`:
        rpsString = `You Win! ${playerChoice} beats ${computerChoice}`;
        break;

      case `Rock`: 
      rpsString = `You Lose! ${computerChoice} beats ${playerChoice}`;
      break;

      default: 
      rpsString = `Tie! ${playerChoice} ties ${computerChoice}`;
      break;
    } 
    return rpsString;
  
  } else {

    switch(computerChoice) {

      case `Rock`:
        rpsString = `You Win! ${playerChoice} beats ${computerChoice}`;
        break;

      case `Scissors`: 
      rpsString = `You Lose! ${computerChoice} beats ${playerChoice}`;
      break;

      default: 
      rpsString = `Tie! ${playerChoice} ties ${computerChoice}`;
      break;
    } 
    return rpsString;
      
    }
  }
 
