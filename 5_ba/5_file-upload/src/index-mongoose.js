// wir importieren die üblichen verdächtigen:
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// wir importieren multer:
const multer = require('multer');

// außerdem importieren wir noch Path:
const path = require('path');

// wir importieren das model:
const Image = require('./models/Image');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/image-example');

app.use(bodyParser.urlencoded({ extended: true }));

// wir erstellen eine middleware für multer, auf der wir multer ohne destination erstellen, damit wir die dateien NICHT auf dem dateisystem speichern:
const upload = multer({
    // mit "limits" setzten wir einstellungen, mit denen wir bestimmte optionen eingrenzen:
    limits:
    {
        // mit fileSize setzen wir die maximale größe von dateien in bytes fest
        fileSize: 50000000
    }
});

// wir schreiben eine route, auf der wir die index.html anbieten:
app.get("/", (req, res) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// wir schreiben eine POST route, auf der wir die bilder hochladen wollen, hierzu nutzen wir wieder die upload middleware:
app.post('/uploadphoto', upload.single("testImage"), (req, res) =>
{
    // wir holen uns daten aus req.file, dies ist die hochgeladene datei, die uns durch multer bereitgestellt wurde:
    const { buffer, originalname, mimetype } = req.file;

    // wir erstellen ein neues image:
    const newImage = new Image();

    // wir übergeben den buffer, also die daten des bildes in bytes:
    newImage.data = buffer;

    // wir legen fesst, das der dateiname, den wir speichern und mit dem wir das bild abrufen können das aktuelle datum als timestamp, gefolgt vom original bildnamen sein soll:
    newImage.name = Date.now() + "-" + originalname;

    // wir übergeben den typ des bildes, bei unserem testbild sollte dies "image/jpeg" sein:
    newImage.contentType = mimetype;

    // wir speichern das neue Image ab:
    newImage.save((err, image) =>
    {
        // fehler fangen wir in der konsole ab:
        if(err)
        {
            console.log(err);
        }

        // am ende wollen wir das wir auf eine route weitergeleitet werden, auf der wir direkt das bild sehen können:
        res.redirect('/images/' + image.name);

        // sollte alles geklappt haben, werden wir weitergeleitet an die bildadresse und bekommen einen fehler, da wir diese route ja noch nicht geschrieben haben.
    });
});

// wir schreiben eine get route, um unser bild anzeigen zu lassen:
app.get('/images/:name', (req, res) =>
{
    // wir suchen das bild anhand seines namens in der datenbank:
    Image.findOne({ name: req.params.name }).then(image =>
    {
        // wenn das bild gefunden wurde:
        if(image)
        {
            // wir lassen uns die daten des bildes ausgeben:
            console.log(image);

            // wenn das bild gefunden wurde, übergeben wir einen status 200:
            res.status(200)
                // den content type, der "seite", die wir senden, stellen wir auf den content type des bildes:
                .contentType(image.contentType)
                // und senden den buffer als daten an den browser:
                .send(image.data);
        }
        else
        {
            // sollte das bild nicht gefunden werden, geben wir einen status 404 aus:
            res.status(404).send("Image not found!");
        }
    });
});

app.listen(port,() =>
{
    console.log("Server läuft auf auf port", port);
});