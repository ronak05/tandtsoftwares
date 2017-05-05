

var express = require('express');

var homes = require('./controller/homes');
var usermodel = require('./model/user');
var userservice = require('./services/EmailService');
var http = require('http');
var path = require('path');
var app = express();
var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var errorHandler = require('errorhandler');
var path = require('path');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
/*app.use(express.methodOverride());*/
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//---------------
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({resave: true, saveUninitialized: true, secret: 'SOMERANDOMSECRETHERE', cookie: { maxAge: 60000 }}));
//---------------

app.set('view engine', 'ejs');
/*var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
console.log(mongoose.connection.readyState);
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + configDB.url);
});*/
 // pass passport for configuration
// routes ======================================================================

var MongoClient1 = require('mongodb').MongoClient;

// launch ======================================================================
app.set('views', path.join(__dirname, 'views'));

app.post('/homes/comaprison', homes.comaprison);
app.post('/homes/signup', homes.signup);
app.post('/homes/register', homes.register);
app.post('/homes/contactProcess', homes.contactProcess);
app.post('/homes/login', homes.login);
app.post('/homes/doctorRegistrationProcess', homes.doctorRegistrationProcess);
app.post('/homes/SelectDoctorSpecialization', homes.SelectDoctorSpecialization);


app.get('/', function(req, res){
    res.render('index.ejs');
});
app.get('/index', function(req, res){
    res.render('index.ejs');
});
app.get('/about', function(req, res){
    res.render('about.ejs');
});
app.get('/blog', function(req, res){
    res.render('blog.ejs');
});
app.get('/contact', function(req, res){
    res.render('contact.ejs');
});
app.get('/portfolio', function(req, res){
    res.render('portfolio.ejs');
});
app.get('/services', function(req, res){
    res.render('services.ejs');
});

app.get('/signup', function(req, res){
    res.render('signup.ejs');
});
app.get('/register', function(req, res){
    res.render('register.ejs');
});
app.get('/login', function(req, res){
    res.render('login.ejs');
});
app.get('/doctorRegistration', function(req, res){
    res.render('doctorRegistration.ejs');
});
app.get('/view', function(req, res){
    res.render('view.ejs');
});
app.get('/doctorDisplayData', function(req, res){
    res.render('doctorDisplayData.ejs');
});


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})