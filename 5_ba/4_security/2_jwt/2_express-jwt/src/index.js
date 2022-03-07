require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// wir importieren jwt:
const jwt = require('jsonwebtoken');

const User = require('./models/User.js');

const app = express();
const port = process.env.PORT;
const databaseUrl = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const db = mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine rotue um einen user zu erstellen, wir lassen die validation hier mal aus, damit wir uns nicht darauf konzentrieren müssen:
app.post('/user/create', (req, res) =>
{
    // wir holen uns username und password aus dem body
    const { username, password } = req.body;

    const newUser = new User();
    newUser.username = username;
    newUser.password = newUser.hashPassword(password);

    newUser.save()
    .then(user =>
    {
        res.status(200).json({
            success: true,
            message: `New user '${ user.username } created!`
        });
    });
});

// wir erstellen eine funktion um den token zuu erstellen:
const signAccessToken = data =>
{
    return jwt.sign(data, process.env.SECRET_TOKEN, { expiresIn: '1800s' });
}

// wir schreiben eine post methode mit der wir den user authentifizieren:
app.post('/user/auth', (req, res) =>
{
    // wir holen uns username und password aus dem body
    const { username, password } = req.body;

    // wir machen unsere user und passwortkontrolle und bei erfolgreichem login, übergeben wir dem user einen token:
    User.findOne({ username }).then(foundUser =>
    {
        if(foundUser)
        {
            if(foundUser.comparePassword(password))
            {
                res.status(200).json({
                    success: true,
                    // wir übergeben dem user den token, speichern ihn aber nirgendswo ab, er wird nur ein einziges mal gezeigt und sollte sicher abgelegt werden:
                    token: signAccessToken({ username })
                });
            }
            else
            {
                res.status(401).json({
                    success: false
                });
            }
        }
        else
        {
            res.status(404).json({ success: false, message: 'USER NOT FOUND' })
        }
    });
});

// wir sind jetzt sozusagen eingeloggt, denn wir können bei jedem request diesen token mitsenden, bis er abläuft:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyaWNrcmVpY2hAZ21haWwuY29tIiwiaWF0IjoxNjQ2NjQ3MzY1LCJleHAiOjE2NDY2NDkxNjV9.EztqS6mqdgK_xbDp8LFgVldNBuJTTHasdYnkMGpZyVs

// wir schreiben eine middleware, um die token verifikation als middleware zwischen unsere gewünschten requests zu schieben:
const verifyToken = (req, res, next) =>
{
    // wir nutzen diesmal try/catch, um entweder eine fehlernachricht auszugeben, oder die angefragren daten:
    try
    {
        // wir holen uns den token aus dem authorizaion header, da wir dort das wort Bearer davor haben, das identifiziert welche art authentication benutzt wurde, löschen wir dies aus dem string und holen uns nur den token:
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        // wir verifizieren den token mit hilfe des secrets:
        const decodedData = jwt.verify(token, process.env.SECRET_TOKEN);

        // wir lassen uns die daten ausgeben:
        console.log(authHeader);
        console.log(decodedData);

        // da wir diese funktion als middleware nutzen wollen, nutzen wir am ende next();
        next();
    }
    catch (err)
    {
        res.status(401).json({ message: 'USER NOT AUTHORIZED!' });
    }
}

// wir schrieben eine GET route, in der wir unsere middleware hineinschieben:
app.get('/user/protected', verifyToken, (req, res) =>
{
    // um die route nutzen zu können, müssen wir als authentication method die bearer methode im header nutzen, dies erreichen wir in postman oder thunder client, indem wir auf Auth klicken, dort Bearer auswählen und unseren token hier einfügen.

    // wenn wir jetzt den request absenden, bekommen wir unsere daten

    // wir können von hier aus unsere route ganz normal verwenden:
    res.status(200).json({
        success: true,
        hallo: "Welt"
    });
});

// ungesicherte route
app.get('/user/unprotected', (req, res) =>
{
    res.status(200).json({
        success: true,
        message: 'ich bin nicht sicher'
    })
})

app.listen(port, () =>
{
    console.log('Server läuft auf port ' + port);
});
