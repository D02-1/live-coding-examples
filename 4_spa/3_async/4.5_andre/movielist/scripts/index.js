import API from './apiCall.js';
import View from './view.js';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
const client = new API();
const view = new View();

const displayMoviesFromStorage = () => {

  for (let index = 0; index < localStorage.length; index++) {
    const movie = JSON.parse(localStorage.getItem(localStorage.key(index)));
    view.displayMovieOnPage(movie);
  }
}

displayMoviesFromStorage();

const getMovies = () => {
  const result = [];
  for (let index = 0; index < localStorage.length; index++) {
    result.push(localStorage.key(index));
  }
  return result;
}

document.querySelector('.btn-save').addEventListener('click' , (event) => {
  const searchTerm = document.querySelector('#input').value.toLowerCase();
  if (getMovies().includes(searchTerm)) {
    alert('Schon im Speicher');
  } else {
    client.getMovieData(searchTerm).then( (movie) => {
      localStorage.setItem(searchTerm, JSON.stringify(movie));
      view.displayMovieOnPage(movie);
    });
  }
});

document.querySelector('.btn-reset').addEventListener('click', (event) => {
  localStorage.clear();
  history.go(0);
})