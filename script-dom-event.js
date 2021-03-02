'use strict';

// // Selecting and Manipulating Elements // //
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😛 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
/*  */

// // Handling Click Events & Implementing the Game Logic & Manipulating CSS Style // //

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'MASUKIN ANGKA CUK!🚫';

    // When the Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Tumben pintar, TEBAK LAGI YUK😛';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    // When the Guess is too High
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

    // When the Guess is too Low
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
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;


  document.querySelector('.message').textContent = 'Start guessing again...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

//   window.location.reload();
});
/*  */
