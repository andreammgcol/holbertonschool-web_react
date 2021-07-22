import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr>
					<th colSpan="2">{textFirstCell}</th>
				</tr>
			);
		} else {
			return (
				<tr>
					<th>{textFirstCell}</th>
					<th>{textSecondCell}</th>
				</tr>
			);
		}
	} else {
		return (
		<>
			<tr>
				<td>{textFirstCell}</td>
				<td>{textSecondCell}</td>
			</tr>
		</>
		);
	}
}

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textSecondCell: PropTypes.string,
	textFirstCell: PropTypes.string.isRequired
};

CourseListRow.defaultProps = {
	isHeader: false,
};

export default CourseListRow;
