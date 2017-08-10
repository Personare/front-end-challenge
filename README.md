[![Build Status](https://travis-ci.org/guilouro/front-end-challenge.svg?branch=master)](https://travis-ci.org/guilouro/front-end-challenge)
[![Coverage Status](https://coveralls.io/repos/github/guilouro/front-end-challenge/badge.svg?branch=guilherme-louro)](https://coveralls.io/github/guilouro/front-end-challenge?branch=guilherme-louro)


## Jogo de Tarot utilizando React + Redux

Link para acessar o projeto em produção [https://guilouro.github.io/front-end-challenge/](https://guilouro.github.io/front-end-challenge/)

## Como executar

Faça o clone:
```
$ git clone https://github.com/guilouro/front-end-challenge.git
```

Entre na pasta
```
$ cd front-end-challenge
```

Instale:
```
$ make
```
ou

```
$ npm i
```

**Obs**: O comando `make` vai instalar o nvm, definir a versão do node e instalar as dependências do projeto.


## Comandos

* **npm start**: Levanta um servidor rodando o projeto em [http://localhost:8000](http://localhost:8000).
* **npm test**: Roda os tests.
* **npm run test:tdd**: Roda os tests e fica escutando por mudança nos arquivos.
* **npm run test:coverage**: Roda os tests e verifica a cobertura.
* **npm run lint**: Procura por erros de lint.
* **npm run lint:fix**: Corrige alguns erros de lint automaticamente.
* **npm run ci**: Roda os tests e o lint.
* **npm build**: Faz o build do projeto para a pasta `dist`.

## Stack

- [React](https://facebook.github.io/react/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](http://redux.js.org/docs/introduction/)
- [Babel 6](https://babeljs.io/) - Javascript Compiler.
- [Webpack](https://webpack.github.io/) - Javascript module bundler.
- [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)
- [Eslint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX.
- [Husky](https://github.com/typicode/husky) - Git hooks made easy.
- [Mocha](https://mochajs.org/) - JavaScript test framework.
- [Chai](http://chaijs.com/) - BDD / TDD assertion library.
- [Sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript.
- [Nyc](https://github.com/istanbuljs/nyc) - Istanbul command line interface.
- [Enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utility for React.
- [JSDOM](https://github.com/tmpvar/jsdom) - A JavaScript implementation of the WHATWG DOM and HTML standards.
- [Stylus](http://stylus-lang.com/) - Preprocessor CSS
- [PostCSS](http://postcss.org/) - A tool for transforming CSS with JavaScript
- [GreenSock](https://greensock.com/gsap) - The standard for HTML5 and javascript animation

### Melhorias

- Criação de um redux middleware para controlar e experar o loading de todas as imagens externas gerando um load global.

- Criarção de uma página `About` para explicar como funciona e o que é o jogo.

- Trocar `Mocha` por `Jest` e adicionar Snapshot Testing

- Deixar o layout mais bonito
