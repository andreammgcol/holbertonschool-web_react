import assert from  'assert';
import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from 'aphrodite';


describe('Test CourseList component', () => {
  let wrapper = null;
  let wrapper2 = null;

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses} />);
    wrapper2 = shallow(<CourseList />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    wrapper2 = wrapper2 = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  const listCourses = [
    {id: 1, credit: 60, name: 'ES6'},
    {id: 2, credit: 20, name: 'Webpack'},
    {id: 3, credit: 40, name: 'React'},
  ];

  it('CourseList renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('CourseList renders correctly', () => {
    assert.equal(wrapper.find('CourseListRow').length, 5);
  });
  it('Tests that \'No course available yet\' is rendered when listCourses isn\'t passed', () => {
    assert.equal(wrapper2.find('CourseListRow').at(2).html().includes('No course available yet'), true);
  });
});
