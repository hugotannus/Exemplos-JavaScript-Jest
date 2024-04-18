---
marp: true
theme: gaia
paginate: true
size: 4:3
class: invert
math: mathjax
---
<!-- _class: lead -->

# Procedimentos & Funções

---

## Função

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    return maior + " eh o maior";
}
```
- **Entrada:** _???_
- **Saída:** _???_
---

## Função

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    return maior + " eh o maior";
}
```
- **Entrada:** `a`, `b` e `c`
- **Saída:** _???_

---

## Função

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    return maior + " eh o maior";
}
```
- **Entrada:** `a`, `b` e `c`
- **Saída:** `"<maior> eh o maior"`

---

## Função

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    return maior + " eh o maior";
}
```
- **Entrada:** `12`, `105` e `93`
- **Saída:** `"105 eh o maior"`

---

## Procedimento

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    console.log(maior + " eh o maior");
}
```
- **Entrada:** _???_
- **Saída:** _???_

---

## Procedimento

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    console.log(maior + " eh o maior");
}
```
- **Entrada:** `a`, `b` e `c`
- **Saída:** _???_

---

## Procedimento

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    console.log(maior + " eh o maior");
}
```
- **Entrada:** `12`, `105` e `93`
- **Saída:** _???_

---

## Procedimento

<!-- _class: lead invert -->

```js
function maior(a, b, c) {
    let maior = Math.max(a,b);
    maior = Math.max(maior,c);
    
    console.log(maior + " eh o maior");
}
```
- **Entrada:** `12`, `105` e `93`
- **Saída:** `undefined`

---

### Função

```js
function maior(a, b, c) {
    let maior = Math.max(a, Math.max(b,c));
    
    return maior + " eh o maior";
}
```

### Procedimento

```js
function maior(a, b, c) {
    let maior = Math.max(a, Math.max(b,c));
    
    console.log(maior + " eh o maior");
}
```

---

<!-- _class: lead -->

## Exercício 1

---

<!-- _class: lead -->

> Identifique, à partir de cada cenário à seguir, se a implementação corresponde a uma **função** ou a um **procedimento**. Em seguida, determine a **Entrada** e a **Saída** adequada para cada cenário.

---

<!-- _class: lead -->

### Exemplo

> **_Determine_** o maior valor entre 3 números inteiros.

- **Procedimento ou Função?** Função
- **Entrada:** 3 números inteiros (a, b e c)
- **Saída:** 1 número inteiro

---

<!-- _class: lead -->

### Exemplo

> **_Informe_** o maior valor entre 3 números inteiros.

- **Procedimento ou Função?** Procedimento
- **Entrada:** 3 números inteiros (a, b e c)
- **Saída:** _(não possui saída)_

---

<!-- _class: lead -->

### Cenário 1

> **_Transforme_** um número em algarismos romanos.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 1

> **_Transforme_** um número em algarismos romanos.

- **Procedimento ou Função?** Função
- **Entrada:** 25
- **Saída:** $\mathcal{XXV}$

---

<!-- _class: lead -->

### Cenário 2

> **_Transforme_** um número escrito em algarismos romanos para a notação convencional (_"indo-arábica"_).

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 2

> **_Transforme_** um número escrito em algarismos romanos para a notação convencional (_"indo-arábica"_).

- **Procedimento ou Função?** Função
- **Entrada:** $\mathcal{XXV}$
- **Saída:** 25

---

<!-- _class: lead -->

### Cenário 3

> **_Escreva_** um número _"indo-arábico"_ por extenso.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 3

> **_Escreva_** um número _"indo-arábico"_ por extenso.

- **Procedimento ou Função?** Procedimento
- **Entrada:** 42
- **Saída:** (Nenhuma. O resultado "quarenta e dois" foi escrito em algum lugar)

---

<!-- _class: lead -->

### Cenário 4

> **_Transcreva_** um número em _"indo-arábico"_ de forma discursiva.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 4

> **_Transcreva_** um número em _"indo-arábico"_ de forma discursiva.

- **Procedimento ou Função?** Função
- **Entrada:** 42
- **Saída:** "quarenta e dois"

---

<!-- _class: lead -->

### Cenário 5

> **_Armazene_** a data e hora atuais.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 5

> **_Armazene_** a data e hora atuais.

- **Procedimento ou Função?** Função
- **Entrada:** (vazio)
- **Saída:** 18/04/2024, 17:47

---

<!-- _class: lead -->

### Cenário 6

> **_Defina_** uma cor aleatória.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 6

> **_Defina_** uma cor aleatória.

- **Procedimento ou Função?** função
- **Entrada:** (vazio)
- **Saída:** "#f345f3"

---

<!-- _class: lead -->

### Cenário 6

> **_Defina_** uma cor aleatória.

- **Procedimento ou Função?** função
- **Entrada:** 42 (_"seed"_)
- **Saída:** "#42f024"

---

<!-- _class: lead -->

### Cenário 7

> **_Converta_** uma cor no formato _RGB_ para a notação _HexaDecimal_.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 7

> **_Converta_** uma cor no formato _RGB_ para a notação _HexaDecimal_.

- **Procedimento ou Função?** Função
- **Entrada:** rgb(255,0,255)
- **Saída:** #ff00ff;

---

<!-- _class: lead -->

### Cenário 8

> **_Advinhe_** qual time de futebol irá vencer uma partida.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 8

> **_Advinhe_** qual time de futebol irá vencer uma partida.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 9

> **_Advinhe_** qual time de futebol irá vencer uma partida, baseado no histórico de confronto entre as equipes.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 10

> **_Advinhe_** qual time de futebol irá vencer uma partida, baseado no elenco de cada equipe.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 11

> **_Advinhe_** qual time de futebol irá vencer uma partida, baseado nas partidas da última rodada

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 12

> **_Determine_** a data prevista para o fim do mundo, baseado nas predições de um determinado profeta.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 13

> **_Determine precisamente_** qual dentre todos os profetas é dono da próxima profecia do fim do mundo?

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 14

> **_Inicie_** a execução de uma música.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 14

> **_Inicie_** a execução de uma música.

- **Procedimento ou Função?** Procedimento
- **Entrada:** Música "Hey Jude" - _The Beetles_
- **Saída:** (Nenhuma. Embora a música comece a tocar, não requer um "retorno" para continuar a execução)

---

<!-- _class: lead -->

### Cenário 15

> **_Interrompa_** uma playlist em execução.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário 15

> **_Interrompa_** uma playlist em execução.

- **Procedimento ou Função?** Procedimento
- **Entrada:** (_Nenhuma. A função precisa interromper a playlist que estiver em execução, qualquer que seja ela._)
- **Saída:** (_Nenhuma_)

---

<!-- _class: lead -->

### Cenário 16

> **_Organize_** músicas para uma playlist.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

### Cenário Final

> **_Diga_** "Entendi, professor!" e **_abra_** o VSCode.

- **Procedimento ou Função?** _???_
- **Entrada:** _???_
- **Saída:** _???_

---

<!-- _class: lead -->

## Exercício 2

---

<!-- _class: lead -->

> Para cada cenário abaixo, crie casos de teste e realize a sua implementação. Certifique-se de cobrir todos os casos "essenciais" (_"casos de borda"_)

---

1. Crie um procedimento que **_escreva_** os algarismos _"indo-arábicos"_ (0 a 9) por extenso.
1. Crie uma procedimento que **_escreva_** as **dezenas** de 0 a 90 por extenso.
1. Crie uma procedimento que **_escreva_** os números de 0 a 100 por extenso.


---

4. Crie uma função que **_retorne_** um algarismo _"indo-arábicos"_ por extenso.
1. Crie uma função que **_retorne_** uma **dezena** -- entre 0 a 90  -- por extenso.
1. Crie uma função que **_retorne_** um número entre 0 e 100 por extenso.
3. **_Transforme_** um número em algarismos romanos.
2. **_Transforme_** um número escrito em algarismos romanos para a notação convencional (_"indo-arábica"_).

---

9. **_Transforme_** um número escrito em algarismos romanos (entre `I` e `C`) por extenso

