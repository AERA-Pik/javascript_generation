/* let numeroPropuesto = 80;
let numeroUsuario = document.getElementById("numero"); */
/* console.log(numeroUsuario); */


/* function adivinar() {
    console.log(numeroUsuario.value);
    let numero = parseInt(numeroUsuario.value)
    switch ((numeroUsuario.value)){
        case (numeroUsuario == numeroPropuesto):
            document.getElementById('resultado').innerHTML=`Felicidades, adivinaste el número secreto`
            break;

        case ((numeroPropuesto - numeroUsuario <= 5) || (numeroUsuario - numeroPropuesto <= 5)):
            document.getElementById('resultado').innerHTML=`Calienteeeeeeee`
            break;

        case ((numeroPropuesto - numeroUsuario <= 10) || (numeroUsuario - numeroPropuesto <= 10)):
            document.getElementById('respuesta').innerHTML=`Caliente`
            break;

        case ((numeroPropuesto - numeroUsuario <= 20) || (numeroUsuario - numeroPropuesto <= 20)):
            document.getElementById('resultado').innerHTML=`Tibio`
            break;

        case ((numeroPropuesto - numeroUsuario <= 30) || (numeroUsuario - numeroPropuesto <= 30)):
            document.getElementById('resultado').innerHTML=`Frio`
            break;

        case ((numeroPropuesto - numeroUsuario <= 5) || (numeroUsuario - numeroPropuesto <= 5)):
            document.getElementById('resultado').innerHTML=`Congelado`
            break;    

        default:
            document.getElementById('resultado').innerHTML=`opcion invalida`
            break;
    }
} */

function random (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
    //Math.random Numero aleatorio entre o y 1
    //Mat.floor te da el numero entero más cercano
}
let numeroSec =random (20, 40);
console.log(numeroSec);


function adivina () {
    let numeroObt = document.getElementById('numero');
    let numero1 = parseInt(numeroObt.value);
    console.log(numero1);
    let diferencia = Math.abs(numero1 - numeroSec);
    if (numero1 == numeroSec) {
        document.getElementById('resultado').innerHTML = `Felicidades, adivinaste el numero secreto`;
    } else if (diferencia <= 5) {
        document.getElementById('resultado').innerHTML = `Calienteeeeee`;
    } else if (diferencia <= 10) {
        document.getElementById('resultado').innerHTML = `Caliente`;
    } else if (diferencia <= 20) {
        document.getElementById('resultado').innerHTML = `Tibio`;
    } else if (diferencia <= 30) {
        document.getElementById('resultado').innerHTML = `Frio`;
    } else if (diferencia >= 30) {
        document.getElementById('resultado').innerHTML = `Congelado`;
    }
}