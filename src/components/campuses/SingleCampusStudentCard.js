import React from "react";
import "./campus.css";

const SingleCampusStudentCard = props => {
	const student = props.student;
	return <div className="campus-card">{student.name}</div>;
};

export default SingleCampusStudentCard;
