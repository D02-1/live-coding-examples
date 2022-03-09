const express = require('express');
const bodyParser = require('body-parser');

// Mit dem modul cookie-parser lassen sich die cookies per middleware extrahieren.
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded( { extended:true }) );
app.use(bodyParser.json());

// wir geben an, das wir den cookie-parser nutzen wollen:
app.use(cookieParser());

// als erstes erstellen wir eine GET methoden route it der wir einen cookie erstellen können:
app.get('/cookie/erstellen', (req, res) =>
{
    // wir können daten in unserer response als cookie speichern, dafür müssen wir die response methode .cookie(); aufrufen, dies führt die Set-Cookie methode im header aus:
    res.cookie(
        // als erstes geben wir den cookie namen (cookie-key) ein:
        "cookiename",
        // dann geben wir den wert oder inhalt des cookies an:
        "cookiewert",
        // wenn wir wollen, können wir noch ein paar optionen hinzufügen, zum beispiel, die zeit in sekunden, wie lange der cookie existieren soll:
        {
            maxAge: 24 * 60 * 60, // ein tag
            httpOnly: true // mit dieser option sorgen wir dafür, das der cookie nur vom server ausgelesen werden kann.
            // es gibt noch einige andere optionen, die wir hier angeben könnten, eine referenz dazu gibt es hier: https://expressjs.com/en/api.html
        }
    )
    // wir können auch mehrere cookies setzen, indem wir im method chaining noch einmal .cookie(); aufrufen:
    .cookie('anderercookie', 'anderercookieWert');

    // jetzt geben wir unsere response an:
    res.status(200).json({ success: true });

    // rufen wir jetzt die adresse auf und schauen unter cookies nach, sehen wir, das wir einen cookie gesetzt haben.
});

// dank des cookie-parsers, sind wir in der lage cookies auszulesen, und können auf diese über das request objekt zugreifen:
app.get('/cookie/lesen', (req, res) =>
{
    res.status(200).json(req.cookies);
});
// besuchen wir diese route, sehen wir unseren cookie als response

// befindet sich das ablaufdatum des cookies in der vergangenheit, wird der cookie automatisch gelöscht, um den client anzuweisen einen cookie zu löschen, zum beispiel bei einem logout, nuten wir die response methode .clearCookie(); dies setzt das maximale alter des cookies auf 0, also den 1.1.1970 um 0 uhr, und führt dadurch die automatisch löschung durch.
app.get('/cookie/loeschen', (req, res) =>
{
    res.clearCookie();
    // oder:
    // res.cookie('cookiename', '', { maxAge: 0 });
    res.status(200).json({
        message: 'Cookie gelöscht!',
        cookies: req.cookies
    })
});

app.listen(port, () =>
{
    console.log('Server läuft auf port ' + port);
});
