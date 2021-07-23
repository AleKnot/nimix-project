var express = require('express');
var router = express.Router();

/* GET lives listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource - Lives');

});

/* GET cadastrar lives listing. */
router.get('/cadastrar', function(req, res, next) {
    //   res.send('respond with a resource - Lives');
    res.render("lives-views\\cadastrar-lives")
    });


    /* GET agenda de lives listing. */
router.get('/agenda', function(req, res, next) {
  //   res.send('respond with a resource - Lives');

  res.render("lives-views\\agenda-lives", { title: 'Agenda de Lives ihuu' })
  });


module.exports = router;
