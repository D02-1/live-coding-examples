
const syncStorageToPage = () => {
  const nutzer = localStorage.getItem('webseitennutzer');
  if (nutzer !== null) {
    document.querySelector('#who').classList.add("hidden");
    document.querySelector('#you').classList.remove("hidden");
    document.querySelector('#webnutzer').innerText = nutzer;
  } else {
    document.querySelector('#who').classList.remove("hidden");
    document.querySelector('#you').classList.add("hidden");
  }   

  const pairs = [];
  for (index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    pairs.push({ key: key, value: value });
  }
  document.querySelector('#store').innerHTML = pairs.map( (pair) => `<dt>${pair.key}</dt><dd>${pair.value}</dd>`).join("");
}

syncStorageToPage();

document.querySelector('#vorstellen').addEventListener('click', (event) =>{
  const name = document.querySelector('#name').value;
  localStorage.setItem("webseitennutzer", name);
  syncStorageToPage()
})

document.querySelector('#verabschieden').addEventListener('click', (event) =>{
  localStorage.removeItem("webseitennutzer");
  syncStorageToPage();
})