const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    darkmode: Boolean,
    phone: String
}, {
    timestamps: true,
    _id: false // mit _id: false geben wir an, das dieses subdokument keine eigene ID bekommt.
});

const userProfileModel = new model('UserProfile', profileSchema, 'userProfiles');

module.exports = { profileSchema, userProfileModel }
