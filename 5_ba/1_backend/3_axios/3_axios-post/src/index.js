// Wir importieren axios
const axios = require('axios');

// wir erstellen unser data objekt:
const data =
{
    title: 'axios ausprobieren',
    body: 'Heute ist ein spannender Tag!',
    userId: 1
};

// Ein einfacher post request:
axios.post('https://jsonplaceholder.typicode.com/posts', data)
.then(res =>
{
    console.log("----- SIMPLER POST REQUEST -----");

    console.log("Daten:", res.data);
});

// wollen wir weitere header informationen selbst mit angeben, schreiben wir diese als objekt an dritter stelle der post methode:
axios.post('https://jsonplaceholder.typicode.com/posts', data, { 
    'Content-Type': 'application/json',
    'app-id': 'ui0tr4ßtzerg' // zum beispiel, falls ihr im header die app id übergeben müsst.
})
.then(res =>
{
    console.log("----- POST REQUEST MIT HEADER -----");

    console.log("Daten:", res.data);
});

// Alternativ zur .post(); methode, können wir auch hier die daten in eine axios instanz selbst schreiben:
axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    // data: data // Die daten die wir übertragen wollen.
    data // WEIL: data: data = data.
})
.then(res =>
{
    console.log("----- ALTERNATIVER POST REQUEST -----");
    
    console.log("Daten:", res.data);
});

// Asynchroner post request
const axiosPost = async () =>
{
    try
    {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

        // console.log(res);

        if(res.status === 201) // STATUS: 201 = CREATED
        {
            console.log("----- ASYNCHRONER POST REQUEST -----");
            console.log("Status:", res.status);
            console.log("Daten", res.data);
        }
    }
    catch (err)
    {
        console.log(err.response.status);
    }
}

axiosPost();
