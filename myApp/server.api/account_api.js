/**
 * Created by bll on 16/6/8.
 */
var Router=require('express').Router();
var mongoose=require('mongoose');
var crypto=require('crypto');
var Account=mongoose.model('Account');
var gf=require("../global_function");
var global_session=require("../config/global_session");
function Account_Center(){
    this.sqlObj="";
    /*
    * 对象实例化
    * */
    this.getInstance=function(data){
        var d=data||"";
        this.sqlObj=new Account(d);
    };
    /*
    * 管理员注册
    * */
    this.adminRegister=function(req,res,next){
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
        console.log(data);
        this.getInstance(data);
        this.sqlObj.save(function(err,next){
            if(err){
                res.json({status:"0",data:{},msg:err});
                return;
            }
            res.json({status:"1",data:data,msg:'成功'});
        });
    };
    /*
    * 管理员登陆
    * */
    this.adminLogin=function(req,res,next){

    };
    /*
     * 检测用户名是否存在
     * */
    this.adminIsSet=function(req,res,next){
        var request={
            username:req.body.username
        };
        this.checkPhoneOrAdmin(request,res);
    };
    /*
    * 检查手机号码是否已经存在
    * */
    this.isSetPhone=function(req,res,next){
        var request={
            phone:req.body.phone
        };
        this.checkPhoneOrAdmin(request,res);
    };
    this.checkPhoneOrAdmin=function(request,res){
        Account.find(request,function(err,doc){
            if(err){
                res.json({status:"0",data:{},msg:err});
                return next();
            }
            res.json({status: "1", data: doc, msg: '查询成功'});
        });
    };
    /*
    * 管理员登陆
    * */
    this.handleLogin=function(req,res,next){
        var hasher=crypto.createHash("md5");
        hasher.update(req.body.password);
        var password=hasher.digest('hex');
        var request={
            username:req.body.username,
            password:password
        };
        var __self=this;
        Account.find(request,function(err,doc){
            if(err){
                response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                res.write("ERROR:"+err);
                return;
            }
            Account.find(request,function(err,doc){
                if(err){
                    res.json({status:"0",data:{},msg:err});
                    return next();
                }
                __self.handleSessionStore(req,doc);
                //console.log(doc[0].uid);
                console.log(req.session,2);
                res.json({status: "1", data: doc, msg: '查询成功'});
            });
        });
    };
    this.handleSessionStore=function(req,doc){
        req.session.uid = doc[0].uid;
        req.session.username = doc[0].username;
        req.session.phone = doc[0].phone;
        req.session.status = doc[0].status;
        req.session.email = doc[0].email;
        var hour = 360000;
        req.session.cookie.expires = new Date(Date.now() + hour);
        req.session.cookie.maxAge = hour;
    };
}
module.exports=Account_Center;
