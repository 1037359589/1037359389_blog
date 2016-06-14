var TopClient = require( '../config/topClient' ).TopClient;
var client = new TopClient({
    'appkey' : '23386800' ,
    'appsecret' : '81987f27d28bcd93bbddbad5274fec48' ,
    'REST_URL' : ' http://gw.api.taobao.com/router/rest '
});

function  send_code_api(){
    this.sendCode=function(req,res,next){
        client.execute( 'alibaba.aliqin.fc.sms.num.send' , {
            'extend' : '123456' ,
            'sms_type' : 'normal' ,
            'sms_free_sign_name' : '屌丝管你台' ,
            'sms_param' :'{\"name\":\"1234\"}',
            'rec_num' : '15002114175' ,
            'sms_template_code' : "SMS_10690348"
        }, function(error, response) {
            if (!error) console.log(response);
            else{
                console.log(response,828282);
                res.json({status: "1", data: response, msg: '查询成功'});
            }

        });
    };
}
module.exports=send_code_api;
