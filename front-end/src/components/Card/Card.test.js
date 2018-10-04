import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card card={{}} onClick={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
