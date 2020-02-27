/*
    No he conseguido hacer el boton de reiniciar en condiciones debido a mi codigo espagetti desordenado

*/


var lienzo=null, canvas=null;
var x=50,y=50;
var lastPress=null; //Variable para guardar la tecla presionada
//En nuestro juego, usaremos las teclas izquierda, arriba, derecha y abajo, cuyos valores numéricos son 37, 38, 39 y 40 respectivamente.
const KEY_LEFT=37;
const KEY_UP=38;
const KEY_RIGHT=39;
const KEY_DOWN=40;
const KEY_P= 80;
const KEY_C= 67;
var gameOver=false;
var pausa=false;
var obstaculos = [];
var i=0;
var obstaculosCreados=false;
var nivel=4;
var subirNivel=false;
var player=[];
var reiniciar=false;
var nivelActual=0;



function iniciar(){
    
    canvas=document.getElementById('lienzo');
    lienzo=canvas.getContext('2d'); //obtenemos el contexto de dibujo
    
    run();
}
function run(){
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    var divNivelActual= document.getElementById("nivel");

    if(reiniciar==true)
    {
        nivel=0;
        nivelActual=0;
        crearObstaculos(lienzo, nivel);
        nivel=4;
        divNivelActual.innerHTML="";
        divNivelActual.append("Nivel: "+ nivelActual);
        gameOver=false;
        x=50;
        y=50;
    }
    reiniciar=false;


    if(gameOver==false)
    {    
        requestAnimationFrame(run); //animación optimizada
        
        accionesJuego();
        pintarLienzo(lienzo);
        if(subirNivel==true)
        {
           nivel=nivel+1;
           nivelActual=nivelActual+1;
            crearObstaculos(lienzo, nivel);
            divNivelActual.innerHTML="";
            divNivelActual.append("Nivel: "+ nivelActual);
        }
        subirNivel=false;          
    }
    
    
    
    
}
function accionesJuego(){
    //Modificamos la dirección que tendrá nuestro player en función de la tecla presionada  
    if(lastPress==KEY_P) //Si la ultima tecla es el pause, ponemos la boleanapause al contrario de la qu eesta
    { 
        if(pausa==true)
        {
            pausa=false;
        }else
        {
            pausa=true;
        }
        lastPress=null;  // y ponemos el lastpress al null para que funcione el `pintar el lienzo (en este caso la pausa)`
    }

    if(lastPress==KEY_C)
    {
        reiniciar=true;
        
    }

    if(pausa==false)
    {
        switch(lastPress) {
            case KEY_RIGHT:
                x+=5;
              break;
            case KEY_LEFT:
                x-=5;
              break;
            case KEY_DOWN:
            y+=5;
            break;
            case KEY_UP:
            y-=5;
            break;
            }
    }

    
  
    //verificaremos si el player ha salido del canvas, en cuyo caso, haremos que aparezca por el otro lado:
    if(x>=canvas.width)
    {
        x=canvas.width-10;
        x=0;
        gameOver=false;
        subirNivel=true;
    }else if(y>=canvas.height)
    {
        y=canvas.height-10;
        y=y;
        gameOver=true;
    }else if(y<0)
    {
        y=1;
        y=y;
        gameOver=true;
    }else if(x<0)
    {
        x=1;
        x=x;
        gameOver=true;
    }

    player = {
        x: x,
        y: y,
        w: 10,
        h: 10
    }
    obstaculos.forEach(function (obstaculo) {
        if (colision(obstaculo, player)) {
            lienzo.fillStyle = "#000000"
        lienzo.font = "bold 40px Georgia";
        lienzo.fillText("Has perdido", canvas.width/2-180, canvas.height/2);
            gameOver=true;
        }
    })
    
    
        
}

//Funcion que crea un array de obstaculos y evita que se superpongan
function crearObstaculos(lienzo, nivel)
{
    
    obstaculos=[];
    //  Opacidad
    lienzo.globalAlpha = 0.7;

  for(var i=0;i<nivel;i++)
  {

    var coordx = Math.random() * canvas.width+55; //Lo creamos a partir de esta coordenada
    var coordy = Math.random() * canvas.height;
    var width = Math.random() * 10 + 20;
    var height = Math.random() * 10 + 20;

    var obstaculo = {
        x: coordx,
        y: coordy,
        w: width,
        h: height
    }

    var ok = true;
    //Por cada obstaculo en obstaculos comprobamos que no colisione
    obstaculos.forEach(function (item) {
        if (colision(obstaculo, item)) {
            ok = false;
        }
    })

    if (ok) {
        
        obstaculos.push(obstaculo); //Si todo esta correcto lo metemos en el array
    }
          
  }
    obstaculosCreados=true;
}


//Comprobamos que no entren en colision ninguno
function colision(a, b) {
    return !(
        ((a.y + a.h) < (b.y)) ||
        (a.y > (b.y + b.h)) ||
        ((a.x + a.w) < b.x) ||
        (a.x > (b.x + b.w))
    );
}

function pintarLienzo(lienzo){
    lienzo.fillStyle="#F7F9FA"; //le ponemos un color al lienzo
    lienzo.fillRect(0,0,canvas.width,canvas.height); //Dibujamos el lienzo
    lienzo.fillStyle='#34c0eb';
    lienzo.fillRect(x,y,10,10); //Dibujamos el jugador: va por posición x,y y es de 10x10  

    //Para cada obstaculo dentro de obstaculos lo pintamos
    obstaculos.forEach(obstaculo => {
        lienzo.fillStyle ="#FF0000";
        lienzo.fillRect(obstaculo.x, obstaculo.y, obstaculo.w, obstaculo.h)
    });
    pintarBordes(lienzo);
    if(pausa==true)
    {
        lienzo.fillStyle = "#000000"
        lienzo.font = "bold 40px Georgia";
        lienzo.fillText("Pause!", canvas.width/2-20, canvas.height/2); 

    }
    if(gameOver==true)
    {
        lienzo.fillStyle = "#000000"
        lienzo.font = "bold 40px Georgia";
        lienzo.fillText("Has perdido", canvas.width/2-180, canvas.height/2);
    }
    //Creamos los obstaculos si subimos de nivel
    if(subirNivel==true)
    {
        crearObstaculos(lienzo, nivel)
    }
}

function pintarBordes(lienzo)
{
    lienzo.lineWidth = 2;
    lienzo.strokeStyle="#FF0000";
    lienzo.strokeRect(0, 0, canvas.width, canvas.height);//for white background
}



document.addEventListener('keydown', function(evt) { 
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress=evt.keyCode;
}, false);
//window.addEventListener("load", iniciar, false);



window.addEventListener("load",function()
{
    
    iniciar();
    

});

