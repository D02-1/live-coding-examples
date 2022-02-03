// Wir importieren "node-fetch" um fetch in nodejs nutzen zu können:
const fetch = require('node-fetch');

// Wir legen eine variable an, mit unserer URL, hierfür nutzen wir JSONPlaceholder:
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Beispiel: GET

// Wir nutzen fetch, wie wir es damals gelernt haben, wir starten fetch mit der url, nutzen dann then und geben den inhalt in der konsole aus:
// fetch(url)
// .then(data => console.log(data));

// Wie wir sehen bekommen wir nur den buffer, wir müssen also einen weiteren schritt einbinden, wie wir damals gelernt haben, um den buffer umzuwandeln und im json format an unsere daten zu kommen:
fetch(url)
.then(res => res.json())
.then(data => console.log("GET:", data));

// Beispiel: POST

// Wir erstellen ein objekt, mit den daten die wir übertragen wollen:
const data =
{
    title: 'axios ausprobieren',
    body: 'Heute ist ein spannender Tag!',
    userId: 1
}

// Wir errinern uns, wenn wir bei fetch einen post request machen wollen, müssen wir eine menge bedenken:

fetch('https://jsonplaceholder.typicode.com/posts',
{
    method: 'POST',                 // Wir müssen die methode angeben
    body: JSON.stringify(data),     // Wir müssen unsere inhalte in json umwandeln
    headers:                        // Wir müssen unsere header informationen angeben
    {
        'Content-Type': 'application/json; charset=UTF-8' // wir müssen unseren content type angeben
    },
})
.then(res => res.json())            // Wir müssen unsere antwort in json umwandeln
.then(json => console.log('POST:', json));
