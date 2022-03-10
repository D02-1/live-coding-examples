const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    data: Buffer,
    contentType: String
}, {
    timestamps: true
});

const imageModel = new model('Image', schema, 'images');

module.exports = imageModel;
