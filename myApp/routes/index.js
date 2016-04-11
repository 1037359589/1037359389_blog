var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Admin/index', { title: 'Express' });
});
router.get("/header",function(req,res,next){
  res.render('Admin/inc/header_tpl', { title: 'Express' });
});

module.exports = router;
