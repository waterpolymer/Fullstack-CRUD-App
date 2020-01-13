import React from "react";
import LinkButton from "./LinkButton";
import StudentCard from "./StudentCard";

//Dummy data
let dummyStudent = {
	id: 5,
	firstName: "bob",
	lastName: "jones",
	email: "bobbyboy1234@yahoo.com",
	gpa: 3.7,
	campusId: 1
};

const AllStudents = props => {
	const { allStudents, addStudent } = props;
	const studentCards = allStudents.map(student => (
		<StudentCard student={student} />
	));

	return (
		<div>
			<div>
				<h1>All Students</h1>
			</div>
			<LinkButton to="/">Home</LinkButton>
			<div className="student-card-container">{studentCards}</div>
		</div>
	);
};

export default AllStudents;
