function invertirPalabra(palabra){
    let arreglo = palabra.split('');
    arreglo.reverse();
    let cadenaInvertida = arreglo.join('');
    return cadenaInvertida;
};

let palabra = prompt('Ingresa una palabra');
invertirPalabra(palabra)
document.write(`tu palabra invertida es ${palabraInvertida}`)

/* function reverseWord(){
    let userArray = word.split('');
    userArray.reverse()
    let reverseUserWord = userArray.join('');
    return document.write(`Tu palabra invertida es ${reverseUserWord}`)

}; */