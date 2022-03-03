// wir importieren Router aus express und sprechen es direkt an, so sparen wir uns einige zeilen code, und nutzen nur das, was wir benötigen:
const router = require('express').Router();

// wir importieren unsere controller:
const controller = require('./../controllers/index.js');

// wir importieren unsere validatoren:
const userValidations = require('../validations/users.js');

// wir erstellen unsere routen, was wir haben wollen ist eine route um einen user anzulegen und eine um den user einzuloggen, dies wären beides post methoden, wir fügen erst eine test response ein, um sie zu testen:
// router.route('/signup').post((req, res) => res.json({ message: 'signup' }));
// router.route('/login').post((req, res) => res.json({ message: 'login' }));

// nachdem wir unsere controller und valiatoren geschrieben haben, können wir sie jetzt in unsere routen einfügen, dafür kommentieren wir die vorherigen routen einfach aus, und schreiben sie neu:
router.route('/signup').post(
    // wir schreiben unsere middleware in unsere signup route:
    userValidations.password,
    userValidations.passwordConfirmation,
    userValidations.allreadyExits,
    userValidations.username,
    controller.users.signup
);
router.route('/login').post(
    userValidations.username,
    controller.users.login
);

module.exports = router;
