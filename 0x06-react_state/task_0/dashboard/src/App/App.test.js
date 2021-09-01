/**
 * @jest-environment jsdom
 */

const assert = require('assert');
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import App from './App';


describe('App component test', () => {
  let OArgsApp = null;
  let ArgsApp = null;

  beforeEach(() => {
    OArgsApp = shallow(<App />);
    ArgsApp = shallow(<App isLoggedIn={true} />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    OArgsApp = ArgsApp = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('App renders without crashing', () => {
    assert.equal(OArgsApp.length, 1);
  });
  it('Whether the <Header /> component exists', () => {
    assert.equal(OArgsApp.find('Header').exists(), true);
  });

  it('Whether the <Login /> component exists', () => {
    assert.equal(OArgsApp.find('Login').exists(), true);
  });

  it('Whether the <Footer /> component exists', () => {
    assert.equal(OArgsApp.find('Footer').exists(), true);
  });

  it('Whether the <Login /> is rendered rather than <CourseList />', () => {
    assert.equal(OArgsApp.find('Login').exists(), true);
    assert.equal(OArgsApp.find('CourseList').exists(), false);
  });

  it('Whether the <CourseList /> is rendered rather than <Login />', () => {
    assert.equal(ArgsApp.find('Login').exists(), false);
    assert.equal(ArgsApp.find('CourseList').exists(), true);
  });

  it('Whether the default state for the displayDrawer Prop is false', () => {
    assert.equal(OArgsApp.state('displayDrawer'), false);
  });

  it('Whether both of the handler methods that update displayDrawer\'s state are working', () => {
    const instance = OArgsApp.instance();
    instance.handleDisplayDrawer();
    assert.equal(OArgsApp.state('displayDrawer'), true);
    instance.handleHideDrawer();
    assert.equal(OArgsApp.state('displayDrawer'), false);
  });
});
