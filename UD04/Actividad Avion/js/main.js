///////////////////////////////////////////VARIABLES//////////////////////////////

//Div del texto d despegar
var despegar = null;
var despegarID = null;
var despegues= null;

//Disv del texto de aterrizar

var aterrizajes= null;
var aterrizar = null;
var aterrizarID= null;

//Divs de las imagenes
var avionDespegar = null;
var avionDespegarID= null;
var avionAterrizar = null;
var avionAterrizarID= null;

//Div papelera
var papelera = null;

//Contadores
var contadorDespegues=0;
var contadorAterrizajes=0;


window.addEventListener("load",function()
{
  
  //Asignacion de variables con el html ya cargado
  despegar = document.getElementById("divDespegar");
  despegarID = despegar.getAttribute("id");
  despegues= document.getElementById("numeroDespegados");
  aterrizajes= document.getElementById("numeroAterrizados");
  aterrizar = document.getElementById("divAterrizar");
  aterrizarID= aterrizar.getAttribute("id");
  avionDespegar = document.getElementById("divImgDespegar");
  avionDespegarID= avionDespegar.getAttribute("id");
  avionAterrizar = document.getElementById("divImgAterrizar");
  avionAterrizarID= avionAterrizar.getAttribute("id");
  papelera = document.getElementById("divPapelera");





  /////////////////////////////////////////////////PARA DESPEGUES///////////////////////////////////////////////////

 
// Cambiamos opacidad del div establecemos event datatrasnfer

  avionDespegar.addEventListener("dragstart", function(event) {
    
    
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", avionDespegarID);
  });
  

  
  //Ponemos la opacidad de vuelta al acabar el drag
  avionDespegar.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  despegar.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  //Comprobamos que al dropearlo, el eventdata tenga el texto deseado para que lo acepte, y si es asi, aumentamos el contador
  despegar.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.dataTransfer.getData("Text") == "divImgDespegar" ) {

      contadorDespegues++;
      despegues.innerHTML = contadorDespegues;

    }else if(event.dataTransfer.getData("Text") == "divDespegar")
    {
      //No hacemos nada si estamos soltandolo en el mismo lado
    }
    else
    {
      alert("Acabas de provocar un accidente aereo");
    }
  });

  /////////////////////////////////////////////////PARA ATERRIZAJES///////////////////////////////////////////////////


  // Cambiamos opacidad del div establecemos event datatrasnfer
  
  avionAterrizar.addEventListener("dragstart", function(event) {
    
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", avionAterrizarID);
  });
  

  
  //Ponemos la opacidad de vuelta al acabar el drag
  avionAterrizar.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  aterrizar.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  

    //Comprobamos que al dropearlo, el eventdata tenga el texto deseado para que lo acepte, y si es asi, aumentamos el contador
  aterrizar.addEventListener("drop", function(event) {
    event.preventDefault();
    //Incrementamos si el div que le arrastramos es el adecuado
    if ( event.dataTransfer.getData("Text") == "divImgAterrizar" ) {
        contadorAterrizajes++;
        aterrizajes.innerHTML =contadorAterrizajes;
    }else if(event.dataTransfer.getData("Text") == "divAterrizar")
    {
      //No hacemos nada si estamos soltandolo en el mismo lado
    }
    else
    {
      alert("Acabas de provocar un accidente aereo");
    }
  });






  /////////////////////////////////////////////////PARA QUITAR DESPEGUES O ATERRIZAJES///////////////////////////////////////////////////


// Cambiamos opacidad del div establecemos event datatrasnfer

  despegar.addEventListener("dragstart", function(event) {
    
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", despegarID);
  });
  
 
  
  //Ponemos la opacidad de vuelta al acabar el drag
  despegar.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  
  

  aterrizar.addEventListener("dragstart", function(event) {
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", aterrizarID);
  });
  
 
  
  // Output some text when finished dragging the p element and reset the opacity
  aterrizar.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });



   //Comprobamos que al dropearlo, el eventdata tenga el texto deseado para que lo acepte, y si es asi, disminuimos el contador
  papelera.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  papelera.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.dataTransfer.getData("Text") == "divDespegar" ) {
      if(contadorDespegues<=0)
      {
        alert("Hijo mio, de donde no hay, no se puede sacar ná")
      }else
      {
        contadorDespegues--
        despegues.innerHTML =contadorDespegues;
      }
    }else if(event.dataTransfer.getData("Text") == "divAterrizar")
    {
      if(contadorAterrizajes<=0)
      {
        alert("Pa que tocas, no ves que no hay")
      }else{
        contadorAterrizajes--;
        aterrizajes.innerHTML =contadorAterrizajes;
      }
      
    }else
    {
      alert(event.dataTransfer.getData("Text"))
      alert("Acabas de provocar un accidente asereo");
    }
  });
});


    
    

  

    