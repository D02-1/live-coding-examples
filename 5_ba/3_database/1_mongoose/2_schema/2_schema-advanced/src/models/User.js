require('dotenv').config();

// wir importieren crypto:
const crypto = require('crypto');

const { Schema, model } = require('mongoose');

// wir importieren unser neues schema:
const { profileSchema } = require('./UserProfile.js');
const { projectSchema } = require('./UserProject.js');

const schema = new Schema({
    firstname: { type: String, trim: true },
    lastname: String,
    username: { type: String, unique: true },
    role: { type: String, default: "Member" },
    birthday:
    {
        day: Number,
        month: Number,
        year: { type: Number }
    },

    // wir haben uns vor einiger zeit nebenbei über enums unterhalten, wir können auch in mongoose solche enumeratoren nutzen, um zu definieren WELCHE werte erlaubt sind, innerhalb eines schlüssels:
    country:
    {
        type: String,
        default: 'england', // als default wert geben wir einen wert ein, der im enumerator vorhanden ist.
        enum: [ 'deutschland', 'england', 'frankreich' ]
    },

    // mongoose kann innerhalb von einem schema auh definieren wie subdokumente, also modelle die zu einem spezifischen modell hinzugehören arbeiten.
    // um dies zu testen erstellen wir 2 weitere modell:
    // um einzelne dokumente zu testen (1 zu 1) erstellen wir ein UserProfile schema
    profile: profileSchema,
    // um mehrere dokumente als subdokumente einzufügen erstellen wir ein UserProjects schema (1 zu N)
    projects: [projectSchema],
    // wenn wir das subdokument als array angeben, können wir hier mehrere dokumente einfügen.

    // wie wir in compass sehen, sind diese dokumente jetzt teil unseres users, allerdings sehen wir, das zwar die kollektionen existieren, aber dort keine dokumente sind, wir haben die daten direkt innerhalb unseres users gespeichert und als einträge angelegt, nicht in eigenen dokumenten. Wie wir das machen, lernen wir ein anderes mal..

    password: { type: String, required: true } // wir stellen das passwort auf typstring und required: true
},
{
    timestamps: true 
})
.post('save', (doc) =>
{
    console.log(doc);
});

// wir können ganze methoden innerhalb von schemen angeben, die direkt für unsere jeweiligen einträge funktionieren, dies macht zum beispiel sinn, wenn wir passwörter hashen und direkt in unseren schemen anlegen wollen, dies wäre dadurch auch sehr sortiert und ordentlich, da diese methode in unserem falle zum user gehört.
schema.methods.hashPassword = (password) =>
{
    // wir erstellen einen secret key in der .env datei und holen ihn her
    const secret = process.env.SECRET_KEY;

    // wir nutzen crypto, mit unserem secret key und dem übergebenen passwort:
    const hash = crypto.createHmac('sha256', secret).update(password).digest('hex');

    // wir returnen das gehashte passwort:
    return hash;
}
// jetzt können wir diese methode in unserer index datei aufrufen, und sehen das gehashte passwort in compass.

// wir können auch statische methoden erstellen. die wir über das modell aufrufen können, zum beispiel wenn wir eine eigene suchfunktion erstellen wollen:
schema.statics.test = (callback) =>
{
    callback("test");
}

const userModel = new model('User', schema, 'users');

module.exports = userModel;
