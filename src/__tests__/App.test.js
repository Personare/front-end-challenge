import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const app = shallow(<App />);
  const instance = app.instance();

  it("Teste de embaralhamento de cartas", () => {
    const oldList = instance.state.cards;
    instance.shuffleCards();
    expect(instance.state.cards).not.toEqual(oldList);
    expect(instance.state.cards.lenght).toEqual(oldList.lenght);
  });

  it("Teste de iniciar jogo", async () => {
    instance.startGame();

    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        await expect(instance.state.isSorting).toBeTruthy()
      }, 4000);
    });
  });
});
