const { Schema, model } = require('mongoose');

const schema = new Schema({
    role: String,
    username: String,
    age: Number,
    email: String,
    password: String,
    country: String
});

const userModel = new model('User', schema, 'users');

module.exports = userModel;
