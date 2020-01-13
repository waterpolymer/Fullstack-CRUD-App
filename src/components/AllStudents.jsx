import React from "react";

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

	return (
		<div>
			<ul>
				{allStudents.map(student => (
					<li
						key={student.id}
					>{`${student.firstName}, ${student.lastName}`}</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudents;
