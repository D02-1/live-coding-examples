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
const user =
{
    username: "Admin",
    password: "test",
    email: "admin@test.de"
}

// wir nutzen die middleware für json, middleware nutzen wir in express, indem wir sie mit app.use(); aufrufen:
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// hier kommt unser code in:

// wir erstellen einen controller für unsere home route:
app.get('/', (req, res) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// wir erstellen einen controller für die route, auf die wir redirecten möchten, wenn der user sich erfolgreich eingeloggt hat
app.get('/dashboard', (req, res) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/dashboard.html'));
});

app.get('/user', (req, res) =>
{
    res.status(200).json({ success: true, user });
});

// wir erstellen einen controller für die methode POST, damit wir den login verarbeiten können:
app.post('/login', (req, res) =>
{
    // wir holen uns die werte für "username" und "password" aus dem body:
    const { username, password } = req.body;

    console.log(username, password);

    // Wir überprüfen (GEMOCKT) ob die werte für "username" und "password" aus dem request body richtig angegeben sind:
    if(username === user.username && password === user.password)
    {
        res.status(200).json({ success: true, user });
    }
    else
    {
        // Wenn die daten nicht stimmen, übergeben wir eine fehlermeldung an den client zurück
        res.status(200).json({ success: false, message: "Username oder Password inkorrekt!" });
    }
});

// wir erstellen einen listener für den server:
app.listen(port, () =>
{
    console.log(`Server hört dir auf der ${ port } zu...`);
});
