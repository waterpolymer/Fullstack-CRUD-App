import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudent, removeStudent } from "../store/utilities/student";
import { Link } from 'react-router-dom';
import LinkButton from "./LinkButton";
import NavBar from './NavBar';

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
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getStudent(this.props.studentid);
		console.log("props", this.props);
	}

	render() {
		let s = null;
		if (this.props.currStudent) {
			let student = this.props.currStudent;
			s = (
				<div>
					<div className="profile-container">
						<img src={student.imageUrl} alt="" />
						<h3>
							{" "}
							{student.firstName} {student.LastName}{" "}
						</h3>
						Email: {student.email} <br />
						GPA: {student.gpa} <br />
						Campus: {student.campusId}
					</div>
					<Link to="/students" onClick={() => this.props.removeStudent(student.id)}> Remove Student </Link>
					<LinkButton to="/students">All Students</LinkButton>
				</div>
			);
		}

		return <div>{s}</div>;
	}
}

const mapStateToProps = (state, ownProps) => ({
	studentid: parseInt(window.location.pathname.split("/")[2]),
	currStudent: state.studentReducer.currStudent
});

const mapDispatchToProps = dispatch => ({
	getStudent: id => dispatch(fetchStudent(id)),
	removeStudent: student => dispatch(removeStudent(student))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
