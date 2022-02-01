// wir importieren dotenv:
require("dotenv").config();

// wir importieren http:
const http = require("http");

// wir importieren außerdem, damit wir mal eine datei ausgeben können das modul "fs" (File-System):
const fs = require("fs");

// wir legen eine variable namens port an, und übergeben wir den wert aus der process.env.PORT:
const port = process.env.PORT; // jetzt können wir überall in der appllikation auf diesen wert zugreifen.

// wir holen uns außerdem noch unsere input argumente:
const [ node, script, ...args ] = process.argv;

const server = http.createServer((req, res) =>
{
    switch (req.url)
    {
        // als test für unseren terminal inut können wir den text ja mal auf home ausgeben:
        case "/":
            res.write(args[0] || "Keine argumente vorhanden");
            res.end();
            break;
        case "/test":
            // Wir erstellen eine datei namens testfile.txt, dessen text wir ausgeben wollen, und nutzen fs (File-System) um den inhalt der datei auszugeben.

            // fs.readFile wird genutzt um dateien zu lesen, wir lesen die testDatei aus und können im callback dann die inhalte auf der seite "/test" ausgeben:
            fs.readFile("./testfile.txt", "utf-8", (err, content) =>
            {
                // Falls die datei nicht gefunden wurde, zeigen wir einen fehler an:
                if(err)
                {
                    res.writeHead(404);
                    res.write("ERROR: Datei nicht gefunden!");
                }
                else
                {
                    res.write(content);
                }

                res.end();
            });
            break;
    }
});

// jetzt legen wir unsere .listen(); methode an, in der wir port nutzen, und somit den port der applikation dynamisch anbieten.
server.listen(port, () =>
{
    console.log(`Der server ist auf port ${ port } erreichbar!`);
});
