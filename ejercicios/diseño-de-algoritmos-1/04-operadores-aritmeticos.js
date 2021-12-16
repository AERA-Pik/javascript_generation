/*

Operadores aritmeticos nos sirven para hacer operaciones
    + Sirve para sumar o concatenar
    - Sirve para restar numeros
    * Sirve para multiplicar 2 numeros
    % Modulo nos sirve para obtener el residuo de una division
    / division nos sirve para dividir dos numeros

*/

const numero1 = parseInt(prompt("Ingresa el numero 1"));
const numero2 = parseInt(prompt("Ingresa el numero 2"));
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplica = numero1  * numero2;
const modulo = numero1 % numero2; 
const division = numero1 / numero2; 

console.log("Numero 1: " + numero1);
console.log("Numero 2: " + numero2);
console.log('Suma: ' + suma);
console.log('Resta: ' + resta);
console.log('Multiplicacion: ' + multiplica);
console.log('modulo: ' + modulo);
console.log('division: ' + division);

/* 
Operadores logicos
 AND (&&)
 OR (||)
 NOT (!)
*/