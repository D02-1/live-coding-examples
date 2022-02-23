require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/User.js');

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DB_URL + "/" + process.env.DB_NAME;
const db = mongoose.connect(databaseURL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/users', (req, res) =>
{
    const { password } = req.body; // wir holen uns das passwort aus dem body

    const newUser = new User();

    newUser.firstname = "     Max               ";
    newUser.lastname = "             Mustermann";
    newUser.username = "TestUser18";
    newUser.role = "Admin";
    newUser.birthday = { day: 27, month: 8, year: 1984 }; 
    newUser.test = "abc";

    // newUser.country = "spanien";
    // geben wir einen wert an, der nicht im enumerator vorkommt, bekommen wir einen validationsfehler, da dieser wert nicht zulässig ist.
    newUser.country = "deutschland";

    newUser.profile = { darkmode: true, phone: "IPhone 12" }; // wir sehen nach dem speichern das komplette subdokument in compass.

    newUser.projects = [
        // wir können mehrere projekte einfügen, mit werten die zu unserem projektschema passen, und legen so mehrere subdokumente an.
        {
            title: 'TestProjekt',
            category: 'Test'
        },
        {
            title: 'Anderes Projekt',
            category: 'Test',
            isRunning: true
        }
    ];

    // wir nutzen die neue methode anstelle eines normalen strings und übergeben das passwort:
    newUser.password = newUser.hashPassword(password);

    // eine statische methode wird über den constructor des modells aufgerufen, nicht über dessen instanz:
    User.test((data) => {
        console.log(data)
    });

    newUser.save((err, user) =>
    {
        if(err) throw err;

        res.json(user);
    });
});

app.listen(port, () =>
{
    console.log("Server läuft auf " + port);
});
