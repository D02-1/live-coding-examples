const path = require('path');

exports.home = (req, res, next) =>
{
    res.send("users home url");
}

exports.create = (req, res, next) =>
{
    res.send("create user url");
}

exports.update = (req, res, next) =>
{
    res.send("update url");
}

exports.test = (req, res, next ) =>
{
    res.status(200).send("hallo");
}