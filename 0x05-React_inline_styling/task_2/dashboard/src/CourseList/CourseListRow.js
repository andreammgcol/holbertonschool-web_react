import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	return (
		<tr style={ (isHeader) ? rowColorHeader : rowColor }>
			{
				(isHeader == false) ? <>
										<td className={ css(styles.rowSpacing, styles.rowBorder) }>{textFirstCell}</td>
										<td className={ css(styles.rowSpacing, styles.rowBorder) }>{textSecondCell}</td>
									</>:
											(isHeader == true && textSecondCell) ?
											<>
												<th className={ css(styles.rowSpacing, styles.rowBorder) }>{textFirstCell}</th>
												<th className={ css(styles.rowSpacing, styles.rowBorder) }>{textSecondCell}</th>
											</>:
											<th className={ css(styles.rowSpacing, styles.rowBorder, styles.centerText) } colSpan={2}>{textFirstCell}</th>
			}
    </tr>	
	)
}

const styles = StyleSheet.create({
  rowSpacing: {
    padding: '5px'
  },
  rowBorder: {
    border: '1px solid #dbdbdb',
  },
  centerText: {
    textAlign: 'center',
  }
});

const rowColor = {
	backgroundColor: '#f5f5f5ab'
}

const rowColorHeader = {
	backgroundColor: '#deb5b545'
}

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

CourseListRow.defaultProps = {
	isHeader: false,
};

export default CourseListRow;
