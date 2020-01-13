import React from "react";

const StudentCard = props => {
	const student = props.student;
	return (
		<div className="student-card">
			<img src={student.imageUrl} width="100" height="100"></img>
			<br></br>
			<p>{`${student.firstName}, ${student.lastName}`}</p>
		</div>
	);
};

export default StudentCard;
