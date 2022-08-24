function loadTable(){


    //37ahorros38@ pass de la data base

    //XMLHttpRequest
    /*
    const loadTable=new XMLHttpRequest();
    loadTable.open("GET", 'https://wkgsxsdapgmygmfkyakh.supabase.co/rest/v1/tabla?select=*',false);

    loadTable.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //aca no hay body
    //colocar la lectura de la respuesta
*/
//vaciamos la tabla 
document.getElementById("cuerpoTabla").innerHTML="";

    fetch('https://wkgsxsdapgmygmfkyakh.supabase.co/rest/v1/tabla?select=*', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ3N4c2RhcGdteWdtZmt5YWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2Mjg4NzAsImV4cCI6MTk3NjIwNDg3MH0.5iMlnD_adoSgZay_GEt-g7YTKtMuZuYgptE28a93OEQ'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }}).
    then(response => response.json()).
    then(data=>{
        
        let cont=0;

        data.forEach((element, index) => {
            
            cont++;
            document.getElementById("cuerpoTabla").innerHTML+=`
            <tr class="${colorRow}" id="row${index}" >
                <td onclick="selectRow(${index})">${cont}.</td>
                <td onclick="selectRow(${index})">${data[index].cantidad}$</td>
                <td onclick="selectRow(${index})">${data[index].fecha}</td>
                <td onclick="selectRow(${index})">${data[index].vendedor}</td>
                <td onclick="selectRow(${index})">${data[index].cotizacion}$</td>
                <td onclick="selectRow(${index})">${data[index].ahorro}$</td>
                <td onclick="selectRow(${index})">${data[index].prestamo}$</td>
                <td><button onclick="deleted(${data[index].id},${cont})"><ion-icon name="trash-outline"></ion-icon></button></td>

            </tr>
        `;
        
            sumar(data[index].cantidad);

        if(colorRow=="color1"){
            colorRow="color2";
        }else{
            colorRow="color1";
        }

        });
        
        calcularResumen();

        json = JSON.parse(JSON.stringify(data));
        return json;
        

    });

    
}

function deleted(number,contador){
    let pregunta=confirm(`Desea eliminar la fila ${contador}`);
    switch(pregunta){
        case true:
            fetch(`https://wkgsxsdapgmygmfkyakh.supabase.co/rest/v1/tabla?id=eq.${number}`, {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json',
                  'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ3N4c2RhcGdteWdtZmt5YWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2Mjg4NzAsImV4cCI6MTk3NjIwNDg3MH0.5iMlnD_adoSgZay_GEt-g7YTKtMuZuYgptE28a93OEQ'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                }}).then(response=>{
                    if(response.status==204){
                        alert("la fila se elimino correctamente!")
                    }else{
                        alert("Ocurrio un error al Eliminar la fila")
                    }
                })
            sumaAhorro=0;
            loadTable();

            break;
        case false:
            
            break;
    }
}