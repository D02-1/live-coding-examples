const url = 'https://cat-fact.herokuapp.com/facts/';

const fetchPromise = window.fetch(url);

fetchPromise.then( (ergebnis) => {
  console.log(ergebnis);

  if (ergebnis.ok) {

    const parsePromise = ergebnis.json();

    parsePromise.then( ( JSONobject) => {
      console.log(JSONobject);
  
      const items = JSONobject.map( (catfact) => {
        return `<li>${catfact.text}</li>`;
      })
      document.querySelector("#facts").innerHTML = items.join("");
  
    }).catch( (grund) => {
      console.log("JSON Parsen, Lief schief wegen: ", grund);
    } )
  }
  else {
    console.log("Response war nicht okay");
  }

} ).catch( (grund) => {
  console.log("Fetch Lief, schief wegen: ", grund);
}).finally( () => {
  console.log("Katzenfakten wurden abgefragt");
})