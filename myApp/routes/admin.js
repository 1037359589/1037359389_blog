var express = require('express');
var router = express.Router();
var path=__dirname;
console.log(path);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admin/index', { title: 'Express'});
});
router.get('/login',function(req,res,next){
  res.render('Admin/login', { title: 'asdasdas'});
});

router.get("/header",function(req,res,next){
  res.render('Admin/index', { title: 'Express'});
});


module.exports = router;
