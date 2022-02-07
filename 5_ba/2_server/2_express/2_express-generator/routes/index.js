var express = require('express');
var router = express.Router();
const path = require('path');

// wir schreiben unseren controller in eine eigene datei, die wir exportieren und dann hier aufrufen
const { home } = require('./../controllers/home.js');

/* GET home page. */
router.get('/', home);

module.exports = router;
