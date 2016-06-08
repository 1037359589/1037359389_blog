/**
 * Created by bll on 16/6/8.
 */
var Router=require('express').Router();
var mongoose=require('mongoose');
var crypto=require('crypto');
var Account=mongoose.model('Account');
var gf=require("../global_function");
Router.post('/account_add_api',function(req,res,err){
    console.log(req.body);
    var hasher=crypto.createHash("md5");
    hasher.update(req.body.passwd);
    var password=hasher.digest('hex');
    var data={
        username:req.body.name,
        password:password,
        phone:"15002114175",
        type:0,
        status:"in_review",
        register_time:gf.getNowTime()
    };
    var account=new Account(data);
    account.save(function(err,next){
        if(err){
            res.json({status:"0",data:{},msg:err});
            return;
        }
        res.json({status:"1",data:data,msg:'成功'});
    });
});
module.exports = Router;