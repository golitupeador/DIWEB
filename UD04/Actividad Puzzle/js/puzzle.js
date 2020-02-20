
function crearPuzzle()
{

    
    var puzzle=$(
        
        '<div class="container containerMod">'+
            '<div id="puzzle" class="row">'+
                '<div id="e0" class="contenedorPuzzle border p-0 m-0  col-6"></div>'+
                '<div id="e1" class="contenedorPuzzle border p-0 m-0 col-6"></div>'+
                '<div id="e2" class="contenedorPuzzle border p-0 m-0 col-6"></div>'+
                '<div id="e3" class="contenedorPuzzle border p-0 m-0 col-6"></div>'+
            '</div>'+
        '</div>');

    $("body").append(puzzle);

}
