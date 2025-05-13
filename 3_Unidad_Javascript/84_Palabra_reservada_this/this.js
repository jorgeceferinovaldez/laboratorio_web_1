var parrafos = document.getElementsByClassName('texto');

for(var i = 0; i < parrafos.length; i++){

	parrafos[i].addEventListener('click', function () {
		this.className = 'texto fondo-rojo';
	});

}


var planta = {

	color: 'verde',
	tamaño: 'grande',
	informacion: function(){
		console.log('El color de la planta es ' + this.color);
	}

}

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this