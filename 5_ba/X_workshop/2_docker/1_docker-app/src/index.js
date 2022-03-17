require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) =>
{
    res.send("Hallo Express und Docker!");
});

app.listen(port, () =>
{
    console.log('Server läuft auf port:', port);
});
