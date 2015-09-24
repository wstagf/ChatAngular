angular.module("listaTelefonica").filter("ellipsis", function () {
	return function (input, size) {

		if (input.length <= size) return input;
		//   (size || 10 ) faz o teste, se existe um parametro, pega o valor, se nao existe pega o valor fixo 10
		// var output = input.substring(0, (size || 10 )) + "...";
		var output = input.substring(0, (size || 10 )) + "...";
		return output;
	}
});