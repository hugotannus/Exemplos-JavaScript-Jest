import { soma } from "./operacoes.js";

const somaInputs = [
  {a: 1, b: 2, result: 3},
  {a: 0, b: 0, result: 0},
  {a: 5, b: 5, result: 10},
  {a: 2, b: 8, result: 10},
  {a: -1, b: 2, result: 1},
]

describe('Função "Soma"', () => {
  test('Soma de 1 e 2 deve ser igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
  });
  test('Soma de 3 e 5 deve ser igual a 8', () => {
    expect(soma(3, 5)).toBe(8);
  });
  test('Soma de 0 e 0 deve ser igual a 0', () => {
    expect(soma(0, 0)).toBe(0);
  });
  somaInputs.forEach((c, i) => {
    test(`Case #${i+1}: Soma de ${c.a} e ${c.b} deve ser igual a ${c.result}`, () => {
      expect(soma(c.a, c.b)).toBe(c.result);
    });
  })
})