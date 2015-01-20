//public/js/controllers/ContatosController.js


angular.module('contatooh').controller('ContatosController', 
	function($scope, $resource){
		$scope.contatos = [];
		
		var Contato = $resource("/contatos");
		
		function buscaContato(){
			Contato.query(
				function(data){
					$scope.contatos = data;
				},
				function(statusText) {
					console.log("Bãã"),
					console.log(statusText)
				}
			);
		}
		buscaContato();
		
		$scope.remove = function (contato){
			Contato.delete({id: contato._id},			
				buscaContato,
				function(erro){
					console.log('Não foi possível remover contato');
					console.log(erro);
				});
		}

     	$scope.filtro = "";
	});
