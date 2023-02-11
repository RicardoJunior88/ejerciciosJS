let numeroVentas= prompt("Ingrese el número de ventas a realizar")
var resultado =0
for (let i =0; i< numeroVentas; i++){
    let venta = prompt("Introduzca la cantidad de la venta")
    resultado = resultado + parseInt(venta) 
}
document.write("la suma de todas las ventas es: " + resultado)