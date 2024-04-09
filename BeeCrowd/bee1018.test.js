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

    cenarios.forEach((cenario, i) => {
        test('Caso #' + i, () => {
            let { lines, result } = cenario;

            let output = resolve(lines);

            expected(output).toBe(result);
        });
    })
});