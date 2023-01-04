/* This is a helper function to return a random number between 0 and 2 */

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    let choices = [`Rock`, `Paper`, `Scissors`];
    
    const choicesNumber = getRandomNumber();
    const compChoice = choices[choicesNumber];
  
  return compChoice;
  
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

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', selectChoice);
});

function selectChoice(e) {
    
    let compScore = 0;
    let userScore = 0;

    let userChoice = e.target.id;
    let computerChoice = getComputerChoice();
    
    let docString = playRound(userChoice, computerChoice);

    let result = document.querySelector('.results');
    result.textContent = `${docString} | User: ${userScore} Computer: ${compScore}`;
}



