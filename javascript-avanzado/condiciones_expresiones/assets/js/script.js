/* Operadores Aritmeticos */
// + - / * % ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion)

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales */
// <, >, >=, <+, ==, ===. !=. !==
// boolean true false

console.log(7 < 7); // no incluye el numero a comparar
console.log(7 <= 7);// incluyendo el numero a comparar

console.log(7 == '7');// compara valor
console.log(7 === '7');// compara valor y tipo de dato

console.log(7 != '7');
console.log(7 !== '7');

/* incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 5; // incremento = incremento + 5
console.log(incremento);//10

incremento -= 5;
console.log(incremento);//5

incremento *= 5;
console.log(incremento);//25

incremento /= 5;
console.log(incremento); //5

/* operador unario */
// ++. --
//sumar uno, restar uno

let sumar = 0;
console.log(sumar + " linea 44");
sumar++;
console.log(sumar + " linea 46");
sumar++;
console.log(sumar + " linea 48");
sumar--;
sumar--;
sumar--;
console.log(sumar + " linea 50");


/*  */
for (let i = 0; i < 10; i++){
    /* CODIGO */
}

/* 
++variable = preincremento -primero modifica el valor y ya despues hace uso de la variable
variable++ = postincremento - usando la variable y despues hace el incremento */
let num = 5;
console.log(++num);

for (let i = 0; i < 5; i++) {
    //iteracion
    //primer iteracion, se detiene
    console.log('Este es el ciclo padre')
    for (let j = 0; j < 5; j++) {
        //hace sus iteraciones (repeticiones) propias
        console.log('Este es el ciclo hijo');
    }
}