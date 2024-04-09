describe('Cenários de Teste', () => {
    const cenarios = [
        {
            lines: ["400"],
            result: [
                "1 ano(s)",
                "1 mes(es)",
                "5 dia(s)"
            ]
        },
        {
            lines: ["800"],
            result: [2,2,10]
        },
        {
            lines: ["30"],
            result: [0,1,0]
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