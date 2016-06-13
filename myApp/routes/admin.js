var express = require('express');
var Account_Center=require("../server.api/account_api");
var send_code_api=require("../server.api/send_code_api");
var router = express.Router();
var session=require("express-session");
var global_session=require("../config/global_session");

//var mongoose=require('mongoose');
//var crypto=require('crypto');
//var Account=mongoose.model('Account');
//var gf=require("../global_function");
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
  req.session.cookie.path="/users";
  console.log(req.session,200);
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
router.post('/account_add_api',function(req,res,next){
  console.log(req.session);
  var account_api=new Account_Center();
  account_api.adminRegister(req, res,next);
});
router.post('/send_code_api',function(req,res,next){
  console.log(req.body);
});
router.post('/isset_phone',function(req,res,next){
  var account_api=new Account_Center();
  account_api.isSetPhone(req, res,next);
});
router.post('/isset_admin',function(req,res,next){
  var account_api=new Account_Center();
  account_api.adminIsSet(req, res,next);
});
router.post('/admin_login', function(req, res,next){
  req.session.cookie.path="/admin_login";
  var account_api=new Account_Center();
  account_api.handleLogin(req, res,next);
});

router.get('/radical', function(req, res){
  if (req.session.lastPage) {
    console.log('Last page was: ' + req.session.lastPage + ".");
  }
  req.session.lastPage = '/radical';
  res.send('What a radical visit! And the session expired time is: ' + req.session.cookie.maxAge);
});

module.exports = router;
