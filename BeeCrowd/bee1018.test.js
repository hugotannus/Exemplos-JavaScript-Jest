
import { solucao } from "./bee1018"

describe('Cenários de Teste', () => {
    const cenarios = [
        {
            valor: 0,
            result: [0,0,0,0,0,0,0]
        },
        {
            valor: 100,
            result: [1,0,0,0,0,0,0]
        },
        {
            valor: 50,
            result: [0,1,0,0,0,0,0]
        },
        {
            valor: 188,
            result: [1,1,1,1,1,1,1]
        },
        {
            valor: 567,
            result: [5,1,0,1,1,1,0]
        },
        {
            valor: 576,
            result: [5,1,1,0,1,0,1]
        },
        {
            valor: 11257,
            result: [112,1,0,0,1,1,0]
        },
        {
            valor: 503,
            result: [5,0,0,0,0,1,1]
        },
    ]

    cenarios.forEach(function (cenario, i) {
        let tituloDoTeste = 'Caso #' + i;
        
        test(tituloDoTeste, function() {
            expect(solucao(cenario.valor)).toEqual(cenario.result)
        });
    })
});

