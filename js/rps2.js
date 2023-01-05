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

let compScore = 0;
let playerScore = 0;

function selectChoice(e) {
    
   

    let userChoice = e.target.id;
    let computerChoice = getComputerChoice();
    
    let docString = playRound(userChoice, computerChoice);

    let regExPlayer = /You Win!/;
    let regExComp = /You Lose!/;

    if(regExPlayer.test(docString)){
      ++playerScore;
    
    } else if(regExComp.test(docString)) {
        ++compScore;
    }

    if (playerScore <5 && compScore <5) {

    let result = document.querySelector('.results');
    result.textContent = `${docString} | User: ${playerScore} Computer: ${compScore}`;
    }

    else {
      let result = document.querySelector('.results');
      if ( playerScore > compScore) {
        result.textContent =`Game Over: You Win! ${playerScore} to ${compScore}`;
      
      } else {
          result.textContent = `Game Over: You Lose! ${playerScore} to ${compScore}`;
      }
    playerScore =0;
    compScore =0;
    }
 
}
  




