let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  loss: 0,
  tie: 0
}
updateScore()


let isAutoplaying = false;
let intervalId;


// function keyword as an parameter can be used as =>
// as im using it in autoPlay() function 



function autoplay() {
  if (!isAutoplaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerChoice();
      playGame(playerMove);
    }, 1000);
    isAutoplaying = true;
  } else {
    clearInterval(intervalId);
    isAutoplaying = false;
  }
}


function playGame(playerMove) {
const computerChoice = pickComputerChoice();
let result = '';

if (computerChoice === playerMove) { 
  result = 'tie';
} else if (playerMove === 'rock') {
  if (computerChoice === 'paper') {
    result = 'you lose';
  } else if (computerChoice === 'scissors') {
    result = 'you win';
  }
} else if (playerMove === 'paper') {
  if (computerChoice === 'scissors') {
    result = 'you lose';
  } else if (computerChoice === 'rock') {
    result = 'you win';
  }
} else if (playerMove === 'scissors') {
  if (computerChoice === 'rock') {
    result = 'you lose';
  } else if (computerChoice === 'paper') {
    result = 'you win';
  }
}

if (result.includes('you lose')) {
  score.loss += 1;
} else if (result.includes('you win')) {
  score.win += 1;
} else if (result === 'tie') {
  score.tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScore();

document.querySelector('.js-result').innerHTML = `You picked ${playerMove}. Computer picked ${computerChoice}. ${result}.`;
document.querySelector('.js-moves').innerHTML = `You: <img src="images/${playerMove}-emoji.png" class="rps-image"> Computer: <img src="images/${computerChoice}-emoji.png" class="rps-image">`;
}

function loadScore() {
if (localStorage.getItem('score')) {
  const loadedScore = JSON.parse(localStorage.getItem('score'));
  score.win = loadedScore.win;
  score.loss = loadedScore.loss;
  score.tie = loadedScore.tie;
}
}

document.querySelector('.js-result').innerHTML = result

document.querySelector('.js-moves').innerHTML = `you ${playerMove} <img src="images/${playerMove}-emoji.png" class="rps-image"> computer ${computerChoice} <img src="images/${computerChoice}-emoji.png" class="rps-image">`

function updateScore() {
document.querySelector('.js-score').innerHTML = `Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`;
}

function pickComputerChoice() {

let computerChoice = '';
const randomNumber = Math.random();

if (randomNumber < 1/3) {
  computerChoice = 'rock';
} 
else if (randomNumber < 2/3) {
  computerChoice = 'paper';
} 
else {
  computerChoice = 'scissors';
}

return computerChoice;
}

