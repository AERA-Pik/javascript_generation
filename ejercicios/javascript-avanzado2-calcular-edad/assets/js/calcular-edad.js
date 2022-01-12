/* 1. Almacenar el año actual en una variable. Pedirle al usuario su edad y calcular su edad.
 */

let actualYear = 2022;

function getAge() {    
    let bornYear = parseInt(prompt("En que Año naciste?"));
    let userAge = actualYear - bornYear;
    console.log(userAge);
    age.textContent = 'Tienes ' + userAge + ' años';
};

