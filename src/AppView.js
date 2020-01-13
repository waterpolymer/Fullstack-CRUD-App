import React from "react";

const AppView = props => {
	//Dummy data
	let dummyStudent = {
		id: 5,
		firstName: "bob",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		gpa: 3.7,
		campusId: 1
	};

	const { allStudents } = props;

	return (
		<div className="App">
			<header className="App-header">
				<ul>
					{allStudents.map(student => (
						<li
							key={student.id}
						>{`${student.firstName}, ${student.lastName}`}</li>
					))}
				</ul>
			</header>
		</div>
	);
};

export default AppView;
