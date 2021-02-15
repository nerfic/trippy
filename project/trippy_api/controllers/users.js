const express = require("express");
const router = express.Router();
const passport = require("passport");
const uid2 = require("uid2");

const User = require("../models/user.js");

const signup = (req, res) => {
  User.register(
    new User({
      email: req.body.email,
      // L'inscription créera le token permettant de s'authentifier auprès de la strategie `http-bearer`
      token: uid2(16), // uid2 permet de générer une clef aléatoirement. Ce token devra être regénérer lorsque l'utilisateur changera son mot de passe
      username: req.body.username,
    }),
    req.body.password, // Le mot de passe doit être obligatoirement le deuxième paramètre transmis à `register` afin d'être crypté
    function (err, user) {
      if (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
      } else {
        res.json({ _id: user._id, token: user.token, account: user.account });
      }
    }
  );
};

const login = (req, res, next) => {
  passport.authenticate("local", { session: false }, function (err, user, info) {
    if (err) {
      res.status(400);
      return next(err.message);
    }
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    console.log('user', user);
    res.json({
      _id: user._id.toString(),
      token: user.token,
      username: user.username,
      firstName: user.firstName
    });
  })(req, res, next);
};

//Auth is compulsory for this route
const getById = (req, res, next) => {
  passport.authenticate("bearer", { session: false }, function (
    err,
    user,
    info
  ) {
    if (err) {
      res.status(400);
      return next(err.message);
    }
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    User.findById(req.params.id)
      .then(function (user) {
        if (!user) {
          res.status(404);
          return next("User not found");
        }

        return res.json(user);
      })
      .catch(function (err) {
        res.status(400);
        return next(err.message);
      });
  })(req, res, next);
};

module.exports = {
  getById,
  login,
  signup
};
