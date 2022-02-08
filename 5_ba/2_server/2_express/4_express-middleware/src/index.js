// Express bietet uns sogenannte middleware, methoden mit denen wir optionen in unsere express app einbinden können, ähnlich wie hooks in react oder interceptoren in axios werden sie während des lebenszyklusses eines requests eingebunden. jede middleware hat zugriff auf die HTTP requests und responses zu jeder route, zu der sie hingefügt werden. Express selbst basiert komplett auf diesem system. Middleware kann miteinander verbunden werden, und so eine ganze reihe an dinge kontrollieren, oder mithilfe der methode .next(); auch weitergeben.

// middleware wird immer ÜBER den routen definiert, oder spezifisch für routen, als zweiter parameter.

// wie immer importieren wir express und legen eine instanz an:
const express = require('express');

// wir importieren path, um mit pfaden arbeiten zu können:
const path = require('path');

// wir importieren unsere selbstgeschriebene middleware
const { middlewareBeispiel } = require('./../middlewares/middlewarebeispiel.js');

// nachdem wir cors mit "npm install cors" installiert haben, importieren wir es:
const cors = require('cors');

const app = express();

// .get(); ist eine middleware auf applikationslevel, sie ist also teil von express, sie nutzt die parameter req und res, und, wie erwähnt optional .next(); DIes sind eingehende anfragen, die antwort (response) wird geschrieeben, dann wird .next(); ausgeführt, um die nächste middleware aufzurufen, sobald die aktuelle middleware fertig ist.

// wir können middleware in epress mit der methode .use(); auch global definieren, so wird sie für jeden request aufgerufen. sofern sie oberhalb der anderen routen definiert wird:
app.use((req, res, next) =>
{
    // wir loggen das req objekt von jedem aufruf
    console.log("URL:", req.url);

    // wir sagen mit .next(); es soll informationen weitergeben.
    next();

    // nach jedem aufruf eines requests, mit einer antwort wird der funktionsdurchlauf beendet, aber wir können anhand von .next(); die nächste middleware aufrufen.
});

// wir nutzen app.use(); um eine middleware anzulegen, die wir erstens den namen des ordners eingeben, wie er auf der client-seite heißen soll, und nutzen dann express.static(); um zu sagen, wie der ordner für statische dateien auf dem system tatsächlich heißt.
app.use("/static", express.static("public", { index: false }));
// die logik ist hier also folgende: 
// hole die dateien aus dem ordner "public", und biete sie im ordner "static" an.

// Wie wir sehen, wird die css datei jetzt geladen, jegliche andere datei, die wir von hier aus laden wollen, auch. Wir legen hierfür mal ein bild in den ordner public/images, und rufen es in unserer html datei auf.

// wir nutzen cors in unserer web app:
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
// weitere informationen zu cors: https://www.npmjs.com/package/cors

app.get("/", (req, res) =>
{
    res.send("Hallo Express");
});

app.get("/hallo", (req, res) =>
{
    res.send("Anderer Inhalt");
});

// wir übergeben unsere selbstgeschriebene, importierte middleware als zweiten parameter an den controller:
app.get('/test', middlewareBeispiel(), (req, res) =>
{
    res.send("Hier wurde middleware eingebunden");
});

// express liefert auch vorgefertigte middlewares, die wichtig ist, wenn wir bestimmte optionen für unsere applikation bereitstellen wollen, zum beispiel express.json(); mit dem es möglich ist, ankommende requests in json zu senden, oder wenn wir cors(); einbinden, um cross-origin requests zuzulassen. express.static(); ist wichtig, damit wir statische dateien wie css, oder zum beispiel bilder an requests übergeben können. diese middlewares bilden die basis für full stack anwendungen die mit express laufen.

// um zum beispiel express.static(); zu testen übertragen wir wieder eine html datei mit der antwort:
app.get("/home", (req, res) =>
{
    // wir geben wieder unsere index.html datei an:
    res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => console.log("Express läuft auf port", 3000));
