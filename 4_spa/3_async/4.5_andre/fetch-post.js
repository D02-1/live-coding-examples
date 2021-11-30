
const input = document.querySelector("#daten");
const button = document.querySelector("#abschicken");
const url = 'https://jsonplaceholder.typicode.com/posts';

button.addEventListener('click', (event) => {
  const umschlag = {};
  umschlag.daten = input.value;

  fetch(url, {
    method : "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`
    },
    body : JSON.stringify(umschlag)
  }).then( (ergebnis) => {
    console.log(ergebnis);
    ergebnis.json().then( daten => {
      console.log(daten);
    })
  }).catch ( (grund) => {
    console.error(grund);
  })

})