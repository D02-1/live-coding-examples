const express = require('express');
const mongoose = require('mongoose');
const Chance = require('chance');
const bodyParser = require('body-parser');

const User = require('./models/User.js');

const app = express();

const databaseURL = "mongodb://localhost:27017/express-query-example";
const port = 3000;
const chance = new Chance();

mongoose.connect(databaseURL, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', async (req, res) =>
{
    const query = req.query;
    let users = [];

    if(query.age)
    {
        users = await User.where("age").equals(query.age);
    }
    else if(query.country)
    {
        users = await User.where("country").equals(query.country)
    }
    else if(query.country && query.age)
    {
        users = await User.where("country").equals(query.country).where("age").equals(query.age);
    }

    res.status(200).json({
        success: true,
        data: users
    })
});

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
})
