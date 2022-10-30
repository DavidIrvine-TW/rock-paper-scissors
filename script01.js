// global HTML variables
const computerChoiceDisplay = document.getElementById('computer-choice')
const computerScoreboard = document.getElementById('computer-score')
const userChoiceDisplay = document.getElementById('user-choice')
const userScoreboard = document.getElementById('user-score')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const resetButton = document.getElementById('reset-game').disabled = true;

//global selections/scoring
let userChoice // user selection
let computerChoice // random computer selection
let result // result for display
let userScore = 0 // scores incremented after each round
let computerScore = 0

// user select begins game
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  makeComputerChoice()
  getResult()
}))

// random computer choice
function makeComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  
  if (randomNumber === 0) {
    computerChoice = '✊'
  }
  if (randomNumber === 1) {
    computerChoice = '✌️'
  }
  if (randomNumber === 2) {
    computerChoice = '✋'
  }
  computerChoiceDisplay.innerHTML = computerChoice
  console.log(randomNumber);
}

// return / display results
function getResult() {
  if (computerChoice === userChoice) {
    result = 'It\'s a tie, let\'s go again!'
  }
  if (computerChoice === '✊' && userChoice === "✋") {
    userScoreboard.textContent = userScore += 1;
    result = 'You win!  Paper wraps rock!'
  }
  if (computerChoice === '✊' && userChoice === "✌️") {
    computerScoreboard.textContent = computerScore += 1;
    result = 'You lost! Rock blunts scissors!'
  }
  if (computerChoice === '✋' && userChoice === "✌️") {
    userScoreboard.textContent = userScore += 1;
    result = 'You win! Scissors cut paper!'
  }
  if (computerChoice === '✋' && userChoice === "✊") {
    computerScoreboard.textContent = computerScore += 1;
    result = 'You lose! Paper wraps rock'
  }
  if (computerChoice === '✌️' && userChoice === "✊") {
    userScoreboard.textContent = userScore += 1;
    result = 'You win! Rock blunts scissors!'
  }
  if (computerChoice === '✌️' && userChoice === "✋") {
    computerScoreboard.textContent = computerScore += 1;
    result = 'You lose! Scissors cut paper!'
  }
  if (userScore == 5 || computerScore == 5) {
    stopTheGame()
  }
  resultDisplay.innerHTML = result
 
}

function stopTheGame() {
  if (userScore > computerScore) {
    result = 'You are victorious!'
  } else {
    result = 'Pfffff, you are the loser! Try again?!'
  }
  //game over - disable user choice buttons
  document.getElementById('✊').disabled = true;
  document.getElementById('✌️').disabled = true;
  document.getElementById('✋').disabled = true;
  // game over - enables reset button (refresh page)
  document.getElementById('reset-game').disabled = false;
  document.querySelector('#reset-game').addEventListener('click', () => {
  window.location.reload(true);
  })

  resultDisplay.innerHTML = result

  }
  
 


