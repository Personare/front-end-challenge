import { shallow } from "enzyme";
import Modal from ".";
import { ICard } from "../../config/interfaces";
import { CloseButton, Overlay } from "./styles";

const CARD: ICard = {
  name: "Name Test Modal",
  image: "Image Test Modal",
  show: false,
};

describe("Modal", () => {
  it("should match snapshot", () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(<Modal card={CARD} onClose={onCloseMock} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the function when closing the modal", () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(<Modal card={CARD} onClose={onCloseMock} />);

    wrapper.find(CloseButton).simulate("click");
    expect(onCloseMock).toHaveBeenCalledTimes(1);

    wrapper.find(Overlay).simulate("click");
    expect(onCloseMock).toHaveBeenCalledTimes(2);
  });
});
