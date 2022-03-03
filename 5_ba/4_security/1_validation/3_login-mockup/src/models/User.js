// wir importieren dotenv, um auf das secret zugreifen zu können, crypto, mongoose Schema und modell
require('dotenv').config();
const crypto = require('crypto');
const { Schema, model } =require('mongoose');

// wir holen uns das secret aus der ENV:
const secret = process.env.SECRET;

const userSchema = new Schema({
    // wir wollen das jeder benutzer einen username hat, dieser sollte unique sein, und required.
    username: { type: String, unique: true, required: true },
    // wir wollen das jeder benutzer ein passwort angeben muss, also setzen wir es auf required
    password: { type: String, required: true },
    // wir wollen außerdem speichern, wann der user das letzte mal eingeloggt war, dies erreichen wir, indem wir jedes mal wenn wir uns einloggen den inhaltswert des schlüssel ändern, beim registrieren lassen wir das feld leer.
    lastLogin: { type: Date }
},
{
    timestamps:true,
    // mit der option toJson können wir ändern, wie das User dokument zurückgegeben wird, wenn wir es in der api als json ausgeben, und sind so in der lage das passwort direkt aus der ausgabe zu entfernen:
    toJSON: {
        transform: (doc, ret) =>
        {
            delete ret.password;
        }
    }
});

// wir schreiben unsere hashmethode:
userSchema.methods.hashPassword = (password) =>
{
    const hash = crypto.createHmac('sha256', secret).update(password).digest('hex');

    return hash;
};

// wir schreiben eine methode, bei der wir ein password aus den parametern übergeben, und mit dem in der datenbank vergleichen:
userSchema.methods.comparePassword = function (loginPassword)
{
    // mit this.password holen wir uns das gespeicherte passwort und vergleichen es mit dem übergebenen, das wir direkt hashen:
    if(this.password !== this.hashPassword(loginPassword))
    {
        // sollte der wert nicht gleich sein, returnen wir false:
        return false;
    }
    
    // sollten sie gleich sein, returnen wir true:
    return true;
};

const userModel= new model('User', userSchema, 'users');

module.exports = userModel;
