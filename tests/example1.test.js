describe('Exemplos', () => {
    test('Soma de 2 e 2 deve ser igual a 4', () => {
        expect(2+2).toBe(4);
    });
    test.only('Soma de 1 e 2 deve ser igual a 3', () => {
        // setup
        let a = 1;
        let b = 2;

        // processing
        let soma = a + b;

        // validating
        expect(soma).toBe(3);
    });
});