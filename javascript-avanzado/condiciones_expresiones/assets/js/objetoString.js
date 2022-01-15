let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String('Adios'); //Objeto String
console.log(cadena2);

//include() busca una cadena en otra y regesa true o false
console.log(cadena2.toLowerCase().includes('a'));
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//cohersion y conversion

//cohersion - javaScript - JavaScript convierte en automatico un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Funcion que recibe una palabra y la regresa invertida */

let palabra = 'Hola Mundo';
let arreglo = palabra.split('');
/* console.log(arreglo);
console.log(arreglo.reverse());

console.log(arreglo.reverse().join(''));
 */
function invertirPalabra(cadena){
    let arreglo = cadena.split(""); // convirtiendo la cadena en un arregle
    arreglo.reverse();//invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); // ine los elementos de un arreglo y regresa un string
    return console.log(cadenaInvertida);
}

invertirPalabra("Generation");

/* let userWord = prompt('Ingresa una palabra');
let userArray = userWord.split();

let reverseWord = userArray.reverse('');
reverseWord.join('');
document.write(`Tu palabra invertida es ${reverseWord}`); */

/* function reverseWord(){
    let userArray = word.split('');
    userArray.reverse()
    let reverseUserWord = userArray.join('');
    return document.write(`Tu palabra invertida es ${reverseUserWord}`)

}; */