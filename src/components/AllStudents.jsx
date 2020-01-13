import React, { Component } from "react";
import LinkButton from "./LinkButton";
import StudentCard from "./StudentCard";
import { connect } from "react-redux";
import { addStudent, removeStudent, fetchStudentsThunk } from "../thunks";

//Dummy data
let dummyStudent = {
	id: 11,
	firstName: "bob11",
	lastName: "jones",
	email: "bobbyboy1234@yahoo.com",
	imageUrl: "https://i.stack.imgur.com/l60Hf.png",
	gpa: 3.7,
	campusId: 1
};

class AllStudents extends Component {
	componentDidMount() {
		this.props.fetchAllStudents();
	}

	// https://stackoverflow.com/questions/32802202/how-to-center-a-flex-container-but-left-align-flex-items
	// cant word-wrap with items left-justified
	render() {
		const { allStudents, addStudent, removeStudent } = this.props;

		console.log("allstudents", allStudents);
		let studentCards = null;

		if (allStudents) {
			studentCards = allStudents.map(student => (
				<StudentCard key={student.id} student={student} />
			));
		}
		return (
			<div className="all-students-container">
				<h1>All Students</h1>
				<LinkButton to="/">Home</LinkButton>
				<div className="student-card-container">{studentCards}</div>
				<button type="button" onClick={() => addStudent(dummyStudent)}>
					Add Student
				</button>
				<button type="button" onClick={() => removeStudent(dummyStudent.id)}>
					Remove Student
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	allStudents: state.studentReducer.allStudents
});

const mapDispatchToProps = dispatch => ({
	fetchAllStudents: () => dispatch(fetchStudentsThunk()),
	addStudent: student => dispatch(addStudent(student)),
	removeStudent: student => dispatch(removeStudent(student))
});

// export default AllStudents;
export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
