import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../store/utilities/student";
import LinkButton from "./LinkButton";

class SingleStudent extends Component {
	componentDidMount() {
		this.props.getStudent(this.props.studentId);
	}

	render() {
		let studentInfo = null;
		console.log(this.props.currStudent);
		if (this.props.currStudent) {
			let student = this.props.currStudent;
			studentInfo = (
				<div>
					<div>
						<img src={student.imageUrl} alt="" />
						<h3>
							{" "}
							{student.firstName} {student.LastName}{" "}
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
	getStudent: id => dispatch(fetchStudent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
