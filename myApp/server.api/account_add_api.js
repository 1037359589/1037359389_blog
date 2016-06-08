/**
 * Created by bll on 16/6/8.
 */
var Router=require('express').Router();
var mongoose=require('mongoose');
var crypto=require('crypto');

var Account=mongoose.model('Account');
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
        login_times:0,
        recent_login_time:1442728394,
        register_time:1442729876
    };
    res.json(data);
    //var account=new Account();
    //account.save(function(err,next){
    //    if(err){
    //        console.log("Error");
    //        return next();
    //    }
    //    Account.find({},function(err,doc){
    //        if(err){
    //            console.log('Error');
    //            return next();
    //        }
    //        res.json(doc);
    //    });
    //    //Account.where({ uid: 1 }).update({$set:{ username: '泡泡oO水流DIY' }},function(){
    //    //    console.log('已经更新');
    //    //});
    //
    //});
});
module.exports = Router;