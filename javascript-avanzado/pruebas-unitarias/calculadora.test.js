/* no es requerida la extension */
const { sumar, restar, dividir, multiplicar } = require('./calculadora');

describe('Pruebas el componentne calculadora', () => {

    test('pruebas en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
    });
    test('pruebas en la funcion restar', () => {
        expect(restar(9, 6)).toBe(3);
    });
    test('pruebas en la funcion multiplicar', () => {
        expect(multiplicar(5, 3)).toBe(15);
    });
    test('pruebas en la funcion restar', () => {
        expect(dividir(6, 3)).toBe(2);
    });
});
