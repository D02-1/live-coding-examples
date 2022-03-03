// wir importieren express-validator:
const validator = require('express-validator');

// wir importieren das modell User
const User = require('./../models/User.js');

// wir schreiben ein paar validationsmethoden:
const passwordConfirmation = validator.body('passwordConfirmation')
.custom((value, { req }) =>
{
    if (value !== req.body.password)
    {
        throw new Error('Passwords do not match');
    }

    return true;
});

const allreadyExits = validator.body('username').custom((value) =>
{
    return User.findOne({ username: value }).then(user =>
    {
        if(user)
        {
            return Promise.reject('User already exists!');
        }
    });
})

const password = validator.body('password')
.isLength({ min: 8, max: 16 })
.withMessage('Password must be stronger');

const username = validator.body('username')
.isEmail()
.withMessage('Username must be an email adress!');

// wir exportieren unsere validatoren:
module.exports = 
{
    passwordConfirmation,
    allreadyExits,
    password,
    username
}
