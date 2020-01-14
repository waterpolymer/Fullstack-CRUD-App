import React, { Component } from "react";
import { connect } from "react-redux";

import AddStudentView from "./AddStudentView";

import { addStudent } from "../../actions";

class AddStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 20,
			firstName: "flamming",
			lastName: "dumpster",
			email: "test@test.com",
			imageUrl: "https://i.stack.imgur.com/l60Hf.png",
			gpa: "4.0",
			campusId: "20"
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let student = {
			id: this.state.id,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			imageUrl: this.state.imageUrl,
			gpa: this.state.gpa,
			campusId: this.state.campusId
		};
		this.props.addStudent(student);
		console.log(this.props.allStudents);
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
		allStudents: state.student.allStudents
	};
};

const mapDispatch = dispatch => {
	return {
		addStudent: student => dispatch(addStudent(student))
	};
};

export default connect(mapState, mapDispatch)(AddStudent);
