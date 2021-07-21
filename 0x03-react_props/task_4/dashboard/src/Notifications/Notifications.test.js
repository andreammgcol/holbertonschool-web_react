import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";


describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Correct renders NotificationItem and first item html", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find("NotificationItem")).toBeDefined();
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it("Menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it("Menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });
});
