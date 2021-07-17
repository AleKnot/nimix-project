var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController')
var usuarioController = require('../controller/usuarioController')
var liveController = require('../controller/liveController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', loginController.login);

/* GET login page. */
router.get('/cadastro', usuarioController.cadastro);

router.get('/live', liveController.live);

module.exports = router;
