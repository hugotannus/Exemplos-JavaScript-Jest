import { solucao } from "./bee1010"

describe('BeeCrowd 1013 - "O Maior', () => {
    describe('Exemplos de tratamento de Entrada', () => {
        
        test('Exemplo #2', () => {
            let input = "12 1 5.30\n\
16 2 5.10"
            let lines = input.split('\n')

            expect(lines).toStrictEqual(['12 1 5.30', '16 2 5.10']);
        })

        test('Exemplo #3.1', () => {
            let input =`12 1 5.30
16 2 5.10`
            let lines = input.split('\n')

            expect(lines).toStrictEqual(['12 1 5.30', '16 2 5.10']);
        })
        test('Exemplo #3.2', () => {
            let input =
`12 1 5.30
16 2 5.10`
            let lines = input.split('\n')

            expect(lines).toStrictEqual(['12 1 5.30', '16 2 5.10']);
        })
        test('Exemplo #3.3', () => {
            let input =`12 1 5.30
                        16 2 5.10`
            let lines = input.split('\n')

            expect(lines).not.toStrictEqual(['12 1 5.30', '16 2 5.10']);
        })
        test('Exemplo #3.4', () => {
            let input =`12 1 5.30
                        16 2 5.10`
            let lines = input.split('\n')

            expect(lines).toStrictEqual(['12 1 5.30', '\t\t\t\t\t\t16 2 5.10']);
        })

    })

    describe.skip('Casos de Teste', () => {
        test('Caso #1', () => {
            let entrada = ["7 14 106"];
            let saidaEsperada = "106 eh o maior"

            let saida = solucao(entrada);

            expect(saida).toBe(saidaEsperada);
        });

        test('Caso #2', () => {
            let entrada = ["217 14 6"];
            let saidaEsperada = "217 eh o maior"

            let saida = solucao(entrada);

            expect(saida).toBe(saidaEsperada);
        });
    });

    describe('Exemplos de tratamento de Entrada', () => {
        
    })
});