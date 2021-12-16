/* Tomar los números de un arreglo llamado 'numeros', 
[1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
 */

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
let resultados = [];

for (let i = 0; i < numeros.length; i++){
    resultados [i] = numeros [i] * 2;
    console.log(resultados[i]);
}