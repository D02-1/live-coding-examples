// hier haben wir unseren controller für die home route "/":

const path = require('path');

exports.home = (req, res, next) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}
