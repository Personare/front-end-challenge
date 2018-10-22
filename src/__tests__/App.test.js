import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const app = shallow(<App />);
  const instance = app.instance();

  it("Renderizar o titulo", () => {
    expect(app.find("h1").exists()).toBe(true);
  });

  it("Função: doSomething", () => {
    instance.doSomething();
    expect(instance.state.something).toBe("was doing");
  });
});
