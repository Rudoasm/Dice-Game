'use strict';

// selecting elements
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0e0 = document.querySelector('#current--0');
const current0e1 = document.querySelector('#current--1');
const player0e1 = document.querySelector('.player--0');
const player1e1 = document.querySelector('.player--1');
const playerScores = [0, 0];
// much fastwer and only used for id selectors and no need to give the # again there.
let isGameRunning = true;
const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activePlayer = document.querySelector('.player--active');
// initial condtions
score0el.textContent = 0;
score1el.textContent = 0;
let Activeplayer = 0;
diceel.classList.add('hidden');
let score = 0;
const switchPlayer = function () {
  // switch player
  document.getElementById(`current--${Activeplayer}`).textContent = 0;
  score = 0;
  Activeplayer = Activeplayer === 0 ? 1 : 0;
  // Active player changed.
  // if(Activeplayer===1 && !document.querySelector('.player--1').classList.contains('player--active')){
  //   document.querySelector('.player--1').classList.add('player--active');
  //   document.querySelector('.player--0').classList.remove('player--active');
  // }else{
  //   document.querySelector('.player--0').classList.add('player--active');
  //   document.querySelector('.player--1').classList.remove('player--active');
  // }
  // All these code can be replaced by a simple toggle method.
  player0e1.classList.toggle('player--active');
  // adds the method if its not present and removed if present
  player1e1.classList.toggle('player--active');
};

// roll dice function
btnRoll.addEventListener('click', function () {
  if (isGameRunning) {
    const diceNumb = Math.trunc(Math.random() * 6) + 1;
    // before adding 1 it gives a random number between 0-5. upon adding one it elevates to 1-6.
    diceel.classList.remove('hidden');
    diceel.src = `dice-${diceNumb}.png`;
    // u dont need a switch statement. u can manipulate the attributes of the element by dots. but make sure to name all images similarly and use a template literal
    console.log(diceNumb);
    //   console.log(activePlayer);
    if (diceNumb !== 1) {
      score += diceNumb;
      document.getElementById(`current--${Activeplayer}`).textContent = score;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // 1.save the score to user score
  playerScores[Activeplayer] += score;
  document.getElementById(`score--${Activeplayer}`).textContent =
    playerScores[Activeplayer];
  // 2. check if score >=100: and end if tue
  if (playerScores[Activeplayer] >= 100) {
    isGameRunning = false;
    document
      .querySelector(`.player--${Activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${Activeplayer}`)
      .classList.remove('player--active');
    // diceel.classList.remove('hidden');
  }
  // 3.switch playeer
  switchPlayer();
});

const init = function () {
  // init - initialization
  diceel.classList.add('hidden');
  score0el.textContent = 0;
  score1el.textContent = 0;
  Activeplayer = 0;
  current0e0.textContent = 0;
  current0e1.textContent = 0;
  score = 0;
  playerScores = [0, 0];
  isGameRunning = true;

  player0e1.classList.remove('player--winner');
  player1e1.classList.remove('player--winner');
  // removees if present or just ignores
  document
    .querySelector(`player--${Activeplayer}`)
    .classList.add('player--active');
};

btnNew.addEventListener('click', init);
