var input = require('fs').readFileSync(1, 'utf8').toString();

function soma(input) {
    var lines = input.split('\n');

    let A = Number(lines.shift());
    let B = Number(lines.shift());
    
    let X = A + B;
    
    console.log("X =", X);
}

soma(input);