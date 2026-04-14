'use strict';

const form = document.querySelector('#tv-search');
const target = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  // clear old results
  target.innerHTML = '';

  const data = new FormData(form);
  const queryString = new URLSearchParams(data).toString();

  const response = await fetch(form.action + '?' + queryString);
  const showItems = await response.json();

  for (const item of showItems) {
    const article = document.createElement('article');
    console.log(item);
    console.log(item.show.name);
    const h2 = document.createElement('h2');
    h2.innerText = item.show.name;

    article.append(h2);
    target.append(article);
  }
});