angular.module('contatooh').controller('ContatoController', 
  function($scope, $routeParams) {

    console.log($routeParams.contatoId);


    var Contato = $resource("/contatos/:id");
	$scope.remove = function (contato){
			Contato.remove({id: contato._id},			
				buscaContato,
				function(erro){
					console.log('Não foi possível remover contato');
					console.log(erro);
				});
		}

});