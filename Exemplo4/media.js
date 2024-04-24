export function verificaSituacao(n1, n2, n3, n4, p1=1, p2=1, p3=1, p4=1) {
    let media = (n1*p1 + n2*p2 + n3*p3 + n4*p4) / (p1 + p2 + p3 + p4);

    if(media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}