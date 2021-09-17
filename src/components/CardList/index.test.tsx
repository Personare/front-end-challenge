import { shallow } from "enzyme";
import CardList from ".";
import Card from "../Card";

const CARDS = [
  {
    name: "Name Test #1",
    image: "Image Test #1",
    show: false,
  },
  {
    name: "Name Test #2",
    image: "Image Test #2",
    show: false,
  },
  {
    name: "Name Test #3",
    image: "Image Test #3",
    show: false,
  },
];

describe("CardList", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<CardList cards={CARDS} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render three items", () => {
    const wrapper = shallow(<CardList cards={CARDS} />);
    expect(wrapper.find(Card)).toHaveLength(CARDS.length);
  });
});
