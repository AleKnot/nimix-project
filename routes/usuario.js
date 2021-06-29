var express = require('express');
var router = express.Router();
var usuarioController = require('../controller/usuarioController')

/* GET login page. */
router.get('/cadastro', usuarioController.cadastro);


module.exports = router;
