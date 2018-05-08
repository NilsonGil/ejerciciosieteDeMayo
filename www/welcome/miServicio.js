var app =  angular.module('starter');

app.service('miServicioWeb' , function($resource){
	this.obtenerDatos =  function(){
		// esta se encarga del servicio de optener la api
	return $resource("https://randomuser.me/api/?results=10").get();

	}


});