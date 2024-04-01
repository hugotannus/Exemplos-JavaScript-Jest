

let a = 10;
let b = 5;

let x = soma(a,b);

console.log(a,'+',b,'=',x);

let s = calcula(a,b,soma);
let m = calcula(a,b,multiplica);

console.log(a,'+',b,'=',s);
console.log(a,'*',b,'=',m);

let r0 = 1.5;
let r1 = 2.0;
let r2 = 5.0;

let area1 = area(r1);
let area2 = area(r2);
let area0 = calcula(r0,0,area)

console.log("Área do círculo de raio", r0, "=", area0)
console.log("Área do círculo de raio", r1, "=", area(r1))
console.log("Área do círculo de raio", r2, "=", area2)

function calcula(a, b, operacao) {
    let resultado = operacao(a,b);
    
    return resultado;
}

function soma(a, b) {
    let resultado = a + b;

    return resultado;
}
function multiplica(a, b) {
    let resultado = a * b;

    return resultado;
}
function area(raio, _naousado) {
    const pi = 3.14;
    let resultado = pi * raio * raio;

    return resultado;
}
