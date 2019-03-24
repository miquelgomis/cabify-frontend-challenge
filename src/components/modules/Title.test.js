import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Title from "./Title";

describe("Title", () => {
  test("Rendering a title component", () => {
    const wrapper = shallow(<Title content="Título" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe("Título");
  });
});
