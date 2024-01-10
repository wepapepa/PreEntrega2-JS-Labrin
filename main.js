let nombre = prompt("¡Bienvenido al VerdurasShop! Ingresa tu nombre a continuación:");
let afiliacion = prompt("¿Estás afiliado?");

const ver1 = { nombre: "palta", precio: 4000 };

const ver2 = { nombre: "pepino", precio: 3000 };

const ver3 = { nombre: "tomate", precio: 3500 };

const ver4 = { nombre: "porotos", precio: 2100 };

const calcularPrecioTotal = (carrito) => {
  const precioTotal = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  return precioTotal;
};

const seleccionProducto = () => {
  const nombreProducto = prompt("Escoge el producto que buscas desde la lista a continuación: palta, pepino, tomate, porotos");
  const cantidadProducto = parseInt(prompt("¿Cuántos kilos quieres?"));

  // Buscar el objeto correspondiente al producto seleccionado
  let productoSeleccionado;
  switch (nombreProducto) {
    case "palta":
      productoSeleccionado = ver1;
      break;
    case "pepino":
      productoSeleccionado = ver2;
      break;
    case "tomate":
      productoSeleccionado = ver3;
      break;
    case "porotos":
      productoSeleccionado = ver4;
      break;
    default:
      alert("Producto no reconocido");
      return;
  }

  return { nombre: nombreProducto, precio: productoSeleccionado.precio, cantidad: cantidadProducto };
};

const carritoVerduras = [];

const agregarProductosCarrito = () => {
  const numProductos = parseInt(prompt("¿Cuantos productos deseas agregar?"));

  for (let i = 0; i < numProductos; i++) {
    const nuevoProducto = seleccionProducto();
    carritoVerduras.push(nuevoProducto);
  }
};

agregarProductosCarrito();

console.log("Productos en tu carrito:");
console.log(carritoVerduras);

const precioTotal = calcularPrecioTotal(carritoVerduras);
console.log(`Precio total: $${precioTotal}`);

let precioFinal;

if (afiliacion === "si") {
  const descAfiliado = 10;
  const descuento = (descAfiliado / 100) * precioTotal;
  precioFinal = precioTotal - descuento;
  alert("¡Felicidades, tienes un 10% de descuento en tu compra total!");
} else {
  precioFinal = precioTotal;
}

console.log(`Precio final: $${precioFinal}`);
