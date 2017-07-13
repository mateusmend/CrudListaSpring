var app = angular.module("listaTelefonica", []);
app.controller("listaTelefonicaCtrl", crudLista);

function crudLista($scope,$http){
	$http({
		  method: 'GET',
		  url: 'http://localhost:8080/lista'
		}).then(function successCallback(contato) {
			console.log(contato);
			$scope.contatos = contato.data;
		  }, function errorCallback(contato) {
			  console.log(contato);
		  });

	$scope.alterando = false;
	$scope.idAlterando = "";

	$scope.adicionar = function(contato){
		if (!$scope.alterando) {
			debugger;
			$http.post('http://localhost:8080/lista', contato)
				.then(function successCallback(contato) {
					console.log(contato);
				  }, function errorCallback(contato) {
					  console.log(contato);
				  });
			$scope.contatos.push(angular.copy(contato));
			$scope.limpar();
		}else{
			$scope.contatos[$scope.idAlterando] = $scope.contato;
			$http.put('http://localhost:8080/lista', contato)
			.then(function successCallback(contato) {
				console.log(contato);
			  }, function errorCallback(contato) {
				  console.log(contato);
			  });
			$scope.alterando = false;
			$scope.limpar();	
		}	
	}

	$scope.limpar = function(){
		$scope.contato = "";
	}
	
	$scope.deletar = function(index){
		debugger;
		$http.delete('http://localhost:8080/lista', index)
		.then(function sucessCallback(contato){
			console.log(contato)
		}, function errorCallback(contato){
			console.log(contato)
		});
		$scope.contatos.splice(index, 1);
	}

	$scope.alterar = function(index){
		$scope.contato = angular.copy($scope.contatos[index]);
		$scope.idAlterando = index;
		$scope.alterando = true;
	}

}
crudLista.$inject = ['$scope', '$http']; 