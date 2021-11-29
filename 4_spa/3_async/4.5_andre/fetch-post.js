
const input = document.querySelector("#daten");
const button = document.querySelector("#abschicken");
const url = 'https://jsonplaceholder.typicode.com/posts';

button.addEventListener('click', (event) => {
  const umschlag = {};
  umschlag.daten = input.value;

  fetch(url, {
    method : "POST",
    body : JSON.stringify(umschlag)
  }).then( (ergebnis) => {
    console.log(ergebnis);
  }).catch ( (grund) => {
    console.error(grund);
  })

})