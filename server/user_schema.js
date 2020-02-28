var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: 'An e-mail is required'
  },
  password: {
    type: String,
    required: 'You need a password to create a new user!'
  }
});

module.exports = mongoose.model('Users', UserSchema);
