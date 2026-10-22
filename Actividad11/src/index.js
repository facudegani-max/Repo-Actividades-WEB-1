
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
let Ingresar = esMayorDeEdad(20);
console.log(`¿Es mayor de edad?: ${Ingresar}`); 

const esMayorDeEdadFlecha = (edad) => edad >= 18;

const compararNumeros = (num1, num2) => {
  if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}`);
  } else if (num1 === num2) {
    console.log(`El número ${num1} es igual que ${num2}`);
  } else {
    console.log(`El número ${num1} es mayor que ${num2}`);
  }
};


const numeroFijo = 3;
console.log("--- Bucle de prueba de comparación ---");
for (let i = 1; i <= 5; i++) {
  compararNumeros(i, numeroFijo);
}


// 3. FUNCIONES CALLBACK

// a
const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};

const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};


const operacion = (num1, num2, callback) => {
  
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    console.log("Debe ingresar solo números.");
    return;
  }
  callback(num1, num2);
};

console.log("--- Pruebas de Callbacks ---");
operacion(10, 5, suma);   
operacion(10, 5, resta);  
operacion("10", 5, suma); 