import React, { Component } from "react";
import { connect } from "react-redux";
import "./student.css";

import LinkButton from "../utilities/LinkButton";
import StudentCard from "./StudentCard";

import { getStudentsThunk } from "../../actions";

class AllStudents extends Component {
	componentDidMount() {
		this.props.getAllStudents();
	}

	render() {
		const { allStudents } = this.props;
		let studentCards = null;
		if (allStudents !== undefined && allStudents.length === 0) {
			//SOMEONE STYLE ME WHEN THERE ARE NO COMPUSES
			studentCards = <div> No students currently listed </div>;
		} else if (allStudents) {
			studentCards = allStudents.map((student, index) => (
				<StudentCard key={index} student={student} />
			));
		}

		return (
			<div className="all-students-container">
				<h1>All Students</h1>
				<div className="student-card-container">{studentCards}</div>
				<LinkButton className="button" to="/students/add-student">
					Add Student
				</LinkButton>
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
