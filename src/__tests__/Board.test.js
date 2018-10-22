import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Board from "../components/Board";

describe("Componente: Board", () => {
  const board = shallow(<Board />);

  it("Deve renderizar com sucesso", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Board />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
