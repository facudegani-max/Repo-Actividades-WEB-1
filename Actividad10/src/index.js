
//Verificar si la variable edad es mayor o igual a 18
const edad = 20;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//Verificar si la variable numero es par o impar
const numero = 7;

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

//Comprobar la variable nota (Reprobado, Aprobado, Excelente)
const nota = 8;

if (nota < 4) {
  console.log("Reprobado");
} else if (nota >= 4 && nota <= 7) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}

console.log("\n--- BUCLES ---");

//Imprimir los números del 1 al 10
console.log("Punto 4.1: Del 1 al 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Imprimir los números del 10 al 1 en orden descendente
console.log("\nPunto 4.3: Del 10 al 1");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Bucle de 20 iteraciones sabiendo si es par o impar
console.log("\nPunto 4.5: Par o impar (0 al 19)");
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

//Modificación del punto anterior usando template literals
console.log("\nPunto 4.7: Concatena con template literals");
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}