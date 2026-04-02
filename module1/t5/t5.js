'use strict';

const year = +prompt('Please enter the year: ');

let leapYear = false;

if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
  leapYear = true;
}

const target = document.querySelector('#target');

if (leapYear) {
  target.innerText = `The year ${year} is a leap year.`;
} else {
 target.innerText = `The year ${year} is not a leap year.`;
}

/*
if (year % 400 === 0) {
  console.log('The year is a leap year. ');
} else if (year % 100 === 0) {
  console.log('The year is not a leap year. ');
} else if (year % 4 === 0) {
  console.log('The year is a leap year. ');
} else {
  console.log('The year is not a leap year. ');
}
 */