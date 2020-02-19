var despegar = null;
var despegarID = null;
var despegues= null;
var aterrizajes= null;
var aterrizar = null;
var aterrizarID= null;
var avionDespegar = null;
var avionDespegarID= null;
var avionAterrizar = null;
var avionAterrizarID= null;
var papelera = null;
var contadorDespegues=0;
var contadorAterrizajes=0;

window.addEventListener("load",function()
{
  
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

 


  avionDespegar.addEventListener("dragstart", function(event) {
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", avionDespegarID);
  });
  

  
  // Output some text when finished dragging the p element and reset the opacity
  avionDespegar.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  despegar.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  despegar.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.dataTransfer.getData("Text") == "divImgDespegar" ) {

      contadorDespegues++;
      despegues.innerHTML = contadorDespegues;

    }else
    {
      alert("Acabas de provocar un accidente aereo");
    }
  });

  /////////////////////////////////////////////////PARA ATERRIZAJES///////////////////////////////////////////////////

  
  avionAterrizar.addEventListener("dragstart", function(event) {
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", avionAterrizarID);
  });
  

  
  // Output some text when finished dragging the p element and reset the opacity
  avionAterrizar.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
  });
  
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  aterrizar.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  aterrizar.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.dataTransfer.getData("Text") == "divImgAterrizar" ) {
        contadorAterrizajes++;
        aterrizajes.innerHTML =contadorAterrizajes;
    }else
    {
      alert("Acabas de provocar un accidente aereo");
    }
  });






  /////////////////////////////////////////////////PARA QUITAR DESPEGUES O ATERRIZAJES///////////////////////////////////////////////////




  despegar.addEventListener("dragstart", function(event) {
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
    event.dataTransfer.setData("Text", despegarID);
  });
  
 
  
  // Output some text when finished dragging the p element and reset the opacity
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



  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
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
      alert("Acabas de provocar un accidente aereo");
    }
  });
});


    
    

  

    