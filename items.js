function Item() {
	//PROPIEDADES
		this.pX;
		this.pY;
		this.tamanyo = 5;
		this.color;
		this.tipo;
		this.itemActivo = false;
		
		
    //METODOS
        //Pintar comida
    	this.dibItem = function() {
    	    switch(this.tipo) {
    	        case 0:
    	           this.color = "red";
    	           break;
    	       case 1:
    	           this.color = "green";
    	           break;
    	    }
    		contexto.fillStyle = this.color;
    		contexto.beginPath();
    		contexto.arc(this.pX, this.pY, this.tamanyo, 0, Math.PI*2, false);
    		contexto.fill();
    	};
    	
    	
    	//Eliminar objeto
    	this.eliminarItem = function() {
    	    this.pX = -100;
    	    this.pY = -100;
    	    this.itemActivo = false;
    	};
    	
    	
        //Colocar item al azar
        this.colocarItem = function() {
            this.tipo = Math.round(Math.random());
            this.pX = Math.random()*lienzo.width;
            this.pY = Math.random()*lienzo.height;
            this.itemActivo = true;
        };
        
        
    	//Coger item
        this.cogerItem = function() {
            distanciaItem = hallarDist(this.pX, this.pY, posX, posY);
            if (distanciaItem < 17) {
                if (this.tipo == 0) {
                    //Item para otro dash (tipo 0)
                    numDashes++;
                }
                if (this.tipo == 1) {
                    //Item para velocidad (tipo 1)
                    velocidadbase *= 1.15;
                }
                this.eliminarItem();
            }
        };
}
