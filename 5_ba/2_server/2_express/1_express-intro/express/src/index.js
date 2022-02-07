// Wir importieren das modul express:
const express = require('express');

// Wir setzeen eine express instanz auf eine variable, in standardkonvention heisst diese 'app'
const app = express();

// auch hier setzten wir den port fest:
const port = 3000;

// BEISPIEL GET:

// um informationen an einen get request zu übergeben, können wir direkt die methode .get(); nutzen, ähnlich wie bei axios, in der wir den pfad angeben, auf dem wir unsere informationen übergeben wollen:
app.get("/", (req, res) =>
{
    // Header informationen setzen wir mit .set(); und fügen sie in ein objekt ein:
    res.set({ 'Content-Type': 'text/plain' });

    // wir übergeben unsere gewünschte information an die methode .send(); (oder .json(); bei json inhalten) und können mit .status(); unseren statuscode übergeben:
    res.status(200).send("Hallo Express!");
});

// BEISPIEL POST:

// um express zu sagen, das wir mit json arbeiten wollen, rufen wir express mit der methode .use() sie soll eine middleware verwenden, die per .json(); json umwandeln kann.
app.use(express.json());

// ein post request schreiben wir mit der methode .post();
app.post("/test", (req, res) =>
{
    // jetzt können wir die gewollten daten ausgeben, ohne sie umwandeln zu müssen, oder aus dem buffer zu holen:
    console.log(req.query);

    // und können dies mit res.send(); natürlich auch als eine antwort senden:
    res.send(req.query);
});

// auch hier rufen wir eine methode namens .listen(); auf, um dem server zu sagen er soll zuhören:
app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});