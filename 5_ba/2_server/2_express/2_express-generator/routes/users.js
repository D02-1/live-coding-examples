var express = require('express');
var router = express.Router();

const { home, create, update, test } = require('./../controllers/users.js');
/* GET users listing. */

router.get('/', home);          // /users
router.get('/create', create);  // /users/create
router.put('/update', update);  // /users/update
router.get('/test', test);      // /users/test

module.exports = router;
