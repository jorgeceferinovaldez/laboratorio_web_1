var contenedorParrafos = document.getElementsByClassName('flexbox')[0],
	izquierda = document.getElementById('izquierda'),
	centro = document.getElementById('centro'),
	derecha = document.getElementById('derecha');


izquierda.addEventListener('click', function(e) {
	contenedorParrafos.style.justifyContent = 'flex-start';
});

centro.addEventListener('click', function(e) {
	contenedorParrafos.style.justifyContent = 'center';
});

derecha.addEventListener('click', function(e) {
	contenedorParrafos.style.justifyContent = 'flex-end';
});

