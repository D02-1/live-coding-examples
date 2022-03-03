// wir importieren dotenv:
require('dotenv').config();

// wir importieren express, mongoose und body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// wir importieren unsere routerdatei, da wir hier nur mit dem user arbeiten, können wir alles auf dem /users endpoint machen:
const usersRoutes = require('./routes/users');

// wir erstellen unsere typischen variablen um eine express app zu starten und mongoose anzusprechen:
const app = express();
const port = process.env.PORT;
const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
mongoose.connect(databaseURL);
const db = mongoose.connection;

db.once('open', () =>
{
    console.log('Datenbank verbunden!');
});

// wir geben unsere typischen einstellungen für express an:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// hier fügen wir unsere routen ein:
app.use('/users', usersRoutes);

// wir erstellen einen listener für express:
app.listen(port, () =>
{
    console.log('Server läuft auf http://localhost:' + port);
});
