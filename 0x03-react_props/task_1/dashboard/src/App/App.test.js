import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  
  it("contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
