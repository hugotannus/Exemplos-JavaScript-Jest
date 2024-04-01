export function calcula(a, b, operacao) {
    let resultado = operacao(a,b);
    
    return resultado;
}

export function soma(a, b) {
    let resultado = a + b;

    return resultado;
}

export function multiplica(a, b) {
    let resultado = a * b;

    return resultado;
}

export function area(raio) {
    const pi = 3.14;
    let resultado = pi * raio * raio;

    return resultado;
}
