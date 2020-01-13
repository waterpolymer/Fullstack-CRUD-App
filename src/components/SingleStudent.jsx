import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../store/utilities/student";

let dummyStudent = {
	id: 11,
	firstName: "bob11",
	lastName: "jones",
	email: "bobbyboy1234@yahoo.com",
	imageUrl: "https://i.stack.imgur.com/l60Hf.png",
	gpa: 3.7,
	campusId: 1
};

class SingleStudent extends Component {
	componentDidMount() {
		console.log(this.props.getStudent(1));
	}

	render() {
		let student = dummyStudent;

		return (
			<div>
				{this.props.studentid}
				<img src={student.imageUrl} alt="" />
				<h3>
					{" "}
					{student.firstName} {student.LastName}{" "}
				</h3>
				Email: {student.email} <br />
				GPA: {student.gpa} <br />
				Campus: {student.campusId}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	studentid: window.location.pathname.split("/")[2]
});

const mapDispatchToProps = (dispatch) => ({
	getStudent: id => dispatch(fetchStudent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
