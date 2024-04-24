import { verificaSituacao } from "./media.js"

describe('Média Aritmética', () => {
    test.only('Caso de Teste #1', () => {
        let n1 = 8;
        let n2 = 10;
        let n3 = 5;
        let n4 = 5;

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Reprovado")
    });
    
    test('Caso de Teste #2', () => {
        let n1 = 8;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Reprovado")
    });

    test('Caso de Teste #3', () => {
        let n1 = 8.5;
        let n2 = 8;
        let n3 = 7;
        let n4 = 6.5;

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #4', () => {
        let n1 = '7';
        let n2 = '8';
        let n3 = '9';
        let n4 = '10';

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Aprovado")
    });

    test('Caso de Teste #5', () => {
        let n1 = '1';
        let n2 = '1';
        let n3 = '1';
        let n4 = '10';

        let resultado = verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Reprovado")
    });
});