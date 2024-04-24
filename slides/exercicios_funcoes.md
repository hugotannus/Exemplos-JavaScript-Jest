---
marp: true
paginate: true
size: 4:3
class: invert
math: mathjax
---
<!-- _class: lead -->

# Funções - ***Exercícios***

---

<!-- _class: lead -->

 **Exercício 3:** Dadas as notas $N1$, $N2$, $N3$ e $N4$, _retorne_ `"Aprovado"` se a média for _maior ou igual_ a `7.0`, ou `"Reprovado"` caso contrário. Cada nota corresponde a um número ***válido*** de 0 a 10.

##### Casos de teste

| Entrada | Saída |
|---|---|
| `8`, `10`, `5`, `5` | `"Aprovado"` |
| `8`, `9`, `5`, `5` | `"Reprovado"` |
| `8.5`, `8`, `7`, `6.5` | `"Aprovado"` |
| `'7'`, `'8'`, `'9'`, `'10'` | `"Aprovado"` |

---

<!-- _class: lead -->

 **Exercício 4:** Dadas as notas $N1$, $N2$, $N3$ e $N4$, pesos $P1 = 1$, $P2 = 2$, $P3 = 3$ e $P4 = 4$, _retorne_ `"Aprovado"` se a ***média ponderada*** for _maior ou igual_ a `7.0`, ou `"Reprovado"` caso contrário. Cada nota corresponde a um número ***válido*** de 0 a 10.

##### Casos de teste

| Entrada | Saída |
|---|---|
| `8`, `8`, `8`, `8` | `"Aprovado"` |
| `8`, `8`, `8`, `8`, `1`, `2`, `3`, `4` | `"Aprovado"` |
| `6`, `9`, `5`, `5` | `"Reprovado"` |
| `8.5`, `8`, `7`, `6.5` | `"Aprovado"` |
| `'7'`, `'8'`, `'9'`, `'10'` | `"Aprovado"` |
| `'1'`, `'1'`, `'1'`, `'10'` | `"Reprovado"` |