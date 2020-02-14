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


function iniciar(){
    canvas=document.getElementById('lienzo');
    lienzo=canvas.getContext('2d'); //obtenemos el contexto de dibujo
    run();
}
function run(){
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    
    if(gameOver==false)
    {   
        requestAnimationFrame(run); //animación optimizada
        accionesJuego();
        
        pintarLienzo(lienzo);
        pintarBordes(lienzo);
        
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
        x=x;
        gameOver=true;
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
    
        
}
function pintarLienzo(lienzo){
    lienzo.fillStyle="#F7F9FA"; //le ponemos un color al lienzo
    lienzo.fillRect(0,0,canvas.width,canvas.height); //Dibujamos el lienzo
    lienzo.fillStyle='#0f0';
    lienzo.fillRect(x,y,10,10); //Dibujamos el jugador: va por posición x,y y es de 10x10  
    
    if(pausa==true)
    {
        lienzo.font = "40px Georgia";
        lienzo.fillText("Pause!", canvas.width/2-40, canvas.height/2); 
    }
    if(gameOver==true)
    {
        finJuego(lienzo);
    }
}

function pintarBordes(lienzo)
{
    lienzo.lineWidth = 2;
    lienzo.strokeStyle="#FF0000";
    lienzo.strokeRect(0, 0, canvas.width, canvas.height);//for white background
}

function finJuego(lienzo)
{
    lienzo.font = "40px Georgia";
    lienzo.fillText("Has perdido", canvas.width/2-40, canvas.height/2);
}


document.addEventListener('keydown', function(evt) { 
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress=evt.keyCode;
}, false);
window.addEventListener("load", iniciar, false);