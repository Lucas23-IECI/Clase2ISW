// 1. Crea una función que reciba un string y retorne el string en mayúsculas.

function mayusculas(string) {
  return string.toUpperCase();
}
const resultado=mayusculas("hola");
console.log(resultado);

// 2. Crea una función que reciba un string y retorne el string en minúsculas.

function minusculas(string) {
  return string.toLowerCase();
}
const resultado2=minusculas("HOLA");
console.log(resultado2);

// 3. Crear una función que reciba como parámetro 2 números y los reste.

function resta(numero1, numero2) {
  return numero1-numero2;
}
const resultado3=resta(10, 5);
console.log(resultado3);

// 4. Crear una función que reciba como parámetro 2 números y los divida.

function division(numero1, numero2) {
  return numero1/numero2;
}
const resultado4=division(10, 2);
console.log(resultado4);

// 5. Crear una función que reciba como parámetro 2 números y los multiplique.

function multiplicacion(numero1, numero2) {
  return numero1*numero2;
}
const resultado5=multiplicacion(10, 2);
console.log(resultado5);

// 6. Crear una función que reciba un string y devuelva la longitud del string.

function longitud(string) {
  return string.length;
}
const resultado6=longitud("hola");
console.log(resultado6);