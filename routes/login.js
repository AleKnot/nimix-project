const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')

/* GET login page. */
router.get('/login', loginController.login);


module.exports = router;
