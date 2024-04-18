import { describe, expect, test } from "@jest/globals";
import { soma } from './soma';

describe('soma()', () => {
  describe('Escopo de implementação', () => {   
    test('A soma de dois números inteiros deverá resultar em um inteiro.', () => {
      let a = 2;
      let b = 10;
  
      let resultado = soma(a,b);
  
      // expect(resultado).toBeInstanceOf(Number);
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(12);
    });
  
    test('A soma de dois números literais deverá resultar em um inteiro.', () => {
      let a = '2';
      let b = '10';
  
      let resultado = soma(a,b);
  
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(12);
    });
  
    test('A soma de um número literal e um inteiro deverá resultar em um inteiro', () => {
      let a = '2';
      let b = 10;
  
      let resultado = soma(a,b);
  
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(12);
    });
  
    test('A soma de um inteiro e um número literal deverá resultar em um inteiro', () => {
      let a = 2;
      let b = '10';
  
      let resultado = soma(a,b);
  
      expect(typeof resultado).toBe('number');
      expect(resultado).toBe(12);
    });
  });

  describe('Tratamentos de Exceção', () => {
    test('A tentativa de somar de "String" e "Number" deve gerar um erro.', () => {
      let a = 'abc';
      let b = 2;
      
      expect(() => soma(a,b)).toThrow(Error);
      expect(() => soma(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de somar de "Number" e "String" deve gerar um erro.', () => {
      let a = 10;
      let b = 'cde';
      
      expect(() => soma(a,b)).toThrow(Error);
      expect(() => soma(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de somar "String" e "String" deve gerar um erro.', () => {
      let a = 'abc';
      let b = 'cde';
      
      expect(() => soma(a,b)).toThrow(Error);
      expect(() => soma(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de somar um literal e "String" deve gerar um erro.', () => {
      let a = '10';
      let b = 'cde';
      
      expect(() => soma(a,b)).toThrow(Error);
      expect(() => soma(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    // "A soma de um número literal e um inteiro deverá resultar em um inteiro."
    test('A tentativa de somar um literal e um "Array" deve gerar um erro.', () => {
      let a = '10';
      let b = [10, 2];
      
      expect(() => soma(a,b)).toThrow(Error);
      expect(() => soma(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });

    test('A tentativa de somar um "Array" e um "Array" deve gerar um erro.', () => {
      let a = [2, 10];
      let b = [10, 2];
      
      expect(() => soma(a,b)).toThrow(Error);
      expect(() => soma(a,b)).toThrow("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");
    });
  });

  describe('Cenários de Teste', () => {
    const cenarios = [
      {a: 1, b: 2, result: 3},
      {a: 0, b: 0, result: 0},
      {a: '5', b: '5', result: 10},
      {a: 2, b: '8', result: 10},
      {a: '-1', b: 2, result: 1},
      {a: 10000, b: 9999, result:19999},
      {a: '10', b: '12', result: 22}
    ]

    cenarios.forEach((c, i) => {
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
    })
  });
});
