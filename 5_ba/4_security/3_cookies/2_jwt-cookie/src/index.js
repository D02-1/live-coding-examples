const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// wir importieren den cookie-parser
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// wir erstellen ein secret:
const secret = "abcdefg";

// wir sagen express das er den cookie-parser nutzen soll:
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine simple login route als POST methode und holen uns den user aus dem body:
app.post("/user/login", (req, res) =>
{
    const { username } = req.body;

    // wir signieren einen token:
    const token = jwt.sign({ username, role: "admin" }, secret);

    // wir schreiben unsere response:
    return res
    // wir geben mit der methode .cookie(); einen cookie weiter, gefolgt von unseren standardangaben:
    .cookie('access_token', token,
    {
        httpOnly: true,
        maxAge: 24 * 60 * 60
    })
    .status(200)
    .json({
        sucess: true,
        message: `User '${ username }' eingeloggt!`
    });

    // wenn wir die route jetzt besuchen, sehen wir den cookie auf unserer response, im header sehen wir auch das ein schlüssel namens Set-Cookie angegeben wurde, in dem wir den cookie sehen können.
});

// jetzt wo wir die authentication, also die identifikationsprüfung erledigt haben, schreiben wir eine middleware für die authorization, also die genemigung:
const authorize = (req, res, next) =>
{
    // wir holen uns den token aus den cookies, anhand des namens. In konvention werden cookie namen mit unterstrichen zwischen den worten getrennt:
    const token = req.cookies.access_token;

    // wenn kein token cookie gefunden wurde, senden wir einen status 403: Forbidden, da wir dem nutzer verbieten die route zu besuchen:
    if(!token)
    {
        // mit .sendStatus(); aus der response geben wir ausschliesslich die statusmeldung zurück.
        return res.sendStatus(403);
    }

    // mit try/catch versuchen wir den token zu verifizieren und die daten zu holen, sollte dies nicht klappen senden wir wieder eine 403:
    try
    {
        // wir versuchen den token zu verifizieren:
        const data = jwt.verify(token, secret);

        // wir übergeben alle gewünschten informationen aus dem token an den request:
        req.username = data.username;
        req.role = data.role;

        // wir nutzen next(); um aus der middleware weiter zu kommen:
        next();
    }
    catch
    {
        return res.sendStatus(403);
    }
}

// wir schreiben eine GET route, in der wir den cookie testen können, diese route ist also nur verfügbar, wenn wir den token verifiziert bekommen:
app.get('/user/dashboard', authorize, (req, res) =>
{
    // da wir den username an den request übergeben haben, können wir jetzt auch auf diesen zugreifen:
    const { username, role } = req;

    if(role === "admin")
    {
        // user darf dinge löschen...
    }

    // wir können jetzt mit den werten aus dem request arbeiten, die tatsächlich NICHT aus dem body, sondern aus der tokeninformation kommen:
    res.status(200).json({
        sucess: true,
        username,
        role,
        message: "käsekuchenrezept 1"
    });
});

// wir erstellen eine route mit der wir uns ausloggen, also den cookie löschen, wir übergeben auch hier die authorization middleware:
app.post('/user/logout', authorize, (req, res) =>
{
    return res
    // wir nutzen die methode .c0learCookie();
    .clearCookie("access_token")
    .status(200)
    .json({
        sucess: true,
        message: 'erfolgreich ausgeloggt'
    })
});

app.listen(port, () => {
    console.log(`App läuft auf port ` + port)
});
