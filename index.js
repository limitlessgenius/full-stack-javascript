
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-auth20').Strategy

const app = express()

passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 5000
app.listen(PORT)

//clientID
// 247670904395-0hvulhlb2rd01batvbcj2qi2l07r1ter.apps.googleusercontent.com
//clientSecret
//kSY0Ob8GuBrziO5BE_nkAM7t




