export const soma = function(a,b) {
    let x = Number(a);
    let y = Number(b);

    if(isNaN(x) || isNaN(y))
        throw Error("Erro: um ou mais parâmetros com tipo(s) não suportado(s).");

    return x + y;
}