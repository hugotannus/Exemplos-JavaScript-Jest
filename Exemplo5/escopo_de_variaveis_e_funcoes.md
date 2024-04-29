---
marp: true
theme: uncover
paginate: true
size: 4:3
class: invert
math: mathjax
---

# Escopo de Variáveis e Funções

---

> O **doce** perguntou ao **doce**:
>
> \- Qual o **doce** mais **doce** que **doce**?
>
> O **doce** respondeu ao **doce** que o **doce** mais **doce** que **doce** é o **doce** de batata-**doce**.

---

> Florzinha, Lindinha e Docinho


> *"Mina / Seus cabêlo é dahora / Seu corpão violão / Meu Docinho de Coco / Tá me deixando louco."*

---

*Observe o códiog abaixo:*

```javascript
const variable = 10;

function F() {
    const variable  = 20;
    console.log(variable);
}

function F() {
    const variable  = 30;
    console.log(variable);
}

console.log(variable);
``` 

---

*Qual o valor de `variable` printado em cada um dos exemplos?*

```javascript
const variable = 10;

function F() {
    const variable  = 20;
    console.log(variable); // Qual o valor apresentado?
}

function F() {
    const variable  = 30;
    console.log(variable); // Qual o valor apresentado?
}

console.log(variable); // Qual o valor apresentado?
``` 

---

***Curiosidade:** Como o JavaScript sabe quais palavras são variáveis e quais não são?*

```javascript
const variable = 10;

function F() {
    const variable  = 20;
    console.log(variable);  // 20
}

function F() {
    const variable  = 30;
    console.log(variable);  // 30
}

console.log(variable);      // 10
``` 

---

***Curiosidade:** Posso ter variáveis com algum dos nomes abaixo?*

```javascript
const function = 10;

const true = "verdadeiro"

const import = "Materiais importados".

console.log(function);
console.log(class);
console.log(import);
```

---

# Palavras Reservadas

---

## Exempos de Palavras Reservadas

- `boolean`, `true`, `false`, `float`
- `var`, `const`, `let`
- `if`, `switch`, `case`, `while`, `for`
- `function`, `import`, `export`, `return`

---

## Strict Mode