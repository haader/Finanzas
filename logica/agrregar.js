//declaramos las variables 

let cantidad=0,fecha="",vendedor="",precio=0,pesosUsados=0,Prestamo=0;

//creamos variables que almacenan los input


let inVendedor=document.getElementById("Vendedor").value;
let inpesosUsados=document.getElementById("PesosUsados");
let inPrestamo=document.getElementById("Prestamo").value;

//funcion que al tipear se calcule (pesos usados=cantidad por precio)
function calcular(){
    let inCantidad=document.getElementById("Cantidad").value;
    let inPrecio=document.getElementById("Precio").value;
    
    if((inCantidad!=0)&&(inPrecio!=0)){
        inpesosUsados.value=inCantidad*inPrecio;
        
        
    }
    
}

//funcion que envia los datos al apretar guardar
            //renderiza la tabla

function agregar(){    

    //capturamos los valores del form
    
    cantidad=document.getElementById("Cantidad").value;
    fecha=document.getElementById("Fecha").value;
    vendedor=document.getElementById("Vendedor").value;
    cotizacion=document.getElementById("Precio").value;
    ahorro=document.getElementById("PesosUsados").value;
    Prestamo=document.getElementById("Prestamo").value;

    let body=`
    {"fecha":"${fecha}","cantidad":${cantidad},"vendedor":"${vendedor}","cotizacion":${cotizacion},"ahorro": ${ahorro},"prestamo":${Prestamo}}
    `;
    console.log("url= "+url);
    //enviamos los datos por metodo post

    //traemos los datos de "supaBase"
    console.log("body: "+body);

    //renderizamos la tabla
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(body);

    http.onreadystatechange = (e) => {
        if(http.responseText!=""){
            alert("hubo un error!");
        }else{alert("los datos se guardaron correctamente!")}
        console.log("Error: "+http.responseText);
        loadTable();//luego de guardar los nuevos datos renderizamos la tabla
      }

    
    
   

}