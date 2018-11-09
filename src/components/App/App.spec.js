import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  /*
  * -----------------------
  * APP MOUNTS SUCCESSFULLY
  * -----------------------
  */

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
