import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../store/utilities/student";
import LinkButton from "./LinkButton";

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
		console.log(this.props.currStudent);
		if (this.props.currStudent) {
			let student = this.props.currStudent;
			s = (
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
		console.log(this.props.currStudent);

		return <div>{s}</div>;
	}
}

const mapStateToProps = (state, ownProps) => ({
	studentid: parseInt(window.location.pathname.split("/")[2]),
	currStudent: state.studentReducer.currStudent
});

const mapDispatchToProps = dispatch => ({
	getStudent: id => dispatch(fetchStudent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
