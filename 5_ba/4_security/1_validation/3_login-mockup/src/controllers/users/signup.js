// wir importieren express-validator:
const validator = require('express-validator');

// wir importieren das user schema:
const User = require('./../../models/User.js');

// wir erstellen einen controller für die route, mit der wir einen user anlegen:
module.exports = ((req, res) => 
{
    // wir hole uns username und password aus dem body
    const { username, password } = req.body;

    // wir holen uns die .validationResults()...
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

    // am ende geben wir unseren neuen benutzer aus:
    const newUser = new User();

    newUser.username = username;
    newUser.password = newUser.hashPassword(password);

    newUser.save()
    .then((user) => {
        res.status(200).json({
            success: true,
            user,
            message: `New user '${ user.username }' created!`
         });
    });
});
