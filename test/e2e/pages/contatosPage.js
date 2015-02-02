var contatosPage = function(){
	
	this.visitar = function(){
		browser.get('http://macdev.local:3000/#/contatos');
	}

	this.obtemUsuarioLogado = function(){
		return element(by.id('usuario-logado')).getText();
	}

	this.contagemContatos = function(){
		return element
			.all(by.repeater('contato in contatos'))
			.count();
	}

	this.deletarPrimeiroContato = function(){
		element(by.repeater('contato in contatos').row(0))
			.element(by.css('.btn'))
			.click();
	}
}

module.exports = contatosPage;