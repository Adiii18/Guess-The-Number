'use strict';

let score = 20;
let highScore = 0;
const secretNumber  = Math.trunc(Math.random()*20)+1;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

  if(!guess){
    displayMessage('No Number⛔');
  }else if(guess === secretNumber){
    document.querySelector('.number').textContent = guess;
    displayMessage( 'Correct Number🔥');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem'

    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } 
  }else if(guess !== secretNumber) {
    if(score > 1){
      displayMessage( guess > secretNumber ? 'The guessed number is too high! ' : 'The guessed number is too low!');
      score--;
      document.querySelector('.score').textContent  =score;
      }else{
          displayMessage('You lost the game!😔');
          document.querySelector('.score').textContent = 0;
      }
  }
  document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    const secretNumber  = Math.trunc(Math.random()*20)+1;
  console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing number...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
  })
});

