var express = require('express');
var router = express.Router();
var path=__dirname;
console.log(path);
const BUILD="http://localhost:3000/admin/build/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admin/index', { title: 'Express'});
});
router.get('/login',function(req,res,next){
  res.render('Admin/login', { title: 'asdasdas',build:BUILD});
});

router.get("/header",function(req,res,next){
  res.render('Admin/index', { title: 'Express'});
});


module.exports = router;
