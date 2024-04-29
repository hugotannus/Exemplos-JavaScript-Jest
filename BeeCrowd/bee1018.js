const cedulas = [100, 50, 20, 10, 5, 2, 1]

export function solucao(v) {
    const result = [];
    let valor = v;

    for(var i=0; i < cedulas.length; i++) {         // i = 6;
        let cedula = cedulas[i];                    // cedula = 1;
        let resto = valor % cedula;                 // resto = 0;
        let dividendo = valor - resto               // dividendo = 0;
        let qtdNotas = dividendo / cedula;          // qtdNotas = 0;

        result[i] = qtdNotas;               // resut [112,1,0,0,1,1,0]

        valor = resto;                      // valor = 0
    }

    return result;
}
