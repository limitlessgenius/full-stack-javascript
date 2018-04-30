const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
	//mongoose db id which can be shorcut accessed as user.id
	done(null, user.id)
	//id is the token
})

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => { // USER IS NOT DEFINED BC , () =>
		done(null, user)
	})//user; wathever is been pulled out from the database
})

passport.use(
	new GoogleStrategy({ 
		clientID: keys.googleClientID, 
		clientSecret: keys.googleClientSecret, 
		callbackURL: '/auth/google/callback', 
		proxy: true
	},
	(accessToken, refreshToken, profile, done) => { 
		User.findOne({ googleID: profile.id })
			.then((existingUser) => {
				if(existingUser) {
					return done(null, existingUser)
				} else {
					new User({ googleID: profile.id })
						.save()
						.then(user => {
							console.log('USER', user)
							done(null, user)	
						})
				}
			})
	})
)






