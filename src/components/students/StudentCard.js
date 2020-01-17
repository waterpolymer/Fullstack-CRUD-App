import React from "react";
import { Link } from "react-router-dom";
import "./student.css";

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
				>{`${student.firstName} ${student.lastName}`}</Link>
			</div>
		</div>
	);
};

export default StudentCard;
