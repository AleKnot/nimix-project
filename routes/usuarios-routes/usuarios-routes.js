const express = require('express');
const router = express.Router();
// const usuariosController = require('./controller/usuarios-controller/usuarioController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource - Usuários');
});

/* GET cadastrar usuario listing. */
router.get('/cadastrar', function(req, res, next) {
  // res.send('respond with a resource - Usuários');
  res.render('usuarios-views\\cadastrar-usuario')
});

/* POST cadastrar usuario listing. */
router.post('/cadastrar', function(req, res, next) {
  
  // const { nome, email, senha} = req.body;

  // usuariosController.ca({
  //   nome,
  //   email,
  //   senha,
    
  // });
  
  console.log('Chegou no Routes - Usuários!!')
  res.redirect("/");


});

module.exports = router;
