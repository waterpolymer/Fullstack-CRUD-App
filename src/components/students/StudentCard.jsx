import React from "react";
import { Link } from "react-router-dom";

const StudentCard = props => {
	const student = props.student;
	return (
		<div className="student-card">
			<div className="profile-picture-container">
				<img alt="pfp" src={student.imageUrl} className="profile-picture"></img>
			</div>
			<div className="student-info">
				<Link
					to={"/students/" + student.id}
				>{`Name: ${student.firstName} ${student.lastName}`}</Link>
				<p>{`Campus id: ${student.campusId}`}</p>
			</div>
		</div>
	);
};

export default StudentCard;
