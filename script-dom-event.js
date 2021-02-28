'use strict';

// // Selecting and Manipulating Elements // //
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😛 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
/*  */

// // Handling Click Events & Implementing the Game Logic // //
const secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'MASUKIN ANGKA CUK!🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Tumben pintar, TEBAK LAGI YUK😛';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Ketinggian woi!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Kurang Beruntung!😣';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Kerendahan woi!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Kurang Beruntung!😣';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    } 
  }
});

// // Reload Pages
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});
/*  */
