// utilizar modulos tiene una restriccion, se necesita hacer una peticion http para que funcione (peticion a un servidor), no funciona de manera local
import {sumar, mostrarResultado, multiplicar} from './calculadora.js'
let resultado = sumar(10,20);
console.log(resultado);

let resultadoMultiplicar = multiplicar(12,46)

mostrarResultado('multiplicacion',12,46,resultadoMultiplicar);

 