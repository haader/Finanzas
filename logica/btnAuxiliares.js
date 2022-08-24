//tomamos la fecha actual
function hoy(){
    let date = new Date();
    let midate=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay();
console.log("mi fecha "+midate);
document.getElementById("Fecha").value=midate;
}

//colocamos en cero el input "prestamo"
function no(){
    document.getElementById("Prestamo").value=0;
}

function blue(){
    document.getElementById("Precio").value=precioBlue;
}

//btn comandos
function Limpiar(){
    document.getElementById("Cantidad").value="";
    document.getElementById("Fecha").value="";
    document.getElementById("Vendedor").value="";
    document.getElementById("Precio").value="";
    document.getElementById("PesosUsados").value=0;
    document.getElementById("Prestamo").value=0;

    //limpiamos la seleccion de las tabla (sacamos el color rojo) y reiniciamos el objeto "tableSelect"
    document.getElementById("row"+jsonTableSelec.id).className=jsonTableSelec.seleccion;//reseteamos

    jsonTableSelec.seleccion="none";
    jsonTableSelec.id=0;

    
}

function guardar(){
    
}