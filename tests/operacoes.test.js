
describe('Soma', () => {
  describe('Requisitos', () => {
    
    test('Soma de 1 e 2 deve ser igual a 3', () => {
      expect(soma(1, 2)).toBe(3);
    });
    test('Soma de 3 e 5 deve ser igual a 8', () => {
      expect(soma(3, 5)).toBe(8);
    });
    test('Soma de 0 e 0 deve ser igual a 0', () => {
      expect(soma(0, 0)).toBe(0);
    });
  });

  describe('Cenários de Teste', () => {
    const cenarios = [
      {a: 1, b: 2, result: 3},
      {a: 0, b: 0, result: 0},
      {a: 5, b: 5, result: 10},
      {a: 2, b: 8, result: 10},
      {a: -1, b: 2, result: 1},
      {a: 10000, b: 9999, result:19999},
      {a: '10', b: '12', result: 22}
    ]

    cenarios.forEach((c, i) => {
      test(`Caso #${i+1}`, () => {
        expect(soma(c.a, c.b)).toBe(c.result);
      });
    })
  });
})

const soma = (a,b) => Number(a) + Number(b);