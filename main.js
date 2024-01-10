let nombre = prompt("¡Bienvenido al VerdurasShop! Ingresa tu nombre a continuación:");
let afiliacion = prompt("¿Estás afiliado?");

const ver1 = { nombre: "palta", precio: 4000, }

const ver2 = { nombre: "pepino", precio: 3000, }

const ver3 = { nombre: "tomate", precio: 3500, }

const ver4 = { nombre: "porotos", precio: 2100, }

//reduce usa acc para accumulate, item como parametros
const calcularPrecioTotal = (carrito) => {
    const precioTotal = cart.reduce((acc, producto) => acc + producto.precioProducto * producto.cantidadProducto, 0);
    return precioTotal;
  };

const seleccionProducto = () => {
    const nombreProducto = prompt("Escoge el producto que buscas desde la lista a continuación: palta, pepino, tomate, porotos");
    const cantidadProducto = parseInt(prompt("¿Cuántos kilos quieres?"));
  
    return { nombre: nombreProducto, precio: precioProducto, cantidad: cantidadProducto };
  };


const carritoVerduras = [];
  
  // Prompt the user to add items to the cart
const agregarProductosCarrito = () => {
    const numProductos = parseInt(prompt("¿Cuantos productos deseas agregar?"));
  
    for (let i = 0; i < numItems; i++) {
      const nuevoProducto = promptForItem();
      carritoVerduras.push(nuevoProducto);
    }
};

agregarProductosCarrito();
  
console.log("Productos en tu carrito:");
console.log(carritoVerduras);
  

const precioTotal = calcularPrecioTotal(carritoVerduras);
console.log(`Precio total: $${precioTotal}`);


if (afiliacion = "si") {
    const descAfiliado = 10;
    const descuento = (descAfiliado / 100) * precioTotal;
    precioFinal = precioTotal - descuento;
    alert("¡Felicidades, tienes un 10% de descuento en tu compra total!");
  } else {
    precioFinal = precioTotal;
}

console.log(`Precio final: $${precioFinal}`);






// to do list:
// high order function ????
// prompt check
// math equation check
// function if else check