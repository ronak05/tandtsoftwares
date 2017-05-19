
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

    firstName:String,
    middleName:String,
    lastName:String,
    email:String,
    spec:String


});

var Model = mongoose.model('Doctor', UserSchema, 'Doctor');

module.exports = Model;

