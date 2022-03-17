require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Car = require('./models/Car');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const databaseUrl = process.env.DB_URL;
const port = process.env.PORT;

const db = mongoose.connect(databaseUrl,
{
    auth:
    {
        username: "admin",
        password: "test1234"
    },
    authSource: "admin"
});

app.post('/cars/', (req, res) =>
{
    console.log(req.body);

    const { brand, name, type, year } = req.body;

    const newCar = new Car({
        brand,
        name,
        type,
        year
    });

    console.log(newCar);
    
    newCar.save((err, car) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        return res.status(200).json({
            success: true,
            data: car
        });

    });
});

app.get('/cars/', (req, res) =>
{
    Car.find({}, (err, cars) =>
    {
        if (err)
        {
            return  res.status(400).json({
                success: false,
                message: err.message
            });
        }

        console.log("Hallooooo docker-compose :D");
            
        return res.status(200).json({
            success: true,
            message: "Ich bin in docker-compose gestartet",
            data: cars
        })
    });
});

app.listen(port, () =>
{
    console.log('Server läuft auf port:', port);
});
