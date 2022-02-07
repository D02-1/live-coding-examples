require("dotenv").config();

const http = require("http");
const fs = require("fs");
const moment = require("moment");

const port = process.env.PORT;

let counter = 0;

const server = http.createServer((req, res) =>
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    switch (req.url)
    {
        case "/now":
            res.write(moment().format('MMMM Do YYYY, h:mm:ss'));
            res.end();
            break;
        case "/count":
            counter++;

            res.write(`Der aktuelle count ist: ${ counter }`);
            res.end();
            break;
        case "/more":
            fs.readFile("./more.txt", "utf-8", (err, content) =>
            {
                if(err)
                {
                    res.writeHead(404);
                    res.write("ERROR: Datei nicht gefunden!");
                }
                else
                {
                    res.writeHead(200);
                    res.write(content);
                }

                res.end();
            });

            break;
        default:
            res.writeHead(404);
            res.write("ERROR 404 - Hier ist nix!");
            res.end();
            break;
    }
});

server.listen(port, () =>
{
    console.log(`Der server hört zu auf ${ port }!`);
});
