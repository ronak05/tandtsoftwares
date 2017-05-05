/*
 * @Author :: Rakesh
 * @description :: Email Service handles all the email sending functionality in the FHIR360 application
 *
 * */

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var baseUrlForRegister="138.68.56.250:9000/#/post-validate-register";
var baseUrlForForgotPassword="138.68.56.250:9000/#/confirm-password";
var baseUrlForPasswordReset="138.68.56.250:9000/#/confirm-password-mail-sent";
/*var supportMail= process.env.SUPPORT_MAIL;
 var supportPass= process.env.SUPPORT_PASS;*/
var supportMail="rakfhir@gmail.com";
var supportPass="8018260402";

var EmailService = {

  registerOnSuccessMail: function(req, res, callback) {
      console.log('1inside maining--->')
    var email = req.body.email;
    var subject = req.body.subject;
    var message=req.body.message;
    var name=req.body.name;

    var transporter = nodemailer.createTransport(smtpTransport({
      service: 'Gmail',
      auth: {
        user: supportMail,
        pass: supportPass
      }
    }));
    var mailOptions = {
      from: supportMail, // sender address
      to: email, // list of receivers
      subject: 'Welcome to FutureMinds', // Subject line
      //text: 'Hello world' // plaintext body
      html: 'Welcome to FutureMinds. See below for your Email .<br/><br/>' +
      'Email: '+email+'<br/>'+
      'Simply visit: '+
      '<i>  Thanks for your message to us. We will definitely get back to you.<br/><br/>'+
      'Thanks,<br/>'+
      'Adminstrator<br/>'+
      'rkd.rakeshdas@gmail.com'
    };
    transporter.sendMail(mailOptions, function(error, info){
        console.log('2inside maining--->')
      if(error){
        console.log(error);
      }else{
          console.log('3inside maining--->')

      }
    });

  }

/*  forgotPasswordMail:function(req, res, callback){
    var email = req.body.email;
    var password = req.body.password;
    var mail_param=req.body.mail_param;
    var mail_param_isActive=req.body.mail_param_isActive;

    var transporter = nodemailer.createTransport(smtpTransport({
      service: 'Gmail',
      auth: {
        user: supportMail,
        pass: supportPass
      }
    }));
    var mailOptions = {
      from: supportMail, // sender address
      to: email, // list of receivers
      subject: 'Reset Password', // Subject line
      //text: 'Hello world' // plaintext body
      html: 'Welcome to FHIR360. If you remember your password, please ignore it.<br/><br/>' +
      'Username: '+email+'<br/>'+
      'To reset your password,Simply visit: '+
      '<i>'+baseUrlForForgotPassword+'?mail_param='+mail_param+'&emailid='+email+'</i>'+'<br/><br/>'+
      'Thanks,<br/>'+
      'Adminstrator<br/>'+
      'Bapi@bestrayinfotech.com'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
      }else{
      }
    });

  },

  passwordResetDetailsMailToUser:function(req,res,callback){
    var email = req.body.email;
    var password = req.body.password;
    var newPassword = req.body.newPassword;

    var mail_param=req.body.mail_param;
    var mail_param_isActive=req.body.mail_param_isActive;

    var transporter = nodemailer.createTransport(smtpTransport({
      service: 'Gmail',
      auth: {
        user: supportMail,
        pass: supportPass
      }
    }));
    var mailOptions = {
      from: supportMail, // sender address
      to: email, // list of receivers
      subject: 'Reset Password', // Subject line
      //text: 'Hello world' // plaintext body
      html: 'Your password is reset in FHIR360. Here is your username and password.<br/><br/>' +
      'Username: '+email+'<br/>'+
      'Password: '+newPassword+'<br/><br/>'+
      'Click on below link :'+
      '<i>'+baseUrlForPasswordReset+'</i>'+'<br/><br/>'+
      'Thanks,<br/>'+
      'Adminstrator<br/>'+
      'Bapi@bestrayinfotech.com'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
      }else{
      }
    });

  }*/

};

module.exports = EmailService;
