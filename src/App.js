import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addStudent, fetchStudentsThunk } from "./store/utilities/student";

// Import view;
import AppView from "./AppView";

class App extends Component {
	componentDidMount() {
		this.props.fetchAllStudents();
	}

	addStudent = student => {
		this.props.addStudent(student);
	};

	render() {
		return (
			<AppView
				allStudents={this.props.allStudents}
				addStudent={this.addStudent}
			/>
		);
	}
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = state => {
	return {
		allStudents: state.studentReducer
	};
};

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = dispatch => {
	return {
		//incrementCounter: (amount) => dispatch(increment(amount)),
		//decrementCounter: (amount) => dispatch(decrement(amount)),
		fetchAllStudents: () => dispatch(fetchStudentsThunk()),
		//removeStudent: (id) => dispatch(removeStudentThunk(id)),
		//addStudent: student => dispatch(addStudentThunk(student))
		addStudent: student => dispatch(addStudent(student))
	};
};

export default connect(mapState, mapDispatch)(App);
