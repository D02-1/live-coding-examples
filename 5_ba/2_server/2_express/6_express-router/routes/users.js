// wir importieren express:
const express = require('express');

// wir erstellen eine instanz von express.Router():
const router = express.Router();

// innerhalb dem routers können wir alles was wir auch mit app machen können, spezifisch für unsere route machen, wir nutzen hierfür "router" anstelle von "app":
router.use((req, res, next) =>
{
    console.log(req.method + " - " + req.url);

    next();
});

// wir könenn routen definieren, für ein einfacheres verständnis, das wir sehen können es gehen ganz verschiedene routen, halte ich mich hier NICHT an das crud prinzip.
router.get("/", (req, res) =>
{
    res.status(200).send("Users Home");
});

router.get("/profile/:id", (req, res) =>
{
    // wir können auch parameter übergeben
    res.send("user profile:" + req.params.id);
});

module.exports = router;
