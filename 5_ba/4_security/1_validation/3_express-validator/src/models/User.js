const crypto = require('crypto');

const { Schema, model } = require('mongoose');

// wir erstellen ein schema für den User, und wollen username und passwort haben:
const schema = new Schema({
    username: String,
    password: String
}, { timestamps: true });

schema.methods.encryptPassword = (password) =>
{
    const secret = "unsergeheimnis";

    const encryptPW = crypto.createHmac('sha256', secret)
    .update(password)
    .digest('hex');

    return encryptPW;
}

const userModel = new model('User', schema, 'users');

module.exports = userModel;
