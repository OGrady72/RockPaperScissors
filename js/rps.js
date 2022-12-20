
game();


// function game() 
// Plays five rounds of PlayRound()
// Keeps computer score and player score using RegEx on the returned String.
// Reports Winner of each round.
// Logs winner of the game

function game() {

  let compScore =0;
  let playerScore =0;

  for(let i = 0; i < 5; i++) {
    let player = getPlayerChoice();
    let comp = getComputerChoice();

    let gameString = playRound(player, comp);
    
    let regExPlayer = /You Win!/;
    let regExComp = /You Lose!/;

    if(regExPlayer.test(gameString)){
      ++playerScore;
    
    } else if(regExComp.test(gameString)) {
      ++compScore;
    }
    console.log(gameString);
  }
  if (playerScore > compScore) {
    console.log(`GAME OVER: You win the game ${playerScore} to ${compScore}!`);
  }

  else if (playerScore < compScore) {
    console.log(`GAME OVER: You lose the game ${compScore} to ${playerScore}!`);
  
  } else {
    console.log(` GAME OVER: It's a Tie! ${playerScore} to ${compScore}`);
  }
}


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

      if(!loop) {
        console.log(`You entered an invalid choice ${choice}. Please Enter a valid choice:`);
      }
  } while (loop == false);

  if (choice == `Rock` || choice == `Paper` || choice == `Scissors`) {
  return choice;

} else {
  let first = choice.slice(0,1).toUpperCase();
  let rest = choice.slice(1, choice.length).toLowerCase();
  choice = first + rest;

  return choice;
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
 
