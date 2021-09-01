import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


function CourseList({ listCourses }) {
	return (
		<table className={css(styles.CourseList, styles.rowBorder)}>
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody>
				{listCourses.length === 0 && <CourseListRow textFirstCell="No course available yet" isHeader={false} />}
				{listCourses.map((course) => (
					<CourseListRow
						key={course.id}
						textFirstCell={course.name}
						textSecondCell={course.credit}
						isHeader={false}
					/>
				))}
			</tbody>
		</table>
	);
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(PropTypes.shape({ CourseShape }))
};

CourseList.defaultProps = {
	listCourses: []
};

const styles = StyleSheet.create({
	CourseList: {
		marginRight: 'auto',
		marginLeft: 'auto',
		marginTop: '20px',
		width: '1100px',
		maxWidth: '80%',
		border: '1px solid gray',
	},
	leftText: {
		textAlign: 'left',
	},
	rowBorder: {
		border: '1px solid gray',
	},
	table: {
		borderCollapse: 'collapse',
	},
});

export default CourseList;
