require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/User.js');

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DB_URL + "/" + process.env.DB_NAME;
const db = mongoose.connect(databaseURL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/users', (req, res) =>
{
    const newUser = new User();

    newUser.firstname = "     Max               ";
    newUser.lastname = "             Mustermann";
    newUser.username = "TestUser10";
    newUser.role = "Admin";
    newUser.birthday = { day: 27, month: 8, year: 1984 }; 
    newUser.test = "abc";

    newUser.save((err, user) =>
    {
        if(err) throw err;

        res.json(user);
    });
});

app.listen(port, () =>
{
    console.log("Server läuft auf " + port);
});
