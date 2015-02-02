var ContatosPage = require('./pages/contatosPage');

describe('Página principal', function(){
	var pagina = new ContatosPage();

	beforeEach(function(){
		pagina.visitar();
	});

	it('deve estar logado', function(){
		pagina.obtemUsuarioLogado()
			.then(function(texto){
				expect(texto.trim().length).toBeGreaterThan(0);
			});
	});

	it('deve remover um contato da lista', function() {
		var totalAntes = pagina.contagemContatos();

		pagina.deletarPrimeiroContato();

		var totalDepois = pagina.contagemContatos();

		expect(totalDepois).toBeLessThan(totalAntes);

	});
});