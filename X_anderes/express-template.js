// hier kommt dotenv hin...
require('dotenv').config();

// hier kommen unsere node imports hin...

// hier kommen unsere modul imports hin, normalerweise benötigen wir mindestens die npm module: express, body-parser, mongoose und dotenv.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// hier kommen unsere projekt internen imports hin...

// hier kommen unsere konfigurationsvariablen hin...
const app = express();
const port = process.env.PORT;
const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const db = mongoose.connect(databaseURL);

// hier kommen unsere app konfigurationen hin...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// hier kommen unsere routen hin...

// hier kommt unser listener hin...
app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});
