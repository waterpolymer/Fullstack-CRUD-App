import React, { Component } from "react";
import { connect } from "react-redux";
import "./student.css";

import LinkButton from "../utilities/LinkButton";

import { getStudentThunk } from "../../actions";

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
						<img src={student.imageUrl} width="400" alt="" />
						<h3>
							{student.firstName} {student.LastName}
						</h3>
						Email: {student.email} <br />
						GPA: {student.gpa} <br />
						Campus: {student.campusId}
					</div>
					<LinkButton to="/students">All Students</LinkButton>
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
	getStudent: id => dispatch(getStudentThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
