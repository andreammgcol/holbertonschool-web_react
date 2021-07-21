import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";


function Notifications({ displayDrawer, isLoggedIn }) {
    function handleOnClick() {
        console.log("Close button has been clicked");
    }
	return (
		<>
      <div className="menuItem">Your notifications</div>
      { displayDrawer && isLoggedIn && 
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available"/>
            <NotificationItem type="urgent" value="New resume available"/>
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
          <button
            style={{
              border: 'none',
              float: 'right',
              position: 'relative',
              right: 0,
              top: -120,
              backgroundColor: 'white',
                        textAlign: 'right'
            }}
            aria-label={'Close'}
            onClick={handleOnClick}
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

Notifications.defaultProps = {
  displayDrawer: false,
  isLoggedIn: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

export default Notifications;
