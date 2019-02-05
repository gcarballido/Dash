//Dash del jugador
dash = function(){
	distancia = hallarDist(posX, posY, ratonX, ratonY);
	if (distancia < 100) {
		distDash = distancia;
	} else {
		distDash = 100;
	}
	//Guardamos posicion actual para tirar la linea
	x0 = posX;
	y0 = posY;
	
	//Actualizamos posicion tras el dash
	posX += Math.cos(angulo)*distDash;
	posY += Math.sin(angulo)*distDash;
	
	//Eliminamos dash disponible
	energia -= 20;
	
	//Tirar linea del dash
	contexto.strokeStyle = "rgba("+cr+", "+cg+", "+cb+", "+calp+")";
	contexto.lineWidth = 5;
	contexto.beginPath();
	contexto.moveTo(x0, y0);
	contexto.lineTo(posX, posY);
	contexto.stroke();
	contexto.closePath();
};


//Temporizador del Dash
recargaDash = function() {
    energia += 0.3;
    if (energia>=20*numDashes) {energia = 20*numDashes;}
};


//Barra del Dash
dibBarraDash = function(modo) {
	if (modo=="circular") {
		contexto.strokeStyle = "red";
		contexto.lineWidth = 5;
		contexto.beginPath();
		var aF = 2 + (numDashes*0.1);
		var aI = (aF-energia*0.01);
		contexto.arc(posX, posY, 20, aI*Math.PI, aF*Math.PI, false);
		contexto.stroke();
		//Borde
		contexto.beginPath();
		contexto.strokeStyle = "black";
		contexto.lineWidth = 1;
		for (var i=0; i<numDashes+1; i++) {
			let ang = aF - (0.2*i);
			contexto.moveTo(posX+23*Math.cos(Math.PI*ang), posY+23*Math.sin(Math.PI*ang));
			contexto.lineTo(posX+17*Math.cos(Math.PI*ang), posY+17*Math.sin(Math.PI*ang));
		}
		contexto.stroke();
	}
	if (modo=="barra") {
		contexto.strokeStyle = "black";
		contexto.fillStyle = "red";
		contexto.lineWidth = 1;
		contexto.fillRect(posX+15, posY-15, energia, 4);
		//Borde
		for (var i=0; i<numDashes;i++) {
			contexto.strokeRect(posX+15+20*i, posY-15, 20, 5);
		}
	}
};
