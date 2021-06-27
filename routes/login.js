var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController')

/* GET login page. */
router.get('/login', loginController.login);


module.exports = router;
