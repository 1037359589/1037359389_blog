var express = require('express');
var router = express.Router();
var path=__dirname;
console.log(path);
const BUILD="http://localhost:3000/admin2016pp/build/";

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

router.get("/user_admin",function(req,res,next){
  res.render('Admin/user_admin', { title: '屌丝管你台',build:BUILD});
});
router.get("/tech",function(req,res,next){
  res.render('Admin/tech', { title: '屌丝管你台',build:BUILD});
});


module.exports = router;
