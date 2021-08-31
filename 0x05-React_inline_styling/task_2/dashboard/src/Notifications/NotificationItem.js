import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		const { type, html, value, id, markAsRead } = this.props;
		if (value) {
			return <li data-notification-type={type}>{value}</li>;
		} else {
			return <li data-notification-type={type}
					   dangerouslySetInnerHTML={html}
					   onClick={(id) => markAsRead(id)}
					   className={ (type === 'urgent') ? css(styles.red) : css(styles.blue) }/>;
		}
	}
}

const styles = StyleSheet.create({
	red: {
    	color: 'red',
	},
	blue: {
		color: 'blue',
	}
});

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {},
	id: 0,
	markAsRead: () => {}
};

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	id: PropTypes.number,
	markAsRead: PropTypes.func
};

export default NotificationItem;
