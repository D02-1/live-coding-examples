// Wir importieren dotenv:
require('dotenv').config();

// Wir importieren express, path und body-parser:
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// wir legen eine instanz von express an:
const app = express();

// wir holen uns den port aus der env:
const port = process.env.PORT || 3000;

// wir nutzen die middleware für json, middleware nutzen wir in express, indem wir sie mit app.use(); aufrufen:
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// hier kommt unser code in:


// wir erstellen einen listener für den server:
app.listen(port, () =>
{
    console.log(`Server hört dir auf der ${ port } zu...`);
});
