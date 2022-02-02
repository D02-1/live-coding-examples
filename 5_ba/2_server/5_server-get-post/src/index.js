require('dotenv').config();
const http = require('http');
const fs = require('fs');

const port = process.env.PORT;

// Zur vereinfachung des codes, und um wiederholungen zu vermeiden, schreiben wir eine funktion, zum laden von dateien:
const parseFile = (res, filename, filetype, statusCode = 200) =>
{
    // Wir übergeben den dateinamen dynamisch
    fs.readFile(`./public/${ filename }`, (err, content) =>
    {
        // Wir werfen einen fehler, da nicht der nutzer wissen sollte, das der server fehlschlug, sondern wir
        if(err) throw err;

        // Wir übergeben den filetype auch dynamisch, res, haben wir ja übergeben
        res.writeHead(statusCode, { 'Content-Type': filetype });
        res.write(content);
        res.end();
    });
}

const server = http.createServer((req, res) =>
{
    let data = '';

    // Wenn wir nicht nur GET sondern auch POST requests behandeln wollen müssen wir den wert von req.method auswerten.

    // Wenn die request methode GET ist:
    if(req.method === "GET")
    {
        // Unsere routen für die methode GET:
        switch(req.url)
        {
            // Unsere homepage
            case "/":
                parseFile(res, 'index.html', 'text/html');
                break;
            
            // Unser stylesheet:
            case "/style.css":
                parseFile(res, 'style.css', 'text/css');
                break;

            // Unsere fehlerseite
            default:
                parseFile(res, '404.html', 'text/html', 404);
                break;
        }
    }
    // Wenn die request methode POST ist:
    else if(req.method === "POST")
    {
        // Unsere routen für die methode POST:
        switch(req.url)
        {
            // Diese route erreichen wir, wenn wir das formular abschicken:
            case "/signup":
                
            // Beim bekommen von daten, feuern wir das event "onData" ab, und fügen die daten zum data body hinzu:
            req.on('data', (chunk) =>
            {
                data += chunk;
            });

            // Wenn die daten fertig durchgegeben wurden, zeigen wir unsere seite an:
            req.on('end', () =>
            {
                // Wir ersetzen + mit leerzeichen, wir ersetzen %40 mit @ und splitten das ganze bei &.
                const newData = data.replace("+", " ").replace("%40", "@").split("&");

                // Wir nutzen map auf dem array um jeden eintrag bei = zu splitten und so zusammengehörige arrays in dem array zu erstellen
                const splitWithKeysData = newData.map(data => data.split("="));
                
                // Wir wandeln das double array in eine objekt um, so stehen automatisch die keys vor den values:
                const dataJSONObj = Object.fromEntries(splitWithKeysData);
                // hier steht also jetzt: { name: "...", email: "..." };

                // Wir fügen dem objekt noch etwas hinzu:
                const newOBJ = { ...dataJSONObj, id: 2 };
                // hier steht also jetzt: { name: "...", email: "...", id: 2 };

                res.setHeader('Content-Type', 'application/json');
                // res.write(JSON.stringify(newOBJ));
                // res.end();

                console.log(newOBJ);

                // wir übergeben das neue objekt als stringified json:
                res.end(JSON.stringify(newOBJ));
                // hier wird übergeben: { "name": "...", "email": "...": "id": 2 }
            });

            break;
        }
    }
});

server.listen(port, () => console.log(`Server läuft auf port ${ port }`));