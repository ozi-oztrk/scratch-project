require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy
const db = require("./models/libraryModel");
const bcrypt = require("bcryptjs");

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.use(new LocalStrategy((email, password, cb) => {
  db.query('SELECT user_id, email, password FROM accounts WHERE email=$1', [email], (err, result) => {
    if(err) {
      console.log('Getting error immediately.')
      return cb(err)
    }

    if(result.rows.length > 0) {
      const first = result.rows[0]
      bcrypt.compare(password, first.password, function(err, res) {
        if(res) {
          console.log(first)
          cb(null, { id: first.user_id, email: first.email })
         } else {
          cb(null, false)
         }
       })
     } else {
       cb(null, false)
     }
  })
}))