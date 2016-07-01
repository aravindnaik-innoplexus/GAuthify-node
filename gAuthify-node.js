var http = require("http");
var url = require("url");
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

console.log('yo');

function GAuthifyError(Exception){
  function __init__(msg,http_status,error_code,response_body){

  }
}

function ApiKeyError(GAuthifyError){

}

function ParameterError(GAuthifyError){

}

function NotFoundError(GAuthifyError){

}

function ConflictError(GAuthifyError){

}

function ServerError(GAuthifyError){

}

function RateLimitError(GAuthifyError){

}

function GAuthify(object){

  var access_points;
  var api_key;
  var headers;
  var auth = 'Basic ' + new Buffer('1458b44389834ea9a75c45c2d119d2fe').toString('base64');
  console.log('yo');
  check_auth();

  function init(api_key){
    this.api_key = api_key;
    this.access_points = array [
        'https://alpha.gauthify.com/v1/',
        'https://beta.gauthify.com/v1/'

    ];
    console.log('yo');
    headers = {
      'Authorization': auth
    };
  }

  function request_handler(type,url_addon,params) {
    var url_addon = "";
    params = [];
    console.log("request_handler");

  }

  function check_auth(unique_id,auth_code,safe_mode ,callback){
    console.log("check_auth");
    try{
      url_addon = 'check/';
      params = {'auth_code':auth_code,'unique_id':unique_id}
      response = request_handler();
    } catch (err){
      console.log(err);
    }

  }

  function send_email(unique_id,email){

  }

  function quick_test(test_email,test_sms_number,test_voice_number){

    var account_name = 'testuser@gauthify.com';
    var result;

      console.log("4) Bad Auth Code... "){
      result = check_auth(account_name,'112345');
      if(typeof(result) !== "boolean"){
        break;
        }
      console.log(result);
      }

      console.log("5) Testing one time pass (OTP)....");
      result = check_auth(account_name,user['otp']);
      if(typeof(result) !== 'boolean'){
        break;
      }
      console.log(result);
      if(result == false){
        console.error('')
      }

  }
}
GAuthify();
