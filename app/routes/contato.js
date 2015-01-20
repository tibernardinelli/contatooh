//app/routes/contato.js
module.exports = function(app){
	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(controller.listaContato)
		.post(controller.salvaContato)
		.delete(controller.removeContato);
	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);
};