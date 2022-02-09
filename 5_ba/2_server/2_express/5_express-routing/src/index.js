/*
    Routing in react gibt uns mehrere möglichkeiten routen festzulegen, zu sortieren und einfacher zu managen. Wir haben die möglichkeit mehrere methoden auf den selben pfad zu legen, was in CRUD anwendungen standardmäßig gemacht wird, eine produktionsrelevante CRUD anwendung hat also nicht routen wie:
    - POST   /todo/create           für das erstellen von inhalten
    - GET    /todo/all              für das anzeigen von allen inhalten
    - PUT    /todo/:id/update       für das updaten von inhalten
    - DELETE /todo/:id/delete       für das löschen von inhalten

    oder ähnliche, sondern so:
    - POST   /todos                 für das erstellen von inhalten
    - GET    /todos                 für das anzeigen von allen inhalten
    - GET    /todos/:id             für das anzeigen eines spezifischen inhaltes
    - PUT    /todos/:id             für das updaten von spezifischen inhalten
    - DELETE /todos/:id             für das löschen eines spezifischen inhaltes

    Da wir verschiedene methoden auf den selben pfad legen können, ist so eine struktur sehr einfach anzulegen.
*/

// wir importieren "express":
const express = require('express');

// wir legen eine instanz von express auf die variable app:
const app = express();

// wir definieren den, auf dem express laufen soll:
const port = 3000;

// 1. MEHRERE METHODEN AUF DER SELBEN ROUTE:
// wenn wir, wie wir es bisher gelernt haben, eine route anlegen, müssen wir für jede einzelne route eine methode in unserer erxpress instanz aufrufen:
app.get("/", (req, res) =>
{
    // wir senden eine antwort:
    res.status(200).send("GET: Hallo Welt!");
});
app.post("/", (req, res) =>
{
    res.status(200).send("POST: Hallo Welt!");
});

// 2. METHOD CHAINING

// Express hat eine methode namens .route(); die dafür sorgt code wiederholungen zu verhindern, und das management zu erleichtern. Anstelle das wir in .get(); oder .post(); den pfad angeben, den wir auslesen wollen, geben wir ihn in .route(); an, und rufen .get();, .post(); und so weiter nur mit dem callback auf.
app.route("/test")
// die GET methode für unsere route "/test"
.get((req, res) =>
{
    res.status(200).send("Hallo GET");
})
// die POST methode für unsere route "/test"
.post((req, res) =>
{
    res.status(200).send("Hallo POST");
});

// Wir können wie wir sehen verschiedene mehtoden auf der selben url ausführen, und die dann auch sehr übersichtlich und DRY schreiben, wenn wir .route(); dafür nutzen.

// 3. MEHRERE CALLBACKS AUF EINER METHODE

// Wir können nicht nur verschiedene methoden auf der selben URL ausführen, sndern auch mehrere callbacks auf der selben methode ausführen, die hintereinander abgearbeitet werden.

// wir schreiben 2 funktionen die wir in die methode als callback übergeben:
const callback1 = (req, res, next) =>
{
    console.log("Dies hier passiert als erstes");

    // wir müssen .next(); übergeben, damit die zweite funktion aufgerufen wird.
    next();
}
const callback2 = (req, res, next) =>
{
    console.log("Dies hier passiert als zweites");

    next();
}

const callback3 = (req, res) =>
{
    console.log("Dies hier passiert als drittes!");

    // hier senden wir unsere response:
    res.status(200).send("Es hat geklappt!");

    // hier müssen wir kein .next(); übergeben, da dies das ende unseres requests ist.
}

app.get("/hallo", [ callback1, callback2, callback3 ]);

app.listen(port, () => console.log("Server läuft auf port ", port));
