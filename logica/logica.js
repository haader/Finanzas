


var precioBlue=0;

/*
const myHeaders = new Headers();

myHeaders.append('Content-Type', 'text/xml');
*/

//cargar los datos del banner utilizando una API

fetch("https://api.bluelytics.com.ar/v2/latest")
.then(response => response.json())
.then(json=>
  {
  console.log(json)
  console.log("Blue: ");
  console.log("Venta "+json.blue.value_sell);
  console.log("Compra "+json.blue.value_buy);
  document.getElementById("BCompra").innerText=json.blue.value_buy+"$";
  document.getElementById("BVenta").innerText=json.blue.value_sell+"$";
  precioBlue=json.blue.value_sell;
  console.log("");

  console.log("Oficial: ");
  console.log("Venta "+json.oficial.value_sell);
  console.log("Compra "+json.oficial.value_buy);
  document.getElementById("OCompra").innerText=json.oficial.value_buy+"$";
  
  console.log("");

  console.log("Oficial (+75%): ");
  console.log("Venta "+(json.oficial.value_sell)*1.75);
  document.getElementById("OVenta").innerText=((json.oficial.value_sell)*1.75)+" $ (+75%)";

  console.log("");

    let hora=json.last_update;
    
  console.log("Actualizado: "+json.last_update);
  document.getElementById("hora").innerText=hora.slice(11,19)+" del "+hora.slice(0,10);


  });
//.then(data=>console.log(data.json()));


/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
*/





/*

// datos mandados con la solicutud POST
let _datos = {
  titulo: "foo",
  principal: "bar", 
  Id:1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify(_datos),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
.catch(err => console.log(err));

*/