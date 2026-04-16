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

    const a = document.createElement('a');
    a.innerText = 'Open';
    a.href = item.show.url;
    a.target = '_blank';

    const image = document.createElement('img');
    image.src = item.show.image ? item.show.image.medium : 'https://placehold.co/210x295?text=No+Image';
    image.alt = 'Image of tv show ' + item.show.name;

    const div = document.createElement('div');
    div.innerHTML = item.show.summary || 'No summary yet.';

    article.append(h2, a, image, div);
    target.append(article);
  }
});