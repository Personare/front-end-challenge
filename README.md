# front-end-challenge

> Desafio para os futuros front-end's do [@Personare](https://github.com/Personare)

## Introdução

A nossa Product Owner pensou em um produto fantástico para ser desenvolvido, e um dos desafios é criação de um jogo de Tarot.

<br>

**Então, essa é a sua missão!**

Criar um jogo de Tarot, permitindo o sorteio de uma carta.

E as especificações são:

- Tela de apresentação exibindo todas as cartas com seu conteúdo visível, e com um botão para iniciar o jogo.
- Ao clicar no botão, as cartas deverão ser viradas - escondendo o conteúdo - e embaralhadas.
- Permitir que o usuário selecione apenas uma carta, clicando na mesma.
- Apresentar a carta selecionada, o nome da carta e uma descrição. (a descrição pode ser um lorem ipsum)

OBS: As imagens e nomes das cartas estão listadas no arquivo [`tarot.json`](tarot.json), esse arquivo deve ser consumido via _http request_. A propriedade `image` de cada carta deve ser concatenada com a propriedade `imagesUrl`, para obter o endereço final da imagem. Utilize o valor da propriedade `imageBackCard` para obter a imagem do fundo da carta.


## Instruções

1. Efetue o **fork** deste repositório e crie um branch com o seu nome. (ex: caue-alves).
2. Após finalizar o desafio, crie um **Pull Request**.
3. Aguarde algum contribuidor realizar o code review.


## Pré-requisitos

- Aplicação feita em React
- Possuir testes
- Gerar versão de produção
- Criar micro commits ou commits por features
	- Detalhar nos comentários dos commits as decisões tomadas.


## Diferenciais

- Boa documentação
- Testes de componentes isolados

## Dúvidas

Se surgir alguma dúvida, consulte as [perguntas feitas anteriormente](https://github.com/Personare/front-end-challenge/labels/question).

Caso não encontre a sua resposta, sinta-se à vontade para [abrir uma issue](https://github.com/Personare/front-end-challenge/issues/new) =]
