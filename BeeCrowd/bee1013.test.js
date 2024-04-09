describe('Cenários de Teste', () => {
    const cenarios = [
        {
            lines: ["7 14 106"],
            result: "106 eh o maior"
        },
        {
            lines: ["217 14 6"],
            result: 217
        }
    ]

    cenarios.forEach((cenario, i) => {
        test('Caso #' + i, () => {
            let { lines, result } = cenario;

            let output = resolve(lines);

            expected(output).toBe(result);
        });
    })
});