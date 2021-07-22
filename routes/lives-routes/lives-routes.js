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


module.exports = router;
