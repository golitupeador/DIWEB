var piezas=[];


$(document).ready(function()
{
    piezas.push($("#img0"));
    piezas.push($("#img1"));
    piezas.push($("#img2"));
    piezas.push($("#img3"));

    
    window.addEventListener("dragover" ,function(event)
    {
        event.preventDefault();
    });

    window.addEventListener("dragstart" ,function(event)
    {
        event.dataTransfer.setData("text", event.target.id);
    });

    window.addEventListener("drop" ,function(event)
    {
        event.preventDefault();

        if(event.target.id == "e0" || event.target.id == "e1" ||event.target.id == "e2" ||event.target.id == "e3" )
        {
            var imagen = document.getElementById(event.dataTransfer.getData("text"));
            event.target.appendChild(imagen);
            victory();
            
        }else if(event.target.id == "p0" || event.target.id == "p1" ||event.target.id == "p2" ||event.target.id == "p3")
        {
            var imagen = document.getElementById(event.dataTransfer.getData("text"));
            event.target.appendChild(imagen);
        }
    });

    //Creamos la ventana del puzzle
    crearPuzzle();

    function victory()
    {
       if(piezas[0].parent().attr("id") == "e0" && piezas[1].parent().attr("id") == "e1" && piezas[2].parent().attr("id") == "e2" && piezas[3].parent().attr("id") == "e3")
       {
           alert("ganahte");
       }
    }
    




})