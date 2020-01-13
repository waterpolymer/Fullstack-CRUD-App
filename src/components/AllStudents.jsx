import React from "react";
import LinkButton from "./LinkButton";
import StudentCard from "./StudentCard";

//Dummy data
// let dummyStudent = {
// 	id: 5,
// 	firstName: "bob",
// 	lastName: "jones",
// 	email: "bobbyboy1234@yahoo.com",
// 	gpa: 3.7,
// 	campusId: 1
// };

const AllStudents = props => {
	const { allStudents } = props;
	const studentCards = allStudents.map(student => (
		<StudentCard key={student.id} student={student} />
	));

	// https://stackoverflow.com/questions/32802202/how-to-center-a-flex-container-but-left-align-flex-items
	// cant word-wrap with items left-justified

	return (
		<div className="all-students-container">
			<h1>All Students</h1>
			<LinkButton to="/">Home</LinkButton>
			<div className="student-card-container">{studentCards}</div>
		</div>
	);
};

export default AllStudents;
