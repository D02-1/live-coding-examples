require('dotenv').config();

const axios = require('axios');

// Wenn wir wissen, das wir verschiedene pfade auf der selben url mix axios nutzen wollen, also wenn wir zb die selbe api an verschienen stellen ansprechen wollen, können wir beim anlegen einer neuen axios instanz eine baseURL anlegen, also eine URL, auf der alle besuchten pfade basieren. Diese url legen wir aus testzwecken in unserer .env unter dem schlüssel API an.
const api = axios.create({ baseURL: process.env.API }); // https://httpbin.org

// mit inceptoren, also "abfängern", oder "abfangjängern" kann axios auf jeden request und jede response reagieren und bei erfolg einen befehl ausführen:
api.interceptors.request.use(req =>
{
    // Wir geben die methode und die angefragte URL aus:
    console.log(`${ req.method}: ${ req.url }`);

    console.log("KÄSEKUCHEN");

    // WICHTIG: ein interceptor muss für die korrekte ausführung IMMER den request returnen, da er den request weiter durchreicht.
    return req;
});

// WICHTIG: da wir axios.create(); auf die variable "api" angewandt haben, werden ab hier alle axios befehle mit api angefangen, nicht mix axios - bei "api" handelt es sich also um eine instanz von axios.
const getData = async () =>
{
    try
    {
        // axios weiss, durch die angabe der baseURL jetzt, das alle pfade mit unserer API adresse anfangen.

        // anstelle parameter direkt in den pfad zu schreiben, also: '/get?name=Max' können wir bei axios params direkt angeben:
        const newData = await api.get('/get', { params: { name: "Max", age: 25 } }); // https://httpbin.org/get

        console.log("Daten:", newData.data);
        // Wie wir sehen, bekommen wir immernoch die selben daten wie bei unserem get beispiel.
    }
    catch (err)
    {
        console.error(err.response.status);
    }
}

getData();

// axios kann auch mehrere requests auf einmal ausführen, und nutzt dafür als basis, die uns bekannte methode Promise.all();
const multipleRequests = async () =>
{
    const req1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const req2 = axios.get('https://jsonplaceholder.typicode.com/posts/2');

    // Wir übergeben der methode .all(); ein array mit unseren requests:
    await axios.all([ req1, req2 ]).then(axios.spread((res1, res2) => // Wir benutzen die methode .spread(); um die ausgaben in seperate responses zu füllen.
    {
        console.log("A", res1.data);
        console.log("B", res2.data);
    }))
}

multipleRequests();
