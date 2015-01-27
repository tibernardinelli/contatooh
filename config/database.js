var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.set('debug',true);

	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('mongoose conectado');
	});
	
	mongoose.connection.on('disconnected', function() {
		console.log('mongoose disconnectado');
	});

	mongoose.connection.on('error', function(erro) {
		console.log('mongoose error: ' + erro);
	});

	process.on('SIGINT', function(){
		mongoose.connection.close( function(){
			console.log('Mongoose desconectado, aplicação terminada');
			process.exit(0);
		});
	});
		
}