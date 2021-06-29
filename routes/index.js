<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')
=======
var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController')
var usuarioController = require('../controller/usuarioController')
>>>>>>> d90d643e0e0659905d3cdad87a4bccbd2665bbac

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', loginController.login);

/* GET login page. */
router.get('/cadastro', usuarioController.cadastro);

module.exports = router;
