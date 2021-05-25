var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController');
/* GET users listing. */
router.get('/', personController.getPersons);

module.exports = router;