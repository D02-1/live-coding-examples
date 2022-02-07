const path = require('path');

exports.home = (req, res, next) =>
{
    res.send("home url");
}


exports.create = (req, res, next) =>
{
    res.send("create url");
}

exports.update = (req, res, next) =>
{
    res.send("update url");
}
