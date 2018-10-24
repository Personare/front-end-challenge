import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Card from "../components/Card";

describe("App", () => {
  const app = shallow(<App />);
  const instance = app.instance();

  it("Teste de Iniciar Jogo", () => {
    const oldList = instance.state.cards;
    instance.startGame();
    expect(instance.state.gameIsStarted).toBeTruthy();
    setTimeout(() => {
      expect(instance.state.cards).not.toEqual(oldList);
      expect(instance.state.cards.lenght).toEqual(oldList.lenght);
    }, 1000);
  });

  it("Teste de embaralhamento de cartas", () => {
    const array = instance.state.cards;
    const shuffledCards = instance.shuffleCards(array);
    expect(shuffledCards).not.toEqual(array);
    expect(shuffledCards.lenght).toEqual(array.lenght);
  });

  it("Teste de reiniciar jogo", () => {
    instance.resetGame();
    expect(instance.state.gameIsStarted).toBeFalsy();
    expect(instance.state.activeCard).toBeFalsy();
  });

  it("Teste de seleção de carta", () => {
    instance.startGame();
    setTimeout(() => {
      const someCard = app.find(Card).first();
      const props = someCard.props();
      someCard.simulate("click");
      expect(app.instance().state.activeCard).toBe(props.name);
    }, 1000);
  });

  it("Teste de fechar carta", () => {
    instance.handleCloseCard();
    expect(app.instance().state.activeCard).toBeFalsy();
  });
});
