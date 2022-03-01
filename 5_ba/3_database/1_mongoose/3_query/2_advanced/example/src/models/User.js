const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    country: String
});

const userModel = new model('User', schema, 'users');

module.exports = userModel;
