//export var firstName = 'Michael';
 var globalObj={
        user:"",
        getNowTime:function(){
            return Date.parse(new Date());
        },
         setSession:function(req,res,doc){
             this.user=doc==undefined||""?this.user:doc;
             if((req.session.user==""||req.session.user==undefined)&&req.path!="/admin_login"&&req.path!="/login"){
                 res.redirect("/admin2016pp/login");
                 return;
             }
             req.session.user = doc||this.user;
             var hour = 360000;
             req.session.cookie.expires = new Date(Date.now() + hour);
             req.session.cookie.maxAge = hour;
         }
 };
module.exports=globalObj;




