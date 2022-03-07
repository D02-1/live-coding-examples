require('dotenv').config();
const crypto = require('crypto');
const { Schema, model } = require('mongoose');

// wir holen uns das secret aus der .env:
const secret = process.env.SECRET_TOKEN;

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

userSchema.methods.hashPassword = (password) =>
{
    return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

userSchema.methods.comparePassword = function (loginPassword)
{
    if(this.password !== this.hashPassword(loginPassword))
    {
        return false;
    }

    return true;
}

const userModel = new model('User', userSchema, 'users');

module.exports = userModel;
