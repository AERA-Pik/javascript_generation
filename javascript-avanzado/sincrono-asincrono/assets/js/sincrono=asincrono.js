/* Codigo Sincrono */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* codigi asincrono */
let variableAsincrona;

setTimeout(() => {
    variableAsincrona = 10 * 3;
},2000)

setTimeout(() => {
    console.log(variableAsincrona);
},2001)
console.log(variableAsincrona);
