
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

    name:String,
    email:String,
    subject:String,
    message:String


});

var Model = mongoose.model('Contact', UserSchema, 'Contact');

module.exports = Model;

