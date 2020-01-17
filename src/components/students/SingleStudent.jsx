import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./student.css";

import LinkButton from "../utilities/LinkButton";

import { getStudentThunk, removeStudentThunk } from "../../actions";

class SingleStudent extends Component {
	constructor(props) {
		super(props);
		props.getStudent(this.props.studentId);
	}

	render() {
		let studentInfo = null;
		if (this.props.currStudent) {
			const student = this.props.currStudent;
			studentInfo = (
				<div>
					<div>
						<Link
							className="button"
							to="/students"
							onClick={() => this.props.removeStudent(student.id)}
						>
							Remove Student
						</Link>
						<LinkButton className="button" to="/students">
							All Students
						</LinkButton>
						<LinkButton
							className="button"
							to={`/students/${student.id}/edit-student`}
						>
							Edit Student
						</LinkButton>
					</div>
					<div>
						<img src={student.imageUrl} width="400" alt="" />
						<h3>
							{student.firstName} {student.lastName}
						</h3>
						Email: {student.email} <br />
						GPA: {student.gpa} <br />
						Campus:{" "}
						{student.campus ? (
							<Link to={`/campuses/${student.campusId}`}>
								{student.campus.name}
							</Link>
						) : (
							"None"
						)}
					</div>
				</div>
			);
		}
		return <div>{studentInfo}</div>;
	}
}

const mapStateToProps = state => ({
	studentId: parseInt(window.location.pathname.split("/")[2]),
	currStudent: state.student.currStudent
});

const mapDispatchToProps = dispatch => ({
	getStudent: id => dispatch(getStudentThunk(id)),
	removeStudent: student => dispatch(removeStudentThunk(student))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
