var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController');


router.use(isLoggedIn);

router.get('/',  usersController.getUsers);

router.get('/test',  usersController.getTest)

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.status('/');
}

module.exports = router;













