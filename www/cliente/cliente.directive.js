
var app = angular.module('starter');
app.directive('cliente', function(){

// cliente es el nombre que va llevar nuestra directiva
// o como se va a instanciar la etiqueta
return {

templateUrl:'/cliente/cliente.html',
	restict: 'AE',
	scope: {

			nombre : '='

	
}
	
	}


});