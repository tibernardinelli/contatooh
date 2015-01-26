angular.module('contatooh').controller('ContatoController', 
	function($scope, $routeParams, Contato) {
		console.log($routeParams.contatoId);

		if ($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId},
				function(contato) {
					$scope.contato = contato;
				},
				function(erro) {
					$scope.mensagem = "bãã! " + erro;
					console.log(erro);
				}
			);
		} else 
			$scope.contato = new Contato();

		Contato.query(function(contatos) {
			$scope.contatos = contatos;
		});
		$scope.salva = function(){
			$scope.contato.$save();
		};
	});