import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import FormInput from "./FormInput";

describe("FormInput", () => {
  test("Rendering an input component", () => {
    const wrapper = shallow(
      <FormInput
        name="component"
        label="Component Label"
        value="Component Value"
        errors={[]}
        onChangeInputField={e => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
