// wir importieren express-validator:
const validator = require('express-validator');

// wir schreiben eine methode, die den benötigten wert und das request objekt übergeben bekommt, und dann anhand der eingegebenen daten überprüft ob sich die werte gleichen:
const passwordConfirmationMethod = (value, { req }) =>
{
    // wenn der übergeben wert und das passwort aus dem body nicht gleich sind, gib eine fehlermeldung aus:
    if(value !== req.body.password)
    {
        // wir erstellen einen fehler, dieser wird in .validationResult(); innerhalb der post methode erscheinen.
        throw new Error('Fehler: Passwort nicht gleich!');
    }

    // sollte die überprüfung geklappt haben, returnen wir true:
    return true;
}

// wir exportieren unseren code mit der validatorinformation, und nutzen die methode .custom():
module.exports = passwordConfirmationMethod;
