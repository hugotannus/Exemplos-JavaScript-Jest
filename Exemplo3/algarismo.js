// import PromptSync from "prompt-sync";

// const prompt = PromptSync();

export function toString(n) {
    if(typeof n == "boolean" || isNaN(n) || n < 0 || n > 9)
        return `${n} não corresponde a um algarismo.`
    
    const texto = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];

    return texto[n];
}

// export function toString(n) {
//     switch(n) {
//         case 0: return "zero"
//         case 1: return "um"
//         case 2: return "dois"
//         case 3: return "três"
//         case 4: return "quatro"
//         case 5: return "cinco"
//         case 6: return "seis"
//         case 7: return "sete"
//         case '8' : case 8: return "oito"
//         case 9: return "nove"
//         default: return `${n} não corresponde a um algarismo.`
//     }
// }

// export function toString(n) {
//     if(typeof n == "boolean") {
//         return `${n} não corresponde a um algarismo.`
//     }

//     if(algarismo == 0) return "zero"
//     if(algarismo == 1) return "um"
//     if(algarismo == 2) return "dois"
//     if(algarismo == 3) return "três"
//     if(algarismo == 4) return "quatro"
//     if(algarismo == 5) return "cinco"
//     if(algarismo == 6) return "seis"
//     if(algarismo == 7) return "sete"
//     if(algarismo == 8) return "oito"
//     if(algarismo == 9) return "nove"

//     return `${n} não corresponde a um algarismo.`
// }

// export function betaTest() {

//     while(true) {
//         let algarismo = prompt("Digite um algarismo entre 0 e 9: ");
//         let text = toString(algarismo);

//         console.log(`Resposta: ${text}\n`);
//     }
// }