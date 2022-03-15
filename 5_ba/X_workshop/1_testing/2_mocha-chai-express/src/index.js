const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine GET route zum testen:
app.get("/", (req, res) =>
{
    res.status(200).send("Hello World!");
});

// wir schreiben eine POST route, zum testen:
app.post('/user/:id', (req, res) =>
{
    res.status(200).json({ id: req.params.id });
});

// wir schreiben noch eine POST route:
app.post('/create', (req, res) =>
{
    const { username } = req.body;

    res.status(200).json({
        success: true,
        username
    });
});

// wir schreiben den listener:
app.listen(port, () =>
{
    console.log('Server läuft auf port ' + port);
});

// am ende, um auf die express app zuzugreifen, exportieren wir sie:
module.exports = app;
