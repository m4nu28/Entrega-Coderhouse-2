// Verificacion de la edad del cliente
let edadCliente = parseInt(prompt('Ingrese su edad'));

const MAYOR_EDAD = 18;
const EDAD_MAXIMA = 65;

if (edadCliente >= MAYOR_EDAD && edadCliente <= EDAD_MAXIMA) {
    alert('Para continuar con su compra elija su producto.');
} else {
    alert('La página es solamente para usuarios de entre 18 y 65 años, entrada DENEGADA.');
}

// Array para almacenar los productos en el carrito
const carrito = [];

function agregarProducto(nombre, precio, cantidad) {
    carrito.push({ nombre, precio, cantidad });
}

function calcularTotal() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio * producto.cantidad;
    }
    return total;
}

function aplicarDescuento(total, cantidad) {
    if (cantidad >= 5) {
        return total * 0.8;
    }
    return total;
}

let continuar = 'si';

while (continuar === 'si') {
    const nombreProducto = prompt('Ingrese el nombre del producto deseado');
    const precioProducto = parseFloat(prompt('Ingrese el precio del producto deseado'));
    const cantidadProducto = parseInt(prompt('Ingrese la cantidad de productos deseados. NOTA: Si lleva 5 o más productos de un mismo tipo, tendrá un 20% de descuento en la totalidad de la compra.'));

    if (isNaN(precioProducto) || isNaN(cantidadProducto)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        continue;
    }

    agregarProducto(nombreProducto, precioProducto, cantidadProducto);
    continuar = prompt('Desea continuar con su compra? [Si/No]');
}

const totalCompra = calcularTotal();
const totalConDescuento = aplicarDescuento(totalCompra, carrito.reduce((total, producto) => total + producto.cantidad, 0));

alert(`El valor total de su compra es: $${totalCompra}`);
alert(`El valor total con descuento es: $${totalConDescuento}`);