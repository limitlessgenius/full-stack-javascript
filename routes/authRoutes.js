
const passport = require('passport')

module.exports = (app) => {
	app.get(
		'/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	)

	app.get('/auth/google/callback', passport.authenticate('google'))

	app.get('/api/logout', (req, res) => {
		//attached by passport
		req.logout()
		res.send(req.user)
		//blank bc user destroyed
	})

	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	})
}



