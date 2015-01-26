//public/js/controllers/ContatosController.js


angular.module('contatooh').controller('ContatosController', 
	function($scope, $resource, Contato){
		$scope.contatos = [];
		
		$scope.mensagem = {texto: ''};

		function buscaContato(){
			Contato.query(
				function(data){
					$scope.contatos = data;
				},
				function(statusText) {
					$scope.mensagem = {texto: 'Não foi possível obter a lista'};
					console.log(statusText)
				}
			);
		}
		buscaContato();
		
		$scope.remove = function (contato){
			Contato.remove({id: contato._id},			
				buscaContato,
				function(erro){
					$scope.mensagem = {texto: 'Não foi possível remover contato'};
					console.log(erro);
				});
		}		
		
     	$scope.filtro = "";
	});
