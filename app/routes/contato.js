var verificaAutenticacao = require('../../config/auth');

//app/routes/contato.js
module.exports = function(app){
	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(verificaAutenticacao, controller.listaContato)
		.post(verificaAutenticacao, controller.salvaContato)	
	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato)
		.delete(verificaAutenticacao, controller.removeContato);

};