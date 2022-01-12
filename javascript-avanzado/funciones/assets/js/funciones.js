/* Funcion
    Es un bloque de codigo reutilizable
    puede o no tener parametros de entrada
    puede devolver o no un valor */

function sumar(numero1, numero2) {
    //operaciones o codigo a ejecutar
    return numero1 + numero2; // resturn sale de la funcion
    console.log('Hola desde la funcion'); // no se ejecta el codigo despues del return
};

function restar(numero1, numero2) {
    document.write(`la resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);

}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar (numero1, numero2);

//template string `` permite escribir escribir codigo javascript dentro de un ${} y html
document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);
restar(numero1, numero2);

