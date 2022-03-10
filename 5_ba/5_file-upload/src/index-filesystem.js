// wir importieren die üblichen verdächtigen:
const express = require('express');
const bodyParser = require('body-parser');

// wir importieren multer, mehr informationen zu multer finden wir hier: https://www.npmjs.com/package/multer
const multer = require('multer');

// außerdem importieren wir noch FileSystem und Path, um auf dem server sowohl dateien zu speichern wie auch lesen zu können:
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

// mit der multer methode .diskStorage(); legen wir optionen fest, mit denen wir angeben, wo multer die dateien speichern soll, und wie sie heißen sollen:
const storage = multer.diskStorage({
    // die callback funktion destination(); gibt an, wo multer die dateien speichern soll:
    destination: function(req, file, callback)
    {

        // wir übergeben im callback an zweiter stelle die position auf der festplatte des servers, wo wir die dateien speichern wollen:
        callback(null, "public/uploadedFiles/");
    },
    // mit der callback funktion filename(); geben wir an, wie die gespeicherten dateien heißen sollen:
    filename: function(req, file, callback)
    {
        // wir lassen uns die metadaten der datei ausgeben: 
        console.log(file);

        // im callback geben wir an, wie wir die dateinamen anlegen wollen, indem wir den aktuellen timestamp, gefolgt von einem bindestrich und dem original namen der datei speichern wollen:
        callback(null, Date.now() + "-" + file.originalname); // dateien heissen dann zb: 183548395645-testbild.png 
    }
});

// wir erstellen eine upload middleware, in der wir sagen, das multer unsere storage einstellungen, die wir eben angelegt haben, nutzen soll:
const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));

// wir schreiben eine GET route, auf der wir die index.html anbieten:
app.get("/", (req, res) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// wir schreiben eine POST route, auf der wir die bilder hochladen wollen, hierzu nutzen wir die upload middleware, die wir vorher geschrieben haben, und geben an welchen namen unser inputfeld hat:
app.post('/uploadphoto', upload.single("testImage"), (req, res) =>
{
    // unsere middleware übernimmt das speichern jetzt automatisch anhand der informationen die wir in der storage variable angegeben haben, und wir können uns innerhalb der route um andere dinge kümmern.

    // mit req.file lassen wir uns die von multer zur verfügung gestellten daten einmal ausgeben:
    console.log(req.file);

    // wir können uns auch den body ausgeben lassen:
    console.log(req.body);

    // am ende wollen wir das wir auf eine route weitergeleitet werden, an der wir direkt das bild sehen können:
    res.redirect('/images/' + req.file.filename);
    // sollte alles geklappt haben, werden wir weitergeleitet an die biladresse und können unser bild sehen.
});

// wir schreiben eine GET route, in der wir unser bild anzeigen lassen:
app.get('/images/:name', (req, res) =>
{
    console.log(req.params.name + " wurde angeschaut");
    // anhand des namens des bildes senden wir per response methode .sendFile(); die datei aus dem ordner direkt an den browser:
    res.status(200).sendFile(path.join(__dirname, "../public/uploadedFiles/" + req.params.name));
});

app.listen(port,() =>
{
    console.log("Server läuft auf auf port", port);
});
