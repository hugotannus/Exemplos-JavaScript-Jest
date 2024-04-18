describe('Cenários de Teste', () => {
    const cenarios = [
        {
            lines: ["567"],
            result: [5,1,0,1,1,1,0]
        },
        {
            lines: ["576"],
            result: [5,1,1,0,1,0,1]
        },
        {
            lines: ["11257"],
            result: [112,1,0,0,1,1,0]
        },
        {
            lines: ["503"],
            result: [5,0,0,0,0,1,1]
        },
    ]

    cenarios.forEach(function (cenario, i) {
        let tituloDoTeste = 'Caso #' + i;
        
        test(tituloDoTeste, function() {
            // let { lines, result } = cenario;

            // let output = resolve(lines);

            // expected(output).toBe(result);
            expect(resolve(cenario.lines)).toBe(cenario.result)
        });
    })
});

import { solucao } from "./bee1018"

describe('BeeCrowd 1018 - "Cédulas', () => {
    describe('Casos de Teste', () => {
        test('Caso #1', () => {
            let entrada = ["567"];
            let saidaEsperada = `576
                5 nota(s) de R$ 100,00
                1 nota(s) de R$ 50,00
                1 nota(s) de R$ 20,00
                0 nota(s) de R$ 10,00
                1 nota(s) de R$ 5,00
                0 nota(s) de R$ 2,00
                1 nota(s) de R$ 1,00`

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
});