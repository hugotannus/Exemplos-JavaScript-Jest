# Configurando o Jest

## Inicie um projeto do Node.js

Vá até o diretório raiz e digite o comando:

```bash
npm init -y
```

Instale o pacote `cross-env`:

```bash
npm install cross-env
```

## Instalação e Configuração do Jest

Primeiro, instale a ferrament de testes _Jest_, em **ambiente de desenvolvimento**...

```bash
npm install jest --save-dev
```

Em seguida, será necessário criar o arquivo de configuração `jest.config.js`. Para iniciar a configuração digite o comando abaixo:

```bash
npx jest --init
```

Ao executar o comando, será apresentada uma sequência de _prompts_ para definir as principais configurações do **Jest**. Para o nosso exemplo, basta precionar a tecla `Enter` para aceitar a opção padrão (_default_) trazida por cada _prompt_.

### Ajustes e Resoluções de problemas

Em alguns casos, o Jest poderá gerar um arquivo de configuração `jest.config.json` ao invés do arquivo `jest.config.js`. Neste caso, basta apenas renomear o arquivo:

```bash
mv jest.config.json jest.config.js
```

Outro ajuste comum é ter que adaptar a exportação de módulos do formato do [CommonJS](https://en.wikipedia.org/wiki/CommonJS) para o ES6. Para tanto, basta ir na última linha do arquivo `jest.config.js` e substituir:

```js
module.exports = config
```

por:

```js
export default config;
```

## Configurando o arquivo `package.json`

Abra o arquivo `package.json` e altere/adicione as linhas conforme destacado a seguir:

```json
{
  ...
  "scripts": {
    "test": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand --config ./jest.config.js",
    "test:watch": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand --config ./jest.config.js --watch"
  },
  ...,
  "type": "module",
  ...
}
```


## Executando os testes

Após realizar todas as configurações, experimente executar os testes disponíveis na pasta:

```bash
npm test
```

Ou, para executar um arquivo de teste específico:

```bash
npm test example.test.js
```

Para que o Jest permaneça _monitorando_ as alterações nos arquivos de teste, execute os comandos abaixo:

```bash
npm test:watch                  # monitora todos os testes existentes
npm test:watch example.test.js  # monitora arquivo(s) de teste específico(s)
```

---
# Referências

## JavaScript
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CommonJS](https://en.wikipedia.org/wiki/CommonJS)

## Jest
- [ECMAScript Modules](https://jestjs.io/docs/ecmascript-modules)
- [Mastering Jest Config for your JavaScript projects](https://phillcode.io/jest-config)

## Node.js
- [NPM - cross-env](https://www.npmjs.com/package/cross-env)
- ['NODE_OPTIONS' is not recognized as an internal or external command (Stack Overflow)](https://stackoverflow.com/questions/53948521/node-options-is-not-recognized-as-an-internal-or-external-command)

---
[Mark Down - Sintaxe Básica](https://www.markdownguide.org/basic-syntax/)