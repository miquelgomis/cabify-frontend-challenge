import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card", () => {
  test("Rendering a simple card with data", () => {
    const wrapper = shallow(
      <Card
        content={{
          fullname: "Miquel Gomis",
          jobdescription: "Front end",
          prefix: "+34",
          phonenumber: "651 52 67 67",
          email: "hola@miquelgomis.es",
          website: "www.miquelgomis.es",
          address: "Calle Palafox, 29, Bajo B"
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe(
      "Miquel GomisFront end+34 651 52 67 67hola@miquelgomis.eswww.miquelgomis.esCalle Palafox, 29, Bajo B"
    );
  });
});
