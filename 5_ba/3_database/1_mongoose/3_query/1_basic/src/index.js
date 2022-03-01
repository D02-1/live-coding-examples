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

// >>>>> READ

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

// ERWEITERTE QUERY METHODEN:

// abgesehen von den typischen filtern, gibt es auch noch ein paar weitere methoden, mit denen wir direkt befehle ausführen können, wenn wir das gesuchte dokument gefunden haben.

// >>>>> UPDATE

// EIN DOKUMENT SUCHEN UND ÄNDERN:
app.put('/users/updateOne', (req, res) =>
{
    // um werte innerhalb eines dokumentes zu ersetzen oder zu ändern, können wir die HTTP methode PUT nutzen, da wir änderungen, also updates, machen.
    
    // wir finden mit ...One(); befehlen immer den ersten gefundenen inhalt, wenn es also mehrere dokumente mit diesem wert gibt, wurde nur das erste geändert werden, das gefunden wird.

    // mit Model.findOneAndUpdate(); können wir ein spezifisches dokument suchen, und dort änderungen vornehmen
    
    // .findOneAndUpdate({ suchanfrage }, { änderungen }, { optionen });

    User.findOneAndUpdate({ username: "Joe" },
    // In einem neuen objekt, nach der suchanfrage, geben wir unsere daten an, und nur diese werden überschrieben:
    {
        age: 35
    },
    // in einem weiteren objekt können wir optionen angeben:
    {
        new: true, // wenn wir diese option nicht setzen, bekommen wir im callback das unveränderte dokument zurück, mit dieser option können wir dem benutzer also das veränderte dokument oder die veränderten daten übergeben.
        upsert: true, // sollte das gesuchte dokument nicht existieren, wird es mit dem upsert befehl erstellt, upsert bedeutet "erstellen bei update"
        overwrite: false // sollten wir den overwrite befehl auf true setzen, werden alle daten aus dem dokument überschrieben, und nur die im update objekt angegebenen werte übernommen
    }
    )
    .then(user =>
    {
        res.status(200).json({
            success: true,
            // wir erstellen einen key, in dem wir ausgeben, das daten geändert wurden:
            updated: user !== null ? true : false,
            data: user 
        });
    });
});

// EIN DOKUMENT AUF BASIS DER ID SUCHEN UND ÄNDERN
app.put('/users/updateById', (req, res) =>
{
    // Mit Model.findByIdAndUpdate(); suchen wir ein dokument anhand seiner ID und updaten dann die daten, hier gelten die selben optionen wie bei .findOneAndUpdate();
    User.findByIdAndUpdate("62174600b9d168997493e1f0",
    {
        role: "admin"
    },
    {
        new: true
    })
    .then(user =>
    {
        res.status(200).json({
            success: true,
            updated: user !== null ? true : false,
            data: user
        });
    });
});

// MEHRERE DOKUMENTE VERÄNDERN
app.put('/users/updateMany', (req, res) =>
{
    // um mehrere dokumente auf einmal zu ändern können wir die methode Model.updateMany(); nutzen:
    User.updateMany({ role: "admin" },
    {
        age: 14
    },
    {
        new: true
    })
    .then(data =>
    {
        res.status(200).json({
            success: true,
            data
        });
    });
});

// EIN DOKUMENT ERSETZEN:
app.put('/users/replace', (req, res) =>
{
    // um ein komplettes dokument zu ersetzen, nicht nur die werte auszutauschen, können wir die methode Model.findOneAndReplace(); nutzen, hier gibt es kein FindById für, nur "One", da wir die ID des dokumentes ersetzen, und dies zu problemen führen könnte
    User.findOneAndReplace({ username: "Steve" },
    {
        role: "admin",
        username: "Mahmut",
        age: 50,
        email: "hallo@welt.de",
        password: "test",
        country: "mars",
        job: "Web-Dev"
    },
    {
        new: true
    })
    .then(user =>
    {
        res.status(200).json({
            success: true,
            replaced: user !== null ? true : false,
            data: user
        });
    });

    // wie wir sehen wird auch hier der komplette inhalt überschrieben, es macht also sinn, das wir tatsächlich ALLE inhalte des dokumentes hier angeben, mit dem wir das gefundene dokument ersetzen wollen.
});

// >>>>> DELETE

// für löschoptionen nutzen wir die HTTP methode DELETE

// wenn wir dokumente löschen wollen, können wir dafür methoden nutzen, die das dokument suchen, und dann das gefundene löschen. hierbei gibt es zwei verschiedene schreibweisen (DELETE und REMOVE), die beide in mongoose das selbe machen, oberflächlich gesehen für uns...
// sie unterscheiden sich nur in ihrer nutzung auf shell ebene (also mongosh), sie können in mongoose aber absolut austauschbar benutzt werden.

// EIN DOKUMENT FINDEN UND LÖSCHEN
app.delete('/users/deleteOne', (req, res) =>
{
    // mit Model.findOneAndDelete(); oder Model.findOneAndRemove(); suchen wir ein dokument,und löschen dieses, dabei können wir uns das gelöschte dokument im callback ausgeben lassen:
    User.findOneAndDelete({ username: "Ralph" })
    .then(user =>
    {
        res.status(200).json({
            success: true,
            // sollte das zu löschende dokument nicht gefunden werden, bekommen wir hier als daten null zurück, dies sollten wir nutzen, und vielleicht eine weitere nachricht in unsere response einbauen:
            deleted: user !== null ? true : false,
            data: user
        });
    });
});

// EIN DOKUMENT ANHAND SEINER ID FINDEN UND LÖSCHEN
app.delete('/users/deleteById', (req, res) =>
{
    // in produktion würden wir diese methode MEIST verwenden, und uns die ID aus den params übergeben lassen, also /users/:id

    User.findByIdAndDelete("62174600b9d168997493e1ee")
    .then(user =>
    {
        res.status(200).json({
            success: true,
            deleted: user !== null ? true : false,
            data: user
        });
    });
});

// MEHRERE DOKUMENTE LÖSCHEN
app.delete('/users/deleteMany', (req, res) =>
{
    // Mit Model.deleteMany(); können wir anhand von suchparametern mehrere dokumente löschen:
    User.deleteMany({ role: "member" })
    .then(data =>
    {
        res.status(200).json({
            success: true,
            deleted: data !== null ? true : false,
            data
        });
    });
});

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});
