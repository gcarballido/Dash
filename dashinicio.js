function inicio() {
	//Cogemos la posicion X e Y del raton
	$("canvas").mousemove(function(event){
		// Se corrige la posicion del canvas lienzo1
		var rect = lienzo.getBoundingClientRect();
		ratonX = event.pageX - rect.left;
		ratonY = event.pageY - rect.top;
	});
	
	//Pulsacion de tecla (A) para el dash
	$(document).keydown(function(event) {
		if (event.which == 65) {
			if (energia>=20) {dash();}
		}
	});
	
	//Variables del jugador
	posX = 256;
	posY = 256;
	tamanyo = 12;
	velocidadbase = 7;
	ratonX = 150;
	ratonY = 150;
	
	//Variables item
	item.pX = -100;
	item.pY = -100;
	item.itemActivo = false;
	
	console.log("Bienvenido a Dash");
	temporizador = setTimeout("bucle()", 1000);
	
}
