const { Calculadora } = require('../src/calculadora');

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  test('suma de dos números', () => {
    expect(calculadora.sumar(1, 2)).toBe(3);
  });

  test('resta de dos números', () => {
    expect(calculadora.restar(5, 2)).toBe(3);
  });

  test('multiplicación de dos números', () => {
    expect(calculadora.multiplicar(3, 4)).toBe(12);
  });

  test('división de dos números', () => {
    expect(calculadora.dividir(8, 2)).toBe(4);
  });

  test('división por cero', () => {
    expect(() => calculadora.dividir(5, 0)).toThrow('División por cero no permitida.');
  });
});