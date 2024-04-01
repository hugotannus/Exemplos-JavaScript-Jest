import { soma, calcula, multiplica, area } from './operacoes.js';

let a = 10;
let b = 5;

let x = soma(a,b);

console.log(a,'+',b,'=',x);

let s = calcula(a,b,soma);
let m = calcula(a,b,multiplica);

console.log(a,'+',b,'=',s);
console.log(a,'*',b,'=',m);

let r1 = 2.0;
let r2 = 5.0;

let area1 = area(r1);
let area2 = area(r2);

console.log("Área do círculo de raio", r1, "=", area1)
console.log("Área do círculo de raio", r1, "=", area(r1))
console.log("Área do círculo de raio", r1, "=", area2)