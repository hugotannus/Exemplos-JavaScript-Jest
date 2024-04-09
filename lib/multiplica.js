export const multiplica = (a, b) => {
    let produto = a * b;

    if(isNaN(produto))
        throw new Error("Erro: um ou mais parâmetros com tipo(s) não suportado(s).")

    return a * b;
}