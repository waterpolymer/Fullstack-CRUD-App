import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import EditStudentView from "./EditStudentView";

import {
	editStudentThunk,
	getStudentThunk,
	getCampusesThunk
} from "../../actions";
import "./student.css";

class EditStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			imageUrl: "",
			gpa: "",
			campusId: ""
		};
		// get data for dropdown
		if (props.allCampuses.length === 0) {
			props.getAllCampuses();
		}
	}

	componentDidMount() {
		if (this.props.currStudent !== undefined) {
			this.setState({
				firstName: this.props.currStudent.firstName,
				lastName: this.props.currStudent.lastName,
				email: this.props.currStudent.email,
				imageUrl: this.props.currStudent.imageUrl,
				gpa: this.props.currStudent.gpa,
				campusId: this.props.currStudent.campusId
			});
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let student = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			imageUrl: this.state.imageUrl,
			gpa: this.state.gpa,
			campusId: this.state.campusId
		};

		this.props.editStudent(student, this.props.currStudent.id);
		const newStudent = this.props.currStudent;
		this.props.history.push(".");
		this.props.history.push(`/students/${newStudent.id}`);
	};

	render() {
		let campusNameIdArr = [];
		this.props.allCampuses.forEach(campus => {
			let campusInfo = {};
			campusInfo["name"] = campus["name"];
			campusInfo["id"] = campus["id"];
			campusNameIdArr.push(campusInfo);
		});
		if (this.props.currStudent === undefined) {
			return <div>This student does not exist to edit</div>;
		}

		return (
			<div className="test">
				<EditStudentView
					id={this.props.currStudent.id}
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					campusName={this.state.campusName}
					email={this.state.email}
					imageUrl={this.state.imageUrl}
					gpa={this.state.gpa}
					initialCampusId={this.props.currStudent.campusId}
					campusNameIdArr={campusNameIdArr}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		studentId: parseInt(window.location.pathname.split("/")[2]),
		currStudent: state.student.currStudent,
		allCampuses: state.campus.allCampuses
	};
};

const mapDispatch = dispatch => {
	return {
		editStudent: (student, studentId) =>
			dispatch(editStudentThunk(student, studentId)),
		getStudent: id => dispatch(getStudentThunk(id)),
		getAllCampuses: () => dispatch(getCampusesThunk())
	};
};

export default connect(mapState, mapDispatch)(withRouter(EditStudent));
