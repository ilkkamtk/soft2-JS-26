'use strict';

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;

while (result !== 6) {
  result = rollDie();
  document.querySelector('#target').innerHTML += `<li>${result}</li>`;
}


