var express = require('express');
var router = express.Router();

const { home, create, update } = require('./../controllers/users.js');
/* GET users listing. */

router.get('/', home);          // /users
router.post('/create', create); // /users/create
router.put('/update', update);  // /users/update

module.exports = router;
