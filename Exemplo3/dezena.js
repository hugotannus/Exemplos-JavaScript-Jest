

export function toString(n) {
    if(typeof n == "boolean" || isNaN(n) || n < 0 || n > 9)
        return `${n} não corresponde a uma dezena.`
    
    const texto = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];

    return texto[n];
}