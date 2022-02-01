// Einen rudimentären server, können wir mit nodejs internen modulen erstellen ohne etwas mit der npm installieren zu müssen. Wir lernen später express.js kennen, das standardmodul für web anwendungen mit nodejs aber vorher lernne wir die basics ohne expressJS

// Wir importieren das modul http, das uns methoden für http requests und server applikationen zur verfügung stellt:
const http = require('http');

// Wir erstellen eine variable namens server, die http methode http.createServer(); erschafft ein objekt, das die basis für unsere server applikation bildet.

// in .createServer(); können wir requests und responses als callback übergeben, die gängigen abkürzungen dafür in der production sind "req" (request) und "res" (response).
const server = http.createServer((req, res) =>
{
    // Den inhalt des server objektes schreiben wir am besten, nachdem wir server.listen(); ausgeführt haben, damit wir sofort sehen können, was wir im objekt schreiben.

    // Mit einem switch können wir verschiedene pfade auf unserem server ausgeben, diese finden wir im request objekt unter .url;
    switch(req.url)
    {
        // als erstes wollen wir unsere home adresse ansprechen, also "/":
        case "/":
            // mit der response methode .write(); schreiben wir die antwort, die dann auch an den besucher übergeben wird.
            res.write("Hallo Welt!");

            // die antwort wird abgeschlossen, indem wir sie mit .end(); beenden, dies schließt den offenen datenstrom zwischen server und client.
            res.end();

            // typisch für einen switch ohne return, benötigen wir auch hier einen break;
            break;

            // jetzt können wir in postman oder im browser ausprobieren ob wir die anwort bekommen, wir öffnen "http://localhost:3000/" und sollten "Hallo Welt!" sehen.

        // Wir können auch andere daten, als nur text übergeben zum beispiel JSON.
        case "/json":
            // Wir erstellen eine variabe, in der wir etwas stringified json übergeben:
            const jsonTest = JSON.stringify({ hallo: "Welt!" });

            // damit wir json ausgeben können, sollten wir den content-type der übergabe im header auf json ändern:
            res.setHeader('Content-type', 'application/json');

            // innerhalb von res.end(); oder res.write(); können wir jetztz das objekt übergeben.
            res.end(jsonTest);

            break;
    }
});

// Damit der server startet, müssen wir dem server sagen, er soll auf einem port erreichbar sein, und "zuhören", sozugen auf anfragen warten.
// Das kennen wir schon von unserem vscode live server und wenn wir eine reactg app laufen lassen. Der standardport hierfür, bei MERN STACK anwendungen ist 3000.

// Wir nutzen die http methode .listen(); um den port und optional auch den host anzugeben, falls wir etwas anderes als localhost, also die standard adresse, brauchen, und übergeben im callback ein konsolenstatement, damit wir sehen, das der server läuft.
server.listen(3000, () =>
{
    console.log("Der server läuft auf port 3000");
});
