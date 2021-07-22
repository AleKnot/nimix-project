var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource - Usuários');
});

/* GET cadastrar usuario listing. */
router.get('/cadastrar', function(req, res, next) {
  // res.send('respond with a resource - Usuários');
  res.render('usuarios-views\\cadastrar-usuario')
});


module.exports = router;
