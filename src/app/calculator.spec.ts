import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator(); // Arrange
  });

  it('should multiply two numbers', () => {
    // Arrange
    // Act
    // Assert
    expect(calculator.multiply(2, 3)).toBe(6); // Act and Assert
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  it('should return null when dividing by zero', () => {
    expect(calculator.divide(6, 0)).toBeNull();
  });
});

// MATCHERS
// //Comunes
// .toBe();
// .not.toBe();
// .toEqual();

// //Veracidad
// .toBeNull()
// .toBeUndefined()
// .toBeDefined()
// .toBeUndefined()
// .toBeTruthy()
// .toBeFalsy()

// //Numeros
// .toBeGreaterThan(3);
// .toBeGreaterThanOrEqual(3.5);
// .toBeLessThan(5);
// .toBeLessThanOrEqual(4.5);

// //Numeros decimales
// expect(0.3).toBeCloseTo(0.3)

// //Strings
// .not.toMatch(/I/);
// .toMatch(/stop/);

// //Arrays
// .toContain('milk');

// //Ecepciones
// myfunction.toThrow(Error);

// ng test --no-watch --code-coverage  // Para generar el reporte de cobertura de código

// con fdescribeejecuta únicamente el suite de test
// con xdescribe se omite el suite de test
// con fit ejecuta el focus sobre un test
// con xit se omite un test

// Para definir un porcentaje de pruebas que debe tener el proyecto se debe
// agregar en el archivo karma.conf.js siguiente configuración:
// coverageIstanbulReporter: {
//   check: {
//     global: {
//       statements: 80,
//       lines: 80,
//       branches: 80,
//       functions: 80
//     }
// }

// Para usar mocha reporter para tener un reporte más amigable en consola usamos lo siguiente:
// 1. npm install karma-mocha-reporter --save-dev
// 2. In the karma.config.ts file, on the plugins, add require('karma-mocha-reporter')
// 3. In the karma.config.ts file, change reporters: ['progress', 'kjhtml'] to reporters: ['mocha']
