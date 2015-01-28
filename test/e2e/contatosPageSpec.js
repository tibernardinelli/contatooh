describe('Página principal', function(){
	beforeEach(function(){
		browser.get('http://macdev.local:3000/#/contatos');
	});

	it('deve estar logado', function(){
		element(by.id('usuario-logado')).getText()
			.then(function(texto){
				expect(texto.trim().length).toBeGreaterThan(0);
			});
	});
});