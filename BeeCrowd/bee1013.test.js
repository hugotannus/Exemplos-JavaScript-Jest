import { solucao } from "./bee1013"



describe('BeeCrowd 1013 - "O Maior', () => {
    describe('Casos de Teste', () => {
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