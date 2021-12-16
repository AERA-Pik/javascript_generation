/* 
Condicionales se utilizan para tomar decisiones dentro de 
nuestro programa */

/* if(condicion){
    codigo;
    codigo;
    codigo;
} */

let edad = parseInt(prompt('¿Cual es tu edad?'));

if (edad >= 18 && edad < 30) {
    document.write('Eres un joven');
} else if (edad > 30 && edad < 60) {
    document.write('Eres un adulto');
} else if (edad >= 60 && edad < 99) {
    document.write('Eres un adulto mayor');
} else if (edad > 120) {
    document.write('Eres Matusalén');
} else {
    document.write('Eres un niño');
}