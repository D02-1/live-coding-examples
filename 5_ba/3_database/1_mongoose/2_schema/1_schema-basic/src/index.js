require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // wir importieren mongoose

// wir importieren unser modell
const User = require('./models/User.js'); // konvention: Großer anfangsbuchstabe, einzahl.

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DB_URL + "/" + process.env.DB_NAME; // wir geben eine url für mongodb und die datenbank an
const db = mongoose.connect(databaseURL); // wir erstellen eine verbindung zur datenbank

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// für das schema erstellen wir eine neue post route, da wir dort unser schema ansprechen wolen und neue einträge erstellen wollen:
app.post('/users', (req, res) =>
{
    // wir erstellen eine neue instanz von User:
    const newUser = new User();

    // wir kümmern uns manuell um die neuen daten, so können wir in diesem beispiel besser kontrollieren was wir machen:
    newUser.firstname = "     Max               ";
    newUser.lastname = "             Mustermann";
    newUser.username = "TestUser10";
    newUser.role = "Admin"; // wir überschreiben den default wert
    newUser.birthday = { day: 27, month: 8, year: 1984 }; // wir können direkt daten in ein objekt schieben
    newUser.test = "abc"; // Wenn wir einen schlüssel hinzufügen, den wir nicht im schema anlegen, wird dieser beim speichern ignoriert.

    // wir speichern unseren eintrag:
    newUser.save((err, user) =>
    {
        // bei einem fehler geben wir die fehlermeldung zurück:
        if(err) throw err;

        // bei erfolg geben wir die angelegten daten zurück:
        res.json(user);
    });
});

app.listen(port, () =>
{
    console.log("Server läuft auf " + port);
});
