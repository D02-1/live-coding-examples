require('dotenv').config();

// Wir importieren express
const express = require('express');

// wir importieren das modul body-parser, damit wir den body in post requests auslesen können:
const bodyParser = require('body-parser');

// Wir erstellen eine instanz von express:
const app = express();

// wir erstellen eine variable für die port nummer:
const port = process.env.PORT;

// Wir sagen express, es soll als middleware den body-parser nutzen, um die daten der url zu dekodieren, die einstellung extend geben wir auch an, um erweitertes modernes url format nutzen zu können:
app.use(bodyParser.urlencoded({ extended: true }));

// damit express auch json auslesen und dekodieren kann, falls wir ein frontend bauen, in dem wir an die daten kommen wollen, können wir außerdem noch die middleware .json(); vom body-parser nutzen:
app.use(bodyParser.json());

// wir erstellen einen controller für die methode POST:
app.post("/", (req, res) =>
{
    // auch innerhalb von post können wir unsere req und res objekte auslesen:
    console.log(req.method);

    // wir geben bei einer post methode, wie wir es gelernt haben, auch etwas zurücck, meist eine success mitteilung, und die angefragten daten im json format, dafcür nutzen wir die methode .json();
    res.status(201).json({ success: true, data: [] });
});

// wir können den body auslesen:

app.post("/signup", (req, res) =>
{
    // dies können wir testweise in postman tun. Um body zu senden, klicken wir in postman auf "Body" und senden dort entweder unsere keys und values im format "x-www-form-urlencoded", oder wir klicken auf "raw" und dort auf "JSON", um unsere eingabe DIREKT in JSON zu schreiben.
    
    // die daten des bodys bekommen wir unter req.body, wenn wir genau wissen welche daten wir anfragen, können wir diese auch mit hilfe eines deconstructors direkt aus dem objekt ziehen:
    const { firstname, lastname } = req.body;

    console.log("Name:", firstname, lastname);

    // diese daten könenn wir auch an den client zurückgeben:
    res.json({ success: true, message: `Hallo ${ firstname }, willkommen an bord!`});
});

// wir sagen express es soll auf einem port zuhören:
app.listen(port, () => console.log('Hallo', port));
