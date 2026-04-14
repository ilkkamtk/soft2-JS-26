'use strict';

const form = document.querySelector('#tv-search');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const data = new FormData(form);
  const queryString = new URLSearchParams(data).toString();

  const response = await fetch(form.action + '?' + queryString);
  const shows = await response.json();
  console.log(shows);
});