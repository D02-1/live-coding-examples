const url = 'https://cat-fact.herokuapp.com/facts/';
const target = document.querySelector("#facts");

const fetchCatFacts = async () => {
  const antwort = await fetch(url);
  if (antwort.ok) {
    const json = await antwort.json();
    target.innerHTML = json.map( fact => `<li>${fact.text}</li>`).join("");
  }
}

fetchCatFacts();