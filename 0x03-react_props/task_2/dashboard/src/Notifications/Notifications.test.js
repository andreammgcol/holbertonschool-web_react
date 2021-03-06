import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";


describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Renders the text: 'Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications p").text()).toEqual("Here is the list of notifications");
  });

  it("Correct renders NotificationItem and html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("NotificationItem")).toBeDefined();
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
