import React from "react";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";
import { NotificationItemShape } from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, isLoggedIn, listNotifications } = this.props;
    return (
      <>
        <div className={"menuItem " + css(styles.menuItem)}>Your notifications</div>
        { displayDrawer && isLoggedIn && 
          <div className={"Notifications" + css(styles.NotiBox)}>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (<NotificationItem value='No new notification for now' type='no-new' />)}
              {listNotifications.map((item) => (<NotificationItem key={item.id} type={item.type} value={item.value} html={item.html}  markAsRead={this.markAsRead} />))}
            </ul>
            <button
              style={ buttonClose }
              aria-label={'Close'}
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={close} alt="close"
                style={{width: '10px',
                height: '10px'}}/>
            </button>
          </div>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  NotiBox: {
    border: '2px dashed #DE284C',
    padding: '1em',
    width: '400px',
    float: 'right',
    marginRight: '1rem',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      margin: '0',
      padding: '0',
      fontSize: '20px',
    }
  },

  menuItem: {
    textAlign: 'right',
    marginRight: '1rem',
    marginBottom: '0.5rem',
  }
});

const buttonClose = {
  border: 'none',
  float: 'right',
  position: 'relative',
  right: 0,
  top: -120,
  backgroundColor: 'white',
  textAlign: 'right'
}

Notifications.defaultProps = {
  displayDrawer: false,
  isLoggedIn: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({ NotificationItemShape }))
};

export default Notifications;
