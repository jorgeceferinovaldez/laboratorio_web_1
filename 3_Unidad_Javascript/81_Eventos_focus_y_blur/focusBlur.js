// Evento focus

var campoNombre = document.getElementById('nombre');

campoNombre.addEventListener('focus', function() {
	
	campoNombre.setAttribute('value', 'Tengo el foco');

});

// Evento blur

campoNombre.addEventListener('blur', function() {
	
	campoNombre.setAttribute('value', 'Ya no tengo el foco');

});

