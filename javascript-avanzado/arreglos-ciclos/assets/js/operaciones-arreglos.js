let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 321];

/* Equivalente .forEach
    for (let i = 0; i < numeros.length; i+2 ) {
    document.write(`${numeros[i]}<br>`);/
}; */

/* numeros.forEach( numero => {
    document.write(numero + ', ')

}); */

numeros.forEach(function(elemento, indice, arreglo) {
    document.write(elemento + ', ' + indice + ', ' + arreglo + '<br>')

});

let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
});

document.write('<br>' + numeros2);


/* 
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */


/* let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento) {
    return elemento;
});

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>'); */

/* includes */
document.write('<br>' + numeros.includes('hola') + '<br>');

/* filter
    crea un nuevo arreglo con cada uno de los elementos del arreglo que cumplen con una condicion dada*/

let numerosPares = numeros.filter((elemento) => {
    /* if (elemento % 2 == 0) {
        return true;
    } else {
        return false;
    } */
    /* console.log(elemento % 2 == 0);

    return elemento % 2 == 0; */

    if (elemento > 10) {
        return true;
    }
    
});

document.write('<br>' + numerosPares + '<br>');

let frutas = ['Mango', 'uva', 'piña','mandarina', 'aguacate', 'sandia'];

let frutasFiltro = frutas.filter((fruta) => {

    /* if (fruta.includes('i') == true) { //contains analiza el contenido del elemento
        return true;
    } */

    return fruta.toLowerCase().includes('m'); // forma abreviada de lo anterior y toLowerCase() Convierte el texto a minusculas


});


document.write('<br>' + frutasFiltro + '<br>');

/* sort */
let otrosNumeros = [0,9,8,3,7,5,1,2,4,6];

document.write('<br>' + otrosNumeros.sort() + '<br>'); // ordena siguiendo el valor del unicode

/* reverse invierte el orden de los elementos de un arerglo */
document.write('<br>' + numeros.reverse() + '<br>');

/* find  devuelve el primer elemento que cumpla con la condicion*/
let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLowerCase().includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br>');