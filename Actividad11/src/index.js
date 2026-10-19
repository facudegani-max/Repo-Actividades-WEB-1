
// 1. FUNCIONES DE DECLARACIÓN

// a
function saludar() {
  console.log("¡Hola, bienvenido!");
}

// b
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}

// c
function esMayorDeEdad(edad) {
  return edad >= 18;
}

// 2.FUNCIONES FLECHA 

// a
saludar(); 
saludarPersona("Andrés"); 

// b
let puedeIngresar = esMayorDeEdad(20);
console.log(`¿Es mayor de edad?: ${puedeIngresar}`); 

const esMayorDeEdadFlecha = (edad) => edad >= 18;


const compararNumeros = (parametro1, parametro2) => {
  if (parametro1 < parametro2) {
    console.log(`El número ${parametro1} es menor que ${parametro2}`);
  } else if (parametro1 === parametro2) {
    console.log(`El número ${parametro1} es igual que ${parametro2}`);
  } else {
    console.log(`El número ${parametro1} es mayor que ${parametro2}`);
  }
};


// f. Probar dentro de un bucle usando el iterador como primer parámetro
const numeroFijo = 3;
console.log("--- Bucle de prueba de comparación ---");
for (let i = 1; i <= 5; i++) {
  compararNumeros(i, numeroFijo);
}



// ==========================================
// 3. FUNCIONES CALLBACK
// ==========================================

// Callbacks para suma y resta
const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};

const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};

// a y b (mejorado). Función operacion con verificación de tipos
const operacion = (num1, num2, callback) => {
  // Verificación para asegurar que los argumentos sean números válidos
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    console.log("Debe ingresar solo números.");
    return;
  }

  // Si son números válidos, ejecuta el callback
  callback(num1, num2);
};

// Pruebas Punto 3:
console.log("--- Pruebas de Callbacks ---");
operacion(10, 5, suma);   // Imprime: El resultado de la suma es 15
operacion(10, 5, resta);  // Imprime: El resultado de la resta es 5
operacion("10", 5, suma); // Imprime: Debe ingresar solo números.