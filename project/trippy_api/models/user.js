var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var schema = require("./schemas").User;

var UserSchema = new mongoose.Schema(schema);

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email", // usernameField is actually an email
  session: false // API doesn't use sessions
});

// Cette méthode sera utilisée par la strategie `passport-local` pour trouver un utilisateur en fonction de son `email` et `password`
UserSchema.statics.authenticateLocal = function () {
  var _self = this;
  return function (req, email, password, cb) {
    _self.findByUsername(email, true, function (err, user) {
      if (err) return cb(err);
      if (user) {
        return user.authenticate(password, cb);
      } else {
        return cb(null, false);
      }
    });
  };
};

// Find an user by its token
UserSchema.statics.authenticateBearer = function () {
  var _self = this;
  return function (token, cb) {
    if (!token) {
      cb(null, false);
    } else {
      _self.findOne({ token: token }, function (err, user) {
        if (err) return cb(err);
        if (!user) return cb(null, false);
        return cb(null, user);
      });
    }
  };
};

var User = mongoose.model("User", UserSchema)

module.exports = User;
