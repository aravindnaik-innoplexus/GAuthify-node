var http = require("http");
var util = require('util');
var request = require("request");

console.log('started will run GAuthify() now');

function GAuthifyError(Exception){
  this.__init__ = function __init__(msg,error_code){
    this.super(msg,error_code);
    this.msg = msg;
    this.error_code = error_code;
  }
}

function ApiKeyError(GAuthifyError){

}
util.inherits(ApiKeyError,GAuthifyError);

function ParameterError(GAuthifyError){

}
util.inherits(ParameterError,GAuthifyError);

function NotFoundError(GAuthifyError){

}
util.inherits(NotFoundError,GAuthifyError);

function ConflictError(GAuthifyError){

}
util.inherits(ConflictError,GAuthifyError);

function ServerError(GAuthifyError){

}
util.inherits(ServerError,GAuthifyError);

function RateLimitError(GAuthifyError){

}
util.inherits(RateLimitError,GAuthifyError);

var GAuthify = function(api_key){


    var headers = {
      'Authorization' : 'Basic ' + new Buffer(api_key).toString('base64')

    };
    var access_points = [
      'https://alpha.gauthify.com/v1/',
      'https://beta.gauthify.com/v1/'
    ];

  this.request_handler = function request_handler(type,url_addon,params,callback) {

    var url_addon;
    var json_resp;
    var status_code;
    var req;
    var base_url;
    var req_url;
    params = [];
    for(var i=0;i<access_points.length;i++){
      try{
        req_url = base_url +  url_addon;
        var request = {
          'method': type,
          'url': req_url,
          'data': params,
          'params': params,
          'headers': headers,
          'timeout': 3000
        }
        req = requests.request;
        status_code = req.status_code;
        json_resp = req.json;
        if(typeof(json_resp) == "function"){
          json_resp = json_resp();
        }
        if(( typeof(json_resp) == "dictionary") || ((status_code > 400)&&(status_code != 401)&&(status_code != 402)&&(status_code !=406)&&(status_code != 404) && (status_code != 409))){
          console.log("ConnectionError");
        }

      } catch(err){

      }

    }
    switch (status_code) {
      case 401:
        ApiKeyError(json_resp['error_message'],status_code,json_resp['error_code'],req);
        break;

      case 402:
        RateLimitError(json_resp['error_message'],status_code,json_resp['error_code'],req);
        break;

      case 406:
        ParameterError(json_resp['error_message'],status_code,json_resp['error_code'],req);
        break;

      case 404:
        NotFoundError(json_resp['error_message'],status_code,json_resp['error_code'],req);
        break;

      case 409:
        ConflictError(json_resp['error_message'],status_code,json_resp['error_code'],req);
        break;

    }
    console.log("update: This is request_handler()");
    return json_resp;

  };

  this.check_auth = function check_auth(unique_id,auth_code,safe_mode ,callback){

    console.log("update: This is check_auth()");
    try{
      url_addon = 'check/';
      params = {'auth_code':auth_code,'unique_id':unique_id}
      response = this.request_handler('post',url_addon,params,callback);
      return authenticated;
    } catch (err){
        if(safe_mode){
          callback(null,true);
        }
        else{
          throw err;
        }
    }

  };

  this.send_email = function send_email(unique_id,email,callback){
      email="korra.aravind@gmail.com";
      console.log("update: This is send_email()")
      url_addon = "email/".util.format(unique_id);
      params = {'unique_id':unique_id};
      if(email != ""){
        params['email'] = email;
      }
      return this.request_handler("post",url_addon,params,callback);

  };

  function success(){
    console.log("Success");
  }
 function quick_test(test_email,test_sms_number,test_voice_number){

    var account_name = 'testuser@gauthify.com';
    var result;

      console.log("4) Bad Auth Code... ");
      this.result = this.check_auth(account_name,'112345');
      if(typeof(result) === "boolean"){
        console.log("shutting down operation '4'");
        return;
        }
      console.log(result);

      console.log("5) Testing one time pass (OTP)....");
      result = check_auth(account_name,'otp');
      if(typeof(result) === 'boolean'){
        console.log("shutting down operation '5'");
        return;
      }
      console.log(result);
      if(result == false){
        console.log("server error, OTP not working contact support... ");
      }
      success();
      return 0;



  }
}

module.exports = GAuthify;
