// Wir importieren das modul express:
const express = require('express');

// Wir importieren path, um mit pfaden auf dem system arbeiten zu können;
const path = require('path');

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

app.get('/seite', (req, res) =>
{
    // Mit .sendFile(); können wir dateien angeben, die wir senden wollen:
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
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

// um eine selbstgemachte 404 fehlerseite anzuzeigen, übergeben wir als letzten pfad ein anonymes callback an app.use(); als middleware und geben dort den statuscode und unseren gewünschten inhalt an:
app.use((req, res, next) =>
{
    // next können wir verwenden um nach dem aufruf von middleware unsere request und response objekte weiterzugeben.

    // wir übergeben den status 404 und senden eine nachricht:
    res.status(404).send("ERROR: nicht gefunden!");
});

// auch hier rufen wir eine methode namens .listen(); auf, um dem server zu sagen er soll zuhören:
app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});