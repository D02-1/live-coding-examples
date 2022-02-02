// Wir importieren das modul dotenv
require('dotenv').config();

// Wir importieren das module http:
const http = require('http');

// Wir importieren das modul fs (FILE-SYSTEM):
const fs = require('fs');

// Wir holen uns den port für unsere server applikation aus der .env datei:
const port = process.env.PORT;

// Wir erstellen ein server objekt, und wir können das ganze auch in einer einzigen callback funktion schreiben:
http.createServer((req, res) =>
{
    // Wir erstellen einen switch für die pfadangaben:
    switch(req.url)
    {
        // Auf der home url wollen wir unsere seite anzeigen
        case "/":
            // Wir nutzen .readFile(); um die html datei einzulesen, die wir ausgeben wollen:
            fs.readFile("./public/index.html", (err, content) =>
            {
                // Wenn die datei nicht gefunden wurde, wollen wir einen fehler ausgeben:
                if(err) throw err;

                // Wir zeigen die gefundene html datei an:
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(content);
                res.end();
            });
            break;

        // Da wir eine css datei haben, müssen wir auch diese mit fs laden:
        case "/style-theme.css":
            fs.readFile("./public/style.css", (err, content) =>
            {
                if(err) throw err;

                // Hier setzen wir den typ des inhaltes auf text/css
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(content);
                res.end();
            });

        // Falls der besucher sich auf einen pfad bewegt, den es nicht gibt, geben wir hier eine 404 fehlerseite aus.
        default:
            fs.readFile("./public/404.html", (err, content) =>
            {
                if(err) throw err;

                // Bei einer Fehlerseite geben wir den statuscode 404 (Nicht gefunden!) aus.
                res.writeHead(404, { 'Content-Type': 'text/html'});
                res.write(content);
                res.end();
            });
    }
}).listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});
