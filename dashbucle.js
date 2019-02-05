function bucle() {
	//Limpiamos pantalla
	contexto.clearRect(0, 0, lienzo.width, lienzo.height);
	contexto.drawImage(fondo, 0, 0, lienzo.width, lienzo.height);
	
	
	//JUGADOR
	//Movimiento del jugador y Dash
	mover();
	recargaDash();
	dibBarraDash("circular");
	
	//Dibujamos al jugador
	contexto.fillStyle = "rgb("+cr+", "+cg+", "+cb+")";
	contexto.beginPath();
	contexto.arc(posX, posY, 7, 0, 2*Math.PI, false);
	contexto.fill();
	contexto.closePath();
	
	
	//ITEMS
	//Colocamos item con un tiempo
    tiempoItem++;
    if (tiempoItem > 150) {
    	if (item.itemActivo == true) {
    		item.eliminarItem();
    		tiempoItem = 0;
    	} else {
    		item.colocarItem();
    		tiempoItem = 0;
    	}
    }
    
    //Comprobamos si podemos coger el item
    if (item.itemActivo) {
    	item.cogerItem();
    }
    
    //Siempre se dibuja el item
	item.dibItem();
	
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 33);
}