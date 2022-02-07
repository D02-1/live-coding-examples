// Wir importieren das modul http:
const http = require('http');

// Wir setzten einen port fest, auf dem wir den server laufen lassen wollen:
const port = 3000;

// Wir schreiben das server objekt
const server = http.createServer((req, res) =>
{
    // für das speichern von daten aus dem post request, müssen wir eine variable anlegen:
    let data = "";

    // Beispiel: GET

    // Wir müssen mit einigen abfragen angeben für welche methode und unter welchem pfad wir unsere informationen angeben wollen: 
    if(req.method === "GET" && req.url === "/")
    {
        // Wir setzen den inhaltstyp unserer informationen fest:
        res.writeHead(200, { 'Content-Type': 'text/plain' });
  
        // Wir übergeben den inhalt, den wir übergeben wollen an unsere response:
        res.write('Hallo HTTP!'); 
  
        // Wir beenden die kommunikation zwischen server und client:
        res.end();
    }

    // Beispiel: POST

    else if(req.method === "POST" && req.url === "/test")
    {           
        // Sobald wir daten bekommen müssen wir das event "onData" nutzen, um die daten aus chunks zusammenzufügen:
        req.on("data", (chunk) => {
            data += chunk;
        });

        // erst wenn das event "onEnd" durchgelaufen ist können wir mit unseren daten arbeiten:
        req.on("end", () =>
        {
            // jetzt können wir unsere daten in der konsole ausgeben:
            console.log(data);

            // und die antwort zurücksenden:
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }
});

// Wir rufen die methode .listen(); auf, um den server loop zu starten, der auf anfragen wartet.
server.listen(port, () => 
{
    console.log(`Server läuft auf port ${ port }`)
});
