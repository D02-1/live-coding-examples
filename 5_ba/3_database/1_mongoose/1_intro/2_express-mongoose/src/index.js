require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

// wir importieren mongoose, weitere informationen zu mongoose findet ihr in der dokumentation: https://mongoosejs.com/docs/guide.html
const mongoose = require('mongoose');

// wir importieren unser modell:
const Car = require('./Models/Car.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine variable, in der wir die adresse unserer mongodb angeben, standardmäßig nutzt diese das protokoll mongodb anstelle von http oder https und befindet sich auf dem port 27017.

// die adresse wird im normalfall NICHT in den code geschrieben, sondeern in der .env angegeben.

// um direkt auf eine datenbank zu verbinden, nutzen wir außerdem eine weitere information aus der .env datei, in der wir diese angeben, und fügen beides als string zusammen:
const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`; // mongodb://localhost:27017/express-intro
const port = process.env.PORT;

// um unsere datenbank zu initialisieren, erstellen wir eine vairable in der wir mongoose mit der methode .connect() aufrufen, um sie direkt mit der datenbank zu verbinden. Wir könenn hier noch einige optionen angeben, wenn wir wollen:
                         // datenbank url, optionen
const db = mongoose.connect(databaseURL, { useNewUrlParser: true });

// hier kommt unser router code hin:

// POST /cars/ - einen eintrag erstellen
app.post('/cars/', (req, res) =>
{
    // zur absicherung, geben wir uns den body in der konsole aus
    console.log(req.body);

    // wir holen uns die informationen aus dem body
    const { brand, name, type, year } = req.body;

    // wir erstellen einen neuen eintrag, der instanz Car:
    const newCar = new Car({
        brand,
        name,
        type,
        year
    });

    // zur überprüfung geben wir uns das neue Car in der konsole zurück
    console.log(newCar);

    // wie wire sehen bekommen wir all unsere daten im richten datentypformat zurück. (year is nun eine nummer), auch unsere defaults sind angelegt, falls wir welche haben.

    // um einen neuen eintrag jetzt in der datenbank einzufügen, nutzen wir die methode .save(); und können hier, bei erfolg oder fehler etwas zurückgeben:
    newCar.save((err, car) =>
    {
        // bei fehler geben wir eine fehlermeldung zurück:
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        // bei erfolg geben wir den success status true und die angelegten daten zurück:
        return res.status(200).json({
            success: true,
            data: car
        });
    });

    // wir gehen auf post und localhost:3000/cars/ mit body inhalten
});

// GET /cars/ - alle einträge auflisten
app.get('/cars/', (req, res) =>
{
    // um alle einträge der kollektion zu finden, nutzen wir die modell methode .find(); ohne weitere angaben:
    Car.find({}, (err, cars) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        return res.status(200).json({
            success: true,
            data: cars
        });
    });

    // der code allgemein sieht praktisch genauso aus wie bei der vorherigen router methode, also können wir diese jetzt auch mit postman tersten

    // wir gehen auf get und localhost:3000/cars/
});

// GET /cars/:id - einen eintrag anhand seiner ID anzeigen
app.get('/cars/:id', (req, res) =>
{
    // wir holen uns die id aus den params
    const { id } = req.params;

    // wir nutzen die methode .find(); und geben diesmal die ID an, um ein spezifisches dokument zu finden, sonst bleibt der vorherige code einigermaßen gleich:
    Car.find({ _id: id }, (err, cars) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        return res.status(200).json({
            success: true,
            data: cars[0]
        });
    });
});

// PUT /cars/:id - einen eintrag anhand seiner id verändern
app.put('/cars/:id', (req, res) =>
{
    // auch hier holen wir uns die ID aus den params
    const { id } = req.params;

    // es gibt verschiedene möglichkeiten ein dokument zu ändern, wenn wir das dokument anhand einer id suchen, gibt es dafür zum beispiel eine eigene methode namens .findByIdAndUpdate();, di das dokument sucht, und wenn gefunden, angefügte daten direkt einfügen kann.

    // wir nutzen diesmal als beispiel allerdings wieder .find(); in der variation .findOne(); um spezfisch das erste dokument zurückzubekommen das gefunden wird. und speichern innerhalb des callbacks, so sehen wir, das wir auch hier auf die dokumenten daten zugreifen können und diese anpassen können:
    Car.findOne({ _id: id}, (err, car) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        // wir holen uns die daten vom gefundenen fahrzeug objekt und ersetzen sie mit den daten aus dem body, als default geben wir dieser die gefundenen daten an:
        car.brand = req.body.brand || car.brand;
        car.name = req.body.name || car.name;
        car.type = req.body.type || car.type;
        car.year = req.body.year || car.year;

        // wir nutzen jetzt wieder den befehl .save(); und speichern so unsere neuen daten ab.
        car.save((err, updatedCar) =>
        {
            if(err)
            {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(200).json({
                success: true,
                // wir fügen zu visuellen vereinfachung für uns noch die neu übertragenen daten ein:
                newData: req.body,
                data: updatedCar
            });
        });
    });
});


// DELETE /cars/:id - einen eintrag anhand seiner id löschen
app.delete('/cars/:id', (req, res) =>
{
    // wir holen uns die id aus den params:
    const { id } = req.params;

    // wir nutzen die methode .deleteOne(); um spezifisch das erste gefundene dokument zu löschen.
    Car.deleteOne({ _id: id })
    .then(() =>
    {
        return res.status(200).json({
            success: true,
            message: "Eintrag mit id " + id + " wurde gelöscht!"
        });
    })
    .catch(err =>
    {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    });
});

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
})