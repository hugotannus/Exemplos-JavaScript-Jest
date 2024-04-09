import { describe, expect, test } from "@jest/globals";
import { multiplica } from './multiplica';

describe('multiplica()', () => {
  describe('Escopo de implementação', () => {   
    test('O produto de dois números inteiros deverá resultar em um inteiro.', () => {
      let a = 2;
      let b = 10;
  
      let resultado = multiplica(a,b);
  
      // expect(resultado).toBeInstanceOf(Number);
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(20);
    });
  
    test('O produto de dois números literais deverá resultar em um inteiro.', () => {
      let a = '2';
      let b = '10';
  
      let resultado = multiplica(a,b);
  
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(20);
    });
  
    test('O produto de um número literal e um inteiro deverá resultar em um inteiro', () => {
      let a = '2';
      let b = 10;
  
      let resultado = multiplica(a,b);
  
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(20);
    });
  
    test('O produto de um inteiro e um número literal deverá resultar em um inteiro', () => {
      let a = 2;
      let b = '10';
  
      let resultado = multiplica(a,b);
  
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(20);
    });
  });

  describe('Tratamentos de Exceção', () => {
    test('A tentativa de multiplicar de "String" e "Number" deve gerar um erro.', () => {
      let a = 'abc';
      let b = 2;
      
      expect(() => multiplica(a,b)).toThrow(Error);
      expect(() => multiplica(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de multiplicar de "Number" e "String" deve gerar um erro.', () => {
      let a = 10;
      let b = 'cde';
      
      expect(() => multiplica(a,b)).toThrow(Error);
      expect(() => multiplica(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de multiplicar "String" e "String" deve gerar um erro.', () => {
      let a = 'abc';
      let b = 'cde';
      
      expect(() => multiplica(a,b)).toThrow(Error);
      expect(() => multiplica(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de multiplicar um literal e "String" deve gerar um erro.', () => {
      let a = '10';
      let b = 'cde';
      
      expect(() => multiplica(a,b)).toThrow(Error);
      expect(() => multiplica(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    // "O produto de um número literal e um inteiro deverá resultar em um inteiro."
    test('A tentativa de multiplicar um literal e um "Array" deve gerar um erro.', () => {
      let a = '10';
      let b = [10, 2];
      
      expect(() => multiplica(a,b)).toThrow(Error);
      expect(() => multiplica(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de multiplicar um "Array" e um "Array" deve gerar um erro.', () => {
      let a = [2, 10];
      let b = [10, 2];
      
      expect(() => multiplica(a,b)).toThrow(Error);
      expect(() => multiplica(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });
  });

  describe('Cenários de Teste', () => {
    const cenarios = [
      {a: 1, b: 2, result: 2},
      {a: 0, b: 0, result: 0},
      {a: '5', b: '5', result: 25},
      {a: 2, b: '8', result: 16},
      {a: '-1', b: 2, result: -2},
      {a: 100, b: 99, result:9900},
      {a: '10', b: '12', result: 120}
    ]

    function executaTeste(cenario, i) {
      test(`Caso #${i+1}`, () => {
        let { a, b, result } = cenario;

        expect(multiplica(a, b)).toBe(result);
      });
    }

    cenarios.forEach(executaTeste)
  });
});
