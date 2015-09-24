angular.module("listaTelefonica").controller("listaTelefonicaCtrl",
	 function($scope, contatosAPI, operadorasAPI, serialGenerator) {
console.log(serialGenerator.generate());

$scope.app = "Lista Telefonica";

$scope.contatos = [];

$scope.operadoras = [];

$scope.contato = {
	data: "488170800000"
};

var carregarContatos = function() {
	contatosAPI.getContatos().success(function (data, status) {
		$scope.contatos = data;
	}).error(function (data) {
		$scope.error = "Aconteceu um problema: " + data;
	})
};


var carregarOperadoras = function() {
	operadorasAPI.getOperadoras().success( function (data, status) {
		$scope.operadoras = data;
	}).error(function (data) {
		$scope.error = "Aconteceu um problema: " + data;
	})
}

$scope.classeDinamicaH4 = "h4Dinamico";
$scope.italico = "italico";


/*  pior Método, NUNCA LER O $SCOPE NO CONTROLER
$scope.adicionarContato = function () {
	//console.log($scope.nome);
	$scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
}
*/


/*  Medio Método, NÃO UTILIZA  OBJETOS
$scope.adicionarContato = function (nome, telefone) {
	//console.log($scope.nome);
	$scope.contatos.push({nome: nome, telefone: telefone});
}
*/


$scope.adicionarContato = function (contato) {
	contato.data = new Date();
	contato.selecionado = false;
	
	
	contato.serial = serialGenerator.generate();



	contatosAPI.saveContato(contato).success(function (data) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	}).error(function (data) {
		$scope.error = "Aconteceu um problema: " + data;
	});			
	
};

$scope.apagarContatos = function(contatos) {
	$scope.contatos = contatos.filter(function(contato) {
		if (!contato.selecionado) return contato;
	});
};

$scope.isContatoSelecionado = function(contatos) {
	return contatos.some(function (contato) {
		if (contato.selecionado) {
			return contato.selecionado;
		}
			
	});
};

carregarContatos();
carregarOperadoras();

});