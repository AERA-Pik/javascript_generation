/* let miObjeto = {
    //pares de clave valor 
    nombre: 'Aaron Eduardo'

} */

let nombre = 'Aaron Eduardo';
let edad = 27;
let direccion = 'Ciudad de Mexico';
let numero = 4324123421;


console.log(nombre);


/* {} Obejeto - []Arreglo */
let persona = {
    nombre: {
        apellidoPaterno: 'Ramirez',
        apellidoMaterno: 'Alcala',
        nombre: 'Aaron Eduardo',
    },
    edad: 27,
    direccion: {
        Ciudad: 'Tlalpan',
        Estado: 'Ciudad de Mexico',
    },
    numero: [
        4324123421,
        2313131231,
    ]
};

console.log(persona.nombre);


let Monitor = {
    marca: 'HP',
    tamaño: '27 pulgadas',
    resolucion: '1920x1080',
    frecuencias: [
        '60 Hz',
        '75 Hz',
    ],
    superficie: 'Curvada',
    puertos: {
        hdmi: 1 ,
        display: 1,
        vga: 1,
    }
}