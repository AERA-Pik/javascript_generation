/* Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
cupón equivocado
*/

let precio = parseFloat(prompt('Introduce el precio del producto'));
let cuponDescuento = prompt('Introduce tu cupon');
let descuento;

switch(cuponDescuento) {
    case 'Bronce':
        descuento = 0.05
        break;

    case 'Plata':
        descuento = 0.10
        break;
        
    case 'Oro':
        descuento = 0.20
        break;

    case 'Platino':
        descuento = 0.25
        break;
    
    default:
        alert('El cupón no es válido')
        break;
}

let precioDescuento = precio - (precio*descuento);

document.write(`El precio de tu producto es $ ${precio} <br>`);
document.write(`El precio de tu producto con descuento es $ ${precioDescuento}`);

