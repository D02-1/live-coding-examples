const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// wir importieren express-validator, mehr informationen zu express validator finden wir hier: https://express-validator.github.io/docs/
const validator = require('express-validator');

const User = require('./models/User.js');

// wir importieren unsere validationsmiddleware:
const validatePasswordConfirmation = require('./validation/validationPasswordConfirmation.js');

const app = express();
const port = 3000;
const databaseUrl = 'mongodb://localhost/validator-example';
const db = mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine POST route, zum anlegen von neuen benutzern::
app.post('/user/test', (req, res) =>
{
    //wir holen uns die daten aus dem body, wenn wir unsere route testen, sollten wir den username und das passwort zurückbekommen:
    const { username, password } = req.body;

    // wir gebebn username und password diesmal als test tatsächlich als string zurück, wenn wir speichern nutzen wir aber natürlich die encryption
    res.status(200).json({
        username,
        password
    });
});

// da wir sicher gehen wollen, das die daten korrekt sind, nutzen wir express-validator um die daten zu prüfen.

// express-validator hakt sich als middleware in express ein, deshalb können wir die methode .body(); direkt als middleware nutzen um auf unsere body daten zuzugreifen und rufen dann die jeweilige überprüfungsmethode von validator.js auf.
app.post('/user/validator',
    // wir wollen wissen ob unser username eine email ist und löschen überflüssigen whitespace:
    validator.body('username').isEmail().trim(),
    // wir wollen dass das passwort mindestens 8 zeichen und maximal 16 zeichen lang ist:
    validator.body('password').isLength({ min: 8, max: 16 }),
    (req, res) =>
    {
        const { username, password } = req.body;

        // jetzt können wir innerhalb unserer esxpress method bodies die fehler ausgeben lassen und mit ihnen arbeiten. dafür nutzen wir den return der methode .validationResult(); und übergeben denb request body:
        const errors = validator.validationResult(req).errors;
        
        // wenn wir uns das error objekt ausgeben lassen, sehen wir jetzt genau die fehler, die auftraten, und wo sie auftraten:
        console.log(errors);

        // wir können jetzt anhand dieser informationen dem user eine nachricht zurückgeben, oder den user speichern:

        // wenn errors inhalt hat:
        if(errors.length > 0)
        {
            // wir returnen das res, damit er nach dem aufruf aus der methode rausgeht:
            return res.status(400).json({ errors });
        }

        const newUser = new User();validator.body('passwordConfirmation').custom(passwordConfirmationMethod)
        newUser.save()
        .then((user) =>
        {
            res.status(200).json({ user });
        });
    }
);

// wir können fehlermeldungen spezifischer validierungen auch selbst angeben, indem wir die methode .withMessage(); innerhalb des validationschains benutzen:
app.post('/user/message',
    validator.body('username').isEmail().withMessage('Username muss eine email adresse sein!'),
    (req, res) =>
    {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        console.log(errors);

        if (errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        const newUser = new User();

        newUser.username = username;
        newUser.password = newUser.encryptPassword(password);

        newUser.save()
        .then((user) =>
        {
            res.status(200).json({ user });
        });
    }
);

// gerade für passwörter ist der validator sehr gut, da wir sehr viele optionen haben, um passwörter zu überprüfen:
app.post('/user/sicherespasswort',
    validator.body('username').isEmail().withMessage('username muss eine email adresse sein'),
    validator.body('password')
    // die länge wollen wir wieder überprüfen:
    .isLength({ min: 8, max: 16 })
    // wir geben eine nachricht zurück:
    .withMessage('Passwort zu kurz oder zu lang...')
    // wir können den method chain weiter führen, und sagen mit .not(); das wir etwas NICHT haben wollen:
    .not()
    // mit der methode .isIn(); geben wir jetzt ein array mit werten an, die wir nicht als passwort erlauben:
    .isIn([ 'password', 'pässwörd', '12345678', 'test1234', 'hallo123' ])
    // auch hier geben wir eine nachricht aus:
    .withMessage('Passwort ist nicht zulässig'),
    (req, res) =>
    {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        console.log(errors);

        if (errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        const newUser = new User();

        newUser.username = username;
        newUser.password = newUser.encryptPassword(password);

        newUser.save()
        .then((user) =>
        {
            res.status(200).json({ user });
        });
    }
);

// express-validator besitzt ein objekt namens "Schema", um mehrere validationsanfragen auf einemal einzurichten. DIES IST NICHT VERWAND MONGOOSE SCHEMA, es ist allerdings, wie mongoose schema eine vorlage für einträge. In diesem schema können wir werte angeben und überprüfen, dies ist gleichwertig wie mit method chaining, wir können also beides machen:
app.post('/user/schema',
    // mit .checkSchema(); erstellen wir ein neues schema:
    // als method chain wäre dies: 
    // validator.body('password').isLength({ min: 8 }).withMessage('Passwortlänge nicht zulässig!')
    validator.checkSchema({
        // wir wollen das passwort validieren, und geben hier das query feld an:
        password:
        {
            // mit isLength überprüfen wir die länge:
            isLength:
            {
                // die fehlermeldung die wir angeben wollen, schrieben wir in errorMessage:
                errorMessage: "Passwortlänge nicht zulässig!",
                // wir wollen optionen angeben, die wir überprüfen wollen, dies geben wir in einem array an:
                options:
                [
                    // das password soll mindestens 8 zeichen lang sein:
                    { min: 8 }
                ]
            }
        }
    }),
    (req, res) =>
    {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        console.log(errors);

        if (errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        const newUser = new User();

        newUser.username = username;
        newUser.password = newUser.encryptPassword(password);

        newUser.save()
        .then((user) =>
        {
            res.status(200).json({ user });
        });
    }
);

// express-validator ermöglicht es uns, eigene prüfungen zu schreiben, so können wir zum beispiel prüfen ob das eingegebene passwort bei einer registrierung dem "confirmation password", also der zweiten eingabe, zur sicherheit das richtige, gleiche passwort ist.

// wennwir größere validationsmiddleware schreibenm und sortiert und ordentlich vorgehen wollen, schreiben wir diese in eigene dateien, diese sind normalerweise im ordner "validation" hinterlegt. Wir erstellen also einen ordner namens "validation" und erstellen dort die datei "validationPasswordConfirmation.js", diese importieren wir dann, um sie in unserem code zu nutzen.
app.post('/user/confirmation',
    validator.body('username').isEmail(),
    validator.body('password').isLength({ min: 8, max: 16 }),
    validator.body('passwordConfirmation').custom(validatePasswordConfirmation),
    (req, res) =>
    {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        // wir fügen unserem body das feld passwordConfirmation hinzu, und schreiben ein anderes passwort, wir bekommen einen fehler:
        if (errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        // geben wir die daten richtig ein, erstellen wir den user:
        const newUser = new User();

        newUser.username = username;
        newUser.password = newUser.encryptPassword(password);

        newUser.save()
        .then((user) => {
            res.status(200).json({ user });
        });
    }
)

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }`);
});
