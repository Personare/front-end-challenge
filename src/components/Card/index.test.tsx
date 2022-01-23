import React from "react";
import { shallow } from "enzyme";
import Card from ".";
import { ICard } from "../../config/interfaces";
import { Container, Image } from "./styles";

const CARD: ICard = {
  name: "Name Test",
  image: "Image Test",
  show: false,
};

const CONTEXT = {
  state: {
    data: {
      imagesUrl: "https://images.com/",
    },
  },
};

describe("Card", () => {
  beforeEach(() => {
    jest.spyOn(React, "useContext").mockImplementation(() => CONTEXT);
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Card card={CARD} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the function when clicking on the card", () => {
    const onClickMock = jest.fn();

    const wrapper = shallow(<Card card={CARD} onClick={onClickMock} />);

    wrapper.find(Container).first().simulate("click");

    expect(onClickMock).toHaveBeenCalledWith(CARD.name);
  });
});
