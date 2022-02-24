require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/User.js');

const app = express();
const port = process.env.PORT;
const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const db = mongoose.connect(databaseURL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Die standardmäßigen kommandos in mongoose um CRUD operationen auszuführen, also Create, Read, Update und Delete sind einfach zu nutzen und bieten ein menge optionen und verschiedene wege, sie anzusprechen. Sie basieren auf filtern, mit denen wir dokumente per ID oder durch spezifische werte finden können, und dann an dem oder den gefundenen dokumenten unsere operationen ausführen können.

// Wenn wir dokumente in unserer datenbank finden wollen, haben wir dafür auf modell ebene einige möglichkeiten, die sogenannten "Filter methoden".

// bei einer suche nutzen wir die HTTP methode GET

// ALLE EINTRÄGE FINDEN:
// mit Model.find(); ohne weitere angaben, können wir alle einträge innerhalb einer kollektion finden, die im Model referenziert wurde:
app.get('/users', (req, res) =>
{
    User.find()
    .then(users =>
    {
        // wir bekommen alle einträge zurück, und können sie anhand der variable users aus dem callback ausgeben:
        res.status(200).json({
            success: true,
            amount: users.length,
            data: users
        });
    })
    .catch(err => console.log(err.message));
});

// SPEZIFISCHE EINTRÄGE FINDEN:
// Wir können auch spezifische informationen mit Model.find(); suchen, indem wir suchoptionen in ein objekt übergeben, und  alle gefundenen ergebnisse ausgeben:
app.get('/users/admins', (req, res) =>
{
    User.find({ role: "admin" })
    .then(users =>
    {
        res.status(200).json({
            success: true,
            amount: users.length,
            data: users
        });
    })
    .catch(err => console.log(err.message));

    // wie wir sehen, bekommen wir jetzt eine andere anzahl im amount angezeigt, da wir nur die einträge filtern, die die rolle "admin" haben. Wenn kein eintrag gefunden wurde, bekommen wir ein leeres array zurück.

    // Ein filter, der nicht funktioniert, weil der schlüssel nicht existiert, gibt ALLE ergebnisse zurück.
});

// SPEZIFISCHE EINTRÄGE MIT MEHREREN FILTERN FINDEN:
// wir können auch mehrere informationen bei Model.find(); filtern, und bekommen dann die dokumente zurück, bei denen alle suchkritieren zutreffen.
app.get('/users/someone', (req, res) =>
{
    User.find({ age: 64, role: "admin" })
    .then(users =>
    {
        res.status(200).json({
            success: true,
            amount: users.length,
            data: users
        });
    })
});

// EINZELNES DOKUMENT FINDEN:
// um nicht mehrere, sondern nur einen, nämlich den ersten gefundenen eintrag mit dem gesuchten wert zu finden, nutzen wir die methode Model.findOne();
app.get('/users/person1', (req, res) =>
{
    // auch hier können wir nach mehreren werten filtern, oder nur einem.
    User.findOne({ username: "Rick" })
    .then(user =>
    {
        // wenn wir nur einen eintrag suchen, nutzen wir laut konvention NICHT die mehrzahl als variablennamen (users), sondern die einzahl (user).
        
        res.status(200).json({
            success: true,
            data: user
        });
    });

    // Wie wir sehen bekommen wir jetzt ein objekt in data zurück, nicht ein array mit nur einem eintrag. Wenn nichts gefunden wurde, bekommen wir hier "null" zurück, sollte der gesuchte schlüssel nicht existieren, bekommen wir das erste gefundene dokument der kollektion zurück.
});

// EIN DOKUMENT ANHAND DER ID FINDEN:
// um direkt nach ein dokument anhand seiner ID in mongodb suchen, anstelle zum beispiel Model.findOne({ _id: "..." }); zu nutzen, gibt es den befehl Model.findById();
app.get('/users/direkteId', (req, res) =>
{
    const id = "62174600b9d168997493e1f2";

    // wir können mit mongoose auch vorher herausfinden, ob eine id valide ist, indem wir die methode mongoose.isValidObjectId(); nutzen:
    const isValid = mongoose.isValidObjectId(id)

    if(!isValid)
    {
        res.status(400).json({
            message: "hier ist was kaputt"
        });
    }
    else
    {
        User.findById(id)
        .then(user =>
        {
            if(user !== null)
            {
                res.status(200).json({
                    success: true,
                    data: user
                });
            }
            else
            {
                res.status(400).json({
                    success: true,
                    message: "No Entries found"
                });
            }
        })
        .catch(err => console.log(err.message));
    }

    // wir bekommen hier spezifisch das dokument als objekt zurück, das wir per ID gesucht haben, sollte das dokument mit der id nicht existieren, bekommen wir keinen fehler sondern null.

    // sollte die ID allerdings NICHT im 12 bit format sein (das standard ID format für mongodb) bekommen wir einen error.

    /*
        das 12 bit oder auch 24 hex format, ist eine string kodierung, die in 12  bits, ALSO 24 hexadezimalnummenr eingeteilt ist:

        1  2  3  4  5  6  7  8  9  10 11 12
        ff 14 46 00 b9 d1 68 99 74 93 e1 ee
    */
});

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});
