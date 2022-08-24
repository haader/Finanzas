//creamos la funcion de la tabla cuando realizamos click
function selectRow(index){

    document.getElementById("Cantidad").value=json[index].cantidad;
    document.getElementById("Fecha").value=json[index].fecha;
    document.getElementById("Vendedor").value=json[index].vendedor;
    document.getElementById("Precio").value=json[index].cotizacion;
    document.getElementById("PesosUsados").value=json[index].ahorro;
    document.getElementById("Prestamo").value=json[index].prestamo;

    if(jsonTableSelec.seleccion=="none"){
        jsonTableSelec.seleccion=document.getElementById("row"+index).className;//clase=>jsonTableSelec.seleccion
        document.getElementById("row"+index).className="colorSelect";//clase=>colorSelect
        jsonTableSelec.id=index;//guardamos el id de seleccion
    }else{
        document.getElementById("row"+jsonTableSelec.id).className=jsonTableSelec.seleccion;//reseteamos
        jsonTableSelec.seleccion=document.getElementById("row"+index).className;//clase=>jsonTableSelec.seleccion
        document.getElementById("row"+index).className="colorSelect";//clase=>colorSelect
        jsonTableSelec.id=index;//guardamos el id de seleccion
    }
    
    //cuando se selecciona una ROW se habilita "btn guardar" y se deshabilita el btn "agregar"
    

}


//traemos los datos de la database y lo renderizamos

//guardamos el dato del ide mas alto