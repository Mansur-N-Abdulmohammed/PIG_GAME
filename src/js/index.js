'use strict';
// start coding here

'use strict';

let dice = document.querySelector('.dice');

// Buttons
let btn_roll = document.querySelector('.btn--roll');
let btn_hold = document.querySelector('.btn--hold');
let btn_new = document.querySelector('.btn--new');

// player score
let P_score0 = document.querySelector('#score--0');
let P_score1 = document.querySelector('#score--1');
// player current score
let P_Current0 = document.querySelector('#current--0');
let P_Current1 = document.querySelector('#current--1');
// The players
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let SCORE, GlobaScore, ActivePlayer, GameOver, PLAYER, CURRENT, ShowScore;

// warn >> Really think about PLAYER and CURRENT It is for better and more beautiful code to avid set a lot of doc

// To Restart The Game
// trick You gotta use the array to comparison
// TODO You have to sum GlobScore After you push the result

const GameReset = function () {
  SCORE = [0, 0];
  GlobaScore = 0;
  ActivePlayer = 0;

  P_score0.textContent = 0;
  P_score1.textContent = 0;

  player0.classList.remove(`player--active`);
  player1.classList.remove(`player--active`);

  player0.classList.remove(`player--winner`);
  player1.classList.remove(`player--winner`);

  P_Current0.textContent = 0;
  P_Current1.textContent = 0;

  dice.classList.add('hidden');
  GameOver = false;
};

// Just Use it before starting the game here
GameReset();

const SwitchPlayer = function () {
  // Here The PLAYER is The old PLayer
  PLAYER.classList.remove('player--active');
  ActivePlayer = ActivePlayer === 1 ? 0 : 1;

  // Here The PLAYER is The New PLayer
  PLAYER = document.querySelector(`.player--${ActivePlayer}`);
  PLAYER.classList.add('player--active');
};

//
//
// VIDEO HERE IS THE GAME BUTTON
//
//
btn_roll.addEventListener('click', function () {
  // To Get it in A variable to see less code trick >> just we use it for chaneg back-ground color
  PLAYER = document.querySelector(`.player--${ActivePlayer}`);
  // To Get it in A variable to see less code trick
  // >> just we use it for push the current score
  CURRENT = document.querySelector(`#current--${ActivePlayer}`);
  //
  // To Get it in A variable to see less code trick
  ShowScore = document.querySelector(`#score--${ActivePlayer}`);

  // LECJ The work is here
  if (!GameOver) {
    // to show the dice
    dice.classList.remove('hidden');

    let RandomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `./media/img/dice-${RandomNumber}.png`;

    if (RandomNumber !== 1) {
      // sum the current score and push it to current
      GlobaScore += RandomNumber;
      CURRENT.textContent = GlobaScore;
      PLAYER.classList.add(`player--active`);
    } else {
      GlobaScore = 0;
      CURRENT.textContent = GlobaScore;
      SwitchPlayer();
    }
  }
});

//
//
// VIDEO Here you gonna hold the Score That You want
//
//
btn_hold.addEventListener('click', function () {
  if (!GameOver) {
    // You gonna put the Score That you sum in the Globe Score and hold it inside the player that did the sum and the player is the one that Active
    SCORE[ActivePlayer] += GlobaScore;
    // warn you have to sum the score to the array
    ShowScore.textContent = SCORE[ActivePlayer];

    GlobaScore = 0;
    CURRENT.textContent = GlobaScore;

    if (SCORE[ActivePlayer] >= 20) {
      PLAYER.classList.add(`player--winner`);
      dice.classList.add(`hidden`);
      GameOver = true;
    } else {
      SwitchPlayer();
    }
  }
});
//
//
// VIDEO
//
//
btn_new.addEventListener('click', function () {
  GameReset();
});
