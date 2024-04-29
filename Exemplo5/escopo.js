function A(){
    let a = 20;
    console.log("Valor de `a` dentro do bloco:", a);
    return a;
}

{
    let a = 30;
    // recebeA(A());
    // recebeA(20);
    console.log("Valor de `a` no segundo do bloco:", a);
}

function recebeA(a){
    a += 5;
    console.log("Valor de `a` no terceiro do bloco:", a)
}