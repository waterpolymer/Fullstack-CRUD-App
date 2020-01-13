import React from "react";

const StudentCard = props => {
	const student = props.student;
	return (
		<div className="student-card">
			<div className="profile-picture-container">
				<img alt="pfp" src={student.imageUrl} className="profile-picture"></img>
			</div>
			<div className="student-info">
				<p>{`Name: ${student.firstName} ${student.lastName}`}</p>
				<p>{`Campus id: ${student.campusId}`}</p>
			</div>
		</div>
	);
};

export default StudentCard;
