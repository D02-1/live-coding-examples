const { Schema, model } = require('mongoose');

// schemas können eine menge an daten beinhalten, in compass können wir später diese daten auch prüfen.
const schema = new Schema({
    // wir wollen den vornamen unseres users als string angeben, hierfür müssen wir den typ string definieren:
    firstname: { type: String, trim: true },
    // wir können mit "trim" dafür sorgen, das vor und nach dem string leerzeichen automatisch gelöscht werden.

    // Für die typendeklaration gibt es einen shorthand befehl, wir geben einfach den typen direkt an
    lastname: String, // gleich wie: { type: String } 

    // wir wollen das es einen wert gibt, den jeder user nur einmal selbst besitzt, also ein "unique" wert, der nur einmal pro kollektion auftritt, der default von unique ist false.
    username: { type: String, unique: true }, // wenn wir die value von username auf "null" setzen, wird dies nicht funktionieren.

    // wir können auch default werte eintragen, diese werden dann automatisch gespeichert, wenn wir keine daten angeben:
    role: { type: String, default: "Member" },

    // wir können hier auch objekte mit daten verwenden
    birthday:
    {
        day: Number,
        month: Number,
        year: { type: Number }
    }
},
{
    // in einem weiteren objekt können wir optionen angeben:
    timestamps: true // wir können automatisch timestamps anlegen lassen, diese werden angelegt, wenn das dokument erstellt wird (createdAt) und wenn das dokument verändert wird (updatedAt)
})
// schmemas besitzen auch events, die wir nach dem ausführen, oder vor dem ausführen einer aktion abfeuern können, zum beispiel können wir etwas direkt nach dem speichern ausführen
.post('save', (doc) =>
{
    console.log(doc);
});

// wir erstellen ein modell, anhand der daten des schemas
                     // model name, schema, kollektion
const userModel = new model('User', schema, 'users');

// wir exportieren das modell
module.exports = userModel;
