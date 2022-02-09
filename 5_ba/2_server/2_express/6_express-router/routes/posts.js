const express = require('express');

// wir nutzen hier express.Router();
const router = express.Router();

/*
    Unsere gewollten routen sind:
    POST        /posts
    GET         /posts
    GET         /posts/:id
    DELETE      /posts/:id
    PUT         /posts/:id
*/

// wir erstellen unsere routen innerhalb von /posts, auch hier können wir methode chaining benutzen:

router.route("/")
// diese route ist GET /posts - um alle posts anzuzeigen:
.get((req, res) =>
{
    res.status(200).send("ALLE POSTS");
})
// diese route ist POST /posts - um einen neuen post zu erstellen:
.post((req, res) =>
{
    res.status(200).send("Hier wird ein neuer post erstellt");
});

router.route("/:id")
// diese route ist GET /posts/:id - um einen spezifischen post anzuzeigen:
.get((req, res) =>
{
    const { id } = req.params;

    res.status(200).send("Der post mit der id " + id)
})
// diese route ist DELETE /posts/:id - um einen spezifischen post zu löschen:
.delete((req, res) =>
{
    const { id } = req.params;

    res.status(200).send("Der post mit der id " + id + " wird hier gelöscht")
})
.put((req, res) =>
{
    const { id } = req.params;

    res.status(200).send("Der post mit der id " + id + " wird hier bearbeitet");
});

// NICHT VERGESSEN ZU EXPORTIEREN:
module.exports = router;
