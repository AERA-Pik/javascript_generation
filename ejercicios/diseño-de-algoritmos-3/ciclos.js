/* ciclos - bucles - loops
while
do while
for
*/

//While
/* 
*let condition = 1;  - valor inicial
while (condicion){\
    tu codigo
}
*/

//imprimir todos los numeros del 1 al 10

/* let condicion = 11; 

while (condicion <= 10){
    console.log(condicion);
    condicion ++;
} */

/* let numero = 1 
numero ++; //2  numero = numero + 1
console.log(numero);
numero ++;
console.log(numero);
numero ++;
console.log(numero);
numero --;
console.log(numero);
numero --;
console.log(numero);
numero --;
console.log(numero);
 */
// do while

/* let numero = 1;

do {
    console.log (numero);
    numero ++;
} while ( numero <= 10); */

/* for
utiliza contador */

/* for (let control = 1; control <= 10; control ++ ){
    console.log(control);
}
 */
const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for(let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}