const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    title: String,
    category: String,
    isRunning: { type: Boolean, default: false }
},
{
    timestamps: true
});

const userProjectModel = new model('UserProject', projectSchema);

module.exports = { projectSchema, userProjectModel };
