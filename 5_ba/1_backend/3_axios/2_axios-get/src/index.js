// Wir importieren axios
const axios = require('axios');

// Ein simpler GET request mit axios:
axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then(res =>
{
    console.log("----- SIMPLER GET REQUEST -----");

    console.log("Status:", res.status);
    console.log("Daten:", res.data);
});

// Die axios fehlerbehandlung ist sehr hilfreich, und bietet uns viele informationen
axios.get("https://jsonplaceholder.typicode.com/todos/A")
.then(res => console.log(res))
.catch(err =>
{
    console.log("----- GET REQUEST MIT CATCH -----");

    // Der fehler gibt uns unter anderem ein response objekt zurück, das, wie das normale response objekt oben, auch den statuscode ausgibt:
    console.log("Status:", err.response.status);
    console.log("Fehler:", err.response.statusText);

    console.log("Host:", err.response.request.host);
});

// Wir können axios auch mit async/await benutzen:
const axiosText = async () =>
{
    try
    {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

        // Damit wir die konsole erst anzeigen, wenn die daten da sind, nutzen wir if auf res:
        // console.log(res);

        if(res.status === 200)
        {
            console.log("----- ASYNCHRONER GET REQUEST -----");
            console.log("Daten:", res.data);
        }
    }
    catch (err)
    { 
        console.log("----- ASYNCHRONER GET REQUEST -----");
        console.log("ERROR:", err.response.status);
    }
}

axiosText();

// Alternativ zur .get(); methode, können wir, wire auch in fetch, das ganze auch in unsere axios instanz schreiben:
axios({
    method: "get",
    url: 'https://jsonplaceholder.typicode.com/todos/1'
})
.then(res =>
{
    console.log("----- ALTERNATIVER GET REQUEST -----");
    console.log("Daten:", res.data);
});
