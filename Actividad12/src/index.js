
// ARREGLOS 

/* 
// a
const numeros = [];

for (let i = 0; i < 5; i++) {
  const entrada = prompt(`Ingrese el número ${i + 1} de 5:`);
  const numero = Number(entrada);
  numeros.push(numero);
}

console.log("Arreglo completo:", numeros);
*/

/*
// b
const numerosImpares = [];

for (let i = 0; i < 5; i++) {
  const entrada = prompt(`Ingrese el número ${i + 1} de 5:`);
  const numero = Number(entrada);

  if (numero % 2 !== 0) {
    numerosImpares.push(numero);
  }
}

console.log("Arreglo impares:", numerosImpares);
*/

/*
// c
const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
  frutas[indice] = fruta.toUpperCase();
});

console.log("Arreglo modificado con forEach:", frutas);
*/

/*
// d
const frutasOriginales = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasOriginales.map((fruta) => fruta.toUpperCase());

console.log("Nuevo arreglo:", frutasMayusculas);
console.log("Arreglo original:", frutasOriginales);
*/

/*
// e
const frutasLista = ["pera", "manzana", "banana", "durazno"];

const frutasConNa = frutasLista.filter((fruta) => fruta.includes("na"));

console.log("Frutas que contienen 'na':", frutasConNa);
*/

// OBJETOS

/*
// a
const producto = {
  nombre: "Remera Oversize Cotton",
  precio: 25000,
  stock: 8,
  talles: ["S", "M", "L"]
};
console.log("Producto individual:", producto);
*/


// b 
const productos = [
  { nombre: "Buzo Hoodie Heavy", precio: 45000, stock: 3, talles: ["S", "M", "L"] },
  { nombre: "Pantalón Cargo Black", precio: 38000, stock: 12, talles: ["S", "M", "L"] },
  { nombre: "Campera Denim Vintage", precio: 62000, stock: 2, talles: ["S", "M", "L"] },
  { nombre: "Remera Basic White", precio: 18000, stock: 15, talles: ["S", "M", "L"] }
];

console.log("--- Productos con stock menor a 5 ---");

productos.forEach((prod) => {
  if (prod.stock < 5) {
    console.log(`Producto: ${prod.nombre} | Stock: ${prod.stock}`);
  }
});

// c
const productosConDescuento = productos.map((prod) => {
  return {
    ...prod, 
    precio: prod.precio * 0.90 
  };
});

console.log("Arreglo con 10% de descuento:", productosConDescuento);

// d
const productosStockAlto = productos.filter((prod) => prod.stock > 10);

console.log("Arreglo con stock mayor a 10:", productosStockAlto);




