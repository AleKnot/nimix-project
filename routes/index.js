const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', loginController.login);


module.exports = router;
