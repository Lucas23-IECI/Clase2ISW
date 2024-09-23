// 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.

function sumaNumeros(numeros) {
    let suma=0;
    for (let i=0; i<numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
const resultado= sumaNumeros([1, 2, 3, 4, 5]);
console.log(resultado);

// 2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.

function promedioNumeros(numeros) {
    let suma=0;
    for (let i=0; i<numeros.length; i++) {
        suma+=numeros[i];
    }
    return suma/numeros.length;
}
const resultado2= promedioNumeros([1, 2, 3, 4, 5]);
console.log(resultado2);

// 3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.

function mayusculasStrings(strings) {
    const nuevoArray = [];
    for (let i=0; i<strings.length; i++) {
        nuevoArray.push(strings[i].toUpperCase());
    }
    return nuevoArray;
}
const resultado3 =mayusculasStrings(["hola", "mundo"]);
console.log(resultado3);

// 4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

function numerosPares(numeros) {
    const nuevoArray = [];
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i]%2===0) {
            nuevoArray.push(numeros[i]);
        }
    }
    return nuevoArray;
}
const resultado4 =numerosPares([1, 2, 3, 4, 5]);
console.log(resultado4);
