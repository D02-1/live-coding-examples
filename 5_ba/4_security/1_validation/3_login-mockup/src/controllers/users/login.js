// wir importieren express-validator:
const validator = require('express-validator');

// wir importieren das user schema:
const User = require('./../../models/User.js');

// wir erstellen einen controller für die route, mit der wir einen user einloggen:
module.exports = ((req, res) => 
{
    const { username, password } = req.body;

    // wir holen uns die .validationResults() ; ...
    const error = validator.validationResult(req).errors;

    // ... und prüfen ob es einen fehler gibt:
    if(error.length > 0 )
    {
        return res.status(400).json({
            success: false,

            // mit einem einfachen .map(); erstellen wir eine liste der ausgehenden fehlermeldungen:
            message: error.map(err => err.msg)
        });
    }

    // wir suchen den user anhand seiner email adresse und nutzen die comparePassword methode, um auszuwerten, das die passwort daten sich gleichen:
    User.findOne({ username }).then(foundUser =>
    {
        if(foundUser)
        {
            if(foundUser.comparePassword(password))
            {
                // wir speichern das neue logindatum ab:
                foundUser.lastLogin = new Date();

                // wir speichern den benutzer
                foundUser.save().then(user =>
                {
                    res.status(200).json({
                        // und geben die nachricht aus, das wir eingeloggt sind:
                        success: true,
                        message: `User '${ username }' logged in successfully`,
                        user
                    })
                })
            }
            else
            {
                res.status(401).json({
                    success: false,
                    message: [ 'Username or Password incorrect' ]
                })
            }
        }
        else
        {
            res.status(401).json({
                success: false,
                message: [ 'Username or Password incorrect' ]
            })
        }
    });
});
