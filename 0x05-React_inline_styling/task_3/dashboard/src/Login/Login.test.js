
const assert = require('assert');
import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from 'aphrodite';


describe('<Login />', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Login />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    wrapper = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Login renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('input tag component renders', () => {
    assert(wrapper.find('input').length, 2);
  });
  it('label tag component renders', () => {
    assert(wrapper.find('label').length, 2);
  });
});
