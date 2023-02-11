let precio = prompt("Ingrese el precio del producto");
const IVA = 0.21;
let precioFinal= (precio * IVA) + parseInt(precio)
document.write(precioFinal)