import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AddStudentView from "./AddStudentView";

import { addStudentThunk, getCampusesThunk } from "../../actions";

class AddStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			imageUrl:
				"https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg",
			gpa: "",
			campusId: ""
		};
		// get data for dropdown
		if (props.allCampuses.length === 0) {
			props.getAllCampuses();
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
		let student = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			imageUrl: this.state.imageUrl,
			gpa: this.state.gpa,
			campusId: this.state.campusId
		};
		await this.props.addStudent(student);
		const newStudent = this.props.allStudents.slice(-1)[0];
		this.props.history.push(".");
		this.props.history.push(`/students/${newStudent.id}`);
	};

	render() {
		return (
			<div>
				<AddStudentView
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					campusName={this.state.campusName}
					email={this.state.email}
					imageUrl={this.state.imageUrl}
					gpa={this.state.gpa}
					campusId={this.state.campusId}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		allStudents: state.student.allStudents,
		allCampuses: state.campus.allCampuses
	};
};

const mapDispatch = dispatch => {
	return {
		addStudent: student => dispatch(addStudentThunk(student)),
		getAllCampuses: () => dispatch(getCampusesThunk())
	};
};

export default connect(mapState, mapDispatch)(withRouter(AddStudent));
