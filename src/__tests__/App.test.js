import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const app = shallow(<App />);

  it("Renderizar o titulo", () => {
    expect(app.find("h1").exists()).toBe(true);
  });
});
