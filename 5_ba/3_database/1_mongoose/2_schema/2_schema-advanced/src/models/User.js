const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstname: { type: String, trim: true },
    lastname: String,
    username: { type: String, unique: true },
    role: { type: String, default: "Member" },
    birthday:
    {
        day: Number,
        month: Number,
        year: { type: Number }
    }
},
{
    timestamps: true 
})
.post('save', (doc) =>
{
    console.log(doc);
});

const userModel = new model('User', schema, 'users');

module.exports = userModel;
