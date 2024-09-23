const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// 1. Imprimir en consola el número mayor de los tres.

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

// 2. Imprimir en consola el número menor de los tres.

if (numero1 < numero2 && numero1 < numero3) {
    console.log(numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

// 3. Imprimir en consola si el numero1 es par o impar.

if (numero1 % 2 === 0) {
    console.log("El número 1 es par");
} else {
    console.log("El número 1 es impar");
}

// 4. Imprimir en consola si el numero2 es par o impar.

if (numero2 % 2 === 0) {
    console.log("El número 2 es par");
} else {
    console.log("El número 2 es impar");
}

// 5. Imprimir en consola si el numero3 es par o impar.

if (numero3 % 2 === 0) {
    console.log("El número 3 es par");
} else {
    console.log("El número 3 es impar");
}

// 6. Imprimir en consola si el numero1 es múltiplo de 5.

if (numero1 % 5 === 0) {
    console.log("El número 1 es múltiplo de 5");
} else {
    console.log("El número 1 no es múltiplo de 5");
}

// 7. Imprimir en consola si el numero2 es múltiplo de 5.

if (numero2 % 5 === 0) {
    console.log("El número 2 es múltiplo de 5");
} else {
    console.log("El número 2 no es múltiplo de 5");
}

// 8. Imprimir en consola si el numero3 es múltiplo de 5.

if (numero3 % 5 === 0) {
    console.log("El número 3 es múltiplo de 5!!! :D");
} else {
    console.log("El número 3 no es múltiplo de 5!!! :C");
}