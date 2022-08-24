//realizamos los calculos para mostrar en la tabla resumen

function sumar(valor){//suma los  dolares de cada mes, guardandolo en la variable "sumarAhorro"
    sumaAhorro+=valor;
}

function calcularResumen(){
    faltaAhorrar=meta-sumaAhorro;

    if(faltaAhorrar>0){
        document.getElementById("resumen").innerHTML=`

        <tr>
            <td>${sumaAhorro}$</td>
            <td>${meta}$</td>
            <td>${faltaAhorrar}$ <text class="textoRojo"> (No se cumplio la meta!)</text></td>
        <tr>
    `;
    }else{

        let sobra=0;
        if(faltaAhorrar==0){
            sobra=faltaAhorrar;
        }else{
            sobra=faltaAhorrar*-1;
        }


        document.getElementById("resumen").innerHTML=`

        <tr>
            <td>${sumaAhorro}$</td>
            <td>${meta}$</td>
            <td>${faltaAhorrar}$ <text class="textoVerde"> Se cumplio la meta! (te pasaste=${sobra})</text></td>
        <tr>
    `;
    }
}