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
var supportMail="tandtsoftwares@gmail.com";
var supportPass="Tandt11#";

var EmailService = {

  registerOnSuccessMail: function(req, res, callback) {
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
      from: email, // sender address
      to: supportMail, // list of receivers
      subject: 'Welcome to TandTSoftwares', // Subject line
      //text: 'Hello world' // plaintext body
      html: 'Welcome to TandTSoftwares.<br/><br/>' +
      'Message For TandTSoftwares: '+
      '<i>  '+message+'<br/><br/>'+
      'Thanks and Regards<br/>'+
      ''+email+'<br/>'
    };
    transporter.sendMail(mailOptions, function(error, info){

      if(error){
        console.log(error);
      }else{
          console.log('3inside maining--->')

      }
    });

  },


    responseMailFromTandT: function(req, res, callback) {
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
            subject: 'Welcome to TandTSoftwares', // Subject line
            //text: 'Hello world' // plaintext body
            html: 'Welcome to TandTSoftwares<br/><br/>' +
            'Thanks and Pleasure to get your message, we will definitely get back to you.<br/>'+
            'Thanks and Regards<br/>'+
            'tandtsoftwares@gmail.com<br/>'
        };
        transporter.sendMail(mailOptions, function(error, info){

            if(error){
                console.log(error);
            }else{


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
