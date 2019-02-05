var contexto = document.getElementById("lienzo").getContext("2d");

var temporizador;

var fondo = new Image();
fondo.src = "fondo.png";

//Declaramos Variables
var ratonX;
var ratonY;
var posX;
var posY;
var tamanyo;

//Dash
var velocidad;
var velocidadbase;
var distancia;
var distDash;
var numDashes = 2;
var energiabase = 20*numDashes;
var energia = energiabase;

//Color
var cr = 0;
var cg = 0;
var cb = 255;
var calp = 0.5;

//Item
var tiempoItem = 0;
var item = new Item();

inicio();
