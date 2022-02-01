// Wir importieren das modul http:
const http = require('http');

// Wir setzten einen port fest, auf dem wir den server laufen lassen wollen:
const port = 3000;

// Wir schreiben ein server objekt:
const server = http.createServer((request, response) =>
{
    // Wir können überprüfen welcher pfad (url) und welche methode angefragt wurde:
    console.log("URL:", "http://localhost:" + port + request.url);
    console.log("METHODE:", request.method);

    // Wir setzten fest, das der inhalt der angezeigt werden kann (Statuscode = 200) normaler text ist.
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Wir geben an welchen inhalt wir ausgeben wollen:
    response.write('Hallo Welt!');

    // Wir beenden die kommunikation zwischen server und client:
    response.end();
});

// Wir sorgen mit der methode .listen(); dafür, das der server auf anfragen hört.
server.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }`);
});
