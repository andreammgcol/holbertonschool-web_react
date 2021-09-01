const assert = require('assert');
import { shallow } from 'enzyme';
import { getLatestNotifcation } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

import App from '../App/App';
import Notification from './Notifications';

describe('<Notifications />', () => {

  let displayDrawerListNotifs = null;
  let displayDrawerNoArgs = null;
  let noArgs = null;
  let displayDrawerExpandRemove = null;

  let mockedRemove = null;
  let mockedExpand = null;

  beforeEach(() => {
    noArgs                    = shallow(<Notification />);
    displayDrawerNoArgs       = shallow(<Notification displayDrawer={true} />);
    displayDrawerListNotifs   = shallow(<Notification displayDrawer={true}
                                                      listNotifications={listNotifications}
                                        />);
    mockedRemove = jest.fn();
    mockedExpand = jest.fn();
    displayDrawerExpandRemove = shallow(<Notification displayDrawer={true}
                                                      handleDisplayDrawer={mockedExpand}
                                                      handleHideDrawer={mockedRemove}
                                                      listNotifications={listNotifications}
                                        />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    displayDrawerNoArgs
    = displayDrawerListNotifs
    = noArgs
    = displayDrawerExpandRemove
    = null;

    mockedRemove
    = mockedExpand
    = null;

    jest.restoreAllMocks();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotifcation()}}
  ];

  it('Notifications renders without crashing', () => {
    assert.equal(displayDrawerListNotifs.length, 1);
  })
  it('Notifications renders three list items', () => {
    assert.equal(displayDrawerListNotifs.find('ul').children().length, 3);
  });
  it('Notifications renders the text', () => {
    assert.equal(displayDrawerListNotifs.find('p').last().text(), 'Here is the list of notifications');
  });
  it('Whether NotificationItem element renders', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').exists(), true);
  });
  it('Whether menuItem is displayed when <Notification displayDrawer={false}>', () => {
    assert.equal(noArgs.find('.menuItem').exists(), true);
  });
  it('Notifications box is not being displayed when <Notification displayDrawer={false}>', () => {
    assert.equal(noArgs.find('.Notifications').exists(), false);
  });
  it('Whether menuItem is displayed when <Notification displayDrawer={true}>', () => {
    assert.equal(displayDrawerListNotifs.find('.menuItem').exists(), true);
  });
  it('Notifications box is not being displayed when <Notification displayDrawer={true}>', () => {
    assert.equal(displayDrawerListNotifs.find('.Notifications').exists(), true);
  });
  it('Whether Notifications renders correctly if you pass an empty array', () => {
    assert.equal(displayDrawerNoArgs.find('NotificationItem').length, 1);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('No new notification for now'), true);
  });
  it('Whether Notifications renders correctly if you don\'t pass an empty array', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').length, 3);
  });
  it('Whether "Here is the list of notifications" is displayed when listNotifications is empty', () => {
    assert.equal(displayDrawerNoArgs.find('NotificationItem').length, 1);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('No new notification for now'), true);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('Here is the list of notifications'), false);
  });
  it('Whether Notifications called the markAsRead() function that then calls console.log', () => {
    const mockedConsoleLog = console.log = jest.fn();
    const reactInstance = displayDrawerNoArgs.instance();

    const id = 1;
    reactInstance.markAsRead(id);

    const mockedmarkAsRead = reactInstance.markAsRead;

    expect(mockedmarkAsRead).toHaveBeenCalledOnce;
    expect(mockedConsoleLog).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
  });
  it('Whether clicking on the "Your Notifications" p-tag expands the menu', () => {
    displayDrawerExpandRemove.find('.menuItem')
                             .simulate('click');

    expect(mockedExpand).toHaveBeenCalledTimes(1);
  });
  it('Whether clicking on the close button removed the notification menu', () => {
    displayDrawerExpandRemove.find('button')
                             .at(0)
                             .simulate('click');
    expect(mockedRemove).toHaveBeenCalledTimes(1);
  });
});
