import { shallow } from "enzyme";
import StartGame from ".";
import { PlayButton } from "./styles";

describe("StartGame", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<StartGame />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should change the component when clicking on button", () => {
    const onClickFn = jest.fn();
    const wrapper = shallow(<StartGame onClick={onClickFn} />);

    expect(onClickFn).not.toHaveBeenCalled();

    wrapper.find(PlayButton).simulate("click");

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
