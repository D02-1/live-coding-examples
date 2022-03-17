const { Schema, model } = require('mongoose'); 

const schema = new Schema({
    brand: String,
    name: String, 
    type: String,
    year: Number,
    created: { type: Date, default: new Date() }
});

const carModel = new model('Car', schema, 'cars');

module.exports = carModel;
