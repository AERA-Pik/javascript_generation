/* Arrow function 
    Funcion de flecha
*/

//funcion normal-legacy
/* function sumar(numero1, numero2) {
    //operaciones o codigo a ejecutar
    return numero1 + numero2; // resturn sale de la funcion
    console.log('Hola desde la funcion'); // no se ejecta el codigo despues del return
}; */


// nosaoda

const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar (numero1, numero2);

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`)