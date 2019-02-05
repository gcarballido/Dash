//FUNCIONES
//Colision con las paredes del canvas
colisionParedes = function(){
	if(posX>lienzo.width){posX=lienzo.width;}
	if(posX<0){posX=0;}
	if(posY>lienzo.height){posY=lienzo.height;}
	if(posY<0){posY=0;}
};
//Calcular el angulo con el raton
hallarAngulo = function(xOrigen, yOrigen, xObjetivo, yObjetivo) {
	return Math.atan2(yObjetivo - yOrigen, xObjetivo - xOrigen);
};
//Calcular distancia
hallarDist = function(xOrigen, yOrigen, xObjetivo, yObjetivo) {
	return Math.sqrt(Math.pow(xOrigen-xObjetivo, 2)+Math.pow(yOrigen-yObjetivo, 2));
};

//Anular velocidad si el raton esta encima
//Tambien ajusta la velocidad en funcion de la lejania del raton
ajVelocidad = function() {
	let distmax = 3*tamanyo;
	let dist = hallarDist(posX, posY, ratonX, ratonY);
	if (dist > distmax) {dist = distmax};
	let factordist = dist/distmax;
	velocidad = (velocidadbase)*factordist;
};

//Movimiento del jugador
mover = function(){
	ajVelocidad();
	angulo = hallarAngulo(posX, posY, ratonX, ratonY);
	posX += Math.cos(angulo)*velocidad;
	posY += Math.sin(angulo)*velocidad;
	colisionParedes();
};