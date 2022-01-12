let nombre = 'Aaron Eduardo';
let edad = 26;
let tienesTrabajo = true;
let variableNull = null;
let variableUndefined;

console.log(typeof (nombre)); //String
console.log(typeof (edad)); //Number
console.log(typeof (tienesTrabajo));//Boolean
console.log(typeof (variableNull)); 
console.log(typeof (variableUndefined));

/* igualdad regular == (compara el valor) */
console.log(variableNull == variableUndefined);
console.log('1' == 1);

/* Igualdad estricta === (Compara el valor y el tipo de dato)*/
console.log(variableNull === variableUndefined);
console.log('1' === 1);
console.log(0 === false);

console.log(typeof(10+10));
console.log(typeof('10'+10));
console.log(parseInt('12'));

let numero = 10;
console.log(numero.toString());