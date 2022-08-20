'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highScore = 0;

// Functions Declaration.
const message = function (mess) {
  document.querySelector('.message').textContent = mess;
};

const number = function (num) {
  document.querySelector('.number').textContent;
};

const scorerRecord = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess, guess);

  // If guess is Empty!
  if (!guess) {
    message('⛔ No Number!');

    // If guess is  Correct!
  } else if (guess === secretNumber) {
    message('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number(secretNumber);
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // If guess  is greater or less than secret number!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
    } else {
      message('💥 You lost the game');
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#f00';
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  message('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number('?');
  document.querySelector('.guess').value = '';
});
