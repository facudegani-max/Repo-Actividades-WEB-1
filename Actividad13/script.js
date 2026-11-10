
//DOM 

const botonAgregar = document.querySelector("main button");
const contadorCarrito = document.querySelector("header nav span");

const CLAVE_CARRITO = "cantidadCarrito";


//PERSISTENCIA

function obtenerCantidadGuardada() {
  const valorGuardado = localStorage.getItem(CLAVE_CARRITO);
  const cantidad = parseInt(valorGuardado, 10);
  return Number.isNaN(cantidad) ? 0 : cantidad;
}

function guardarCantidad(cantidad) {
  localStorage.setItem(CLAVE_CARRITO, cantidad);
}

//Interfaz

let cantidadArticulos = obtenerCantidadGuardada();


function actualizarContador() {
  contadorCarrito.textContent = cantidadArticulos;
}


botonAgregar.addEventListener("click", () => {
  cantidadArticulos++;
  actualizarContador();
  guardarCantidad(cantidadArticulos);
});

actualizarContador();
