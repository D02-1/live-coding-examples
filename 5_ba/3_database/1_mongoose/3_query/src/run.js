require('dotenv').config();

const Chance = require('chance');
const mongoose = require('mongoose');

const User = require('./models/User.js');

const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const chance = new Chance();

mongoose.connect(databaseURL);

// ich erstelle eine funktion, mit der ich user generieren kann
const createUser = () =>
{
    return {
        role: Math.random() < 0.3 ? "admin" : "member", // wir lassen den zufall entscheiden, ob das mitglied admin oder member ist.
        username: chance.first(),
        age: chance.integer({ min: 16, max: 65 }),
        email: chance.email({ domain: 'example.com' }),
        password: chance.hash(),
        country: chance.country({ full: true })
    }
}

// ich erstelle eine asynchrone funktion, die datenbank befehle ausführt, um die user zu speichern
const populate = async () =>
{
    await User.insertMany(
        [
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser()
        ]
    )
    .then(() => console.log('Neue User wurden hinzugefügt'))
    .catch(err => { throw err; });

    // wir wollen, wenn das script seine aufgabe erfüllt hat, die verbundung zur datenbank schließen, da wir keine offenen verbindungen haben wollen.
    await mongoose.connection.close();
}

// ich führe die asynchrone funktion aus
populate();
