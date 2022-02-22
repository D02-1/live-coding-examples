// wir importieren Schema und model von mongoose:
const { Schema, model } = require('mongoose');

// wir erstellen ein neues schema, da wir uns inenrhalb einer datei befinden, nennen wir dieses schema einfach schema:
const schema = new Schema({
    brand: String,
    name: String,
    type: String,
    year: Number
}, { timestamps: true }); // wir können mongoose automatisch timestamps anlegen lassen, diese werden angelegt wenn das dokument erstellt wird (createdAt), und wenn das dokument verändert wird (updatedAt).

// wir erstellen ein modell, anhand der daten des schemas:
const carModel = new model('Car', schema, 'cars');

// wir exportieren unser model:
module.exports = carModel;
