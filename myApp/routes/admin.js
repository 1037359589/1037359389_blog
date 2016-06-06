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

router.get("/users",function(req,res,next){
  res.render('Admin/users', { title: '屌丝管你台',build:BUILD});
});
router.get("/tech",function(req,res,next){
  res.render('Admin/tech', { title: '屌丝管你台',build:BUILD});
});
router.get("/person_center",function(req,res,next){
  res.render('Admin/person_center', { title: '屌丝管你台',build:BUILD});
});
router.get("/change_pass",function(req,res,next){
  res.render('Admin/change_pass', { title: '屌丝管你台',build:BUILD});
});


module.exports = router;
