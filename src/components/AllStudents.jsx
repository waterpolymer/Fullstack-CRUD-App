import React, { Component } from "react";
import LinkButton from "./LinkButton";
import StudentCard from "./StudentCard";
import { connect } from "react-redux";
import { getStudentsThunk } from "../actions";

class AllStudents extends Component {
	componentDidMount() {
		this.props.getAllStudents();
	}

	render() {
		const { allStudents } = this.props;
		let studentCards = null;
		if (allStudents) {
			studentCards = allStudents.map((student, index) => (
				<StudentCard key={index} student={student} />
			));
		}

		return (
			<div className="all-students-container">
				<h1>All Students</h1>
				<LinkButton to="/">Home</LinkButton>
				<div className="student-card-container">{studentCards}</div>
				<LinkButton to="/students/add-student">Add Student</LinkButton>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	allStudents: state.student.allStudents
});

const mapDispatchToProps = dispatch => ({
	getAllStudents: () => dispatch(getStudentsThunk())
});

// export default AllStudents;
export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
