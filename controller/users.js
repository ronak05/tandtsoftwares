/**
 * Created by ronak on 2/7/2017.
 */
/**
 * Created by Bestray on 8/21/2016.
 */
/*var bcrypt = require('bcrypt');
function hashPassword(values, next) {
    bcrypt.hash(values.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        values.password = hash;
        next();
    });
}*/

module.exports = {
    connection: 'mysql',
    attributes: {
        name: {
            type: 'string',
            required: false
        },
        password: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        username: {
            type: 'string',
            required: true
        }
    }
   /* toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        return obj;
    },
    // Lifecycle Callbacks
    beforeCreate: function(values, next) {
        hashPassword(values, next);
    }*/

};