# Personare Tarot Game

Um jogo feito para selecionar uma carta do baralho

## Stack

 - [React](https://facebook.github.io/react/) - A javascript library for building user interfaces
 - [Redux](http://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
 - [redux-saga](https://redux-saga.js.org/) - An alternative side effect model for Redux apps
 - [styled-components](https://www.styled-components.com/) - Visual primitives for the component age.
 - [jest](https://facebook.github.io/jest/) - Delightful JavaScript Testing
 - [enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utility for React
 - [Flow](https://flow.org/) - A static type checker for javascript
 - [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts) - includes scripts and configuration to run and build app

## Instalação

Para instalar as dependências é necessário rodar um gerenciador de packages, como o `npm` ou `yarn`.

Instalando dependências com o `npm`:
```shell
npm install
```

## Instruções para rodar em modo de desenvolvimento

Rodar a aplicação em modo de desenvolvimento,
após a instalação, executando o seguinte comando no terminal:

```shell
npm start
```

Logo após isto seu abra seu navegador no seguinte
endereço: `http://localhost:3000/`

## Desenvolvimento

Este app foi desenvolvido utilizando a técnica de TDD. Para verificar a consistência do app, temos testes que verificam boa parte do código, e antes de implementar novas features é importante especificar o teste. [Saiba mais sobre TDD](https://pt.wikipedia.org/wiki/Test_Driven_Development).

### Testes Rodando Enquanto Desenvolve

Para rodar os testes é necessário chamar o servidor de testes. Este fica monitorando alterações nos fontes para rodar os testes que foram afetados desde o último `commit`.

Inicie o servidor de tests com:

```shell
npm run test
```

### Escrevendo Testes

Os testes escritos até o momento ficam em pastas com o nome `__tests__`, próximos ao componentes de interesse do teste. Existem testes em camadas de gerenciamento de estado e regras de negócio, como a apresentação dos componentes e estrutura da árvore de componentes.

**Teste de Componentes**
O objetivo destes testes é garantir a consistência do estrutural do componente e seu comportamento a mudanças.


[Exemplo](src/components/game/__tests__/Card-test.js):
```javascript
describe('Card', () => {
  let target
  beforeEach(() => {
    target = shallow(<Card {...card} />)
  })

  it('have back image', () => {
    const img = <CardImage src={card.backImageUrl} />
    expect(target).toContainReact(img)
  })
})
```

Utilizando o `jest` ele facilita toda a configuração e integração entre módulos para garantir um ambiênte *runtime* de testes.

Referências:
- [Writing tests with jest](https://facebook.github.io/jest/docs/en/tutorial-react.html)
- [Writing tests with airbnb/enzyme (Shallow Rendenring)](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) - Auxilia a testar superficialmente (Sem montar ou rendering componentes internos)
- [Writing tests with airbnb/enzyme (Full DOM Rendenring)](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md) - Ideal para testes que visam a manipulação de DOM

**Teste de Gerenciamento de Estado**
Com a estrutura do redux, temos `actions` e `reducers` para testar.

**Actions** são simples estruturas de mensagem que são
passadas para o `dispatch` afim de refletir a mudança de
estado em toda aplicação. O objetivo do teste é garantir
a integridade dos `action types` e os `actions creators`,
que retornam um objeto a ser despachado no fluxo.

[Exemplo](src/components/game/__tests__/GameActions-test.js):
```javascript
describe('Game Actions Types', () => {
  it('tarot request actions types', () => {
    expect(actions.TAROT.REQUEST).toBe('TAROT_REQUEST')
    expect(actions.TAROT.SUCCESS).toBe('TAROT_SUCCESS')
    expect(actions.TAROT.FAILURE).toBe('TAROT_FAILURE')
  })

	it('startGame action', () => {
    expect(actions.gameStartAction()).toEqual({
      type: actions.GAME.START,
      gameState: GAME_STATE.starting
    })
  })
})
```

**Reducer** são funções puras que devem manter a
imutabilidade dos parâmetros e estado, então refletir no
estado a `action` recebida com seus parâmetros. O
objetivo do teste é garantir que a função reflita no
estado a `action` recebida.

[Exemplo](src/components/game/__tests__/GameReducer-test.js):
```javascript
describe('Game Actions Types', () => {
  it('tarot request actions types', () => {
    expect(actions.TAROT.REQUEST).toBe('TAROT_REQUEST')
    expect(actions.TAROT.SUCCESS).toBe('TAROT_SUCCESS')
    expect(actions.TAROT.FAILURE).toBe('TAROT_FAILURE')
  })

	it('startGame action', () => {
    expect(actions.gameStartAction()).toEqual({
      type: actions.GAME.START,
      gameState: GAME_STATE.starting
    })
  })
})
```

**Teste de Regras de Negócio**
As regras de negócio estão isoladas em uma camada de interceptação de `actions`, chamada de `middleware`.
Utilizando `redux-saga`, precisamos dos generators para
compor a lógica desta camada.

Referência: [Writing tests with redux-saga](https://redux-saga.js.org/docs/advanced/Testing.html)

## Static Type check - FLOW
Usando a análise de fluxo de dados, o Flow infere tipos e rastreia dados à
medida que ele se move através do seu código.

Para verificar estaticamente a consistência do código rode o seguinte comando:
```shell
npm run flow
```

Para que um novo arquivo javascript entre para linha de checagem estática, é preciso antes
anotar o arquivo com o seguinte comentário:

```javascript
// @flow

[...]

```

or using `/* ... */`

```javascript
/**
 * SUPER COMMENT
 * @flow
 */

 [...]
```

## Estrutura do App

```
project
│   README.md
│   package.json   
│
└───src
│   │   
│   └───components
│   │   │
│   │   └───game [App  Module]
│   │   │
│   │   └───kit
│   │   │
│   │   App.js
│   │
[...]
```

**App Module**
Para garantir a modularidade e escalabilidade na escrita
da aplicação, é preferencial isolar componentes,
gerenciamento de estado e regras de negócios próximos em
pastas separadas. Na estrutura atual, temos um módulo `game`, que é a parte central da nossa aplicação.

## Build para produção
Para gerar o build de produção, `minified` e arquivos com `hashes`, é necessário rodar o seguinte comando:

```
npm run build
```

Após este comando os arquivos estáticos serão gerados na pasta `./build`, no entanto, devem ser servidos por um servidor http por conta das requisições estáticas feitas para urls como `/static/js/main.<hash>.js`.

Com `Node.js` a solução mais fácil para visualizar o
conteúdo do build é:

```
npm install -g serve
serve -s build
```

Esta aplicação foi configurada utilizando [create-react-app](https://github.com/facebookincubator/create-react-app), logo toda configuração `babel` e `webpack` estão sendo servidas via `react-scripts`.

## Contribuidores

 - [Bruno Guerra](https://github.com/brunoguerra)
