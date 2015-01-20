//public/js/controllers/ContatosController.js


angular.module('contatooh').controller('ContatosController', 
	function($scope, $resource){
		$scope.contatos = [];
		
		var Contatos = $resource("/contatos");
		
		function buscaContato(){
			Contatos.query(
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

	    var Contato = $resource("/contatos/:id");
		$scope.remove = function (contato){
			Contato.remove({id: contato._id},			
				buscaContato,
				function(erro){
					console.log('Não foi possível remover contato');
					console.log(erro);
				});
		}
		
		
     	$scope.filtro = "";
	});
