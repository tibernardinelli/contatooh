var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function (){ 
	console.log('passport carregando');
	var Usuario = mongoose.model('Usuario');

	passport.use(
		new GitHubStrategy ({
			clientID: 'f04e23542881092f8240',
			clientSecret: '4ad55bd119824e01a68e4bf38e1dc03169de7fa1',
			callbackURL: 'http://macdev.local:3000/auth/github/callback'
		}, function (accessToken, refreshToken, profile, done){
			console.log('set-user');
			Usuario.findOrCreate(
					{ "login": profile.username },
					{ "nome" : profile.username },
					function (erro, usuario){
						if (erro){
							console.log(erro);
							return done(erro);
						}
						return done(null, usuario);
					}
				)
			})
		);

	
	passport.serializeUser(
		function(usuario, done){
			console.log('serialize');
			done(null, usuario._id);
		}
	);
	passport.deserializeUser(
		function(id, done){
			console.log('deserialize');
			Usuario.findById(id).exec()
				.then(function(usuario) {
					done(null, usuario);
				})
		}
	);
};