# Operadores

## soma()
A função `soma()` deverá realizar a operação básica matemática entre dois valores `a` e `b`.

### Entrada

- **a:** <*Number* | *String*>
- **b:** <*Number* | *String*>

### Saída

A função `soma()` deverá retornar um valor do tipo *Number*.

### Cenários de Teste
A função `soma()` deverá atender aos seguintes casos de teste:

- _"A soma de dois números inteiros deverá resultar em um inteiro."_
    - _**Caso 1:** Quando `a = 2` e `b = 2`, deve retornar `4`._
    - _**Caso 2:** Quando `a = 10` e `b = 2`, deve retornar `12`._
    - _**Caso 3:** Quando `a = 0` e `b = 0`, deve retornar `0`._
- _"A soma de dois números literais deverá resultar em um inteiro."_
    - _**Caso 4:** Quando `a = '2'` e `b = '2'`, deve retornar `4`._
    - _**Caso 5:** Quando `a = '10'` e `b = '2'`, deve retornar `12`._
    - _**Caso 6:** Quando `a = '0'` e `b = '0'`, deve retornar `0`._
- _"A soma de um número literal e um inteiro deverá resultar em um inteiro."_
    - _**Caso 7:** Quando `a = '2'` e `b = 2`, deve retornar `4`._
    - _**Caso 8:** Quando `a = '10'` e `b = 2`, deve retornar `12`._
    - _**Caso 9:** Quando `a = '0'` e `b = 0`, deve retornar `0`._
    - _**Caso 10:** Quando `a = 2` e `b = '2'`, deve retornar `4`._
    - _**Caso 11:** Quando `a = 10` e `b = '2'`, deve retornar `12`._
    - _**Caso 12:** Quando `a = 0` e `b = '0'`, deve retornar `0`._
- _"A soma de duas strings deve gerar uma mensagem de erro."_
    - _**Caso 13:** Quando `a = 'abc'` e `b = '2'`, deve retornar um erro, com a mensagem `"Erro: um ou mais parâmetros com tipo(s) não suportado(s)."`._
    - _**Caso 14:** Quando `a = '10'` e `b = 'cde'`, deve retornar um erro, com a mensagem `"Erro: um ou mais parâmetros com tipo(s) não suportado(s)."`._
    - _**Caso 15:** Quando `a = 'ijk'` e `b = 'xyz'`, deve retornar um erro, com a mensagem `"Erro: um ou mais parâmetros com tipo(s) não suportado(s)."`._