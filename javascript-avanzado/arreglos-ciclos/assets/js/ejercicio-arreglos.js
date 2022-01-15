/* Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
 */

let numeros = new Array();
numeros = [6, 69, 16, 33, 2, 59, 48, 79, 55, 50, 18, 26, 87, 22, 6,5, 67, 57, 97, 84, 9];
let suma = 0;

/* for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}; */

numeros.forEach(numero => {
    suma = suma + numero;    
});

let promedio = suma / numeros.length;

document.write(`El arreglo contiene los numeros: ${numeros} <br>`);
document.write(`La suma de los numeros es: ${suma} <br>`);
document.write(`El promedio de los numeros es: ${promedio}`);