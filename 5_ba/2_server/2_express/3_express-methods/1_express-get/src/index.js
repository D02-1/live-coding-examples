// Wir importieren das modul "express":
const express = require('express');

// Wir importieren path, um mit pfaden auf unserem system arbeiten zu können:
const path = require('path');

const app = express();
const port = 3000;

// mit app.get(); erstellen wir einen controller für die methode "GET", ein controller ist eine methode, die requests und responses bearbeiten kann, dort wichtigen programmcode ausführt, der mit der anfrage zutun hat, so sind alle programminhalte, die mit dieser anfrage zutun haben an einem platz zu finden, innerhalb des callbacks von get. Dies ist ordentlicher zu lesen, einfacher zu verstehen und sehr viel besser zu warten.

// Ein simpler GET request, auf root "/". Zum testen gehen wir auf die adresse localhost:3000
app.get("/", (req, res) =>
{
    // wir können uns das request und das response objekt ausgeben lassen:
    console.log(req);
    /*
        Wenn wir uns das request objekt ausgeben lassen, sehen wir dort interessante informationen. wie zum beispiel:
        - req.url = die aufgerufene URL
        - req.method = die benutzte methode
    */

    // wie erwähnt können wir uns auch das response objekt ansehen
    console.log(res);

    // Wir senden eine antwort mit res.send(); und fügen vorher noch den status mit ein. wir müssen IMMER eine antwort senden, weil der client sonst einfriert.
    res.status(200).send("Hallo Welt");
});

// Ein GET request auf einen anderen pfad:
app.get("/hallo", (req, res) =>
{
    // mit req.url kännen wir den aktuellen pfad ausgeben lassen:
    console.log("Akuteller pfad", req.url);

    // wir können die response mit .json(); auch direkt als json zurückgeben, dies ist sehr gut geeignet wenn wir apis entwickeln
    res.status(200).json({ hallo: 'Welt' });
});

// Bei einem request in express können wir auch pfadinhalte als paremeter übergeben, so etwas haben wir in react-router schon mal gesehen:
app.get("/user/:id/", (req, res) =>
{
    // die params information bekommen wir im objekt req.params, mit deconstructuring können wir uns die richtigen daten aus dem objekt holen:
    const { id } = req.params;

    // wir können uns die user ID anhand der url als string also ganz einfach ausgeben lassen:
    console.log("USER:", id);

    // wir jetzt also zb auf die url localhost:3000/user/Mahmut gehen, sollten wir die daten sehen.
    
    //Wir schreiben dies auch noch in die antwort:
    res.status(200).json({ user: id });
});

// Express gibt uns die möglichleit dateien direkt zu laden:
app.get("/home", (req, res) =>
{
    // Wenn wir zum beispiel eine HTML datei laden wollen, um eine webseite anzuzeigen, nutzen wir dazu die response methode .sendFile();, sie sendet bei der antwort, die gewünschte datei an den client zurück.

    // Wir erstellen zu testzwecken eine html datei, im ordner public.

    // mit path.join(); fügen wir den aktuellen pfad und die gewünschte datei zusammen, und können so auf unseren public ordner zugreifen und die html datei laden:
    res.status(200).sendFile(path.join(__dirname, '../public/index.html')); // __dirname ist eine umgebungsvariable, die den pfad, in dem sich die javascript datei befindet, ausgibt.

    // Wie wir sehen, können wir zwar einzelne dateien anzeigen lassen, aber unser stylesheet wird nicht geladen. Im gegensatz zu http, wo wir jetzt jede datei einzeln einbinden müssten, können wir in express sagen, das wir einen statischen ordner aufrufen wollen, aus dem all unsere inhalte, wie css, javascript oder zum beispiel png dateien kommen. Damit dies funktionoiert müssen wir eine middleware nutzen, was in der nächsten datei behandeln werden.
});

// auch hier rufen wir eine methode namens .listen(); auf, um dem server zu sagen, er soll auf einer spezifischen adresse zuhören (auf anfragen warten):
app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }`);
});
