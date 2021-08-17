const { saludo, suma } = require('../app');

describe('Pruebas sobre la funcion saludo', () => {
    describe('Paso 1', function () {
        test('saludo sea una funcion', function () {
            expect(typeof (saludo)).toBe('function');
        });

        test('saludo debe retornar 1', function () {
            expect(saludo()).toEqual(1);
        });
    })


    describe('Paso 2', function () {
        test('sumar dos numeros 4 + 5 debe ser 9', () => {
            expect(suma(4, 5)).toEqual(9);
        });

        test('sumar dos numeros 4 + 5 debe ser 9', () => {
            expect(suma(4, 5)).toEqual(9);
        });

        it('descripcion', function () {

        });
    });
});
