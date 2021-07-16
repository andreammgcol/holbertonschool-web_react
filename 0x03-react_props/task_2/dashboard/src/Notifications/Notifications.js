import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from './NotificationItem';


function Notifications() {
    const strElement = getLatestNotification();
    function handleOnClick() {
        console.log("Close button has been clicked");
    }
	return (
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
                    style={{width: '2%',
                    height: '2%'}}/>
			</button>
		</div>
	);
}

export default Notifications;
