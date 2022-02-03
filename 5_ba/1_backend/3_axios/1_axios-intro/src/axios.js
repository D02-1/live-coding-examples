// Wir importieren axios
const axios = require('axios');

// Resourcen zu axios:
// https://axios-http.com/docs/intro
// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

// auch hier geben wir unsere url an:
const url = "https://jsonplaceholder.typicode.com/todos/1";

/*
    Im gegensatz zu fetch, wenn wir einen get, post oder anderen request anfragen, können wir zwar, wie auch in fetch, alles in der selben funktion schreiben, aber können anstelle dessen auch spezifische methoden nutzen, die uns die übersicht und verständlichkeit unseres codes erleichtern.

    Hier einige der sogenannten "convenience methoden":

    - axios().get();            Eine methode um get requests zu erstellen
    - axios().post();           Eine methode um post requests zu erstellen
    - axios().delete();         Eine methode um delete requests zu erstellen
    - axios().request();        Eine methode um requests zu managen
    - axios().head();           Eine methode um die header informationen global einzustellen
    - axios().options();        Eine methode um optionen an den request zu übergeben
*/

// Beispiel: GET

// Wir nutzen für unser beispiel axios().get();
axios.get(url)
.then(res => console.log(res.data)); // anstelle umwandeln zu müssen, bekommen wir die komplette antwort sofort als json zurück.

// Wir sehen also, in axios können wir uns den kompletten umwandlungsschritt sparen, und bekommen sofort alle wichtigen informationen wie status, header pfad und den host angenehm als objekt zurück. unter "data" finden wir unsere angefragten daten.

// auch in der fehlerbehandlung ist axios angenehmer, da wir, wenn wir eine fehlerhafte url ansprechen automatisch die wichtigsten informationen zum fehler zurück bekommen und wir diese auswerten können:
const url2 = "https://jsonplaceholder.typicode.com/todol/1";

axios.get(url2)
.then().catch((err) => console.log(err.response.status)); // das response objekt beinhaltet alle daten die wir gerne für den fehler hätten, falls wir ihn ausgeben wollen.

// Beispiel: POST

// Auch hier erstellen wir ein objekt, um unsere daten anzugeben:
const data =
{
    title: 'axios ausprobieren',
    body: 'Heute ist ein spannender Tag!',
    userId: 1
}

// Wir wenn wir in axios einen post request machen wollen, nutzen wir dafür vorzugsweise die methode axios().post();:
axios.post('https://jsonplaceholder.typicode.com/posts', data) // wir fügen unsere daten direkt als zweiten parameter ein
.then(res => console.log('POST:', res.data));

// Wie wir sehen kriegen wir gleich die richtige antwort, und haben auch unsere daten direkt im richtigen format geschickt. Axios kann den content type direkt anhand der daten definieren und wir müssen MEIST (wenn wir keine spezifischen header informationen benötigen) keine weitere zeit damit verschwenden unseren post befehl mit informationen zu befüllen.
