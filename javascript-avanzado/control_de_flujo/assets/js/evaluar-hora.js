/* pedir la hora por promt
evaluar la hora y responder
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */

let horaActual = parseInt(prompt('Que hora es?'));

if (horaActual >= 6 && horaActual <= 11) {
    document.write('Buenos dias');
} else if (horaActual >= 12 && horaActual <= 18) {
    document.write('Buenas tardes');
} else if (horaActual >= 19 && horaActual <= 23) {
    document.write('Buenas noches');
} else if (horaActual >= 0 && horaActual <= 5) {
    document.write('Dejame dormir');
} else if(isNaN(horaActual)) {
    alert('Solo se aceptan numeros');
} else {
    document.write('esa hora no es valida');
}