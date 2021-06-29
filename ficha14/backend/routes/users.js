var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController')

/* GET users listing. */
router.get('/', function(res, req){
    res.json(personController.getPersons)
});

module.exports = router;
