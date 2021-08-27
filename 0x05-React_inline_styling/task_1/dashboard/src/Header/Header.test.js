const assert = require('assert');
import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';


describe('<Header />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    wrapper = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Header renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('img tag component renders', () => {
    assert(wrapper.find('img').length, 1);
  });
  it('h1 tag component renders', () => {
    assert(wrapper.find('h1').length, 1);
  });
});
