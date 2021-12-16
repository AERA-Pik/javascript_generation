/* 
Condicionales
if (condition) {
    bloque
} else if() {

} else {

}
*/
function procesadorDeFrutas(manzanas, naranjas){
    let jugo = 'Jugo de ' + manzanas + 'manzanas y ' + naranjas + "naranjas";
    return jugo;
}

let  juegoDeManzana = procesadorDeFrutas (4,0);
console.log(juegoDeManzana);

let  juegoDeNaranja = procesadorDeFrutas (0,5);
console.log(juegoDeNaranja);